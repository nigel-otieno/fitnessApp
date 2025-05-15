'use client';
import { FiUser, FiSettings, FiLogOut, FiInfo, FiShare2, FiHeadphones, FiTarget, FiAlertOctagon } from 'react-icons/fi';
import { MdOutlineStarRate } from 'react-icons/md';

export default function SettingsPage() {
  return (
    <main className="bg-white min-h-screen px-6 py-8">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-8">
        <img
          src="https://via.placeholder.com/100"
          alt="User"
          className="w-24 h-24 rounded-full mb-4 shadow"
        />
        <h2 className="text-xl font-semibold text-black">Angel Martinez</h2>
      </div>

      {/* Profile / Settings Buttons */}
      <div className="flex justify-around mb-6">
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-black rounded-xl">
          <FiUser className="text-blue-600" />
          <span className="font-medium">Profile</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-black rounded-xl">
          <FiSettings className="text-blue-600" />
          <span className="font-medium">Settings</span>
        </button>
      </div>

      {/* Workout Settings */}
      <div className="mb-6">
        <h3 className="text-black text-sm mb-2">Fitness Settings</h3>
        <ul className="space-y-4">
          <ListItem icon={<FiTarget className="text-blue-600" />} label="Change Goal" />
        </ul>
      </div>

      {/* More */}
      <div className="mb-6">
        <h3 className="text-gray-600 text-sm mb-2">Support & About</h3>
        <ul className="space-y-4">
            <ListItem icon={<FiAlertOctagon className="text-blue-600" />} label="Report a problem" />
            <ListItem icon={<FiHeadphones className="text-blue-600" />} label="Help" />
            <ListItem icon={<MdOutlineStarRate className="text-blue-600" />} label="Rate Us" />
            <ListItem icon={<FiShare2 className="text-blue-600" />} label="Share with Friends" />
            <ListItem icon={<FiInfo className="text-blue-600" />} label="About FitnessApp" />
        </ul>
      </div>

      {/* Logout */}
      <div className="pt-4 border-t">
        <button className="flex items-center gap-2 text-red-600 font-medium">
          <FiLogOut />
          Log out
        </button>
      </div>
    </main>
  );
}

function ListItem({ icon, label }) {
  return (
    <li className="flex items-center justify-between cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gray-100 rounded-xl">
          {icon}
        </div>
        <span className="text-base text-black">{label}</span>
      </div>
      <span className="text-black">{'>'}</span>
    </li>
  );
}