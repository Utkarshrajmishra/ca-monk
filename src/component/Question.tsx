import ProgressBar from "./ProgressBar";

type QuestionTypes = {
  questionId: string;
  question: string;
  questionType: string;
  answerType: string;
  options: string[];
  correctAnswer: string[];
};

type currentQuestionProps = {
  currentQuestion: number;
  timer: number;
  questions: QuestionTypes[];
};

const Question = ({
  currentQuestion,
  timer,
  questions,
}: currentQuestionProps) => {
  return (
    <section className="w-[850px] font-inter h-fiot bg-white rounded-2xl shadow p-8">
      <div className="flex justify-between">
        <p className="text-lg font-semibold text-neutral-500">{`0:${timer}`}</p>
        <button className="border-1 text-sm border-zinc-300 py-1 px-4 rounded">
          Quit
        </button>
      </div>
      <div className=" mt-6">
        <ProgressBar />
        <p className="text-center  font-medium text-neutral-500 text-lg mt-8">
          Select the missing words in the correct order
        </p>
      </div>
      <div className="px-8 mt-10">
        <p className="text-lg text-neutral-800 leading-10">
          {questions[currentQuestion].question}
        </p>
      </div>
      <div className="flex justify-center gap-3 mt-4">
        {questions[currentQuestion].options?.map((item) => (
          <p className="text-sm p-1 rounded text-neutral-700 border-1 border-zinc-500">
            {item}
          </p>
        ))}
      </div>
      <div className="flex items-end justify-end mt-10">
        <button className="bg-blue-900  p-2">Nll</button>
      </div>
    </section>
  );
};

export default Question;
