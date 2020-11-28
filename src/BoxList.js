import React, { Component } from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm'

class BoxList extends Component {
    constructor(props){
        super(props);

        this.state={
            boxes: []
        }
        this.create=this.create.bind(this)
    }
    remove(id){
        this.setState({
            boxes: this.state.boxes.filter(box=>box.id!==id)
        })
    }
    create(newBox){
        this.setState({
            boxes: [...this.state.boxes, newBox]
        })
    }
    render() {
        const boxes=this.state.boxes.map(box=>(
          <Box
          key={box.id}
          id={box.id}
          height={box.height}
          width={box.width}
          color={box.color}
          removeBox={()=>this.remove(box.id)}
          />
        ))
        return (
            <div>
                <h1>Colorful boxes</h1>
                <NewBoxForm creteBox={this.create}/>
                {boxes}
            </div>
        )
    }
}

export default BoxList
