import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Userdata from './components/Userdata';

function App() {
  // Define formData state
  const [formData, setFormData] = useState([]);

  // Define function to handle form submission
  const handleFormSubmit = (newFormData) => {
    setFormData(prevData => {
      return [...prevData, newFormData];
    });
  };

  return (
    <>
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="register">
            <h1>Registration Form</h1>
            {/* Pass handleFormSubmit as prop to Form */}
            <Form onFormSubmit={handleFormSubmit} />
          </div>
          <div className="userdata">
            <h1>Enrolled Students</h1>
            
            {formData.map((formItem, index) => (
              <Userdata 
                key={index}
                name={formItem.name}
                email={formItem.email}
                website={formItem.website}
                image={formItem.image}
                gender={formItem.gender}
                skills={formItem.skills}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
