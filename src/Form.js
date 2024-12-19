import React from 'react';
import { useState } from 'react';

function Form( ) {
    const [artist, setArtist] = useState("")

    function handleArtistChange(event) {
       
        setArtist(event.target.value)
       
    }

return (
    <div id="form">
        <form>
        <input onChange={handleArtistChange} type="text" value={artist} />
         <button type="submit">Submit</button>
         </form>
    </div>
)

}

export default Form