import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home"
import { FavoritesPage } from "./pages/favorites"
import { EditPage } from "./pages/edit-contact-page";
import { AddContactPage } from "./pages/add-contact-page";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="edit/:id" element={<EditPage />} />
        <Route path="add" element={<AddContactPage />} />
      </Routes>
    </>
  )
}
export default App
