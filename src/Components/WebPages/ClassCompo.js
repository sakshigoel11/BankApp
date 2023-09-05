import React, { Component } from 'react'

class ClassCompo extends Component {

    constructor() {

        super()

        this.state = {

            count: 0

        }

        this.handler = this.handler.bind(this)

    }

    handler(){
        this.setState( prevState => ({

            count: prevState.count+1

        }) )
    }

    handler2 = () => {
        this.setState( prevState => ({

            count: prevState.count+1

        }) )
    }


    render() {

        const {count} = this.state

        return (
            <div>
                <h1>Hello {count} </h1>
                <button onClick={this.handler} >Click</button>
            </div>
        )
    }
}

export default ClassCompo
