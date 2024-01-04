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
  } 
};

  return (
    <>
      <div>
        <h1>Portfolio</h1>
        {properties.map((property, index) => (
          <div key={index} className="portfolio-container1">
            <div>
              <div className="portfolio-container"> 
                <table>
                  <tbody>
                    <img className="placeholder-photo" src="https://vermontframes.com/wp-content/uploads/2020/12/placeholder.png" alt="user" className="user-img"/>
                  </tbody>

                  <tbody>
                    <p><b>{property.abbreviatedAddress}</b></p>
                    <p>Current Value: ${property.zestimate}</p>
                    <p>Last Sold: ${property.lastSoldPrice}</p>
                    <p>Bedrooms: {property.bedrooms}</p>
                    <p>Bathrooms: {property.bathrooms}</p>
                    <p>Living Area: {property.livingArea}</p>
                    <p>Lot Size: {property.lotSize}</p>
                    <p>Year Built: {property.yearBuilt}</p>
                  </tbody>

                  <tbody className='btn-container'>
                  <button className="delete-btn" onClick={() => deleteProperty(property.id)}>Delete</button>                  </tbody>
                </table>
              </div>
            </div>
        </div>
      ))}
    </div>
    </>
  );
};


export default Portfolio;