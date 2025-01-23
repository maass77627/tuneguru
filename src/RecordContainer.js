import React from 'react';
import Record from './Record';


function RecordContainer({records, loadArtist}) {

    console.log(records)


    return (
        <div id="recordcontainer">
<<<<<<< HEAD
            <h5>scroll to view</h5>
            <h3> Your Collection </h3>
           {records.map((record) => <Record loadArtist={loadArtist} key={record.id} record={record}></Record>)}
           </div>
=======
            <h3> Your Collection </h3>
           
            {records.map((record) => <Record loadArtist={loadArtist} key={record.id} record={record}></Record>)}

        </div>
>>>>>>> 1e780f475ce54677c5ae1e380e09665d107c5c15
    )
}

export default RecordContainer