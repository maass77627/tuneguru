import React from 'react';


function Record({record}) {
    console.log(record)
    return(
        // <div>
        //     <p>{record.title}</p>
        // </div>
        <Card>
            <Card.Img variant="top" src={record.image}></Card.Img>
            <Card.Body>
                <Card.Title>{record.title}</Card.Title>
                <Card.text>
                    {record.description}
                </Card.text>
            </Card.Body>
        </Card>
    )

}

export default Record