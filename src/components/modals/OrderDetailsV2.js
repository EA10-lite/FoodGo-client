import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { AiOutlineEye } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { User } from "../general";
import { OrderActions } from "../orders";

const OrderDetailsV2 = ({ order }) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <AiOutlineEye className="text-[18px]" />
            </AlertDialogTrigger>
            <AlertDialogContent className="min-w-[800px] h-[80vh]">
                <AlertDialogHeader className="">
                    <AlertDialogTitle className="flex items-center justify-between mb-[12px] text-base font-[700] leading-[22.4px] relative">
                        <div className="">
                            <h4 className="text-sm font-[500]"> Order - #348 </h4>
                            <p className="text-xs text-secondary font-[500]"> 12 Feburary 24, 6:45PM </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <AlertDialogCancel className="bg-secondary bg-opacity-25 shadow-none hover:bg-[none] w-[32px] h-[32px]">
                                <MdClose className="text-xl text-black" />
                            </AlertDialogCancel>
                            <OrderActions />
                        </div>
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        <div className="">
                            
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>

    )
}

export default OrderDetailsV2;
  