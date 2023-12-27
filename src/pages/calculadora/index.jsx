import { useState, useEffect } from 'react';
import BaseURLBrl from '../../services/baseURL/BaseURLBrl';
import CryptoList from '../../components/calculadora/cryptoList';
import CalculatorResult from '../../components/calculadora/calculatorResult';
import NavBar from '../../components/navBar';

const CalculatorScreen = () => {
  const [cryptoPrices, setCryptoPrices] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState('');
  const [cryptoAmount, setCryptoAmount] = useState(1);
  const [totalValue, setTotalValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCryptoPrices();
  }, []);

  const fetchCryptoPrices = async () => {
    try {
      const response = await fetch(BaseURLBrl);

      if (response.ok) {
        const cryptoData = await response.json();
        setCryptoPrices(
          cryptoData.map((data) => ({
            id: data.id,
            name: data.name,
            symbol: data.symbol,
            image: data.image,
            currentPrice: parseFloat(data.current_price),
          }))
        );
      } else {
        throw new Error('Falha ao carregar preços das criptomoedas');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const calculateTotalValue = () => {
    const cryptoValue = parseFloat(cryptoAmount) * getCryptoPrice(selectedCrypto);

    const formattedValue = cryptoValue.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    setTotalValue(formattedValue);
  };

  const getCryptoPrice = (cryptoSymbol) => {
    const crypto = cryptoPrices.find((item) => item.symbol === cryptoSymbol);
    return crypto ? crypto.currentPrice : 0;
  };

  return (
    <>
      <NavBar />
      <div className="p-8 rounded">
        <h1 className="text-3xl font-semibold mb-4 justify-center flex">Calcule o Valor em Real</h1>
        {isLoading ? (
          <div className="flex justify-center items-center bg-neutral-300">
            <div className="loader"></div>
          </div>
        ) : (
          <CryptoList
            cryptoPrices={cryptoPrices}
            selectedCrypto={selectedCrypto}
            onPress={setSelectedCrypto}
          />
        )}
        <div className="mt-4 text-center">
          <p className="text-gray-600 mb-2">Quantidade:</p>
          <input
            type="number"
            value={cryptoAmount}
            onChange={(e) => setCryptoAmount(e.target.value)}
            className="px-26 py-3 border rounded focus:outline-none focus:border-blue-500 text-center"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={calculateTotalValue}
            className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-700 focus:outline-none focus:shadow-outline-blue"
          >
            Calcular
          </button>
        </div>
        <CalculatorResult totalValue={totalValue} />
      </div>
    </>
  );
};

export default CalculatorScreen;
