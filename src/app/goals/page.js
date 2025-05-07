'use client';
import GoalCard from '@/components/GoalCard';

const goals = [
  { name: 'Lose Weight', img: '/images/weight-loss.png' },
  { name: 'Build Muscle', img: '/images/muscle.png' },
  { name: 'Improve Endurance', img: '/images/endurance.png' },
  { name: 'Stay Active', img: '/images/active.png' },
  { name: 'Cardiovascular Health', img: '/images/cardiovascular.png' },
  { name: 'Recomposition', img: '/images/recomposition.png' },
  { name: 'Increase Strength', img: '/images/strength.png' },
  { name: 'Improve Speed', img: '/images/speed.png' },
  { name: 'Increase Flexibility', img: '/images/flexibility.png' },
  { name: 'Improve Athletic Performance', img: '/images/athletic-performance.png' },
];

export default function GoalsPage() {
  return (
    <main className="flex flex-col items-center min-h-screen px-4 py-10 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-black text-center">What’s Your Goal?</h2>
      <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
        {goals.map((goal) => (
          <GoalCard key={goal.name} name={goal.name} img={goal.img} />
        ))}
      </div>
      <button
        className="w-full max-w-sm mt-8 py-3 bg-blue-600 text-white rounded-xl text-lg font-semibold shadow hover:bg-blue-700 transition"
      >
        Finish
      </button>
    </main>
  );
}
