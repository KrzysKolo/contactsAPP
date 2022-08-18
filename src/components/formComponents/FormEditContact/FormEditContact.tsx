import React, { useEffect, useState } from 'react';
import { Badge, Box, Flex, FormControl, FormLabel, HStack, Input, InputGroup, InputLeftElement, Radio, RadioGroup, Stack, VStack } from '@chakra-ui/react';
import { ContactInFirebase } from '../../../models/InterfaceContactsInFirebase';
import { TbWorld } from 'react-icons/tb';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import InputAddContact from '../../inputs/InputAddContact/InputAddContact';
import ButtonInForm from '../../buttons/ButtonInForm/ButtonInForm';
import { useFormik } from "formik";
import * as yup from "yup";
import { storageImage } from '../../../firebase/config';
import { addAddressesContact, ContactAddresses, stateContactAddresses } from '../../../features/addAddressesToState/addAddressesToStateSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addSocialMediaUrlContact, SocialMediaUrl, stateContactSocialMedia } from '../../../features/addSocialMediaToState/addSocialmediaToStateSlice';
import { RiFacebookBoxFill, RiLinkedinBoxFill, RiGithubFill, RiYoutubeFill, RiInstagramLine } from 'react-icons/ri';
import { setLoading, setSuccess } from '../../../features/firebaseContacts/firebaseContactsSlice';

export type FormEditContactProps = {
  handleEditContact: (
    name?: string | any,
    description?: string |any,
    typeContact?: string |any,
    addresses?: ContactAddresses[] |any,
    socialMedia?: SocialMediaUrl[] |any,
    image?: { name: any, url: any,
  })  => void;
  onClose: () => void;
  onOpen?: () => void;
  contact: ContactInFirebase | any,
};

