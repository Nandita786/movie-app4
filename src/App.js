import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Favourite from './Components/Favourite';
import Registeration from './Components/Registeration';
import { BrowserRouter as Router, Switch, Route ,Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App=() => {
  return (
    <>
    <Router>
      <Registeration/>
    </Router>
    <Router>
      <Navbar/>
      <Switch>
      <Route exact path='/' component={Movies} render={(props=>(
        <>
          <Banner {...props} />
          <Movies {...props}/>
        </>
      ))} />
      <Route path='/favourites' component={Favourite} />
      <Route path='/Home' component={<Home/>} />
      <Redirect to="/" />
      </Switch>
      {/*<Banner/>*/}
      {/*<Movies/>*/}
      {/*<Favourite/>*/}
    </Router>
    </>
  );
};

export default App;
