import React from "react";
import BookCard from "./components/BookCard";

function App() {
  return (
    <div className="app">
      <h1>My profile cards</h1>
      <div className="card-container">
        <BookCard 
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0WdZdi0T7Hn_y_k65LTX-HKK-CuhFi-TttA&s"
          name="Atomic Habits"
          avtor="James Clear"
          zhyl="2018"
        />
        <BookCard 
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3vKFM4rzCu15XXKoRkySwtrAph3IwqFxqaA&s"
          name="The Psychology of Money"
          avtor="Morgan Housel"
          zhyl="2020"
        />
        <BookCard 
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwPUhMpKO8NfMw6f7innC8NqGEeojOR9sNUg&s"
          name="Deep Work"
          avtor="Cal Newport"
          zhyl="2016"
        />
      </div>
    </div>
  );
}

export default App;

