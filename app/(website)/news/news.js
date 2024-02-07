import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";

export default function Post({ posts }) {
  return (
    <>
      {posts && (
        <Container>
          <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
            {posts.slice(0, 2).map(post => (
              <PostList
                key={post._id}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
            {posts.slice(2, 14).map(post => (
              <PostList key={post._id} post={post} aspect="square" />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/archive"
              className="relative inline-flex items-center gap-1 rounded-full border border-dgreen bg-white px-3 py-2 pl-4 text-sm font-medium text-dgreen hover:scale-110 hover:bg-lgreen focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-lgreen dark:bg-dgreen dark:text-white transition duration-300">
              <span>Виж всички Статии</span>
            </Link>
          </div>
        </Container>
      )}
    </>
  );
}
