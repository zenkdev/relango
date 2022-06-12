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
      We can't delay the e any longer. **put**
      We can't textbox(["put off the match","put the match off"]) any longer.
- id: D
  name: Write one word in each gap.
  layout: list
  items:
    - Tony never used to want to join textbox("in") with the other kids in the playground.
    - Look textbox("out")! There's a car coming!
    - Simone's textbox("taken") to wearing a helmet whenever she goes cycling.
    - I was thinking of taking textbox("up") scuba diving until I found out how expensive the equipment is.
    - They were knocked textbox("out") in the semi-final.
    - Maybe we should bring the meeting textbox("forward") to this Tuesday instead of having it in two weeks'time.
    - Becca had to pull textbox("out") of the race when she sprained her ankle.
    - Melissa doesn't textbox("go") in for adventure sports.
- id: E
  name: Choose the correct answer
  title: Phrases and collocations
  layout: list
  columns: 2
  items:
    - |
      Why don't you ...... a go? It's not difficult!
      radio("have";["make","have","do","set"])
    - |
      Carl wasn't very good at mountain climbing as he's afraid of ...... .
      radio("heights";["highs","highness","heights","height"])
    - |
      There's little ...... of our getting into the final.
      radio("chance";["opportunity","chance","luck","fortune"])
    - |
      Rachel is mad ...... the Eurovision Song Contest.
      radio("about";["from","against","for","about"])
    - |
      Just ...... your best - that's all anyone can ask of you.
      radio("do";["do","make","be","have"])
    - |
      It's ...... time you learned to swim.
      radio("high";["big","tall","high","far"])
    - |
      Grandma ...... a lot of pleasure from gardening.
      radio("gets";["does","has","makes","gets"])
    - |
      ...... your time - don't rush.
      radio("Take";["Tell","Find","Spend","Take"])
    - |
      Each player takes it ...... turn to roll the dice.
      radio("in";["on","in","at","to"])
    - |
      Time ...... so quickly when you're doing something enjoyable.
      radio("passes";["takes","spends","passes","finds"])
    - |
      Our new coach is popular ...... the whole team.
      radio("with";["for","to","by","with"])
    - |
      She'd ...... hours lying on her bed, reading.
      radio("spend";["spend","take","make","pass"])
    - |
      He'd been planning to leave the team the ...... time and hadn't told anyone.
      radio("whole";["complete","whole","total","full"])
    - |
      I'm not siding ...... her because she's my sister, but because she's right.
      radio("with";["from","for","to","with"])
- id: F
  name: Match to make sentences.
  title: Word patterns
  layout: article
  columns: 2
  commonOptions:
    - A
    - B
    - C
    - D
    - E
    - F
    - G
  hideCommonOptions: true
  items:
    - >
      **1** I'm not very fond select("D")
    - match("A";"in playing for the school team.")
    - >
      **2** She's interested select("A")
    - match("B";"to find enough time to have any hobbies.")
    - >
      **3** You should concentrate select("G")
    - match("C";"to try to find the golf balls we'd lost.")
    - >
      **4** I used to find it difficult select("B")
    - match("D";"of playing in goal.")
    - >
      **5** Let's listen select("F")
    - match("E";"from finishing the game.")
    - >
      **6** We stopped select("C")
    - match("F";"to what the coach thinks first.")
    - >
      **7** The bad weather stopped us select("E")
    - match("G";"on getting fit.")
- id: G
  name: >
        Water has damaged part of this text about sport at school.
        Read it and decide what you think each of the original words was.
        Write the words in the blank spaces.
  title: Sport at school
  layout: article
  columns: 2
  items:
    - I used to wear glasses when I was at school, and so I ...... sport
    - '**1** textbox("found")'
    - very difficult. I wanted to be involved ...... school sports
    - '**2** textbox("in")'
    - competitions, and I loved the idea of teams competing ...... each
    - '**3** textbox(["against","with"])'
    - other, but being on the rugby team, for example, ...... having to
    - '**4** textbox(["involved","meant"])'
    - take off my glasses, and that meant ...... I couldn't see! And it's
    - '**5** textbox("that")'
    - difficult ...... catch a ball when you can't see it! So, I wasn'
    - '**6** textbox("to")'
    - very good and the captains always ...... sure that I wasn't on
    - '**7** textbox("made")'
    - their team. This meant I ...... free to do other activities, like being
    - '**8** textbox("was")'
    - on the debating team and actually I preferred to ...... things I
    - '**9** textbox("do")'
    - was good at doing ...... than have everyone laugh at me.
    - '**10** textbox("rather")'
- id: H
  name: Complete the sentences by changing the form of the word in capitals when this is necessary.
  title: Word formation
  layout: list
  items:
    - I need to buy a new pair of textbox("trainers") **(TRAIN)**,
    - Ellie used to textbox("practise") **(PRACTICE)** for hours to learn to juggle properly.
    - That was the most textbox("interesting") **(INTEREST)** book I've ever read. I can't wait for the sequel!
    - Would you describe yourself as a textbox("competitive") **(COMPETE)** person?
    - Many professional basketball players earn a textbox("fortune") **(FORTUNE)** these days.
    - F.A. stands for Football textbox("Association") **(ASSOCIATE)**.
    - The gold, silver and bronze textbox("medallists") **(MEDAL)** took their places on the podium for the presentation ceremony.
    - In Britain, the money parents give their children is called pocket money. In America, it's called an textbox("allowance") **(ALLOW)**.
    - I'm afraid the swimming pool is closed at the moment as they're carrying out some essential textbox("maintanance") **(MAINTAIN)**.
- id: I
  name: Use the word given in capitals at the end of each line to form a word that fits in the gap in the same line.
  title: A snooker player speak
  layout: article
  columns: 2
  items:
    - When I first started playing snooker, I had no real **(1)** textbox("knowledge") of the
    - "**KNOW**"
    - rules. I just thought it looked an **(2)** textbox("enjoyable") game. Also, I didn't need
    - "**ENJOY**"
    - to buy any expensive **(3)** textbox("equipment") because the snooker hall near my
    - "**EQUIP**"
    - house had tables and cues. I spent **(4)** textbox("practically") all the free time I had
    - "**PRACTICE**"
    - practising, and then decided to enter a **(5)** textbox("competition"). It was great fun!
    - "**COMPETE**"
    - My **(6)** textbox("opponent") was someone who'd been playing for years. Of course,
    - "**OPPOSE**"
    - he beat me, but the fact that I'd **(7)** textbox("lost") didn't put me off at all.
    - "**LOSE**"
    - And, **(8)** textbox("fortunately"), my game improved enough for me to become a
    - "**FORTUNE**"
    - professional snooker player three years ago.
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
