import React, { Component } from "react"
import { Container, Card, Section } from 'react-bulma-components'
class Question3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arr1: [1, 1, 1, 2, 1, 1],
            arr2: [0, 0, 0.55, 0, 0]
        }
    }

    isUnique(arr, value) {
        return arr.filter(item => item === value).length === 1;
    }

    findUniq(arr) {
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            if (this.isUnique(arr, arr[i])) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }

    render() {
        const { arr1, arr2 } = this.state
        return (
            <Container style={{ width: "60%" }}>
                <Card>
                    <Section>
                        <h1>Input: [ 1, 1, 1, 2, 1, 1 ]</h1>
                        <h1>Output: {this.findUniq(arr1).join(", ")}</h1>
                    </Section>
                    <Section>
                        <h1>Input: [ 0, 0, 0.55, 0, 0 ]</h1>
                        <h1>Output: {this.findUniq(arr2).join(", ")}</h1>
                    </Section>
                </Card>
            </Container>
        )
    }
}

export default Question3