import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { SWRConfig } from "swr";
import Home from "@/pages/Home";
import Watch from "@/pages/Watch";
import BaseTemplates from "@/components/BaseTemplates";
import { localStorageProvider } from "@/context/LocalStorageProvider";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseTemplates />}>
      <Route index element={<Home />} />
      <Route path="/watch" element={<Watch />} />
    </Route>
  )
);

const App = () => {
  return (
    <SWRConfig value={{ provider: localStorageProvider }}>
      <RouterProvider router={router} />
    </SWRConfig>
  );
};

export default App;
