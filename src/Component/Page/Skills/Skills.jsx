import { 
    Css3Original, ExpressOriginal, FigmaOriginal, FirebaseOriginal, GitOriginal, Html5Original, 
    JavascriptOriginal, MongodbOriginal, NodejsOriginalWordmark, ReactrouterOriginal, 
    TailwindcssOriginal 
} from 'devicons-react';
import React from 'react';
import { SiNpm } from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
    { icon: <Html5Original size={80} />, name: "HTML" },
    { icon: <Css3Original size={80} />, name: "CSS" },
    { icon: <TailwindcssOriginal size={80} />, name: "Tailwind CSS" },
    { icon: <GitOriginal size={80} />, name: "Git Control System" },
    { icon: <SiNpm className='text-red-600' size={80} />, name: "Npm" },
    { icon: <FigmaOriginal size={80} />, name: "Figma" },
    { icon: <JavascriptOriginal size={80} />, name: "JavaScript" },
    { icon: <ReactrouterOriginal size={80} />, name: "React" },
    { icon: <FirebaseOriginal size={80} />, name: "Firebase" },
    { icon: <NodejsOriginalWordmark size={80} />, name: "Node.js" },
    { icon: <MongodbOriginal size={80} />, name: "MongoDB" },
    { icon: <ExpressOriginal size={80} />, name: "Express Js" },
];

const Skills = () => {
    return ( 
        <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 1.2 }} 
            viewport={{ once: true }} 
            className='bg-zinc-800 lg:pt-16 pt-8 lg:pb-16 pb-8 text-slate-900'
        >
            <h1 className='text-5xl text-center font-bold lg:mb-10 mb-7 text-slate-100'>My Skills</h1>
            <p className='text-slate-100 lg:w-8/12 mx-auto text-center pb-4 w-11/12'>
                My expertise includes frontend & backend development, RESTful APIs, and database management. I'm skilled in Tailwind CSS, Firebase, and state management while ensuring clean, efficient, and scalable code.
            </p>
            <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 lg:px-6 md:px-16 w-11/12 mx-auto gap-3'>
                {skills.map((skill, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 50 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.6, delay: index * 0.1 }} 
                        viewport={{ once: true }} 
                        whileHover={{ scale: 1.1 }} 
                        className='bg-gray-300 shadow-lg shadow-zinc-700 rounded-xl lg:p-6 p-3 flex flex-col items-center transition-transform duration-300'
                    >
                        {skill.icon}
                        <h2 className='mt-4 md:text-xl text-base font-semibold'>{skill.name}</h2>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};  

export default Skills;
