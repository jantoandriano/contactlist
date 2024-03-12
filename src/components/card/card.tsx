import { FaStar, FaRegStar } from "react-icons/fa";
import { Contact } from "../../services/useGetContacts"
import { Button } from "../button/button";
import "./card.css"

type Props = {
    contact: Contact;
    onDelete: () => void;
    onEdit: (id: number) => void;
    onSelect: (contact: any) => void;
}

export const Card: React.FC<Props> = ({ contact, onDelete, onEdit, onSelect }) => {
    const { id, first_name, last_name, job, description, favorite } = contact
    return (
        <div className="card__item__container">
            <div className='card__item__bio'>
                <div className='card__item__name'>
                    {favorite ? <FaStar size={30} onClick={() => onSelect(contact)} /> : <FaRegStar size={30} onClick={() => onSelect(contact)} />}
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
                <Button label="Edit" type="edit" onClick={() => onEdit(id)} />
                <Button label="Delete" type="delete" onClick={onDelete} />
            </div>
        </div>
    )
}