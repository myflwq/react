import React from 'react'

class Boot extends React.Component {
  render () {
    return(
      <div>
        <div className="btn-group" role="group" aria-label="...">
          <button type="button" className="btn btn-default">Left</button>
          <button type="button" className="btn btn-default">Middle</button>
          <button type="button" className="btn btn-default">Right</button>
        </div>
        <br />
        <span className="glyphicon glyphicon-saved" aria-hidden="true"></span>
        <span className="glyphicon glyphicon-tower" aria-hidden="true"></span>
        <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
      </div>
    )
  }
}
export default Boot;
