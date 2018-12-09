import React, { Component } from 'react'

export default class Welcome extends Component {
  render() {   
    console.log("here is welcome" + this.props.currentUser)
    return (
    <div>
    <p
        style={{
            textAlign: "center",
            marginTop: "15rem",
            color: "#1890ff",
            fontSize: "2rem"
        }}>
        Welcome to our {this.props.currentUser} App
        </p>
    </div>
    )
  }
}


