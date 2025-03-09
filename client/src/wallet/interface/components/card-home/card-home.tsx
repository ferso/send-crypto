export interface ICardHome {
  name: string;
  address?: string;
  network: string;
  amount: number;
  onConnect: () => void;
  isLoading: boolean;
}

export const CardHome: React.FC<ICardHome> = (props) => {
  return (
    <div className="col-span-1 sm:w-112 h-56 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-2xl mx-auto mb-8 relative overflow-hidden">
      <div className="flex flex-col justify-between h-full">
        {props.address ? (
          <>
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600" />
              <p className="text-gray-400 text-sm">{props.name}</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-8 bg-gray-600 rounded-md" />
              <p className="text-gray-300 tracking-widest">{props.address}</p>
              <div className="flex justify-between">
                <p className="text-gray-400 text-sm">Network</p>
                <p className="text-gray-400 text-sm">{props.network}</p>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            {props.isLoading ? (
              <div className="flex items-center justify-center flex-col">
                <div className="w-12 h-12 border-t-2 border-b-2 border-gray-900 rounded-full animate-spin"></div>
                <p className="text-gray-300 text-lg font-small mb-4">
                  Loading...
                </p>
              </div>
            ) : (
              <>
                <p className="text-gray-300 text-lg font-medium mb-4">
                  To Start, Connect Your Wallet
                </p>
                <button
                  onClick={props.onConnect}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors cursor-pointer"
                >
                  Connect your MetaMask Wallet
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
