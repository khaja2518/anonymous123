import React, { Component } from 'react'

class FormComponent extends Component {

    constructor(props) {
        super(props)
        this.state = { username: '', comment: '' }
    }

    usernameHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    commentHandler = (event) => {
        this.setState({
            comment: event.target.value
        },()=>{})
    }

    onSubmitHandler = (event) => {
        console.log(`${this.state.username} ${this.state.comment}`)
        event.preventDefault()
    }

    render() {
        return (
            <div className=''>
                <form onSubmit={this.onSubmitHandler}>
                    <div>
                        
                        <label>User Name</label>
                        <input type='text' value={this.state.username} onChange={this.usernameHandler} />
                        <label>Comment</label>
                        <textarea  value={this.state.comment} onChange={this.commentHandler} />
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormComponent