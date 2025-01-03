import React from 'react';
import Record from './Record';


function RecordContainer({records, loadArtist}) {

    console.log(records)


    return (
        <div id="recordcontainer">
            <h3> Your Collection </h3>
           
            {records.map((record) => <Record loadArtist={loadArtist} key={record.id} record={record}></Record>)}

        </div>
    )
}

export default RecordContainer