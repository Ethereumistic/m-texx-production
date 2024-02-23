"use client";

import Container from "@/components/container";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";
export default function About({ settings }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting }
  } = useForm({
    mode: "onTouched"
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);
  // Please update the Access Key in the Sanity CMS - Site Congig Page
  const apiKey = settings?.w3ckey || "YOUR_ACCESS_KEY_HERE";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "M-Texx Textile Recycling",
      subject: "Ново съобщение от потребител, през M-Texx.COM"
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    }
  });

  return (
    <div>
        <div className="mx-auto px-4 md:px-8 lg:px-16 xl:px-96 my-8">
            <div className="flex flex-col items-center p-2 xl:p-8 bg-lgreen dark:bg-lgreen text-dgreen rounded-lg shadow-md">
          <h2 className="text-2xl xl:text-4xl font-russo mb-4 text-center">Мисия</h2>
          <p className="text-lg xl:text-2xl text-center font-osw">
          M-Texx Рециклиране на Текстил сме компания, посветена на рециклирането на текстил.
          Целта ни е да утроим процента на рециклирания текстил в България от 2% на 6% до 2030 г. 
          За да можем заедно да постигнем това, ние предоставяме безплатни услуги за рециклиране на
          текстил на домакинства и организации, както и насърчаваме за намаляването на текстилен отпадък,
          преизползването и рециклирането чрез образование, 
          с акцент върху ангажирането на младежите в училищата.
          </p>
        </div>
      </div>

      <div className="mx-auto px-4 md:px-8 lg:px-16 xl:px-96 my-8">
            <div className="flex flex-col items-center p-2 xl:p-8 bg-lred dark:bg-lred text-dred rounded-lg shadow-md">
          <h2 className="text-2xl xl:text-4xl font-russo mb-4 text-center">Проблем</h2>
          <p className="text-lg xl:text-2xl text-center font-osw">
          През 2022 г. България е генерирала над 100 000 тона текстилни и кожени отпадъци, но само 2% от този отпадък се рециклира.
          </p>
        </div>
      </div>

      <div className="mx-auto px-4 md:px-8 lg:px-16 xl:px-96 mb-8">
        <div className="flex flex-col items-center p-8 bg-lgreen dark:bg-lgreen rounded-lg shadow-md">
          <h2 className="text-3xl text-center font-russo text-dgreen mb-4">Решение</h2>
          <h2 className="text-xl text-center font-russo text-dgreen mb-4">
          M-Texx предлага решение на този проблем, като:
          </h2>
          <ul className="text-lg list-disc text-left sm:px-32 px-4">
            <li className="mb-4 font-osw text-dgreen">
            <span className="font-russo text-xl">Предлага безплатно рециклиране:</span> M-Texx ще предостави безплатни услуги за рециклиране на текстил на домакинства и организации в България.
            </li>
            <li className="mb-4 font-osw text-dgreen">
            <span className="font-russo text-xl">Насърчава преизползването:</span> M-Texx ще насърчава преизползването на дрехи и текстилни изделия, като посещава конференции и събития, както и сключва парньорства.
            </li>
            <li className="mb-4 font-osw text-dgreen">
            <span className="font-russo text-xl">Образовава за рециклиране:</span> M-Texx ще образова обществеността за ползите от рециклирането на текстил, с акцент върху ангажирането на младежите в училищата.
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto px-4 md:px-8 lg:px-16 xl:px-96 mb-8">
        <div className="flex flex-col items-center p-8 bg-lgreen dark:bg-lgreen rounded-lg shadow-md">
          <h2 className="text-3xl text-center font-russo text-dgreen mb-4">Как да помогна?</h2>
          <h2 className="text-xl text-center font-russo text-dgreen mb-4">
          Можете да помогнете да постигнем <span className="underline">общата цел</span>, като:</h2>
          <ul className="text-lg list-disc text-left sm:px-32 px-4">
            <li className="mb-4 font-osw text-dgreen">
            <span className="font-russo text-xl">Рециклирате текстил:</span> Занесете вашите ненужни дрехи, обувки и текстилни изделия в контейнерите на M-Texx.
            </li>
            <li className="mb-4 font-osw text-dgreen">
            <span className="font-russo text-xl">Разкажете на други:</span> Споделете информацията за M-Texx с вашите приятели, близки и семейство.
            </li>
            <li className="mb-4 font-osw text-dgreen">
            <span className="font-russo text-xl">Подкрепете кампаниите:</span> Подкрепете кампаниите на M-Texx за насърчаване на рециклирането на текстил.
            </li>
          </ul>
          <h2 className="text-3xl text-center font-russo text-dgreen mb-4">Заедно <span className="underline">можем</span> да направим промяна!

</h2>

        </div>
      </div>



    <Container>
        
      <h1 className="mt-2 mb-3 text-3xl font-russo tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl text-dgreen dark:text-white ">
      Свържете се с нас
      </h1>
      <div className="text-center">
        <p className="text-lg font-osw text-dgreen dark:text-lgreen">Тук сме за да помогнем!</p>
      </div>

      <div className="grid my-10 md:grid-cols-2 ">
        <div className="my-10 dark:bg-lgreen bg-dgreen mx-auto p-8 rounded-lg">
          <h2 className="text-2xl ml-10 font-russo dark:text-dgreen text-white ">
            M-Texx Textile Recycling
          </h2>
          <p className="max-w-sm text-center mt-5 font-osw text-white dark:text-dgreen">
          ❓ Имате ли въпрос или притеснение? ❗<br></br>

          ✍🏼 Пишете ни и ни уведомете. 📋<br></br>

          🌱 Ние ще се свържем с вас, 📒<br></br>

          ⌛ възможно най-скоро с отговор. 📨<br></br>
          </p>

          <div className="mt-5 ml-10">
            <div className="flex items-center mt-2 space-x-2 text-white dark:text-dgreen font-osw">
              <MapPinIcon className="w-8 h-8" />
              <span>Индустриална 44, Габрово 5302, България</span>
            </div>
            {settings?.email && (
              <div className="flex items-center mt-2 space-x-2 text-white dark:text-dgreen font-osw">
                <EnvelopeIcon className="w-8 h-8" />
                <a href={`mailto:${settings.email}`}>
                  {settings.email}
                </a>
              </div>
            )}
            {settings?.phone && (
              <div className="flex items-center mt-2 space-x-2 text-white dark:text-dgreen font-osw">
                <PhoneIcon className="w-8 h-8" />
                <a href={`tel:${settings.phone}`}>{settings.phone}</a>
              </div>
            )}
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="my-10">
            <input
              type="checkbox"
              id=""
              className="hidden"
              style={{ display: "none" }}
              {...register("botcheck")}></input>

            <div className="mb-5">
              <input
                type="text"
                placeholder="Пълно Име"
                autoComplete="false"
                className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${
                  errors.name
                    ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                    : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0 font-osw"
                }`}
                {...register("name", {
                  required: "Нужно е пълното Ви име.",
                  maxLength: 80
                })}
              />
              {errors.name && (
                <div className="mt-1 text-red-600">
                  <small>{errors.name.message}</small>
                </div>
              )}
            </div>

            <div className="mb-5">
              <label htmlFor="email_address" className="sr-only">
                Email Address
              </label>
              <input
                id="email_address"
                type="email"
                placeholder="Имейл Адрес"
                name="email"
                autoComplete="false"
                className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${
                  errors.email
                    ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0 "
                    : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0 font-osw"
                }`}
                {...register("email", {
                  required: "Напишете Вашият имейл адрес.",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Моля въведете валиден имейл адрес."
                  }
                })}
              />
              {errors.email && (
                <div className="mt-1 text-red-600">
                  <small>{errors.email.message}</small>
                </div>
              )}
            </div>

            <div className="mb-3 ">
              <textarea
                name="message"
                placeholder="Търсите нещо специално? Информирай ни!"
                className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900   rounded-md outline-none  h-36 focus:ring-4  ${
                  errors.message
                    ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0 font-osw"
                    : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0 "
                }`}
                {...register("message", {
                  required: "Напишете повече за Вашата идея..."
                })}
              />
              {errors.message && (
                <div className="mt-1 text-red-600">
                  {" "}
                  <small>{errors.message.message}</small>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-4 text-dgreen hover:text-white font-russo transition-colors bg-lgreen rounded-md hover:bg-dgreen  px-7 dark:bg-white dark:text-dgreen dark:hover:bg-lgreen ">
              {isSubmitting ? (
                <svg
                  className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                "Изпрати"
              )}
            </button>
          </form>

          {isSubmitSuccessful && isSuccess && (
            <div className="mt-3 text-sm text-center text-green-500">
              {message || "Вашето съобщение е изпратено успешно!"}
            </div>
          )}
          {isSubmitSuccessful && !isSuccess && (
            <div className="mt-3 text-sm text-center text-red-500">
              {message || "Съжаляваме, но нещо се обърка. Моля опитайте отново!"}
            </div>
          )}
        </div>
      </div>
    </Container>
    </div>
  );
}