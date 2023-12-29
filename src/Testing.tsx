import React, { useState } from 'react';

interface School {
  schoolid: string;
  schoolName: string;
  rankHistory?: {
    rank: number;
  };
  address?: {
    city: string;
    state: string;
  };
}

const Education = () => {
  const [schoolData, setSchoolData] = useState<School[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [inputAddress, setInputAddress] = useState<string>('');

  const fetchData = async () => {
    try {
      // Use the inputAddress to dynamically update the API URL
      const apiUrl = `https://api.schooldigger.com/v2.0/schools?boundaryAddress=${encodeURIComponent(
        inputAddress
      )}&isInBoundaryOnly=true&includeUnrankedSchoolsInRankSort=true&appID=a4a7dd53&appKey=4c14f3c9555c9a5b61b93c0cbfd7ac1c`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      // Ensure that schoolList is available in the response
      const schools = data.schoolList || [];
      setSchoolData(schools);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again.');
    }
  };

  const renderSchools = () => {
    return (
      <ul>
        {schoolData.map((school) => (
          <li key={school.schoolid}>
            <strong>{school.schoolName}</strong> - Rank: {school.rankHistory?.rank} <br />
            Location: {school.address?.city}, {school.address?.state}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <div>
        <h1>Education</h1>
        {error ? <p>{error}</p> : renderSchools()}

        {/* Input field for entering the address */}
        <input
          type="text"
          placeholder="Enter your address"
          value={inputAddress}
          onChange={(e) => setInputAddress(e.target.value)}
        />

        <button onClick={fetchData}>Fetch Data</button>
      </div>

      <div>
        <p>This is additional information or content you want to display.</p>

        <p>Additional content goes here.</p>
      </div>
    </>
  );
};

export default Education;
