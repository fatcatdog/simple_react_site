import React from 'react';
import Header from './Header';
import Main from './Main';
import '../css/App.css';
import {Helmet} from "react-helmet";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const App = () => (
  <div className="everything">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Jacob Duchen</title>
      <link rel="canonical" href="https://fatcatdog.github.io/" />
    </Helmet>
    <Header />
    <Main />
  </div>
)

export default App;
