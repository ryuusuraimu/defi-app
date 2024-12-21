import { FC } from 'react';
import { Upload } from 'lucide-react';
import { StablecoinFormData } from '../../types/stablecoin';

interface Props {
  formData: StablecoinFormData;
  onChange: (data: StablecoinFormData) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const StablecoinForm: FC<Props> = ({ formData, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => onChange({ ...formData, name: e.target.value })}
          className="neumorphic-inset w-full px-4 py-2 rounded-xl bg-[#e0e5ec] text-gray-700 focus:outline-none"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Symbol</label>
        <input
          type="text"
          value={formData.symbol}
          onChange={(e) => onChange({ ...formData, symbol: e.target.value })}
          className="neumorphic-inset w-full px-4 py-2 rounded-xl bg-[#e0e5ec] text-gray-700 focus:outline-none"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Target Currency</label>
        <select
          value={formData.targetCurrency}
          onChange={(e) => onChange({ ...formData, targetCurrency: e.target.value })}
          className="neumorphic-inset w-full px-4 py-2 rounded-xl bg-[#e0e5ec] text-gray-700 focus:outline-none"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="JPY">JPY</option>
          <option value="GBP">GBP</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Icon</label>
        <div className="neumorphic-inset rounded-xl p-6 text-center">
          <Upload className="mx-auto h-12 w-12 text-gray-600 mb-2" />
          <div className="text-sm text-gray-600">
            <label className="cursor-pointer text-gray-700 hover:text-gray-900">
              <span>Upload a file</span>
              <input type="file" className="sr-only" accept="image/*" />
            </label>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="neumorphic-button w-full py-3 px-6 rounded-xl text-gray-700 font-medium focus:outline-none"
      >
        Create Stablecoin
      </button>
    </form>
  );
};