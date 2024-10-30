import {
  HiBookmark,
  HiBuildingOffice2,
  HiUser,
  HiUserGroup,
} from "react-icons/hi2";

const navItems = [
  {
    name: "Jobs",
    url: "/jobs",
    icon: HiBuildingOffice2,
  },
  {
    name: "Bookmarks",
    url: "/bookmarks",
    icon: HiBookmark,
  },
  {
    name: "Login",
    url: "/login",
    icon: HiUser,
  },
  {
    name: "Register",
    url: "/signup",
    icon: HiUserGroup,
  },
];

const filterTypes = {
  jobType: [
    { name: "Full-time", value: "fullTime" },
    { name: "Part-time", value: "partTime" },
    { name: "Remote", value: "remote" },
    { name: "Freelance", value: "freelance" },
    { name: "Contract", value: "contract" },
  ],
  salary: [
    { value: 2 },
    { value: 4 },
    { value: 6 },
    { value: 8 },
    { value: 10 },
  ],
  experience: [
    { name: "Fresher", value: "fresher" },
    { name: "1 Year", value: "1" },
    { name: "2 Year", value: "2" },
    { name: "3 Year", value: "3" },
    { name: "4 Year", value: "4" },
    { name: "5 Year", value: "5" },
    { name: "5+ Year", value: "6" },
  ],
};

export const searchJobs = [
  { label: "Frontend Developer", value: "frontendDeveloper" },
  { label: "Backend Developer", value: "backendDeveloper" },
  { label: "Full stack Developer", value: "fullStackDeveloper" },
  { label: "Mobile App Developer", value: "mobileAppDeveloper" },
  { label: "Data Analyst", value: "dataAnalyst" },
  { label: "Product Manager", value: "productManager" },
  { label: "UX/UI Designer", value: "ui/uxDesigner" },
  { label: "Content Writer", value: "contentWriter" },
  { label: "Marketing Specialist", value: "marketingSpecialist" },
];

export { navItems, filterTypes };
