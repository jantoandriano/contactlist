import React from "react"
import "./button.css"

interface Props {
    label: string;
    type: string;
    path?: string;
    onClick: () => void;
}

export const Button: React.FC<Props> = ({ label, type, onClick }) => {
  
    return (
        <div onClick={onClick} className={type === 'edit' ? 'btn__container btn__container_edit' : 'btn__container btn__container_delete'}>
            <div className="btn__label">
                {label}
            </div>
        </div>
    )
}