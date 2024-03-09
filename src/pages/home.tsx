import { Navbar } from "../components/navbar/navbar"
import { SearchInput } from "../components/search-input/search-input"
import { Menus } from "../components/menus/menus"
import { ContactList } from "../components/contact-list/contact-list"

export const HomePage = () => {
    return (
        <>
            <Navbar />
            <SearchInput />
            <Menus />
            <ContactList />
        </>
    )
}