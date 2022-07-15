
import Carousel from 'react-bootstrap/Carousel';

function CarrouselDom() {
  return (
    <Carousel fade >
      <Carousel.Item >
        <img
          className="d-block w-100 img-slider  "
          src="https://images8.alphacoders.com/424/thumbbig-424848.webp"
          alt="Imagen 1"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-slider "
          src="https://images2.alphacoders.com/261/thumbbig-26102.webp"
          alt=""
        />

        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-slider "
          src="https://images5.alphacoders.com/397/thumbbig-397720.webp"
          alt=""
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarrouselDom;

                

