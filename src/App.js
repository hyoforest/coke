import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout'
import Home from './components/main/Home'
import Brand from './components/brand/Brand'
import Company from './components/history/Company'
import Since from './components/history/Since'
import Story from './components/story/Story'
import SocialValue from './components/socialValue/SocialValue'
import Sustain from './components/socialValue/Sustain'
import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<RootLayout/>}>
      <Route index element={<Home/>}></Route>
      <Route path ="brand" element={<Brand/>}></Route>
      <Route path="company" element={<Company/>}></Route>
      <Route path="since" element={<Since/>}></Route>
      <Route path ="story" element={<Story/>}></Route>
      <Route path ="social" element={<SocialValue/>}></Route>
      <Route path="sustainability" element={<Sustain/>}></Route>
    </Route>
  )
)

function App(){
  return (
    <div className='App'>
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;