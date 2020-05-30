import { defaultTo } from '../utils';

type DataSnapshot = any;

export type Lesson = {
  id: string;
  name: string;
  subject?: string;
  description?: string;
};

export function createLesson(payload: DataSnapshot): Lesson {
  const { name, subject, description } = payload.val();
  return {
    id: defaultTo(payload.key, ''),
    name: defaultTo(name, ''),
    subject,
    description,
  };
}
