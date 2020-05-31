import { defaultTo } from '../utils';

type DataSnapshot = any;

export type Lesson = {
  id: string;
  name: string;
  subject?: string;
  description?: string;
  content?: string;
};

export function createLesson(payload: DataSnapshot): Lesson {
  const { name, subject, description, content } = payload.val();
  return {
    id: defaultTo(payload.key, ''),
    name: defaultTo(name, ''),
    subject,
    description,
    content,
  };
}
