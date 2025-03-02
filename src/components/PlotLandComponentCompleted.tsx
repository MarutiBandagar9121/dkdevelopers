"use client";
import React, { useCallback } from 'react'
import plotPropertyData from "../data/PlotPropertyDataCompleted.json";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import PropertyCardComponent from "./PropertyCardComponent";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PlotLandComponentCompleted: React.FC = () => {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])
  

  return (
    <div className='py-4'>
      <style jsx>{`
        .embla {
          overflow: hidden;
        }
        .embla__viewport {
          overflow: hidden;
        }
        .embla__container {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: 33%;
        }
        .embla__slide {
          flex: 0 0 100%;
        }
          @media (max-width: 768px) {
          .embla__container {
            grid-auto-columns: 50%;
          }
        }
        @media (max-width: 480px) {
          .embla__container {
            grid-auto-columns: 100%;
          }
        }
      `}</style>
      <div className="heading">
        <h1 className='text-2xl font-bold mx-4 my-8'> Completed Land Projects</h1>
      </div>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {plotPropertyData.map((property, index) => (
              <div key={index}>
                <PropertyCardComponent  property_prop={property} />
              </div>
            ))}
          </div>
        </div>
        <button className="embla__prev m-2" onClick={scrollPrev}>
        <ChevronLeft />
        </button>
        <button className="embla__next" onClick={scrollNext}>
        <ChevronRight />
        </button>
        
      </div>
    </div>
  );
};

export default PlotLandComponentCompleted;