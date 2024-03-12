import React, { useState } from "react"
import { Contact } from "../../services/useGetContacts"
import { Card } from "../card/card"
import { EmptyState } from "../empty-state/empty-state"
import { Loader } from "../loader/loader"
import { Prompt } from "../prompt/prompt"
import "./favorite-list.css"
import { useFavorites, useFavoritesDispatch } from "../../reducers/favorites"
import { useNavigate } from "react-router-dom"
import { useToast } from "../../helper/useToast"
import { useDeleteContact } from "../../services/useDeleteContact"
import { filterData } from "../../helper"

type Props = {
    query: string;
}

export const FavoriteList: React.FC<Props> = ({ query }) => {
    const navigate = useNavigate()
    const favorites = useFavorites()
    const dispatch = useFavoritesDispatch()
    const { onToast } = useToast()
    const { mutate } = useDeleteContact()

    const [openPrompt, setOpenPrompt] = useState(false)
    const filteredData = filterData(favorites, query)



    const onDeselectFavorite = (contact: any) => {
        dispatch({
            type: 'remove',
            payload: contact
        })
    }

    const onClick = (id: number) => {
        navigate(`/edit/${id}`)
    }

    const onOpenPrompt = () => {
        setOpenPrompt(true);
    };

    const onClosePrompt = () => {
        setOpenPrompt(false);
    };

    const onDeleteContact = (id: number) => {
        mutate(id)
        onToast("Success Delete Contact")
        onClosePrompt()
    }


    if (!favorites) {
        return (
            <Loader />
        )
    }

    if (!favorites) {
        return (
            <EmptyState message="You haven't added any contact" path="/favorites" />
        )
    }

    return (
        <>
            <div className="favorite__list__container">
                {filteredData.map((contact: Contact) => {
                    return (
                        <div key={contact.id}>
                            <Card contact={contact} onEdit={onClick} onDelete={onOpenPrompt} onSelect={onDeselectFavorite} />
                            <Prompt
                                isOpen={openPrompt}
                                onClose={onClosePrompt}
                                onYes={() => onDeleteContact(contact.id)}
                            />
                        </div>
                    )
                })}
            </div>
        </>
    )
}