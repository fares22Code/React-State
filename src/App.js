import { Component } from 'react';
import personalImg  from './personalImg.jpg';


class App extends Component{
  constructor(){
    super();
    this.state = {
      //number:1,
      show : true,
      Person : { 
                fullName : "Fares TROJET",
                bio : "About Me: The world of computers is growing at an un-recordable rate everyday, computers are the most influential tools in our lives, they are our present and future. In my opinion nothing on the planet can measure the exponential growth and excitement in the computing industry, and industry which I want to be a part of, particularly Systems and Networks Engineering.", 
                imgSrc: personalImg, 
                profession:"- IT Technical Support - "
              },
              fixTime: new Date(),
    mountTime: new Date(),
    intervalId: null,
    }
    this.clickHandler = this.clickHandler.bind(this);
    
  }
  
  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState({ mountTime: new Date() });
    }, 1000);
    this.setState({ intervalId, mountTime: new Date() });
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
  clickHandler(){
    this.setState(function (prevState){
      return{
        show : !prevState.show ,
      }
    });
  }

  render(){
    const timeSinceMount = Math.floor(
      ( this.state.mountTime - this.state.fixTime) / 1000);
    if(this.state.show)
    return (
      
      <div className="container">
        <button className="btn btn-primary" onClick={this.clickHandler}>Hide</button>
        <br/>
        <img src={personalImg} alt="image peronel" width="400" height="430" />
        <h1>{this.state.Person.fullName}</h1>
        <h5>{this.state.Person.bio}</h5>
        <h2>{this.state.Person.profession}</h2>
        <p>Mounted {timeSinceMount} seconds ago</p>
    
      </div>
      );
      else return (
        <div className="container">
          
      <button className="btn btn-primary" onClick={this.clickHandler}>Show</button>
      
      </div>
      );
  }

}

export default App;
