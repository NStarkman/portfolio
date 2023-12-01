import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                  <li>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
          
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
      <div className="row">
            <p>
              The header photo was taken from <a href="https://unsplash.com/photos/black-and-white-mountains-under-blue-sky-during-daytime-_HJNQCoXVkU">Unsplash.</a> All credit goes to the original photographer.
            </p>
            <p>
              This site was made using the following template: <a href="https://github.com/rbhatia46/React-Portfolio">React-Portfolio</a>. Original design and code credit goes to the Rahul Bhatia.
            </p>
      </div>
    </footer>
    );
  }
}