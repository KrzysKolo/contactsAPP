export type dataMenuType = {
  id: number,
  name: string,
  path: string,
  exact?: boolean,
};

const dataMenu = [
  { id: 1, name: 'Kontakty', path: "/home", exact: true},
  { id: 2, name: 'Twój profil', path: "/profile"},
];
export default dataMenu;