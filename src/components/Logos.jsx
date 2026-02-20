import { motion } from "framer-motion";
import img2 from "../assets/Pasted image.png";
import Coin from "./Coin";

export default function Logos() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 ,scale:0.7}}
        animate={{ opacity: 1, scale:1}}
        transition={{ type: "spring", duration: 1.3 }}
        className="flex w-[1278px] m-auto mt-[100px]  mb-[100px] relative"
      >
        <img className="blur-md    " src={img2} alt="" />
        <h1 className="bottom-[50%] left-[30%] text-white font-semibold text-3xl  absolute ">
          TECHNOLOGIES & HARDWARE
        </h1>
        <h3 className="bottom-[35%] left-[40%] text-white  text-2xl  font-light absolute">
          USED BY HYDRA VR.
        </h3>
      </motion.div>
      <Coin/>
    </>
  );
}
