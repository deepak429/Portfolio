import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data/data";
import Client from "@/components/Client";
import Experience from "@/components/Experience";
import Approch from "@/components/Approch";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5 ">
      <div className="max-w-7xl w-full">
        
        <FloatingNav className="" navItems={navItems} />

        <Hero />
        <Grid />
        <RecentProject />
        <Client />
        <Experience />
        <Approch />
        <Footer />
      </div>
    </main>
  );
}
