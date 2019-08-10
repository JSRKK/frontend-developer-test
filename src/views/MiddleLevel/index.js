import React, { Component } from "react"
import { Container, Section, Heading } from 'react-bulma-components'
import MiddleQuestion1 from "./Question1"
import MiddleQuestion2 from "./Question2"
class MiddleLevel extends Component {
    render() {
        return (
            <Container>
                <Section>
                    <Heading>Question #1 - Middle Leve</Heading>
                    <Heading subtitle>
                        Using CSS Grid and/or CSS Flexbox, write the HTML/CSS to create the below UI. You
                        can use online editor such as Code Pen https://codepen.io or JSFiddle https://jsfiddle.net/ and
                        then sure the link of your work with us
                    </Heading>
                    <MiddleQuestion1 />
                </Section>
                <Section>
                    <Heading>Question #2 - Middle Level</Heading>
                    <Heading subtitle>
                        Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or
                        camelCase in Java) for strings. All words must have their first letter capitalized without spaces
                    </Heading>
                    <Heading subtitle>
                        <p>"hello case".camelCase() returns HelloCase</p>
                        <p>"camel case word".camelCase() returns CamelCaseWord</p>
                    </Heading>
                    <MiddleQuestion2 />
                </Section>
            </Container>
        )
    }
}

export default MiddleLevel