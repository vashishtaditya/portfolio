import React from 'react'
import UilSports from '@iconscout/react-unicons/icons/uil-football'
import UilTravelling from '@iconscout/react-unicons/icons/uil-plane-departure'
import UilPhotography from '@iconscout/react-unicons/icons/uil-camera'
import UilTechnology from '@iconscout/react-unicons/icons/uil-robot'
import UilLearning from '@iconscout/react-unicons/icons/uil-book-open'

const styles = {
    color: '#d88a83',
    width: '24px',
}

const PASSIONS = [
    {
        id: 1,
        type: 'Learning',
        icon: <UilLearning  style={styles} className="passions-icons"/>
    },
    {
        id: 2,
        type: 'Travelling',
        icon: <UilTravelling  style={styles} className="passions-icons"/>
    },
    {
        id: 3,
        type: 'Technology',
        icon: <UilTechnology style={styles} className="passions-icons"/>
    },
    {
        id: 3,
        type: 'Photography',
        icon: <UilPhotography style={styles} className="passions-icons"/>
    },
    {
        id: 5,
        type: 'Playing sports',
        icon: <UilSports style={styles} className="passions-icons"/>
    }
]
const Passions = () => {
    return (
        <div className="col-md-4">
            <div className="passion-list-wrapper">
        <div className="about-heading">Passions</div>
            {PASSIONS.map(passion => {
                return <div className="passions-row">
                    {passion.icon}
            <div className="passion-type">{passion.type}</div>
                       </div>
            })}
        </div>
        </div>
    )
}

export default Passions
