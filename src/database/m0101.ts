import { compilerService } from '../services';

const { compile } = compilerService;

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
            fields: compile(`Elizabeth select("usually goes";["usually goes","is usually going"]) to bed at around eleven o'clock.`),
          },
          {
            id: 2,
            fields: compile(`Dan select("is talking";["talks","is talking"]) on the other phone right now.`),
          },
          {
            id: 3,
            fields: compile(`We select("aren't eating";["don't eat","aren't eating"]) any meat at the moment as we're both on a diet.`),
          },
          {
            id: 4,
            fields: compile(`select("Is air travel getting";["Does air travel get","Is air travel getting"]) increasingly safe?`),
          },
          {
            id: 5,
            fields: compile(`My mum select("calls";["calls","is calling"]) me every weekend without fail.`),
          },
          {
            id: 6,
            fields: compile(
              `How much select("do babysitters generally earn";["do babysitters generally earn","are babysitters generally earning"])?`,
            ),
          },
          {
            id: 7,
            fields: compile(
              `select("You're always coming";["You always come","You're always coming"]) up with excuses for not having done your homework. It's so annoying!`,
            ),
          },
          {
            id: 8,
            fields: compile(
              `select("I don't go";["I don't go","I'm not going"]) out much during the week, but select("I always try";["I always try","I'm always trying"]) to go out somewhere on Saturday night.`,
            ),
          },
          {
            id: 9,
            fields: compile(`No, the train select("does stop";["does stop","is stopping"]) at Cirencester on Saturdays.`),
          },
          {
            id: 10,
            fields: compile(`My mum select("takes";["takes","is taking"]) part in ice-skating competitions almost every weekend.`),
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
            fields: compile(`My dad **is often getting up** late on Saturday mornings.
            textbox("often gets up")`),
          },
          {
            id: 2,
            fields: compile(`**Are you speaking** any other languages apart from English?
            textbox("Do you speak")`),
          },
          {
            id: 3,
            fields: compile(`**I already buy** all my Christmas presents and it's only October!
            textbox("I've already bought")`),
          },
          {
            id: 4,
            fields: compile(`It's the first time **I'm ever having** a party at home.
            textbox("I've ever had")`),
          },
          {
            id: 5,
            fields: compile(`Actually, I think Daren **does works** quite hard sometimes.
            textbox(["works","does work"])`),
          },
          {
            id: 6,
            fields: compile(`Carlo **is never eating** Chinese food before.
            textbox("has never eaten")`),
          },
          {
            id: 7,
            fields: compile(`Sean **already books** a table for tonight.
            textbox(["has already booked","'s already booked"])`),
          },
          {
            id: 8,
            fields: compile(`**Needs Melanie** any help painting her new flat?
            textbox("Does Melanie need")`),
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
            fields: compile(`It's the first time textbox("I've ever eaten") **(I / ever / eat)** octopus!`),
          },
          {
            id: 2,
            fields: compile(`Sandy textbox("hasn't seen") **(not / see)** his sister since she went to university.`),
          },
          {
            id: 3,
            fields: compile(`They textbox("have gone") **(go)** on holiday to Spain and won't be back until the end of the month.`),
          },
          {
            id: 4,
            fields: compile(
              `Poor Marusya! She textbox("has been writing") **(write)** that essay for hours now and she still hasn't finished!`,
            ),
          },
          {
            id: 5,
            fields: compile(`textbox("Have you ever met") **(you / ever / meet)** anyone famous?`),
          },
          {
            id: 6,
            fields: compile(
              `textbox("I've been trying") **(I / try)** to get in touch with Jenny all morning, but I can't find her anywhere.`,
            ),
          },
          {
            id: 7,
            fields: compile(`textbox("I haven't finished") **(I / not finish)** the book yet so I can't tell you what happens.`),
          },
          {
            id: 8,
            fields: compile(`textbox("Have you already decided") **(you / already / decide)** where you're going this summer?`),
          },
          {
            id: 9,
            fields: compile(`textbox(["We've lived","We've been living"]) **(We / live)** here for the last six years.`),
          },
          {
            id: 10,
            fields: compile(`textbox("I've never heard") **(I / never / hear)** such nonsense!`),
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
            fields: compile(`Have you select("ever") dreamt of winning the lotter?`),
          },
          {
            id: 2,
            fields: compile(`I haven't worked out how to set the timmer on the video select("yet").`),
          },
          {
            id: 3,
            fields: compile(`My dad's lived in the same house select("since") he was born.`),
          },
          {
            id: 4,
            fields: compile(`The film's only been on select("for") a couple of minutes.`),
          },
          {
            id: 5,
            fields: compile(`Bruce has knocked three men out of the competition select("so") far.`),
          },
          {
            id: 6,
            fields: compile(`I select("rarely") get the chance to get any exercise - I'm just too busy.`),
          },
          {
            id: 7,
            fields: compile(`He's only select("just") got home.`),
          },
          {
            id: 8,
            fields: compile(`It's eleven o'clock and Todd select("still") hasn't come home. Where could he be?`),
          },
          {
            id: 9,
            fields: compile(`I've never met Ruth select("before"). What's she like?`),
          },
          {
            id: 10,
            fields: compile(`Have you finished select("already")? That was quick!`),
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
            fields: compile(`Ian ...... a shower at the moment, so could you call back in about half an hour?
            radio("is taking";["takes","is taking","has taken","has been taking"])`),
          },
          {
            id: 2,
            fields: compile(`...... to Ipswich before?
            radio("Have you ever been";["Do you ever go","Are you ever going","Have you ever been","Have you ever been going"])`),
          },
          {
            id: 3,
            fields: compile(`I ...... to all the local newspapers and TV stations to complain.
            radio("have already written";["already write","already writing","have already written","have already been writing"])`),
          },
          {
            id: 4,
            fields: compile(`...... TV for the last four hours? Turn it off and get some exercise!
            radio("Have you been watching";["Do you watch","Are you watching","Watched you","Have you been watching"])`),
          },
          {
            id: 5,
            fields: compile(`Edik, ...... hockey competitively or just for fun?
            radio("do you usually play";["do you usually play","are you usually playing","have you usually played","have you usually been playing"])`),
          },
          {
            id: 6,
            fields: compile(`That's the first time ...... an answer right today!
            radio("I have got";["I get","I am getting","I have got","I have been getting"])`),
          },
          {
            id: 7,
            fields: compile(`Jessica has ...... left, i'm afraid.
            radio("already";["already","yet","still","so far"])`),
          },
          {
            id: 8,
            fields: compile(`Dan ...... in the living room while we redecorate his bedroom.
            radio("is sleeping";["sleeps","is sleeping","has slept","does sleep"])`),
          },
          {
            id: 9,
            fields: compile(`Unfortunately, Simone ...... a day off very often.
            radio("doesn't get";["doesn't get","isn't getting","hasn't got","hasn't been getting"])`),
          },
          {
            id: 10,
            fields: compile(`Actually, I ...... a cup of tea first thing every morning, but then I switch to coffee.
            radio("do drink";["do drink","am drinking","have drunk","have been drinking"])`),
          },
        ],
      },
      {
        id: 'F',
        name: 'Complete using the correct form of the words in the box',
        layout: 'article',
        title: 'The City of Omsk',
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
            fields: compile(
              `Everyone textbox("(1)";"knows";true) about the stunning sights to see in Moscow and St. Petersburg. The beautiful city of Omsk, one of the oldest cities in western Siberia, ` +
                `textbox("(2)";"is";true) not so well-known. Unfortunately, the 2700 km journey from Moscow just ` +
                `textbox("(3)";["looks","seems"];true) too far for many travellers to Russia. For those who ` +
                `textbox("(4)";"do";true) travel there, however, there are a number of interesting things to see and do. These ` +
                `textbox("(5)";"include";true) visiting the Tobolskie and Tarskie Gates, which were the first stone buildings in Omsk, the Museum of Local Lore and the modern shops on Lyubinsky Avenue.When you ` +
                `textbox("(6)";"see";true) Krestovozdvizhensky Cathedral lit up in the moonlight, you ` +
                `textbox("(7)";"understand";true) why it's worth making the effort to come here.`,
            ),
          },
          {
            id: 2,
            fields: compile(
              `Few historians textbox("(8)";"disagree";true) with Omsk's historical importance - it was even the capital of Russia for a short period at the beginning of the 20-th century. As travelling across Russia becomes easier, it ` +
                `textbox("(9)";["looks","seems"];true) like Omsk may also have a bright future - as a popular destination for tourists.`,
            ),
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
            fields: compile(`**1.** I think select("B")`),
            // {
            //   type: 'staticText',
            //   value: '1.',
            //   bold: true,
            //   style: { marginRight: '24px' },
            // },
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
            fields: compile(`**2.** I'm thinking select("F")`),
            // {
            //   type: 'staticText',
            //   value: '2.',
            //   bold: true,
            //   style: { marginRight: '24px' },
            // },
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
            fields: compile(`**3.** Phil's looking select("D")`),
            // {
            //   type: 'staticText',
            //   value: '3.',
            //   bold: true,
            //   style: { marginRight: '24px' },
            // },
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
            fields: compile(`**4.** Phil looks select("H")`),
            // {
            //   type: 'staticText',
            //   value: '4.',
            //   bold: true,
            //   style: { marginRight: '24px' },
            // },
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
            fields: compile(`**5.** Claire has select("A")`),
            // {
            //   type: 'staticText',
            //   value: '5.',
            //   bold: true,
            //   style: { marginRight: '24px' },
            // },
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
            fields: compile(`**6.** Claire is having select("C")`),
            // {
            //   type: 'staticText',
            //   value: '6.',
            //   bold: true,
            //   style: { marginRight: '24px' },
            // },
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
            fields: compile(`**7.** Andy is select("E")`),
            // {
            //   type: 'staticText',
            //   value: '7.',
            //   bold: true,
            //   style: { marginRight: '24px' },
            // },
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
            fields: compile(`**8.** Andy is being select("G")`),
            // {
            //   type: 'staticText',
            //   value: '8.',
            //   bold: true,
            //   style: { marginRight: '24px' },
            // },
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
            fields: compile(`textbox("to") I've been to travelling round Europe all summer. It's the first time I've`),
          },
          {
            id: 2,
            fields: compile(`textbox("going") ever been going abroad, and I've had a fantastic time! I've seen`),
          },
          {
            id: 3,
            fields: compile(`textbox("to") loads of interesting places and I have to also made loads of new friends.`),
          },
          {
            id: 4,
            fields: compile(`textbox("been") I've been decided to stay in touch with them now I'm back. One of`),
          },
          {
            id: 5,
            fields: compile(`textbox("making") them, Giselle, is French. She was making on holiday too. We now send`),
          },
          {
            id: 6,
            fields: compile(`textbox("are") text messages are to each other all the time. They're usually in English`),
          },
          {
            id: 7,
            fields: compile(`textbox("have") because my French isn't very good! I'm planning to have visit her in`),
          },
          {
            id: 8,
            fields: compile(`textbox("am") France next year sometime. I hope I can. I am love meeting people from`),
          },
          {
            id: 9,
            fields: compile(`textbox("had") other countries! I want to have had lots of friends from all over the world!`),
          },
          {
            id: 10,
            fields: compile(`textbox("is") Travelling certainly broadens the mind, but it also is broadens your circle of friends!`),
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
            fields: compile(
              `\`You've textbox("(1)";"been") looking at that timetable for the last ten minutes. It can't be that confusing!\` said Sheila angrily.`,
            ),
          },
          {
            id: 2,
            fields: compile(
              `\`I textbox("(2)";["do","really"]) wish you'd be quiet! I've textbox("(3)";"got") splitting headache thanks to you!\` replied Matt.`,
            ),
          },
          {
            id: 3,
            fields: compile(
              `\`Mum! Dad! Please!\` said Alison. \`You're both textbox("(4)";"being") very silly. textbox("(5)";"There") is no point at all in blaming each other. That's not going to help us find out what time the next train to Budapest is due to leave.\``,
            ),
          },
          {
            id: 4,
            fields: compile(`\`You textbox("(6)";"are") quite right, darling. I textbox("(7)";"am") sorry,\` said Sheila.`),
          },
          {
            id: 5,
            fields: compile(
              `\`Me too,\` mumbled Matt. \`Now, let's have another look at this timetable. Well, it textbox("(8)";["looks","seems"]) like we textbox("(9)";"have")  definitely missed the last train today. That was the 18.20 we just missed, wasn't it?\``,
            ),
          },
          {
            id: 6,
            fields: compile(
              `\`I textbox("(10)";"think") so,\` said Sheila. \`I mean, it did leave at 18.20. Whether it's actually going to Budapest or not is another question.\``,
            ),
          },
          {
            id: 7,
            fields: compile(`\`Well, one thing is textbox("(11)";"not") in doubt,\` said Matt.
            \`What's that?\` asked Sheila and Alison together.`),
          },
          {
            id: 8,
            fields:
              compile(`\`This is the worst holiday we've textbox("(12)";"ever") been on,\` said Matt. \`Next year, we're going to try something far less adventurous.\`
            \`Agreed!\` said Sheila and Alison.`),
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
            fields: compile(`What's the price of the tickets, Jimmy? **much**
            How textbox(["much do the tickets cost","much are the tickets"]) Jimmy?`),
          },
          {
            id: 2,
            fields: compile(`Are these your trainers? **to**
            Do textbox("these trainers belong to") you?`),
          },
          {
            id: 3,
            fields: compile(`Sasha's not keen on team sports at all. **like**
            Sasha textbox(["does not like","doesn't like"]) team sports at all.`),
          },
          {
            id: 4,
            fields: compile(`It's only her second time in a recording studio. **been**
            She textbox("has only been") in a recording studio once before.`),
          },
          {
            id: 5,
            fields: compile(`We got here three hours ago. **have**
            We textbox(["have been here","have been here for"]) three hours.`),
          },
          {
            id: 6,
            fields: compile(`I started writing this hours ago and it's still not right. **writing**
            I textbox("have been writing this for") hours and it's still not right.`),
          },
          {
            id: 7,
            fields: compile(`This is my first experience of flying alone. **time**
            It is the first textbox("time I have flown") alone.`),
          },
          {
            id: 8,
            fields: compile(`Sharon's in the bath at the moment. **a**
            Sharon textbox("is having a bath") at the moment.`),
          },
          {
            id: 9,
            fields: compile(`Paul enjoys surprises apart from on his birthday. **does**
            Paul textbox("does enjoy") surprises, just not on his birthday!`),
          },
        ],
      },
    ],
  }),
};

export default cource;
