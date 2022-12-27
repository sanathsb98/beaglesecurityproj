
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './Body';
import Header from './Header';

function App() {
  return (
   <>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element={<Body/>}/>
     </Routes>
     </BrowserRouter>
   </>
  );
}

export default App;
