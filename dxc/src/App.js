import React, { Component } from 'react';
import {Home} from './views'
class App extends Component {
  render() {
    return (
      // <div className={styles.App}> 
      //   <Icon type="chrome" style={{ fontSize: 32, color: 'green' }} />
      //   稻香村-front_end
      //   <Icon type="github"style={{ fontSize: 32, color: 'black' }}  />
      // </div>
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
