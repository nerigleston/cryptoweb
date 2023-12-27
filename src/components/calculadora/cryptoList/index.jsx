const CryptoList = ({ cryptoPrices, selectedCrypto, onPress }) => (

    <div className="mt-4 justify-center items-center flex flex-col">
      <label htmlFor="cryptoSelect" className="block text-sm font-medium text-gray-700 items-center">
        Selecione uma criptomoeda:
      </label>
      <select
        id="cryptoSelect"
        name="cryptoSelect"
        className="text-center mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        value={selectedCrypto}
        onChange={(e) => onPress(e.target.value)}
      >
        <option value="" disabled>
          Escolha uma criptomoeda
        </option>
        {cryptoPrices.map((crypto) => (
          <option key={crypto.id} value={crypto.symbol}>
            {crypto.name} ({crypto.symbol})
          </option>
        ))}
      </select>
    </div>
);

export default CryptoList;
