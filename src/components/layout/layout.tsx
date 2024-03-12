import { Navbar } from "../navbar/navbar"
import React from 'react';

type Props = {
    title: string;
    children: React.ReactNode
}
export const Layout: React.FC<Props> = ({ title, children }) => {
    return (
        <>
            <Navbar title={title} />
            {children}
        </>
    )
}