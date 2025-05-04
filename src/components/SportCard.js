export default function SportCard({ name, img }) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl bg-gray-100 p-4 shadow hover:bg-blue-600 hover:text-white transition cursor-pointer min-h-[120px] text-center text-lg font-semibold text-black">
        <img src={img} alt={name} className="w-12 h-12 mb-2" />
        {name}
      </div>
    );
  }
  