import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import { SWRConfig } from 'swr';
import Home from '@/pages/Home';
import Watch from '@/pages/Watch';
import Login from '@/pages/Login';
import BaseTemplates from '@/components/BaseTemplates';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseTemplates />}>
      <Route index element={<Home />} />
      <Route path="/watch" element={<Watch />} />
      <Route path="/login" element={<Login />} />
    </Route>,
  ),
);

const App = () => {
  return (
    <SWRConfig>
      <RouterProvider router={router} />
    </SWRConfig>
  );
};

export default App;
