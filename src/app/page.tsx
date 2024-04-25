import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center p-30">
      <button className="p-10 backdrop-blur-0 bg-slate-600 text-white font-bold text-center rounded-lg">
        <Link href="/openai">要約ページへ</Link>
      </button>
    </div>
  );
}
