// Economy.js

import Image from 'next/image';

const Economy = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen my-8">
      <Image
        src="/img/economy/economy.png" // Update with your image path
        alt="Economy Image"
        width={1300}
        height={500} // Adjust the height as needed
        className="rounded-lg mb-8"
      />

      <div className="flex flex-col items-center space-y-8 sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-32 h-auto sm:h-72">
        <div className="bg-dgreen dark:bg-lgreen rounded-lg p-4 w-[320px] sm:w-[460px] h-full">
          <p className="text-lg sm:text-2xl font-russo text-center text-lgreen dark:text-dgreen">ЛИНЕЙНА ИКОНОМИКА</p>
          <p className="text-white text-lg sm:text-xl dark:text-dgreen font-osw text-center">За съжаление в текстилната индустрия, линейната икономика доминира. Производството на текстил започва с извличането на суровини, след което се преминава към производство, употреба и, накрая, изхвърляне. Този линеен процес не е устойчив и допринася за замърсяване и изчерпване на природни ресурси във всички посоки.</p>
        </div>

        <div className="bg-dgreen dark:bg-lgreen rounded-lg p-4 w-[320px] sm:w-[460px] h-full">
          <p className="text-lg sm:text-2xl font-russo text-center text-lgreen dark:text-dgreen">КРЪГОВА ИКОНОМИКА</p>
          <p className="text-white text-lg sm:text-xl dark:text-dgreen font-osw text-center">Противоположно, кръговата икономика в текстилната индустрия променя този модел. Тя подкрепя рециклирането на текстил, където използваните дрехи се събират, рециклират и връщат обратно в производствения цикъл. Този  подход намалява нуждата от нови суровини, намалява отпадъците и спомага за опазване на околната среда.</p>
        </div>
      </div>

    </div>
  );
};

export default Economy;





