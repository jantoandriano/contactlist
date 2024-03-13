import React, { useEffect, useState } from "react";
import { Contact, Contacts, useGetContacts } from "../../services/useGetContacts"
import { Loader } from "../loader/loader"
import "./contact-list.css"
import { filterData, sortData } from "../../helper"
import { EmptyState } from "../empty-state/empty-state";
import { Prompt } from "../prompt/prompt";
import { useNavigate } from "react-router-dom";
import { Card } from "../card/card";
import { useDeleteContact } from "../../services/useDeleteContact";
import { useFavoritesDispatch } from "../../reducers/favorites";
import { Sorting } from "../sorting/sorting";

interface Props {
    query: string;
    orderBy: string;
    onToast: (message: string) => void;
    setOrderBy: React.Dispatch<React.SetStateAction<string>>
}

export const ContactList: React.FC<Props> = ({ query, onToast, orderBy, setOrderBy }) => {
    const navigate = useNavigate()

    const { data, isLoading } = useGetContacts()
    const dispatch = useFavoritesDispatch()
    const { mutate } = useDeleteContact()
    const filteredData = filterData(data?.data as Contacts, query)

    const [openPrompt, setOpenPrompt] = useState(false)
    const [contacts, setContacts] = useState(filteredData)

    useEffect(() => {
        const sortedData = () => {

            const temp = sortData(filteredData as Contacts, orderBy);
            setContacts(temp)

        }
        sortedData()

    }, [orderBy, data])

    const onOrderBy = () => {
        if (orderBy === 'asc') {
            setOrderBy('desc')
        } else {
            setOrderBy('asc')
        }
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
        onClosePrompt()
        onToast('Delete')
    }

    const onSelectFavorite = (contact: Contact) => {
        dispatch({
            type: 'add',
            payload: contact,
        })
        onToast(`${contact.first_name} ${contact.last_name} Add to Favorite`)
    }


    if (isLoading) {
        return (
            <Loader />
        )
    }

    if (!contacts) {
        return (
            <EmptyState message="You haven't added any contact" path="/" />
        )
    }


    return (
        <>
            <div className="contact__list__container">
                <Sorting orderBy={orderBy} onOrderBy={onOrderBy} />
                {contacts.map((contact: Contact) => {
                    return (
                        <div key={contact.id}>
                            <Card contact={contact} onEdit={onClick} onDelete={onOpenPrompt} onSelect={onSelectFavorite} />
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