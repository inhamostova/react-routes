import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './Home/Home';
import { About } from './About/About';
import { Products } from './Products/Products';
import { NonFound } from './NonFound/NonFound';

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NonFound />} />
      </Routes>
    </div>
  );
};
