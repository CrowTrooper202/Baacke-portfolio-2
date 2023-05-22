import React from 'react';
import Container from './Container';
import Row from './Row';
import Col from './Col';
import Card from './Card';

const portfolioContainer =() =>{
return(
    <Container>
        <Row>
            <Col size='md-4'>
            <Card Heading = 'Text Editor'>


            </Card>
            </Col>
        </Row>
    </Container>
)
}

export default portfolioContainer;