import { Menus } from "../components/menus/menus"
import { FavoriteList } from "../components/favorite-list/favorite-list"
import { Layout } from "../components/layout/layout"
import { ToastList } from "../components/toast/toast-list"
import { useToast } from "../helper/useToast"
import { SearchInput } from "../components/search-input/search-input"
import { useState } from "react"

export const FavoritesPage = () => {
    const [input, setInput] = useState("")
    const { toasts, removeToast } = useToast()

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }

    return (
        <>
            <Layout title="Favorites">
                <SearchInput input={input} onChange={onChangeInput} />
                <Menus />
                <FavoriteList query={input} />
                <ToastList data={toasts} position="top-right" removeToast={removeToast} />
            </Layout>
        </>
    )
}