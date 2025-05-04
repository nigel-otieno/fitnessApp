export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 bg-white">
      <h1 className="text-5xl font-extrabold mb-10 text-black">MyApp</h1>
      <div className="flex flex-col w-full max-w-sm space-y-4">
        <a
          href="/login"
          className="w-full py-3 text-center bg-blue-600 text-white rounded-xl text-lg font-semibold shadow hover:bg-blue-700 transition"
        >
          Login
        </a>
        <a
          href="/signup"
          className="w-full py-3 text-center bg-blue-600 text-white rounded-xl text-lg font-semibold shadow hover:bg-blue-700 transition"
        >
          Sign Up
        </a>
      </div>
    </main>
  );
}
