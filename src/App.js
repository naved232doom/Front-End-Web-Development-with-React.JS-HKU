import "./App.css";
import Main from "../src/components/main.component";
import { Component } from "react";
import {BrowserRouter} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;