import Genre from './Genre';
import React from "react";

function GenreRecords({newrecords}) {
    console.log(newrecords)


    return(

        
        <div id="genrerecords">
            <div id="border">
            <h3>Recommended Listening..</h3>
            </div>
        {newrecords ? newrecords.map((record) =>  <Genre key={record.id} record={record}></Genre>) : null}

        </div>
    )
}

export default GenreRecords