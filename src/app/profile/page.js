'use client';
import InputField from '@/components/InputField';
import Link from 'next/link';

export default function ProfilePage() {
  return (
    <main className="flex flex-col items-center min-h-screen px-4 py-10 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-black">My Profile</h2>
      <form className="w-full max-w-sm space-y-5">
        <InputField label="Username" name="username" />
        <InputField label="Email" name="email" type="email" />
        <InputField label="First Name" name="firstName" />
        <InputField label="Last Name" name="lastName" />
        <InputField label="Age" name="age" type="number" />
        <InputField label="Gender" name="gender" />
        <InputField label="Height (cm)" name="height" type="number" />
        <InputField label="Weight (kg)" name="weight" type="number" />
        <InputField label="Body Fat (%)" name="bodyFat" type="number" />
        <InputField label="Change Password" name="password" type="password" />

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-xl text-lg font-semibold shadow hover:bg-blue-700 transition"
        >
          Save Changes
        </button>
      </form>
    </main>
  );
}
