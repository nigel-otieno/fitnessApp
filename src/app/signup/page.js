'use client';
import InputField from '@/components/InputField';

export default function SignupPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-black">Create Your Account</h2>
      <form className="w-full max-w-sm space-y-5">
        <InputField label="First Name" name="firstName" placeholder="John" />
        <InputField label="Last Name" name="lastName" placeholder="Doe" />
        <InputField label="Username" name="username" placeholder="john_doe" />
        <InputField label="Email" name="email" type="email" placeholder="john@example.com" />
        <InputField label="Password" name="password" type="password" />
        <InputField label="Confirm Password" name="confirmPassword" type="password" />

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-xl text-lg font-semibold shadow hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
      </form>
    </main>
  );
}
