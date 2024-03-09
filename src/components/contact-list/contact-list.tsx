import { ContactListItem } from "./contact-list-item"
import "./contact-list.css"

export const ContactList = () => {

    const contacts = [
        {
            id: 1,
            name: "Anya",
            job: "artis",
            description: "penyanyi, artis, dan model"
        },
        {
            id: 2,
            name: "Anya",
            job: "artis",
            description: "penyanyi, artis, dan model"
        },
        {
            id: 3,
            name: "Anya",
            job: "artis",
            description: "penyanyi, artis, dan model"
        },
        {
            id: 4,
            name: "Anya",
            job: "artis",
            description: "penyanyi, artis, dan model"
        },
        {
            id: 5,
            name: "Anya",
            job: "artis",
            description: "penyanyi, artis, dan model"
        },
        {
            id: 6,
            name: "Anya",
            job: "artis",
            description: "penyanyi, artis, dan model"
        },
        {
            id: 7,
            name: "Anya",
            job: "artis",
            description: "penyanyi, artis, dan model"
        },
        {
            id: 8,
            name: "Anya",
            job: "artis",
            description: "penyanyi, artis, dan model"
        },
        {
            id: 9,
            name: "Anya",
            job: "artis",
            description: "penyanyi, artis, dan model"
        }
    ]
    return (
        <>
            <div className="contact__list__container">
                {contacts.map(contact => {
                    return (
                        <ContactListItem {...contact} key={contact.id} />
                    )
                })}
            </div>
        </>
    )
}