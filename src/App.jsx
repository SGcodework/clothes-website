import { RouterProvider } from 'react-router-dom';
import './styles/index.scss';
import router from './routes';

function App() {
  return (
   <div>
    <RouterProvider router={router}/>
   </div>
  )
}

export default App
