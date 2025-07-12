import Image from "next/image";
import Link from "next/link";

export default function Shows() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16  font-sans">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <div>
          <Link
            href="/"
            className="text-8xl text-gray-900 font-extrabold"
          >
            Pick Your Show
          </Link>
        </div>
        <div className="flex flex-row gap-4 items-center mt-12">
            <Link
                href="/scrubs"
            >
                <Image
                    src="/scrubs.png"
                    width={200}
                    height={200}
                    alt="Scrubs image"
                />
            </Link>
            <Link
                href="/house"
            >
                <Image
                    src="/house.png"
                    width={200}
                    height={200}
                    alt="House image"
                />
            </Link>
        </div>
      </main>
    </div>
  );
}
