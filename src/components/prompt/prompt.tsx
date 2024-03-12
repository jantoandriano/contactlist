import React from "react"
import { Modal } from "../modal/modal"
import "./prompt.css"

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onYes: () => void;
}

export const Prompt: React.FC<Props> = ({ isOpen, onClose, onYes }) => {

    return (
        <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
            <div>Are you sure</div>
            <div className="prompt__btn__group">
                <div className="prompt__btn" onClick={onYes}>Yes</div>
                <div className="prompt__btn" onClick={onClose}>No</div>
            </div>
        </Modal>
    )
}