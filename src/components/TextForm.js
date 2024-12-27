export default function TextForm(props) {  
  return (
    <div className='mx-3 mt-3'>
        <textarea className="form-control" style={props.textRes[4]} id="exampleFormControlTextarea1" onChange={props.textRes[1]} value={props.textRes[5]} rows="10"></textarea>
        <div className="row text-center mt-3">
            <div className="col-sm-2">
                <button type="button" className="btn btn-info" onClick={props.textRes[0]}>Make Capitalize</button>
            </div>
            <div className="col-sm-2">
                <button type="button" className="btn btn-dark" onClick={props.textRes[2]}>Count No. of Word</button>
            </div>
            <div className="col-sm-2">
                <button type="button" className="btn btn-success" onClick={props.textRes[3]}>Count No. of Letter</button>
            </div>
            <div className="col-sm-2">
                <button type="button" className="btn btn-warning" onClick={props.textRes[7]}>Change In Small Letter</button>
            </div>
            <div className="col-sm-2">
                <button type="button" className="btn btn-danger"  onClick={props.textRes[6]}>Change In Cap. Letter</button>
            </div>
            <div className="col-sm-2">
                <button type="button" className="btn btn-primary" onClick={props.setInputStyleDark}>{props.textRes[8]}</button>
            </div>
        </div>
    <div className="row text-center mt-3">
        <div className="col-sm-2">
            {props.makeCapitalize}
        </div>
        <div className="col-sm-2">
            {props.noOfWord}
        </div>
        <div className="col-sm-2">
            {props.noOfLetter}
        </div>
        <div className="col-sm-2">
            {props.inSmall}
        </div>
        <div className="col-sm-2">
            {props.inCap}
        </div>
        <div className="col-sm-2">
            {props.darkMode}
        </div>
    </div>
    </div>
  )
}
