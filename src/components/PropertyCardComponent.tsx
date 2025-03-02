import { PropertyCardProps } from "interfaces/PropertyCardProps";
import Image from "next/image";

type Props = {
    property_prop: PropertyCardProps;
};

export default function PropertyCardComponent({ property_prop }: Props){
    return(
        <div className="embla__slide max-w-sm border border-gray-200  w-72 relative z-10 px-6 py-4 m-4">
                {/* Label */}
                <div className="absolute -top-4 left-5 z-50">
                  <span className="bg-red-500 text-white px-2 py-1 text-sm">
                    {property_prop.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="pb-2 text-xl font-semibold">{property_prop.title}</h3>

                {/* Image */}
                <div className="relative h-48">
                  <Image
                    src={property_prop.image || "/placeholder.svg"}
                    alt={property_prop.title}
                    className="w-full h-full object-cover"
                    width={300}
                    height={200}
                  />
                </div>

                {/* Details */}
                <div className="pt-2 space-y-2">
                  <div className="space-y-1 text-xs">
                    <div className="flex gap-2">
                      <span className="font-semibold">Typology:</span>
                      <span className="text-gray-600">{property_prop.typology}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-semibold">Location:</span>
                      <span className="text-gray-600">{property_prop.location}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-semibold">Price:</span>
                      <span className="text-gray-600">{property_prop.price}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-semibold">Status:</span>
                      <span className={`text-gray-600 rounded-lg px-2 ${property_prop.status === 'Completed' ? 'bg-lime-300' : 'bg-amber-300'}`}>{property_prop.status}</span>
                      
                    </div>
                  </div>

                  {/* Button */}
                  <button
                    onClick={property_prop.onKnowMore}
                    className="text-xs bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                  >
                    Know More
                  </button>
                </div>
              </div>
    );
}