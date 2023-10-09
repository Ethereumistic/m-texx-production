import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import Image from 'next/image';


export default function Post({ posts }) {
  return (
    <>
      {/* {posts && (
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
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
            {posts.slice(2, 14).map(post => (
              <PostList key={post._id} post={post} aspect="square" />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/archive"
              className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
              <span>View all Posts</span>
            </Link>
          </div>
        </Container>
      )} */}
      {/* <div className="text-center text-4xl">САМО ЛОКАЦИИТЕ РАБОТЯТ</div> */}
      <div className="relative ">
        {/* Mobile Background Video */}
        <video className="-mt-6 brightness-75 md:hidden" src="/img/background2.mp4" autoPlay loop muted playsInline></video>
        {/* Desktop Background Video */}
        <video className="hidden md:block xl:rounded-lg -mt-6 brightness-75" src="/img/bgvideo.webm" autoPlay loop muted playsInline></video>


          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center">
              <h1 class="mx-16 text-md xl:text-5xl text-white font-bold text-right">Рециклиране на текстил: Втори живот за стари дрехи, 
              <br />
              първа стъпка към...</h1>
              <button class="text-md xl:text-2xl mr-4 mt-4 bg-transparent border border-white hover:bg-green-500 hover:border-green-500 text-white py-1 px-2 xl:py-4 xl:px-8 rounded-full float-right">Рециклиране на Текстил</button>
            </div>
          </div>

      </div>
    </>
  );
}
