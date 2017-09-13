import React from 'react'
import PageHeader from '../template/pageHeader'
import Form from './todoForm'
import List from './todoList'

export default class Todo extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"/>
                <Form />
                <List />
            </div>
        )
    }
}