import React , {Component} from "react"
import {Grid, Cell} from "react-mdl"

class Landing extends Component {
    render () {
        return (
            <div style = {{width: "100%", margin: "auto"}}>
            <Grid className = "landing-grid">
            <Cell col ={12}>
            <img className = "avatar-img" 
            src="data:image/png;base64,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"
            alt="avatar"
            />
            <div className="banner-text">
            <h1>Full Stack Web Developer</h1>
            

            <hr />

            <p>CSS | Bootstrap | JavaScript| React| React-Native| Mongo</p>
            <div className="social-links">
            {/* linked in*/}
            <a href="https://www.linkedin.com/in/christopher-pierre-louis-a23932166/" rel="noopener noreferrer" target="_blank">
            <i className= "fa fa-linkedin" aria-hidden ="true" />
            </a>
              {/* github*/}
              <a href="https://github.com/chrispierrelouis26" rel="noopener noreferrer" target="_blank">
            <i className= "fa fa-github" aria-hidden ="true" />
            </a>
              {/* free codecamp*/}
              <a href="https://google.com" rel="noopener noreferrer" target="_blank">
            <i className= "fa fa-free-code-camp" aria-hidden ="true" />
            </a>
              {/* youtube*/}
              <a href="https://google.com" rel="noopener noreferrer" target="_blank">
            <i className= "fa fa-youtube" aria-hidden ="true" />
            </a>
            </div>

            </div>
            </Cell>
            </Grid>

            </div>
        )
    }
}

export default Landing;