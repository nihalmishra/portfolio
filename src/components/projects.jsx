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
							<a href="https://github.com/nihalmishra/traffic-sign-recognition-DL/" target="_blank" rel="noopener noreferrer"><b><p>Traffic Sign Recognition - Deep Learning</p></b></a>
								<div className="project" style={{backgroundImage: 'url(images/tsr_bg.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/nihalmishra/traffic-sign-recognition-DL/" target="_blank" rel="noopener noreferrer">Traffic Sign Recognition using Deep Learning and Computer Vision</a></h3>
											<span>Machine Learning</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
							<a href="https://github.com/nihalmishra/portfolio"><b><p>Portfolio Website made with React.js</p></b></a>
								<div className="project" style={{backgroundImage: 'url(images/website.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/nihalmishra/portfolio">My Online Portfolio</a></h3>
											<span>React Web Application</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
							<a href="https://github.com/nihalmishra/caplgen" target="_blank" rel="noopener noreferrer"><b><p>CaplGen - Django WebApp</p></b></a>
								<div className="project" style={{backgroundImage: 'url(images/django.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/nihalmishra/caplgen" target="_blank" rel="noopener noreferrer">CaplGen</a></h3>
											<span>Django/Python Web Application</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
							<a href="https://github.com/nihalmishra/p2p-Tapestry" target="_blank" rel="noopener noreferrer"><b><p>Distributed Peer-To-Peer Tapestry Algorithm</p></b></a>
								<div className="project" style={{backgroundImage: 'url(images/elixir.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/nihalmishra/p2p-Tapestry" target="_blank" rel="noopener noreferrer">Implemented a research paper on P2P Tapestry using Elixir</a></h3>
											<span>Distributed Systems</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
							<a href="https://github.com/nihalmishra/job-scheduler" target="_blank" rel="noopener noreferrer"><b><p>Job Scheduler in Java</p></b></a>	
								<div className="project" style={{backgroundImage: 'url(images/job_scheduler.svg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/nihalmishra/job-scheduler" target="_blank" rel="noopener noreferrer">Efficient Job Scheduler using Heap and RedBlackTree data structures</a></h3>
											<span>Java application</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
							<a href="https://github.com/nihalmishra/TwitterToImgurBot" target="_blank" rel="noopener noreferrer"><b><p>Reddit Bot</p></b></a>
								<div className="project" style={{backgroundImage: 'url(images/reddit-bot.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/nihalmishra/TwitterToImgurBot" target="_blank" rel="noopener noreferrer">TwitterToImgurBot</a></h3>
											<span>A tweet transcriber bot for Reddit made with Python</span>
										</div>
									</div>
								</div>
							</div>
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
