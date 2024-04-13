import { motion } from 'framer-motion'
import './App.css'

const App = () => {
  return (
    <div className='flex justify-center items-center'>
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 200 }}
        transition={{ duration: 2, delay: 2, ease: 'ease-in' }}
        className='w-[170px] h-[170px] rounded-full bg-sky-500'>
      </motion.div>
    </div>
  )
}

export default App