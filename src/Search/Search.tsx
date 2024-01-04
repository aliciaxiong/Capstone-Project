import "./Search.css";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../firebase";

// Define Interface
interface Address {
  city: string;
  state: string;
  streetAddress: string;
  zipcode: string;
}

export interface Property {
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

// interface SearchProps {
//   addToPortfolio: (property: Property) => void;
// } 

//State Input Value and Fetched Info
const Search: React.FC = ({  }) => {
  const [search_Input, setSearch_Input] = useState("");
  const [properties, setProperties] = useState<Property[]>([]);
  const [portfolio, setPortfolio] = useState<Property[]>([]);

  // Handle Input Changes 
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch_Input(event.target.value);
  };

  // Add Property to Firebase
  const addtoPort = async () => {
    if (auth.currentUser?.uid && properties.length > 0) {
      const property = properties[0];
      setPortfolio((prevPortfolio) => [...prevPortfolio, property]);
      alert('Property has been added to the portfolio');

      const userCollection = collection(db, "users", auth.currentUser.uid, "homes");
      await addDoc(userCollection, {
        abbreviatedAddress: property.abbreviatedAddress,
        address: property.address,
        bathrooms: property.bathrooms,
        bedrooms: property.bedrooms,
        yearBuilt: property.yearBuilt,
        zestimate: property.zestimate,
        lotSize: property.lotSize,
        lastSoldPrice: property.lastSoldPrice,
        livingArea: property.livingArea,
      });
    }
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

                <div className="propertydetails">
                  <h2>Property Details</h2>
                  <p><b>{property.abbreviatedAddress}, {property.address.city}, {property.address.state} {property.address.zipcode}</b> </p>
                  <p>Current Value: ${Number(property.zestimate).toLocaleString()}</p>
                  <p>Last Sold: ${property.lastSoldPrice ? Number(property.lastSoldPrice).toLocaleString() : 'No Information Available'}</p>
                  <p>Bedroom: {property.bedrooms ?? 'No Information Available'}</p>
                  <p>Bathroom: {property.bathrooms ?? 'No Information Available'}</p>
                  <p>Living Area: {property.livingArea ? Number(property.livingArea).toLocaleString() : 'No Information Available'} SQFT</p>
                  <p>Lot Size: {property.lotSize ? Number(property.lotSize).toLocaleString() : 'No Information Available'} SQFT</p>                  <p>Year Built: {property.yearBuilt ?? 'No Information Available'}</p>
                  <button className="Add-Btn" onClick={() => addtoPort()}>Add To Portfolio</button>                
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
export default Search;
