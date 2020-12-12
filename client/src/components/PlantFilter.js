import React, {useState} from "react";
import styled from 'styled-components';
import axios from 'axios'

const PlantFilter = (props) => {

  const [filterText, setFilterText] = useState("")

  const changeHandler = (e) => {
   setFilterText( e.target.value )
  };


  const submitHandler = e => {
   e.preventDefault();
   props.filterPlant(filterText)
   //reset clear form
   setFilterText("")
  };


  // RESET STATE TO ORIGINAL
  const resetPlants = () => {
     console.log("PROPS IN PLANTFILTER:",props.plantState.plants)
   axios.get('http://localhost:3333/plants')
      .then( (res) => {
            props.setPlantState( /* why does props.plantState.plants work in console.log but not in setter */)
      })
      .catch( (err) => {console.log(err)});
  }
     
    return (
      <SearchForm onSubmit={submitHandler}>
        <input
          type="text"
          name="filterText"
          onChange={changeHandler} // setState
          value={filterText} //controlled input - view State
        />
        <button type="submit" >Search</button>
        <a href="#" onClick={resetPlants} >Reset</a>
      </SearchForm>
    );
}

export default PlantFilter;

const SearchForm = styled.form`
   display: flex;
   align-items: center;
   justify-content: center;

   input{
      margin: 10px 3px 0 0;
   }
   button{
      margin: 10px 5px 0;
   }
`;