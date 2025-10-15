import Genre from './Genre';
import React from "react";

function GenreRecords({newrecords, token, setNewRecords, records, setRecords}) {
    console.log(newrecords)


    return(

        
        <div id="genrerecords">
            <div id="bordertwo">
            <h3>Recommended Listening..</h3>
            </div>
        {newrecords ? newrecords.slice(0, 8).map((record) =>  <Genre records={records} setRecords={setRecords} token={token} key={record.id} record={record} newrecords={newrecords} setNewRecords={setNewRecords}></Genre>) : null}

        </div>
    )
}

export default GenreRecords