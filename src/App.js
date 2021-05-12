import "./App.css";
import Main from "../src/components/main.component";
import { Component } from "react";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {ConfigureStore} from '../src/redux/configureStore'
const store= ConfigureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;