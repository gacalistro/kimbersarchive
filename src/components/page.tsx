import { Icon } from "./icon";
import { Article } from "./article";
import { ThemeToggle } from "./theme-toggle";
import content from "../content.json";

export function Page() {
  return (
    <div className="font-mono select-none cursor-default bg-light-50 dark:bg-dark-900 transition-colors duration-500">
      <header className="px-[4%] py-4 flex items-center justify-between text-dark-900 dark:text-light-200">
        <h1 className="font-semibold text-2xl flex items-center group relative">
          <span className="max-md:hidden absolute text-[9px] bottom-2 -left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            quack
          </span>
          <Icon className="size-6 group-hover:rotate-6 transition-transform duration-200" />
          's Archive
        </h1>

        <ThemeToggle />
      </header>

      <main className="max-w-[800px] max-lg:px-[4%] mx-auto text-dark-900 dark:text-light-200">
        <section className="py-20">
          <span>bem-vindo ao</span>
          <h2 className="text-4xl my-2 font-bold">Kimber's Archive</h2>
          <p className="tracking-wide text-dark-700 dark:text-light-300">
            Tudo o que você precisa saber sobre as aulas está aqui. Kimber
            sempre terá a resposta!
          </p>
        </section>

        <section className="flex flex-col gap-4 pb-20">
          <h3 className="text-center">Chegamos ao fim do 1º semestre!</h3>

          {[...content].reverse().map((item, index) => (
            <Article {...item} key={item.startDate} highlight={index == 0} />
          ))}
        </section>
      </main>
    </div>
  );
}
