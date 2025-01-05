import React from "react";
import CustomCard from '../../common/card/Customcard';
import { projects } from "../../../data/projects-data";

function ProjectView () {
    return (
        <>
            <h1>Proyectos</h1>
            {projects.map( (el, index) => (
               <CustomCard
                key={index}
                title={el.title}
                image={el.img}
                description={el.text}
                link={el.link}
                githubLink={el.githubLink}
           />
            ))}
        </>
    )
}

export default ProjectView;