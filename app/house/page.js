import HouseForm from "@/components/HouseForm";
import Scoreboard from "@/components/Scoreboard";
import Image from "next/image";

export default function Scrubs() {
  return (
      <main className="flex flex-col items-center justify-items-center font-sans">
        <div className="justify-items-center">
          <div>
            <h1 className="text-center mt-12 text-3xl font-bold">
              House Quiz
            </h1>
              <Image
                  className="justify-center mx-100 w-36 h-28 m-4 border-solid border-2 border-gray-600 rounded-md"
                  src="/house.png"
                  width={200}
                  height={200}
                  alt="House image"
              />
            <HouseForm />
          </div>
          <div>
            <Scoreboard />
          </div>
        </div>
      </main>
  );
}