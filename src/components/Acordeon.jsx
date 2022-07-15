import Card from "react-bootstrap/Card";

function AcordeonDom() {
  return (
    <Card>
      <Card.Header className="color text-dark">
        Integrantes del grupo
      </Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <ul className="color text-dark list-unstyled">
            <li>Integrante Nicolas Vicencio</li>
            <li>Integrante Dayson Landeros</li>
          </ul>
          <p className="ggg text-dark">
            Nuestro proyecto consiste en la elaboracion de una api de libros
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AcordeonDom;
