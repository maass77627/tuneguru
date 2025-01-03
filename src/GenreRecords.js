import Genre from './Genre';
import React from "react";

function GenreRecords({newrecords}) {
    console.log(newrecords)


    return(

        
        <div id="genrerecords">
            <h3>Recommended Listening..</h3>
            
        {newrecords ? newrecords.map((record) =>  <Genre record={record}></Genre>) : null}

        </div>
    )
}

export default GenreRecords