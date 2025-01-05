import React from "react";
import { skills } from "../../../data/skills-data";
import Icon from "../../common/icon/Icon";

function SkillView () {
    return (
        <>
            <h1>Skills</h1>
            {skills.map((el,index) => (
                <Icon
                key={index} 
                name={el.name}
                image={el.img}
                clases={el.class}
                />
            ))
            }
        </>
    )
}

export default SkillView;