import { compilerService } from '../services';

const tests = compilerService.compile(`
---
- id: A
  name: Write one word in each gap.
  layout: article
  title: THE GREAT BRITISH SEASIDE
  footnote: (1 mark per answer)
  items:
    - |
      What **(1)** textbox("does") the phrase 'the great British seaside' bring to mind? Most people, if asked
      to respond **(2)** textbox("off") the top of their heads, associate **(3)** textbox("going") on holiday to places
      such as Blackpool or Torquay with poor weather, old, faded attractions and a low standard of
      accommodation.These days. when people are more likely to go abroad to **(4)** textbox("see") the
      sights, traditional British seaside towns **(5)** textbox("does") suffering from an image problem. Now,
      finally, some of the resorts **(6)** textbox("have") decided to bring their images up to date in the hope that
      a **(7)** textbox("change") of direction will bring back the tourists. Many will need a lot of convincing, but
      those that **(8)** textbox("do") come will find that today's Blackpool differs quite a bit **(9)** textbox("from")
      the picture postcard past.
    - |
      After years of neglect, Blackpool has to work hard to catch **(10)** textbox("up") with foreign destinations,
      but that's precisely what it **(11)** textbox("is") doing. It's the first time so much **(12)** textbox("has")
      happened to improve the place in such a short time. A massive building project, including a new
      casino and indoor entertainment centre, **(13)** textbox("means") that rainy days are no longer a problem.
      And it appears **(14)** textbox("to") be working. As the tourists start to make **(15)** textbox("for") the
      bright lights of Blackpool once again, it seems that the great British seaside has a bright future
      ahead.
- id: B
  name: Complete the sentences by changing the form of the word in capitals when this is necessary.
  layout: list
  listStart: 16
  footnote: (1 mark per answer)
  items:
    - I've always wanted to be a travel textbox("photograher") (**PHOTOGRAPH**) and take pictures of exotic places.
    - None of us were sure which textbox("direction") (**DIRECT**) to go in, so we got out the map.
    - Since I was here five years ago, Delhi has changed so much that it's practically textbox("unrecognisable") (**RECOGNISE**).
    - Once we got to the station, I quickly looked through the textbox("timetable") (**TIME**) to see when the next train was.
    - I've got a cousin at university who is studying textbox("tourism") (**TOUR**) and hopes to open a hotel.
    - As we got closer to the Amazonian village, the textbox("inhabitants") (**INHABIT**) came out to meet us.
    - The textbox("arrival") (**ARRIVE**) of Flight 472 from Amsterdam has been delayed by one hour.
- id: C
  name: Complete each second sentence using the word given so that it has a similar meaning to the first sentence. Write between two and five words in each gap.
  layout: list
  listStart: 23
  footnote: (2 marks per answer)
  items:
    - |
      As soon as we got on the plane. the pilot told us to get off again. **just**
      We textbox("had just got on") the plane when the pilot told us to get off again.
    - |
      We arrived in Budapest two days ago. **for**
      We textbox("have been in Budapest for") two days.
    - |
      I visited Paris once before. **second**
      This is the textbox(["second time I've visited","second time I have visited"]) Paris.
    - |
      I find it hard to go at the same speed as my husband on walking holidays. **up**
      I find it hard to textbox("keep up with") my husband on walking holidays.
    - |
      Joan has always been very fond of travelling and has been everywhere. **keen**
      Joan has always been very textbox("keen on traveling") and has been everywhere.
    - |
      We drove away as fast as we could, ready to begin our adventure. **full**
      We drove away textbox("at full speed"), ready to begin our adventure.
    - |
      As the storm started, we went towards the old house. **direction**
      As the storm started, we went textbox("in the direction of") the old house.
    - |
      I'm sorry I didn't look at the hotel room before I booked it. **regret**
      I textbox("regret not looking at") the hotel room before I booked it.
- id: D
  name: Choose the correct answer.
  layout: list
  columns: 2
  listStart: 31
  footnote: (1 marks per answer)
  items:
    - |
      Our next door neighbour ....... his car every Sunday.
      radio("washes";["is washing","washes","has washed","is wash"])
    - |
      Last summer, I ....... to the beach almost every day.
      radio("went";["went","was going","have been","have been going"])
    - |
      'Whose is this plane ticket on the floor?'
      'Oh, it ....... to me. Thank you.'
      radio("belongs";["is belonging","belongs","has belonged","belonged"])
    - |
      'I'm really tired of travelling so much.'
      'I thought you ....... a bit quiet.'
      radio("seemed";["were seeming","have seemed","have been seeming","seemed"])
    - |
      'You look thoughtful.'
      'I ....... about our holiday last year.'
      radio("was just thinking";["just think","had just thought","am just think","was just thinking"])
    - |
      'You went to Chile, didn't you?'
      'No, but I ....... to Peru, which is right next door.'
      radio("did go";["had gone","was gone","did go","was going"])
- id: E
  name: Choose the correct answer.
  layout: list
  columns: 2
  listStart: 37
  footnote: (1 marks per answer)
  items:
    - |
      Three people were captured at the ....... today trying to get into the country.
      radio("border";["line","equator","border","edge"])
    - |
      There's a fantastic ....... from the top of the Empire State Building!
      radio("view";["view","sight","appearance","look"])
    - |
      Once we get to the hotel, let's just ....... quickly and then do a bit of sightseeing.
      radio("check in";["set down","make up","check in","turn up"])
    - |
      I'm going to ask for directions because I think we've ....... our way.
      radio("lost";["missed","misplaced","mistaken","lost"])
    - |
      We usually do go by train, even though the car ....... is a lot quicker.
      radio("journey";["travel","journey","trip","voyage"])
    - |
      Passengers requiring a special meal during the flight should inform the airline in ....... .
      radio("advance";["ahead","front","advance","forward"])
# Total mark: ....... / 50
...`);

const cource = {
  key: '0101r',
  courseId: '01',
  val: () => ({
    name: 'Review 1',
    subject: 'Units 1 and 2',
    tests,
  }),
};

export default cource;
