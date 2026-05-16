// ──────────────────────────────────────────────────
// Narration Scripts — Natural Teacher Voice
// Warm, child-friendly narration for each lesson phase
// ──────────────────────────────────────────────────

import { say, ask, cheer, emphasize, think, celebrate, instruct, pause } from './audio';

// ─── INTRO SCREEN ────────────────────────────────
export function introNarration() {
  return [
    cheer("Hello there, superstar! Welcome to today's maths adventure!"),
    say("Today, we're going to learn something really exciting."),
    emphasize("Number bonds for subtraction!"),
    say("Have you ever wondered how to find the missing part when something is taken away? That's exactly what we'll learn today!", 600),
    ask("Are you ready to crack the number bonds?"),
    cheer("I know you can do it! Let's go!"),
  ];
}


// ─── WONDER PHASE ────────────────────────────────
export function wonderNarration(questionText, subtext) {
  return [
    say("Hmm, let me think about this for a moment."),
    pause(600),
    ask(questionText, 2500),
    think("Take a moment to think about that."),
    say(subtext, 600),
    cheer("What a wonderful question! Let's discover the answer together!"),
  ];
}

export function wonderDiscoverNarration() {
  return [
    celebrate("Let's find out together!"),
    say("I just know you're going to love what comes next!"),
  ];
}


// ─── STORY PHASE ─────────────────────────────────

export function storySlide1Narration() {
  return [
    cheer("Let me tell you a story about Wei Ming!"),
    say("Wei Ming has 8 shiny stickers."),
    pause(400),
    say("He wants to share them with his friend Priya, so he gives 3 stickers to her."),
    say("Wei Ming wonders..."),
    ask("How many stickers do I have left?", 2000),
    think("What do you think? How can Wei Ming find out?"),
    instruct("Let's help Wei Ming solve this!"),
  ];
}

export function storySlide2Narration() {
  return [
    say("To find out, we take away the 3 stickers he gave to Priya."),
    instruct("Taking away is called subtraction."),
    say("When we subtract, the number gets smaller!"),
    emphasize("8 take away 3 leaves 5!"),
    pause(500),
    celebrate("Subtract means take away!"),
    cheer("Great thinking!"),
  ];
}

export function storySlide3Narration() {
  return [
    say("Wei Ming drew a special picture called a number bond."),
    emphasize("He put the whole 8 at the top."),
    instruct("Then he made two branches for the parts: 3 for Priya, and 5 for him."),
    say("The whole minus a part equals the other part!"),
    ask("Can you crack the number bond?", 1800),
    emphasize("Whole minus part equals part!"),
    cheer("That's the secret!"),
  ];
}

export function storySlide4Narration() {
  return [
    celebrate("Wei Ming was so excited!"),
    say("He learned he could use number bonds to solve subtraction word problems easily."),
    ask("Can we practice more?", 1200),
    cheer("And so, the number bond adventure began!"),
    say("Now it's your turn to explore!"),
    celebrate("Let's try some hands-on activities! Are you ready?"),
  ];
}

export function getStoryNarration(slideIndex) {
  switch (slideIndex) {
    case 0: return storySlide1Narration();
    case 1: return storySlide2Narration();
    case 2: return storySlide3Narration();
    case 3: return storySlide4Narration();
    default: return [];
  }
}


// ─── SIMULATE PHASE ──────────────────────────────

export function simulateStation1Intro(whole, removed) {
  return [
    cheer("Let's try this together!"),
    say(`We have ${whole} counters in total.`),
    say(`Drag ${removed} counters to the bin to take them away.`),
    ask(`How many will be left?`, 2000),
    instruct("Try it now!"),
  ];
}

export function simulateStation2Intro() {
  return [
    say("Now let's build a number bond!"),
    instruct("Look at the number bond diagram. Find the missing part and type it in!"),
    ask("Can you complete the number bond?"),
  ];
}

export function simulateStation3Intro() {
  return [
    say("Here's a subtraction sentence!"),
    say("You can click to see the number bond if you need a hint."),
    instruct("Type in the missing number to complete the sentence!"),
  ];
}

