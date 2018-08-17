import React, { Component } from 'react';
import { Home, Recommand, My, ShoppingCart, Diary, ProjectDetail } from './views'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      // <div className={styles.App}> 
      //   <Icon type="chrome" style={{ fontSize: 32, color: 'green' }} />
      //   稻香村-front_end
      //   <Icon type="github"style={{ fontSize: 32, color: 'black' }}  />
      // </div>
      // <div>
      //   <Home />
      // </div>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/recommand' component={Recommand} />
          <Route path='/my' component={My} />
          <Route path='/shoppingCart' component={ShoppingCart} />
          <Route path='/diary' component={Diary} />
          <Route path='/projectDetails' component={ProjectDetail} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
