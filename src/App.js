import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Routes from './Routes.js';
import styles from "./app.module.scss";
import "./fonts.scss";
// import './i18n';

const RoutesRender = Routes.map((item) => <Route path={ item.path } exact={ item.exact } component={ item.component } key={item.path} />)

function App() {
    return (
      <div className={styles.app}>
        <Switch>
          { RoutesRender}
        </Switch>
      </div>
    );
}

export default App;