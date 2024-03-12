import React, { useState } from "react"
import { ContactList } from "../components/contact-list/contact-list"
import { Menus } from "../components/menus/menus"
import { SearchInput } from "../components/search-input/search-input"
import FloatButton from "../components/float-button/float-button"
import { Layout } from "../components/layout/layout"
import { ToastList } from "../components/toast/toast-list"
import { useToast } from "../helper/useToast"

export const HomePage = () => {
    const [input, setInput] = useState("")
    const { toasts, removeToast, onToast} = useToast()

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }

    return (
        <>
            <Layout title="Contact List">
                <SearchInput input={input} onChange={onChangeInput} />
                <Menus />
                <ContactList query={input} onToast={onToast} />
                <FloatButton />
                <ToastList data={toasts} position="top-right" removeToast={removeToast} />
            </Layout>

        </>
    )
}