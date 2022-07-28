const ProgressBar = (props) => {

    const percentageBarLength = {
        width: props.percentage.toString() + '%'
    }

    return(
        <div className="progressBar">
            <div style={percentageBarLength} className="percentageBar">

            </div>
        </div>
    )
}


export default ProgressBar