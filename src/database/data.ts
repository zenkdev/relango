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
  {
    key: '0100',
    courseId: '01',
    val: () => ({
      name: 'Introduction',
      content: `# Введение

## Основная задача пособия

**«Macmillan Exam Skills For Russia: Grammar and Vocabulary»** состоит в том, чтобы помочь
учащимся подготовиться к сдаче экзаменов по английскому языку в формате ЕГЗ и на уровень В2
(Уаптаде) общеевропейской системы оценки владения иностранным языком (Соттоп Еигореап
РгаглемогКк 5са!е). Пособие включает теоретический материал и практические упражнения по тем
разделам лексики и грамматики, которые входят во все основные части экзамена на уровень В2
общеевропейской системы оценки и в единый государственный экзамен по английскому языку.
Пособие состоит из 28 уроков, каждый из которых включает в себя задания на развитие
лексических и грамматических навыков.

## Грамматические разделы

Грамматический раздел начинается ‹ теоретической части (две первых страницы каждого раздела),
в которой в простой и доступной форме объясняются грамматические явления. Наиболее сложные
грамматические явления выделены в рубрике **«Watch Out»**

Вторая часть грамматического раздела включает в себя разнообразные по форме и сложности
задания в формате ЕГЭ, направленные на повторение и закрепление пройденного материала.

## Лексические разделы

Тематически организованные лексические разделы пособия включают в себя все типы заданий.
соответствующие требованиям ЕГЭ и экзамена на уровень В2. Каждый раздел начинается с
введения лексического материала, организованного в форме таблицы, которая состоит из пяти
частей: лексические единицы по изучаемой тематике с объяснением значения слова и особенностей
его употребления в речи: фразовые глаголы; устойчивые словосочетания: речевые образцы и
словообразование.

Лексические упражнения различной сложности в формате ЕГЭ и экзамена на уровень В2
обеспечивают тщательную отработку и закрепление материала раздела.

Каждый лексический раздел построен на грамматическом материале предыдущего раздела, что
способствует повторению и автоматизации навыков употребления ранее пройденных
грамматических структур.

## Повторение и закрепление пройденного материала

Особое внимание в пособии **«Macmillan Exam Skills For Russia: Grammar and Vocabulary»** уделяется повторению и закреплению пройденного материала. Пособие включает:

* 14 разделов на повторение пройденного материала
* 2 теста на проверку степени усвоения пройденного материала (после разделов 14 и 28)
* 7 тестов на повторение пройденного материала (после каждого четвертого раздела), представленных в книге для учителя
* задания в формате единого государственного экзамена

## Дополнительные материалы

Дополнительные справочные материалы, размещенные в конце пособия, включают

* список наиболее часто употребляемых неправильных глаголов
* список активной лексики по каждому разделу с объяснением значений слов и примерами их употребления, взятыми из **Macmillan Essential Dictionary**
* список фразовых глаголов с объяснениями значений и примерами их употреблений в речи
* список устойчивых словосочетаний
* справочные материалы по сочетаемости слов
* справочные материалы по словообразованию`,
    }),
  },
  {
    key: '0101',
    courseId: '01',
    val: () => ({
      name: 'Unit 1',
      subject: 'Grammar',
      description: `Present time: present simple, present continuous, present perfect simple, present perfect continuous, stative verbs`,
      modalContent: `![p0007](/assets/p0007.png)
![p0008](/assets/p0008.png)`,
      tests: [
        {
          id: 'A',
          title: 'Circle the correct word or phrase.',
          questions: [
            [
              {
                type: 'staticText',
                value: 'Elizabeth ',
              },
              {
                type: 'singleChoice',
                value: 'usually goes',
                options: ['usually goes', 'is usually going'],
              },
              {
                type: 'staticText',
                value: " to bed at around eleven o'clock.",
              },
            ],
            [
              {
                type: 'staticText',
                value: 'Dan ',
              },
              {
                type: 'singleChoice',
                value: 'is talking',
                options: ['talks', 'is talking'],
              },
              {
                type: 'staticText',
                value: ' on the other phone right now.',
              },
            ],
            [
              {
                type: 'staticText',
                value: 'We ',
              },
              {
                type: 'singleChoice',
                value: "don't eat",
                options: ["don't eat", "aren't eating"],
              },
              {
                type: 'staticText',
                value: " any meat at the moment as we're both on a diet.",
              },
            ],
            [
              {
                type: 'singleChoice',
                value: 'Does air travel get',
                options: ['Does air travel get', 'Is air travel getting'],
              },
              {
                type: 'staticText',
                value: ' increasingly safe?',
              },
            ],
            [
              {
                type: 'staticText',
                value: 'My mum ',
              },
              {
                type: 'singleChoice',
                value: 'calls',
                options: ['calls', 'is calling'],
              },
              {
                type: 'staticText',
                value: ' me every weekend without fail.',
              },
            ],
            [
              {
                type: 'staticText',
                value: 'How much ',
              },
              {
                type: 'singleChoice',
                value: 'do babysitters generally earn',
                options: ['do babysitters generally earn', 'are babysitters generally earning'],
              },
              {
                type: 'staticText',
                value: '?',
              },
            ],
            [
              {
                type: 'singleChoice',
                value: 'You always come',
                options: ['You always come', "You're always coming"],
              },
              {
                type: 'staticText',
                value: " up with excuses for not having done your homework. It's so annoying!",
              },
            ],
            [
              {
                type: 'singleChoice',
                value: "I'm not going",
                options: ["I don't go", "I'm not going"],
              },
              {
                type: 'staticText',
                value: ' out much during the week, but ',
              },
              {
                type: 'singleChoice',
                value: "I'm always trying",
                options: ['I always try', "I'm always trying"],
              },
              {
                type: 'staticText',
                value: ' to go out somewhere on Saturday night.',
              },
            ],
            [
              {
                type: 'staticText',
                value: 'No, the train ',
              },
              {
                type: 'singleChoice',
                value: 'does stop',
                options: ['does stop', 'Is stopping'],
              },
              {
                type: 'staticText',
                value: ' at Cirencester on Saturdays.',
              },
            ],
            [
              {
                type: 'staticText',
                value: 'My mum ',
              },
              {
                type: 'singleChoice',
                value: 'takes',
                options: ['takes', 'is taking'],
              },
              {
                type: 'staticText',
                value: ' part in ice-skating competitions almost every weekend.',
              },
            ],
          ],
        },
        {
          id: 'B',
          title: 'Rewrite correctly. Change the words or phrases in bold.',
          questions: [
            [
              {
                type: 'staticText',
                value: 'My dad ',
              },
              {
                type: 'staticText',
                value: 'is often getting up',
                bold: true,
              },
              {
                type: 'staticText',
                value: ' late on Saturday mornings.',
              },
              {
                type: 'newLine',
              },
              {
                type: 'openText',
                value: 'My dad is often getting up late on Saturday mornings.',
              },
            ],
            [
              {
                type: 'staticText',
                value: 'Are you speaking',
                bold: true,
              },
              {
                type: 'staticText',
                value: ' any other languages apart from English?',
              },
              {
                type: 'newLine',
              },
              {
                type: 'openText',
                value: 'Are you speaking any other languages apart from English?',
              },
            ],
            [
              {
                type: 'staticText',
                value: 'I already buy',
                bold: true,
              },
              {
                type: 'staticText',
                value: " all my Christmas presents and it's only October!",
              },
              {
                type: 'newLine',
              },
              {
                type: 'openText',
                value: "I already buy all my Christmas presents and it's only October!",
              },
            ],
            [
              {
                type: 'staticText',
                value: "It's the first time ",
              },
              {
                type: 'staticText',
                value: "I'm ever having",
                bold: true,
              },
              {
                type: 'staticText',
                value: ' a party at home.',
              },
              {
                type: 'newLine',
              },
              {
                type: 'openText',
                value: "It's the first time I'm ever having a party at home.",
              },
            ],
            [
              {
                type: 'staticText',
                value: 'Actually, I think Daren ',
              },
              {
                type: 'staticText',
                value: 'does works',
                bold: true,
              },
              {
                type: 'staticText',
                value: ' quite hard sometimes.',
              },
              {
                type: 'newLine',
              },
              {
                type: 'openText',
                value: 'Actually, I think Daren does works quite hard sometimes.',
              },
            ],
            [
              {
                type: 'staticText',
                value: 'Carlo ',
              },
              {
                type: 'staticText',
                value: 'is never eating',
                bold: true,
              },
              {
                type: 'staticText',
                value: ' Chinese food before.',
              },
              {
                type: 'newLine',
              },
              {
                type: 'openText',
                value: 'Carlo is never eating Chinese food before.',
              },
            ],
            [
              {
                type: 'staticText',
                value: 'Sean ',
              },
              {
                type: 'staticText',
                value: 'already books',
                bold: true,
              },
              {
                type: 'staticText',
                value: ' a table for tonight.',
              },
              {
                type: 'newLine',
              },
              {
                type: 'openText',
                value: 'Sean already books a table for tonight.',
              },
            ],
            [
              {
                type: 'staticText',
                value: 'Needs Melanie',
                bold: true,
              },
              {
                type: 'staticText',
                value: ' any help painting her new flat?',
              },
              {
                type: 'newLine',
              },
              {
                type: 'openText',
                value: 'Needs Melanie any help painting her new flat?',
              },
            ],
          ],
        },
        {
          id: 'C',
          title: 'Complete using the correct form of the verb in brackets.',
          questions: [
            [
              {
                type: 'staticText',
                value: "It's the first time ",
              },
              {
                type: 'openText',
                value: 'I ever eating',
              },
              {
                type: 'staticText',
                value: ' (I / ever / eat)',
                bold: true,
              },
              {
                type: 'staticText',
                value: ' octopus!',
              },
            ],
            [
              {
                type: 'staticText',
                value: 'Sandy ',
              },
              {
                type: 'openText',
                value: 'has not seen',
              },
              {
                type: 'staticText',
                value: ' (not / see)',
                bold: true,
              },
              {
                type: 'staticText',
                value: ' his sister since she went to university.',
              },
            ],
            [
              {
                type: 'staticText',
                value: 'They ',
              },
              {
                type: 'openText',
                value: 'going',
              },
              {
                type: 'staticText',
                value: ' (go)',
                bold: true,
              },
              {
                type: 'staticText',
                value: " on holiday to Spain and won't be back until the end of the month.",
              },
            ],
            [
              {
                type: 'staticText',
                value: 'Poor Marusya! She ',
              },
              {
                type: 'openText',
                value: 'has written',
              },
              {
                type: 'staticText',
                value: ' (write)',
                bold: true,
              },
              {
                type: 'staticText',
                value: " that essay for hours now and she still hasn't finished!",
              },
            ],
            [
              {
                type: 'openText',
                value: 'Have you ever met',
              },
              {
                type: 'staticText',
                value: ' (you / ever / meet)',
                bold: true,
              },
              {
                type: 'staticText',
                value: ' anyone famous?',
              },
            ],
            [
              {
                type: 'openText',
                value: 'I was trying',
              },
              {
                type: 'staticText',
                value: ' (I / try)',
                bold: true,
              },
              {
                type: 'staticText',
                value: " to get in touch with Jenny all morning, but | can't find her anywhere.",
              },
            ],
            [
              {
                type: 'openText',
                value: 'I have not finished',
              },
              {
                type: 'staticText',
                value: ' (I / not finish)',
                bold: true,
              },
              {
                type: 'staticText',
                value: " the book yet so I can't tell you what happens.",
              },
            ],
            [
              {
                type: 'openText',
                value: 'Have you already decided',
              },
              {
                type: 'staticText',
                value: ' (you / already / decide)',
                bold: true,
              },
              {
                type: 'staticText',
                value: "  where you're going this summer?",
              },
            ],
            [
              {
                type: 'openText',
                value: 'We have been living',
              },
              {
                type: 'staticText',
                value: ' (We / live)',
                bold: true,
              },
              {
                type: 'staticText',
                value: ' here for the last six years.',
              },
            ],
            [
              {
                type: 'openText',
                value: 'I have never heard',
              },
              {
                type: 'staticText',
                value: ' (I / never / hear)',
                bold: true,
              },
              {
                type: 'staticText',
                value: ' such nonsense!',
              },
            ],
          ],
        },
      ],
    }),
  },
  {
    key: '0102',
    courseId: '01',
    val: () => ({
      name: 'Unit 2',
      subject: 'Vocabulary',
      description: `Travel and transport`,
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
