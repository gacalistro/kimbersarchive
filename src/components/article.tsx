import { clsx } from "clsx";
import { ArrowRight, ExternalLink } from "lucide-react";
import formatDate from "../utils/formatDate";

interface ArticleProps {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  url: string;
  highlight: boolean;
}

export default function Article({
  title,
  description,
  startDate,
  endDate,
  url,
  highlight,
}: ArticleProps) {
  return (
    <article>
      <a
        href={url}
        target="_blank"
        className={clsx(
          "flex flex-col gap-2 border rounded p-6 hover:bg-slate-100/50 transition-colors duration-300 cursor-default",
          highlight && "bg-slate-800 hover:bg-slate-800/90 text-slate-200"
        )}
      >
        <div className="flex items-center justify-between">
          <h3
            className={clsx(
              "font-semibold text-xl basis-5/6",
              highlight && "text-slate-100"
            )}
          >
            {title}
          </h3>
          <ExternalLink size={20} />
        </div>
        <p className={clsx("text-sm", !highlight && "text-slate-700")}>
          {description}
        </p>
        <div
          className={clsx(
            "flex items-center gap-4 ",
            !highlight && "text-slate-700"
          )}
        >
          <span>{formatDate(startDate)}</span>
          <ArrowRight size={16} />
          <span>{formatDate(endDate)}</span>
        </div>
      </a>
    </article>
  );
}
