import Image from 'next/image';

const HowToCards = () => {
  const en = [
    {
      src: '/img/cards/clothes.png',
      title: 'Съберете чистите си дрехи, обувки и други текстилни изделия в торба.',
    },
    {
      src: '/img/cards/container-bag-en.png',
      title: 'Издърпайте дръжката максимално надолу и пъхнете торбата на обозначеното място.',
    },
    {
      src: '/img/cards/container-en.png',
      title: 'Вдигнете дръжката нагоре и я освободете.',
    },
];

const bg = [
    {
      src: '/img/cards/clothes.png',
      title: 'Дрехи',
    },
    {
      src: '/img/cards/container-bag-bg.png',
      title: 'Обувки',
    },
    {
      src: '/img/cards/container-bg.png',
      title: 'Чанти',
    },
];

return (
    <>
    <div className=''>
    <div className="flex flex-wrap justify-center">
        {en.map((item, index) => (
          <div
            key={index}
            className="px-12 border border-black"
          >
            <div className='bg-green-100 dark:bg-gray-800 p-4 rounded-xl'>
            <Image
                className='hover:scale-110 transition'
              src={item.src}
              alt={`Image ${index + 1}`}
              width={200}
              height={200}
            />
            </div>
            <p className="my-2 text-center w-48 mx-auto">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
    </>
);
};

export default HowToCards;