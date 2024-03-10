import React from "react";
import { Link } from "react-router-dom";
import "./empty-state.css"


interface Props {
    message: string;
    path?: string;
}

export const EmptyState: React.FC<Props> = ({ message, path }) => {
    const pathTo = path ? path : '/'
    return (
        <div className="empty__state__container">
            <div className="empty__state__message">
                {message}
            </div>
            <div className="empty__state__action">
                <Link to={pathTo}>
                    Add
                </Link>
            </div>
        </div>
    )
}