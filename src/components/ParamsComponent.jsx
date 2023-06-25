import React from "react";
import { useParams } from "react-router-dom";


const ParamComponent = (props) =>{

    const {word, color, bgCol} = useParams();



    return (
        <div>
            {
                isNaN(word)?
                <p style={
                    color?
                    {color: color, backgroundColor: bgCol}
                    :null
                }>
                    Word Word here: {word}
                </p>
                :
                <p>
                    This is where number: {word}
                </p>
            }

        </div>
    )
}

export default ParamsComponent;