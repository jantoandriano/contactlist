import React, { useState } from 'react';
import "./add-contact-form.css"
import { useAddContact } from '../../services/useAddContact';


const initFormState = {
    first_name: '',
    last_name: '',
    job: '',
    description: ''
}

type Props = {
    onToast: (message: string) => void
}


export const AddContactForm: React.FC<Props> = ({ onToast }) => {
    const { mutate } = useAddContact()
    const [formState, setFormState] = useState(initFormState);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onToast("Success Edit Contact")
        mutate(formState)
        setFormState(initFormState);
    };


    return (

        <form onSubmit={(event) => handleSubmit(event)}>
            <div className="form__item">
                <label htmlFor="first_name">First Name</label>
                <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={formState.first_name}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form__item">
                <label htmlFor="last_name">Last Name</label>
                <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={formState.last_name}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form__item">
                <label htmlFor="job">Job</label>
                <input
                    type="text"
                    id="job"
                    name="job"
                    value={formState.job}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form__item">
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={formState.description}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form__item">
                <button className='button__submit' type="submit">Submit</button>
            </div>
        </form>
    );
};
