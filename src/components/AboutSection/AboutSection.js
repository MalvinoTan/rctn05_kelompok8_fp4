import { Card, ListGroup } from "react-bootstrap";

const AboutSection = ({ data }) => {
    return (
        <Card style={{ width: "80%", margin: "0 auto" }} className="my-4">
            <Card.Body style={{ display: "flex", alignItems: "center" }}>
                <Card.Img
                    src={data.image}
                    style={{ width: "100px", height: "100px", marginRight: "1rem" }}
                />
                <div>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Subtitle>{data.id}</Card.Subtitle>
                </div>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item active style={{ textAlign: "center" }}>Done</ListGroup.Item>
                {
                    data.progress.map((item, itemIdx) => (
                        <ListGroup.Item key={itemIdx}>{item}</ListGroup.Item>
                    ))
                }
            </ListGroup>
        </Card>
    );
};

export default AboutSection;