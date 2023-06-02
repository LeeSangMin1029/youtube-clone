import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import BaseTemplates from '@/components/BaseTemplates';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('@/pages/Home'));
const Watch = lazy(() => import('@/pages/Watch'));
const Login = lazy(() => import('@/pages/Login'));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseTemplates />}>
      <Route
        index
        element={
          <Suspense>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/watch"
        element={
          <Suspense>
            <Watch />
          </Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <Suspense>
            <Login />
          </Suspense>
        }
      />
    </Route>,
  ),
);
