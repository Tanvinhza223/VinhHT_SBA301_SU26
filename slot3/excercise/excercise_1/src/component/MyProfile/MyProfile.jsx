import { Card, Button } from 'react-bootstrap'

function MyProfile({ orchid }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={orchid.image}
        alt={orchid.name}
        style={{ height: '220px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title className="fs-6 fw-bold mb-1">{orchid.name}</Card.Title>
        <Card.Text className="text-muted small mb-3">{orchid.category}</Card.Text>
        <Button variant="primary" size="sm">Detail</Button>
      </Card.Body>
    </Card>
  )
}

export default MyProfile
