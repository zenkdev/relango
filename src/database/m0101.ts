import { compilerService } from '../services';

const tests = compilerService.compile(`
---
- id: A
  name: Circle the correct word or phrase.
  layout: list
  items:
    - Elizabeth select("usually goes";["usually goes","is usually going"]) to bed at around eleven o'clock.
    - Dan select("is talking";["talks","is talking"]) on the other phone right now.
    - We select("aren't eating";["don't eat","aren't eating"]) any meat at the moment as we're both on a diet.
    - select("Is air travel getting";["Does air travel get","Is air travel getting"]) increasingly safe?
    - My mum select("calls";["calls","is calling"]) me every weekend without fail.
    - How much select("do babysitters generally earn";["do babysitters generally earn","are babysitters generally earning"])
    - select("You're always coming";["You always come","You're always coming"]) up with excuses for not having done your homework. It's so annoying!
    - select("I don't go";["I don't go","I'm not going"]) out much during the week, but select("I always try";["I always try","I'm always trying"]) to go out somewhere on Saturday night.
    - No, the train select("does stop";["does stop","is stopping"]) at Cirencester on Saturdays.
    - My mum select("takes";["takes","is taking"]) part in ice-skating competitions almost every weekend.
- id: B
  name: Rewrite correctly. Change the words or phrases in bold.
  layout: list
  items:
    - |
      My dad **is often getting up** late on Saturday mornings.
      textbox("often gets up")
    - |
      **Are you speaking** any other languages apart from English?
      textbox("Do you speak")
    - |
      **I already buy** all my Christmas presents and it's only October!
      textbox("I've already bought")
    - |
      It's the first time **I'm ever having** a party at home.
      textbox("I've ever had")
    - |
      Actually, I think Daren **does works** quite hard sometimes.
      textbox(["works","does work"])
    - |
      Carlo **is never eating** Chinese food before.
      textbox("has never eaten")
    - |
      Sean **already books** a table for tonight.
      textbox(["has already booked","'s already booked"])
    - |
      **Needs Melanie** any help painting her new flat?
      textbox("Does Melanie need")
- id: C
  name: Complete using the correct form of the verb in brackets.
  layout: list
  items:
    - It's the first time textbox("I've ever eaten") **(I / ever / eat)** octopus!
    - Sandy textbox("hasn't seen") **(not / see)** his sister since she went to university.
    - They textbox("have gone") **(go)** on holiday to Spain and won't be back until the end of the month.
    - Poor Marusya! She textbox("has been writing") **(write)** that essay for hours now and she still hasn't finished!
    - textbox("Have you ever met") **(you / ever / meet)** anyone famous?
    - textbox("I've been trying") **(I / try)** to get in touch with Jenny all morning, but I can't find her anywhere.
    - textbox("I haven't finished") **(I / not finish)** the book yet so I can't tell you what happens.
    - textbox("Have you already decided") **(you / already / decide)** where you're going this summer?
    - textbox(["We've lived","We've been living"]) **(We / live)** here for the last six years.
    - textbox("I've never heard") **(I / never / hear)** such nonsense!
- id: D
  name: Complete using the words in the box.
  layout: list
  commonOptions:
    - already
    - before
    - ever
    - for
    - just
    - rarely
    - since
    - so
    - still
    - yet
  items:
    - Have you select("ever") dreamt of winning the lotter?
    - I haven't worked out how to set the timmer on the video select("yet").
    - My dad's lived in the same house select("since") he was born.
    - The film's only been on select("for") a couple of minutes.
    - Bruce has knocked three men out of the competition select("so") far.
    - I select("rarely") get the chance to get any exercise - I'm just too busy.
    - He's only select("just") got home.
    - It's eleven o'clock and Todd select("still") hasn't come home. Where could he be?
    - I've never met Ruth select("before"). What's she like?
    - Have you finished select("already")? That was quick!
- id: E
  name: Choose the correct answer.
  layout: list
  layoutColumns: 2
  items:
    - |
      Ian ...... a shower at the moment, so could you call back in about half an hour?
      radio("is taking";["takes","is taking","has taken","has been taking"])
    - |
      ...... to Ipswich before?
      radio("Have you ever been";["Do you ever go","Are you ever going","Have you ever been","Have you ever been going"])
    - |
      I ...... to all the local newspapers and TV stations to complain.
      radio("have already written";["already write","already writing","have already written","have already been writing"])
    - |
      ...... TV for the last four hours? Turn it off and get some exercise!
      radio("Have you been watching";["Do you watch","Are you watching","Watched you","Have you been watching"])
    - |
      Edik, ...... hockey competitively or just for fun?
      radio("do you usually play";["do you usually play","are you usually playing","have you usually played","have you usually been playing"])
    - |
      That's the first time ...... an answer right today!
      radio("I have got";["I get","I am getting","I have got","I have been getting"])
    - |
      Jessica has ...... left, i'm afraid.
      radio("already";["already","yet","still","so far"])
    - |
      Dan ...... in the living room while we redecorate his bedroom.
      radio("is sleeping";["sleeps","is sleeping","has slept","does sleep"])
    - |
      Unfortunately, Simone ...... a day off very often.
      radio("doesn't get";["doesn't get","isn't getting","hasn't got","hasn't been getting"])
    - |
      Actually, I ...... a cup of tea first thing every morning, but then I switch to coffee.
      radio("do drink";["do drink","am drinking","have drunk","have been drinking"])
- id: F
  name: Complete using the correct form of the words in the box
  layout: article
  title: The City of Omsk
  commonOptions:
    - text: be
      value: is
    - disagree
    - do
    - include
    - text: know
      value: knows
    - text: look
      value: looks
    - see
    - text: seem
      value: seems
    - understand
  items:
    - >
      Everyone textbox("(1)";"knows";true) about the stunning sights to see in Moscow and St. Petersburg. The beautiful city of Omsk, one of the oldest cities in western Siberia,
      textbox("(2)";"is";true) not so well-known. Unfortunately, the 2700 km journey from Moscow just
      textbox("(3)";["looks","seems"];true) too far for many travellers to Russia. For those who
      textbox("(4)";"do";true) travel there, however, there are a number of interesting things to see and do. These
      textbox("(5)";"include";true) visiting the Tobolskie and Tarskie Gates, which were the first stone buildings in Omsk, the Museum of Local Lore and the modern shops on Lyubinsky Avenue. When you
      textbox("(6)";"see";true) Krestovozdvizhensky Cathedral lit up in the moonlight, you
      textbox("(7)";"understand";true) why it's worth making the effort to come here.
    - >
      Few historians textbox("(8)";"disagree";true) with Omsk's historical importance - it was even the capital of Russia for a short period at the beginning of the 20-th century. As travelling across Russia becomes easier, it
      textbox("(9)";["looks","seems"];true) like Omsk may also have a bright future - as a popular destination for tourists.
- id: G
  name: Match to make sentences.
  layout: article
  layoutColumns: 2
  commonOptions:
    - A
    - B
    - C
    - D
    - E
    - F
    - G
    - H
  hideCommonOptions: true
  items:
    - id: 1
      fields: '**1.** I think select("B")' # style: { marginRight: '24px' }
    - id: 2
      fields: >
              **2.** I'm thinking select("F")
    - id: 3
      fields: >
              **3.** Phil's looking select("D")
    - id: 4
      fields: '**4.** Phil looks select("H")'
    - id: 5
      fields: '**5.** Claire has select("A")'
    - id: 6
      fields: '**6.** Claire is having select("C")'
    - id: 7
      fields: '**7.** Andy is select("E")'
    - id: 8
      fields: '**8.** Andy is being select("G")'
    - id: A
      fields:
        - type: match
          value: A
          text: darker hair than her sister.
    - id: B
      fields:
        - type: match
          value: B
          text: "I'm going to buy the new Racetrack CD."
    - id: C
      fields:
        - type: match
          value: C
          text: a haircut at the moment.
    - id: D
      fields:
        - type: match
          value: D
          text: for his glasses. Have you seen them?
    - id: E
      fields:
        - type: match
          value: E
          text: not old enough to drive a car.
    - id: F
      fields:
        - type: match
          value: F
          text: of getting Dad a CD for his birthday.
    - id: G
      fields:
        - type: match
          value: G
          text: very annoying at the moment!
    - id: H
      fields:
        - type: match
          value: H
          text: like he needs a holiday!
- id: H
  name: Find the extra word in each tine
  layout: list
  title: International friends
  items:
    - textbox("to") I've been to travelling round Europe all summer. It's the first time I've
    - textbox("going") ever been going abroad, and I've had a fantastic time! I've seen
    - textbox("to") loads of interesting places and I have to also made loads of new friends.
    - textbox("been") I've been decided to stay in touch with them now I'm back. One of
    - textbox("making") them, Giselle, is French. She was making on holiday too. We now send
    - textbox("are") text messages are to each other all the time. They're usually in English
    - textbox("have") because my French isn't very good! I'm planning to have visit her in
    - textbox("am") France next year sometime. I hope I can. I am love meeting people from
    - textbox("had") other countries! I want to have had lots of friends from all over the world!
    - textbox("is") Travelling certainly broadens the mind, but it also is broadens your circle of friends!
- id: I
  name: Write one word in each gap.
  layout: article
  items:
    - |
      \`You've textbox("(1)";"been") looking at that timetable for the last ten minutes. It can't be that confusing!\` said Sheila angrily.
    - |
      \`I textbox("(2)";["do","really"]) wish you'd be quiet! I've textbox("(3)";"got") splitting headache thanks to you!\` replied Matt.
    - |
      \`Mum! Dad! Please!\` said Alison. \`You're both textbox("(4)";"being") very silly. textbox("(5)";"There") is no point at all in blaming each other. That's not going to help us find out what time the next train to Budapest is due to leave.\`
    - |
      \`You textbox("(6)";"are") quite right, darling. I textbox("(7)";"am") sorry,\` said Sheila.
    - |
      \`Me too,\` mumbled Matt. \`Now, let's have another look at this timetable. Well, it textbox("(8)";["looks","seems"]) like we textbox("(9)";"have")  definitely missed the last train today. That was the 18.20 we just missed, wasn't it?\`
    - |
      \`I textbox("(10)";"think") so,\` said Sheila. \`I mean, it did leave at 18.20. Whether it's actually going to Budapest or not is another question.\`
    - |
      \`Well, one thing is textbox("(11)";"not") in doubt,\` said Matt.
      \`What's that?\` asked Sheila and Alison together.
    - |
      \`This is the worst holiday we've textbox("(12)";"ever") been on,\` said Matt. \`Next year, we're going to try something far less adventurous.\`
      \`Agreed!\` said Sheila and Alison.
- id: J
  name: Complete each second sentence using the word given so that it has a similar meaning to the first sentence. Write between two and five words in each gap.
  layout: list
  items:
    - |
      What's the price of the tickets, Jimmy? **much**
      How textbox(["much do the tickets cost","much are the tickets"]) Jimmy?
    - |
      Are these your trainers? **to**
      Do textbox("these trainers belong to") you?
    - |
      Sasha's not keen on team sports at all. **like**
      Sasha textbox(["does not like","doesn't like"]) team sports at all.
    - |
      It's only her second time in a recording studio. **been**
      She textbox("has only been") in a recording studio once before.
    - |
      We got here three hours ago. **have**
      We textbox(["have been here","have been here for"]) three hours.
    - |
      I started writing this hours ago and it's still not right. **writing**
      I textbox("have been writing this for") hours and it's still not right.
    - |
      This is my first experience of flying alone. **time**
      It is the first textbox("time I have flown") alone.
    - |
      Sharon's in the bath at the moment. **a**
      Sharon textbox("is having a bath") at the moment.
    - |
      Paul enjoys surprises apart from on his birthday. **does**
      Paul textbox("does enjoy") surprises, just not on his birthday!
...`);

const cource = {
  key: '0101',
  courseId: '01',
  val: () => ({
    name: 'Unit 1',
    subject: 'Grammar',
    description: `Present time: present simple, present continuous, present perfect simple, present perfect continuous, stative verbs`,
    modalContent: `![p0007](/assets/p0007.png)
![p0008](/assets/p0008.png)`,
    tests,
  }),
};

export default cource;
