'use client';
import InputField from '@/components/InputField';

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-black text-center">Tell Us About Yourself</h2>
      <form className="w-full max-w-sm space-y-5">
        <InputField label="First Name" name="firstName" />
        <InputField label="Last Name" name="lastName" />
        <InputField label="Age" name="age" type="number" />
        <InputField label="Gender" name="gender" />
        <InputField label="Height (cm)" name="height" type="number" />
        <InputField label="Weight (kg)" name="weight" type="number" />
        <InputField label="Body Fat (%)" name="bodyFat" type="number" />

        <div className="w-full">
          <label htmlFor="activityLevel" className="block text-sm font-medium text-black mb-1">
            Activity Level
          </label>
          <select
            id="activityLevel"
            name="activityLevel"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="">Select an option</option>
            <option value="sedentary">Sedentary (little to no exercise)</option>
            <option value="light">Lightly active (1–3 days/week)</option>
            <option value="moderate">Moderately active (3–5 days/week)</option>
            <option value="active">Active (6–7 days/week)</option>
            <option value="athlete">Athlete (intense training)</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-xl text-lg font-semibold shadow hover:bg-blue-700 transition"
        >
          Next
        </button>
      </form>
    </main>
  );
}
