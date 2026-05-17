// ──────────────────────────────────────────────────
// Narration Scripts — Natural Teacher Voice
// Warm, child-friendly narration for each lesson phase
// ──────────────────────────────────────────────────

import { say, ask, cheer, emphasize, think, celebrate, instruct, pause } from './audio';

// ─── INTRO SCREEN ────────────────────────────────
export function introNarration() {
  return [
    cheer("Hello there, superstar! Welcome to today's incredible maths adventure!"),
    pause(300),
    say("Today, we're going to discover something really, really exciting."),
    pause(250),
    emphasize("Number bonds for subtraction!"),
    pause(300),
    say("Have you ever wondered how to find the missing part when something is taken away?"),
    pause(200),
    say("That's exactly what we'll learn together today!"),
    pause(400),
    ask("Are you ready to crack the number bonds and become a maths detective?"),
    pause(300),
    cheer("I know you're going to do an amazing job! Let's go!"),
  ];
}

// ─── WONDER PHASE ────────────────────────────────
export function wonderNarration(questionText, subtext) {
  return [
    say("Hmm, let me think about this for a moment..."),
    pause(800),
    ask(questionText, 2500),
    pause(400),
    think("Take a moment to think carefully about that."),
    pause(600),
    say(subtext, 400),
    pause(300),
    cheer("What a wonderful, curious question! Let's discover the answer together!"),
    pause(200),
  ];
}

export function wonderDiscoverNarration() {
  return [
    celebrate("Let's find out together!"),
    pause(300),
    say("I just know you're going to absolutely love what comes next!"),
    pause(300),
  ];
}

// ─── STORY PHASE ─────────────────────────────────

export function getStoryNarration(slideIndex) {
  switch (slideIndex) {
    case 0:
      return [
        cheer("Let me tell you a wonderful story about Wei Ming!"),
        pause(400),
        say("Wei Ming has a whole bunch of shiny stickers."),
        pause(300),
        emphasize("He has 8 stickers!"),
        pause(400),
        say("He wants to share some with his best friend Priya, so he gives her some stickers."),
        pause(300),
        emphasize("He gives her 3 stickers."),
        pause(400),
        say("Wei Ming looks at his pile and wonders..."),
        pause(300),
        ask("How many stickers do I have left?", 2000),
      ];
    case 1:
      return [
        say("To find out, we need to take away the stickers he gave to Priya."),
        pause(300),
        say("We take away the 3 stickers."),
        pause(400),
        instruct("Do you know what taking away is called?"),
        pause(300),
        emphasize("It's called subtraction!"),
        pause(400),
        say("When we subtract, the number gets smaller and smaller."),
        pause(300),
        celebrate("Watch this..."),
        pause(300),
        say("When we subtract, the number gets smaller!"),
        emphasize("8 take away 3 leaves 5!"),
        pause(500),
        celebrate("Subtract means take away!"),
      ];
    case 2:
      return [
        say("Now, Wei Ming had a brilliant idea."),
        pause(400),
        say("He drew a special picture called a number bond."),
        pause(300),
        say("A number bond is like a puzzle that shows how numbers are connected!"),
        pause(400),
        emphasize("He put the whole 8 at the top of the picture."),
        pause(400),
        say("Then he made two branches going down."),
        pause(300),
        say("One branch showed 3 for Priya's stickers."),
        pause(300),
        say("The other branch showed 5 for his own stickers."),
        pause(400),
        say("And here's the amazing part..."),
        pause(300),
        emphasize("The whole minus a part equals the other part!"),
        pause(400),
        ask("Can you crack this number bond puzzle with me?", 1800),
        pause(400),
        emphasize("Whole minus part equals part!"),
        pause(300),
        cheer("That's the secret to number bonds!"),
      ];
    case 3:
      return [
        say("He had just learned an incredible superpower."),
        pause(300),
        say("He could use number bonds to solve subtraction problems so easily!"),
        pause(400),
        ask("Isn't that amazing? Do you want to learn this superpower too?", 1200),
        pause(400),
        cheer("And so, the number bond adventure began!"),
        pause(300),
        say("Now it's your turn to explore this wonderful world of number bonds!"),
        pause(400),
        celebrate("Let's try some hands-on activities where you can practice your new skills!"),
        pause(300),
        cheer("Are you ready to become a number bonds champion?"),
      ];
    default:
      return [];
  }
}

// ─── SIMULATE PHASE ──────────────────────────────

export function simulateStation1Intro(whole, removed) {
  return [
    cheer("Wonderful! Let's try this together!"),
    pause(300),
    say(`We have a pile of counters in front of us.`),
    pause(200),
    emphasize(`We have ${whole} counters in total!`),
    pause(400),
    say(`Now, here's what I want you to do.`),
    pause(300),
    say(`Drag ${removed} counters to the bin to take them away.`),
    pause(300),
    ask(`After you take those away, how many counters will be left?`, 2000),
    pause(400),
    instruct("Go ahead and try it now! I believe in you!"),
    pause(300),
  ];
}

