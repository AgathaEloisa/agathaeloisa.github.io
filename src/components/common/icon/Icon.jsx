import React from "react";

function Icon({image,name, clases}) {
    return(
        <>
            <img src={image} alt={name} className={clases} />
        </>
    )
};

export default Icon;