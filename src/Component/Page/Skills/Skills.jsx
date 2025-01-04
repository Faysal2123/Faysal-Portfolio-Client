import { 
    Css3Original, FigmaOriginal, FirebaseOriginal, GitOriginal, Html5Original, 
    JavascriptOriginal, MongodbOriginal, NodejsOriginalWordmark, ReactrouterOriginal, 
    TailwindcssOriginal 
} from 'devicons-react';
import React from 'react';
import { SiNpm } from 'react-icons/si';

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
];

const Skills = () => {
    return ( 
        <div className='bg-zinc-800 lg:pt-16 pt-8 lg:pb-16 pb-8 text-slate-900'>
            <h1 className='text-5xl text-center font-bold mb-10 text-slate-100'>My Skills</h1>
            <p className='text-slate-100 lg:w-8/12 mx-auto text-center pb-4'>My expertise includes frontend & backend development, RESTful APIs, and database management. I'm skilled in Tailwind CSS, Firebase, and state management while ensuring clean, efficient, and scalable code.</p>
            <div className='grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-16'>
                {skills.map((skill, index) => (
                    <div key={index} className='bg-gray-200 shadow-lg shadow-zinc-700 rounded-xl p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105'>
                        {skill.icon}
                        <h2 className='mt-4 text-xl font-semibold'>{skill.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
