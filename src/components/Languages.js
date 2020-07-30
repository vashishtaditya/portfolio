import React from 'react'

const LANGUAGES = [
    {
        id: 1,
        language: 'English',
        accuracy: 'Fluent',
        progress: '100%'
    },
    {
        id: 2,
        language: 'Hindi',
        accuracy: 'Fluent',
        progress: '100%'
    },
    {
        id: 3,
        language: 'Punjabi',
        accuracy: 'Fluent',
        progress: '100%'
    }
]

const Languages = () => {
    return (
        <div className="about-swiped-wrapper">
            <div className='about-heading'>Languages</div>
            {LANGUAGES.map(language => {
                return <div key={language.id} className="language-wrapper">
            <div className="language-block">
            <div className="language-type">{language.language}</div>
            <div className="language-accuracy">{language.accuracy}</div>
            </div>
            <div className="progress-wrapper">
               <div className="progressBar" style={{width: language.progress}}></div>
            </div>
                </div>
                
            })}
        </div>
    )
}

export default Languages
