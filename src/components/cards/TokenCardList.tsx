import { FC } from 'react';
import { TokenCard, TokenCardProps } from './TokenCard';

interface TokenCardListProps {
  tokens: Omit<TokenCardProps, 'onEdit' | 'onDelete'>[];
  onEdit?: (index: number) => void;
  onDelete?: (index: number) => void;
}

export const TokenCardList: FC<TokenCardListProps> = ({ tokens, onEdit, onDelete }) => {
  if (tokens.length === 0) {
    return (
      <div className="neumorphic rounded-xl p-8 text-center">
        <p className="text-gray-600">No stablecoins created yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tokens.map((token, index) => (
        <TokenCard
          key={index}
          {...token}
          onEdit={() => onEdit?.(index)}
          onDelete={() => onDelete?.(index)}
        />
      ))}
    </div>
  );
};