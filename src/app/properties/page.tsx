import React from 'react';
import properties from "@/properties.json";

interface Property {
    name: string;
}

const PropertiesPage: React.FC = () => {
    return (
        <div className='px-4 py-6'>
            <div className='container-xl lg:container m-auto px-4 py-6'>
                {properties.length === 0 ? (
                    <p>No properties found</p>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {properties.map((property: Property, index: number) => (
                        <div key={index}>{property.name}</div>
                    ))}
                </div>
                )}
            </div>
        </div>
    );
};


export default PropertiesPage;