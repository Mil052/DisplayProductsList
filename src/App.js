import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import PageNotFound from './pages/PageNotFound';
import './App.scss';

function App() {
  return (
    <div className="App">
        <header className="main-header">
            <h3>Product List</h3>
            <hr/>
        </header>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<ProductsPage/>} />
                <Route exact path="/products/:id?" element={<ProductsPage/>} />
                <Route exact path="/*" element={<PageNotFound/>} />
            </Routes>
        </BrowserRouter>
        <footer>
            <hr/>
            <h3>MIŁOSZ GAJDA </h3>
            <p>Codibly Test Assignment</p>
        </footer>
    </div>
  );
}

export default App;
