import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Accueil from './Accueil';
import Logement from './Logement';
import Propos from './Propos';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Accueil />,
    errorElement: <ErrorPage />
  },
  {
    path: '/propos',
    element: <Propos />
  },
  {
    path: '/logement',
    element: <Logement />
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;