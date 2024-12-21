import { FC } from 'react';
import { Shield, Trash2, Edit3 } from 'lucide-react';

export interface TokenCardProps {
  name: string;
  symbol: string;
  targetCurrency: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

export const TokenCard: FC<TokenCardProps> = ({
  name,
  symbol,
  targetCurrency,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="neumorphic rounded-xl p-6 transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-center justify-between mb-4">
        <Shield className="w-10 h-10 text-gray-700" />
        <div className="flex gap-2">
          {onEdit && (
            <button 
              onClick={onEdit}
              className="neumorphic-button p-2 rounded-lg hover:text-blue-600"
            >
              <Edit3 className="w-4 h-4" />
            </button>
          )}
          {onDelete && (
            <button 
              onClick={onDelete}
              className="neumorphic-button p-2 rounded-lg hover:text-red-600"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-700 mb-2">{name}</h3>
      <div className="space-y-2">
        <div className="flex justify-between text-gray-600">
          <span>Symbol:</span>
          <span className="font-medium">{symbol}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Target Currency:</span>
          <span className="font-medium">{targetCurrency}</span>
        </div>
      </div>
    </div>
  );
};