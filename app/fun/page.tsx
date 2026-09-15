import RandomCat from "../components/RandomCat";

const page = () => {
  return (
    <main className="scrollbar-hide mb-4 lg:mb-13lg:w-2xl md:w-2xl sm:w-xl w-sm mx-auto mt-16 font-[Inter] flex flex-col gap-20">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="text-4xl">fun</p>
          <br />
          <p>random stuff</p>
        </div>
        <RandomCat />
      </div>
    </main>
  );
};

export default page;
