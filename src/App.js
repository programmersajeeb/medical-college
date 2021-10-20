import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Home from './Home/Home/Home';
import Booking from './Login/Booking';
import Login from './Login/Login';
import PrivateRouter from './Login/PrivateRouter/PrivateRouter';
import Register from './Login/Register/Register';
import NotFound from './NotFound/NotFound';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <PrivateRouter path='/Booking/:ServiceId'>
              <Booking></Booking>
            </PrivateRouter>
            <PrivateRouter path='/Booking/:ServiceId'>
              <Booking></Booking>
            </PrivateRouter>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
