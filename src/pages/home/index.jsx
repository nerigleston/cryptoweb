import React, { useEffect, useState } from 'react';
import Navbar from "../../components/navBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import CryptoList from "../../components/home/cryptoList";
import BaseURLDol from '../../services/baseURL/BaseURLDol';

const Cripto = () => {
  const [cryptoPrices, setCryptoPrices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCryptoPrices();
    };

    fetchData();
  }, []);


  const fetchCryptoPrices = async () => {
    try {
      const response = await fetch(BaseURLDol);

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
        throw new Error('Falha ao carregar preços de criptomoedas');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReload = async () => {
    setIsLoading(true);
    await fetchCryptoPrices();
    loadWalletData();
  };

  return (
    <>
      <Navbar />
      <div className="p-5">
        <div className="flex justify-center items-center">
          <p className="text-2xl font-bold">Preço das Criptomoedas em USD</p>
          <button onClick={handleReload} className="p-2">
            <FontAwesomeIcon icon={faSyncAlt} />
          </button>
        </div>
        <CryptoList
          cryptoPrices={cryptoPrices}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};

export default Cripto;
