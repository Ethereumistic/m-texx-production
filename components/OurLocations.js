import Image from 'next/image';
import { useTheme } from 'next-themes';
import Link from 'next/link';
const OurLocations = () => {
    const { theme } = useTheme();

    const locationsTheme = [
      {
        src: theme === 'dark' ? '/img/ourlocations/map.svg' : '/img/ourlocations/map.svg',
        title: '400+',
      },
    ];


  return (
    <>

<div className="flex flex-col items-center justify-center text-center bg-dgreen dark:bg-lgreen my-8 py-8">
  <h2 className="text-2xl xl:text-4xl font-russo text-white dark:text-dgreen mb-8">
    Над 400 локации из цяла България
  </h2>
  
  <div className="flex flex-wrap justify-center">
  <Link href="/locations">
    <div className="flex flex-col w-[400px] pr-12 py-16 text-right text-white dark:text-dgreen mb-2 hover:scale-110 transition duration-300">
      <h3 className="text-xl font-russo mb-2">
        Текстилни контейнери, които не само са лесни за употреба, 
        но и се отличават със свежи зелени цветове, лесни за разпознаване. 
        Тези контейнери са проектирани така, че да осигурят надеждна защита 
        на събраните текстилни изделия от външни атмосферни влияния.
      </h3>      
      
      <button className='flex border-2 text-lg font-russo border-lgreen dark:border-dgreen dark:hover:bg-dgreen hover:bg-lgreen dark:hover:text-white hover:text-dgreen transition duration-300 rounded-full mx-auto mt-16 py-2 px-8'>Намери локация близо до теб</button>

    </div>
</Link>
    <Link href="/locations">
      <Image
        src={locationsTheme[0].src}
        alt={`test`}
        width={800}
        height={20}
        className='hidden md:block md:scale-90 hover:scale-110 transition duration-300'
      />
    </Link>
    <Link href="/locations">
      <Image
        src={`/img/ourlocations/container-bg-plain.png`}
        alt={`test`}
        width={500}
        height={420}
        className='hover:scale-110 transition duration-300'
      />
    </Link>
  </div>
</div>


    </>
  );
};

export default OurLocations;