import { Reorder, motion } from 'framer-motion'
import '../App.css'
import { useState } from 'react';

const DevelopmentSintax = () => {
    type LogoListType = {
        id: string;
        url: string;
        img: string;
      };
    
      const [count, setCount] = useState(0)
      const [logoList, setLogoList] = useState<LogoListType[]>([{ id: 'vite', url: 'https://vitejs.dev', img: '/vite.svg' }, { id: 'react', url: 'https://react.dev', img: '/react.svg' }])
    
    
      const handleClick = () => {
        setCount((count) => count + 1)
      }

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
             {/* <motion.div
                variants={variants}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity }}
                className='w-[170px] h-[170px] rounded-full bg-sky-500'>
            </motion.div> */}
            <Reorder.Group axis="x" values={logoList} onReorder={setLogoList} className='flex gap-[30px]'>
            {logoList.map((logo) => (
              <Reorder.Item key={logo.id} value={logo}>
                <a href={logo.url} target="_blank" draggable="false">
                  <motion.img
                    src={logo.img}
                    alt={`${logo.id} logo`}
                    draggable="false"
                    className="w-[80px] h-[80px]"
                    animate={logo.id == 'react' ? { rotate: [0, 180, 360], scale: [1, 1.5, 1] } : {}}
                    transition={logo.id == 'react' ? { duration: 2, repeat: Infinity, ease: 'linear', times: [0, 0.75, 1] } : {}}
                  />
                </a>
              </Reorder.Item>
            ))}
          </Reorder.Group>
    </div>
  )
}

export default DevelopmentSintax