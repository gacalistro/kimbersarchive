import Article from "./article";
import content from "../content.json";

export default function Page() {
  return (
    <div className="font-mono select-none cursor-default">
      <header className="px-[4%] py-4">
        <h1 className="font-semibold text-2xl flex items-center">
          <img
            src="https://www.svgrepo.com/show/479843/duck-toy-illustration-3.svg"
            alt="Duck"
            className="w-6"
          />
          's Archive
        </h1>
      </header>

      <main className="max-w-[800px] max-lg:px-[4%] mx-auto">
        <section className="py-20">
          <span>bem-vindo ao</span>
          <h2 className="text-4xl my-2 font-bold">Kimber's Archive</h2>
          <p className="tracking-wide text-gray-700">
            Tudo o que você precisa saber sobre as aulas está aqui. Kimber
            sempre terá a resposta!
          </p>
        </section>

        <section className="flex flex-col gap-4 pb-20">
          {[...content].reverse().map((item, index) => (
            <Article {...item} key={item.startDate} highlight={index == 0} />
          ))}
        </section>
      </main>
    </div>
  );
}
