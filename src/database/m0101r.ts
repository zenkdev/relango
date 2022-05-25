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
      What textbox("(1)";"does") the phrase 'the great British seaside' bring to mind? Most people, if asked
      to respond textbox("(2)";"off") the top of their heads, associate textbox("(3)";"going") on holiday to places
      such as Blackpool or Torquay with poor weather, old, faded attractions and a low standard of
      accommodation.These days. when people are more likely to go abroad to textbox("(4)";"see") the
      sights, traditional British seaside towns textbox("(5)";"does") suffering from an image problem. Now,
      finally, some of the resorts textbox("(6)";"have") decided to bring their images up to date in the hope that
      a textbox("(7)";"change") of direction will bring back the tourists. Many will need a lot of convincing, but
      those that textbox("(8)";"do") come will find that today's Blackpool differs quite a bit textbox("(9)";"from")
      the picture postcard past.
    - |
      After years of neglect, Blackpool has to work hard to catch textbox("(10)";"up") with foreign destinations,
      but that's precisely what it textbox("(11)";"is") doing. It's the first time so much textbox("(12)";"has")
      happened to improve the place in such a short time. A massive building project, including a new
      casino and indoor entertainment centre, textbox("(13)";"means") that rainy days are no longer a problem.
      And it appears textbox("(14)";"to") be working. As the tourists start to make textbox("(15)";"for") the
      bright lights of Blackpool once again, it seems that the great British seaside has a bright future
      ahead.
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
