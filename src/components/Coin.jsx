import { motion } from "framer-motion";

import img3 from "../assets/Pasted image (2).png";
import img4 from "../assets/Pasted image (3).png";
import img5 from "../assets/Pasted image (4).png";
import img6 from "../assets/Pasted image (5).png";

export default function Coin() {
  return (
    <>
      <motion.div
        className="flex justify-between w-[1278px] m-auto mt-[100px]  mb-[100px] relative"
      >
        <motion.img
        initial={{ opacity: 0 ,scale:0.7}}
        animate={{ opacity: 1, scale:1}}
        transition={{ type: "spring", duration: 1 }}
        className= "w-[174px] h-[174px] mt-[50px]"   src={img3} alt="" />
        <motion.img 
        initial={{ opacity: 0 ,scale:0.7}}
        animate={{ opacity: 1, scale:1}}
        transition={{ type: "spring", duration: 1 }}
        
        className= "w-[252px] h-[252px]"  src={img4} alt="" />
        <motion.img
        initial={{ opacity: 0 ,scale:0.7}}
        animate={{ opacity: 1, scale:1}}
        transition={{ type: "spring", duration: 1 }}
        className= "w-[263px] h-[263px]" src={img5} alt="" />
        <motion.img
        initial={{ opacity: 0 ,scale:0.7}}
        animate={{ opacity: 1, scale:1}}
        transition={{ type: "spring", duration: 1 }}
        
        className= "w-[282px] h-[282px]" src={img6} alt="" />
      </motion.div>
    </>
  );
}
