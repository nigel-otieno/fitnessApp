'use client';

import { FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaUsers } from 'react-icons/fa';
import Link from 'next/link';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const events = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: `Event ${i + 1}`,
  date: '2025-06-01',
  time: '18:00',
  location: `123 Event Rd #${i + 1}, San Francisco, CA`,
  rsvpCount: Math.floor(Math.random() * 100),
  lat: 37.7749 + Math.random() * 0.02,
  lng: -122.4194 + Math.random() * 0.02,
  description: 'An exciting community robotics event with demos, workshops, and networking opportunities.'
}));

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <Link href="/dashboard">
            <FaArrowLeft className="text-blue-600 hover:text-blue-800" size={20} />
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">Events</h1>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{event.description}</p>
            <div className="text-sm text-gray-700 space-y-1 mb-4">
              <div className="flex items-center space-x-2">
                <FaCalendarAlt />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaClock />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaUsers />
                <span>{event.rsvpCount} RSVPs</span>
              </div>
            </div>
            <MapContainer center={[event.lat, event.lng]} zoom={13} className="h-40 w-full rounded-md mb-3">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[event.lat, event.lng]}>
                <Popup>{event.title}</Popup>
              </Marker>
            </MapContainer>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(event.location)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm underline hover:text-blue-800"
            >
              Get Directions
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}
