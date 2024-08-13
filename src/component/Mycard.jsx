import React from 'react'
import { Row,Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Mycard() {
  return (
    <div style={{paddingTop:'10px',paddingBottom:'10px'}}>
        <div><h2 style={{textAlign:'center'}}>welcome to demo</h2></div>
        <div className='container'>
          <Row style={{display:'flex',justifyContent:'space-around',paddingTop:'10px',paddingBottom:'10px'}}>
              <Col sm={3} style={{display:'flex',justifyContent:'center'}}>
              <Card style={{ width: '18rem',height:'25rem' }}>
            <Card.Img variant="top" src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" style={{ height: '180px', width: '100%', objectFit: 'cover' }}/>
            <Card.Body>
              <Card.Title>oneone</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card></Col>
  
          <Col sm={3} style={{display:'flex',justifyContent:'center'}}>
          <Card style={{ width: '18rem',height:'25rem' }}>
            <Card.Img variant="top" src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" style={{ height: '180px', width: '100%', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>twotwo</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </Col>
  
          <Col sm={3} style={{display:'flex',justifyContent:'center'}}>
          <Card style={{ width: '18rem',height:'25rem' }}>
            <Card.Img variant="top" src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" style={{ height: '180px', width: '100%', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>threeee</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
              </Col>
  
              <Col sm={3} style={{display:'flex',justifyContent:'center'}}>
              <Card style={{ width: '18rem',height:'25rem' }}>
              <Card.Img variant="top" src="https://cc-prod.scene7.com/is/image/CCProdAuthor/FF-SEO-text-to-image-z-pattern1-desktop-1x?$pjpeg$&jpegSize=100&wid=500" style={{ height: '180px', width: '100%', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>fourrr</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
              </Col>
          </Row>
        </div>

    </div>
  )
}

export default Mycard