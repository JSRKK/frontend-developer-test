import React, { Component } from "react"
import { Container, Section, Heading } from 'react-bulma-components'
import Question2 from "./Question2"
import Question3 from "./Question3"
import Question4 from "./Question4"
class JuniorLevel extends Component {

    render() {
        return (
            <Container>
                <Section>
                    <Heading>Question #2 - Junior Level</Heading>
                    <Heading subtitle>
                        Create TODO app that include features Add, Edit, Delete, Mark done
                    </Heading>
                    <Question2 />
                </Section>
                <Section>
                    <Heading>Question #3 - Junior Level</Heading>
                    <Heading subtitle>
                        There is an array with some numbers. All numbers are equal except for one. Try to find it! Using Javascript write a function that returns the unique number inside the array.
                    </Heading>
                    <Heading subtitle>
                        <p>findUniq([ 1, 1, 1, 2, 1, 1 ]) returns 2</p>
                        <p>findUniq([ 0, 0, 0.55, 0, 0 ]) returns 0.55</p>
                    </Heading>
                    <Question3 />
                </Section>
                <Section>
                    <Heading>Question #4 - Junior Level</Heading>
                    <Heading subtitle>
                    What are the benefits of using spread syntax and how is it different from rest syntax?
                    </Heading>
                    <Question4 />
                </Section>
            </Container>
        )
    }
}

export default JuniorLevel