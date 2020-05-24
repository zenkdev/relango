import { defaultTo } from '../utils';

type DataSnapshot = any;

export type Course = {
  id: string;
  name: string;
};

export function createCourse(payload: DataSnapshot): Course {
  const { name } = payload.val();
  return {
    id: defaultTo(payload.key, ''),
    name: defaultTo(name, ''),
  };
}
