import React from 'react';


function Record({record}) {
    console.log(record)
    return(
        <div id="record">
            <img id="recordimage" src={record.image}></img>
            <h4>{record.title}</h4>
            <p>{record.description}</p>
        </div>
       
    )

}

export default Record