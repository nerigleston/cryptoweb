import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Criptos from '../pages/home/index';
import CurrencyPage from '../pages/moedas';
import CalculatorScreen from '../pages/calculadora';

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Criptos />} />
          <Route path='/moedas' element={<CurrencyPage />} />
          <Route path='/calculadora' element={<CalculatorScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}