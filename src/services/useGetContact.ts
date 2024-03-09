import { useQuery } from '@tanstack/react-query';
import axios from 'axios'

export interface Contact {
    id: number
    first_name: string;
    last_name: string;
    job: string;
    description: string;
}

type Params = {
    id: string;
}

type Response = {
    statusCode: number;
    message: string;
    data: Contact
}


const fetchContact = async (params: Params): Promise<Response> => {
    const { id } = params
    const response = await axios.get(`/contact/${id}`)
    return response.data
}

export const useGetContact = (params: Params) => {
    return useQuery({
        queryKey: ['contact', 'detail'],
        queryFn: () => fetchContact(params),
    })
}