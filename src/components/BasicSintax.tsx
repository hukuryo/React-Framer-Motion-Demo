import { motion, AnimatePresence } from "framer-motion";
import "../App.css";

const BasicSintax = () => {
  return (
    <div className="flex justify-center items-center">
      {/* intial */}
      {/* <motion.div
        initial={{ x: -100 }}
        className='w-[170px] h-[170px] rounded-full bg-sky-500'>
      </motion.div> */}

      {/* animate */}
      {/* <motion.div
        initial={{ x: -100 }}
        animate={{ x: 200 }}
        className='w-[170px] h-[170px] rounded-full bg-sky-500'>
      </motion.div> */}

      {/* transition-duration */}
      {/* <motion.div
        initial={{ x: -100 }}
        animate={{ x: 200 }}
        transition={{ duration: 10 }}
        className='w-[170px] h-[170px] rounded-full bg-sky-500'>
      </motion.div> */}

      {/* transiton-delay */}
      {/* <motion.div
        initial={{ x: -100 }}
        animate={{ x: 1000 }}
        transition={{ duration: 2, delay: 10, ease: 'ease-in' }}
        className='w-[170px] h-[170px] rounded-full bg-sky-500'>
      </motion.div> */}

      {/* whileTap */}
      {/* <motion.div
        whileTap={{ scale: 2 }}
        className="w-[170px] h-[170px] rounded-full bg-sky-500"
      ></motion.div> */}

      {/* whileHover */}
      {/* <motion.div
        whileHover={{ opacity: 0 }}
        className="w-[170px] h-[170px] rounded-full bg-sky-500"
      ></motion.div> */}
      {/* <motion.div
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "10px",
          backgroundColor: "pink",
        }}
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: "100%",
        }}
      />
      <motion.div
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "10px",
          backgroundColor: "pink",
        }}
        drag
        dragConstraints={{ left: 0, right: 300 }}
        dragMomentum={false}
      /> */}
      <motion.div
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "10px",
          backgroundColor: "pink",
        }}
        animate={{ x: 100 }}
      />
    </div>
  );
};

export default BasicSintax;
