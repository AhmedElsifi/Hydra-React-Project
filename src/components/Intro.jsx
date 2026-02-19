import { motion } from "framer-motion";
import About from "./About";
export default function Intro() {
  return (
    <>
      <div className=" w-80/100 flex justify-around items-center mx-auto mt-12">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "soild" }}
        >
          <h1 className="text-white font-semibold text-3xl">INTRODUCTION</h1>
          <h3 className="text-white  text-2xl mt-2.5 font-light">
            TO HYDRA VR --------------------
          </h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "soild" }}
        >
          <h3 className="text-white w-2xl ">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </h3>
        </motion.div>
      </div>
      <About/>
    </>
  );
}
