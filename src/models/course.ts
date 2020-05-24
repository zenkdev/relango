import { defaultTo } from '../utils';

type DataSnapshot = any;

export type Course = {
  id: string;
  title: string;
  subTitle?: string;
};

export function createCourse(payload: DataSnapshot): Course {
  const { title, subTitle } = payload.val();
  return {
    id: defaultTo(payload.key, ''),
    title: defaultTo(title, ''),
    subTitle,
  };
}
