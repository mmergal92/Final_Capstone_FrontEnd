import './App.css';
import { Route, Switch } from 'react-router';
// import { Link } from 'react-router-dom';

// PAGES IMPOR
import Home from './pages/Home';
import About from './pages/About';
import Client from './pages/Client';
import AllClients from './pages/AllClients';
import Header from './components/Header/Nav';
import Footer from './components/Footer/Footer';
import Admin from './pages/Admin';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import SignIn from './pages/Login';
import Form from './pages/Form';

function App() {
  const URL = "http://localhost:3000/"

  return (
    <div className="App">
      <div className="page-container">
      <div className="content-wrap">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/About"> 
          <About/>
        </Route>
        <Route path="/client/" render={(routerProps)=><Client{...routerProps}/>} url={URL}>
          <Client />
        </Route>
        {/* <Route
          path="/client/:client"
          render={(routerProps)=><Client{...routerProps}/>}
          url={URL}>
        </Route> */}
        <Route path="/admin"> 
          <Admin />
        </Route>
        <Route path="/login"> 
          <Login />
        </Route>
        <Route path="/SignIn"> 
          <SignIn URL={URL}/>
        </Route>
        <Route path="/form"> 
          <Form />
        </Route>
      </Switch>
      <Footer />
      </div>
      </div>
    </div>
  );
}

export default App;
