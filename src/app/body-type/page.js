'use client';
import { useState } from 'react';

const bodyTypes = [
  { name: 'Ectomorph', description: 'Lean and long, with difficulty building muscle.', img: '/images/ectomorph.png' },
  { name: 'Endomorph', description: 'Larger frame, stores fat easily.', img: '/images/endomorph.png' },
  { name: 'Mesomorph', description: 'Muscular and well-built, with a high metabolism.', img: '/images/mesomorph.png' },
];

export default function BodyTypePage() {
  const [selected, setSelected] = useState(null);

  return (
    <main className="flex flex-col items-center min-h-screen px-4 py-10 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-black text-center">Select Your Body Type</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl">
        {bodyTypes.map((type) => (
          <div
            key={type.name}
            onClick={() => setSelected(type.name)}
            className={`flex flex-col items-center p-4 border rounded-lg shadow cursor-pointer transition ${
              selected === type.name ? 'border-blue-600 bg-blue-100' : 'border-gray-300'
            }`}
          >
            <img src={type.img} alt={type.name} className="w-20 h-20 object-contain mb-2" />
            <h3 className="text-lg font-semibold text-black">{type.name}</h3>
            <p className="text-sm text-gray-600 text-center">{type.description}</p>
          </div>
        ))}
      </div>

      <button
        disabled={!selected}
        className="mt-8 w-full max-w-sm py-3 bg-blue-600 text-white rounded-xl text-lg font-semibold shadow hover:bg-blue-700 transition disabled:bg-gray-400"
      >
        Continue
      </button>
    </main>
  );
}
