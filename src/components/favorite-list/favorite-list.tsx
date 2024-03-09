import { useGetContacts } from "../../services/useGetContacts"
import { Card } from "../card/card"
import { Loader } from "../loader/loader"
import "./contact-list.css"

export const FavoriteList = () => {
    const { data: contacts, isLoading } = useGetContacts()

    if (isLoading && !contacts) {
        return (
            <Loader />
        )
    }

    return (
        <>
            <div className="favorite__list__container">
                {contacts?.data.map(contact => {
                    return (
                        <Card {...contact} key={contact.id} />
                    )
                })}
            </div>
        </>
    )
}