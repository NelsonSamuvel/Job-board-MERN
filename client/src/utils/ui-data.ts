import {
  HiBookmark,
  HiBuildingOffice2,
  HiUser,
  HiUserGroup,
} from "react-icons/hi2";

const navItems = [
  {
    id: Date.now(),
    name: "Jobs",
    url: "/jobs",
    icon: HiBuildingOffice2,
  },
  {
    id: Date.now(),
    name: "Bookmarks",
    url: "/bookmarks",
    icon: HiBookmark,
  },
  {
    id: Date.now(),
    name: "Login",
    url: "/login",
    icon: HiUser,
  },
  {
    id: Date.now(),
    name: "Register",
    url: "/signup",
    icon: HiUserGroup,
  },
];

export { navItems };
