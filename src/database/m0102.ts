export default {
  key: '0102',
  courseId: '01',
  val: () => ({
    name: 'Unit 2',
    subject: 'Vocabulary',
    description: 'Travel and transport',
    modalContent: '![p0013](/assets/p0013.png)',
    tests: [
      {
        id: 'A',
        name: 'Choose the correct answer.',
        title: 'Topic vocabulary in contrast',
        layout: 'orderedList',
        layoutColumns: 2,
        items: [
          {
            id: 1,
            fields: [
              {
                type: 'staticText',
                value: 'You need a passport to cross the ...... between Mexico and the United States.',
              },
              {
                type: 'newLine',
              },
              {
                type: 'radio',
                value: 'border',
                options: ['edge', 'line', 'border', 'rim'],
              },
            ],
          },
          {
            id: 2,
            fields: [
              {
                type: 'staticText',
                value: 'The hotel where we are ...... is quite luxurious.',
              },
              {
                type: 'newLine',
              },
              {
                type: 'radio',
                value: 'staying',
                options: ['living', 'remaining', 'existing', 'staying'],
              },
            ],
          },
          {
            id: 3,
            fields: [
              {
                type: 'staticText',
                value: 'When you ......	your destination, your tour guide will meet you at the airport.',
              },
              {
                type: 'newLine',
              },
              {
                type: 'radio',
                value: 'reach',
                options: ['arrive', 'get', 'reach', 'achieve'],
              },
            ],
          },
          {
            id: 4,
            fields: [
              {
                type: 'staticText',
                value: 'It can be quite busy here during the tourist .......',
              },
              {
                type: 'newLine',
              },
              {
                type: 'radio',
                value: 'season',
                options: ['season', 'period', 'phase', 'stage'],
              },
            ],
          },
          {
            id: 5,
            fields: [
              {
                type: 'staticText',
                value: 'David ...... me to the train station every morning.',
              },
              {
                type: 'newLine',
              },
              {
                type: 'radio',
                value: 'takes',
                options: ['goes', 'takes', 'has', 'makes'],
              },
            ],
          },
          {
            id: 6,
            fields: [
              {
                type: 'staticText',
                value: 'I always enjoy our school ...... to Ukraine.',
              },
              {
                type: 'newLine',
              },
              {
                type: 'radio',
                value: 'trip',
                options: ['excursion', 'journey', 'trip', 'travel'],
              },
            ],
          },
          {
            id: 7,
            fields: [
              {
                type: 'staticText',
                value: "Hurry up. or we'll ...... the bus!",
              },
              {
                type: 'newLine',
              },
              {
                type: 'radio',
                value: 'miss',
                options: ['avoid', 'miss', 'drop', 'lose'],
              },
            ],
          },
          {
            id: 8,
            fields: [
              {
                type: 'staticText',
                value: 'The brochure says that the hotel has a great ...... of the sea.',
              },
              {
                type: 'newLine',
              },
              {
                type: 'radio',
                value: 'view',
                options: ['appearance', 'look', 'sight', 'view'],
              },
            ],
          },
          {
            id: 9,
            fields: [
              {
                type: 'staticText',
                value: 'I must remember to ...... a souvenir back from Spain for my grandmother.',
              },
              {
                type: 'newLine',
              },
              {
                type: 'radio',
                value: 'bring',
                options: ['go', 'take', 'bring', 'keep'],
              },
            ],
          },
          {
            id: 10,
            fields: [
              {
                type: 'staticText',
                value: 'The ...... from London to Berlin is about 919 kilometres.',
              },
              {
                type: 'newLine',
              },
              {
                type: 'radio',
                value: 'distance',
                options: ['measure', 'length', 'gap', 'distance'],
              },
            ],
          },
          {
            id: 11,
            fields: [
              {
                type: 'staticText',
                value: 'Make sure you ...... a hotel before you come to our island, especially in the summer.',
              },
              {
                type: 'newLine',
              },
              {
                type: 'radio',
                value: 'book',
                options: ['book', 'keep', 'put', 'take'],
              },
            ],
          },
          {
            id: 12,
            fields: [
              {
                type: 'staticText',
                value: 'I live in Barcelona, but my ...... town Is Madrid.',
              },
              {
                type: 'newLine',
              },
              {
                type: 'radio',
                value: 'home',
                options: ['birth', 'home', 'native', 'origin'],
              },
            ],
          },
        ],
      },
      {
        id: 'B',
        name: 'Circle the correct word.',
        layout: 'orderedList',
        items: [
          {
            id: 1,
            fields: [
              {
                type: 'staticText',
                value: 'I hope to go on a trip round the ',
              },
              {
                type: 'singleChoice',
                value: 'world',
                options: ['world', 'earth'],
                style: { width: '150px' },
              },
              {
                type: 'staticText',
                value: ' one day.',
              },
            ],
          },
          {
            id: 2,
            fields: [
              {
                type: 'staticText',
                value: 'You learn a lot about the local ',
              },
              {
                type: 'singleChoice',
                value: 'area',
                options: ['territory', 'area'],
                style: { width: '150px' },
              },
              {
                type: 'staticText',
                value: ' by speaking to local people.',
              },
            ],
          },
          {
            id: 3,
            fields: [
              {
                type: 'staticText',
                value: "It's good to have someone to ",
              },
              {
                type: 'singleChoice',
                value: 'guide',
                options: ['lead', 'guide'],
                style: { width: '150px' },
              },
              {
                type: 'staticText',
                value: ' you when you are on holiday.',
              },
            ],
          },
          {
            id: 4,
            fields: [
              {
                type: 'staticText',
                value: 'I get the train to work every day and the ',
              },
              {
                type: 'singleChoice',
                value: 'fare',
                options: ['fare', 'fee'],
                style: { width: '150px' },
              },
              {
                type: 'staticText',
                value: ' is quite expensive.',
              },
            ],
          },
          {
            id: 5,
            fields: [
              {
                type: 'staticText',
                value: 'Captain Cook discovered Australia on a ',
              },
              {
                type: 'singleChoice',
                value: 'voyage',
                options: ['voyage', 'travel'],
                style: { width: '150px' },
              },
              {
                type: 'staticText',
                value: ' to the Pacific.',
              },
            ],
          },
          {
            id: 6,
            fields: [
              {
                type: 'staticText',
                value: 'Most tourist attractions in London charge an admission ',
              },
              {
                type: 'singleChoice',
                value: 'fee',
                options: ['fee', 'ticket'],
                style: { width: '150px' },
              },
              {
                type: 'staticText',
                value: '.',
              },
            ],
          },
          {
            id: 7,
            fields: [
              {
                type: 'staticText',
                value: 'The sunset over Niagara Falls really is a magnificent ',
              },
              {
                type: 'singleChoice',
                value: 'sight',
                options: ['look', 'sight'],
                style: { width: '150px' },
              },
              {
                type: 'staticText',
                value: '.',
              },
            ],
          },
        ],
      },
      {
        id: 'C',
        name: 'Complete using the correct form of the words in the box.',
        title: 'Phrasal verbs',
        layout: 'orderedList',
        commonOptions: ['catch', 'check', 'get', { text: 'go', value: 'gone' }, 'make', { text: 'pick', value: 'picks' }, 'pull', 'see'],
        items: [
          {
            id: 1,
            fields: [
              {
                type: 'staticText',
                value: "Let's go to the airport to ",
              },
              {
                type: 'openText',
                value: 'see',
                useCommonOptions: true,
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: ' Grandpa off when he flies back home.',
              },
            ],
          },
          {
            id: 2,
            fields: [
              {
                type: 'staticText',
                value: 'If it starts to rain, ',
              },
              {
                type: 'openText',
                value: 'make',
                useCommonOptions: true,
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: ' for a nearby cave to wait for it to pass.',
              },
            ],
          },
          {
            id: 3,
            fields: [
              {
                type: 'staticText',
                value: 'We would like to remind all guests that they must ',
              },
              {
                type: 'openText',
                value: 'check',
                useCommonOptions: true,
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: ' out before midday.',
              },
            ],
          },
          {
            id: 4,
            fields: [
              {
                type: 'staticText',
                value: 'Please ',
              },
              {
                type: 'openText',
                value: 'pull',
                useCommonOptions: true,
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: ' in and stop so that I can buy something to drink.',
              },
            ],
          },
          {
            id: 5,
            fields: [
              {
                type: 'staticText',
                value: 'Every Saturday night my dad ',
              },
              {
                type: 'openText',
                value: 'picks',
                useCommonOptions: true,
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: ' us up outside the cinema.',
              },
            ],
          },
          {
            id: 6,
            fields: [
              {
                type: 'staticText',
                value: 'I think the neighbours have ',
              },
              {
                type: 'openText',
                value: 'gone',
                useCommonOptions: true,
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: ' away for the weekend.',
              },
            ],
          },
          {
            id: 7,
            fields: [
              {
                type: 'staticText',
                value: "John's up ahead so Greg is pedalling fast to ",
              },
              {
                type: 'openText',
                value: 'catch',
                useCommonOptions: true,
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: ' up with him.',
              },
            ],
          },
          {
            id: 8,
            fields: [
              {
                type: 'staticText',
                value: "We're going on holiday tomorrow, but we'll call you when we ",
              },
              {
                type: 'openText',
                value: 'get',
                useCommonOptions: true,
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: ' back.',
              },
            ],
          },
        ],
      },
      {
        id: 'D',
        name: 'Write a phrasal verb in the correct form to replace the words in italics. Add any other words you need.',
        layout: 'orderedList',
        items: [
          {
            id: 1,
            fields: [
              {
                type: 'staticText',
                value: 'We can ',
              },
              {
                type: 'staticText',
                value: 'start our journey ',
                style: { fontStyle: 'italic' },
              },
              {
                type: 'openText',
                value: 'set out',
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: ' towards the mountains at dawn.',
              },
            ],
          },
          {
            id: 2,
            fields: [
              {
                type: 'staticText',
                value: 'Dad fetched the luggage while Mum ',
              },
              {
                type: 'staticText',
                value: 'registered ',
                style: { fontStyle: 'italic' },
              },
              {
                type: 'openText',
                value: 'checked in',
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: ' at the hotel.',
              },
            ],
          },
          {
            id: 3,
            fields: [
              {
                type: 'staticText',
                value: 'I asked the taxi driver ',
              },
              {
                type: 'staticText',
                value: 'to let me get out ',
                style: { fontStyle: 'italic' },
              },
              {
                type: 'openText',
                value: 'to catch up',
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: ' outside the train station.',
              },
            ],
          },
          {
            id: 4,
            fields: [
              {
                type: 'staticText',
                value: "Oh, no! I've forgotten my passport! We'll have ",
              },
              {
                type: 'staticText',
                value: 'to go back ',
                style: { fontStyle: 'italic' },
              },
              {
                type: 'openText',
                value: 'to turn round',
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: ' and get it!',
              },
            ],
          },
          {
            id: 5,
            fields: [
              {
                type: 'staticText',
                value: '5	The most exciting moment is when the plane ',
              },
              {
                type: 'staticText',
                value: 'leaves the ground ',
                style: { fontStyle: 'italic' },
              },
              {
                type: 'openText',
                value: 'takes off',
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: '.',
              },
            ],
          },
          {
            id: 6,
            fields: [
              {
                type: 'staticText',
                value: "Stop the car! I think we've ",
              },
              {
                type: 'staticText',
                value: 'hit ',
                style: { fontStyle: 'italic' },
              },
              {
                type: 'openText',
                value: 'run over with',
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: ' a dog.',
              },
            ],
          },
          {
            id: 7,
            fields: [
              {
                type: 'staticText',
                value: "I don't think a horse can ever ",
              },
              {
                type: 'staticText',
                value: 'stay at the same speed as ',
                style: { fontStyle: 'italic' },
              },
              {
                type: 'openText',
                value: 'keeps up with',
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: ' a car.',
              },
            ],
          },
        ],
      },
      {
        id: 'E',
        name: 'Write one word in each gap.',
        title: 'Phrases and collocations',
        layout: 'orderedList',
        items: [
          {
            id: 1,
            fields: [
              {
                type: 'staticText',
                value: 'The speed ',
              },
              {
                type: 'openText',
                value: 'limit',
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: " in towns is 30 km/h and you shouldn't go faster than that.",
              },
            ],
          },
          {
            id: 2,
            fields: [
              {
                type: 'staticText',
                value: "Why don't we ",
              },
              {
                type: 'openText',
                value: 'take',
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: ' the scenic route along the coast?',
              },
            ],
          },
          {
            id: 3,
            fields: [
              {
                type: 'staticText',
                value: 'If you buy your plane ticket ',
              },
              {
                type: 'openText',
                value: 'in',
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: " advance, it's often cheaper than if you wait.",
              },
            ],
          },
          {
            id: 4,
            fields: [
              {
                type: 'staticText',
                value: "I can't remember the name of the hotel we stayed at off the ",
              },
              {
                type: 'openText',
                value: 'top',
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: ' of my head.',
              },
            ],
          },
          {
            id: 5,
            fields: [
              {
                type: 'staticText',
                value: "I'm sorry I'm late! I ",
              },
              {
                type: 'openText',
                value: 'lost',
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: ' my way and had to ask for directions.',
              },
            ],
          },
          {
            id: 6,
            fields: [
              {
                type: 'staticText',
                value: "My mum's away in Germany on a business ",
              },
              {
                type: 'openText',
                value: 'trip',
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: ' at the moment.',
              },
            ],
          },
          {
            id: 7,
            fields: [
              {
                type: 'staticText',
                value: 'The bank? Well, turn left here, then go ',
              },
              {
                type: 'openText',
                value: 'straight',
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: " ahead for a kilometre and it's on the left.",
              },
            ],
          },
          {
            id: 8,
            fields: [
              {
                type: 'staticText',
                value: 'If you look on your left-hand ',
              },
              {
                type: 'openText',
                value: 'side',
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: " as we turn this corner, you'll see Big Ben.",
              },
            ],
          },
          {
            id: 9,
            fields: [
              {
                type: 'staticText',
                value: "I'll look round the shops in the morning and then ",
              },
              {
                type: 'openText',
                value: 'go',
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: ' sightseeing in the afternoon.',
              },
            ],
          },
          {
            id: 10,
            fields: [
              {
                type: 'staticText',
                value: "My grandma hasn't driven since she ",
              },
              {
                type: 'openText',
                value: 'had',
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: ' an accident last year.',
              },
            ],
          },
          {
            id: 11,
            fields: [
              {
                type: 'staticText',
                value: 'I love visiting foreign places, ',
              },
              {
                type: 'openText',
                value: 'seeing',
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: ' the sights and learning about other cultures.',
              },
            ],
          },
          {
            id: 12,
            fields: [
              {
                type: 'staticText',
                value: 'During the 70s, many British people started to go ',
              },
              {
                type: 'openText',
                value: 'on',
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: ' holiday to Spain.',
              },
            ],
          },
          {
            id: 13,
            fields: [
              {
                type: 'staticText',
                value: "While you're in London, you should take a tour ",
              },
              {
                type: 'openText',
                value: ['around', 'of'],
                style: { width: '120px' },
              },
              {
                type: 'staticText',
                value: ' the Houses of Parliament.',
              },
            ],
          },
        ],
      },
      {
        id: 'F',
        name: 'Choose the correct answer.',
        title: 'Word patterns',
        layout: 'orderedList',
        items: [
          {
            id: 1,
            fields: [
              {
                type: 'staticText',
                value: "I've always dreamt ...... China.",
              },
              {
                type: 'newLine',
              },
              {
                type: 'radio',
                value: 'of visiting',
                options: ['to visit', 'of visiting', 'I visit', 'visit'],
                layout: 'horizontal',
              },
            ],
          },
          {
            id: 2,
            fields: [
              {
                type: 'staticText',
                value: 'The travel agency is arranging for us ...... at a really nice hotel.',
              },
              {
                type: 'newLine',
              },
              {
                type: 'radio',
                value: 'to stay',
                options: ['stay', 'of staying', 'to stay', 'staying'],
                layout: 'horizontal',
              },
            ],
          },
          {
            id: 3,
            fields: [
              {
                type: 'staticText',
                value: 'My dad says he always regrets ...... more.',
              },
              {
                type: 'newLine',
              },
              {
                type: 'radio',
                value: 'not travelling',
                options: ['to not travel', 'not travelling', 'he not travel', 'of not travelling'],
                layout: 'horizontal',
              },
            ],
          },
          {
            id: 4,
            fields: [
              {
                type: 'staticText',
                value: 'John seems keen ...... how to drive as soon as he can.',
              },
              {
                type: 'newLine',
              },
              {
                type: 'radio',
                value: 'to learn',
                options: ['of learning', 'he learn', 'for learn', 'to learn'],
                layout: 'horizontal',
              },
            ],
          },
          {
            id: 5,
            fields: [
              {
                type: 'staticText',
                value: "Now, class. I'd like you all to write ...... a description of your last holiday.",
              },
              {
                type: 'newLine',
              },
              {
                type: 'radio',
                value: 'me',
                options: ['me', 'to me', 'it me', 'about me'],
                layout: 'horizontal',
              },
            ],
          },
          {
            id: 6,
            fields: [
              {
                type: 'staticText',
                value: 'When you arrive ...... have your passport ready.',
              },
              {
                type: 'newLine',
              },
              {
                type: 'radio',
                value: 'at the airport',
                options: ['to the airport', 'in the airport', 'on the airport', 'at the airport'],
                layout: 'horizontal',
              },
            ],
          },
          {
            id: 7,
            fields: [
              {
                type: 'staticText',
                value: 'The Joneses have invited us ...... to Australia with them this summer.',
              },
              {
                type: 'newLine',
              },
              {
                type: 'radio',
                value: 'to go',
                options: ['going', 'for going', 'about going', 'to go'],
                layout: 'horizontal',
              },
            ],
          },
          {
            id: 8,
            fields: [
              {
                type: 'staticText',
                value: 'The in-flight entertainment may differ ...... that advertised.',
              },
              {
                type: 'newLine',
              },
              {
                type: 'radio',
                value: 'from',
                options: ['to', 'from', 'in', 'at'],
                layout: 'horizontal',
              },
            ],
          },
        ],
      },
      {
        id: 'G',
        name: 'Find the extra word in each tine',
        layout: 'orderedList',
        title: 'The cancelled trip',
        items: [
          {
            id: 1,
            fields: [
              {
                type: 'openText',
                value: 'be',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: ' Oh, let me tell you about our trip. Did you know that Sara is afraid of be',
              },
            ],
          },
          {
            id: 2,
            fields: [
              {
                type: 'openText',
                value: 'it',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: ' flying? We had arranged it with her family to go to France for a few days.',
              },
            ],
          },
          {
            id: 3,
            fields: [
              {
                type: 'openText',
                value: 'in',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: ' I have always wanted to see Paris and would love to live in there one day.',
              },
            ],
          },
          {
            id: 4,
            fields: [
              {
                type: 'openText',
                value: 'being',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: ' Well, we got to the airport and Sara appeared being nervous. I asked her if',
              },
            ],
          },
          {
            id: 5,
            fields: [
              {
                type: 'openText',
                value: 'to',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: ' she was okay and she said she was fine, so we continued on to our way.',
              },
            ],
          },
          {
            id: 6,
            fields: [
              {
                type: 'openText',
                value: 'so',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: " We went through passport control and I could see so that Sara wasn't",
              },
            ],
          },
          {
            id: 7,
            fields: [
              {
                type: 'openText',
                value: 'it',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: " keen on going any further. Just then, a voice announced: 'We regret it to",
              },
            ],
          },
          {
            id: 8,
            fields: [
              {
                type: 'openText',
                value: 'been',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: " inform passengers that Flight 114 to France is been cancelled.' That was",
              },
            ],
          },
          {
            id: 9,
            fields: [
              {
                type: 'openText',
                value: 'of',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: ' our flight! Sarah said she was glad because of she was too frightened to',
              },
            ],
          },
          {
            id: 10,
            fields: [
              {
                type: 'openText',
                value: 'to',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: ' fly anyway! So, we all went to home. That was the end of that trip!',
              },
            ],
          },
        ],
      },
      {
        id: 'H',
        name: 'Use the word given in capitals at the end of each line to form a word that fits in the gap in the same line.',
        title: 'Word formation',
        layout: 'grid',
        layoutColumns: 2,
        items: [
          {
            id: 1,
            fields: [
              {
                type: 'staticText',
                value: "It's not always easy being a ",
              },
              {
                type: 'openText',
                value: 'tourist',
                label: '(1)',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: ' You spend half your',
              },
            ],
          },
          {
            id: 'A',
            fields: [
              {
                type: 'staticText',
                value: 'TOUR',
                bold: true,
              },
            ],
          },
          {
            id: 2,
            fields: [
              {
                type: 'staticText',
                value: 'time making ',
              },
              {
                type: 'openText',
                value: 'arrangements',
                label: '(2)',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: ' for your holiday and the other half',
              },
            ],
          },
          {
            id: 'B',
            fields: [
              {
                type: 'staticText',
                value: 'ARRANGE',
                bold: true,
              },
            ],
          },
          {
            id: 3,
            fields: [
              {
                type: 'staticText',
                value: 'worrying about sticking to the ',
              },
              {
                type: 'openText',
                value: 'timetable',
                label: '(3)',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: " I think it's relaxing",
              },
            ],
          },
          {
            id: 'C',
            fields: [
              {
                type: 'staticText',
                value: 'TIME',
                bold: true,
              },
            ],
          },
          {
            id: 4,
            fields: [
              {
                type: 'staticText',
                value: 'sometimes to spend a holiday at home. There are no ',
              },
              {
                type: 'openText',
                value: 'cultural',
                label: '(4)',
                style: { width: '200px' },
              },
            ],
          },
          {
            id: 'D',
            fields: [
              {
                type: 'staticText',
                value: 'CULTURE',
                bold: true,
              },
            ],
          },
          {
            id: 5,
            fields: [
              {
                type: 'staticText',
                value: "problems, you don't need someone to be the ",
              },
              {
                type: 'openText',
                value: 'photographer',
                label: '(5)',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: ' and',
              },
            ],
          },
          {
            id: 'E',
            fields: [
              {
                type: 'staticText',
                value: 'PHOTOGRAPH',
                bold: true,
              },
            ],
          },
          {
            id: 6,
            fields: [
              {
                type: 'staticText',
                value: 'you know that the local ',
              },
              {
                type: 'openText',
                value: 'inhabitants',
                label: '(6)',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: ' are always friendly!',
              },
            ],
          },
          {
            id: 'F',
            fields: [
              {
                type: 'staticText',
                value: 'INHABIT',
                bold: true,
              },
            ],
          },
        ],
      },
      {
        id: 'I',
        name: 'Complete the sentences by changing the form of the word in capitals when this is necessary',
        layout: 'orderedList',
        items: [
          {
            id: 1,
            fields: [
              {
                type: 'staticText',
                value: "Beijing has changed so much in the last few years that it's almost ",
              },
              {
                type: 'openText',
                value: 'unrecognisable',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: ' (RECOGNISE)',
                bold: true,
              },
              {
                type: 'staticText',
                value: '.',
              },
            ],
          },
          {
            id: 2,
            fields: [
              {
                type: 'staticText',
                value: 'The number of cars ',
              },
              {
                type: 'openText',
                value: 'worldwide',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: ' (WORLD)',
                bold: true,
              },
              {
                type: 'staticText',
                value: ' is about a billion and is increasing all the time.',
              },
            ],
          },
          {
            id: 3,
            fields: [
              {
                type: 'staticText',
                value: 'The new maglev trains run on a completely ',
              },
              {
                type: 'openText',
                value: 'different',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: ' (DIFFER)',
                bold: true,
              },
              {
                type: 'staticText',
                value: ' system from ordinary trains. ',
              },
            ],
          },
          {
            id: 4,
            fields: [
              {
                type: 'staticText',
                value: 'Living in a foreign country really does ',
              },
              {
                type: 'openText',
                value: 'broaden',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: ' (BROAD)',
                bold: true,
              },
              {
                type: 'staticText',
                value: ' your horizons.',
              },
            ],
          },
          {
            id: 5,
            fields: [
              {
                type: 'staticText',
                value: "I can't find a ",
              },
              {
                type: 'openText',
                value: 'direct',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: ' (DIRECT)',
                bold: true,
              },
              {
                type: 'staticText',
                value: " flight from London to Delhi so I've booked one that changes in Frankfurt.",
              },
            ],
          },
          {
            id: 6,
            fields: [
              {
                type: 'staticText',
                value: 'All passengers must complete a visa form upon ',
              },
              {
                type: 'openText',
                value: 'arrival',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: ' (ARRIVE)',
                bold: true,
              },
              {
                type: 'staticText',
                value: ' at Singapore airport.',
              },
            ],
          },
          {
            id: 7,
            fields: [
              {
                type: 'staticText',
                value: 'You can still see old milestones by the side of the road in England, showing the ',
              },
              {
                type: 'openText',
                value: 'distance',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: ' (DISTANT)',
                bold: true,
              },
              {
                type: 'staticText',
                value: ' to the nearest town.',
              },
            ],
          },
          {
            id: 8,
            fields: [
              {
                type: 'staticText',
                value: 'The Museum of Transport has a full-sized jet plane next to the ',
              },
              {
                type: 'openText',
                value: 'entrance',
                style: { width: '200px' },
              },
              {
                type: 'staticText',
                value: ' (ENTER)',
                bold: true,
              },
              {
                type: 'staticText',
                value: '.',
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
