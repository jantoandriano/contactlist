import React, { useRef } from "react";
import "./toast-list.css";
import { Toast } from "./toast";

type Props = {
    data: any[];
    position: string;
    removeToast: any;
}

export const ToastList: React.FC<Props> = ({ data, position, removeToast }) => {
    const listRef = useRef(null);

    return (
        data.length > 0 && (
            <div
                className={`toast-list toast-list--${position}`}
                aria-live="assertive"
                ref={listRef}
            >
                {data.map((toast) => (
                    <Toast
                        key={toast.id}
                        message={toast.message}
                        type={toast.type}
                        onClose={() => removeToast(toast.id)}
                    />
                ))}
            </div>
        )
    );
};
