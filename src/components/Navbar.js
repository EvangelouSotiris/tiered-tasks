import ProgressBar from "./ProgressBar"
import { useState } from "react"

const categories = [
    'The Untasked',
    'Go Girl, Give us nothing *sparkles emoji*',
    'Lazy is an understatement',
    '*pokes* come on, do something.',
    'The absolute minimum man *superhero music playing*',
    'If meh was a tier',
    'We try every 2-3 business days',
    'Casual effort enjoyer',
    'Average person (in a bad way)',
    'You are literally 3 tiers away from me complimenting you, do something',
    'Average person (in a neutral way)',
    'Finally you reached normality *clap clap*',
    'Hey you actually do stuff',
    'The boy who tasked, come to try. AAAVADA K-',
    'Oh you taskin taskin',
    'You are hotter than Lola Bunny on Space Jam',
    'Ow lawd you comin',
    'Genius, billionaire, playboy, todoist (tell me you got the reference)',
    'Taskmaster (you really are, nice)',
    'Damn you single? I like people who get shit done.',
    'Jesus christ, its Jason Bourne',
    'I have to add your own personal OST at this point',
    'No cap, GOD MATERIAL',
    'The task goat',
]

const Navbar = (props) => {     

    return(
        <header className="navbar">
            <ProgressBar percentage={props.progress%100} />
            <h3 style={{color: '#ce89ee'}}>{categories[Math.floor(props.progress/100)]}</h3>
        </header>
    )
}

Navbar.defaultProps = {
    taskNumber: 0
}

export default Navbar