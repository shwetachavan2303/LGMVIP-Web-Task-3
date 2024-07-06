import React, { useState } from 'react';
import './ResistrationForm.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    imagelink: '',
    gender: '',
    skills: {
      html: false,
      css: false,
      javascript: false,
      react: false,
    },
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        skills: {
          ...prevData.skills,
          [name]: checked,
        },
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="title">Registration Form</div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="inputfield">
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="input" required />
          </div>
          <div className="inputfield">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="input" required />
          </div>
          <div className="inputfield">
            <label>Website</label>
            <input type="url" name="website" value={formData.website} onChange={handleChange} className="input" required />
          </div>
          <div className="inputfield">
            <label>Image Link</label>
            <input type="text" name="imagelink" value={formData.imagelink} onChange={handleChange} className="input" required />
          </div>
          <div className="inputfield">
            <label>Gender</label>
            <div className="gender-options">
              <label>
                <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} />
                Male
              </label>
              <label>
                <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} />
                Female
              </label>
              <label>
                <input type="radio" name="gender" value="other" checked={formData.gender === 'other'} onChange={handleChange} />
                Other
              </label>
            </div>
          </div>
          <div className="inputfield">
            <label>Skills</label>
            <div className="skills">
              <label>
                <input type="checkbox" name="html" checked={formData.skills.html} onChange={handleChange} />
                HTML
              </label>
              <label>
                <input type="checkbox" name="css" checked={formData.skills.css} onChange={handleChange} />
                CSS
              </label>
              <label>
                <input type="checkbox" name="javascript" checked={formData.skills.javascript} onChange={handleChange} />
                JavaScript
              </label>
              <label>
                <input type="checkbox" name="react" checked={formData.skills.react} onChange={handleChange} />
                React
              </label>
            </div>
          </div>
          <div className="inputfield">
            <input type="submit" value="Register" className="btn" />
          </div>
        </form>
      </div>

      {submittedData && (
        <div className="id-card">
                      <h4>Lets Grow More...</h4>

          <div className="id-header">
            <img src={submittedData.imagelink} alt="profile" className="id-photo" />
          </div>
          <div className="id-details">
            <h1>{submittedData.name}</h1>
            <h3>{submittedData.gender}</h3>
            <div className="m-info">
              <div className="m-info-group">
                <h4>Email:</h4>
                <p className="info-value email">{submittedData.email}</p>
              </div>
              <div className="m-info-group">
                <h4>Website:</h4>
                <p className="info-value">{submittedData.website}</p>
              </div>
              <div className="m-info-group">
                <h4>Skills:</h4>
                <p className="info-value">
                  {Object.keys(submittedData.skills)
                    .filter(skill => submittedData.skills[skill])
                    .join(', ')}
                </p>
              </div>
            </div>
          </div>
          <div className="id-footer">
            <p>Generated ID Card</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;
