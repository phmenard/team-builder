import React, { useState } from 'react';
import { useParams } from "react-router-dom";
//import Team from '../data/team';

import './forms.css';

const AddMemberForm = (props) => {
    const [saved, setSaved] = useState({ status: false, name: "" });
    const [editState, setEditState] = useState(false);
    const [formErrors, setFormErrors] = useState([]);

    const params = useParams();
    //console.log(params);

    let member = null;
    if (props.team) { // if the team is passed we are editing the member
        member = props.team.find((member) => {
            return member.id == params.id;

        });
    }

    const [formData, setFormData] = useState(member ? member : {
        id: props.newId,
        image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.thwaitesfirm.com%2Fwp-content%2Fuploads%2F2019%2F01%2Fdefault-user-icon.jpg&f=1&nofb=1',
        badge: '',
        name: '',
        role: '',
        location: '',
        quote: '',
    });

    const clearForm = () => {
        setFormData({
            id: props.newId + 1,
            image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.thwaitesfirm.com%2Fwp-content%2Fuploads%2F2019%2F01%2Fdefault-user-icon.jpg&f=1&nofb=1',
            badge: '',
            name: '',
            role: '',
            location: '',
            quote: '',
        });
    };

    const handleSubmit = (event) => {
        // validate the form 
        const isFormValid = validateForm(formErrors, setFormErrors, formData);

        event.preventDefault();
        if (isFormValid) {
            setSaved({ status: true, name: formData.name });
            
            props.handleSubmit(formData, params.id ? true : false);
            clearForm();
        }

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
                    value={member ? formData.image : ''}
                    onChange={handleChange}
                />
                <img className="badge" src={formData.badge} />
                <label htmlFor="image">Badge:</label>
                <input
                    id="badge"
                    name="badge"
                    type="text"
                    placeholder="Badge URL"
                    value={member ? formData.badge : ''}
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

            </form>
                {formErrors ?  <p className="form-error">{formErrors}</p> : ''}                
                {saved.status ? <p className="saved">{saved.name} has been saved.</p> : ''}
            </div>
        </div>
    );
}

function validateForm(formErrors, setFormErrors, formData) {
    let validForm = true;
    let err = [];
    
    console.log(formData.name.search(/[0-9]/));
    if(formData.name === '' || formData.name.search(/[0-9]/) != -1){
        err.push(' The name is invalid.');
        validForm = false;
    }

    if(formData.name.search(/http/i) != -1){
        err.push(' The name cannot contain a link.');
        validForm = false;
    }

    if(formData.role === ''){
        err.push(' The role is not valid.');
        validForm = false;
    }

    if(formData.role.search(/http/i) != -1){
        err.push(' The role cannot contain a link.');
        validForm = false;
    }


    if(formData.location === ''){
        err.push(' The location is not valid.');
        validForm = false;
    }

    if(formData.location.search(/http/i) != -1){
        err.push(' The location cannot contain a link.');
        validForm = false;
    }

    if(formData.quote === 'fuck you'){
        err.push(' The quote is not valid.');
        validForm = false;
    }

    console.log(formErrors);

    if(validForm){
        return true;
    }else{
        setFormErrors(err);
        return false;
        
        
    }

}


export default AddMemberForm;