import React from 'react';
import './home.css'
import Particles from 'react-particles-js';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
// import { Component } from 'react';
// import Overcast from '../assets/overcast.jpg'
import Clear from '../assets/sunny.jpg'


function Home() {
    return (
		<div className='home'>
			<div className='container'>
				{/* <div class="row">
					<div className="col-sm-8">
						<div className="card welcome-box d-flex flex-row">
							<div className="card-body p-2">
								<h5 className="card-title">Welcome back,</h5>
								<h5 className="card-title">Minimal UI!</h5>
								<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
								<a href="#" className="btn stud-btn">Go somewhere</a>
							</div>
							<div className="p-2 card-image">
								<Card.Img variant="top" src={Clear}  className="img-fluid" alt="Responsive image"/>
							</div>
						</div>
					</div>
					<div className="col-sm-4">
						<Carousel>
							<Carousel.Item>
								<img
								className="d-block w-100"
								src={Clear}
								alt="First slide"
								/>
								<Carousel.Caption>
								<h3>First slide label</h3>
								<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
								className="d-block w-100"
								src={Clear}
								alt="Second slide"
								/>

								<Carousel.Caption>
								<h3>Second slide label</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
								className="d-block w-100"
								src={Clear}
								alt="Third slide"
								/>

								<Carousel.Caption>
								<h3>Third slide label</h3>
								<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</div>
				</div> */}














			<Particles
				params={{
					"particles": {
						"number": {
							"value": 260,
							"density": {
								"enable": false
							}
						},
						"size": {
							"value": 3,
							"random": true,
							"anim": {
								"speed": 4,
								"size_min": 0.3
							}
						},
						"line_linked": {
							"enable": false
						},
						"move": {
							"random": true,
							"speed": 1,
							"direction": "top",
							"out_mode": "out"
						}
					},
					"interactivity": {
						"events": {
							"onhover": {
								"enable": true,
								"mode": "bubble"
							},
							"onclick": {
								"enable": true,
								"mode": "repulse"
							}
						},
						"modes": {
							"bubble": {
								"distance": 250,
								"duration": 2,
								"size": 0,
								"opacity": 0
							},
							"repulse": {
								"distance": 400,
								"duration": 4
							}
						}
					}
				}} />
					
			</div>
		</div>
    )

    
}

export default Home


