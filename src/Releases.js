import Card from 'react-bootstrap/Card';

function Releases({release}) {
console.log(release)


    return (
        // <div id="releasediv">
        <Card id="release" >
        <Card.Img  src={release.images[1].url} />
        <Card.ImgOverlay>
        <Card.Body>
        <Card.Title>{release.name}</Card.Title>
        <Card.Text>
           {release.release_date} <br></br>
        </Card.Text>
        </Card.Body>
        </Card.ImgOverlay>
        </Card>
        // </div>
    )
}

export default Releases
