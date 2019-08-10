import React, { Component } from "react"
import {Container,Heading,Card, Menu, Section } from 'react-bulma-components'
class Home extends Component {

    render() {
        return (
            <Container >
                <Section>
                    <Card>
                        <Heading>Standard Frontend Developer Questions</Heading>
                        <Menu>
                            <Menu.List>
                                <Menu.List.Item onClick={() => this.props.history.push('/junior')}>
                                    Junior Level
                            </Menu.List.Item>
                                <Menu.List.Item onClick={() => this.props.history.push('/middle')}>
                                    Middle Level
                            </Menu.List.Item>
                            </Menu.List>
                        </Menu>
                    </Card>
                </Section>
            </Container >
        )
    }
}

export default Home
