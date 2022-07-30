import ProgressBar from "./ProgressBar"

const categories = [
    'Untasked, climb the tiers and become the task lord!',
    '*slaps the tiers i made* these bad boys will roast this user so much starting from the next one.',
    'Go Girl, Give us nothing *sparkles emoji*',
    'Lazy is an understatement',
    '*pokes* come on, do something.',
    'The absolute minimum man *superhero music playing*',
    'If meh was a tier',
    'We try every 2-3 business days',
    'Casual effort enjoyer',
    'Average person (in a bad way)',
    'You are literally 3 tiers away from me finally complimenting you, do something',
    'Average person (in a neutral way)',
    'Finally you reached normality *clap clap*',
    'We will watch your career with great interest',
    'Hey you actually do stuff',
    'The boy who tasked, come to try. AAAVADA K-',
    'Not gonna lie, we vibing right now',
    'Oh you taskin taskin',
    'You are hotter than Lola Bunny on Space Jam',
    'O lawd he(she, they) comin',
    'Genius, billionaire, playboy, todoist (tell me you got the reference)',
    'Taskmaster (you really are, nice)',
    'Damn are you single? I like people who get shit done.',
    'Jesus christ, its Jason Bourne',
    'Yes sir, the VIPs are this way',
    'I have to add your own personal OST at this point',
    'No cap, GOD MATERIAL',
    'The task goat',
    'You have reached the final tier, I doubt you need this anymore, go be great <3',
    'BUT WAIT THERES MORE',
    'no, seriously there are no more tiers',
    'bro, touch grass literally, relax for a bit with the tasks',
    '*peeks from the shoulder* still there?',
    'bruh. just leave its not that deep',
    'stg kind of annoying right there',
    'whatever im leaving..',
    '*walks away while looking back* I am goooooone',
    'you know software cant really leave right? well maybe AI someday',
    'Im out of ideas bro/sis',
    'Well, next tiers are going to be blank. Thanks for hanging out friend :)',
    'Bye :)))))))',
    '*left*'
]

const Navbar = (props) => {     

    return(
        <header className="navbar">
            <ProgressBar percentage={props.progress%100} />
            <h3 style={{color: 'white', margin: '15px'}}>Level {Math.floor(props.progress/100)}: {categories[Math.floor(props.progress/100)]}</h3>
        </header>
    )
}

Navbar.defaultProps = {
    taskNumber: 0
}

export default Navbar