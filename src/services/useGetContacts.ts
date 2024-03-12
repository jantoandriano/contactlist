import { useQuery } from '@tanstack/react-query';
import axios from 'axios'

export type Contact = {
    id: number
    first_name: string;
    last_name: string;
    job: string;
    description: string;
    favorite: boolean;
}

export type Contacts = Array<Contact>

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
        select: (data) => {
            const contacts = data.data.map(val => {
                return ({
                    ...val,
                    favorite: false
                })
            })
            return {
                data: contacts,
                message: data.message,
                statusCode: data.statusCode,
            }
        }
    })
}