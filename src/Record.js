import React from 'react';




function Record({record}) {
    console.log(record)
    return(
        <div id="record">
            <img onClick={} id="recordimage" src={record.image}></img>


            <div id="info">
             {/* <h4>{record.title}</h4>
            <p>{record.description}</p> */}

            </div>
            
            
        </div>

       
    )

}

export default Record