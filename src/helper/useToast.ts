import { useState } from "react";

export const useToast = () => {
    const [toasts, setToasts] = useState([{
        id: 0,
        message: '',
        type: ''
    }]);
    const autoCloseDuration = 3;
    const autoClose = true;

    const showToast = (message: string, type: string) => {
        const toast = {
            id: Date.now(),
            message,
            type,
        };

        setToasts((prevToasts) => [...prevToasts, toast]);

        if (autoClose) {
            setTimeout(() => {
                removeToast(toast.id);
            }, autoCloseDuration * 1000);
        }
    };

    const removeToast = (id: number) => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    };

    const onToast = (message: string) => {
        return showToast(message, "success")
    }


    return {
        toasts,
        showToast,
        removeToast,
        onToast
    }
}