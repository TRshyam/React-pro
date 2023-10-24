import {BrowserRouter,Routes,Route,useLocation } from 'react-router-dom'
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/profile';
import Valid from './components/valid';

export default function App() {
  // const location = useLocation();
  // const isSignupPage = location.pathname === '/sign-up';

  return( 
  <BrowserRouter>
    {/* {!isSignupPage && <Header />} */}

      <Routes>
        <Route path='/sign-in' element={ <Signin />} />
        <Route path='/sign-up' element={ <Signup />} />
        <Route path='/' element={<Home />} />
        <Route element={<Valid/>}>
        <Route path='/profile' element={<Profile />} />

        </Route>
      </Routes>
  </BrowserRouter>
  )
}
