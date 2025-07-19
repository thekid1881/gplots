import Scoreboard from "@/components/Scoreboard";
import Link from "next/link";
import Image from "next/image";

export default function User() {
    return (
        <div className="mt-28">
            <Link
                href="/"
            >
                <Image
                    className="bg-blue-300 border-solid border-2 border-gray-600 rounded-md p-4 ml-20"
                    src="/geekgriller.png"
                    width={100}
                    height={175}
                    alt="griller"
                />
            </Link>
            <div className="font-sans mt-20 mb-12 text-center font-bold text-5xl">
                <h2>Sarah Bill</h2>
            </div>
            <div className="w-300 h-100 justify-items-center">
                <Scoreboard />
            </div>
        </div>
    );
}