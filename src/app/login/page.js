'use client';
import InputField from '@/components/InputField';

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <h2 className="text-3xl font-bold mb-6">Welcome Back</h2>
      <form className="w-full max-w-sm space-y-4">
        <InputField label="Username or Email" name="identifier" />
        <InputField label="Password" name="password" type="password" />
        <button
  type="submit"
  className="w-full py-3 bg-primary text-light rounded-xl text-lg font-medium shadow hover:bg-dark transition"
>
  Continue
</button>

      </form>
    </main>
  );
}
