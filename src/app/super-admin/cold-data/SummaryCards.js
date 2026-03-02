import React from 'react';
import { SUMMARY_CARDS } from './constants';

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
      {SUMMARY_CARDS.map((card, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-6">
          <p className="text-sm font-medium text-gray-600">{card.title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{card.value}</p>
          <p className={`text-sm mt-2 ${card.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
            {card.change} from last month
          </p>
        </div>
      ))}
    </div>
  );
}
