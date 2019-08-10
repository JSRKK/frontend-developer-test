import React, { Component } from "react"
import { Container, Card, Section } from 'react-bulma-components'
String.prototype.camelCase = function(){
    let arr = this.split(" ")
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
    }
    return arr.join("")
}
class MiddleQuestion2 extends Component {

    render() {
        return (
            <Container>
                <Card>
                    <Section>
                        <h1>Input: "hello case"</h1>
                        <h1>Output: {"hello case".camelCase()}</h1>
                    </Section>
                    <Section>
                        <h1>Input: "camel case word"</h1>
                        <h1>Output: {"camel case word".camelCase()}</h1>
                    </Section>
                </Card>
            </Container>
        )
    }
}

export default MiddleQuestion2