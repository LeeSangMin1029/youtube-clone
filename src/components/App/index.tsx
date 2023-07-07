import { RouterProvider } from 'react-router-dom';
import { router } from '@/components/LazyRouter';
import { GlobalStyles } from './styles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
