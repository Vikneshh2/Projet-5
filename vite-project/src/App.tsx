import './App.css';
// import Message from './Message';
import ErrorPage from './ErrorPage';
import Accueil from './Accueil';
import Logement from './Logement';
import Propos from './Propos';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
  // {
  //   path: '/message',
  //   element: <div><Message name='Bob' /></div>
  // },
  {
    path: '/logement',
    element: <Logement />
  }
])

// function App () {
//   return <div className='flex'><Message />
//     <h1 className='rouge'>Rouge</h1>
//     <h1>Bleu</h1>
//     <h1 className='yellow'>Jaune</h1>
//     <h1>Vert</h1>
//     </div>
// }
// export default App;

function App() {
      return <RouterProvider router={router}/>
}
export default App;
