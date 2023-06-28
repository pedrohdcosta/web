const download = "/download.svg";

const Hero = () => {
  return (
    <div className="mx-auto h-full w-full py-16 text-center">
      <h1 className="family mx-auto w-fit text-5xl text-[hsl(0,0%,100%)]">
        Nightmare at the <span className="text-red-500">Dread College</span>
      </h1>
      <div className="py-12">
        <p className="text-xl text-neutral-50">
          <span>Anna</span> dormiu na faculdade e quando acordou notou que não
          estava sozinha.
        </p>
        <p className="mt-3 text-xl text-neutral-50">
          Após ver uma sequência de eventos horrorosos ela descobriu que estava
          <span className="text-red-500"> trancada</span>.
        </p>
        <p className="mt-3 text-xl text-neutral-50">
          Ajudem Anna a escapar da faculdade antes que seja{" "}
          <span className="faded bg-gradient-to-r from-neutral-50 from-30%  to-gray-900 ">
            tarde demais
          </span>
        </p>
      </div>
      <a className="mx-auto  flex max-w-xs cursor-pointer items-center justify-center rounded-sm bg-red-700 px-9 py-4 text-xl font-bold text-white transition duration-200 hover:brightness-75">
        <img
          src={download}
          height={24}
          width={24}
          alt=""
          className="mr-4 brightness-0 invert"
        />
        Clique para <span>&nbsp;baixar</span>
      </a>
    </div>
  );
};

export default Hero;
