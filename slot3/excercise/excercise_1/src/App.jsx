import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
import MyProfile from './component/MyProfile/MyProfile'
import BannerCarousel from './component/BannerCarousel/BannerCarousel'
import orchidsList from './data/orchidsData'

function App() {
  return (
    <>
      <Navbar bg="light" className="border-bottom px-3">
        <Navbar.Brand href="#">Single Page Application</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Link</Nav.Link>
        </Nav>
      </Navbar>

      <Container className="my-4">
        <BannerCarousel />
        <Row xs={1} sm={2} md={4} className="g-4">
          {orchidsList.map((orchid) => (
            <Col key={orchid.id}>
              <MyProfile orchid={orchid} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default App
