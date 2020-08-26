import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects on GitHub</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
							<p>Traffic Sign Recognition using Deep Learning</p>
								<div className="project" style={{backgroundImage: 'url(images/tsr_bg.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/nihalmishra/traffic-sign-recognition-DL/" target="_blank" rel="noopener noreferrer">Traffic Sign Recognition using Deep Learning</a></h3>
											<span>Machine Learning</span>
											{/* <p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p> */}
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
							<p>Portfolio Website made with React.js</p>
								<div className="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/nihalmishra/portfolio">My Online Portfolio</a></h3>
											<span>React Web Application</span>
											{/* <p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p> */}
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
							<p>CaplGen - Django WebApp</p>
								<div className="project" style={{backgroundImage: 'url(images/img-2.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/nihalmishra/caplgen" target="_blank" rel="noopener noreferrer">CaplGen</a></h3>
											<span>Django/Python Web Application</span>
											{/* <p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p> */}
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<p>Job Scheduler</p>
								<div className="project" style={{backgroundImage: 'url(images/img-3.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/nihalmishra/job-scheduler" target="_blank" rel="noopener noreferrer">Job Scheduler using Heap and Red Black Tree Data Structures</a></h3>
											<span>Java Program</span>
											{/* <p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p> */}
										</div>
									</div>
								</div>
							</div>
							
							{/* <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-5.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 05</a></h3>
											<span>Graphic, Logo</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-6.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 06</a></h3>
											<span>Web Design</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div> */}
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="https://github.com/nihalmishra" className="btn btn-primary btn-lg btn-load-more" target="_blank" rel="noopener noreferrer">More on GitHub! <i className="icon-reload" /></a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
