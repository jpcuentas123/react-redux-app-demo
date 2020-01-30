import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksiceCream from './components/HooksiceCream';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer/>
        <HooksiceCream/>
      </div>
    </Provider>
  );
}

export default App;
