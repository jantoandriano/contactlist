import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home"
import { FavoritesPage } from "./pages/favorites"
import { Layout } from "./components/layout/layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </>
  )
}
export default App
