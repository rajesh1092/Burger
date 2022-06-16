import React, {Component} from 'react';
import BurgerBuilder from './containers/Burger builder/BurgerBuilder';

import Layout from './components/layout/layout';

class App extends Component {
  render() {
    return(
      <div>
        <Layout>
          <BurgerBuilder />   
        </Layout>
      </div>
    );
  }
}

export default App;
