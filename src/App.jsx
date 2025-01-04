import Navbar from './components/Navbar/Navbar';
import Home from './pages/HomePage/Home';
import Teachers from './pages/TeachersPage/Teachers';
import TeachersQueryProvider from './context/TeachersQueryContext';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return <>
    <TeachersQueryProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
        </Routes>
      </BrowserRouter>
    </TeachersQueryProvider>
  </>
}

export default App;
