import Genre from './Genre';
import React from "react";

function GenreRecords({newrecords}) {
    console.log(newrecords)


    return(

        
        <div id="genrerecords">
<<<<<<< HEAD
            <div id="border">
            <h3>Recommended Listening..</h3>
            </div>
        {newrecords ? newrecords.map((record) =>  <Genre key={record.id} record={record}></Genre>) : null}
=======
            <h3>Recommended Listening..</h3>
            
        {newrecords ? newrecords.map((record) =>  <Genre record={record}></Genre>) : null}
>>>>>>> 1e780f475ce54677c5ae1e380e09665d107c5c15

        </div>
    )
}

export default GenreRecords