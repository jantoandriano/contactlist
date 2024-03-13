import React from "react";
import { FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa";
import "./sorting.css"

type Props = {
    orderBy: string;
    onOrderBy: () => void
}

export const Sorting: React.FC<Props> = ({ orderBy, onOrderBy }) => {
    if (orderBy === 'asc') {
        return (
            <div className="sorting__container">
                <FaSortAlphaDown onClick={onOrderBy} />
            </div>
        )
    }

    return (
        <div className="sorting__container">
            <FaSortAlphaUp onClick={onOrderBy} />
        </div>
    )

}