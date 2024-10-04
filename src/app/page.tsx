
import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <div className="flex bg-[#fafafa] items-center flex-col">
      <Navbar/>
      <Hero/>
      <Menu/>
    </div>
  );
}
