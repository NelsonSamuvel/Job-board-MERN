import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  //   DropdownMenuLabel,
  // DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileAvatar from "./ProfileAvatar";

interface DropdownType {
  trigger?: string;
  label?: string;
  items: [
    {
      name: string;
      icon: ReactElement;
    }
  ];
}

const Dropdown = ({ trigger = "", items }: DropdownType) => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (value) {
      const path = `/${value.toLowerCase()}`;
      navigate(path);
      setValue("");
    }
  }, [value, navigate]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <div className="flex gap-2 items-center px-4 py-2 cursor-pointer">
          <ProfileAvatar src="https://picsum.photos/200/300" />
          {trigger}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {/* <DropdownMenuLabel>{label}</DropdownMenuLabel> */}
        {/* <DropdownMenuSeparator /> */}
        {items.map((item) => (
          <DropdownMenuItem
            className=" text-md cursor-pointer  font-poppins px-4"
            key={item.name}
            onClick={() => setValue(item.name)}
          >
            <div className="flex items-center justify-between gap-4">
              {item.icon}
              <p>{item.name}</p>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
