import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetContact } from "../../services/useGetContact";
import { useEditContact } from "../../services/useEditContact";
import "./edit-contact.form.css"

const initFormState = {
    id: 0,
    first_name: '',
    last_name: "",
    job: '',
    description: '',
    favorite: false
}

type Props = {
    onToast: (message: string) => void;
}

export const EditContactForm: React.FC<Props> = ({ onToast }) => {
    let { id } = useParams();
    const { data } = useGetContact(id as string);
    const { mutate } = useEditContact();

    const [formState, setFormState] = useState(initFormState);

    useEffect(() => {
        setFormState({
            id: data?.data.id || 0,
            first_name: data?.data.first_name || '',
            last_name: data?.data.last_name || '',
            job: data?.data.job || '',
            description: data?.data.description || '',
            favorite: data?.data.favorite || false
        })
    }, [data])

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
        <div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <div className="form-row">
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
                <div className="form-row">
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
                <div className="form-row">
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
                <div className="form-row">
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
                <div className="form-row">
                    <button className='button__submit' type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}