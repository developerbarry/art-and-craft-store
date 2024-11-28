import { Route } from "react-router-dom";
import Root from "../componets/Root/Root";
import HomePage from "../pages/HomePage/HomePage";
import ContactPage from "../pages/ContactPage/ContactPage";
import AddCraftItem from "../pages/AddCraftItem/AddCraftItem";
import MyArtAndCraft from "../pages/MyArtAndCraft/MyArtAndCraft";
import AllArtAndCraftList from "../pages/AllArtAndCraftList/AllArtAndCraftList";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import CarftAndArtDetails from "../componets/CarftAndArtDetails/CarftAndArtDetails";


const routes = (
  <>
    <Route path="/" element={<Root />}>
      <Route
        index
        element={<HomePage />}
      />  {/* Default child route */}
      <Route path="/all-art-and-craft"
        element={<AllArtAndCraftList />} />
      <Route path="/all-art-and-craft/:id"
        element={<PrivateRoute><CarftAndArtDetails /></PrivateRoute>} />
      <Route path="/add-craft-item"
        element={<PrivateRoute><AddCraftItem /></PrivateRoute>} />
      <Route path="/my-art-and-craft" element={<PrivateRoute><MyArtAndCraft /></PrivateRoute>} />
      <Route path="/all-art-and-craft-items/my-art-and-craft/:id/edit" element={<AddCraftItem update={true} />} />

      <Route path="/contact" element={<ContactPage />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Route>
  </>
);

export default routes;