import React from 'react';
import { Button } from '../button/button';
import { FaRegStar } from "react-icons/fa";
import { Contact } from "../../services/useGetContacts"
import "./card.css"

export const Card: React.FC<Contact> = ({ first_name, last_name, job, description }) => {
    return (
        <div className="card__item__container">
            <div className='card__item__bio'>
                <div className='card__item__name'>
                    <FaRegStar size={30} />
                    <p>
                        {first_name} {last_name}
                    </p>
                </div>
                <p>
                    Job: {job}
                </p>
                <p>
                    Description: {description}
                </p>
            </div>

            <div className='card__item__btn__group'>
                <Button label="Edit" type="edit" />
                <Button label="Delete" type="delete" />
            </div>
        </div>
    )
}