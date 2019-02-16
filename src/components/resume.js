import React , {Component} from "react"
import {Grid, Cell} from "react-mdl"
import Education from "./education"
import Experience from "./expierence"
import Skills from "./skills"


class Resume extends Component {
    render () {
        return (
            <div>
                <Grid>
                    <Cell col = {4}>
                    <div style = {{textAlign: "center"}}> 
                    <img className="responsive-img" src="./images/whale.jpg" alt="The Power Coders" />

                    </div>

                    <h2 style = {{paddingTop: "2em"}}>Christopher Pierre</h2>
                    <h4 style = {{color: "grey"}}>Full-Stack Web Developer</h4>
                    <hr style = {{borderTop: "3px solid #833fb2", width: "50%"}} />
                    <p>Passionate junior full stack web developer with an engine of hard work and self-motivation that drives me. As a prior Operational Specialist in the United States Navy I pride myself in the capability of working alone or as a member of a team.</p>
                    <hr style = {{borderTop: "3px solid #833fb2", width: "50%"}} />
                    <h5>Contact Me</h5>
                    <p> Menifee, Ca, 92584</p>
                    <h5>Phone</h5>
                    <p>704-500-3147</p>
                    <h5>Email</h5>
                    <a href = "chrispierrelouis.cpl@gmail.com">chris.pierrelouis9@gmail.com</a>
                    <div>
                    <h5>Web</h5>
                    <a href = "https://github.com/chrispierrelouis26">Github </a>
                    <br/>
                    <a href = "https://www.linkedin.com/in/christopher-pierre-louis-a23932166/">LinkedIn</a>
                    </div>
                    </Cell>
                    
                    <Cell className = "resume-right-col" col = {8}>
                    <h2>Education</h2>


                    <Education
                    startYear={2018}
                    endYear = {2019}
                    schoolName = "UCSD Extension"
                    schoolDescription = "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a."
                    
                    />
                  
                    <hr style = {{borderTop: "3px solid #e22947"}}/>

                    <h2> Work Experience</h2>
                    <Experience 
                    location = "Sasebo, Japan"
                     jobName = "OPERATIONAL SPECIALIST 2ND CLASS UNITED STATES NAVY"
                    startYear = {2012} 
                    endYear = {2018}
                   
                    jobDescription = "As Common Maritime Database Manager I demonstrated knowledge and skill in maintaining an accurate database during 9 joint and multi-national exercises.
Train and led to the qualification of 6 Database Managers and 10 Combat Information Center officers which improved our divisions mission readiness.
"
                    
                    />
                     
                    <Experience 
                    location = "Statesville, NC"
                    startYear = {2009}
                    endYear = {2012}
                    jobName = "WALGREENS SERVICE-CLERK"
                    jobDescription = "Worked collaboratively in a team of 20 to create an inviting service-oriented store for customer 
                    and employees. 
                    Processed more than $300000 in annual sales at cash registers in quick engaging and efficient manner.
                    "
                    
                    />
                   <hr style = {{borderTop: "3px solid #e22947"}}/>

                    <h2>Front-End</h2>
                    <Skills
                    skill = "HTML"
                    progress = {85}
                 
                />
                  <Skills
                    skill = "CSS"
                    progress = {60}
                 
                />
                  <Skills
                    skill = "JavaScript"
                    progress = {81}
                 
                />
                  <Skills
                    skill = "React.JS"
                    progress = {70}
                 
                />
                <h2>Back-End</h2>
                <Skills
                    skill = "NODE"
                    progress = {71}
                 
                />
                  <Skills
                    skill = "EXPRESS.JS"
                    progress = {75}
                 
                />
                  <Skills
                    skill = "MONGODB"
                    progress = {90}
                 
                />
                  <Skills
                    skill = "SQL"
                    progress = {50}
                 
                />
                
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;





