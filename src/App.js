import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store';
import HooksiceCream from './components/HooksiceCream';
import CakeContainer from './components/CakeContainer';
import ItemContainer from './components/itemContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake/>
        <ItemContainer />
        <CakeContainer />
        <HooksiceCream />
      </div>
    </Provider>
  );
}

export default App;
