import { defaultTo } from '../utils';
import { Module } from './Module';

type DataSnapshot = any;

export type Course = {
  id: string;
  title: string;
  subTitle?: string;
  image?: string;
  modules: Record<string, Module>;
};

export function createCourse(payload: DataSnapshot): Course {
  const { title, subTitle, image } = payload.val();
  return {
    id: defaultTo(payload.key, ''),
    title: defaultTo(title, ''),
    subTitle,
    image,
    modules: {},
  };
}
