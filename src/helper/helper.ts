import _ from 'lodash';

export const addCollections = (name: string, oldCollection: any) => {
  const id = (Math.random() + 1).toString(36).substring(7);
  const newCollection = { id, name, movies: [] };
  const newCollections = _.uniqBy([...oldCollection, newCollection], 'name');
  return newCollections;
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
