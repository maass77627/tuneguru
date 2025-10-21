import Genre from './Genre';
import React from "react";

function GenreRecords({newrecords, token, setNewRecords, records, setRecords}) {
    console.log(newrecords)
    

    return(

        
        <div id="genrerecords" >
        {newrecords ? newrecords.map((record) =>  <Genre  records={records} setRecords={setRecords} token={token} key={record.id} record={record} newrecords={newrecords} setNewRecords={setNewRecords}></Genre>) : null}

        </div>
    )
}

export default GenreRecords

