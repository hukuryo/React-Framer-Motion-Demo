import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const CountUpAnimation = () => {

    const [isShow, setIsShow] = useState<boolean>(false)
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount((count) => count + 1)
        setIsShow(true)
    }

   
    return (
        <div className='relative w-max mx-auto'>
            <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={handleClick}
            className='border border-black py-1 px-3 rounded mb-[30px]'>
                count is {count}
            </motion.button>
            <AnimatePresence>
                {isShow && <motion.p key={count}
                    onAnimationComplete={() => setIsShow(false)}
                    animate={{ opacity: [0, 1] }}
                    exit={{opacity: 0, color: 'blue'}}
                    transition={{ duration: 0.5 }}
                    className='absolute top-[-10px] right-[-30px] text-[20px] text-red-500'>+1</motion.p>}
            </AnimatePresence>
        </div>
    )
}

export default CountUpAnimation