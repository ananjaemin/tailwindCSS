import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./pages/login";
import UseHome from "./pages/home";
import Header from './component/layout';
import Detail from './pages/Detail';


function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<UseHome></UseHome>}/>
          <Route path='/login' element={<Login></Login>}/>
          <Route path="/:id" element={<Detail></Detail>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
