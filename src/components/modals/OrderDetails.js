import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { AiOutlineEye } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { User } from "../general";

const OrderDetails = ({ order }) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <AiOutlineEye className="text-[18px]" />
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
               <AlertDialogTitle className="flex items-center justify-between mb-[12px] text-base font-[700] leading-[22.4px] border-b border-black border-opacity-25">
                    { order.food.name }
                    <AlertDialogCancel className="border-none shadow-none hover:bg-[none]">
                        <MdClose className="text-xl" />
                    </AlertDialogCancel>
                </AlertDialogTitle>
                <AlertDialogDescription>
                    <div className="mb-[24px] flex items-center justify-between">
                        <div className="">
                            <h4 className="text-sm font-[600] text-black"> Order #{ order._id } </h4>
                            <p className="text-xs font-[500] text-secondary"> 24th Jan. 2024 </p>
                        </div>
                        <div className="">
                            <div className={`flex items-center justify-center gap-2 px-[12px] py-[6px] rounded-[4px] text-white ${ 
                                order?.status?.toLowerCase() === "pending" ? "bg-secondary" :  order?.status?.toLowerCase() === "completed" ? "bg-success" :  order?.status?.toLowerCase() === "cancelled" ? "bg-error" : "bg-secondary"
                            }`}>
                                <span className="w-2 h-2 rounded-full bg-white"></span>
                                <span className="text-xs font-[600]"> { order.status } </span>
                            </div>
                        </div>
                    </div>

                    <div className="mb-[24px]">
                        <div className="flex items-center gap-4">
                            <img src={order.food.picture} className="w-[137px] h-auto rounded-[12px] object-cover"  />
                            <div className="grow flex items-center justify-between">
                                <div className="">
                                    <h4 className="text-sm font-[600] text-black"> { order.food.name } </h4>
                                    <p className="text-xs font-[500] text-secondary"> Price: ${ order.food.price } </p>
                                    <p className="text-xs font-[500] text-secondary"> Quantity: x{ order.quantity } items </p>
                                    <p className="text-xs font-[600] text-secondary"> total = ${ Math.ceil(order.quantity * order.food.price) } </p>
                                </div>
                            </div>
                        </div>

                    </div>
                            
                    <div className="flex items-start justify-between">
                        <div className="">
                            <h4 className="text-sm font-[600] text-black underline mb-[12px]">Ordered By: </h4>
                            <div className="flex items-start gap-3">
                                <User initials={order.user.name.split(" ")[0][0] + order.user.name.split(" ")[1][0]} />
                                <div>
                                    <h4 className="text-sm font-[500] text-black"> { order.user.name } </h4>
                                    <p className="text-xs font-[500] text-secondary"> chris@gmail.com </p>
                                    <p className="text-xs font-[500] text-secondary"> +234 7061326122 </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="text-right">
                            <h4 className="text-sm font-[600] text-black underline mb-[12px]">Address: </h4>
                            <p className="text-xs font-[500] text-secondary"> 7, Shakiru Yusuf Street </p>
                            <p className="text-xs font-[500] text-secondary"> Oreyo Ikorodu, Lagos </p>
                        </div>
                    </div>
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}

export default OrderDetails;
  