export const baseUrl = 'https://64ae7276c85640541d4d163c.mockapi.io/orders';
export const criteriaUrl = 'https://64ae7276c85640541d4d163c.mockapi.io/criteria';

export interface Data {
  avatar: string;
  id: string;
  info: string;
  order: string;
  grade?: number;
  feedback?: {
    grade: number;
  };
}
export interface Criteria {
  liked: {
    text: string;
    id?: string;
  };
  noLiked: {
    text: string;
    id?: string;
  };
  id: string;
}
