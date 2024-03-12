import { FaCheckSquare } from "react-icons/fa";
import "./toast.css";
import React from "react";

type Props = {
    message: string;
    type: string;
    onClose: () => void
}

export const Toast: React.FC<Props> = ({ message, type, onClose }) => {

    return (
        <div className={`toast toast__${type}`} role="alert">
            <div className="toast__message">
                <div className="icon icon__thumb">
                    {type && <FaCheckSquare />}
                </div>
                <p>{message}</p>
            </div>
            {type && <button className="toast__close__btn" onClick={onClose}>
                <span className="icon">
                    X
                </span>
            </button>}
        </div>
    );
};
