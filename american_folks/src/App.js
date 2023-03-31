import style from'./App.module.css';
import Home from './Pages/Home';
import AllRoutes from './Components/AllRoutes';

function App() {
  return (
    <div className={style.App}>
    <AllRoutes/>
    <Home></Home>
    </div>
  );
}

export default App;
