
import React from "react"

function RecordInfo({record}) {
console.log(record)



    return(
        <div  id="recordinfo">
            <h1>{record.title}</h1>
            <h3>{record.artist}</h3>
            <h4>{record.description}</h4>
            <img id="infoimage" src={record.image} alt="record"></img>

        </div>
    )
}

export default RecordInfo