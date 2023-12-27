import React, { useState } from 'react';
import CurrencyItem from './../currencyItem/index';

const CurrencyList = ({ currencyData }) => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCurrencyData =
    currencyData && Object.values(currencyData).slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-10 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentCurrencyData &&
          currentCurrencyData.map((currency, index) => (
            <CurrencyItem key={index} currency={currency} />
          ))}
      </div>
      <div className="mt-4 flex justify-center">
        {Array.from({ length: Math.ceil(Object.keys(currencyData).length / itemsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            className={`mx-2 px-3 py-2 ${
              currentPage === index + 1 ? 'bg-black text-white' : 'bg-gray-200 text-black'
            }`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CurrencyList;
