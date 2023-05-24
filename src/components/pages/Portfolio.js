import React from "react";
import Container from '../applications/Container';
import Row from '../applications/Row';
import Col from '../applications/Col';
import Card from '../Card';
import Project from '../Project'
import proj1Img from '../utils/photos/jate-pwa.PNG'
import proj2Img from '../utils/photos/avalon-social.PNG'
import proj3Img from '../utils/photos/day-scheduler.PNG'
import proj4Img from '../utils/photos/project-screenshot-2.png'
import proj5Img from '../utils/photos/Note_taker.PNG'
import proj6Img from "../utils/photos/horiseon_screenshot.PNG";

const gitLink1 = 'https://github.com/CrowTrooper202/text-editor-pwa'
const demo1 = 'https://pure-garden-53924.herokuapp.com/'
const gitLink2 = 'https://github.com/CrowTrooper202/avalon-social-network'
const demo2 = 'https://drive.google.com/file/d/1TBMtyiW7cEh4Iux4MMQS8B5Had2ZQnDy/viewLinks to an external site.'
const gitLink3='https://github.com/CrowTrooper202/work-day-scheduler'
const demo3='https://crowtrooper202.github.io/work-day-scheduler/'
const gitLink4='https://github.com/CrowTrooper202/p1-national-parks-locator'
const demo4='https://crowtrooper202.github.io/p1-national-parks-locator/'
const gitLink5='https://github.com/CrowTrooper202/note-taker'
const demo5='https://quiet-inlet-16002.herokuapp.com/'
const gitLink6='https://github.com/CrowTrooper202/horiseon-accessibility-recode'
const demo6='https://crowtrooper202.github.io/horiseon-accessibility-recode/'

export default function Portfolio() {

    const projectArray = [
        {
            title: "JATE PWA",
            description: "demo of Progressive Web Application",
            imageUrl: proj1Img,
            gitHub: gitLink1,
            demo: demo1
        },
        {
            title: "Social Sever",
            description: "demo of Mongoose CRUD application",
            imageUrl: proj2Img,
            gitHub: gitLink2,
            demo: demo2
        },
        {
            title: "Day Scheduler",
            description: "demo of JQuery, and JSON",
            imageUrl: proj3Img,
            gitHub: gitLink3,
            demo: demo3
        },
        {
            title: "National Park planner",
            description: "demo of API fetch, and full front-end development",
            imageUrl: proj4Img,
            gitHub: gitLink4,
            demo: demo4
        },
        {
            title: "Note taker",
            description: "demo of fullstack application",
            imageUrl: proj5Img,
            gitHub: gitLink5,
            demo: demo5
        },
        {
            title: "Horiseon Splash Page",
            description: "demo of HTML and CSS debugging",
            imageUrl: proj6Img,
            gitHub: gitLink6,
            demo: demo6
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