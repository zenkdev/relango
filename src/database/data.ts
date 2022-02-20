/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import m0100 from './m0100';
import m0101 from './m0101';
import m0102 from './m0102';

export const courseData = [
  {
    key: '00',
    val: () => ({
      title: 'test course',
    }),
  },
  {
    key: '01',
    val: () => ({
      title: 'Macmillan Exam Skills For Russia: Grammar and Vocabulary',
      subTitle: 'Pre-intermediate to intermediate',
    }),
  },
];

export const moduleData = [
  m0100,
  m0101,
  m0102,
  {
    key: '0101r',
    courseId: '01',
    val: () => ({
      name: 'Review 1',
      subject: 'Units 1 and 2',
    }),
  },
  {
    key: '0103',
    courseId: '01',
    val: () => ({
      name: 'Unit 3',
      subject: 'Grammar',
      description: `Past time: past simple, past continuous, past perfect simple, past perfect continuous, would, used to / be/get used to`,
    }),
  },
  {
    key: '0104',
    courseId: '01',
    val: () => ({
      name: 'Unit 4',
      subject: 'Vocabulary',
      description: `Hobbies, sport and games`,
    }),
  },
  {
    key: '0105',
    courseId: '01',
    val: () => ({
      name: 'Unit 5',
      subject: 'Grammar',
      description: `Future time / present tenses in time clauses / prepositions of time and place`,
    }),
  },
  {
    key: '0106',
    courseId: '01',
    val: () => ({
      name: 'Unit 6',
      subject: 'Vocabulary',
      description: `Science and technology`,
    }),
  },
  {
    key: '0107',
    courseId: '01',
    val: () => ({
      name: 'Unit 7',
      subject: 'Grammar',
      description: `Articles / countable and uncountable nouns / quantifiers`,
    }),
  },
  {
    key: '0108',
    courseId: '01',
    val: () => ({
      name: 'Unit 8',
      subject: 'Vocabulary',
      description: `The media`,
    }),
  },
  {
    key: '0109',
    courseId: '01',
    val: () => ({
      name: 'Unit 9',
      subject: 'Grammar',
      description: `Conditionals: zero, first, second, third, mixed, inverted / unless, in case, as/so long as, provided (that)`,
    }),
  },
  {
    key: '0110',
    courseId: '01',
    val: () => ({
      name: 'Unit 10',
      subject: 'Vocabulary',
      description: `People and society`,
    }),
  },
  {
    key: '0111',
    courseId: '01',
    val: () => ({
      name: 'Unit 11',
      subject: 'Grammar',
      description: `Comparatives and superlatives / so, such, enough, too`,
    }),
  },
  {
    key: '0112',
    courseId: '01',
    val: () => ({
      name: 'Unit 12',
      subject: 'Vocabulary',
      description: `The law and crime`,
    }),
  },
  {
    key: '0113',
    courseId: '01',
    val: () => ({
      name: 'Unit 13',
      subject: 'Grammar',
      description: `Modals: ability, permission, advice, criticism, obligation and necessity, degrees of certainty`,
    }),
  },
  {
    key: '0114',
    courseId: '01',
    val: () => ({
      name: 'Unit 14',
      subject: 'Vocabulary',
      description: `Health and fitness`,
    }),
  },
  {
    key: '0115',
    courseId: '01',
    val: () => ({
      name: 'Progress Test 1',
      description: `Units 1-14`,
    }),
  },
  {
    key: '0116',
    courseId: '01',
    val: () => ({
      name: 'Unit 15',
      subject: 'Grammar',
      description: `The passive / the causative / direct and indirect objects`,
    }),
  },
  {
    key: '0117',
    courseId: '01',
    val: () => ({
      name: 'Unit 16',
      subject: 'Vocabulary',
      description: `Food and drink`,
    }),
  },
  {
    key: '0118',
    courseId: '01',
    val: () => ({
      name: 'Unit 17',
      subject: 'Grammar',
      description: `-ing form or infinitive / prefer, would rather, had better / infinitives of purpose`,
    }),
  },
  {
    key: '0119',
    courseId: '01',
    val: () => ({
      name: 'Unit 18',
      subject: 'Vocabulary',
      description: `Education and learning`,
    }),
  },
  {
    key: '0120',
    courseId: '01',
    val: () => ({
      name: 'Unit 19',
      subject: 'Vocabulary',
      description: `Questions / question tags / indirect questions`,
    }),
  },
  {
    key: '0121',
    courseId: '01',
    val: () => ({
      name: 'Unit 20',
      subject: 'Vocabulary',
      description: `Weather and the environment`,
    }),
  },
  {
    key: '0122',
    courseId: '01',
    val: () => ({
      name: 'Unit 21',
      subject: 'Grammar',
      description: `Reported speech / reported questions / reporting verbs`,
    }),
  },
  {
    key: '0123',
    courseId: '01',
    val: () => ({
      name: 'Unit 22',
      subject: 'Vocabulary',
      description: `Money and shopping`,
    }),
  },
  {
    key: '0124',
    courseId: '01',
    val: () => ({
      name: 'Unit 23',
      subject: 'Grammar',
      description: `Relative clauses / participles`,
    }),
  },
  {
    key: '0125',
    courseId: '01',
    val: () => ({
      name: 'Unit 24',
      subject: 'Vocabulary',
      description: `Entertainment`,
    }),
  },
  {
    key: '0126',
    courseId: '01',
    val: () => ({
      name: 'Unit 25',
      subject: 'Grammar',
      description: `Unreal past, wishes / contrast`,
    }),
  },
  {
    key: '0127',
    courseId: '01',
    val: () => ({
      name: 'Unit 26',
      subject: 'Vocabulary',
      description: `Fashion and design`,
    }),
  },
  {
    key: '0128',
    courseId: '01',
    val: () => ({
      name: 'Unit 27',
      subject: 'Grammar',
      description: `Inversions / possessives`,
    }),
  },
  {
    key: '0129',
    courseId: '01',
    val: () => ({
      name: 'Unit 28',
      subject: 'Vocabulary',
      description: `Work and business`,
    }),
  },
  {
    key: '0130',
    courseId: '01',
    val: () => ({
      name: 'Progress Test 2',
      description: `Units 15-28`,
    }),
  },
  {
    key: '0131',
    courseId: '01',
    val: () => ({
      name: 'Exam Practice 1',
      subject: 'FCE Use of English',
    }),
  },
  {
    key: '0132',
    courseId: '01',
    val: () => ({
      name: 'Exam Practice 2',
      subject: 'Exam practice material',
    }),
  },
  {
    key: '0133',
    courseId: '01',
    val: () => ({
      name: 'Reference Section 1',
      subject: 'Irregular verbs',
    }),
  },
  {
    key: '0134',
    courseId: '01',
    val: () => ({
      name: 'Reference Section 2',
      subject: 'Verbs + full infinitive or -ing form with a change in meaning',
    }),
  },
  {
    key: '0135',
    courseId: '01',
    val: () => ({
      name: 'Reference Section 3',
      subject: 'Reporting verb patterns',
    }),
  },
  {
    key: '0136',
    courseId: '01',
    val: () => ({
      name: 'Reference Section 4',
      subject: 'Glossary',
    }),
  },
  {
    key: '0137',
    courseId: '01',
    val: () => ({
      name: 'Reference Section 5',
      subject: 'Phrasal verbs database',
    }),
  },
  {
    key: '0138',
    courseId: '01',
    val: () => ({
      name: 'Reference Section 6',
      subject: 'Phrases and collocations database',
    }),
  },
  {
    key: '0139',
    courseId: '01',
    val: () => ({
      name: 'Reference Section 7',
      subject: 'Word patterns database',
    }),
  },
  {
    key: '0140',
    courseId: '01',
    val: () => ({
      name: 'Reference Section 8',
      subject: 'Word formation database',
      description: `US English vs UK English: vocabulary and spelling`,
    }),
  },
  {
    key: '0141',
    courseId: '01',
    val: () => ({
      name: 'Reference Section 9',
      subject: 'US English vs UK English: vocabulary and spelling',
    }),
  },
];
