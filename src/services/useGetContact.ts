import {  useQuery } from '@tanstack/react-query';
import axios from 'axios'

export type Contact = {
    id: number
    first_name: string;
    last_name: string;
    job: string;
    description: string;
    favorite: boolean;
}

type Response = {
    statusCode: number;
    message: string;
    data: Contact
}

export interface PboHeaderQuery {
    id: string;
}


const fetchContact = async (id: string): Promise<Response> => {
    const response = await axios.get(`http://localhost:3000/api/contacts/${id}`)
    return response.data
}

export const useGetContact = (id: string) => {
    return useQuery({
        queryKey: ['contact', 'list', id],
        queryFn: () => fetchContact(id)
    })
}
