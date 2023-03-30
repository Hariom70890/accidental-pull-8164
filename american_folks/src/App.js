import logo from './logo.svg';
import { Box, Heading } from '@chakra-ui/react';
import style from'./App.module.css';
import Home from './Pages/Home';

function App() {
  return (
    <div className={style.App}>
    <Home></Home>
    </div>
  );
}

export default App;
