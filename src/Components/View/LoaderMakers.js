// LoadingComponent Creater classes for input table (much neater here displaying)
// if loader's prop must be an int then you need to parse it or it will be consider a string ("100" + "100" + "100100" wereas 100+100 = 200)
import React from 'react';
import Spin from '../Loaders/Spin';
import Dots from '../Loaders/Dots';
import Bars from '../Loaders/Bars';
import Pulse from '../Loaders/Pulse';
import Squares from '../Loaders/Squares';
import SpinDots from '../Loaders/SpinDots';
import Cylon from '../Loaders/Cylon';
import HyperTriangle from '../Loaders/HyperTriangle';
import TrippyClock from '../Loaders/TrippyClock';
import Gradient from '../Loaders/Gradient';
import Splash from '../Loaders/Splash';

class SpinnerMaker {
  static title = 'Spinner'
  static titles = ['size', 'borderSize', 'primaryColor', 'secondaryColor', 'thirdColor', 'fourthColor', 'delay']
  static defaults = [100, 3, 'rgba(0, 0, 0, 0.1)', 'red', 'rgba(0, 0, 0, 0.1)', 'red', 1000]
  static make(props = this.defaults){
    return (<Spin
      key={Math.random()}
      size={props[0]}
      borderSize={props[1]}
      primaryColor={props[2]}
      secondaryColor={props[3]}
      thirdColor={props[4]}
      fourthColor={props[5]}
      delay={props[6]}/>)
  }
}

class DotMaker {
  static title = 'Dots';
  static titles = ['size', 'numDots', 'color', 'delay', 'dotDelay']
  static defaults = [25, 10, 'rgb(130, 200, 253)', 1000, 100]
  static make(props=this.defaults){
    return(
      <Dots
        key={Math.random()}
        size={props[0]}
        numDots={props[1]}
        color={props[2]}
        delay={props[3]}
        dotDelay={parseInt(props[4],10)}/>
    )
  }
}

class BarsMaker {
  static title = 'Bars';
  static titles = ['width', 'maxHeight', 'minHeight', 'numBars', 'color', 'delay', 'barDelay']
  static defaults = [7, 70, 1, 31, 'rgb(134, 255, 253)',1000, 150]
  static make(props=this.defaults){
    return(
      <Bars
        key={Math.random()}
        width={props[0]}
        maxHeight={props[1]}
        minHeight={props[2]}
        numBars={props[3]}
        color={props[4]}
        delay={props[5]}
        barDelay={parseInt(props[6],10)}/>
    )
  }
}


class PulseMaker {
  static title = 'Pulse';
  static titles = ['maxSize', 'minSize', 'borderSize', 'color', 'delay']
  static defaults = [100, 10, 1, 'rgb(0, 200, 255)',1000]
  static make(props=this.defaults){
    return(
      <Pulse
        key={Math.random()}
        maxSize={props[0]}
        minSize={props[1]}
        borderSize={props[2]}
        color={props[3]}
        delay={props[4]}/>
    )
  }
}

class SquaresMaker {
  static title = 'Squares';
  static titles = ['size', 'numSquares', 'delay', 'squareDelay', 'color', 'alternate']
  static defaults = [100, 4, 2000, 70, 'rgb(103, 77, 255)', true]
  static make(props=this.defaults){
    return(
      <Squares
        key={Math.random()}
        size={props[0]}
        numSquares={props[1]}
        delay={props[2]}
        squareDelay={parseInt(props[3],10)}
        color={props[4]}
        alternate={props[5]}/>
    )
  }
}

class SpinDotsMaker {
  static title = 'SpinDots';
  static titles = ['size', 'circleSize', 'delay', 'color']
  static defaults = [100, 10, 1500, 'rgb(13, 77, 55)']
  static make(props=this.defaults){
    return(
      <SpinDots
        key={Math.random()}
        size={props[0]}
        circleSize={props[1]}
        delay={props[2]}
        color={props[3]}/>
    )
  }
}

class CylonMaker {
  static title = 'Cylon';
  static titles = ['maxWidth', 'minWidth', 'height', 'numRect', 'color', 'opacityChange', 'delay', 'rectDelay']
  static defaults = [200, 30, 20, 5, 'rgb(255,70,55)', .2, 750, 65]
  static make(props=this.defaults){
    return(
      <Cylon
        key={Math.random()}
        maxWidth={parseInt(props[0],10)}
        minWidth={parseInt(props[1],10)}
        height={props[2]}
        numRect={props[3]}
        color={props[4]}
        opacityChange={props[5]}
        delay={props[6]}
        rectDelay={parseInt(props[7],10)}/>
    )
  }
}

class HyperTriangleMaker {
  static title = 'HyperTriangle';
  static titles = ['maxSize', 'borderSize', 'numTrian', 'sizeDif']
  static defaults = [150, 3, 5, 30]
  static make(props=this.defaults){
    return(
      <HyperTriangle
        key={Math.random()}
        maxSize={parseInt(props[0],10)}
        borderSize={props[1]}
        numTrian={props[2]}
        sizeDiff={parseInt(props[3],10)}/>
    )
  }
}

class TrippyClockMaker {
  static title = 'TrippyClock';
  static titles = ['width', 'height', 'color', 'numHands', 'delay', 'handDelay', 'opacChange', 'alternate'];
  static defaults = [10, 90, 'rgb(50, 150, 255)', 10, 2000, 60, .1, true];
  static make(props=this.defaults){
    return(
      <TrippyClock
        key={Math.random()}
        width={props[0]}
        height={props[1]}
        color={props[2]}
        numHands={props[3]}
        delay={props[4]}
        handDelay={parseInt(props[5],10)}
        opacChange={parseFloat(props[6])}
        alternate={props[7]}/>
    )
  }
}

class GradientMaker {
  static title = 'Gradient';
  static titles = ['width', 'height', 'colors', 'delay', 'isCircle', 'rotate'];
  static defaults = ['100px', '95px', 'rgba(195, 95, 95, 0.5), rgba(55, 255, 255, 0.14), rgba(195, 95, 95, 0.5)', 1500, true, true];
  static make(props=this.defaults){
    return(
      <Gradient
        key={Math.random()}
        width={props[0]}
        height={props[1]}
        colors={props[2]}
        delay={props[3]}
        circle={props[4]}
        rotate={props[5]}
        />
    )
  }
}

class SplashMaker {
  static title = 'Splash';
  static titles = ['maxSize', 'numSplash', 'color', 'delay', 'splashDelay', 'isCircle', 'alternate', 'rotate'];
  static defaults = ['200px', '5', 'rgb(34, 155, 253)', '4000', '200', true, false, false];
  static make(props=this.defaults){
    return(
      <Splash
        key={Math.random()}
        maxSize={props[0]}
        numSplash={props[1]}
        color={props[2]}
        delay={parseInt(props[3],10)}
        splashDelay={parseInt(props[4],10)}
        isCircle={props[5]}
        alternate={props[6]}
        rotate={props[7]}
        />
    )
  }
}

export const Makers = [SpinnerMaker, DotMaker, BarsMaker, PulseMaker, SquaresMaker, SpinDotsMaker, CylonMaker, HyperTriangleMaker, TrippyClockMaker, GradientMaker, SplashMaker]
