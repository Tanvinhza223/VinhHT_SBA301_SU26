import { Carousel } from 'react-bootstrap'
import listBanner from '../../data/banner'

function BannerCarousel() {
  return (
    <Carousel interval={3000} ride="carousel" className="mb-4">
      {listBanner.map((banner) => (
        <Carousel.Item key={banner.id}>
          <img
            className="d-block w-100"
            src={banner.image}
            alt={banner.title}
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>{banner.title}</h3>
            <p>{banner.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default BannerCarousel
