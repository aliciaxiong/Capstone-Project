import "./Search.css";
import { useState } from "react";
import houseimage from "../images/houseimage.jpg";

// Define Interface
interface Address {
  city: string;
  state: string;
  streetAddress: string;
  zipcode: string;
}

interface Property {
  abbreviatedAddress: string;
  address: Address;
  bathrooms: number;
  bedrooms: number;
  yearBuilt: number;
  zestimate: number;
  lotSize: number;
  lastSoldPrice: number;
  livingArea: number;
}

//State Input Value and Fetched Info
const Search = () => {
  const [search_Input, setSearch_Input] = useState("");
  const [properties, setProperties] = useState<Property[]>([]);

  // Handle Input Changes 
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch_Input(event.target.value);
  };

  // Fetch Property Info after submission 
  const getProperty = async () => {
    const response = await fetch(`https://zillow56.p.rapidapi.com/search_address?address=${search_Input}`, {
      method: "GET", 
      headers: {
        'X-RapidAPI-Key': "9fdc2053c1msh88688d8bdf9733fp186fcdjsn254d5049c897",
        'X-RapidAPI-Host': 'zillow56.p.rapidapi.com'
        }
    });

    const data = await response.json();
    console.log(data);
    setProperties([data]);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getProperty();
  };

  return (
    <>
      <div className="SearchContainer">
        <form className="propertyAddressContainer" onSubmit={handleSubmit}>
          <input className="input-container" type="text" placeholder ="Property Address" value={search_Input} onChange={handleInput}/>
          <div>
            <button className="search-btn"type="submit">Search</button>
          </div>
        </form> 

        {properties.length > 0 && (
          <div className="InfoContainer">
            {properties.map((property, index) => (
              <div key={index} className="PropertyContainer">

                <div className="placeholdercontainer">
                  <img className="placeholderimage1" src={houseimage} alt="logo" />
                </div>

                <div className="propertydetails">
                  <p><b>{property.abbreviatedAddress}, {property.address.city}, {property.address.state} {property.address.zipcode}</b> </p>
                  <p>Current Value: ${property.zestimate}</p>
                  <p>Last Sold: ${property.lastSoldPrice ?? 'No Information Available'}</p>
                  <p>Bedroom: {property.bedrooms ?? 'No Information Available'}</p>
                  <p>Bathroom: {property.bathrooms ?? 'No Information Available'}</p>
                  <p>Living Area: {property.livingArea ?? 'No Information Available'}</p>
                  <p>Lot Size: {property.lotSize ?? 'No Information Available'} SQFT </p>
                  <p>Year Built: {property.yearBuilt ?? 'No Information Available'}</p>
                </div>
              </div>
            ))}
            <button className="Add-Btn">Add To Portfolio</button>
          </div>
        )}
      </div>
    </>
  );
}
export default Search;
