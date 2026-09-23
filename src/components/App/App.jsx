import { Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { About } from '../../pages/About/About';
import { Products } from '../../pages/Products/Products';
import { NonFound } from '../../pages/NonFound/NonFound';
import { ProductDetails } from '../../pages/ProductDetails/ProductDetails';
import { Mission } from 'components/Mission/Mission';
import { Team } from 'components/Team/Team';
import { Reviews } from 'components/Reviews/Reviews';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NonFound />} />
      </Route>
    </Routes>
  );
};
