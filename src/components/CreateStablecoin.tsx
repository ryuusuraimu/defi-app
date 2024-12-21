import { FC, useState } from 'react';
import { Coins } from 'lucide-react';
import { StablecoinForm } from './forms/StablecoinForm';
import { StablecoinFormData } from '../types/stablecoin';

export const CreateStablecoin: FC = () => {
  const [formData, setFormData] = useState<StablecoinFormData>({
    name: '',
    symbol: '',
    targetCurrency: 'USD'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Creating stablecoin:', formData);
  };

  return (
    <div className="neumorphic rounded-2xl p-8">
      <div className="flex items-center justify-center mb-8">
        <Coins className="w-12 h-12 text-gray-700" />
      </div>
      
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-8">
        Create Stablecoin
      </h2>

      <StablecoinForm 
        formData={formData}
        onChange={setFormData}
        onSubmit={handleSubmit}
      />
    </div>
  );
};