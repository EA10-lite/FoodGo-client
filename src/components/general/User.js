import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { useGlobalContext } from "@/context/GlobalContext";
  
  const User = () => {
    const { user } = useGlobalContext();

    return (
      <Avatar className="bg-[#EAE7F9] cursor-pointer w-[40px] h-[40px]">
        <AvatarImage src={user?.picture} alt={user?.name} />
        <AvatarFallback className="text-[#242533]"> { user?.name && (user?.name[0] + user?.name[1])} </AvatarFallback>
      </Avatar>
    )
}
  

export default User;