export function simulateStation2Intro() {
  return [
    say("Great work at that station!"),
    pause(300),
    say("Now let's build a number bond together!"),
    pause(400),
    say("Look carefully at the number bond diagram in front of you."),
    pause(300),
    say("You need to find the missing part."),
    pause(400),
    instruct("Type the missing number in the empty circle!"),
    pause(300),
    ask("Can you complete this number bond?"),
    pause(300),
  ];
}

export function simulateStation3Intro() {
  return [
    say("Excellent! You're doing so well!"),
    pause(300),
    say("Now here's a subtraction sentence for you."),
    pause(400),
    say("You can click to see the number bond if you need a helpful hint."),
    pause(400),
    say("Look at the pattern and think about what number is missing."),
    pause(300),
    instruct("Type the missing number to complete the sentence!"),
    pause(300),
  ];
}

export function simulateAllComplete() {
  return [
    celebrate("You've explored all the stations!"),
    pause(300),
    cheer("You now know how to use number bonds to subtract!"),
    pause(300),
    say("You've learned something new and important today."),
    pause(400),
    say("This is where the real adventure begins!"),
    pause(400),
    say("Each challenge you'll see is a subtraction puzzle waiting to be solved."),
    pause(300),
    instruct("Read each challenge carefully and think about it."),
    pause(400),
    say("Use everything you learned about number bonds."),
    pause(300),
    say("Remember, number bonds help us find the missing parts."),
    pause(400),
    cheer("I believe in you! You're going to do an amazing job!"),
    pause(300),
    ask("Are you ready to take on the big challenge?", 1500),
    pause(300),
    celebrate("Let's play and show what you've learned!"),
    pause(300),
  ];
}

// ─── PLAY PHASE ──────────────────────────────────

export function playWorldIntro(worldName) {
  return [
    celebrate(`Welcome to ${worldName}!`),
    pause(300),
    instruct("Read each subtraction challenge carefully."),
    pause(300),
    say("Use your number bonds to find the missing parts."),
    pause(300),
    cheer("I believe in you! Let's go!"),
    pause(300),
  ];
}

export function playReadQuestion(questionText) {
  return [
    say(questionText, 300),
    pause(600),
    think("Take a moment to think carefully about the answer."),
    pause(500),
    say("Use what you learned about number bonds to help you."),
    pause(400),
  ];
}

// Help and encouragement during activity
export function getHelpNarration(hintLevel = 1) {
  const hints = [
    [
      say("Good question! Let me help you think about this."),
      pause(300),
      think("Look at the number bond. What is the whole number at the top?"),
      pause(400),
    ],
    [
      say("Here's a helpful hint: Remember the number bond pattern."),
      pause(300),
      emphasize("Whole minus part equals the other part!"),
      pause(400),
      think("Can you use this to find the answer?"),
      pause(300),
    ],
    [
      celebrate("You're so close! Keep thinking!"),
      pause(300),
      say("One more hint: Count carefully on your fingers if that helps!"),
      pause(400),
      cheer("I know you can do this!"),
      pause(300),
    ],
  ];
  return hints[Math.min(hintLevel - 1, hints.length - 1)];
}

// Encouragement prompts during practice
export function getEncouragementNarration() {
  const messages = [
    [say("You're doing such a great job!"), pause(300)],
    [say("I can see you're really thinking hard!"), pause(300)],
    [say("Your effort is amazing!"), pause(300)],
    [say("Keep going! You're getting better!"), pause(300)],
    [cheer("You've got this! I believe in you!"), pause(300)],
    [say("Great focus! Keep it up!"), pause(300)],
    [say("You're such a smart mathematician!"), pause(300)],
    [celebrate("What wonderful thinking!"), pause(300)],
  ];
  const idx = Math.floor(Math.random() * messages.length);
  return messages[idx];
}

const CORRECT_PHRASES = [
  "That's absolutely right! You're a superstar!",
  "Excellent! You cracked the number bond perfectly!",
  "Wonderful! You found the missing part with amazing logic!",
  "Brilliant! You're really understanding this!",
  "Perfect! You're getting so good at subtraction!",
  "Yes! You nailed it! Great job!",
  "Absolutely correct! Your thinking is spot on!",
  "Amazing! You're on fire with these problems!",
  "Fantastic work! I'm so very proud of you!",
  "Spot on! You really understand how number bonds work!",
  "Incredible! You solved that like a true maths detective!",
  "Great work! You're a number bond champion!",
  "Wow! You got it right! You're doing wonderfully!",
  "Terrific! Your brain is working so hard and it shows!",
  "Super smart! You knew exactly what to do!",
];

