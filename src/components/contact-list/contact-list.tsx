import { useGetContacts } from "../../services/useGetContacts"
import { Loader } from "../loader/loader"
import { ContactListItem } from "./contact-list-item"
import "./contact-list.css"

export const ContactList = () => {
    const { data: contacts, isLoading } = useGetContacts()

    if (isLoading && !contacts) {
        return (
            <Loader />
        )
    }

    return (
        <>
            <div className="contact__list__container">
                {contacts?.data.map(contact => {
                    return (
                        <ContactListItem {...contact} key={contact.id} />
                    )
                })}
            </div>
        </>
    )
}