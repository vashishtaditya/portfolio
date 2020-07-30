import React from 'react'

const SKILLS = [
    {
        id: 1,
        type: 'Development',
        technologies: ['React', 'Redux', 'Node', 'Express', 'HTML', 
                        'CSS', 'SASS', 'Bootstrap', 'Git', 'AJAX', 'React Native', 
                        'C#', 'Python', 'Django', 'Kotlin', 'Swift', 'Java', 'C++', 'Xamrin', 'XAML', 'UWP']
    },
    {
        id: 2,
        type: 'Design',
        technologies: ['UX', 'UI', 'Adobe XD', 'Photoshop', 'Illustrator']
    }
]

const Skills = () => {
    return (
        <div className="col-md-8">
                          <div className="about-heading">Skills</div>
                                <div className="row">
                                    {SKILLS.map(({type, technologies}, index) =>{
                                        return <div className="col-12" key={index}>
                                  <div className="skills-subtitle">{type}</div>
                                    <div className="skills-list">
                            {technologies.map((technology, i) => {
                     return <div className="skills-list-item" key={i}>{technology}</div>
            })} 
            
            </div>
                            </div>
                      })}
                        </div>
                      </div>

    )
}

export default Skills
