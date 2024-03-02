import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Header from './Components/Header.jsx';
import MusicList from './Pages/MusicList.jsx';
import SearchPage from './Pages/SearchPage.jsx';
import Nowplaying from './Pages/NowPlaying.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/musiclist",
    element: <MusicList />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/now-playing",
    element: <Nowplaying />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className='parent'>
      <Header  isLoggedIn={true} userAvatar="/vite.svg" />
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
