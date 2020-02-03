import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksiceCream from './components/HooksiceCream';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NewCakeContainer/>
        <HooksiceCream/>
      </div>
    </Provider>
  );
}

export default App;
