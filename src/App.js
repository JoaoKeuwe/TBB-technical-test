import { useEffect } from "react";
import "./App.css";
import {api} from './services/mocks/output'

function App() {
 
  useEffect(() => { console.log(api.data.nodes.map((name) => name.name))}, []);
  return <div className="App">
    
  </div>;
}

export default App;
