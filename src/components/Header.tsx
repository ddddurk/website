import Link from "next/link";

const Header = () => {
  return (
    <header className="mt-16 grid grid-cols-[auto,1fr] gap-x-6 gap-y-0.5 md:gap-x-10 md:gap-y-1.5">
      <Link
        className="row-span-2 h-fit w-fit rounded-full bg-gradient-to-br from-green-400 via-cyan-400 to-pink-400 p-1 md:p-[0.3125rem]"
        href="/"
      >
        <div className="h-20 w-20 rounded-full bg-white bg-[url('/profile.png')] bg-cover bg-center md:h-24 md:w-24" />
      </Link>
      <div className="mt-auto text-3xl sm:text-4xl md:text-5xl">
        <span className="text-gray-900 font-bold">Durk</span>
        <span className="ml-2 hidden font-extralight text-gray-500 min-[365px]:inline-block">
          @ddddurk
        </span>
      </div>
      <span className="text-gray-500 col-start-2 row-start-2 font-light text-lg md:text-xl">
        <span className="hidden sm:inline-block">
          Data Enthusiast,&nbsp;
        </span>
        Software Engineer
      </span>
    </header>
  );
};

export default Header;
