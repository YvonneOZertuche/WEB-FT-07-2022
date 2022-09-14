import React from 'react'
import Card from 'react-bootstrap/Card';


const Contact = () => {
  return (
    <>
      
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="imageURL" />
        <Card.Body>
            <Card.Title>title</Card.Title>

            <Card.Text>
                <ul>
                    <li><b>phone number:</b> phone number</li>
                    <li><b>email:</b> email </li>
                </ul>
            </Card.Text>
            
        </Card.Body>
        </Card>
    </>
  )
}

export default Contact
