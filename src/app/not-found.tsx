import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-center text-white py-20">
      <h1 className="text-blue-500 text-[201px] font-extrabold leading-[210px]">
        404
      </h1>
      <p className="my-5 text-lg">PAGE NOT FOUND!</p>
      <p className="text-gray-400">
        YOU SEEM TO BE TRYING TO FIND YOUR WAY HOME
      </p>
      <Link href="/">
        <button className="mt-6 rounded-full bg-blue-500 text-white px-6 py-2 hover:bg-blue-600 transition duration-300">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
