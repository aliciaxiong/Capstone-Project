import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import './Portfolio.css';

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
  id: string;
}

const Portfolio: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    if (auth.currentUser?.uid) {
      const userCollection = collection(db, "users", auth.currentUser.uid, "homes");
      const unsubscribe = onSnapshot(userCollection, (snapshot) => {
        setProperties(snapshot.docs.map(doc => doc.data() as Property));
      });

      return () => unsubscribe();
    }
  }, []);

  const deleteProperty = async (abbreviatedAddress: string) => {
  if (auth.currentUser?.uid) {
    const propertyDoc = doc(db, "users", auth.currentUser.uid, "homes", abbreviatedAddress);
    await deleteDoc(propertyDoc);
  } else {
    console.error("Delete Error")
  }
};

  return (
    <>
      <div>
        <h1>Portfolio</h1>
        <div>
          <h2 className="total-equity">Estimated Total Equity: ${Number(properties.reduce((total, property) => total + property.zestimate - property.lastSoldPrice, 0)).toLocaleString()}</h2>
        </div>
        <div className="Info-Container">
          {properties.map((property, index) => (
            <div key={property.id} className="portfolio-container1">
              <div className="portfolio-container"> 
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <img className="placeholder-photo" src="https://vermontframes.com/wp-content/uploads/2020/12/placeholder.png" alt="user" className="user-img"/>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>
                        <p><b>{property.abbreviatedAddress}</b></p>
                        <p>Current Value: ${Number(property.zestimate).toLocaleString()}</p>
                        <p>Last Sold: ${Number(property.lastSoldPrice).toLocaleString()}</p>
                        <p>Bed: {property.bedrooms} | Bath: {property.bathrooms}</p>
                        <p>Living Area: {Number(property.livingArea).toLocaleString()}</p>
                        <p>Lot Size: {Number(property.lotSize).toLocaleString()}</p>
                        <p>Year Built: {property.yearBuilt}</p>
                      </td>
                    </tr>
                  </tbody>
                  <tbody className='btn-container'>
                    <tr>
                      <td>
                        <button className="delete-btn" onClick={() => deleteProperty(property.abbreviatedAddress)}>Delete</button>                  
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};


export default Portfolio;