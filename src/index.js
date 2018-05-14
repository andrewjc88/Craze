import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Intro from './components/Intro';
import Features from './components/Features';
import About from './components/About';
import Reviews from './components/Reviews';
import Plans from './components/Plans';
import SayHi from './components/SayHi';
import Footer from './components/Footer';
import './index.css';

class CrazeApp extends Component {
  state = {
    currentSlide: {},
    reviewsContent: [
      {
        review: '“Craze is one of the most complete app packages I have ever come across. I would highly reccomend it to anyone!”',
        author: 'Sarah Hunt',
        active: true
      },
      {
        review: '"Best Tacos in town. Cant belive what an amazing taco deal this is!"',
        author: 'Taco Luvin dude',
        active: false
      },
      {
        review: '"This app saved my life! I never thought an app could stop a rabid pack of cannibals! A++"',
        author: 'Indiana Johnson',
        active: false
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Intro />
        <Features /> 
        <About /> 
        <Reviews 
          current={this.state.currentSlide}
          reviews={this.state.reviewsContent}/>
        <Plans /> 
        <SayHi /> 
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<CrazeApp />, document.getElementById('root'));

