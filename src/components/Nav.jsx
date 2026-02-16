import logo from "../assets/logo.svg";
import Link from "./Link";

export default function Nav() {
  return (
    <nav className="w-80/100 flex justify-between items-center mx-auto mt-12">
      <div>
        <img src={logo} alt="Hydra Logo" />
      </div>
      <div className="flex justify-between w-96">
        <Link link="#">About</Link>
        <Link link="#">Services</Link>
        <Link link="#">Technologies</Link>
        <Link link="#">How to</Link>
      </div>
      <div className="w-[350px] flex justify-between">
        <button className="border-2 border-white text-white text-sm font-bold cursor-pointer rounded-[40px] pl-9 pr-9 pt-4 pb-4 hover:bg-white hover:text-[#302c42] duration-500">
          Contact Us
        </button>
        <button className="bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] border-2 text-[#302c42] font-bold text-sm rounded-[40px] pl-9 pr-9 pt-4 pb-4 cursor-pointer">Join Hydra</button>
      </div>
    </nav>
  );
}
