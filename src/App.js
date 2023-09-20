import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "././components/Register";
import Page1 from "././components/Page1";
import Page2 from "././components/Page2";
import{disableReactDevTools} from '@fvilers/disable-react-devtools';
if(process.env.NODE_ENV==='production') disableReactDevTools();
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/page1" element={<Page1/>}/>
          <Route path="/page2" element={<Page2/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
