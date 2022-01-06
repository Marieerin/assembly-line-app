import React, {useState} from "react";

const AssemblyLine = (props) => {
    const [stages, setStages] = useState(props.stages);

    return(
        <div className="assembly-line">
            <div className="assembly-stage"> 
                <h2>Brain Storming</h2>
                {stages[0][1].map((stage, i) => {
                    return(
                        <button value={0} onClick={(e) => props.itemClick(e)} key={i}>{stage}</button>
                    )
                })}
            </div>
            <div className="assembly-stage">
                <h2>Development</h2>
                {stages[1][1].map((stage, i) => {

                    return(
                        <button value={1} onClick={(e) => props.itemClick(e)} key={i}>{stage}</button>
                    )
                })}
            </div>
            <div className="assembly-stage">
                <h2>Testing</h2>
                {stages[2][1].map((stage, i) => {
                    return(
                        <button value={2} onClick={(e) => props.itemClick(e)} key={i}>{stage}</button>
                    )
                })}
            </div>
            <div className="assembly-stage">
                <h2>Deployment</h2>
                {stages[3][1].map((stage, i) => {
                    return(
                        <button value={3} onClick={(e) => props.itemClick(e)} key={i}>{stage}</button>
                    )
                })}
            </div>
        </div>
    )
};

export default AssemblyLine