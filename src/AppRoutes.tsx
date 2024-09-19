import { lazy, Suspense } from "react";
import { Routes, Route} from "react-router-dom"

/*
const GotMain = lazy(() => import("./components/pages/GotMain")); 
const GotDetails = lazy(() => import("./components/pages/GotDetails")); 
const NotFound = lazy(() => import("./components/pages/NotFound"));
*/
import GotMain from "./components/pages/GotMain";
import GotDetails from "./components/pages/GotDetails";
import NotFound from "./components/pages/NotFound";

export const AppRoutes = () => {
  console.log("APP ROUTES");
  return(
  <>
   <Suspense fallback={<div className="fallback">Loading...</div>}>
    <Routes>
        <Route path="/" element={<GotMain />} />
        <Route path="/details/:id" element={<GotDetails />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
   </Suspense> 
  </>
  );
};