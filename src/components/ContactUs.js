import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
               For any inquiries, my linkedIn is the best way to reach me.
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>LinkedIn:  </h4>
                <a href={resumeData.linkedinId}>{resumeData.linkedinId}</a>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}