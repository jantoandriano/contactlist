import { useEffect, useState } from "react";

export const useGetFavorites = () => {
    const [state, setState] = useState<any>([])
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        window.localStorage.setItem('favorites', JSON.stringify(state))
    }, [state])

    useEffect(() => {
        const res = window.localStorage.getItem('favorites')
        const results = JSON.parse(res as string)
    }, [])

    const onSelectFavorite = (contact: any) => {

        setState([...state, contact])
    }

    return {
        favorites,
        onSelectFavorite,
    };
}