
"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

export function CarousalComponent() {
  return (
    <div className="h-full">
      <div className="h-56 sm:h-64 xl:h-96 2xl:h-96">
        <Carousel slideInterval={5000}>
          <Image src="/slider-images/slider1.jpg" alt="..." width={500} height={300} />
          <Image src="/slider-images/slider2.jpg" alt="..." width={500} height={300} />
          <Image src="/slider-images/slider3.jpg" alt="..." width={500} height={300} />
          <Image src="/slider-images/slider4.jpg" alt="..." width={500} height={300} />
          <Image src="/slider-images/slider5.jpg" alt="..." width={500} height={300} />
        </Carousel>
    </div>
    </div>
    
  );
}
