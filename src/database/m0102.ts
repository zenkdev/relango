import { compilerService } from '../services';

const tests = compilerService.compile(`
---
- id: A
  name: Choose the correct answer.
  title: Topic vocabulary in contrast
  layout: list
  layoutColumns: 2
  items:
    - |
      You need a passport to cross the ...... between Mexico and the United States.
      radio("border";["edge","line","border","rim"])
    - |
      The hotel where we are ...... is quite luxurious.
      radio("staying";["living","remaining","existing","staying"])
    - |
      When you ......	your destination, your tour guide will meet you at the airport.
      radio("reach";["arrive","get","reach","achieve"])
    - |
      It can be quite busy here during the tourist .......
      radio("season";["season","period","phase","stage"])
    - |
      David ...... me to the train station every morning.
      radio("takes";["goes","takes","has","makes"])
    - |
      I always enjoy our school ...... to Ukraine.
      radio("trip";["excursion","journey","trip","travel"])
    - |
      Hurry up. or we'll ...... the bus!
      radio("miss";["avoid","miss","drop","lose"])
    - |
      The brochure says that the hotel has a great ...... of the sea.
      radio("view";["appearance","look","sight","view"])
    - |
      I must remember to ...... a souvenir back from Spain for my grandmother.
      radio("bring";["go","take","bring","keep"])
    - |
      The ...... from London to Berlin is about 919 kilometres.
      radio("distance";["measure","length","gap","distance"])
    - |
      Make sure you ...... a hotel before you come to our island, especially in the summer.
      radio("book";["book","keep","put","take"])
    - |
      I live in Barcelona, but my ...... town Is Madrid.
      radio("home";["birth","home","native","origin"])
- id: B
  name: Circle the correct word.
  layout: list
  items:
    - I hope to go on a trip round the select("world";["world","earth"])
    - You learn a lot about the local select("area";["territory","area"]) by speaking to local people.
    - It's good to have someone to select("guide";["lead","guide"]) you when you are on holiday.
    - I get the train to work every day and the select("fare";["fare","fee"]) is quite expensive.
    - Captain Cook discovered Australia on a select("voyage";["voyage","travel"]) to the Pacific.
    - Most tourist attractions in London charge an admission select("fee";["fee","ticket"]).
    - The sunset over Niagara Falls really is a magnificent select("sight";["look","sight"]).
- id: C
  name: Complete using the correct form of the words in the box.
  title: Phrasal verbs
  layout: list
  commonOptions:
    - catch
    - check
    - get
    - text: go
      value: gone
    - make
    - text: pick
      value: picks
    - pull
    - see
  items:
    - Let's go to the airport to textbox("see";true) Grandpa off when he flies back home.
    - If it starts to rain, textbox("make";true) for a nearby cave to wait for it to pass.
    - We would like to remind all guests that they must textbox("check";true) out before midday.
    - Please textbox("pull";true) in and stop so that I can buy something to drink.
    - Every Saturday night my dad textbox("picks";true) us up outside the cinema.
    - I think the neighbours have textbox("gone";true) away for the weekend.
    - John's up ahead so Greg is pedalling fast to textbox("catch";true) up with him.
    - We're going on holiday tomorrow, but we'll call you when we textbox("get";true) back.
- id: D
  name: Write a phrasal verb in the correct form to replace the words in italics. Add any other words you need.
  layout: list
  items:
    - We can *start our journey* textbox("set out") towards the mountains at dawn.
    - Dad fetched the luggage while Mum *registered* textbox("checked in") at the hotel.
    - I asked the taxi driver *to let me get out* textbox("to catch up") outside the train station.
    - Oh, no! I've forgotten my passport! We'll have *to go back* textbox("to turn round") and get it!
    - The most exciting moment is when the plane *leaves the ground* textbox("takes off").
    - Stop the car! I think we've *hit* textbox("run over") a dog.
    - I don't think a horse can ever *stay at the same speed as* textbox("keeps up with") a car.
- id: E
  name: Write one word in each gap.
  title: Phrases and collocations
  layout: list
  items:
    - The speed textbox("limit") in towns is 30 km/h and you shouldn't go faster than that.
    - Why don't we textbox("take") the scenic route along the coast?
    - If you buy your plane ticket textbox("in") advance, it's often cheaper than if you wait.
    - I can't remember the name of the hotel we stayed at off the textbox("top") of my head.
    - I'm sorry I'm late! I textbox("lost") my way and had to ask for directions.
    - My mum's away in Germany on a business textbox("trip") at the moment.
    - The bank? Well, turn left here, then go textbox("straight") ahead for a kilometre and it's on the left.
    - If you look on your left-hand textbox("side") as we turn this corner, you'll see Big Ben.
    - I'll look round the shops in the morning and then textbox("go") sightseeing in the afternoon.
    - My grandma hasn't driven since she textbox("had") an accident last year.
    - I love visiting foreign places, textbox("seeing") the sights and learning about other cultures.
    - During the 70s, many British people started to go textbox("on") holiday to Spain.
    - While you're in London, you should take a tour textbox(["around","of"]) the Houses of Parliament.
- id: F
  name: Choose the correct answer.
  title: Word patterns
  layout: list
  items:
    - |
      I've always dreamt ...... China.
      radio("of visiting";["to visit","of visiting","I visit","visit"])
    - |
      The travel agency is arranging for us ...... at a really nice hotel.
      radio("to stay";["stay","of staying","to stay","staying"])
    - |
      My dad says he always regrets ...... more.
      radio("not travelling";["to not travel","not travelling","he not travel","of not travelling"])
    - |
      John seems keen ...... how to drive as soon as he can.
      radio("to learn";["of learning","he learn","for learn","to learn"])
    - |
      Now, class. I'd like you all to write ...... a description of your last holiday.
      radio("me";["me","to me","it me","about me"])
    - |
      When you arrive ...... have your passport ready.
      radio("at the airport";["to the airport","in the airport","on the airport","at the airport"])
    - |
      The Joneses have invited us ...... to Australia with them this summer.
      radio("to go";["going","for going","about going","to go"])
    - |
      The in-flight entertainment may differ ...... that advertised.
      radio("from";["to","from","in","at"])
- id: G
  name: Find the extra word in each tine
  layout: list
  title: The cancelled trip
  items:
    - textbox("be") Oh, let me tell you about our trip. Did you know that Sara is afraid of be
    - textbox("it") flying? We had arranged it with her family to go to France for a few days.
    - textbox("in") I have always wanted to see Paris and would love to live in there one day.
    - textbox("being") Well, we got to the airport and Sara appeared being nervous. I asked her if
    - textbox("to") she was okay and she said she was fine, so we continued on to our way.
    - textbox("so") We went through passport control and I could see so that Sara wasn't
    - |
      textbox("it") keen on going any further. Just then, a voice announced: \`We regret it to\`
    - textbox("been") inform passengers that Flight 114 to France is been cancelled.' That was
    - textbox("of") our flight! Sarah said she was glad because of she was too frightened to
    - textbox("to") fly anyway! So, we all went to home. That was the end of that trip!
- id: H
  name: Use the word given in capitals at the end of each line to form a word that fits in the gap in the same line.
  title: Word formation
  layout: article
  items:
    - It's not always easy being a **(1)** textbox("tourist") **(TOUR)** You spend half your
    - time making **(2)** textbox("arrangements") **(ARRANGE)** for your holiday and the other half
    - worrying about sticking to the **(3)** textbox("timetable") **(TIME)** I think it's relaxing
    - sometimes to spend a holiday at home. There are no **(4)** textbox("cultural") **(CULTURE)**
    - problems, you don't need someone to be the **(5)** textbox("photographer") **(PHOTOGRAPH)** and
    - you know that the local **(6)** textbox("inhabitants") **(INHABIT)** are always friendly!
- id: I
  name: Complete the sentences by changing the form of the word in capitals when this is necessary
  layout: list
  items:
    - Beijing has changed so much in the last few years that it's almost textbox("unrecognisable") **(RECOGNISE)**.
    - The number of cars textbox("worldwide") **(WORLD)** is about a billion and is increasing all the time.
    - The new maglev trains run on a completely textbox("different") **(DIFFER)** system from ordinary trains.
    - Living in a foreign country really does textbox("broaden") **(BROAD)** your horizons.
    - I can't find a textbox("direct") **(DIRECT)** flight from London to Delhi so I've booked one that changes in Frankfurt.
    - All passengers must complete a visa form upon textbox("arrival") **(ARRIVE)** at Singapore airport.
    - You can still see old milestones by the side of the road in England, showing the textbox("distance") **(DISTANT)** to the nearest town.
    - The Museum of Transport has a full-sized jet plane next to the textbox("entrance") **(ENTER)**.
...`);

const cource = {
  key: '0102',
  courseId: '01',
  val: () => ({
    name: 'Unit 2',
    subject: 'Vocabulary',
    description: 'Travel and transport',
    modalContent: '![p0013](/assets/p0013.png)',
    tests,
  }),
};

export default cource;
