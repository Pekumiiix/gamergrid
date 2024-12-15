import HeroSection from "./section/hero";
import CreateProfileSection from "./section/create-profile";

export default function Home() {
  return (
    <main className="flex flex-col items-center py-10 gap-[75px]">
      <HeroSection />

      <CreateProfileSection />
    </main>
  );
}
