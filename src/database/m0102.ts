import { compilerService } from '../services';

const { compile } = compilerService;

const cource = {
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
            fields: compile(`You need a passport to cross the ...... between Mexico and the United States.
            radio("border";["edge","line","border","rim"])`),
          },
          {
            id: 2,
            fields: compile(`The hotel where we are ...... is quite luxurious.
            radio("staying";["living","remaining","existing","staying"])`),
          },
          {
            id: 3,
            fields: compile(`When you ......	your destination, your tour guide will meet you at the airport.
            radio("reach";["arrive","get","reach","achieve"])`),
          },
          {
            id: 4,
            fields: compile(`It can be quite busy here during the tourist .......
            radio("season";["season","period","phase","stage"])`),
          },
          {
            id: 5,
            fields: compile(`David ...... me to the train station every morning.
            radio("takes";["goes","takes","has","makes"])`),
          },
          {
            id: 6,
            fields: compile(`I always enjoy our school ...... to Ukraine.
            radio("trip";["excursion","journey","trip","travel"])`),
          },
          {
            id: 7,
            fields: compile(`Hurry up. or we'll ...... the bus!
            radio("miss";["avoid","miss","drop","lose"])`),
          },
          {
            id: 8,
            fields: compile(`The brochure says that the hotel has a great ...... of the sea.
            radio("view";["appearance","look","sight","view"])`),
          },
          {
            id: 9,
            fields: compile(`I must remember to ...... a souvenir back from Spain for my grandmother.
            radio("bring";["go","take","bring","keep"])`),
          },
          {
            id: 10,
            fields: compile(`The ...... from London to Berlin is about 919 kilometres.
            radio("distance";["measure","length","gap","distance"])`),
          },
          {
            id: 11,
            fields: compile(`Make sure you ...... a hotel before you come to our island, especially in the summer.
            radio("book";["book","keep","put","take"])`),
          },
          {
            id: 12,
            fields: compile(`I live in Barcelona, but my ...... town Is Madrid.
            radio("home";["birth","home","native","origin"])`),
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
            fields: compile(`I hope to go on a trip round the select("world";["world","earth"])`),
          },
          {
            id: 2,
            fields: compile(`You learn a lot about the local select("area";["territory","area"]) by speaking to local people.`),
          },
          {
            id: 3,
            fields: compile(`It's good to have someone to select("guide";["lead","guide"]) you when you are on holiday.`),
          },
          {
            id: 4,
            fields: compile(`I get the train to work every day and the select("fare";["fare","fee"]) is quite expensive.`),
          },
          {
            id: 5,
            fields: compile(`Captain Cook discovered Australia on a select("voyage";["voyage","travel"]) to the Pacific.`),
          },
          {
            id: 6,
            fields: compile(`Most tourist attractions in London charge an admission select("fee";["fee","ticket"]).`),
          },
          {
            id: 7,
            fields: compile(`The sunset over Niagara Falls really is a magnificent select("sight";["look","sight"]).`),
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
            fields: compile(`Let's go to the airport to textbox("see";true) Grandpa off when he flies back home.`),
          },
          {
            id: 2,
            fields: compile(`If it starts to rain, textbox("make";true) for a nearby cave to wait for it to pass.`),
          },
          {
            id: 3,
            fields: compile(`We would like to remind all guests that they must textbox("check";true) out before midday.`),
          },
          {
            id: 4,
            fields: compile(`Please textbox("pull";true) in and stop so that I can buy something to drink.`),
          },
          {
            id: 5,
            fields: compile(`Every Saturday night my dad textbox("picks";true) us up outside the cinema.`),
          },
          {
            id: 6,
            fields: compile(`I think the neighbours have textbox("gone";true) away for the weekend.`),
          },
          {
            id: 7,
            fields: compile(`John's up ahead so Greg is pedalling fast to textbox("catch";true) up with him.`),
          },
          {
            id: 8,
            fields: compile(`We're going on holiday tomorrow, but we'll call you when we textbox("get";true) back.`),
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
            fields: compile(`We can *start our journey* textbox("set out") towards the mountains at dawn.`),
          },
          {
            id: 2,
            fields: compile(`Dad fetched the luggage while Mum *registered* textbox("checked in") at the hotel.`),
          },
          {
            id: 3,
            fields: compile(`I asked the taxi driver *to let me get out* textbox("to catch up") outside the train station.`),
          },
          {
            id: 4,
            fields: compile(`Oh, no! I've forgotten my passport! We'll have *to go back* textbox("to turn round") and get it!`),
          },
          {
            id: 5,
            fields: compile(`The most exciting moment is when the plane *leaves the ground* textbox("takes off").`),
          },
          {
            id: 6,
            fields: compile(`Stop the car! I think we've *hit* textbox("run over") a dog.`),
          },
          {
            id: 7,
            fields: compile(`I don't think a horse can ever *stay at the same speed as* textbox("keeps up with") a car.`),
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
            fields: compile(`The speed textbox("limit") in towns is 30 km/h and you shouldn't go faster than that.`),
          },
          {
            id: 2,
            fields: compile(`Why don't we textbox("take") the scenic route along the coast?`),
          },
          {
            id: 3,
            fields: compile(`If you buy your plane ticket textbox("in") advance, it's often cheaper than if you wait.`),
          },
          {
            id: 4,
            fields: compile(`I can't remember the name of the hotel we stayed at off the textbox("top") of my head.`),
          },
          {
            id: 5,
            fields: compile(`I'm sorry I'm late! I textbox("lost") my way and had to ask for directions.`),
          },
          {
            id: 6,
            fields: compile(`My mum's away in Germany on a business textbox("trip") at the moment.`),
          },
          {
            id: 7,
            fields: compile(`The bank? Well, turn left here, then go textbox("straight") ahead for a kilometre and it's on the left.`),
          },
          {
            id: 8,
            fields: compile(`If you look on your left-hand textbox("side") as we turn this corner, you'll see Big Ben.`),
          },
          {
            id: 9,
            fields: compile(`I'll look round the shops in the morning and then textbox("go") sightseeing in the afternoon.`),
          },
          {
            id: 10,
            fields: compile(`My grandma hasn't driven since she textbox("had") an accident last year.`),
          },
          {
            id: 11,
            fields: compile(`I love visiting foreign places, textbox("seeing") the sights and learning about other cultures.`),
          },
          {
            id: 12,
            fields: compile(`During the 70s, many British people started to go textbox("on") holiday to Spain.`),
          },
          {
            id: 13,
            fields: compile(`While you're in London, you should take a tour textbox(["around","of"]) the Houses of Parliament.`),
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
            fields: compile(`I've always dreamt ...... China.
            radio("of visiting";["to visit","of visiting","I visit","visit"];true)`),
          },
          {
            id: 2,
            fields: compile(`The travel agency is arranging for us ...... at a really nice hotel.
            radio("to stay";["stay","of staying","to stay","staying"];true)`),
          },
          {
            id: 3,
            fields: compile(`My dad says he always regrets ...... more.
            radio("not travelling";["to not travel","not travelling","he not travel","of not travelling"];true)`),
          },
          {
            id: 4,
            fields: compile(`John seems keen ...... how to drive as soon as he can.
            radio("to learn";["of learning","he learn","for learn","to learn"];true)`),
          },
          {
            id: 5,
            fields: compile(`Now, class. I'd like you all to write ...... a description of your last holiday.
            radio("me";["me","to me","it me","about me"];true)`),
          },
          {
            id: 6,
            fields: compile(`When you arrive ...... have your passport ready.
            radio("at the airport";["to the airport","in the airport","on the airport","at the airport"];true)`),
          },
          {
            id: 7,
            fields: compile(`The Joneses have invited us ...... to Australia with them this summer.
            radio("to go";["going","for going","about going","to go"];true)`),
          },
          {
            id: 8,
            fields: compile(`The in-flight entertainment may differ ...... that advertised.
            radio("from";["to","from","in","at"];true)`),
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
            fields: compile(`textbox("be") Oh, let me tell you about our trip. Did you know that Sara is afraid of be`),
          },
          {
            id: 2,
            fields: compile(`textbox("it") flying? We had arranged it with her family to go to France for a few days.`),
          },
          {
            id: 3,
            fields: compile(`textbox("in") I have always wanted to see Paris and would love to live in there one day.`),
          },
          {
            id: 4,
            fields: compile(`textbox("being") Well, we got to the airport and Sara appeared being nervous. I asked her if`),
          },
          {
            id: 5,
            fields: compile(`textbox("to") she was okay and she said she was fine, so we continued on to our way.`),
          },
          {
            id: 6,
            fields: compile(`textbox("so") We went through passport control and I could see so that Sara wasn't`),
          },
          {
            id: 7,
            fields: compile(`textbox("it") keen on going any further. Just then, a voice announced: 'We regret it to`),
          },
          {
            id: 8,
            fields: compile(`textbox("been") inform passengers that Flight 114 to France is been cancelled.' That was`),
          },
          {
            id: 9,
            fields: compile(`textbox("of") our flight! Sarah said she was glad because of she was too frightened to`),
          },
          {
            id: 10,
            fields: compile(`textbox("to") fly anyway! So, we all went to home. That was the end of that trip!`),
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
            fields: compile(`It's not always easy being a textbox("(1)";"tourist") You spend half your`),
          },
          {
            id: 'A',
            fields: compile(`**TOUR**`),
          },
          {
            id: 2,
            fields: compile(`time making textbox("(2)";"arrangements") for your holiday and the other half`),
          },
          {
            id: 'B',
            fields: compile(`**ARRANGE**`),
          },
          {
            id: 3,
            fields: compile(`worrying about sticking to the textbox("(3)";"timetable") I think it's relaxing`),
          },
          {
            id: 'C',
            fields: compile(`**TIME**`),
          },
          {
            id: 4,
            fields: compile(`sometimes to spend a holiday at home. There are no textbox("(4)";"cultural")`),
          },
          {
            id: 'D',
            fields: compile(`**CULTURE**`),
          },
          {
            id: 5,
            fields: compile(`problems, you don't need someone to be the textbox("(5)";"photographer") and`),
          },
          {
            id: 'E',
            fields: compile(`**PHOTOGRAPH**`),
          },
          {
            id: 6,
            fields: compile(`you know that the local textbox("(6)";"inhabitants") are always friendly!`),
          },
          {
            id: 'F',
            fields: compile(`**INHABIT**`),
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
            fields: compile(
              `Beijing has changed so much in the last few years that it's almost textbox("unrecognisable") **(RECOGNISE)**.`,
            ),
          },
          {
            id: 2,
            fields: compile(`The number of cars textbox("worldwide") **(WORLD)** is about a billion and is increasing all the time.`),
          },
          {
            id: 3,
            fields: compile(`The new maglev trains run on a completely textbox("different") **(DIFFER)** system from ordinary trains.`),
          },
          {
            id: 4,
            fields: compile(`Living in a foreign country really does textbox("broaden") **(BROAD)** your horizons.`),
          },
          {
            id: 5,
            fields: compile(
              `I can't find a textbox("direct") **(DIRECT)** flight from London to Delhi so I've booked one that changes in Frankfurt.`,
            ),
          },
          {
            id: 6,
            fields: compile(`All passengers must complete a visa form upon textbox("arrival") **(ARRIVE)** at Singapore airport.`),
          },
          {
            id: 7,
            fields: compile(
              `You can still see old milestones by the side of the road in England, showing the textbox("distance") **(DISTANT)** to the nearest town.`,
            ),
          },
          {
            id: 8,
            fields: compile(`The Museum of Transport has a full-sized jet plane next to the textbox("entrance") **(ENTER)**.`),
          },
        ],
      },
    ],
  }),
};

export default cource;
