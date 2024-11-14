import { allThoughts } from "@/./.contentlayer/generated";
import { MotionDiv } from "@/components";
import { format } from "date-fns";
import Link from "next/link";
import React from "react";

const variant = {
  hidden: { opacity: 0, y: -5 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Thoughts = () => {
  return (
    <MotionDiv
      initial="hidden"
      animate="visible"
      variants={variant}
      className="space-y-4"
    >
      {allThoughts
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((post) => (
          <article key={post._id} className="">
            <div className="flex flex-col gap-[0.1rem] items-start">
              <Link
                href={post.slug}
                className="flex gap-4 justify-center items-center mt-6 text-xs sm:text-lg sm:mt-12 font-medium"
              >
                <span>{format(new Date(post.date), "yyyy-MM-dd")}</span>

                <h2 className="t hover:underline decoration-grey-100 hover:decoration-1 mb-1">
                  {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                </h2>
              </Link>
              <div className="h-[1px] w-full bg-ground-100"></div>
            </div>
          </article>
        ))}
    </MotionDiv>
  );
};

export default Thoughts;
