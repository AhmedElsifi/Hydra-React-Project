import { motion } from "framer-motion";
import img1 from "../assets/image.png";

export default function About() {
  return (
    <>
      <div
      
      className=" w-80/100 flex justify-around items-center mx-auto mt-12">
        <motion.img
          initial={{ opacity: 0, scale:0.6 }}
          animate={{ opacity: 1, scale:1 }}
          transition={{ duration: 0.7, type: "soild" }}
          className="w-72 rounded-br-[120px] rounded-bl-4xl rounded-tr-4xl rounded-tl-[120px]"
          src={img1}
          alt=""
        />
        <motion.div
          initial={{ opacity: 0, scale:0.8 }}
          animate={{ opacity: 1, scale:1 }}
          transition={{ duration: 0.7, type: "soild",delay: 0.1 }}
        
        >
          <h1 className="text-white font-semibold text-3xl">ABOUT</h1>
          <h3 className="text-white  text-2xl mt-2.5 mb-2.5 font-light">HYDRA VR</h3>
          <h3 className="text-white w-2xl font-light">
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
            dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
            purus in massa. Est placerat in egestas erat imperdiet sed.
            Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet cursus sit amet. Vel eros donec ac odio tempor orci
            dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudi n tempor.
          </h3>
          <motion.button
          whileHover={{scale:1.1}}
          transition={{ duration: 0.2, type: "soild" }}
          
          className="mt-5 text-black w-[214px] h-[48px] font-medium rounded-[40px] bg-[#8176AF]">
          LET’S GET IN TOUCH
        </motion.button>
        </motion.div>
        
      </div>
    </>
  );
}
