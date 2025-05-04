'use client';
import { useState } from 'react';
import { FaUserCircle, FaBell, FaCheckCircle } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Link from 'next/link';

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

const itemsPerPage = 4;

export default function DashboardPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(events.length / itemsPerPage);
  const currentEvents = events.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="w-full bg-gray-200 text-black px-6 py-4 shadow flex justify-between items-center">
  <div className="flex space-x-4 items-center">
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

      {/* Map section */}
        <MapContainer center={[37.77, -122.41]} zoom={13} className="w-full h-64">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {events.map((event) => (
            <Marker key={event.id} position={[event.lat, event.lng]}>
            <Popup>{event.name}</Popup>
            </Marker>
        ))}
        </MapContainer>

      {/* Event list */}
      <div className="max-w-5xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4 text-black">Events</h2>
        <div className="grid gap-4">
          {currentEvents.map((event) => (
            <div key={event.id} className="flex bg-gray-100 rounded-lg shadow overflow-hidden">
              <img src={event.image} alt={event.title} className="w-40 h-40 object-cover" />
              <div className="p-4 flex flex-col justify-between w-full">
                <div>
                  <h3 className="text-xl font-semibold text-black">{event.title}</h3>
                  <p className="text-sm text-gray-600">Posted by: {event.postedBy}</p>
                  <p className="text-sm text-gray-600">Location: {event.location}</p>
                </div>
                <div className="flex justify-between text-sm text-gray-700 mt-2">
                  <span>Date: {event.date}</span>
                  <span>Time: {event.time}</span>
                  <span>RSVPs: {event.rsvpCount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination controls */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-black">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
