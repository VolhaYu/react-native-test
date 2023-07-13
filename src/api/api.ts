export const baseUrl = 'https://64ae7276c85640541d4d163c.mockapi.io/orders';
export const criteriaUrl = 'https://64ae7276c85640541d4d163c.mockapi.io/criterias';

export interface Data {
  avatar: string;
  id: string;
  info: string;
  order: string;
}
export interface Criteria {
  liked: [];
  noLiked: [];
}

export const getData = () => {

};

export const createGrade = async ( body: {}) => {
  const response = await fetch(`${baseUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const car: Data = await response.json();
  return car;
};