const FormEditContact: React.FC<FormEditContactProps> = ({ handleEditContact, onClose, contact }) => {

  const dispatch = useDispatch();

  const [name] = useState<string>(contact.name);
  const [email] = useState<string>(contact.addresses.email);
  const [phone] = useState<string>(contact.addresses.phone);
  const [street] = useState<string>(contact.addresses.street);
  const [code] = useState<string>(contact.addresses.code);
  const [city] = useState<string>(contact.addresses.city);
  const [country] = useState<string>(contact.addresses.country);
  const [description] = useState<string>(contact.description);
  const [typeContact, setTypeContact] = useState<string>(contact.typeContact);

  const[facebookUrl] = useState<string>(contact.socialMedia.facebook)
  const[linkedinUrl] = useState<string>(contact.socialMedia.linkedin)
  const[githubUrl] = useState<string>(contact.socialMedia.github)
  const[youtubeUrl] = useState<string>(contact.socialMedia.youtube)
  const[instagramUrl] = useState<string>(contact.socialMedia.instagram)
  const [webUrl] = useState<string>(contact.socialMedia.web)
  const [valueRadio, setValueRadio] = useState<string>("")

  //IMAGES
  const [file, setFile] = useState<File | any>([]);
  const [errorFile, setErrorFile] = useState("");
  const types = ['image/png', 'image/jpeg', 'image/jpg'];
  const [url, setUrl] = useState<string>(contact.image.url)
  const [imageName, setImageName] = useState<string>(contact.image.name)

  const onFileChange = (e: any) => {
     const image = e.target.files[0];
     if (image )  {
      setFile(image);
      setErrorFile('')
    } else {
      setFile([]);
      setErrorFile('Wybierz plik .jpg lub .png');
    }
  }
  useEffect(() => {
    onHandleAdd();
  }, [file]);

  const onHandleAdd = async () => {
   const storageRef = storageImage.ref('images');
   const fileRef = storageRef.child(file.name);
   await fileRef.put(file)
   setImageName(file.name)
   setUrl(await fileRef.getDownloadURL())
 };

 let image: { name: string | any, url: string | any } = {
   name: imageName,
   url: url,
 };

  // ADDRESSES

  const initialValuesAddress  = {
    name: name,
    city: city,
    street: street,
    code: code,
    country: country,
    description: description,
    email: email,
    phone: phone,
  };

  const validationSchema = yup.object({
    name: yup.string().required("Required").min(3, "Nazwa użytkownika powinna zawierać ca najmniej 3 znaki").max(50, "Nazwa użytkownika może mieć max 50 znaków"),
    city: yup.string(),
    code: yup.string().matches(/^[0-9]{2}-[0-9]{3}$/, "Kod musi być w postaci 00-000"),
    street: yup.string(),
    country: yup.string(),
    description: yup.string(),
    email: yup.string().email("Email zawiera błędy"),
    phone: yup.string().matches(/^[0-9]{9}$/, 'Numer telefonu musi skladać sie z cyfr'),
  });

  const onSubmitAddresses = () => {
    const addresses = {
      city: formik.values.city,
      street: formik.values.street,
      code: formik.values.code,
      country: formik.values.country,
      email: formik.values.email,
      phone: formik.values.phone,
    };
    dispatch(addAddressesContact(addresses))
    setValueRadio('');
  };

  const onResetAddresses = () => {
    setValueRadio('');
  };

  const formik = useFormik({
    initialValues: initialValuesAddress,
    validationSchema,
    onSubmit: onSubmitAddresses,
    onReset: onResetAddresses,
  });

  //SOCIAL MEDIA

  const onSubmitSocialMedia = () => {
    const socialMedia = {
      facebook: formikSM.values.facebook,
      linkedin: formikSM.values.linkedin,
      instagram: formikSM.values.instagram,
      github: formikSM.values.github,
      youtube: formikSM.values.youtube,
      web: formikSM.values.web,
    }
    dispatch(addSocialMediaUrlContact(socialMedia));
    setValueRadio('');
  };

  const validationSchemaSM = yup.object({
    facebook: yup.string().matches(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, "Błąd w adresie www"),
    linkedin: yup.string().matches(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, "Błąd w adresie www"),
    instagram: yup.string().matches(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, "Błąd w adresie www"),
    github: yup.string().matches(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, "Błąd w adresie www"),
    youtube: yup.string().matches(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, "Błąd w adresie www"),
    web: yup.string().matches(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, "Błąd w adresie www"),

    });
  const initialValuesSM = {
    facebook: facebookUrl,
    linkedin: linkedinUrl,
    instagram: instagramUrl,
    github: githubUrl,
    youtube: youtubeUrl,
    web: webUrl,
  }

  const formikSM = useFormik({
    initialValues: initialValuesSM,
    validationSchema: validationSchemaSM,
    onSubmit: onSubmitSocialMedia,
  });

  const onResetSocialMedia = () => {
    setValueRadio('');
  };

  const _addresses = useSelector(stateContactAddresses);
  const _socialMedia = useSelector(stateContactSocialMedia);

  const updateContact = () => {
    handleEditContact({ name: formik.values.name, description: formik.values.description, typeContact: typeContact,  addresses: _addresses.length !==0 ? _addresses : {
      city: formik.values.city,
      street: formik.values.street,
      code: formik.values.code,
      country: formik.values.country,
      email: formik.values.email,
      phone: formik.values.phone,
    },
    socialMedia: _socialMedia.length !== 0 ? _socialMedia :
    {
      facebook: formikSM.values.facebook,
    linkedin: formikSM.values.linkedin,
    instagram: formikSM.values.instagram,
    github: formikSM.values.github,
    youtube: formikSM.values.youtube,
    web: formikSM.values.web,}, image })
    dispatch(setSuccess(true));
    dispatch(setLoading(true));
     onClose();
  };

  const closeFormEditContact = () => {
    onClose();
  };
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
      >
        <FormControl id='name'>
          <FormLabel>Imię i Nazwisko</FormLabel>
          <InputAddContact
            placeholder='imię i nawzwisko'
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.errors.name}
            message={formik.errors.name}
            touched={formik.touched.name}
          />
        </FormControl>
        <FormControl id='description'>
          <FormLabel>Stanowisko</FormLabel>
          <InputAddContact
            placeholder='stanowisko'
            value={formik.values.description}
            onChange={formik.handleChange}
            error={formik.errors.description}
            message={formik.errors.description}
            touched={formik.touched.description}
         />
        </FormControl>
        <Box paddingBottom='20px'>
          <RadioGroup onChange={setTypeContact} value={typeContact}>
            <Stack direction='row' justifyContent='space-between'>
              <Radio value='1'>Prywatne</Radio>
              <Radio value='2'>Służbowe</Radio>
            </Stack>
          </RadioGroup>
        </Box>
        <Box>
        <FormControl id="file">
          <FormLabel>Zdjęcie</FormLabel>
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={onFileChange}
            />
        </FormControl>
        </Box>
        <Box paddingBottom='20px'>
          <RadioGroup onChange={setValueRadio} value={valueRadio}>
            <Stack direction='row' justifyContent='space-between'>
              <Radio value='address'>Adres korenspondencyjny</Radio>
              <Radio value='socialMedia'>Social Media</Radio>
            </Stack>
          </RadioGroup>
        </Box>

        {valueRadio === 'address'
          ? (
            <Flex
              flexDirection='column'
              marginBottom='20px'
            >
              <Box
                border='1px solid #edeaea'
                borderRadius='12px'
                padding='10px'
                marginBottom='20px'
              >
                <Badge
                  padding='5px'
                  marginTop='-45px'
                  border='1px solid #edeaea'
                  variant='subtle'
                >
                  Adres korenspondencyjny
                </Badge>
                <FormControl
                  id="country"
                >
                  <FormLabel>Kraj</FormLabel>
                  <InputAddContact
                    placeholder='kraj'
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    error={formik.errors.country}
                    message={formik.errors.country}
                    touched={formik.touched.country}
                  />
                </FormControl>
                <FormControl
                  id="street"
                >
                  <FormLabel>Ulica</FormLabel>
                  <InputAddContact
                    placeholder='ulica'
                    value={formik.values.street}
                    onChange={formik.handleChange}
                    error={formik.errors.street}
                    message={formik.errors.street}
                    touched={formik.touched.street}
                  />
                </FormControl>
                <HStack>
                  <FormControl id="code">
                    <FormLabel>Kod</FormLabel>
                    <InputAddContact
                      placeholder='kod'
                      value={formik.values.code}
                      onChange={formik.handleChange}
                      error={formik.errors.code}
                      message={formik.errors.code}
                      touched={formik.touched.code}
                    />
                  </FormControl>
                  <FormControl
                    id="city"
                  >
                    <FormLabel>Poczta</FormLabel>
                    <InputAddContact
                      placeholder='miasto'
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      error={formik.errors.city}
                      message={formik.errors.city}
                      touched={formik.touched.city}
                    />
                  </FormControl>
                </HStack>

              </Box>

              <Box
                border='1px solid #edeaea'
                borderRadius='12px'
                padding='10px'
              >
                <Badge
                  padding='5px'
                  marginTop='-45px'
                  border='1px solid #edeaea'
                  variant='subtle'
                >
                  Dane teleadresowe
                </Badge>
                <FormControl
                  id="email"
                >
                  <FormLabel>Email</FormLabel>
                  <InputAddContact
                    placeholder='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.errors.email}
                    message={formik.errors.email}
                    touched={formik.touched.email}
                  />
                </FormControl>
                <FormControl
                  id="phone"
                >
                  <FormLabel>Telefon</FormLabel>
                  <InputAddContact
                    placeholder='telefon'
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.errors.phone}
                    message={formik.errors.phone}
                    touched={formik.touched.phone}
                  />
                </FormControl>
              </Box>
              <Flex
                justifyContent='flex-end'
                paddingTop='25px'
                paddingBottom='25px'
              >
                <ButtonInForm title='Dodaj adres' onSubmit={formik.handleSubmit} variant='submit' />
                <ButtonInForm title='Anuluj' onReset={onResetAddresses} variant='reset' />
              </Flex>
            </Flex>
          )
          : (<p></p>)
        }
        {valueRadio === 'socialMedia'
          ? (
            <Box
              border='1px solid #edeaea'
              borderRadius='12px'
              padding='10px'
              marginTop='20px'
            >
              <Badge
                padding='5px'
                marginTop='-45px'
                border='1px solid #edeaea'
                variant='subtle'
              >
                Social Media
              </Badge>
              <InputGroup flexDirection='column'>
                <InputLeftElement
                  pointerEvents='none'
                  marginTop='5px'
                  children={
                    <RiFacebookBoxFill
                      color='gray.300' />
                  }
                />
                <Input
                  type='text'
                  placeholder='https://www....'
                  fontFamily='Orbitron'
                  fontSize='12px'
                  fontWeight='normal'
                  letterSpacing='2px'
                  colorScheme='#d2d1d13e'
                  lineHeight='16px'
                  background='white.100'
                  marginTop='5px'
                  marginBottom='5px'
                  borderRadius='12px'
                  borderBottomWidth='2px'
                  borderBottomColor='orange.300'
                  paddingTop='16px'
                  paddingBottom='16px'
                  cursor='pointer'
                  _hover={{ borderColor: 'blue.500', color: "blue.500" }}
                  value={formikSM.values.facebook}
                  onChange={formikSM.handleChange}
                  name='facebook'
                />
                 { formikSM.errors.facebook && formikSM.touched.facebook &&  <ErrorMessage message={formikSM.errors.facebook} />}
              </InputGroup>
              <InputGroup flexDirection='column'>
                <InputLeftElement
                  pointerEvents='none'
                  marginTop='5px'
                  children={
                    <RiLinkedinBoxFill
                      color='gray.300' />
                  }
                />
                <Input
                  type='text'
                  placeholder='https://www....'
                  fontFamily='Orbitron'
                  fontSize='12px'
                  fontWeight='normal'
                  letterSpacing='2px'
                  colorScheme='#d2d1d13e'
                  lineHeight='16px'
                  background='white.100'
                  marginTop='5px'
                  marginBottom='5px'
                  borderRadius='12px'
                  borderBottomWidth='2px'
                  borderBottomColor='orange.300'
                  paddingTop='16px'
                  paddingBottom='16px'
                  cursor='pointer'
                  _hover={{ borderColor: 'blue.500', color: "blue.500" }}
                  value={formikSM.values.linkedin}
                  onChange={formikSM.handleChange}
                  name='linkedin'
                />
                 { formikSM.errors.linkedin && formikSM.touched.linkedin &&  <ErrorMessage message={formikSM.errors.linkedin} />}

              </InputGroup>
              <InputGroup flexDirection='column'>
                <InputLeftElement
                  pointerEvents='none'
                  marginTop='5px'
                  children={
                    <RiGithubFill
                      color='gray.300' />
                  }
                />
                <Input
                  type='text'
                  placeholder='https://www....'
                  fontFamily='Orbitron'
                  fontSize='12px'
                  fontWeight='normal'
                  letterSpacing='2px'
                  colorScheme='#d2d1d13e'
                  lineHeight='16px'
                  background='white.100'
                  marginTop='5px'
                  marginBottom='5px'
                  borderRadius='12px'
                  borderBottomWidth='2px'
                  borderBottomColor='orange.300'
                  paddingTop='16px'
                  paddingBottom='16px'
                  cursor='pointer'
                  _hover={{ borderColor: 'blue.500', color: "blue.500" }}
                  value={formikSM.values.github}
                  onChange={formikSM.handleChange}
                  name='github'
                />
                 { formikSM.errors.github && formikSM.touched.github &&  <ErrorMessage message={formikSM.errors.github} />}

              </InputGroup>
              <InputGroup flexDirection='column'>
                <InputLeftElement
                  pointerEvents='none'
                  marginTop='5px'
                  children={
                    <RiYoutubeFill
                      color='gray.300' />
                  }
                />
                <Input
                  type='text'
                  placeholder='https://www....'
                  fontFamily='Orbitron'
                  fontSize='12px'
                  fontWeight='normal'
                  letterSpacing='2px'
                  colorScheme='#d2d1d13e'
                  lineHeight='16px'
                  background='white.100'
                  marginTop='5px'
                  marginBottom='5px'
                  borderRadius='12px'
                  borderBottomWidth='2px'
                  borderBottomColor='orange.300'
                  paddingTop='16px'
                  paddingBottom='16px'
                  cursor='pointer'
                  _hover={{ borderColor: 'blue.500', color: "blue.500" }}
                  value={formikSM.values.youtube}
                  onChange={formikSM.handleChange}
                  name='youtube'
                />
                 { formikSM.errors.youtube && formikSM.touched.youtube &&  <ErrorMessage message={formikSM.errors.youtube} />}

              </InputGroup>
              <InputGroup flexDirection='column'>
                <InputLeftElement
                  pointerEvents='none'
                  marginTop='5px'
                  children={
                    <RiInstagramLine
                      color='gray.300' />
                  }
                />
                <Input
                  type='text'
                  placeholder='https://www....'
                  fontFamily='Orbitron'
                  fontSize='12px'
                  fontWeight='normal'
                  letterSpacing='2px'
                  colorScheme='#d2d1d13e'
                  lineHeight='16px'
                  background='white.100'
                  marginTop='5px'
                  marginBottom='5px'
                  borderRadius='12px'
                  borderBottomWidth='2px'
                  borderBottomColor='orange.300'
                  paddingTop='16px'
                  paddingBottom='16px'
                  cursor='pointer'
                  _hover={{ borderColor: 'blue.500', color: "blue.500" }}
                  value={formikSM.values.instagram}
                  onChange={formikSM.handleChange}
                  name='instagram'
                />
                 { formikSM.errors.instagram && formikSM.touched.instagram &&  <ErrorMessage message={formikSM.errors.instagram} />}

              </InputGroup>
              <InputGroup flexDirection='column'>
                <InputLeftElement
                  pointerEvents='none'
                  marginTop='5px'
                  children={
                    <TbWorld
                      color='gray.300' />
                  }
                />
                <Input
                  type='text'
                  placeholder='https://www....'
                  fontFamily='Orbitron'
                  fontSize='12px'
                  fontWeight='normal'
                  letterSpacing='2px'
                  colorScheme='#d2d1d13e'
                  lineHeight='16px'
                  background='white.100'
                  marginTop='5px'
                  marginBottom='5px'
                  borderRadius='12px'
                  borderBottomWidth='2px'
                  borderBottomColor='orange.300'
                  paddingTop='16px'
                  paddingBottom='16px'
                  cursor='pointer'
                  _hover={{ borderColor: 'blue.500', color: "blue.500" }}
                  value={formikSM.values.web}
                  onChange={formikSM.handleChange}
                  name='web'
                />
                 { formikSM.errors.web && formikSM.touched.web &&  <ErrorMessage message={formikSM.errors.web} />}

              </InputGroup>
              <Flex
                justifyContent='flex-end'
                paddingTop='15px'
              >
                <ButtonInForm title='Dodaj Social Media' onSubmit={formikSM.handleSubmit} variant='submit' />
                <ButtonInForm title='Anuluj' onReset={onResetSocialMedia} variant='reset' />
              </Flex>
            </Box>)
          : (<p></p>)
        }
        <Box>
          <Flex
            justifyContent='flex-end'
            paddingTop='15px'
            >
            <ButtonInForm title='Zapisz zmiany' onSubmit={updateContact} variant='submit' />
            <ButtonInForm title='Anuluj' onReset={closeFormEditContact} variant='reset' />
          </Flex>
        </Box>
      </form>
    </>
  )
}

export default FormEditContact;