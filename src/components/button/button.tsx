import React from "react"
import "./button.css"

interface Props {
    label: string;
    type: string;
}

export const Button: React.FC<Props> = ({ label, type }) => {

    return (
        <div className={type === 'edit' ? 'btn__container btn__container_edit' : 'btn__container btn__container_delete'}>
            <div className="btn__label">
                {label}
            </div>
        </div>
    )
}