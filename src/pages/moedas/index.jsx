import React, { useState, useEffect } from 'react';
import BaseURLReal from '../../services/baseURL/BaseURLReal';
import CurrencyList from '../../components/moedas/currencyList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import NavBar from '../../components/navBar';

const CurrencyPage = () => {
  const [currencyData, setCurrencyData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCurrencyData();
  }, []);

  const fetchCurrencyData = async () => {
    try {
      const response = await fetch(BaseURLReal);

      if (response.ok) {
        const data = await response.json();
        setCurrencyData(data);
      } else {
        throw new Error('Falha ao carregar dados das moedas');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReload = () => {
    setIsLoading(true);
    fetchCurrencyData();
  };

  return (
    <>
      <NavBar />
      <div className='flex flex-col p-10 mt-10'>
        <div className="mb-4 flex justify-center">
          <p className="text-2xl font-semibold">Moedas em Relação ao Real</p>
          <button className="text-black" onClick={handleReload}>
            <FontAwesomeIcon icon={faSyncAlt} className="ml-2" />
          </button>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <div className="loader"></div>
          </div>
        ) : (
          <CurrencyList currencyData={currencyData} />
        )}
      </div>
    </>
  );
};

export default CurrencyPage;