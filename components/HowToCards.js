import Image from 'next/image';

const HowToCards = () => {
  const en = [
    {
      src: '/img/cards/clothes.png',
      title: 'Съберете чистите си дрехи, обувки и други текстилни изделия в торба.',
      desc: '1 Стъпка',
    },
    {
      src: '/img/cards/container-bag-en.png',
      title: 'Издърпайте дръжката максимално надолу и пъхнете торбата на обозначеното място.',
      desc: '2 Стъпка',
    },
    {
      src: '/img/cards/container-en.png',
      title: 'Вдигнете дръжката нагоре и я освободете.',
      desc: '3 Стъпка',
    },

];

const bg = [
    {
      src: '/img/cards/clothes.png',
      title: 'Дрехи',
      desc: '',
    },
    {
      src: '/img/cards/container-bag-bg.png',
      title: 'Обувки',
      desc: '',
    },
    {
      src: '/img/cards/container-bg.png',
      title: 'Чанти',
      desc: '',
    },
];

return (
    <>
    <div className=''>
    <div className="flex flex-wrap justify-center my-12 ">
        {en.map((item, index) => (
          <div
            key={index}
            className="px-20 py-16 mx-16 my-4 border border-dgreen dark:border-lgreen rounded-2xl hover:scale-110 transition"
          >
            <p className=" text-center -mt-10 pb-4 mx-auto font-russo text-lg text-dgreen dark:text-white ">{item.desc}</p>

            <div className='bg-lgreen dark:bg-lgreen p-12 rounded-xl'>
            <Image
                className='scale-150 transition'
              src={item.src}
              alt={`Image ${index + 1}`}
              width={200}
              height={200}
            />
            </div>
            <p className="mt-2 -mb-10 text-center w-48 mx-auto font-osw text-lg text-dgreen dark:text-white hover:scale-110 transition">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
    </>
);
};

export default HowToCards;