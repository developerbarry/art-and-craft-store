import { Route } from "react-router-dom";
import Root from "../componets/Root/Root";
import HomePage from "../pages/HomePage/HomePage";
import ContactPage from "../pages/ContactPage/ContactPage";

const routes = (
  <>
    <Route path="/" element={<Root />}>
      <Route
        index
        element={<HomePage />}
      />  {/* Default child route */}
      <Route path="contact" element={<ContactPage />} />  {/* Nested route */}
    </Route>
  </>
);

export default routes;