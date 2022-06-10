import { compilerService } from '../services';

const tests = compilerService.compile(`
---
- id: A
  name: Complete using the correct form of the words in the box
  title: Topic vocabulary in contrast
  layout: list
  commonOptions:
    - course
    - court
    - pitch
    - ring
    - rink
    - track
    - beat
    - text: win
      value: was winning
    - score
    - text: bat
      value:
        - bat
        - bats
    - text: stick
      value: sticks
    - rod
    - racket
  items:
    - We used to go skating at the ice textbox("rink";true) every Saturday.
    - Keith had never seen such a large golf textbox("course";true) until he went to Scotland.
    - We all met at the basketball textbox("court";true) at half past three.
    - Its called a boxing textbox("ring";true), but it's actually square!
    - For the 800 metres race, you have to run round the textbox("track";true) twice.
    - The football match had to be called off because the textbox("pitch";true) was flooded.
    - >
      Our team textbox("was winning";true) until half time, but in the second half the other team
      three goals, and so they textbox("beat";true) us. But it was a great match!
    - Adrian got a new fishing textbox("rod";true) for his birthday.
    - Can I borrow your tennis textbox("racket";true)?
    - Why are hockey textbox("sticks";true) such a strange shape?
    - I'd spend hours putting linseed oil on my cricket textbox(["bat","bats"];true) to keep the wood strong.
- id: B
  name: Circle the correct word or phrase.
  layout: list
  items:
    - The select("referee";["umpire","referee"]) blew the whistle and the most important football match I've ever played began.
    - We used to play rugby in the winter term, football in the spring term, and we'd do select("athletics";["athletics","sport"]) and swimming in the summer term.
    - Do you fancy a select("game";["game","play"]) of cards?
    - I only do magic tricks for fun. I've never thought of becoming select("a professional";["an amateur","a professional"]) magician.
    - The play was so boring, we walked out during select("the interval";["half time","the interval"]).
    - Coventry City select("drew";["equalled","drew"]) 3-3 with Sunderland in the match last Saturday.
    - select("Viewers";["Spectators","Viewers"]) who watched last week's programme will remember we were lookinig at the history of baseball.
    - We got through to the select("final";["final","finale"]), but then lost to Cirencester.
    - Most people prefer films which have a happy select("ending";["end","ending"]).
    - Would all select("competitors";["opponents","ending"]) please make their way to the starting line?
- id: C
  name: Complete each second sentence using the word given so that it has a similar meaning to the first sentence. Write between two and five words in each gap.
  title: Phrasal verbs
  layout: list
  items:
    - |
      I don't know how you can stand getting up so early to go to the pool. **put**
      I don't know how you can textbox("put up with getting") up so early to go to the pool.
    - |
      I've finally started sorting out my postcard collection. **round**
      I've finally textbox("got round to") sorting out my postcard collection.
    - |
      What did you do at the weekend? **get**
      What did you textbox("get up to") at the weekend?
    - |
      I'm not so keen on skiing now I've discovered snowboarding. **gone**
      I've textbox("gone off skiing") since I discovered snowboarding.
    - |
      Why do you continue to have riding lessons if you can't afford them? **on**
      Why do you textbox("carry on having") riding lessons if you can't afford them?
    - |
      We can't delay the match any longer. **put**
      We can't textbox(["put off the match","put the match off"]) any longer.
- id: D
  name: Complete using the past perfect simple or past perfect continuous of the verbs in the box. You may need to use a negative form.
  layout: list
  commonOptions:
    - text: eat
      value: hadn't eaten
    - text: stay
      value: had stayed
    - text: wait
      value: had been waiting
    - text: know
      value: had known
    - text: write
      value: had written
    - text: see
      value: had seen
    - text: listen
      value: had been listening
    - text: get
      value: had been getting
    - text: have
      value: hadn't been having
    - text: run
      value: had been running
  items:
    - By the time he died, Beethoven textbox("had written";true) nine symphonies.
    - We chose the Hotel Rio because we textbox("had stayed";true) there before.
    - We textbox("had been waiting";true) for over an hour when the train finally arrived.
    - I was completely out of breath because I textbox("had been running";true).
    - I textbox("had seen";true) the film before, so I knew how it ended.
    - When he got married, I textbox("had known";true) Chris for about two years.
    - Jermija textbox("had been getting";true) ready for the race for six months and finally the big moment came.
    - Vivian textbox("hadn't been having";true) computer lessons for very long, so she wasn't sure how to use the Internet.
    - Holly textbox("hadn't eaten";true) oysters before, so she wasn't sure what to do with them.
    - I textbox("had been listening";true) to my new CD for a few minutes when the CD player started making a funny noise.
- id: E
  name: Choose the correct answer
  layout: list
  layoutColumns: 2
  items:
  - |
    My brother and I ...... swimming almost every day last summer.
    radio("went";["went","had been going","were going","had gone"])
  - |
    We ...... when someone knocked at the door.
    radio("were talking";["talked","had talked","were talking","were talked"])
  - |
    When the robbery happened, the security guard ......!
    radio("was sleeping";["slept","was sleeping","had slept","was slept"])
  - |
    Jack ...... chess before, so I showed him what to do.
    radio("hadn't played";["hadn't been playing","didn't play","wasn't playing","hadn't played"])
  - |
    I wasn't sure how Belinda would react because I ...... her long.
    radio("hadn't known";["didn't know","wasn't knowing","hadn't been knowing","hadn't known"])
  - |
    Ian ...... at the factory long when he was made a manager.
    radio("hadn't been working";["hadn't been working","wasn't working","didn't work","wasn't worked"])
  - |
    I wanted to say goodbye to Jerry, but he ...... .
    radio("had already left";["was already left","already left","had already been leaving","had already left"])
  - |
    When we got to the airport. I realised ...... my passport at home!
    radio("had left";["was left","had left","left","had been leaving"])
- id: F
  name: Circle the incorrect words or phrases and rewrite them correctly.
  layout: list
  items:
    - |
      I had paint on my shoes because I'd painted my bedroom all morning.
      textbox("I'd been painting")
    - |
      I missed the start of the film because I buy popcorn.
      textbox(["I was buying","I had been buying"])
    - |
      It was obvious that Bill has worked because he was very tired when I saw him.
      textbox("has been working")
    - |
      We had been tidying the garden for hours and I was needing a rest.
      textbox("needed")
    - |
      When the bus was arriving, we missed it because we were talking.
      textbox("arrived")
    - |
      During the Christmas holiday, I was eating too much and watching too much TV!
      textbox("ate watched")
    - |
      Julian was learning all about computer games by the time he was six.
      textbox(["had learnt","learned"])
    - |
      My grandfather was owning a hotel by the beach until he sold it last year.
      textbox("owned")
- id: G
  name: Circle the correct word or phrase.
  layout: list
  items:
    - When she was a girl, my mum select("would";["would","used to"]) live in a village.
    - I really can't select("get";["be","get"]) used to having a new baby brother.
    - People select("would";["would","are used to"]) die of diseases in the past that we can cure today.
    - There select("used to";["would","used to"]) be a cinema on this corner, but they knocked it down.
    - It was strange at first, but I'm used to select("playing";["play","playing"]) the bagpipes now.
    - Didn't you select("use to";["use to","be used to"]) have blonde hair?
    - Christopher was select("getting";["being","getting"]) used to the idea of joining the army.
    - People never select("used to";["would","used to"]) be so worried about crime in this area.
- id: H
  name: >
      Complete each second sentence using the word given so that it has a similar meaning to the first entence.
      Write between two and five words in each gap.
  layout: list
  items:
    - |
      People walked more fifty years ago than they do now. **would**
      Fifty years ago, textbox("people would walk more") than they do now.
    - |
      My parents wouldn't let me stay out late when I was young. **used**
      My parents textbox(["never used to","used not to"]) let me stay out late when I was young.
    - |
      Did you know that Carol played basketball for her country? **to**
      Did you know that Carol textbox("used to play") basketball for her country?
    - |
      Sending messages around the world instantly is no longer unusual. **got**
      We textbox("have got used to sending") messages around the world instantly.
    - |
      When he was a teacher, my dad often used to get home quite late. **would**
      When he was a teacher, my dad textbox("would often get home") quite late.
    - |
      Do you think you could learn to live without your mobile phone? **used**
      Do you think you could textbox("get used to living") without your mobile phone?
    - |
      In the past, people wouldn't go as far away on holiday as they do today. **use**
      In the past, people textbox(["did not used to go","didn't used to go"]) as far away on holiday as they do today.
    - |
      This town has a lot more cinemas than it had in the past. **used**
      This town textbox(["never used to have","used not to have"]) so many cinemas.
- id: I
  name: Find the extra word in each line.
  title: Childhood
  layout: list
  items:
    - textbox("would") Childhood would used to be quite different from what it is today. Young
    - textbox("not") people didn't use not to have so much leisure time. Today's children may
    - textbox("to") complain about their schoolwork, but our great-grandparents would to go
    - textbox("been") out to work at a very young age. They had often been left school by
    - textbox("were") the time they were fourteen and were found a job. This meant that they
    - textbox("have") have had little free time for hobbies or leisure activities, especially when
    - textbox("themselves") they had been working hard all day. Of course, they got themselves used
    - textbox("would") to working long hours eventually, but it would meant that they had to
    - textbox("got") grow up very quickly. Today, we are got used to having some free time to
    - textbox("were") do things we enjoy, a luxury people in the past rarely were had.
- id: J
  name: Write one word in each gap.
  title: The night before
  layout: article
  items:
    - Jane lay awake. She had **(1)** textbox("been") preparing for the next day **(2)** textbox("for") a long
    - time and now she couldn't sleep. Her team **(3)** textbox(["was","were"]) playing the local champions at
    - water polo in the final and Jane was the captain. She **(4)** textbox("was") feeling the pressure.
    - She turned over and remembered how she **(5)** textbox("had") learned to swim. Her father had
    - taught her. They **(6)** textbox("would") go to the local pool every day after school and her father
    - >
      **(7)** textbox("used") to show her what to do. She hadn't liked the water at first, but she soon
    - >
      **(8)** textbox("got") used to it. She learned quickly and joined the water polo team. She had
    - >
      **(9)** textbox("been") their youngest member!
    - She quickly got used to scoring goals and **(10)** textbox(["being","swimming"]) under pressure, but tomorrow was
    - different. It was the biggest match of her life. She closed her eyes again and tried to get to sleep. \`I
    - >
      **(11)** textbox("never") used to have problems sleeping,\` she thought to herself. \`But then again, I didn't
    - >
      **(12)** textbox("use") to be the captain of the team.\` She watched the clock change slowly and knew
    - that it was going to be a long night.
...`);

const cource = {
  key: '0104',
  courseId: '01',
  val: () => ({
    name: 'Unit 4',
    subject: 'Vocabulary',
    description: `Hobbies, sport and games`,
    modalContent: `![p0025](/assets/p0025.png)`,
    tests,
  }),
};

export default cource;
