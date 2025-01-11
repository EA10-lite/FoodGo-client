import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const FoodImageSlider = ({ images, name }) => {
  return (
    <Carousel className="w-full h-full">
      <CarouselContent>
        {images.map((image, index) => (
            <CarouselItem key={index}>
                <img src={image} alt={name} className="w-full h-full object-cover" /> 
            </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default FoodImageSlider;