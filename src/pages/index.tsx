import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-[#474747] to-[#222222]">
      <Navbar currentPage={"Home"} />
    </div>
  );
}
