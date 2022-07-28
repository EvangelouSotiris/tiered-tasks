const Footer = (props) => {     

    const removeLocalStorage = () => {
        localStorage.removeItem('todayTasks')
        localStorage.removeItem('completedTasks')
        window.location.reload()
    }

    return(
        <div className="footer">
            <a
                className="githubIcon"
                href={'https://github.com/EvangelouSotiris/tiered-tasks'}
                target={'_blank'}
            ><i className="fa fa-github-alt"></i></a>
            <button className="footerButton" onClick={removeLocalStorage}>
                Clean my Data
            </button>
        </div> 
    )
}

export default Footer