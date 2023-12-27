import React, { useState } from 'react';
import CryptoCard from '../cryptoCard';

const CryptoList = ({ cryptoPrices, isLoading }) => {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCryptoPrices = cryptoPrices.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-10 mt-10">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen bg-neutral-300">
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {currentCryptoPrices.map((item) => (
              <CryptoCard key={item.id} crypto={item} />
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            {Array.from({ length: Math.ceil(cryptoPrices.length / itemsPerPage) }, (_, index) => (
              <button
                key={index + 1}
                className={`mx-2 px-3 py-2 ${
                  currentPage === index + 1 ? 'bg-black text-white' : 'bg-gray-200'
                }`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CryptoList;
