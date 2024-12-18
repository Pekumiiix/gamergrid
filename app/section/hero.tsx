import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="container flex flex-col items-center lg:items-start gap-5 px-5">
      <Image src={`/logo-2.png`} alt="Logo" width={600} height={53} />
      <p className="text-base md:text-3xl text-center lg:text-left font-medium text-orange-200 max-w-[75%]">
        Smart Contract Interactive UI.
      </p>
    </section>
  );
}
