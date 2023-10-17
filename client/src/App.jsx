import {BrowserRouter,Routes,Route,useLocation } from 'react-router-dom'
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

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
      </Routes>
  </BrowserRouter>
  )
}
