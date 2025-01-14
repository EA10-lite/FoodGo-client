import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const MultiSelectDropdown = ({ placeholder, options }) => {
  return (
    <Popover className="w-[100%]">
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full">
            <div className="w-full flex items-center justify-between">
                <p> { placeholder } </p>
            </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="min-w-[100%]">
        <div className="">
            <div className="">
                <input 
                    type="search" 
                    className="border border-dark w-full"
                />
            </div>
            { options?.map((option, index)=> (
                <p key={index}> { option?.title } </p>
            ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}


export default MultiSelectDropdown;