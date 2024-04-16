import { motion } from 'framer-motion'
import '../App.css'

const DevelopmentSintax = () => {
    const variants = {
        animate: {
          x: [-100, 200, -500],
          transition: {
            duration: 2,
            times: [0, 0.75, 1], 
            repeat: 2, 
            repeatDelay: 2 
          }
        }
      };
  return (
    <div className='flex justify-center items-center'>
        {/* <motion.div
            animate={{ x: [0, 100, -500] }}
            transition={{ duration: 2, times: [0, 0.75, 1] }}
            className='w-[170px] h-[170px] rounded-full bg-sky-500'>
        </motion.div> */}
        {/* <motion.div
            animate={{ x: [-100, 200, -500] }}
            transition={{ duration: 2, times: [0, 0.75, 1], repeat: 1 }}
            className='w-[170px] h-[170px] rounded-full bg-sky-500'>
        </motion.div> */}
        {/* <motion.div
            animate={{ x: [-100, 200, -500] }}
            transition={{
                    duration: 2,
                    times: [0, 0.75, 1],
                    repeat: Infinity,
                    repeatDelay: 2 }}
            className='w-[170px] h-[170px] rounded-full bg-sky-500'>
        </motion.div> */}
        {/* <motion.div
            animate={{ x: [-100, 200, -500] }}
            transition={{
                    duration: 2,
                    times: [0, 0.75, 1],
                    repeat: Infinity,
                    repeatDelay: 2,
                    repeatType: 'reverse' }}
            className='w-[170px] h-[170px] rounded-full bg-sky-500'>
        </motion.div> */}
        {/* <motion.button
            initial={{ opacity: 0.6 }}
            whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            /> */}
             <motion.div
                variants={variants}
                animate="animate"
                className='w-[170px] h-[170px] rounded-full bg-sky-500'>
            </motion.div>
    </div>
  )
}

export default DevelopmentSintax