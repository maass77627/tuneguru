// import React from "react";
// import Card from 'react-bootstrap/Card';
// import { NavLink } from "react-router-dom";

// function Genre({record, token, newrecords, setNewRecords, setRecords, records}) {
//     console.log(record)

// function handleDelete(id) {
//     console.log(id)

//     fetch(`http://localhost:3000/records/${id}`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json"
//     }
//   })
//     let newrecs = newrecords.filter((rec) => rec.id !== id)
//     setNewRecords(newrecs)
//     let newnewrecs = records.filter((rec) => rec.id !== id)
//     setRecords(newnewrecs)
//      }



//     return (
//       <div className="genre-item-wrapper">
//         <NavLink to="/recordinfotwo" state={{ from: {record, token} }}>
//            <Card id="genre" >
//             <Card.Img  src={record.image} />
//              <Card.ImgOverlay> 
//             <Card.Body>
//             <Card.Title>{record.title}</Card.Title>
//             <Card.Text>
//                 {record.artist} <br></br>
//              {record.description}
//             </Card.Text>
//             </Card.Body>
//             </Card.ImgOverlay> 
//             </Card>
//             <button id="delete" onClick={() => handleDelete(record.id)}>delete</button>
//             </NavLink>
//      </div>
//         )
// }

// export default Genre



import React from "react";
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";



function Genre({record, token, newrecords, setNewRecords, setRecords, records}) {
 console.log(record)

function handleDelete(id) {
console.log(id)

 fetch(`http://localhost:3000/records/${id}`, {
    method: "DELETE",
    headers: {
     "Content-Type": "application/json"
   } 
   })
    let newrecs = newrecords.filter((rec) => rec.id !== id)
    setNewRecords(newrecs)
    let newnewrecs = records.filter((rec) => rec.id !== id)
    setRecords(newnewrecs)
   }


     return (
       
          <div className="genre-container">
          <NavLink 
            to="/recordinfotwo" 
            state={{ from: {record, token} }}
            className="genre-card-link" 
        >
      
          <Card className="genre-card" >
               <Card.Img className="genre-card-img" src={record.image} alt={record.title} />
                <Card.ImgOverlay> 
                 <Card.Body>
                     <Card.Title>{record.title}</Card.Title>
                       <Card.Text>
                               {record.artist} <br></br>
                              {record.description}
         </Card.Text>
                     </Card.Body>
                     </Card.ImgOverlay> 
                        </Card>
                        
                    </NavLink>
        
       
           <button className="delete-btn" onClick={() => handleDelete(record.id)}>delete</button> 
         </div>
 )
}

export default Genre