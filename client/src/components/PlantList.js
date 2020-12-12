import React, { Component } from "react";
import PlantFilter from './PlantFilter'
import axios from "axios";

export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array
  constructor(){
     super();
     this.state = { plants : [] }
  }

  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants
  componentDidMount(){
     axios.get('http://localhost:3333/plants')
      .then( (res) => {
         console.log("RESULT IS",res.data)
         this.setState( { plants : [...res.data.plantsData]})
         console.log("STATE IS ", this.state.plants)
      })
      .catch( (err) => {console.log(err)});
  }

   // FILTER PLANT  
   filterPlant = (filterText) => {
      this.setState({
      plants : this.state.plants.filter( (item) => { return item.name === filterText })
      });
   }

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    return (
      <>
      <PlantFilter filterPlant={this.filterPlant} setPlantState={this.setState} plantState={this.state} />
      <main className="plant-list">
        {this.state?.plants?.map((plant) => (
          <div className="plant-card"key={plant.id}>
            <img className="plant-image" src={plant.img} alt={plant.name} />
            <div className={ this.props.darkMode ? "dark-mode plant-details" : "plant-details"}>
              <h2 className={ this.props.darkMode ? "dark-mode plant-name" : "plant-name"}>{plant.name}</h2>
              <p className="plant-scientific-name">{plant.scientificName}</p>
              <p>{plant.description}</p>
              <div className="plant-bottom-row">
                <p>${plant.price}</p>
                <p>☀️ {plant.light}</p>
                <p>💦 {plant.watering}x/month</p>
              </div>
              <button
                className="plant-button"
                onClick={() => this.props.addToCart(plant)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </main>
      </>
    );
  }
}
