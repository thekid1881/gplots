import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16  font-sans">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <div>
          <Link
            href="/"
            className="text-8xl text-gray-900 font-extrabold"
          >
            Geek Griller
          </Link>
        </div>
        <div className="flex flex-row gap-4 items-center mt-12">
          <Link
            className="rounded-md border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/shows"
          >
            Go to Shows
          </Link>
          <Link
            className="rounded-md border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/signin"
          >
            Sign In
          </Link>
        </div>
      </main>
    </div>
  );
}
