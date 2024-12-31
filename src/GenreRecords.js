import Genre from './Genre';
import React from "react";

function GenreRecords({newrecords}) {
    console.log(newrecords)


    return(
        <div>
        {newrecords ? newrecords.map((record) => <Genre record={record}></Genre>) : null}

        </div>
    )
}

export default GenreRecords