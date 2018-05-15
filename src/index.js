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
    autoPlay: true,
    currentSlide: '1',
    reviewsContent: [
      {
        review: '“Craze is one of the most complete app packages I have ever come across. I would highly reccomend it to anyone!”',
        author: 'Sarah Hunt'
      },
      {
        review: '"Best Tacos in town. Cant belive what an amazing taco deal this is!"',
        author: 'Taco Luvin dude'
      },
      {
        review: '"This app saved my life! I never thought an app could stop a rabid pack of cannibals! A++"',
        author: 'Indiana Johnson'
      },
      {
        review: '"Best Tacos in town. Cant belive what an amazing taco deal this is!"',
        author: 'Taco Luvin dude'
      }
    ]
  }

  slideChanger = (revId) => {
    this.setState(state => ({ currentSlide: revId }))
  }

  render() {
    return (
      <div className="App">
        <Intro />
        <Features /> 
        <About /> 
        {console.log(this.state.currentSlide)}
        <Reviews 
          current={this.state.currentSlide}
          revs={this.state.reviewsContent}
          onChangeSlide={this.slideChanger}/>
        <Plans /> 
        <SayHi /> 
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<CrazeApp />, document.getElementById('root'));