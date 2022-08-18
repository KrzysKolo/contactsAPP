import { Button, Flex, FormControl, FormLabel } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { UserProfileInFirebase } from '../../../models/InterfaceUserProfile';
import { useFormik } from "formik";
import * as yup from "yup";
import { storageImage } from '../../../firebase/config';
import { useDispatch } from 'react-redux';
import InputAddContact from '../../inputs/InputAddContact/InputAddContact';
import ButtonInForm from '../../buttons/ButtonInForm/ButtonInForm';
import { setLoadingUser, setSuccessUser } from '../../../features/userProfile/userProfileSlice';

export type FormEditProfileProps = {

  handleEditProfile: (
    userName?: string | any,
    image?: {
      name: string | any,
      url: string | any,
    }) => void;
  onOpen?: () => void;
  item: UserProfileInFirebase;
  onClose: () => void;
}

const FormEditProfile: React.FC<FormEditProfileProps> = ({ onClose, item, handleEditProfile}) => {

  const [userName] = useState<string>(item.userName);
  const dispatch = useDispatch();

    //IMAGES
    const [file, setFile] = useState<File | any>([]);
    const [errorFile, setErrorFile] = useState("");
    const types = ['image/png', 'image/jpeg', 'image/jpg'];
    const [url, setUrl] = useState<string | any>(item.photo)
    const [imageName, setImageName] = useState<string | any>('')

  console.log(url);

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
   const initialValues  = {
     userName: userName,

  };

  const validationSchema = yup.object({
    userName: yup.string(),

  });

  const onSubmit = () => {
    updateProfile();
   };

    const formik = useFormik({
      initialValues: initialValues,
      validationSchema,
      onSubmit: onSubmit,
    });

    const updateProfile = () => {
      handleEditProfile({ userName: formik.values.userName, photo: url })
      dispatch(setSuccessUser(true));
      dispatch(setLoadingUser(true));
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
        <FormControl id="userName">
          <FormLabel>Twój NICK</FormLabel>
          <InputAddContact
            placeholder='Twoja nazwa'
            value={formik.values.userName}
            onChange={formik.handleChange}
            error={formik.errors.userName}
            message={formik.errors.userName}
            touched={formik.touched.userName}
          />
        </FormControl>
        <FormControl id="file">
          <FormLabel>Zdjęcie</FormLabel>
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={onFileChange}
            />
        </FormControl>
        <Flex
          justifyContent='flex-end'
           paddingTop='25px'
          paddingBottom='25px'>
           <ButtonInForm title='Zapisz zmiany' onSubmit={updateProfile} variant='submit' />
           <ButtonInForm title='Anuluj' onReset={closeFormEditContact} variant='reset' />
         </Flex>
      </form>
    </>
  )
}

export default FormEditProfile;

