import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full h-fit flex items-center justify-center">
      <nav className="container flex w-full items-center justify-between py-10 px-5">
        <div className="flex items-center gap-3">
          <Image
            src={`/logo.webp`}
            alt="Logo"
            width={50}
            height={50}
            className="w-7 h-7 md:w-[50px] md:h-[50px]"
          />
          <p className="text-orange-600 text-xl md:text-3xl font-semibold">
            GAMEGRID
          </p>
        </div>
      </nav>
    </header>
  );
}
