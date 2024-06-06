import React, { useState } from 'react';
import "./formulaire.css"
function FormPage() { 
    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        age: '',
        email: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const validate = () => {
        let formErrors = {};
        if (!form.first_name) formErrors.firstName = "First name is required";
        if (!form.last_name) formErrors.lastName = "Last name is required";
        if (!form.age || form.age < 18) formErrors.age = "Age must be at least 18";
        if (!form.email) formErrors.email = "Email is required";
        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length === 0) {
            console.log('Form submitted:', form);
        } else {
            setErrors(formErrors);
        }
    };

return (
       

    <div class="container">
        <h1>CV Form</h1>
        <form id="cvForm" onSubmit="{handleSubmit}">
            <div class="section">
                <h2>Personal Information</h2>
                <div class="content">
                    <div>
                        <label for="first_name" class="required">First Name:</label>
                        <input type="text" id="first_name" name="first_name" value={form.first_name} onChange={handleChange} required/>
                        {errors.first_name && <span className="error">{errors.first_name}</span>}
                        </div>
                    <div>
                        <label for="last_name" class="required">Last Name:</label>
                        <input type="text" id="last_name" name="last_name" value={form.last_name} onChange={handleChange} required/>
                        {errors.last_name && <span className="error">{errors.last_name}</span>}
                        </div>
                </div>
                <div class="content">
                    <div>
                        <label for="age" class="required">Age:</label>
                        <input type="number" id="age" name="age" value={form.age} onChange={handleChange} required min="18"/>
                        {errors.age && <span className="error">{errors.age}</span>}
                    </div>
                    <div>
                        <label for="email" class="required">Email:</label>
                        <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required/>
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                </div>
                <label for="address" class="required">Address:</label>
                <input type="text" id="address" name="address" required maxlength="100"/>
            </div>
            
            <div class="section" id="educationSection">
                <h2>Education</h2>
                <div class="education-entry">
                    <div class="content">
                        <div>
                            <label for="degree">Degree:</label>
                            <input type="text" name="degree"/>
                        </div>
                        <div>
                            <label for="institution">Institution:</label>
                            <input type="text" name="institution"/>
                        </div>
                    </div>
                    <div class="content">
                        <div>
                            <label for="graduation_date">Graduation Date:</label>
                            <input type="date" name="graduation_date"/>
                        </div>
                    </div>
                    <span class="remove-btn" onclick="removeEducationEntry(this)">Remove</span>
                </div>
                <span class="add-btn" onclick="addEducationEntry()">Add Education</span>
            </div>
            
            <div class="section" id="experienceSection">
                <h2>Professional Experience</h2>
                <div class="experience-entry">
                    <div class="content">
                        <div>
                            <label for="company">Company:</label>
                            <input type="text" name="company"/>
                        </div>
                        <div>
                            <label for="position">Position:</label>
                            <input type="text" name="position"/>
                        </div>
                    </div>
                    <div class="content">
                        <div>
                            <label for="start_date">Start Date:</label>
                            <input type="date" name="start_date"/>
                        </div>
                        <div>
                            <label for="end_date">End Date:</label>
                            <input type="date" name="end_date"/>
                        </div>
                    </div>
                    <label for="responsibilities">Responsibilities:</label>
                    <textarea name="responsibilities" rows="4" cols="50"></textarea>
                    <span class="remove-btn" onclick="removeExperienceEntry(this)">Remove</span>
                </div>
                <span class="add-btn" onclick="addExperienceEntry()">Add Experience</span>
            </div>
            
            <div class="section">
                <h2>Skills</h2>
                <label for="skills">Describe your skills:</label>
                <textarea id="skills" name="skills" rows="4" cols="50"></textarea>
            </div>
            
           
            <div class="section">
                <h2>Languages</h2>
                <label for="languages">Languages you speak:</label>
                <input type="text" id="languages" name="languages"/>
            </div>
            
            <div class="section">
                <h2>Other Information</h2>
                <label for="other_info">Other Relevant Information:</label>
                <textarea id="other_info" name="other_info" rows="4" cols="50"></textarea>
            </div>
            
            <input type="submit" id="submitBtn" value="Submit"/>
        </form>
    </div>
   



);

}

export default FormPage;