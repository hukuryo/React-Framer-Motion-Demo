import { Reorder, motion } from 'framer-motion'
import '../App.css'
import reactLogo from '../assets/react.svg'
import { useState } from 'react';

const DevelopmentSintax = () => {
    type LogoListType = {
        id: string;
        url: string;
        img: string;
    };

    const [logoList, setLogoList] = useState<LogoListType[]>([{ id: 'vite', url: 'https://vitejs.dev', img: '/vite.svg' }, { id: 'react', url: 'https://react.dev', img: 'reactLogo' }])
      
    return (
        <div className='flex justify-center items-center'>
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