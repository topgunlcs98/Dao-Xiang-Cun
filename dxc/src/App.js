import React, { Component } from 'react';
import styles from './App.css';
import {Icon} from 'antd'
class App extends Component {
  render() {
    return (
      <div className={styles.App}> <Icon type="chrome" style={{ fontSize: 32, color: '#08c' }} />稻香村-front_end</div>
    );
  }
}

export default App;
