import React, { Component } from 'react';
import './App.css';
import Home from './Home/Home'



class App extends Component {
  
  state = {
    movies: [
      {id:'0', Title: 'Maleficent: Mistress Of Evil + Digital Bonus', landscapeImage:'https://cdn-vu-cc-image-api-s001.sf.vubiquity.com/Image?i=https://vucscdnprodne.azureedge.net/images/vmest_prod/1/furniture/VX-101090677_1000x1400.PNG', Image: 'https://cdn-vu-cc-image-api-s001.sf.vubiquity.com/Image?i=https://vucscdnprodne.azureedge.net/images/vmest_prod/1/furniture/VX-101090678_1920x1080.PNG'},
      {id:'1', Title: 'Terminator: Dark Fate',landscapeImage:'https://cdn-vu-cc-image-api-s001.sf.vubiquity.com/Image?i=https://vucscdnprodne.azureedge.net/images/vmest_prod/1/furniture/VX-101078727_1000x1400.PNG', Image: 'https://cdn-vu-cc-image-api-s001.sf.vubiquity.com/Image?i=https://vucscdnprodne.azureedge.net/images/vmest_prod/1/furniture/VX-101078728_1920x1080.PNG'},
      {id:'2', Title: 'Zombieland: Double Tap',landscapeImage:'https://cdn-vu-cc-image-api-s001.sf.vubiquity.com/Image?i=https://vucscdnprodne.azureedge.net/images/vmest_prod/1/furniture/VX-101033018_1000x1400.PNG', Image: 'https://cdn-vu-cc-image-api-s001.sf.vubiquity.com/Image?i=https://vucscdnprodne.azureedge.net/images/vmest_prod/1/furniture/VX-101033016_1920x1080.PNG'},
      {id:'3', Title: 'Gemini Man',landscapeImage:'https://cdn-vu-cc-image-api-s001.sf.vubiquity.com/Image?i=https://vucscdnprodne.azureedge.net/images/vmest_prod/1/furniture/VX-100950936_1000x1400.PNG', Image: 'https://cdn-vu-cc-image-api-s001.sf.vubiquity.com/Image?i=https://vucscdnprodne.azureedge.net/images/vmest_prod/1/furniture/VX-100950940_1920x1080.PNG'},
      {id:'4', Title: 'Joker',landscapeImage:'https://cdn-vu-cc-image-api-s001.sf.vubiquity.com/Image?i=https://vucscdnprodne.azureedge.net/images/vmest_prod/1/furniture/VX-100980897_215x300.PNG', Image: 'https://cdn-vu-cc-image-api-s001.sf.vubiquity.com/Image?i=https://vucscdnprodne.azureedge.net/images/vmest_prod/1/furniture/VX-100980889_1920x1080.PNG'},
    ],
    backgroundImage: `url()`,
    selectedItem: false,
  }

  componentDidMount = () => {
    this.setState({backgroundImage: this.state.movies[0].Image});
    this.setState.backgroundImage = this.state.movies[0].Image;
    this.setState({selectedItem: this.state.movies[0]}); 
    this.setState.selectedItem = this.state.movies[0];
    document.addEventListener('keydown', this.handleKeyPress);

  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  

  clickOnImage = (e,index) => {
    // console.log(id)
    // console.log(e);
    // console.log(e.target);
    this.setState({backgroundImage: e.target.alt});
    this.setState.backgroundImage = e.target.alt;
    this.setState({selectedItem: index});   
}
handleKeyPress = (event,index) => {
  console.log(event);
  if (event.key == 'Enter' || event.key == 13 ) {
    // this.togglePersonsHandler();
    console.log("enter is pressed");
  }if(event.key === 'ArrowRight' &&  'selectedItem' === true){
    this.clickOnImage();
    this.setState({backgroundImage: event.target.alt});
    this.setState.backgroundImage = event.target.alt;
    this.setState({selectedItem: index});   
  }
}


  
  render () {
    const movie = {
      backgroundImage: `url(${this.setState.backgroundImage})`,
      backgroundSize: '100% 100%'
    }
        
    return (
           <div className="movie-row" style = {movie}>
              <div className="movie-child">
               <div className="movie-child-inner-wrap">
                  {/* { this.state.movies.map((el,index) => {
                    return <div className="movie-view" key= {el.id} onKeyPress={this.handleKeyPress}> 
                            <img style = {moviesRow} className={ index === this.state.selectedItem ? "selected": "none"}  onClick = {(event) => this.clickOnImage(event,index)}  src={el.landscapeImage} alt={el.Image} key={el.index} />
                          </div>
                     }
                  )} */}
                  <Home movies={this.state.movies} selectedItem={this.state.selectedItem} clickedImage={this.clickOnImage} keypressed={this.handleKeyPress}/>
                </div>
               </div>
             </div>      
    );
    }
}

export default App;

