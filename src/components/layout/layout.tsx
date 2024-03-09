import { Outlet } from 'react-router-dom';
import { Navbar } from "../navbar/navbar"
import { SearchInput } from '../search-input/search-input';
import { Menus } from '../menus/menus';

export const Layout = () => {
    return (
        <>
            <Navbar />
            <SearchInput />
            <Menus />
            <Outlet />
        </>
    )
}