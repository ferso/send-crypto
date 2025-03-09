export const SendCryptoForm = () => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mx-auto w-full sm:w-112">
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">
            Wallet Address
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
            placeholder="Enter wallet address"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">
            Amount
          </label>
          <input
            type="number"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
            placeholder="0.00"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">
            Cryptocurrency
          </label>
          <select className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-indigo-500">
            <option value="eth">Ethereum (ETH)</option>
            {/* <option value="btc">Bitcoin (BTC)</option>
            <option value="usdt">Tether (USDT)</option>
            <option value="bnb">Binance Coin (BNB)</option> */}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">
            Message
          </label>
          <textarea
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
            rows={3}
            placeholder="Enter transaction message (optional)"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-500 transition-colors"
        >
          Send Transaction
        </button>
      </form>
    </div>
  );
};
