import React from 'react';
import Record from './Record';


function RecordContainer({records}) {

    console.log(records)


    return (
        <div id="recordcontainer">
            <h3> Your Collection </h3>
           
            {records.map((record) => <Record key={record.id} record={record}></Record>)}

        </div>
    )
}

export default RecordContainer