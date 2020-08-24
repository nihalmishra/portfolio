import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Professional Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Automation Intern at Trader Interactive, Norfolk, VA <span> June 2020 - August 2020</span></h2>
                        <p>• Built a standard library to handle platform references for multiple platforms across different codebases and applications.</p>
                        <p>• Created a comprehensive unit testing suite for the library by integrating the Jest testing framework.</p>
                        <p>• Worked on the core backend API of the company and added detailed API documentation using the OpenAPI 3.0 standard.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                      <h2>Software Developer at Mercedes-Benz Research and Development India, Bengaluru <span> October 2017 - May 2019</span></h2>
                        <p>• Extensively worked on developing Human Machine Interface (HMI) for Cabin Infotainment Systems using C++.</p>
                        <p>• Simplified the team workflow by creating a Django web application for generating CAPL test scripts from spreadsheets.</p>
                        <p>• Developed a real-time road lane detection system using computer vision techniques, for autonomous driving assistance.</p>
                        <p>• Improved team productivity by 12% through several workflow and automation scripts using Python.</p>
                        <p>• Implemented a real-time pattern recognition framework for test automation using NI Vision Builder and LabView.</p>
                        <p>• Followed TDD, used Jenkins for CI/CD, Jira for defect tracking and Git for version control as parof Scrum sprints.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Technical Intern at Pivoting Softwares Private Limited, Ahmedabad, India <span>January 2017 - June 2017</span></h2>
                        <p>• Worked on a SaaS-based enterprise project management web platform using AngularJS, Node.js, MySQL, and MongoDB.</p>
                        <p>• Built REST APIs for a real-time chat using Sails.js MVC framework and implemented web sockets for communication.</p>
                        <p>• Designed and implemented MongoDB data models for the chat application with Waterline ORM as query handler.</p>
                        <p>• Created UI elements using AngularJS and implemented user authentication and authorization using OAuth 2.0.</p>
                        <p>• Added interactive visualization charts using D3.js to display a user’s statistical data.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
