import { defaultTo } from '../utils';
import { Test } from './Test';

type DataSnapshot = any;

export type Module = {
  id: string;
  name: string;
  subject?: string;
  description?: string;
  content?: string;
  modalContent?: string;
  tests?: Test[];
};

export function createModule(payload: DataSnapshot): Module {
  const { name, subject, description, content, modalContent, tests } = payload.val();
  return {
    id: defaultTo(payload.key, ''),
    name: defaultTo(name, ''),
    subject,
    description,
    content,
    modalContent,
    tests,
  };
}
