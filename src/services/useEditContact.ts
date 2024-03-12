import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Contact } from "./useGetContacts";

const editContact = async (body: Contact) => {
    return await axios.patch(`http://localhost:3000/api/contacts/${body.id}`, { info: body })
}

export const useEditContact = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (body: Contact) => editContact(body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['contact', 'list'] })
        }
    })
}