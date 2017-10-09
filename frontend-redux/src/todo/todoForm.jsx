import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription } from './todoActions'

const TodoForm =  props => {

    const keyHandler= e => {
        if(e.key === "Enter") {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === "Escape") {
            props.handleClear()
        }
    }

    return (
        <div role="form" className="todoForm">

            <Grid cols="12 9 10">
                <input type="text" id="description" className="form-control"
                    onKeyUp={keyHandler}
                    onChange={props.changeDescription}
                    placeholder="Adicione uma tarefa" value={props.description} />
            </Grid>

            <Grid cols="12 3 2">
                <IconButton style="primary" icon="plus" onClick={props.handleAdd}></IconButton>
                <IconButton style="info" icon="search" onClick={props.handleSearch}></IconButton>
                <IconButton style="default" icon="close" onClick={props.handleClear}></IconButton>
            </Grid>
        </div>
    )
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispath => bindActionCreators({ changeDescription}, dispath)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)