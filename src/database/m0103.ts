import { compilerService } from '../services';

const tests = compilerService.compile(`
---
- id: A
  name: Circle the correct word or phrase.
  layout: list
  items:
    - I select("saw";["saw","was seeing"]) Maria for the first time at Ray's birthday party.
    - Richard select("was watching";["watched","was watching"]) TV when the phone rang.
    - When we were on holiday, we select("went";["went","were going"]) to the cafe almost every day.
    - Denise select("practised";["practised","was practising"]) the song every day until she could sing it perfectly.
    - The phone was engaged when I called. Who select("were you talking";["did you talk","were you talking"]) to?
    - Mr Connors select("owned";["owned","was owning"]) two houses and a villa in the south of France.
    - I select("did";["did","was doing"]) my homework as soon as I got home from school.
    - A car came round the corner and I select("jumped";["jumped","was jumping"]) out of the way.
    - When my dad met my mum, he select("was working";["worked","was working"]) as a bus driver.
    - I select("got";["got","was getting"]) up at six o clock every morning last week!
    - My cousin and I select("were playing";["played","were playing"]) on the computer when there was a power cut.
    - No, that's not right. I select("did pass";["did pass","was passing"]) the test. I got a B.
- id: B
  name: Complete using the correct form of the verb in brackets.
  layout: list
  items:
    - Where textbox("we were going") **(you / go)** when I saw you on the bus last night?
    - textbox("Do you enjoy") **(you / enjoy)** the film?
    - When we shared a room, Zoe textbox("was always taking") **(always /take)** my things. It was so annoying!
    - When I went to get the tickets, I realised I textbox(["did not have","didn't have"]) **(not / have)** any money.
    - When I was young, we textbox("went") **(go)** to France every year on holiday.
    - Elvis textbox("became") **(become)** famous for the song Blue Suede Shoes.
    - When you rang last night, I textbox("was working") **(work)** in the garden so I didn't hear the phone.
    - I textbox("heard") **(hear)** from Davina last night. She says hello.
    - The old man textbox("appeared") **(appear)** to be very tired and he slowly sat down.
    - We textbox("threw") **(throw)** a surprise party for my brother last Saturday.
- id: C
  name: Circle the correct word or phrase.
  layout: article
  items:
    - Dear Lisa,
    - >
      Thanks for your letter. I **(1)** select("had just left";["just left","had just left"]) for school when I saw the postman and
      he **(2)** select("gave";["gave","had given"]) it to me. It was really funny! I **(3)** select("read";["read","had read"]) it during maths
      and it **(4)** select("made";["made","had made"]) me laugh. I almost **(5)** select("got";["got","had got"]) in trouble!
      Anyway. I'm excited because I **(6)** select("had";["had","had had"]) my first judo lesson yesterday. I **(7)** select("was";["was","had been"])
      late for the lesson because when I **(8)** select("got";["got","had got"]) there, I suddenly realised
      I **(9)** select("had left";["left","had left"]) my judo suit at home! So I **(10)** select("went";["went","had gone"]) all the way home
      and when I **(11)** select("got";["got","had got"]) back, the lesson **(12)** select("had already begun";["already began","had already begun"]).
      The instructor was really nice, though, and I **(13)** select("learned";["learned","had learned"]) how to do some basic throws. Can't wait till next time!
    - >
      What about you and your taekwondo? The last time I **(14)** select("spoke";["spoke","had spoken"]) to you, you
      **(15)** select("talked";["talked","had talked"]) about giving it up. What **(16)** select("did you decide";["did you decide","had you decided"])?
      I think that's all for now. My mum and I are going shopping shortly. so I'd better post this.
    - |
      Speak to you soon.
      Love,
      Charlotte
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
  columns: 2
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
  key: '0103',
  courseId: '01',
  val: () => ({
    name: 'Unit 3',
    subject: 'Grammar',
    description: `Past time: past simple, past continuous, past perfect simple, past perfect continuous, would, used to / be/get used to`,
    modalContent: `![p0019](/assets/p0019.png)
![p0020](/assets/p0020.png)`,
    tests,
  }),
};

export default cource;
