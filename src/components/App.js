import React from 'react';
import Header from './Header';
import Main from './Main';
import '../css/App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const App = () => (
  <div className="everything">
    <Header />
    <Main />
  </div>
)

export default App;
