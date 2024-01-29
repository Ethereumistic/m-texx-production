import Image from 'next/image';

const Collect = () => {
  const collectY = [
    {
      src: '/img/collect/clothes.svg',
      title: 'Дрехи',
    },
    {
      src: '/img/collect/shoes.svg',
      title: 'Обувки',
    },
    {
      src: '/img/collect/bag.svg',
      title: 'Чанти',
    },
    {
      src: '/img/collect/acc.svg',
      title: 'Аксесоари',
    },
    {
      src: '/img/collect/toy.svg',
      title: 'Плюшени играчки',
    },
    {
      src: '/img/collect/home.svg',
      title: 'Домакински текстил',
    },
  ];

  const collectN = [
    {
      src: '/img/collect/glass.svg',
      title: 'СТЪКЛО',
    },
    {
      src: '/img/collect/book.svg',
      title: 'ХАРТИЯ',
    },
    {
      src: '/img/collect/tin.svg',
      title: 'МЕТАЛ',
    },
    {
      src: '/img/collect/ban.svg',
      title: 'БИТОВ ОТПАДЪК',
    },
  ];

  return (
    <>
    <div className="flex flex-col items-center justify-center text-center bg-lgreen mb-2 pb-4">
      <h2 className="text-2xl xl:text-4xl font-russo text-dgreen my-4  ">Събираме</h2>
      <div className="flex flex-wrap justify-center">
        {collectY.map((item, index) => (
          <div
            key={index}
            className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4 hover:scale-125 transition-transform duration-300 transform"
          >
            <Image
              src={item.src}
              alt={`Image ${index + 1}`}
              width={200}
              height={200}
              className=''
            />
            <h3 className="text-xl font-russo text-dgreen mb-2">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>

    <div className="flex flex-col items-center justify-center text-center bg-lred pb-4">
      <h2 className="text-2xl xl:text-4xl font-russo text-dred my-4">Моля, не изхвърляйте
</h2>
      <div className="flex flex-wrap justify-around ">
        {collectN.map((item, index) => (
          <div
            key={index}
            className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4 hover:scale-125 transition-transform duration-300 transform"
          >
            <Image
              src={item.src}
              alt={`Image ${index + 1}`}
              width={200}
              height={200}
              className=' '
            />
            <h3 className="text-xl font-russo text-dred">{item.title}</h3>
          </div>
          
        ))}
      </div>
    </div>
    </>
  );
};

export default Collect;
