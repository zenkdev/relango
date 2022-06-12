import { compilerService } from '../services';

const tests = compilerService.compile(`
---
- id: A
  name: Use the word given in capitals at the end of each line to form a word that fits in the gap in the same line.
  layout: article
  columns: 2
  title: A new hobby
  footnote: (1 mark per answer)
  items:
    - I saw some badminton on TV and found it quite **(1)** textbox("interesting"), so I
    - "**INTEREST**"
    - thought I'd see if there was a club or **(2)** textbox("assosiation") in my area. I looked
    - "**ASSOCIATE**"
    - everywhere but, **(3)** textbox("unfortunately"), the nearest club was 80 kilometres
    - "**FORTUNE**"
    - away. So, without any **(4)** textbox("knowledge") I decided to form my own club.
    - "**KNOW**"
    - It was very hard in the beginning - I didn't have any **(5)** textbox("equipment") and I
    - "**EQUIP**"
    - had to convince a few people that it was an **(6)** textbox("enjoyable") way to keep
    - "**ENJOY**"
    - fit I organised a small **(7)** textbox("competition"), which was a lot of fun, and things
    - "**COMPETE**"
    - started to grow from there. Now we've got a full-time **(8)** textbox("trainer") and
    - "**TRAIN**"
    - our **(9)** textbox("opponents") come from all over the country. One of our members
    - "**OPPOSE**"
    - was even a bronze **(10)** textbox("medallist") in the national championship!
    - "**MEDAL**"
- id: B
  name: Match to make sentences.
  layout: article
  columns: 2
  footnote: (1 mark per answer)
  items:
    - '**11** I refuse to put textbox("H")'
    - match("A";"up a martial art, to defend yourself.")
    - '**12** The current champion was knocked textbox("C")'
    - match("B";"to swimming as soon as she tried it.")
    - >
      **13** I used to love basketball, but I've gone textbox("F")
    - match("C";"out in the second round of the competition.")
    - '**14** The trainer asked us to carry textbox("E")'
    - match("D";"out of the race because of a last minute injury.")
    - '**15** The organisers had to bring textbox("G")'
    - match("E";"on with the activity while he answered the phone.")
    - '**16** You should think about taking textbox("A")'
    - match("F";"off team sports lately.")
    - '**17** Although she was very young, Olivia took textbox("B")'
    - match("G";"the race forward by a week.")
    - '**18** Rob had to pull textbox("D")'
    - match("H";"up with people who cheat at games.")
- id: C
  name: >
        Complete each second sentence using the word given so that it has a similar meaning to the
        first sentence. Write between two and five words in each gap.
  layout: list
  listStart: 19
  footnote: (2 marks per answer)
  items:
    - |
      Our tennis match started at one o'clock and we were still playing at four. **been**
      At four o'clock, we textbox("had been playing tennis for") three hours.
    - |
      Terry never used to spend so much time playing on his computer. **use**
      Terry textbox(["did not use to","didn't use to"]) spend so much time playing on his computer.
    - |
      Before we play, check all the cards are there. **certain**
      Before we play, textbox(["make certain","make certain that"]) all the cards are there.
    - |
      Hang-gliding can be dangerous, but after a while you don't mind it. **used**
      Hang-gliding can be dangerous, but after a while you textbox("get use to") it.
    - |
      I ran fifteen miles, and then my trainer told me to do fifty push-ups! **already**
      When my trainer told me to do fifty push-ups, I textbox("had already run") fifteen miles!
    - |
      We wouldn't spend so much time indoors when I was young. **used**
      We textbox(["never used to spend","use not to spend"]) so much time indoors when I was young.
    - |
      I spend a lot of my time on my hobbies. **up**
      My hobbies textbox("take up") a lot of my time.
    - |
      I would rather play ludo than snakes and ladders. **prefer**
      I textbox("would prefer to play") ludo rather than snakes and ladders.
    - |
      I don't think it's likely that you'll win the competition. **chance**
      I think there's textbox(["little chance of your winning","little chance you will win"]) the competition.
- id: D
  name: Choose the correct answer.
  layout: list
  columns: 2
  listStart: 28
  footnote: (1 marks per answer)
  items:
    - |
      Our next door neighbour ....... his car every Sunday.
      radio("washes";["is washing","washes","has washed","is wash"])
    - |
      \`Why were you so tired yesterday?\`
      \`Because I ...... all morning.\`
      radio("had been jogging";["jog","was jogged","had been jogging","had been jogged"])
    - |
      It was the first time ...... I a live match.
      radio("had ever seen";["was ever seeing","had ever been seeing","had ever seen","was ever seen"])
    - |
      \`You live in a huge house, don't you?\`
      \`Yes, but we ...... !\`
      radio("didn't use to";["didn't use to","wouldn't","use not","weren't used to"])
    - |
      I ...... the whole of *War and Peace* by the time I was seven years old.
      radio("had read";["was reading","had been reading","had read","had been read"])
    - |
      Karate hurt my hands at first, but I finally ...... it in the end.
      radio("got used to";["got used to","was used to","was used","got use to"])
    - |
      I ...... for the match to begin when suddenly a dog ran onto the pitch.
      radio("was waiting";["had waited","waited","was waiting","wait"])
    - |
      Before she retired, my grandma ...... go for a run every morning before work.
      radio("would";["use to","would","got used to","was used to"])
- id: E
  name: Choose the correct answer.
  layout: list
  columns: 2
  listStart: 35
  footnote: (1 marks per answer)
  items:
    - |
      The ....... in the stadium all cheered the athletes.
      radio("spectators";["viewers","witnesses","spectators","onlookers"])
    - |
      I got a new baseball ....... yesterday.
      radio("bat";["stick","club","racket","bat"])
    - |
      After a hard match, United managed to ....... with City, 1-1.
      radio("draw";["equal","exact","draw","score"])
    - |
      In this game, the players ....... turns to throw the dice.
      radio("take";["take","do","make","have"])
    - |
      It's nice to win, but the important thing is to ....... your best.
      radio("do";["make","take","have","do"])
    - |
      Just ask them if you can play and I'm sure they'll let you ....... .
      radio("join in";["take up","join in","go off","take to"])
    - |
      Everyone expects Johnson to ....... Smith in today's final.
      radio("beat";["beat","score","win","champion"])
# Total mark: ....... / 50
...`);

const cource = {
  key: '0104r',
  courseId: '01',
  val: () => ({
    name: 'Review 2',
    subject: 'Units 3 and 4',
    tests,
  }),
};

export default cource;
