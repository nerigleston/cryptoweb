const CurrencyItem = ({ currency }) => (
  <div className="flex flex-col bg-white justify-around items-center p-6 m-4 rounded-lg border border-gray-300 shadow-md">
    <p className="text-lg font-semibold">{currency.name}</p>
    <p className="text-sm">Código: {currency.code}</p>
    <p className="text-sm">Código Internacional: {currency.codein}</p>
    <p className="text-sm">Valor: {currency.high}</p>
    <p className="text-sm">Porcentagem de Variação: {currency.pctChange}</p>
    <p className="text-sm">Compra: {currency.ask}</p>
    <p className="text-sm">Venda: {currency.bid}</p>
  </div>
);

export default CurrencyItem;