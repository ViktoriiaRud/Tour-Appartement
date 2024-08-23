import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Property } from '../types/property';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const getRateDisplay = () => {
    const { rates } = property;
    if (rates.monthly) {
      return `$${rates.monthly.toLocaleString()}/mo`;
    } else if (rates.weekly) {
      return `$${rates.weekly.toLocaleString()}/wk`;
    } else if (rates.nightly) {
      return `$${rates.nightly.toLocaleString()}/night`;
    }
    return 'Price not available';
  };

  return (
    <div className="rounded-xl shadow-md relative">
      {property.images && property.images.length > 0 ? (
        <Image 
          src={`/images/properties/${property.images[0]}`}
          alt={property.name}
          width={600}
          height={400}
          className="rounded-t-xl object-cover w-full h-[250px]"
        />
      ) : (
        <div className="bg-gray-200 h-[250px] rounded-t-xl flex items-center justify-center">
          <p className="text-gray-500">No image available</p>
        </div>
      )}

      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          <div className="text-gray-600">{property.type}</div>
          <h3 className="text-xl font-bold text-green-600">{property.name}</h3>
        </div>
        <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-green-500 font-bold text-right md:text-center lg:text-right">
          {getRateDisplay()}
        </h3>

        <div className="flex justify-center gap-4 text-gray-500 mb-4">
          <p>
            <i className="fa-solid fa-bed"></i> {property.beds}
            <span className="md:hidden lg:inline"> Beds</span>
          </p>
          <p>
            <i className="fa-solid fa-bath"></i> {property.baths}
            <span className="md:hidden lg:inline"> Baths</span>
          </p>
          <p>
            <i className="fa-solid fa-ruler-combined"></i>
            {property.square_feet} <span className="md:hidden lg:inline">$</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
          {property.rates.weekly && <p><i className="fa-solid fa-money-bill"></i> Weekly</p>}
          {property.rates.monthly && <p><i className="fa-solid fa-money-bill"></i> Monthly</p>}
          {property.rates.nightly && <p><i className="fa-solid fa-money-bill"></i> Nightly</p>}
        </div>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            <i className="fa-solid fa-location-dot text-lg text-orange-700"></i>
            <span className="text-orange-700">{property.location.city} {property.location.state}</span>
          </div>
          <Link
            href={`/properties/${property._id}`}
            className="h-[36px] bg-rose-500 hover:bg-rose-700 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};


export default PropertyCard;