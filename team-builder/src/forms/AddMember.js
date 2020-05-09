import React, { useState } from 'react';

import './forms.css';

const AddMemberForm = (props) => {
        const [saved, setSaved] = useState({status:false, name: ""});
    
        const [formData, setFormData] = useState({
            id: Date.now(),
            image: '',
            name: '',
            role: '',
            location: '',
            quote: '',
        });

        const clearForm = () => {
            setFormData({  id: Date.now(),
                image: '',
                name: '',
                role: '',
                location: '',
                quote: '',
            });
        };

        const handleSubmit = (event) => {
            setSaved({status: true, name: formData.name});
            event.preventDefault();
            props.handleSubmit(formData);
            clearForm();
            
          };

          const handleChange = (event) => {
            setFormData({ ...formData, 
                [event.target.image]: event.target.value,
                [event.target.name]: event.target.value, 
                [event.target.role]: event.target.value,
                [event.target.location]: event.target.value, 
                [event.target.quote]: event.target.value,
            });

            setSaved({status: false, name: formData.name});
          };  


        
        return (
            <div className="myBody">
                <div className="form-container"><form onSubmit={handleSubmit}>
                    <label htmlFor="image">Image:</label>
                    <input
                        id="image"
                        name="image"
                        type="text"
                        placeholder="Image URL"
                        value={formData.image}
                        onChange={handleChange}
                    />
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Member name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <label htmlFor="role">Role:</label>
                    <input
                        id="role"
                        name="role"
                        type="text"
                        placeholder="Member role"
                        value={formData.role}
                        onChange={handleChange}
                    />
                    <label htmlFor="location">Location:</label>
                    <input
                        id="location"
                        name="location"
                        type="text"
                        placeholder="Member location"
                        value={formData.location}
                        onChange={handleChange}
                    />
                    <label htmlFor="quote">Quote:</label>
                    <textarea
                        id="quote"
                        name="quote"
                        type="text"
                        placeholder="Member quote"
                        value={formData.quote}
                        onChange={handleChange}
                    />
                    <button type="submit">Save!</button>
                    {saved.status ? <p>Member {saved.name} has been saved.</p> : ''}
                    </form></div>
            </div>
        );
    }


    export default AddMemberForm;