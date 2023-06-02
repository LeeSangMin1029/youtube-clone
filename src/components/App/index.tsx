import { RouterProvider } from 'react-router-dom';
import { router } from '@/components/LazyRouter';

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
