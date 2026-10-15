import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center text-white py-20 px-4">
      <h1
        className="text-gradient text-[140px] sm:text-[201px] font-extrabold leading-none"
        style={{ textShadow: "0 20px 60px rgba(129,140,248,0.35)" }}
      >
        404
      </h1>
      <p className="my-5 text-lg tracking-widest">PAGE NOT FOUND!</p>
      <p className="text-gray-400">
        YOU SEEM TO BE TRYING TO FIND YOUR WAY HOME
      </p>
      <Link href="/" className="btn-glow mt-8 rounded-xl px-6 py-3 font-semibold text-white">
        Back to Home
      </Link>
    </div>
  );
}
