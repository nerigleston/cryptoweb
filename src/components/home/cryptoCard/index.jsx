const CryptoCard = ({ crypto }) => (
  <div className="flex flex-col bg-white justify-around items-center p-6 m-4 rounded-lg border border-gray-300 shadow-md">
    <img src={crypto.image} alt={crypto.symbol} className="w-20 h-20 mb-4" />
    <p className="text-lg font-semibold mb-2">{crypto.symbol.toUpperCase()}</p>
    <p className="text-sm mb-2">{crypto.name}</p>
    <p className="text-lg font-bold mb-2">{`$${crypto.currentPrice.toFixed(2)}`}</p>
  </div>
);

export default CryptoCard;