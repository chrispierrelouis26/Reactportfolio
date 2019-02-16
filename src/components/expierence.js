import React, {Component} from "react"
import {Grid, Cell} from "react-mdl"

class Experience extends Component {
    render () {
        return (
            <Grid>
                <Cell col ={4}>
                <p style = {{marginTop: "0px"}}>{this.props.jobName}</p>
                <p>{this.props.location}</p>
                <p>{this.props.startYear} - {this.props.endYear} </p>
                </Cell>
                <Cell col ={8}>
          
                <p>{this.props.jobDescription}</p>
                </Cell>
            </Grid>

        )
    }
}

export default Experience;