export function simulateAllComplete() {
  return [
    celebrate("You've explored all the stations!"),
    cheer("You now know how to use number bonds to subtract!"),
    say("Are you ready for the challenge?"),
    celebrate("Let's play!"),
  ];
}


// ─── PLAY PHASE ──────────────────────────────────

export function playWorldIntro(worldName) {
  return [
    celebrate(`Welcome to ${worldName}!`),
    instruct("Read each subtraction challenge carefully."),
    say("Use your number bonds to find the missing parts."),
    cheer("I believe in you! Let's go!"),
  ];
}

export function playReadQuestion(questionText) {
  return [
    say(questionText, 800),
    think("Take a moment to think about the answer."),
  ];
}

const CORRECT_PHRASES = [
  "That's right! Great thinking!",
  "Excellent! You cracked the bond!",
  "Wonderful! You found the missing part!",
  "Brilliant! Keep up the amazing work!",
  "Perfect! You're getting so good at this!",
  "Yes! You nailed it!",
  "Absolutely correct! Well done!",
  "Amazing! You're on fire!",
  "Fantastic work! I'm so proud of you!",
  "Spot on! You really understand subtraction!",
];

const WRONG_PHRASES = [
  "Not quite, but that's okay! Look at the number bond.",
  "Oops! That wasn't the right answer, let's try again!",
  "Almost! Let's try the next one. You can do it!",
  "That's alright! Mistakes help us learn.",
  "Keep trying! You are doing great!",
];

const STREAK_PHRASES = [
  "You're on a streak! Keep going!",
  "Wow, look at you go! What a streak!",
  "Unstoppable! What an amazing streak!",
  "You're on fire! Nothing can stop you!",
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
    return [celebrate(base), celebrate(streakMsg)];
  }
  return [cheer(base)];
}

export function playWrongNarration() {
  const phrase = WRONG_PHRASES[wrongPhraseIdx % WRONG_PHRASES.length];
  wrongPhraseIdx++;
  return [say(phrase)];
}

export function playWorldComplete(worldName, score, total) {
  const pct = Math.round((score / total) * 100);
  if (pct >= 90) {
    return [
      celebrate(`${worldName} complete!`),
      celebrate(`You got ${score} out of ${total}! That's incredible!`),
      cheer("You're a true maths champion!"),
    ];
  }
  if (pct >= 70) {
    return [
      celebrate(`${worldName} complete!`),
      say(`You got ${score} out of ${total}! Great effort!`),
      cheer("Keep practicing and you'll be even better!"),
    ];
  }
  return [
    say(`${worldName} complete!`),
    say(`You got ${score} out of ${total}.`),
    cheer("Good start! Try again to improve your score!"),
  ];
}


// ─── REFLECT PHASE ───────────────────────────────

export function reflectIntroNarration() {
  return [
    say("Now let's think about what we've learned today."),
    instruct("Our robot friend has some questions for you!"),
    ask("Can you teach the mascot what you know?", 1500),
    cheer("Let's try this together!"),
  ];
}

export function reflectCorrectNarration() {
  return [cheer("Great explanation! You really understand this!")];
}

export function reflectWrongNarration() {
  return [say("That's not quite right, but don't worry! Let's try the next one.")];
}

export function reflectConfidenceNarration() {
  return [
    ask("How do you feel about subtraction now?", 1500),
    say("Be honest! Every answer is a great answer."),
  ];
}

export function reflectCertificateNarration(pct) {
  if (pct >= 80) {
    return [
      celebrate("Congratulations! You've completed the entire journey!"),
      celebrate("You are a Subtraction Master!"),
      cheer("I'm so proud of you! Keep up the wonderful work!"),
    ];
  }
  if (pct >= 50) {
    return [
      celebrate("You've completed the journey!"),
      cheer("Great effort! You're getting better every day!"),
      say("Come back and practice again anytime!"),
    ];
  }
  return [
    say("You've completed the journey!"),
    cheer("Good start! Practice makes perfect!"),
    say("Try again and watch your score grow!"),
  ];
}
