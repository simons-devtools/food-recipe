import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Food from './Components/Food/Food';
import { Container } from 'react-bootstrap';

function App() {
  // For the handle click
  const [search, setSearch] = useState('');
  const handleChange = event => {
    // console.log(event.target.value);
    setSearch(event.target.value);
  }

  // For the search vale
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(api)
      .then(res => res.json())
      .then(data => setMeals(data.meals))
  }, [search])
  // console.log(meals.length);

  return (
    // Note: This file usaged the bootstrap styles
    <div className="App">
      <div className="header-container">
        <div className="container-fluid search">
          <h2 className="text-center">Search here for your favorite food bundle</h2>
          <input onChange={handleChange} className="form-control bg-transparent" type="text" placeholder="Search foods"/>
        </div>
        <div className="text-center mb-5">
          <h3>Your search keyword: {search}</h3>
          <h4>Search result: {meals?.length || 0}</h4>
        </div>
      </div>

      <Container className="food-container">
        {
          meals?.map(meal => <Food foods={meal} key={meal.idMeal} />)
        }
      </Container>
    </div>
  );
}

export default App;
