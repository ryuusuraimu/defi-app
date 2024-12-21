import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Coins, TrendingUp, Activity, Wallet } from 'lucide-react';
import { CreateStablecoin } from './CreateStablecoin';
import { TokenCardList } from './cards/TokenCardList';
import { TokenCardProps } from './cards/TokenCard';

export const Dashboard: React.FC = () => {
  const { connected } = useWallet();
  const [tokens, setTokens] = useState<Omit<TokenCardProps, 'onEdit' | 'onDelete'>[]>([
    {
      name: "USD Stablecoin",
      symbol: "USDC",
      targetCurrency: "USD"
    },
    {
      name: "Euro Stablecoin",
      symbol: "EURC",
      targetCurrency: "EUR"
    }
  ]);

  const handleEdit = (index: number) => {
    console.log('Edit token:', tokens[index]);
  };

  const handleDelete = (index: number) => {
    console.log('Delete token:', tokens[index]);
    setTokens(tokens.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="neumorphic rounded-2xl p-8 text-center">
        <h2 className="text-4xl font-bold text-gray-700 mb-4">
          Your Gateway to Decentralized Finance
        </h2>
        <p className="text-gray-600 mb-6">
          Create and manage your own stablecoins on the Solana blockchain
        </p>
        <WalletMultiButton className="neumorphic-button !bg-[#e0e5ec] !text-gray-700 !border-none rounded-xl px-8 py-3" />
      </section>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="neumorphic rounded-xl p-6 text-center">
          <Wallet className="w-8 h-8 text-gray-700 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Wallet Balance</h3>
          <p className="text-gray-600">{connected ? '0.00 SOL' : 'Connect wallet to view'}</p>
        </div>
        
        <div className="neumorphic rounded-xl p-6 text-center">
          <TrendingUp className="w-8 h-8 text-gray-700 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Market Overview</h3>
          <p className="text-gray-600">Track your assets</p>
        </div>
        
        <div className="neumorphic rounded-xl p-6 text-center">
          <Activity className="w-8 h-8 text-gray-700 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Recent Activity</h3>
          <p className="text-gray-600">View your transactions</p>
        </div>
      </div>

      {/* Stablecoins List */}
      {connected && (
        <>
          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-700 mb-6">Your Stablecoins</h2>
            <TokenCardList
              tokens={tokens}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </section>

          {/* Create Stablecoin Section */}
          <section className="mt-8">
            <CreateStablecoin />
          </section>
        </>
      )}
    </div>
  );
};