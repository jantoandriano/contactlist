import React, { createContext, useContext, useReducer } from 'react';
import { Contact } from '../services/useGetContacts';

type Action = {
    type: string;
    payload: Contact
}

type ProviderParams = {
    children: React.ReactNode
}
const FavoritesContext = createContext<any>(null);

const FavoritesDispatchContext = createContext<any>(null);

export const FavoritesProvider = (props: ProviderParams) => {
    const { children } = props
    const [tasks, dispatch] = useReducer(
        tasksReducer,
        initialTasks
    );

    return (
        <FavoritesDispatchContext.Provider value={dispatch}>
            <FavoritesContext.Provider value={tasks}>
                {children}
            </FavoritesContext.Provider>
        </FavoritesDispatchContext.Provider>

    );
}

export function useFavorites() {
    return useContext(FavoritesContext);
}

export function useFavoritesDispatch() {
    return useContext(FavoritesDispatchContext);
}

function tasksReducer(tasks: Contact[], action: Action) {
    switch (action.type) {
        case 'add': {
            const alreadyAdd = tasks.findIndex(val => val.id === action.payload.id)
            if (alreadyAdd === -1) {
                return [...tasks, {
                    id: action.payload.id,
                    first_name: action.payload.first_name,
                    last_name: action.payload.last_name,
                    job: action.payload.job,
                    description: action.payload.description,
                    favorite: false
                }];
            }
            return [...tasks];
        }
        case 'remove': {
            return tasks.filter(t => t.id !== action.payload.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const initialTasks: Contact[] = [];
