import { ILinks } from '../interfaces/RouteLink';

export const NavLinks: ILinks[] = [
  { name: 'Admin', to: '/' },
  {
    name: 'Company',
    to: '/company'
  },
  { name: "Users", to: "/users" },
  {name:"Product",to:"/product"},
  {name:"Customer", to:"/customer"},
  { name: "Gst", to: "/gst" },
  { name: "Category and subcategy", to: "/category-subcategory" },
  { name: "Invoice", to: "/invoice" },
];
