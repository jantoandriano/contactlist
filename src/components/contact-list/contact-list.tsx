import React from "react";
import { Contact, useGetContacts } from "../../services/useGetContacts"
import { Card } from "../card/card"
import { Loader } from "../loader/loader"
import "./contact-list.css"
import { filterData } from "../../helper"
import { EmptyState } from "../empty-state/empty-state";

interface Props {
    query: string;
}

export const ContactList: React.FC<Props> = ({ query }) => {
    const { data: contacts, isLoading } = useGetContacts()
    const filteredData = filterData(contacts?.data, query)

    if (isLoading) {
        return (
            <Loader />
        )
    }

    if (!filteredData) {
        return (
            <EmptyState message="You haven't added any contact" path="/favorites" />
        )
    }

    return (
        <>
            <div className="contact__list__container">
                {filteredData.map((contact: Contact) => {
                    return (
                        <Card {...contact} key={contact.id} />
                    )
                })}
            </div>
        </>
    )
}