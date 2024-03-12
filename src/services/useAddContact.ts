import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

type Contact = {
    first_name: string;
    last_name: string;
    job: string;
    description: string;
}

const addContact = async (data: Contact) => {
    return await axios.post(`http://localhost:3000/api/contacts`, { contact: data })
}

export const useAddContact = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: Contact) => addContact(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['contact', 'list'] })
        }
    })
}