import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./page/login";
import Home from "./page/home";
import Header from './component/layout';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home></Home>}/>
          <Route path='/login' element={<Login></Login>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
