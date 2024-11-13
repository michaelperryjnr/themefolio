import NotFound from "@/app/not-found";
import { allThoughts } from "@/.contentlayer/generated";

import { Metadata } from "next";
import { MDXComponent, MotionDiv } from "@/components";

interface ThoughtsProps {
  params: {
    slug: string[];
  };
}

const variant = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

async function getThoughtsFromParams(params: ThoughtsProps["params"]) {
  const slug = params.slug.join("/");
  const thought = allThoughts.find((thought) => thought.slug === slug);
  if (!thought) {
    return null;
  }
  return thought;
}

export async function generateMetadata({
  params,
}: ThoughtsProps): Promise<Metadata> {
  const thought = await getThoughtsFromParams(params);
  if (!thought) {
    return {};
  }
  return {
    title: thought.title,
  };
}

export async function generateStaticProps(): Promise<
  ThoughtsProps["params"][]
> {
  return allThoughts.map((thought) => ({
    slug: thought.slug.split("/"),
  }));
}

export default async function ThoughPage({ params }: ThoughtsProps) {
  const thought = await getThoughtsFromParams(params);
  if (!thought) {
    return <NotFound />;
  }
  return (
    <MotionDiv initial="hidden" animate="visible" variants={variant}>
      <article className="prose dark:prose-invert leading-8">
        <h1 className="mb-2 font-medium text-2xl">{thought.title}</h1>

        <div className="flex gap-x-2">
          <p className="text-base mt-0 text-slate-700 dark:text-slate-200">
            {new Date(thought.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-base mt-0 text-slate-700 dark:text-slate-200">•</p>

          <p className="text-base mt-0 text-slate-700 dark:text-slate-200">
            {thought.readTimeMinutes}
          </p>
        </div>

        <MDXComponent code={thought.body.code} />
      </article>
    </MotionDiv>
  );
}
