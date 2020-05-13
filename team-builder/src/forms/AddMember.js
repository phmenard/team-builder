import React, { useState } from 'react';
import { useParams } from "react-router-dom";
//import Team from '../data/team';

import './forms.css';

const AddMemberForm = (props) => {
    const [saved, setSaved] = useState({ status: false, name: "" });
    const [formErrors, setFormErrors] = useState([]);

    const params = useParams();
    //console.log(params);

    let member = null; // if member is not null we know its an edit.
    if (props.team) { // if the team is passed we are editing the member
        member = props.team.find((member) => {
            return member.id == params.id; // this breaks with ===

        });
    }

    const [formData, setFormData] = useState(member ? member : {// if member is not null we know its an edit.
        id: props.newId,
        image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.thwaitesfirm.com%2Fwp-content%2Fuploads%2F2019%2F01%2Fdefault-user-icon.jpg&f=1&nofb=1',
        badge: '',
        name: '',
        role: '',
        location: '',
        quote: '',
        email: '',
    });

    const clearForm = () => {
        setFormData({
            id: props.newId + 1, // set a new id for the new member
            image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.thwaitesfirm.com%2Fwp-content%2Fuploads%2F2019%2F01%2Fdefault-user-icon.jpg&f=1&nofb=1',
            badge: '',
            name: '',
            role: '',
            location: '',
            quote: '',
            email: '',
        });
    };

    const handleSubmit = (event) => {
        // validate the form 
        const isFormValid = validateForm(setFormErrors, formData);
        
        event.preventDefault();
        
        // validate the form
        if (isFormValid) {
            setSaved({ status: true, name: formData.name }); // set up the saved notice

            props.handleSubmit(formData, params.id ? true : false);
            if (!member) { // only clear the form if we are not in edit mode
                clearForm();
            }
        }

        console.log(formErrors);

    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.image]: event.target.value,
            [event.target.badge]: event.target.value,
            [event.target.name]: event.target.value,
            [event.target.role]: event.target.value,
            [event.target.location]: event.target.value,
            [event.target.quote]: event.target.value,
            [event.target.email]: event.target.value,
        });

        setSaved({ status: false, name: formData.name });
        setFormErrors([]);
    };

    return (
        
        <div className="myBody">
            <div className="form-container"><form onSubmit={handleSubmit}>
                <img src={formData.image} />
                <label htmlFor="image">Image:</label>
                <input
                    id="image"
                    name="image"
                    type="text"
                    placeholder="Image URL"
                    value={formData.image}
                    onChange={handleChange}
                />
                <img className="badge" src={formData.badge} />
                <label htmlFor="image">Badge:</label>
                <input
                    id="badge"
                    name="badge"
                    type="text"
                    placeholder="Badge URL"
                    value={formData.badge}
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
                <label htmlFor="Email">Email:</label>
                <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Member email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <button type="submit">Save!</button>

            </form>

                {formErrors ? <p className="form-error">{formErrors}</p> : ''}
                {saved.status ? <p className="saved">{saved.name} has been {member ? 'updated.' : 'saved.'}</p> : ''}
            </div>

        </div>



    );
}


function validateForm(setFormErrors, formData) {
    let err = [];

    // check for a valid image
    
    // check for blank name or name containing numbers
    if (formData.name === '' || formData.name.search(/[0-9]/) !== -1) {
        err.push(' The name is invalid.');
    }

    // don't allow links in name
    if (formData.name.search(/http/i) !== -1) {
        console.log("Http");
        err.push(' The name cannot contain a link.');
    }

    //check for blank role
    if (formData.role === '') {
        err.push(' The role is not valid.');
        
    }

    // don't allow links in role
    if (formData.role.search(/http/i) !== -1) {
        err.push(' The role cannot contain a link.');
        
    }

    // check for blank location
    if (formData.location === '') {
        err.push(' The location is not valid.');
        
    }

    // don't allow links in location
    if (formData.location.search(/http/i) !== -1) {
        err.push(' The location cannot contain a link.');
        
    }

    // check for bad quote *** this keeps breaking the handleSubmit
    /*if (formData.qoute.search(/http/i) != -1) {
        err.push(' The quote cannot contain a link.');
        
    }*/

    if (formData.quote.length > 100) {
        console.log(formData.quote.length);
        err.push(' The quote is long.');
        
    }

    // check for valid emial
    if (formData.email.search(/[@][.com]['']/g) !== -1) {
        err.push(' The email is invalid.');
        
    }

    if (err.length === 0) {
        return true;
    } else {
        setFormErrors(err);
        return false;
    }

}

const validateName = function(name, err){
    

}


export default AddMemberForm;