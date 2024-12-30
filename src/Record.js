import React from 'react';
import RecordInfo from "./RecordInfo";



function Record({record}) {
   console.log(record)

   function handleClick() {
    console.log("clicked")
   }

    return(
        <div id="record">
            <img onClick={handleClick} id="recordimage" src={record.image} alt="record"></img>


           
            <RecordInfo record={record}></RecordInfo>

            
        </div>

       
    )

}

export default Record