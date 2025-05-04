export default function InputField({ label, name, type = 'text' }) {
    return (
      <div className="w-full">
        <label htmlFor={name} className="block text-sm font-medium text-black mb-1">
          {label}
        </label>
        <input
          id={name}
          name={name}
          type={type}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
    );
  }
  