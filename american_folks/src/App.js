import style from'./App.module.css';
import Home from './Pages/Home';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className={style.App}>
    
    <Home></Home>
    <AllRoutes/>
    </div>
  );
}

export default App;
