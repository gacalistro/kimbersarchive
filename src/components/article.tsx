import { clsx } from "clsx";
import { ArrowRight, ExternalLink } from "lucide-react";
import formatDate from "../utils/formatDate";
import { motion } from "framer-motion";

interface ArticleProps {
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  url: string;
  highlight: boolean;
}

export function Article({
  title,
  description,
  startDate,
  endDate,
  url,
  highlight,
}: ArticleProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ margin: "-80px 0px -60px 0px" }}
      transition={{ ease: "easeInOut", duration: 0.6 }}
    >
      <a
        href={url}
        target="_blank"
        className={clsx(
          "flex flex-col gap-2 border rounded-lg p-6 transition-colors duration-200 cursor-default",
          highlight &&
            "bg-dark-800 hover:bg-dark-800/95 text-light-200 dark:border-dark-500 dark:bg-dark-800/50 dark:hover:border-dark-400",
          !highlight &&
            "hover:bg-light-100/75 hover:border-dark-600 dark:border-dark-700 dark:hover:border-dark-500 dark:hover:bg-dark-800/15"
        )}
      >
        <div className="flex items-center justify-between">
          <h3
            className={clsx(
              "font-semibold text-xl basis-5/6",
              highlight && "text-light-100"
            )}
          >
            {title}
          </h3>
          <ExternalLink size={20} />
        </div>

        <p
          className={clsx(
            "text-sm dark:text-dark-300",
            !highlight && "text-dark-700"
          )}
        >
          {description}
        </p>

        <div
          className={clsx(
            "flex items-center gap-4 dark:text-dark-400",
            !highlight && "text-dark-700"
          )}
        >
          <span>{formatDate(startDate)}</span>
          <ArrowRight size={16} />
          <span>{endDate ? formatDate(endDate) : "?"}</span>
        </div>
      </a>
    </motion.article>
  );
}
