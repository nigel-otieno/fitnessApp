'use client';
import SportCard from '@/components/SportCard';

const sports = [
  { name: 'Basketball', img: '/images/basketball.png' },
  { name: 'Soccer', img: '/images/soccer.png' },
  { name: 'Running', img: '/images/running.png' },
  { name: 'Tennis', img: '/images/tennis.png' },
  { name: 'Cycling', img: '/images/cycling.png' },
  { name: 'Swimming', img: '/images/swimming.png' },
];

export default function SportsPage() {
  return (
    <main className="flex flex-col items-center min-h-screen px-4 py-10 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-black text-center">Select Your Sports</h2>
      <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
        {sports.map((sport) => (
          <SportCard key={sport.name} name={sport.name} img={sport.img} />
        ))}
      </div>
      <button
        className="w-full max-w-sm mt-8 py-3 bg-blue-600 text-white rounded-xl text-lg font-semibold shadow hover:bg-blue-700 transition"
      >
        Next
      </button>
    </main>
  );
}
