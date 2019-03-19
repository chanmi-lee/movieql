export const people = [
  {
    id: "0",
    name: "Kate",
    age: 28,
    gender: "female"
  },
  {
    id: "1",
    name: "Nicole",
    age: 26,
    gender: "female"
  },
  {
    id: "2",
    name: "Nick",
    age: 32,
    gender: "male"
  },
  {
    id: "3",
    name: "John",
    age: 43,
    gender: "male"
  },
  {
    id: "4",
    name: "Su",
    age: 21,
    gender: "female"
  },
  {
    id: "5",
    name: "Sam",
    age: 24,
    gender: "male"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
}


let movies = [
  {
    id: 0,
    name: "Star Wars - The new one",
    score: 7
  },
  {
    id: 1,
    name: "Avengers - The new one",
    score: 6
  },
  {
    id: 2,
    name: "The Godfather I",
    score: 3
  },
  {
    id: 3,
    name: "Logan",
    score: 6
  },
  {
    id: 4,
    name: "Captain Marvel",
    score: 8
  },
  {
    id: 5,
    name: "Sam",
    score: 7
  }
];

export const getMovies = () => movies;

export const getByMovieId = id => {
  const filteredMovies = movies.filter(movie => movie.id === id);
  return filteredMovies[0];
}

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
}

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
}
