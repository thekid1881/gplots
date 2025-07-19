import QuizForm from "@/components/QuizForm";
import Scoreboard from "@/components/Scoreboard";
import Image from "next/image";
import Link from "next/link";

export default function Scrubs() {
  return (
      <main className="flex flex-col items-center justify-items-center font-sans">
        <div className="justify-items-center mt-20">
          <Link
            href="/user"
            className="border-solid border-2 border-gray-600 rounded-md p-4 m-12 justify-end"
          >
            User Page
          </Link>
          <div>
            <h1 className="text-center mt-12 text-3xl font-bold">
              Scrubs Quiz
            </h1>
              <Image
                  className="justify-center mx-100 w-36 h-28 m-4 border-solid border-2 border-gray-600 rounded-md"
                  src="/scrubs.png"
                  width={200}
                  height={200}
                  alt="Scrubs image"
              />
            <QuizForm />
          </div>
          <div>
            <Scoreboard />
          </div>
        </div>
      </main>
  );
}