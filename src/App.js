import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailPage from './page/DetailPage';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">
        
        <BrowserRouter>
              <Navbar/>
              
              <Routes>
                <Route path='/' element={<Main/>} />
                <Route path='/main/:id'  element={<DetailPage/>} />
              </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
