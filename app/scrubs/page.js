import QuizForm from "@/components/QuizForm";
import Scoreboard from "@/components/Scoreboard";

export default function Scrubs() {
  return (
      <main className="flex flex-col items-center justify-items-center font-sans">
        <div className="justify-items-center">
          <div>
            <h1 className="text-center mt-12 text-3xl font-bold">Scrubs Quiz</h1>
            <QuizForm />
          </div>
          <div>
            <Scoreboard />
          </div>
        </div>
      </main>
  );
}