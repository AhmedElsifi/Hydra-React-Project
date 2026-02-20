import { motion } from "framer-motion";

export default function Intro({ title, subtitle, description }) {
  return (
    <>
      <div className=" w-80/100 flex justify-around items-center mx-auto mt-12">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "soild" }}
        >
          <h1 className="text-white font-semibold text-3xl">{title}</h1>
          <div className="flex items-center gap-6">
            <h3 className="text-white  text-2xl mt-2.5 font-light">
              {subtitle}
            </h3>

            <div className="relative w-32 h-[6px] bg-purple-300">
              <span className="absolute right-0 top-1/2 w-6 h-[6px] bg-purple-300 rotate-45 origin-right -translate-y-1/2"></span>
              <span className="absolute right-0 top-1/2 w-6 h-[6px] bg-purple-300 -rotate-45 origin-right -translate-y-1/2"></span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "soild" }}
        >
          <h3 className="text-white w-2xl ">{description}</h3>
        </motion.div>
      </div>
      
    </>
  );
}
