import React, { Component } from 'react';

export default class WorkTermReport extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="workTermReport">
        <div className="text-container">
          <div className="row">
            <div>
              <h1><span>Work Term Reports</span></h1>
            </div>
            <div className="flex-container">
            
                  {
                    resumeData.workTermReports && resumeData.workTermReports.map((item)=> {
                    // <ul className="slides three columns">
                    console.log(item)
                    return(
                      <a className='individualReprt' href='https://www.xbox.com'>
                            <h4>
                              {item.jobTitle}
                            </h4>
                            <cite>{item.companyName}</cite>
                            <p>
                              {item.term}
                            </p>
                      </a>

                    )
                    })
                  }
            </div>
          </div>
        </div>
      </section>
    );
  }
}