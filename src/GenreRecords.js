
import React, { useEffect } from "react";
import Genre from "./Genre";

function GenreRecords({ loadArtist, newrecords, token, setNewRecords, records, setRecords }) {
  console.log(newrecords);

  
  useEffect(() => {
    if ((!newrecords || newrecords.length === 0) && records.length > 0) {
      setNewRecords(records);
    }
  }, [records, newrecords, setNewRecords]);

  return (
    <div id="genrerecords">
      {newrecords && newrecords.length > 0 ? (
        newrecords.map((record) => (
          <Genre
            key={record.id}
            loadArtist={loadArtist}
            record={record}
            token={token}
            newrecords={newrecords}
            setNewRecords={setNewRecords}
            records={records}
            setRecords={setRecords}
          />
        ))
      ) : (
        <h3 style={{ textAlign: "center", color: "#777" }}>Loading records...</h3>
      )}
    </div>
  );
}

export default GenreRecords;

