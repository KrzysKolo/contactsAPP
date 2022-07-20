export type dataMenuType = {
  id: number,
  name: string,
  path: string,
  exact?: boolean,
};

const dataMenu = [
  { id: 1, name: 'Home', path: "/home", exact: true},
 /*  { id: 2, name: 'Login Form', path: "/"}, */
];
export default dataMenu;