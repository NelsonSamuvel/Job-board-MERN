import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ReactElement } from "react";
import { HiOutlineCamera } from "react-icons/hi2";

interface ProfileAvatarType {
  src: string;
  label?: string | ReactElement;
}

const ProfileAvatar = ({
  src = "",
  label = <HiOutlineCamera />,
}: ProfileAvatarType) => {
  return (
    <Avatar className="w-[30px] h-[30px]">
      <AvatarImage src={src} className="object-cover" />
      <AvatarFallback>{label}</AvatarFallback>
    </Avatar>
  );
};

export default ProfileAvatar;
