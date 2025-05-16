'use client';

import { useState, useEffect } from 'react';
import { FaUserCircle, FaBell, FaCheckCircle, FaUsers } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Link from 'next/link';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const events = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Event ${i + 1}`,
  postedBy: `User ${i + 1}`,
  location: `Location ${i + 1}`,
  image: `https://source.unsplash.com/random/800x400?sig=${i}`,
  date: '2025-06-01',
  time: '18:00',
  rsvpCount: Math.floor(Math.random() * 100),
  lat: 37.77 + Math.random() * 0.1,
  lng: -122.41 + Math.random() * 0.1,
}));

const activityData = [
  { date: 'Mon', activity: 1 },
  { date: 'Tue', activity: 3 },
  { date: 'Wed', activity: 2 },
  { date: 'Thu', activity: 4 },
  { date: 'Fri', activity: 5 },
];

const workoutPlan = {
  Monday: 'Upper Body Strength Training',
  Tuesday: 'Cardio + Core',
  Wednesday: 'Lower Body Strength Training',
  Thursday: 'Mobility & Active Recovery',
  Friday: 'Full Body HIIT',
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="w-full bg-gray-200 text-black px-6 py-4 shadow flex justify-between items-center">
        <div className="flex space-x-4 items-center">
          <FaUsers size={28} className="cursor-pointer" title="Community" />
          <FaBell size={24} className="cursor-pointer" />
          <FaCheckCircle size={24} className="cursor-pointer" />
          <Link href="/profile">
            <FaUserCircle size={30} className="cursor-pointer hover:text-blue-600" />
          </Link>
        </div>
        <div>
          <span className="text-xl font-bold">MyApp Dashboard</span>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-4 space-y-6">
        <section className="bg-blue-100 rounded-xl p-6 shadow">
          <h2 className="text-2xl font-bold mb-4">🔥 Top Upcoming Events</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {events.slice(0, 3).map((event) => (
              <div key={event.id} className="bg-white rounded-lg p-4 shadow hover:shadow-md transition">
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.date}</p>
                <p className="mt-2 text-gray-800">{event.location}</p>
                <button className="mt-4 text-blue-600 hover:underline">View Details</button>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-2xl font-bold mb-4">📈 Activity Monitor</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={activityData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Line type="monotone" dataKey="activity" stroke="#2563eb" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </section>

        <section className="bg-gray-100 rounded-xl p-6 shadow">
          <h2 className="text-2xl font-bold mb-4 text-black">💪 Weekly Workout Plan</h2>
          <ul className="space-y-3">
            {Object.entries(workoutPlan).map(([day, activity]) => (
              <li key={day} className="border-b pb-2">
                <p className="text-lg font-semibold text-blue-700">{day}</p>
                <p className="text-base text-gray-700">{activity}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}