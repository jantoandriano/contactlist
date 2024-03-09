import { ContactListItem } from "./contact-list-item"
import "./contact-list.css"

export const ContactList = () => {

    const contacts = [
        {
            id: 1,
            first_name: "Anya",
            last_name: "Geraldine",
            job: "Artis",
            description: "penyanyi, artis, dan model"
        },
        {
            id: 2,
            first_name: "Anya",
            last_name: "Geraldine",
            job: "Artis",
            description: "penyanyi, artis, dan model"
        },
        {
            id: 3,
            first_name: "Anya",
            last_name: "Geraldine",
            job: "Artis",
            description: "penyanyi, artis, dan model"
        },
        {
            id: 4,
            first_name: "Anya",
            last_name: "Geraldine",
            job: "Artis",
            description: "penyanyi, artis, dan model"
        },
        {
            id: 5,
            first_name: "Anya",
            last_name: "Geraldine",
            job: "Artis",
            description: "penyanyi, artis, dan model"
        },
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