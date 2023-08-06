export const getMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  )
  .then((res) => {
    if (!res.ok) {
      throw new Error (res.json().message);
    } return console.log(res) || res.json();
  })
  .catch((error) => {
    throw error
  }); 
};
// start --alternative getMovies
//  export const getMovies = () => {
//   return fetch(
//     `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&page=1`
//   )
//     .then(res => res.json())
//     .then(json => json.results);
// };
// end --alternative getMovies

//  -- start old getMovie pre-caching
// export const getMovie = id => {
//  return fetch(
//     `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
//   ).then(res => console.log(res) || res.json());

// };
//  -- end old getMovie pre-caching

export const getMovie = (args) => {
   console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

// -- start Get Actors of the movies

export const getMovieCast = (args) => {
  console.log(args)
  const [, idPart] = args.queryKey;
  const {movie_id} = idPart
  return fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
  ).then((response) => {
    console.log(response)
    if (!response.ok){
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
  });
};



export const getGenres = async () => {
  return fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
      import.meta.env.VITE_TMDB_KEY +
      "&language=en-US"
  ).then( (response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

//  -- start old getGenres pre-caching 
// export const getGenres = () => {
//   return fetch(
//     "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
//       import.meta.env.VITE_TMDB_KEY +
//       "&language=en-US"
//   )
//     .then(res => res.json())
//     .then(json => json.genres);
//};
//  -- end old getGenres pre-caching

export const getMovieImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then( (response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
  .catch((error) => {
    throw error
 });
};

// -- start of old getMovieImages
// export const getMovieImages = (id) => {
//   return fetch(
//     `https://api.themoviedb.org/3/movie/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
//   )
//     .then((res) => res.json())
//     .then((json) => json.posters);
// };
//  -- end of old getMovieImages pre-caching

export const getMovieReviews = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_KEY}`
  )
    .then((res) => res.json())
    .then((json) => {
    console.log(json.results);
      return json.results;
    });
};

// start -- old getUpcomingMovies
// export const getUpcomingMovies = () => {
//   return fetch(
//     `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&page=1`
//   )
//   .then((res) =>  console.log(res) || res.json())
//   .then(json =>{  
//     console.log(json)
//     console.log(json.results)
//     return  json.results});  
//   };
// end --old getUpcomingMovies

export const getUpcomingMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  )
  .then((res) => {
    if (!res.ok) {
      throw new Error (res.json().message);
    } return console.log(res) || res.json();
  })
  .catch((error) => {
    throw error
  }); 
};

export const getCastImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { person_id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/person/${person_id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then( (response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
  .catch((error) => {
    throw error
 });
};

export const getPersonDetails = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { person_id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/person/${person_id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then( (response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
  .catch((error) => {
    throw error
 });
};
// Async example
// export const getMovies = async () => {
//   const res = await fetch(
//     `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&page=1`
//   );
//   const json = await res.json();
//   return json.results;
// };