import { lazy, Suspense } from "react";
import { Routes, Route} from "react-router-dom"

const GotMain = lazy(() => import("./components/pages/GotMain")); 
const GotDetails = lazy(() => import("./components/pages/GotDetails")); 
const NotFound = lazy(() => import("./components/pages/NotFound"));

export const AppRoutes = () => {
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