const WRONG_PHRASES = [
  "Not quite, but that's perfectly okay! Look at the number bond and try again.",
  "Oops! That wasn't it this time, but mistakes are how we learn! Let's try the next one.",
  "Almost! Don't worry, you're doing great! Let's keep going.",
  "That's alright! Mistakes help our brains grow stronger.",
  "Keep trying! You are doing wonderful work and getting better!",
  "That answer wasn't right, but I can see you're trying hard! Let's try another.",
  "Not this time, but you're learning so much! Give the next one a go!",
  "Hmm, not quite! But I know you can get the next one!",
  "That's not the answer I was looking for, but don't be sad! You're still amazing!",
];

const STREAK_PHRASES = [
  "WOW! You're on a streak! Look at you go!",
  "Amazing! Look at this incredible streak!",
  "Unstoppable! Nothing can stop you now!",
  "You're on fire! What a fantastic streak!",
  "Super duper amazing! You're on a winning streak!",
  "Wow wow wow! This streak is incredible!",
  "You're crushing it! What an amazing streak!",
  "Fantastic! Your streak is getting bigger and bigger!",
];

let correctPhraseIdx = 0;
let wrongPhraseIdx = 0;
let streakPhraseIdx = 0;

export function playCorrectNarration(streak = 0) {
  const base = CORRECT_PHRASES[correctPhraseIdx % CORRECT_PHRASES.length];
  correctPhraseIdx++;

  if (streak >= 5 && streak % 5 === 0) {
    const streakMsg = STREAK_PHRASES[streakPhraseIdx % STREAK_PHRASES.length];
    streakPhraseIdx++;
    return [
      celebrate(base),
      pause(300),
      celebrate(streakMsg),
      pause(200),
    ];
  }
  return [
    cheer(base),
    pause(200),
  ];
}

export function playWrongNarration() {
  const phrase = WRONG_PHRASES[wrongPhraseIdx % WRONG_PHRASES.length];
  wrongPhraseIdx++;
  return [
    say(phrase),
    pause(300),
  ];
}

export function playWorldComplete(worldName, score, total) {
  const pct = Math.round((score / total) * 100);
  if (pct >= 90) {
    return [
      celebrate(`${worldName} is complete!`),
      pause(300),
      celebrate(`You got ${score} out of ${total}! That's absolutely incredible!`),
      pause(300),
      cheer("You are a true subtraction champion! I'm so proud of you!"),
      pause(300),
    ];
  }
  if (pct >= 70) {
    return [
      celebrate(`${worldName} is complete!`),
      pause(300),
      say(`You got ${score} out of ${total}! That's wonderful effort!`),
      pause(300),
      cheer("You're doing so well! Keep practicing and you'll be even better!"),
      pause(300),
    ];
  }
  return [
    say(`${worldName} is complete!`),
    pause(300),
    say(`You got ${score} out of ${total}. Good start!`),
    pause(300),
    cheer("Try again soon and watch your score grow! Every attempt helps you learn!"),
    pause(300),
  ];
}

// ─── REFLECT PHASE ───────────────────────────────

export function reflectIntroNarration() {
  return [
    say("Take a moment and think about everything we've learned today."),
    pause(400),
    say("We have a wonderful robot friend who wants to learn from you!"),
    pause(300),
    instruct("Our robot friend has some special questions for you!"),
    pause(400),
    ask("Can you teach our mascot friend what you know about number bonds?", 1500),
    pause(300),
    cheer("Let's try this together! I know you'll do amazing!"),
    pause(300),
  ];
}

export function reflectCorrectNarration() {
  return [
    cheer("Great explanation! You really understand how this works!"),
    pause(300),
    say("You can explain maths so well!"),
    pause(300),
  ];
}

export function reflectWrongNarration() {
  return [
    say("That's not quite right, but don't worry!"),
    pause(300),
    say("Learning is a journey, and you're doing great!"),
    pause(300),
    cheer("Let's try the next one!"),
    pause(300),
  ];
}

export function reflectConfidenceNarration() {
  return [
    ask("How do you feel about subtraction and number bonds now?", 1500),
    pause(400),
    say("Be honest! Every answer is a wonderful answer."),
    pause(400),
    say("There are no wrong feelings here."),
    pause(300),
  ];
}

export function reflectCertificateNarration(pct) {
  if (pct >= 80) {
    return [
      celebrate("Congratulations! You've completed the entire learning journey!"),
      pause(300),
      celebrate("You are officially a Subtraction Master!"),
      pause(400),
      cheer("I am so incredibly proud of you! Keep up this wonderful work!"),
      pause(300),
    ];
  }
  if (pct >= 50) {
    return [
      celebrate("You've completed the learning journey!"),
      pause(300),
      cheer("Wonderful effort! You're getting better every single day!"),
      pause(400),
      say("Come back and practice again anytime. Each time you'll get stronger!"),
      pause(300),
    ];
  }
  return [
    say("You've completed the learning journey!"),
    pause(300),
    cheer("Good start! Practice makes perfect, and you're on your way!"),
    pause(400),
    say("Try again soon and watch how much you improve! You've got this!"),
    pause(300),
  ];
}
