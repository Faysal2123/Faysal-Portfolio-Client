import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const handleBackClick=()=>{
        window.location.href="/"
    }

    useEffect(() => {
        fetch('/details.json')  
            .then(res => res.json())
            .then(data => {
                const projectData = data.find(p => p.id === parseInt(id));
                setProject(projectData);
            })
            .catch(err => console.error('Failed to fetch data:', err));
    }, [id]);

    if (!project) return <h2>Project not found!</h2>;

    return (
        <div className="container mx-auto p-5 lg:pt-40 pt-28">
            <h2 className="text-4xl font-bold">{project.title}</h2>
            <img
                src={project.image}
                alt={project.title}
                className=" h-96 object-cover rounded my-4 border-2"
            />
            <p className="text-lg">{project.description}</p>

            <h3 className="text-2xl font-semibold mt-4">Features</h3>
            <ul className="list-disc pl-5">
                {project.features.map((feature, index) => (
                    <li key={index} className="text-lg">{feature}</li>
                ))}
            </ul>

            <h3 className="text-2xl font-semibold mt-4">Tech Stack</h3>
            <div className="text-lg">
                <strong>Frontend:</strong> {project.techStack.frontend}
                <br />
                <strong>Backend:</strong> {project.techStack.backend}
                <br />
                <strong>Database:</strong> {project.techStack.database}
                <br />
                <strong>Authentication:</strong> {project.techStack.authentication}
            </div>

            <h3 className="text-2xl font-semibold mt-4">API Endpoints</h3>
            <pre className="bg-gray-100 p-3 rounded">{JSON.stringify(project.apiEndpoints, null, 2)}</pre>
            <div className='pt-4'>
                <button onClick={handleBackClick}   className='btn btn-warning'>Back Portfolio</button>
            </div>
        </div>
    );
};

export default ProjectDetails;
