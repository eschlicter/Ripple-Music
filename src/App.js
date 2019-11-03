import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import NavBar from './components/NavBar';
import MyAppBar from './components/AppBar';
import Button from '@material-ui/core/Button';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>

        <nav>
          <MyAppBar></MyAppBar>
          {/* <NavBar /> */}
          {/* <Button  color="primary" href='/'>Home</Button> */}
          {/* <Button  color="primary" href='/library'>Library</Button> */}
          {/* <Link to='/' style={{ textDecoration:'none', color: '#8E8D8E'}}> Landing </Link>
          <Link to='/library'> Library </Link> */}
        </nav>
          <h1 className="company-name">Ripple Music</h1>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
