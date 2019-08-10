import React, { Component } from "react"
import { Container, Heading, Columns, Box, Button } from 'react-bulma-components'
const ESCAPE_KEY = 27;
const ENTER_KEY = 13;
class Question2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            newItem: '',
            editing: null,
            editText: ''
        }
    }

    onChangeText = async (event) => {
        await this.setState({
            newItem: event.target.value
        });
    }

    addItem = () => {
        const { newItem } = this.state;
        if (newItem.trim()) {
            this.setState({
                items: [
                    ...this.state.items,
                    { list: newItem, completed: false }
                ],
                newItem: ''
            })
        }
    }

    editItem = (index, list) => {
        this.setState({ editing: index, editText: list })
    }

    removeItem(index) {
        let { items } = this.state
        items.splice(index, 1)
        this.setState({ items })
    }

    done(index) {
        let { items } = this.state
        items[index].completed = true
        this.setState({ items })
    }

    handleSubmit = () => {
        let { items, editText, editing } = this.state
        if (editText.trim()) {
            items[editing].list = editText
            this.setState({
                items,
                editing: null,
                editText: ''
            })
        } else {
            this.removeItem(editing)
            this.setState({
                editing: null,
                editText: ''
            })
        }
    }

    handleKeyDown = (event) => {
        if (event.which === ESCAPE_KEY) {
            this.setState({ editing: null, editText: '' })
        } else if (event.which === ENTER_KEY) {
            this.handleSubmit();
        }
    }

    handleChangeText = async (event) => {
        await this.setState({ editText: event.target.value })
    }

    renderItem(items) {
        return (
            items.map((item, index) => {
                return (
                    this.state.editing === index ?
                        <Columns key={index}>
                            <Columns.Column>
                                <input
                                    className="input"
                                    type="text"
                                    value={this.state.editText}
                                    onBlur={this.handleSubmit}
                                    onChange={this.handleChangeText}
                                    onKeyDown={this.handleKeyDown}
                                    autofocus="true"
                                />
                            </Columns.Column>
                        </Columns>
                        :
                        <Columns key={index}>
                            <Columns.Column size={9}>
                                <p
                                    style={{
                                        textDecorationLine: item.completed ? 'line-through' : null,
                                        wordWrap: 'break-word'
                                    }}
                                >
                                    {index + 1}. {item.list}
                                </p>
                            </Columns.Column>
                            <Columns.Column size={3}>
                                <div style={{ display: "flex", flexDirection: "row"}}>
                                    {!item.completed ?
                                        <div>
                                            <Button color="success" style={{marginRight: 7}} onClick={() => this.done(index)}>
                                                <span class="icon">
                                                    <i class="fas fa-check"></i>
                                                </span>
                                            </Button>
                                            <Button color="warning" style={{marginRight: 7}} onClick={() => this.editItem(index, item.list)}>
                                                <span class="icon">
                                                    <i class="fas fa-edit"></i>
                                                </span>
                                            </Button>
                                        </div>
                                        : null
                                    }
                                    <Button color="danger" onClick={() => this.removeItem(index)}>
                                        <span class="icon">
                                            <i class="fas fa-trash"></i>
                                        </span>
                                    </Button>
                                </div>
                            </Columns.Column>
                        </Columns>
                )
            })
        )
    }

    render() {
        const { items, newItem } = this.state
        return (
            <Container style={{ width: '60%' }}>
                <Box>
                    <Heading size={5}>
                        Todo List
                    </Heading>
                    <Columns>
                        <Columns.Column size={10}>
                            <input className="input" type="text" onChange={this.onChangeText} value={newItem} />
                        </Columns.Column>
                        <Columns.Column size={2}>
                            <Button color="primary" onClick={this.addItem} disabled={!newItem.trim()}>Add</Button>
                        </Columns.Column>
                    </Columns>
                    {items && items.length > 0 ? this.renderItem(items) : <p>Empty</p>}
                </Box>
            </Container>
        )
    }
}

export default Question2