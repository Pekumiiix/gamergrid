import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="flex flex-col gap-10 items-center justify-center">
      <div className="container px-5 flex flex-col gap-10 md:gap-0 md:flex-row items-start justify-between pt-10 md:pt-40 pb-10">
        <div className="flex items-center gap-3">
          <Image src={`/logo.webp`} alt="Logo" width={50} height={50} />
          <p className="text-orange-600 text-3xl font-semibold">GAMERGRID</p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-40">
          <div className="flex flex-col gap-7">
            <p className="text-xl font-semibold text-orange-300">Socials</p>

            <div className="flex flex-col gap-4">
              <Button
                asChild
                variant={`link`}
                className="text-orange-200 p-0 w-fit h-fit"
              >
                <Link href={`/`}>Discord</Link>
              </Button>
              <Button
                asChild
                variant={`link`}
                className="text-orange-200  p-0 w-fit h-fit"
              >
                <Link href={`/`}>X(Twitter)</Link>
              </Button>
              <Button
                asChild
                variant={`link`}
                className="text-orange-200  p-0 w-fit h-fit"
              >
                <Link href={`/`}>Telegram</Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-7">
            <p className="text-xl font-semibold text-orange-300">Links</p>

            <div className="flex flex-col gap-4">
              <Button
                asChild
                variant={`link`}
                className="text-orange-200  p-0 w-fit h-fit"
              >
                <Link href={`/`}>Docs</Link>
              </Button>
              <Button
                asChild
                variant={`link`}
                className="text-orange-200  p-0 w-fit h-fit"
              >
                <Link href={`/`}>Whitepaper</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4 border-t border-orange-100 flex items-center justify-between text-sm md:text-lg font-medium text-orange-200">
        <p className="ml-5 lg:ml-0">GAMEGRID BLOCKCHAIN</p>
        <p className="mr-5 lg:mr-0">Copyright 2024</p>
      </div>
    </footer>
  );
}
