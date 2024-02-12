import React, { useState } from 'react';

const Form = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    image: '',
    gender: '',
    skills: [],
  });

  // Function to handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? 
        (checked ? [...prevData[name], value] : prevData[name].filter(lang => lang !== value)) : 
        value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onFormSubmit(formData);
    setFormData({
      name: '',
      email: '',
      website: '',
      image: '',
      gender: '',
      skills: [],
    });
  };




  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" onChange={handleChange} value={formData.name}  name="name" className='input' placeholder='moye mory' required/>

        <label htmlFor="email">Email:</label>
        <input type="email" onChange={handleChange} value={formData.email}  name="email" className='input' placeholder='moyemoye@gmail.com' required/>

        <label htmlFor="website">Website:</label>
        <input type="text" onChange={handleChange} value={formData.website}  name="website" className='input' placeholder='ex. www.mysite.com' required/>

        <label htmlFor="image">Image Link:</label>
        <input type="text" onChange={handleChange} value={formData.image}  name="image" className='input' placeholder='ex. my_pic' required/>

        <div className='gender'>
          <label>Gender:</label>
          <div>
            <input type="radio" name="gender" value="Male" onChange={handleChange}/>
            <label htmlFor="male">Male</label>
          </div>

          <div>
            <input type="radio"  name="gender" value="Female" onChange={handleChange}/>
            <label htmlFor="female">Female</label>
          </div>

          <div>
            <input type="radio"  name="gender" value="Other" onChange={handleChange}/>
            <label htmlFor="other">Other</label>
          </div>
        </div>

        <div className='skills'>
          <label>Skills:</label>
          <div className='items'>
            {/* Map over skills and provide a unique key */}
            {['HTML', 'CSS', 'Javascript', 'SQL', 'Java'].map(skill => (
              <div key={skill}>
                <input type="checkbox" name="skills" value={skill} onChange={handleChange} checked={formData.skills.includes(skill)} />
                <label htmlFor={skill}>{skill}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="buttons">
        <button type="submit">Submit</button>
        <button onClick={()=>{
            location.reload();
        }}>Clear All</button>
        </div>
      </form>
    </>
  );
};

export default Form;
