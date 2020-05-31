import { defaultTo } from '../utils';
import { Lesson } from './Lesson';

type DataSnapshot = any;

export type Course = {
  id: string;
  title: string;
  subTitle?: string;
  lessons: Record<string, Lesson>;
};

export function createCourse(payload: DataSnapshot): Course {
  const { title, subTitle } = payload.val();
  return {
    id: defaultTo(payload.key, ''),
    title: defaultTo(title, ''),
    subTitle,
    lessons: {},
  };
}
