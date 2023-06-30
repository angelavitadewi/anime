import _ from 'lodash';

export const addCollections = (name: string, oldCollection: any) => {
  const id = (Math.random() + 1).toString(36).substring(7);
  const newCollection = { id, name, movies: [] };
  const newCollections = _.uniqBy([...oldCollection, newCollection], 'name');
  return newCollections;
};

export const addMovieToCollection = (movieDetail: any, item: any) => {
  item.movies = _.uniqBy([...item.movies, movieDetail], 'id');
  return item;
};

export const removeMovieToCollection = (movieDetail: any, item: any) => {
  _.remove(item.movies, (movie: any) => movie.id === movieDetail.id);
  return item;
};

export const checkIfDuplicated = (name: string, oldCollection: any) => {
  let isDuplicated = false;
  oldCollection.forEach((element: any) => {
    if (element.name === name) {
      isDuplicated = true;
      return isDuplicated;
    }
  });
  return isDuplicated;
};

export const removeCollectionById = (id: string, oldCollection: any) => {
  return oldCollection.filter((item: any) => item.id !== id);
};

export const removeMovieFromCollectionById = (movieId: number, selectedCollection: any, fullCollection: any) => {
  selectedCollection.movies = selectedCollection.movies.filter((item: any) => item.id !== movieId);
  return _.uniqBy([...fullCollection, selectedCollection], 'id');
};

export const checkIfCollected = (id: any, item: any): boolean => {
  let isCollected = false;
  const arrayOfMovieId = _.get(item, 'movies', []).map((movie: any) => movie.id);
  if (arrayOfMovieId.includes(id)) {
    isCollected = true;
  }
  return isCollected;
};
