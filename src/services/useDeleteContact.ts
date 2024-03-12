import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const deleteContact = async (id: number) => {
    return await axios.delete(`http://localhost:3000/api/contacts/${id}`)
}

export const useDeleteContact = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (id: number) => deleteContact(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['contact', 'list'] })
        }
    })
}