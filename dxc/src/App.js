import React, { Component } from 'react';
import styles from './App.css';
import {Icon} from 'antd'
class App extends Component {
  render() {
    return (
      <div className={styles.App}> <Icon type="chrome" style={{ fontSize: 32, color: 'green' }} />稻香村-front_end<Icon type="github"style={{ fontSize: 32, color: 'black' }}  /></div>
    );
  }
}

export default App;
