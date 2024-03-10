import React from 'react'
import "./search-input.css"

interface Props {
    input: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput: React.FC<Props> = ({ input, onChange }) => {
    return (
        <>
            <input value={input} onChange={onChange} className="search__input" type="text" id="search" name="search" placeholder="Search..." />
        </>
    )
}