import React from "react";
import Container from '../applications/Container';
import Row from '../applications/Row';
import Col from '../applications/Col';
import Card from '../Card';
import Project from '../Project'

export default function Portfolio() {
    return (
        <section>
            <Container>
                <Row>
                    <Col size='md-4'>
                        <Card Heading='Text Editor'>
                            <Project />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}