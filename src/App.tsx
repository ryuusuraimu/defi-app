import React from 'react';
import { WalletContextProvider } from './components/WalletContextProvider';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <WalletContextProvider>
      <div className="min-h-screen bg-[#e0e5ec]">
        <nav className="neumorphic px-6 py-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-700">Solana Stablecoin Platform</h1>
            </div>
          </div>
        </nav>
        
        <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <Dashboard />
        </main>
      </div>
    </WalletContextProvider>
  );
}

export default App;