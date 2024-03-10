import { useQuery } from '@tanstack/react-query';
import axios from 'axios'

export interface Contact {
    id: number
    first_name: string;
    last_name: string;
    job: string;
    description: string;
}

type Contacts = Array<Contact>

type Response = {
    statusCode: number;
    message: string;
    data: Contacts
}


const fetchContacts = async (): Promise<Response> => {
    const response = await axios.get(`http://localhost:3000/api/contacts`)
    return response.data
}

export const useGetContacts = () => {
    return useQuery({
        queryKey: ['contact', 'list'],
        queryFn: () => fetchContacts(),
    })
}