const cource = {
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
        name: 'Circle the correct word or phrase.',
        layout: 'orderedList',
        items: [
          {
            id: 1,
            fields: [
              {
                type: 'staticText',
                value: 'Elizabeth ',
              },
              {
                type: 'singleChoice',
                value: 'usually goes',
                options: ['usually goes', 'is usually going'],
                style: { width: '150px' },
              },
              {
                type: 'staticText',
                value: " to bed at around eleven o'clock.",
              },
            ],
          },
          {
            id: 2,
            fields: [
              {
                type: 'staticText',
                value: 'Dan ',
              },
              {
                type: 'singleChoice',
                value: 'is talking',
                options: ['talks', 'is talking'],
                style: { width: '150px' },
              },
              {
                type: 'staticText',
                value: ' on the other phone right now.',
              },
            ],
          },
          {
            id: 3,
            fields: [
              {
                type: 'staticText',
                value: 'We ',
              },
              {
                type: 'singleChoice',
                value: "aren't eating",
                options: ["don't eat", "aren't eating"],
                style: { width: '150px' },
              },
              {
                type: 'staticText',
                value: " any meat at the moment as we're both on a diet.",
              },
            ],
          },
          {
            id: 4,
            fields: [
              {
                type: 'singleChoice',
                value: 'Is air travel getting',
                options: ['Does air travel get', 'Is air travel getting'],
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: ' increasingly safe?',
              },
            ],
          },
          {
            id: 5,
            fields: [
              {
                type: 'staticText',
                value: 'My mum ',
              },
              {
                type: 'singleChoice',
                value: 'calls',
                options: ['calls', 'is calling'],
                style: { width: '150px' },
              },
              {
                type: 'staticText',
                value: ' me every weekend without fail.',
              },
            ],
          },
          {
            id: 6,
            fields: [
              {
                type: 'staticText',
                value: 'How much ',
              },
              {
                type: 'singleChoice',
                value: 'do babysitters generally earn',
                options: ['do babysitters generally earn', 'are babysitters generally earning'],
                style: { width: '250px' },
              },
              {
                type: 'staticText',
                value: '?',
              },
            ],
          },
          {
            id: 7,
            fields: [
              {
                type: 'singleChoice',
                value: "You're always coming",
                options: ['You always come', "You're always coming"],
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: " up with excuses for not having done your homework. It's so annoying!",
              },
            ],
          },
          {
            id: 8,
            fields: [
              {
                type: 'singleChoice',
                value: "I don't go",
                options: ["I don't go", "I'm not going"],
                style: { width: '150px' },
              },
              {
                type: 'staticText',
                value: ' out much during the week, but ',
              },
              {
                type: 'singleChoice',
                value: 'I always try',
                options: ['I always try', "I'm always trying"],
                style: { width: '150px' },
              },
              {
                type: 'staticText',
                value: ' to go out somewhere on Saturday night.',
              },
            ],
          },
          {
            id: 9,
            fields: [
              {
                type: 'staticText',
                value: 'No, the train ',
              },
              {
                type: 'singleChoice',
                value: 'does stop',
                options: ['does stop', 'Is stopping'],
                style: { width: '150px' },
              },
              {
                type: 'staticText',
                value: ' at Cirencester on Saturdays.',
              },
            ],
          },
          {
            id: 10,
            fields: [
              {
                type: 'staticText',
                value: 'My mum ',
              },
              {
                type: 'singleChoice',
                value: 'takes',
                options: ['takes', 'is taking'],
                style: { width: '150px' },
              },
              {
                type: 'staticText',
                value: ' part in ice-skating competitions almost every weekend.',
              },
            ],
          },
        ],
      },
      {
        id: 'B',
        name: 'Rewrite correctly. Change the words or phrases in bold.',
        layout: 'orderedList',
        items: [
          {
            id: 1,
            fields: [
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
                value: 'often gets up',
                style: { width: '90%' },
              },
            ],
          },
          {
            id: 2,
            fields: [
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
                value: 'Do you speak',
                style: { width: '90%' },
              },
            ],
          },
          {
            id: 3,
            fields: [
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
                value: "I've already bought",
                style: { width: '90%' },
              },
            ],
          },
          {
            id: 4,
            fields: [
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
                value: "I've ever had",
                style: { width: '90%' },
              },
            ],
          },
          {
            id: 5,
            fields: [
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
                value: ['works', 'does work'],
                style: { width: '90%' },
              },
            ],
          },
          {
            id: 6,
            fields: [
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
                value: 'has never eaten',
                style: { width: '90%' },
              },
            ],
          },
          {
            id: 7,
            fields: [
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
                value: ['has already booked', "'s already booked"],
                style: { width: '90%' },
              },
            ],
          },
          {
            id: 8,
            fields: [
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
                value: 'Does Melanie need',
                style: { width: '90%' },
              },
            ],
          },
        ],
      },
      {
        id: 'C',
        name: 'Complete using the correct form of the verb in brackets.',
        layout: 'orderedList',
        items: [
          {
            id: 1,
            fields: [
              {
                type: 'staticText',
                value: "It's the first time ",
              },
              {
                type: 'openText',
                value: "I've ever eaten",
                style: { width: '150px' },
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
          },
          {
            id: 2,
            fields: [
              {
                type: 'staticText',
                value: 'Sandy ',
              },
              {
                type: 'openText',
                value: "hasn't seen",
                style: { width: '150px' },
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
          },
          {
            id: 3,
            fields: [
              {
                type: 'staticText',
                value: 'They ',
              },
              {
                type: 'openText',
                value: 'have gone',
                style: { width: '150px' },
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
          },
          {
            id: 4,
            fields: [
              {
                type: 'staticText',
                value: 'Poor Marusya! She ',
              },
              {
                type: 'openText',
                value: 'has been writing',
                style: { width: '150px' },
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
          },
          {
            id: 5,
            fields: [
              {
                type: 'openText',
                value: 'Have you ever met',
                style: { width: '150px' },
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
          },
          {
            id: 6,
            fields: [
              {
                type: 'openText',
                value: "I've been trying",
                style: { width: '150px' },
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
          },
          {
            id: 7,
            fields: [
              {
                type: 'openText',
                value: "I haven't finished",
                style: { width: '150px' },
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
          },
          {
            id: 8,
            fields: [
              {
                type: 'openText',
                value: 'Have you already decided',
                style: { width: '200px' },
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
          },
          {
            id: 9,
            fields: [
              {
                type: 'openText',
                value: ["We've lived", "We've been living"],
                style: { width: '200px' },
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
          },
          {
            id: 10,
            fields: [
              {
                type: 'openText',
                value: "I've never heard",
                style: { width: '150px' },
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
          },
        ],
      },
      {
        id: 'D',
        name: 'Complete using the words in the box.',
        layout: 'orderedList',
        commonOptions: ['already', 'before', 'ever', 'for', 'just', 'rarely', 'since', 'so', 'still', 'yet'],
        items: [
          {
            id: 1,
            fields: [
              {
                type: 'staticText',
                value: 'Have you ',
              },
              {
                type: 'singleChoice',
                value: 'ever',
                useCommonOptions: true,
                style: { width: '150px' },
              },
              {
                type: 'staticText',
                value: ' dreamt of winning the lotter?',
              },
            ],
          },
          {
            id: 2,
            fields: [
              {
                type: 'staticText',
                value: "I haven't worked out how to set the timmer on the video ",
              },
              {
                type: 'singleChoice',
                value: 'yet',
                useCommonOptions: true,
                style: { width: '150px' },
              },
              {
                type: 'staticText',
                value: '.',
              },
            ],
          },
          {
            id: 3,
            fields: [
              {
                type: 'staticText',
                value: "My dad's lived in the same house",
              },
              {
                type: 'singleChoice',
                value: 'since',
                useCommonOptions: true,
                style: { width: '150px' },
              },
              {
                type: 'staticText',
                value: ' he was born.',
              },
            ],
          },
          {
            id: 4,
            fields: [
              {
                type: 'staticText',
                value: "The film's only been on",
              },
              {
                type: 'singleChoice',
                value: 'for',
                useCommonOptions: true,
                style: { width: '150px' },
              },
              {
                type: 'staticText',
                value: ' a couple of minutes.',
              },
            ],
          },
          {
            id: 5,
            fields: [
              {
                type: 'staticText',
                value: 'Bruce has knocked three men out of the competition ',
              },
              {
                type: 'singleChoice',
                value: 'so',
                useCommonOptions: true,
                style: { width: '150px' },
              },
              {
                type: 'staticText',
                value: ' far.',
              },
            ],
          },
          {
            id: 6,
            fields: [
              {
                type: 'staticText',
                value: 'I ',
              },
              {
                type: 'singleChoice',
                value: 'rarely',
                useCommonOptions: true,
                style: { width: '150px' },
              },
              {
                type: 'staticText',
                value: " get the chance to get any exercise - I'm just too busy.",
              },
            ],
          },
          {
            id: 7,
            fields: [
              {
                type: 'staticText',
                value: "He's only ",
              },
              {
                type: 'singleChoice',
                value: 'just',
                useCommonOptions: true,
                style: { width: '150px' },
              },
              {
                type: 'staticText',
                value: ' got home.',
              },
            ],
          },
          {
            id: 8,
            fields: [
              {
                type: 'staticText',
                value: "It's eleven o'clock and Todd ",
              },
              {
                type: 'singleChoice',
                value: 'still',
                useCommonOptions: true,
                style: { width: '150px' },
              },
              {
                type: 'staticText',
                value: " hasn't come home. Where could he be?",
              },
            ],
          },
          {
            id: 9,
            fields: [
              {
                type: 'staticText',
                value: "I've never met Ruth ",
              },
              {
                type: 'singleChoice',
                value: 'before',
                useCommonOptions: true,
                style: { width: '150px' },
              },
              {
                type: 'staticText',
                value: ". What's she like?",
              },
            ],
          },
          {
            id: 10,
            fields: [
              {
                type: 'staticText',
                value: 'Have you finished ',
              },
              {
                type: 'singleChoice',
                value: 'already',
                useCommonOptions: true,
                style: { width: '150px' },
              },
              {
                type: 'staticText',
                value: '? That was quick!',
              },
            ],
          },
        ],
      },
      {
        id: 'E',
        name: 'Choose the correct answer.',
        layout: 'orderedList',
        layoutColumns: 2,
        items: [
          {
            id: 1,
            fields: [
              {
                type: 'staticText',
                value: 'Ian ...... a shower at the moment, so could you call back in about half an hour?',
              },
              {
                type: 'newLine',
              },
              {
                type: 'radio',
                value: 'is taking',
                options: ['takes', 'is taking', 'has taken', 'has been taking'],
              },
            ],
          },
          {
            id: 2,
            fields: [
              {
                type: 'staticText',
                value: '...... to Ipswich before?',
              },
              {
                type: 'newLine',
              },
              {
                type: 'radio',
                value: 'Have you ever been',
                options: ['Do you ever go', 'Are you ever going', 'Have you ever been', 'Have you ever been going'],
              },
            ],
          },
          {
            id: 3,
            fields: [
              {
                type: 'staticText',
                value: 'I ...... to all the local newspapers and TV stations to complain.',
              },
              {
                type: 'newLine',
              },
              {
                type: 'radio',
                value: 'have already written',
                options: ['already write', 'already writing', 'have already written', 'have already been writing'],
              },
            ],
          },
          {
            id: 4,
            fields: [
              {
                type: 'staticText',
                value: '...... TV for the last four hours? Turn it off and get some exercise!',
              },
              {
                type: 'newLine',
              },
              {
                type: 'radio',
                value: 'Have you been watching',
                options: ['Do you watch', 'Are you watching', 'Watched you', 'Have you been watching'],
              },
            ],
          },
          {
            id: 5,
            fields: [
              {
                type: 'staticText',
                value: 'Edik, ...... hockey competitively or just for fun?',
              },
              {
                type: 'newLine',
              },
              {
                type: 'radio',
                value: 'do you usually play',
                options: ['do you usually play', 'are you usually playing', 'have you usually played', 'have you usually been playing'],
              },
            ],
          },
          {
            id: 6,
            fields: [
              {
                type: 'staticText',
                value: "That's the first time ...... an answer right today!",
              },
              {
                type: 'newLine',
              },
              {
                type: 'radio',
                value: 'I have got',
                options: ['I get', 'I am getting', 'I have got', 'I have been getting'],
              },
            ],
          },
          {
            id: 7,
            fields: [
              {
                type: 'staticText',
                value: "Jessica has ...... left, i'm afraid.",
              },
              {
                type: 'newLine',
              },
              {
                type: 'radio',
                value: 'already',
                options: ['already', 'yet', 'still', 'so far'],
              },
            ],
          },
          {
            id: 8,
            fields: [
              {
                type: 'staticText',
                value: 'Dan ...... in the living room while we redecorate his bedroom.',
              },
              {
                type: 'newLine',
              },
              {
                type: 'radio',
                value: 'is sleeping',
                options: ['sleeps', 'is sleeping', 'has slept', 'does sleep'],
              },
            ],
          },
          {
            id: 9,
            fields: [
              {
                type: 'staticText',
                value: 'Unfortunately, Simone ...... a day off very often.',
              },
              {
                type: 'newLine',
              },
              {
                type: 'radio',
                value: "doesn't get",
                options: ["doesn't get", "isn't getting", "hasn't got", "hasn't been getting"],
              },
            ],
          },
          {
            id: 10,
            fields: [
              {
                type: 'staticText',
                value: 'Actually, I ...... a cup of tea first thing every morning, but then I switch to coffee.',
              },
              {
                type: 'newLine',
              },
              {
                type: 'radio',
                value: 'do drink',
                options: ['do drink', 'am drinking', 'have drunk', 'have been drinking'],
              },
            ],
          },
        ],
      },
      {
        id: 'F',
        name: 'Complete using the correct form of the words in the box',
        layout: 'article',
        commonOptions: [
          { text: 'be', value: 'is' },
          'disagree',
          'do',
          'include',
          { text: 'know', value: 'knows' },
          { text: 'look', value: 'looks' },
          'see',
          { text: 'seem', value: 'seems' },
          'understand',
        ],
        items: [
          {
            id: 1,
            title: 'The City of Omsk',
            fields: [
              {
                type: 'staticText',
                value: 'Everyone ',
              },
              {
                type: 'openText',
                label: '(1)',
                value: 'knows',
                useCommonOptions: true,
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value:
                  ' about the stunning sights to see in Moscow and St. Petersburg. The beautiful city of Omsk, one of the oldest cities in western Siberia, ',
              },
              {
                type: 'openText',
                label: '(2)',
                value: 'is',
                useCommonOptions: true,
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: ' not so well-known. Unfortunately, the 2700 km journey from Moscow just ',
              },
              {
                type: 'openText',
                label: '(3)',
                value: ['looks', 'seems'],
                useCommonOptions: true,
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: ' too far for many travellers to Russia. For those who ',
              },
              {
                type: 'openText',
                label: '(4)',
                value: 'do',
                useCommonOptions: true,
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: ' travel there, however, there are a number of interesting things to see and do. These ',
              },
              {
                type: 'openText',
                label: '(5)',
                value: 'include',
                useCommonOptions: true,
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value:
                  ' visiting the Tobolskie and Tarskie Gates, which were the first stone buildings in Omsk, the Museum of Local Lore and the modern shops on Lyubinsky Avenue.When you ',
              },
              {
                type: 'openText',
                label: '(6)',
                value: 'see',
                useCommonOptions: true,
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: ' Krestovozdvizhensky Cathedral lit up in the moonlight, you ',
              },
              {
                type: 'openText',
                label: '(7)',
                value: 'understand',
                useCommonOptions: true,
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: ' why it’s worth makirig the effort to come here.',
              },
            ],
          },
          {
            id: 2,
            fields: [
              {
                type: 'staticText',
                value: 'Few historians ',
              },
              {
                type: 'openText',
                label: '(8)',
                value: 'disagree',
                useCommonOptions: true,
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: ` with Omsk's historical importance — it was even the capital of Russia for a short period at the beginning of the 20" century. As travelling across Russia becomes easier, it `,
              },
              {
                type: 'openText',
                label: '(9)',
                value: ['looks', 'seems'],
                useCommonOptions: true,
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: ' like Omsk may also have a bright future — as a popular destination for tourists.',
              },
            ],
          },
        ],
      },
      {
        id: 'G',
        name: 'Match to make sentences.',
        layout: 'grid',
        layoutColumns: 2,
        commonOptions: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
        hideCommonOptions: true,
        items: [
          {
            id: 1,
            fields: [
              {
                type: 'staticText',
                value: '1.',
                bold: true,
                style: { marginRight: '24px' },
              },
              {
                type: 'staticText',
                value: 'I think ',
              },
              {
                type: 'singleChoice',
                value: 'B',
                useCommonOptions: true,
                style: { width: '100px' },
              },
            ],
          },
          {
            id: 'A',
            fields: [
              {
                type: 'match',
                value: 'A',
                text: 'darker hair than her sister.',
              },
            ],
          },
          {
            id: 2,
            fields: [
              {
                type: 'staticText',
                value: '2.',
                bold: true,
                style: { marginRight: '24px' },
              },
              {
                type: 'staticText',
                value: "I'm thinking ",
              },
              {
                type: 'singleChoice',
                value: 'F',
                useCommonOptions: true,
                style: { width: '100px' },
              },
            ],
          },
          {
            id: 'B',
            fields: [
              {
                type: 'match',
                value: 'B',
                text: "I'm going to buy the new Racetrack CD.",
              },
            ],
          },
          {
            id: 3,
            fields: [
              {
                type: 'staticText',
                value: '3.',
                bold: true,
                style: { marginRight: '24px' },
              },
              {
                type: 'staticText',
                value: "Phil's looking ",
              },
              {
                type: 'singleChoice',
                value: 'D',
                useCommonOptions: true,
                style: { width: '100px' },
              },
            ],
          },
          {
            id: 'C',
            fields: [
              {
                type: 'match',
                value: 'C',
                text: 'a haircut at the moment.',
              },
            ],
          },
          {
            id: 4,
            fields: [
              {
                type: 'staticText',
                value: '4.',
                bold: true,
                style: { marginRight: '24px' },
              },
              {
                type: 'staticText',
                value: 'Phil looks ',
              },
              {
                type: 'singleChoice',
                value: 'H',
                useCommonOptions: true,
                style: { width: '100px' },
              },
            ],
          },
          {
            id: 'D',
            fields: [
              {
                type: 'match',
                value: 'D',
                text: 'for his glasses. Have you seen them?',
              },
            ],
          },
          {
            id: 5,
            fields: [
              {
                type: 'staticText',
                value: '5.',
                bold: true,
                style: { marginRight: '24px' },
              },
              {
                type: 'staticText',
                value: 'Claire has ',
              },
              {
                type: 'singleChoice',
                value: 'A',
                useCommonOptions: true,
                style: { width: '100px' },
              },
            ],
          },
          {
            id: 'E',
            fields: [
              {
                type: 'match',
                value: 'E',
                text: 'not old enough to drive a car.',
              },
            ],
          },
          {
            id: 6,
            fields: [
              {
                type: 'staticText',
                value: '6.',
                bold: true,
                style: { marginRight: '24px' },
              },
              {
                type: 'staticText',
                value: 'Claire is having ',
              },
              {
                type: 'singleChoice',
                value: 'C',
                useCommonOptions: true,
                style: { width: '100px' },
              },
            ],
          },
          {
            id: 'F',
            fields: [
              {
                type: 'match',
                value: 'F',
                text: 'of getting Dad a CD for his birthday.',
              },
            ],
          },
          {
            id: 7,
            fields: [
              {
                type: 'staticText',
                value: '7.',
                bold: true,
                style: { marginRight: '24px' },
              },
              {
                type: 'staticText',
                value: 'Andy is ',
              },
              {
                type: 'singleChoice',
                value: 'E',
                useCommonOptions: true,
                style: { width: '100px' },
              },
            ],
          },
          {
            id: 'G',
            fields: [
              {
                type: 'match',
                value: 'G',
                text: 'very annoying at the moment!',
              },
            ],
          },
          {
            id: 8,
            fields: [
              {
                type: 'staticText',
                value: '8.',
                bold: true,
                style: { marginRight: '24px' },
              },
              {
                type: 'staticText',
                value: 'Andy is being ',
              },
              {
                type: 'singleChoice',
                value: 'G',
                useCommonOptions: true,
                style: { width: '100px' },
              },
            ],
          },
          {
            id: 'H',
            fields: [
              {
                type: 'match',
                value: 'H',
                text: 'like he needs a holiday!',
              },
            ],
          },
        ],
      },
      {
        id: 'H',
        name: 'Find the extra word in each tine',
        layout: 'orderedList',
        title: 'International friends',
        items: [
          {
            id: 1,
            fields: [
              {
                type: 'openText',
                value: 'to',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: " I've been to travelling round Europe all summer. It’s the first time I've",
              },
            ],
          },
          {
            id: 2,
            fields: [
              {
                type: 'openText',
                value: 'going',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: " ever been going abroad, and I've had a fantastic time! I've seen",
              },
            ],
          },
          {
            id: 3,
            fields: [
              {
                type: 'openText',
                value: 'to',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: ' loads of interesting places and I have to also made loads of new friends.',
              },
            ],
          },
          {
            id: 4,
            fields: [
              {
                type: 'openText',
                value: 'been',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: " I've been decided to stay in touch with them now I'm back. One of",
              },
            ],
          },
          {
            id: 5,
            fields: [
              {
                type: 'openText',
                value: 'making',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: ' them, Giselle, is French. She was making on holiday too. We now send',
              },
            ],
          },
          {
            id: 6,
            fields: [
              {
                type: 'openText',
                value: 'are',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: " text messages are to each other all the time. They're usually in English",
              },
            ],
          },
          {
            id: 7,
            fields: [
              {
                type: 'openText',
                value: 'have',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: " because my French isn't very good! I'm planning to have visit her in",
              },
            ],
          },
          {
            id: 8,
            fields: [
              {
                type: 'openText',
                value: 'am',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: ' France next year sometime. I hope I can. I am love meeting people from',
              },
            ],
          },
          {
            id: 9,
            fields: [
              {
                type: 'openText',
                value: 'had',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: ' other countries! I want to have had lots of friends from all over the world!',
              },
            ],
          },
          {
            id: 10,
            fields: [
              {
                type: 'openText',
                value: 'is',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: ' Travelling certainly broadens the mind, but it also is broadens your circle of friends!',
              },
            ],
          },
        ],
      },
      {
        id: 'I',
        name: 'Write one word in each gap.',
        layout: 'article',
        items: [
          {
            id: 1,
            fields: [
              {
                type: 'staticText',
                value: "`You've ",
              },
              {
                type: 'openText',
                value: 'been',
                label: '(1)',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: " looking at that timetable for the last ten minutes. It can't be that confusing!` said Sheila angrily.",
              },
            ],
          },
          {
            id: 2,
            fields: [
              {
                type: 'staticText',
                value: '`I ',
              },
              {
                type: 'openText',
                value: ['do', 'really'],
                label: '(2)',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: " wish you'd be quiet! I've ",
              },
              {
                type: 'openText',
                value: 'get',
                label: '(3)',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: ' splitting headache thanks to you!` replied Matt.',
              },
            ],
          },
          {
            id: 3,
            fields: [
              {
                type: 'staticText',
                value: "`Mum! Dad! Please!` said Alison. `You're both ",
              },
              {
                type: 'openText',
                value: 'being',
                label: '(4)',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: ' very silly. ',
              },
              {
                type: 'openText',
                value: 'There',
                label: '(5)',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value:
                  " is no point at all in blaming each other. That's not going to help us find out what time the next train to Budapest is due to leave.`",
              },
            ],
          },
          {
            id: 4,
            fields: [
              {
                type: 'staticText',
                value: '`You ',
              },
              {
                type: 'openText',
                value: 'are',
                label: '(6)',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: ' quite right, darling. I ',
              },
              {
                type: 'openText',
                value: 'am',
                label: '(7)',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: '  sorry,` said Sheila.',
              },
            ],
          },
          {
            id: 5,
            fields: [
              {
                type: 'staticText',
                value: "`Me too,` mumbled Matt. `Now, let's have another look at this timetable. Well, it ",
              },
              {
                type: 'openText',
                value: ['looks', 'seems'],
                label: '(8)',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: ' like we ',
              },
              {
                type: 'openText',
                value: 'have',
                label: '(9)',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: " definitely missed the last train today. That was the 18.20 we just missed, wasn't it?`",
              },
            ],
          },
          {
            id: 6,
            fields: [
              {
                type: 'staticText',
                value: '`I ',
              },
              {
                type: 'openText',
                value: 'think',
                label: '(10)',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value:
                  " so,` said Sheila. `I mean, it did leave at 18.20. Whether it's actually going to Budapest or not is another question.",
              },
            ],
          },
          {
            id: 7,
            fields: [
              {
                type: 'staticText',
                value: '`Well, one thing is ',
              },
              {
                type: 'openText',
                value: 'not',
                label: '(11)',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: ' in doubt,` said Matt.',
              },
              {
                type: 'newLine',
              },
              {
                type: 'staticText',
                value: "`What's that?` asked Sheila and Alison together.",
              },
            ],
          },
          {
            id: 8,
            fields: [
              {
                type: 'staticText',
                value: "`This is the worst holiday we've ",
              },
              {
                type: 'openText',
                value: 'ever',
                label: '(12)',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: " been on,` said Matt. `Next year, we're going to try something far less adventurous.",
              },
              {
                type: 'newLine',
              },
              {
                type: 'staticText',
                value: '`Agreed!` said Sheila and Alison.',
              },
            ],
          },
        ],
      },
      {
        id: 'J',
        name: 'Complete each second sentence using the word given so that it has a similar meaning to the first sentence. Write between two and five words in each gap.',
        layout: 'orderedList',
        items: [
          {
            id: 1,
            fields: [
              {
                type: 'staticText',
                value: "What's the price of the tickets, Jimmy? ",
              },
              {
                type: 'staticText',
                value: 'much',
                bold: true,
              },
              {
                type: 'newLine',
              },
              {
                type: 'staticText',
                value: 'How ',
              },
              {
                type: 'openText',
                value: ['much do the tickets cost', 'much are the tickets'],
                style: { width: '300px' },
              },
              {
                type: 'staticText',
                value: ' Jimmy?',
              },
            ],
          },
          {
            id: 2,
            fields: [
              {
                type: 'staticText',
                value: 'Are these your trainers? ',
              },
              {
                type: 'staticText',
                value: 'to',
                bold: true,
              },
              {
                type: 'newLine',
              },
              {
                type: 'staticText',
                value: 'Do ',
              },
              {
                type: 'openText',
                value: 'these trainers belong to',
                style: { width: '300px' },
              },
              {
                type: 'staticText',
                value: ' you?',
              },
            ],
          },
          {
            id: 3,
            fields: [
              {
                type: 'staticText',
                value: "Sasha's not keen on team sports at all. ",
              },
              {
                type: 'staticText',
                value: 'like',
                bold: true,
              },
              {
                type: 'newLine',
              },
              {
                type: 'staticText',
                value: 'Sasha ',
              },
              {
                type: 'openText',
                value: ['does not', "doesn't like"],
                style: { width: '300px' },
              },
              {
                type: 'staticText',
                value: ' team sports at all.',
              },
            ],
          },
          {
            id: 4,
            fields: [
              {
                type: 'staticText',
                value: "It's only her second time in a recording studio. ",
              },
              {
                type: 'staticText',
                value: 'been',
                bold: true,
              },
              {
                type: 'newLine',
              },
              {
                type: 'staticText',
                value: 'She ',
              },
              {
                type: 'openText',
                value: 'has only been',
                style: { width: '300px' },
              },
              {
                type: 'staticText',
                value: ' in a recording studio once before.',
              },
            ],
          },
          {
            id: 5,
            fields: [
              {
                type: 'staticText',
                value: 'We got here three hours ago. ',
              },
              {
                type: 'staticText',
                value: 'have',
                bold: true,
              },
              {
                type: 'newLine',
              },
              {
                type: 'staticText',
                value: 'We ',
              },
              {
                type: 'openText',
                value: ['have been here', 'have been here for'],
                style: { width: '300px' },
              },
              {
                type: 'staticText',
                value: ' three hours.',
              },
            ],
          },
          {
            id: 6,
            fields: [
              {
                type: 'staticText',
                value: "I started writing this hours ago and it's still not right. ",
              },
              {
                type: 'staticText',
                value: 'writing',
                bold: true,
              },
              {
                type: 'newLine',
              },
              {
                type: 'staticText',
                value: 'I ',
              },
              {
                type: 'openText',
                value: 'have been writing this for',
                style: { width: '300px' },
              },
              {
                type: 'staticText',
                value: " hours and it's still not right.",
              },
            ],
          },
          {
            id: 7,
            fields: [
              {
                type: 'staticText',
                value: 'This is my first experience of flying alone. ',
              },
              {
                type: 'staticText',
                value: 'time',
                bold: true,
              },
              {
                type: 'newLine',
              },
              {
                type: 'staticText',
                value: 'It is the first ',
              },
              {
                type: 'openText',
                value: 'time I have flown',
                style: { width: '300px' },
              },
              {
                type: 'staticText',
                value: ' alone.',
              },
            ],
          },
          {
            id: 8,
            fields: [
              {
                type: 'staticText',
                value: "Sharon's in the bath at the moment. ",
              },
              {
                type: 'staticText',
                value: 'a',
                bold: true,
              },
              {
                type: 'newLine',
              },
              {
                type: 'staticText',
                value: 'Sharon ',
              },
              {
                type: 'openText',
                value: 'is having a bath',
                style: { width: '300px' },
              },
              {
                type: 'staticText',
                value: ' at the moment.',
              },
            ],
          },
          {
            id: 9,
            fields: [
              {
                type: 'staticText',
                value: 'Paul enjoys surprises apart from on his birthday. ',
              },
              {
                type: 'staticText',
                value: 'does',
                bold: true,
              },
              {
                type: 'newLine',
              },
              {
                type: 'staticText',
                value: 'Paul ',
              },
              {
                type: 'openText',
                value: 'does enjoy',
                style: { width: '300px' },
              },
              {
                type: 'staticText',
                value: ' surprises, just not on his birthday!',
              },
            ],
          },
        ],
      },
    ],
  }),
};

export default cource;
