import React, { Component } from 'react'

class Error404 extends Component {
    constructor(props){
        super(props)

        // this.state = {
        //     pathname : 
        // }
    }


    componentDidMount(){
      console.log(this.props.match.params.post)
    }

    render(){
        return(
            <div style={styles}>
                <h1>404</h1>
                <h1>Paumanhin, ang pahina ay hindi  matagpuan.</h1>
                <a href="/">Bumalik</a>
            </div>
        )
    }
    
}

const styles = {
    display : "flex",
    justifyContent : "center",
    flexDirection: "column",
    alignItems : "center",
    color: "#fff",
    height : "100vh"
}

export default Error404