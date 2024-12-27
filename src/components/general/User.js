import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  
  const User = ({ initials, img }) => {
    return (
      <Avatar className="bg-[#EAE7F9] cursor-pointer w-[40px] h-[40px]">
        <AvatarImage src={img} alt={initials} />
        <AvatarFallback className="text-[#242533]"> { initials } </AvatarFallback>
      </Avatar>
    )
}
  

export default User;