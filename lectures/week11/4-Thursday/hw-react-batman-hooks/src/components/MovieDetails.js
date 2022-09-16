import React from 'react'
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'





const MovieDetails = ({moviesURL}) => {
  return (
    <>
    <h1>Batman Movies</h1>
      {moviesURL.map(movie => {

        return (
          <>
          
          <Container>
             <Row className="justify-content-md-center">
              <Col md="auto">
                 <Card border="warning" key={movie.imdbID} style={{ width: '15rem' }}>
                  <Card.Img variant='top' src={movie.Poster} />
                  <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>Release Date: {movie.Year}</Card.Text> 
                    {/* <Button variant='primary'>Movie Details</Button> */}
                  </Card.Body>
                </Card>
                <br />

               </Col>
            </Row>  
          </Container>
           
           
          </>

        )

        })}

    </>

  )

}
    
export default MovieDetails


 