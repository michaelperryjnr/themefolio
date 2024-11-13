import { notFound } from "next/navigation";
import { allPosts } from "@/./.contentlayer/generated";
import { Metadata } from "next";
import { MDXComponent as Mdx, MotionDiv } from "@/components";

interface PostsProps {
  params: {
    slug: string[];
  };
}

const variant = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

async function getPostFromParams(slug: string[]): Promise<any | null> {
  const slugString = slug.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slugString);

  if (!post) {
    return null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostsProps): Promise<Metadata> {
  const post = await getPostFromParams(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title + " | Posts",
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<PostsProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostsPage({ params }: PostsProps) {
  const post = await getPostFromParams(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <MotionDiv
      className="mx-auto mb-20"
      initial="hidden"
      animate="visible"
      variants={variant}
    >
      <article className="prose dark:prose-invert leading-8">
        <h1 className="mt-6 sm:mt-10 mb-2 text-xl sm:text-3xl font-bold">
          {post.title}
        </h1>

        <div className="flex gap-x-2 w-full">
          <p className="text-sm sm:text-xl font-normal mt-0 text-slate-700 dark:text-slate-200">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-sm sm:text-xl font-normal mt-0 text-slate-700 dark:text-slate-200">
            •
          </p>
          <p className="text-sm sm:text-xl font-normal mt-0 text-slate-700 dark:text-slate-200">
            {post.readTimeMinutes}
          </p>
        </div>

        <div className="min-w-full">
          <Mdx code={post.body.code} />
        </div>
      </article>
    </MotionDiv>
  );
}
