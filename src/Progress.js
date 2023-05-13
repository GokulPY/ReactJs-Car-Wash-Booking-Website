import "./Progress.css";

function Progress({percent = "10%"}){

    return (
        <>
        <div className="outer-con">
        <div className="inner-con" style={{"--width":percent}}>
            
        </div>
        </div>
        </>
    )
}

export {Progress};