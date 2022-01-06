import React, {useState} from "react";

const AssemblyLine = (props) => {
    const [stages, setStages] = useState(props.stages);
    return(
        <div className="assembly-line">
            <div className="assembly-stage"> 
                <h2>Brain Storming</h2>
                {stages[0][1].map((stage, i) => {
                    return(
                        <button key={i}>{stage}</button>
                    )
                })}
            </div>
            <div className="assembly-stage">
                <h2>Development</h2>
                {stages[1][1].map((stage, i) => {
                    return(
                        <button key={i}>{stage}</button>
                    )
                })}
            </div>
            <div className="assembly-stage">
                <h2>Testing</h2>
                {stages[2][1].map((stage, i) => {
                    return(
                        <button key={i}>{stage}</button>
                    )
                })}
            </div>
            <div className="assembly-stage">
                <h2>Deployment</h2>
                {stages[3][1].map((stage, i) => {
                    return(
                        <button key={i}>{stage}</button>
                    )
                })}
            </div>
        </div>
    )
};

export default AssemblyLine