
import BackgroundMusic from './components/BackgroundMusic.jsx';
import RootLayout from './RootLayout.jsx';
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css'
import App from './App.jsx'
import Passwordpage from './components/Passwordpage.jsx';
import Matchpswd from './components/Matchpswd.jsx';
import Pswderror from './components/Pswderror.jsx';
import CelebrabtionPage from './components/CelebrabtionPage.jsx';
import NoPage from './components/NoPage.jsx';
import NextPage from './components/NextPage.jsx';
import YesPage from './components/YesPage.jsx';
import ImagesPage from './components/ImagesPage.jsx';
import NewImages from './components/Nextimages/NewImages.jsx';
import CakePage from './components/CakeComponent/CakePage.jsx';
import GiftPage from './components/GiftFolder/GiftBox.jsx';
import LastPage from './components/LastFolder/LastPage.jsx';
import WhyweLove from './components/WhyWeLove/WhyweLove.jsx';
import OurFuture from './components/OurFuture/Ourfuture.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [

      {
        index: true,
        element: <App />
      },

      {
        path: 'passwordpage',
        element: <Passwordpage />
      },

      {
        path: 'match',
        element: <Matchpswd />
      },

      {
        path: 'error',
        element: <Pswderror />
      },

      {
        path: 'celebration',
        element: <YesPage />
      },

      {
        path: 'nopage',
        element: <NoPage />
      },

      {
        path: 'celebrationmessage',
        element: <CelebrabtionPage />
      },

      {
        path: 'textmessage',
        element: <NextPage />
      },

      {
        path: 'gallery',
        element: <ImagesPage />
      },

      {
        path: 'memory',
        element: <NewImages />
      },

      {
        path: 'cake',
        element: <CakePage />
      },

      {
        path: 'gift',
        element: <GiftPage />
      },

      {
        path: '/love',
        element:<WhyweLove />
      },

      {
        path: '/future',
        element: <OurFuture />
      },

      {
        path: '/endpage',
        element: <LastPage />
      }

    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router} />
)
