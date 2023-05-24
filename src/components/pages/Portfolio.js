import React from "react";
import Container from '../applications/Container';
import Row from '../applications/Row';
import Col from '../applications/Col';
import Card from '../Card';
import Project from '../Project'
import proj1Img from '../utils/photos/jate-pwa.PNG'

// an array of objects, each object will hold; title, image, description
// with the array, map over it on line 18 below and insert it in between
// your Row element. When you map over your array, you return a Col, with  
// a Card and Project nested inside
export default function Portfolio() {

    const projectArray = [
        {
            title: "Project 1",
            description: "description 1",
            imageUrl: proj1Img
        },
        {
            title: "Project 2",
            description: "description 2",
        },
        {
            title: "Project 1",
            description: "description 1",
        },
        {
            title: "Project 2",
            description: "description 2",
        },
        {
            title: "Project 1",
            description: "description 1",
        },
        {
            title: "Project 2",
            description: "description 2",
        }
    ]

    return (
        <section>
            <Container>
                <Row>
                    {
                        projectArray.map( (projObj, index) => {
                            return (
                                <Col size='md-4' key={`${projObj.title}-${index}`}>
                                    <Card Heading='Text Editor'>
                                        <Project projObj={projObj} />
                                    </Card>
                                </Col>
                            )
                        })
                    }


                    {/* <Col size='md-4'>

                        <Card Heading='Text Editor'>
                            <Project />
                        </Card>
                    </Col> */}
                </Row>
            </Container>
        </section>
    )
}