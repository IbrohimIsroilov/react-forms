import React, { Component } from 'react';
import uuid from 'uuid'

class NewBoxForm extends Component {
    constructor(props){
        super(props);

        this.state={
            height: '',
            width: '',
            color: ''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSubmit(evt){
        evt.preventDefault();
        const newBox={...this.state, id: uuid()}
      this.props.createBox(newBox);
      this.setState({
        height: '',
        width: '',
        color: ''
      })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}> 
                <div>
                <label htmlFor='height'>Height</label>
                <input type='text' name='height' value={this.state.height} id='height' onChange={this.handleChange}></input>
                </div>
                <div>
                <label htmlFor='width'>width</label>
                <input type='text' name='width' value={this.state.width} id='width' onChange={this.handleChange}></input>
                </div>
                <div>
                <label htmlFor='color'>color</label>
                <input type='text' name='color' value={this.state.color} id='color' onChange={this.handleChange}></input>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}

export default NewBoxForm
