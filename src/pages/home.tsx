import React, { useState } from "react"
import { ContactList } from "../components/contact-list/contact-list"
import { Menus } from "../components/menus/menus"
import { SearchInput } from "../components/search-input/search-input"

export const HomePage = () => {
    const [input, setInput] = useState("")

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }

    return (
        <>
            <SearchInput input={input} onChange={onChangeInput} />
            <Menus />
            <ContactList query={input} />
        </>
    )
}