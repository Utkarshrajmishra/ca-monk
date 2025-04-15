const Home = () => {
  return (
    <main className="h-fit  font-inter  w-[627px] flex-col flex items-center justify-center p-2">
      <div className="text-center">
        <h1 className="text-4xl font-medium">Sentence Constuction</h1>
        <p className="text-center text-lg mt-3 tracking-wide text-zinc-500">
          Select the correct words to complete the sentence by arranging <br />{" "}
          the provided optins in the right order
        </p>
      </div>
      <section className="flex justify-between mt-10 w-full max-w-lg mb-8">
        <div className="flex flex-col text-lg items-center text-center w-1/3">
          <p className="font-medium mb-1">Time Per Question</p>
          <p className="text-zinc-500">30 sec</p>
        </div>
        <div className="flex flex-col text-lg items-center text-center w-1/3">
          <p className="font-medium mb-1">Total Questions</p>
          <p className="text-zinc-500">10</p>
        </div>
        <div className="flex flex-col  text-lg items-center text-center w-1/3">
          <p className="font-medium mb-1">Coins</p>
          <p className="text-zinc-500">0</p>
        </div>
      </section>

      <div className="flex gap-4">
        <button className="py-[6px] w-32 border-1 border-purple-700 bg-white">
          Back
        </button>
        <button className="py-[6px] w-32 bg-purple-700">Start</button>
      </div>
    </main>
  );
};

export default Home;
