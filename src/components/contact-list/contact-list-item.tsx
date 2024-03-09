import React from 'react';
import "./contact-list-item.css"
import { Button } from '../button/button';
import { FaRegStar } from "react-icons/fa";


interface Props {
    id: number;
    name: string;
    job: string;
    description: string;
}

export const ContactListItem: React.FC<Props> = ({  name, job, description }) => {
    return (
        <div className="contact__item__container">
            <div className='contact__item__bio'>
                <div className='contact__item__name'>
                    <FaRegStar size={30} />
                    <p>
                        {name}
                    </p>
                </div>
                <p>
                    Job: {job}
                </p>
                <p>
                    Description: {description}
                </p>
            </div>

            <div className='contact__item__btn__group'>
                <Button label="Edit" type="edit" />
                <Button label="Delete" type="delete" />
            </div>
        </div>
    )
}