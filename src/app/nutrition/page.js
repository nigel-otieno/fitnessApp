'use client';

import { FaFireAlt, FaHeartbeat, FaUtensils, FaListUl } from 'react-icons/fa';

export default function NutritionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center text-white text-xl font-bold">N</div>
          <h1 className="text-4xl font-extrabold text-gray-800">Today</h1>
        </div>
        <div className="text-right">
          <span className="text-3xl font-semibold text-blue-600">1</span>
          <p className="text-md text-gray-500">Day Streak</p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Calories Box */}
        <div className="bg-white border-l-4 border-green-500 rounded-2xl shadow-md p-6 col-span-1">
          <div className="flex items-center mb-4 text-green-600">
            <FaFireAlt className="mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800">Calories</h2>
          </div>
          <p className="text-sm text-gray-500 mb-4">Remaining = Goal - Food + Exercise</p>
          <div className="flex items-center justify-between">
            <div className="text-5xl font-bold text-green-600">2090</div>
            <div className="space-y-1 text-sm text-gray-600">
              <div>Base Goal: <strong>2090</strong></div>
              <div>Food: <strong>0</strong></div>
              <div>Exercise: <strong>0</strong></div>
            </div>
          </div>
        </div>

        {/* Macros with percentages */}
        <div className="bg-white border-l-4 border-blue-500 rounded-2xl shadow-md p-6 col-span-1">
          <div className="flex items-center mb-6 text-blue-600">
            <FaUtensils className="mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800">Macros</h2>
          </div>
          <div className="flex justify-around text-center">
            <div>
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-2 mx-auto text-blue-700 font-bold text-xl shadow-inner">
                50%
              </div>
              <p className="text-base text-gray-700">Carbs</p>
            </div>
            <div>
              <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-2 mx-auto text-purple-700 font-bold text-xl shadow-inner">
                20%
              </div>
              <p className="text-base text-gray-700">Fat</p>
            </div>
            <div>
              <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mb-2 mx-auto text-orange-700 font-bold text-xl shadow-inner">
                30%
              </div>
              <p className="text-base text-gray-700">Protein</p>
            </div>
          </div>
        </div>

        {/* Heart Healthy */}
        <div className="bg-white border-l-4 border-red-400 rounded-2xl shadow-md p-6">
          <div className="flex items-center mb-4 text-red-500">
            <FaHeartbeat className="mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800">Heart Healthy</h2>
          </div>
          <ul className="space-y-2 text-gray-700 text-base">
            <li>Fat: <span className="text-gray-400">—</span></li>
            <li>Sodium: <span className="text-gray-400">—</span></li>
            <li>Cholesterol: <span className="text-gray-400">—</span></li>
          </ul>
        </div>

        {/* Low Carb */}
        <div className="bg-white border-l-4 border-yellow-400 rounded-2xl shadow-md p-6">
          <div className="flex items-center mb-4 text-yellow-500">
            <FaUtensils className="mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800">Low Carb</h2>
          </div>
          <ul className="space-y-2 text-gray-700 text-base">
            <li>Net Carbs: <span className="text-gray-400">—</span></li>
            <li>Sugar: <span className="text-gray-400">—</span></li>
            <li>Fiber: <span className="text-gray-400">—</span></li>
          </ul>
        </div>

        {/* Custom Summary */}
        <div className="bg-white border-l-4 border-indigo-400 rounded-2xl shadow-md p-6">
          <div className="flex items-center mb-2 text-indigo-500">
            <FaListUl className="mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800">Custom Summary</h2>
          </div>
          <a href="#" className="text-blue-500 text-sm underline mb-3 block">Change Nutrients</a>
          <ul className="space-y-2 text-gray-700 text-base">
            <li>Carbs: <span className="text-gray-400">—</span></li>
            <li>Fat: <span className="text-gray-400">—</span></li>
            <li>Protein: <span className="text-gray-400">—</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
