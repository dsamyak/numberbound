// ──────────────────────────────────────────────────
// Narration Scripts — Exact Screen Text Match
// ──────────────────────────────────────────────────

import { say, ask, cheer, emphasize, think, celebrate, instruct, pause } from './audio';

// ─── INTRO SCREEN ────────────────────────────────
export function introNarration() {
  return [
    cheer("Number Bonds For Subtraction"),
    say("Lesson 3.2. Subtract within 20 using number bonds"),
    cheer("Let's crack the number bonds!"),
    say("Learn to use number bonds to take away numbers, find the missing part, and solve subtraction challenges!"),
    say("Your Learning Journey. Wonder. A subtraction mystery! Story. See subtraction in action. Simulate. Build number bonds. Play. Gamified challenges. Reflect. What did you learn?"),
  ];
}

// ─── WONDER PHASE ────────────────────────────────
export function wonderNarration(questionText, subtext) {
  return [
    think("Hmm... I wonder..."),
    ask(questionText),
    say(subtext),
  ];
}

export function wonderDiscoverNarration() {
  return [
    celebrate("Let's Discover!"),
  ];
}

// ─── STORY PHASE ─────────────────────────────────

export function getStoryNarration(slideIndex) {
  switch (slideIndex) {
    case 0:
      return [
        say("Wei Ming's Stickers"),
        say("Wei Ming has 8 shiny stickers. He wants to share them with his friend Priya, so he gives 3 stickers to her. Wei Ming wonders..."),
        ask("How many stickers do I have left?"),
        say("Let's help Wei Ming!"),
      ];
    case 1:
      return [
        say("Taking Away!"),
        say("To find out, we take away the 3 stickers he gave to Priya. Taking away is called subtraction. When we subtract, the number gets smaller!"),
        emphasize("8 take away 3 leaves 5!"),
        say("Subtract means take away!"),
      ];
    case 2:
      return [
        say("The Number Bond Secret"),
        say("Wei Ming drew a special picture called a number bond. He put the whole 8 at the top. Then he made two branches for the parts: 3 for Priya, and 5 for him. \"The whole minus a part equals the other part!\" he said."),
        emphasize("Whole minus Part equals Part!"),
        say("Crack the number bond!"),
      ];
    case 3:
      return [
        say("Let's Solve Together!"),
        say("Wei Ming was so excited! He learned he could use number bonds to solve subtraction word problems easily. \"Can we practice more?\" he asked."),
        cheer("Number bonds — here we come!"),
        say("Your turn now!"),
      ];
    default:
      return [];
  }
}

// ─── SIMULATE PHASE ──────────────────────────────

export function simulateStation1Intro(whole, removed) {
  return [
    say("Counter Take-Away"),
    say(`Start with ${whole} counters. Tap to take away ${removed}.`),
  ];
}

export function simulateStation2Intro() {
  return [
    say("Number Bond Builder"),
    say("Find the missing number to complete the bond!"),
  ];
}

export function simulateStation3Intro() {
  return [
    say("Number Sentence"),
    say("Fill in the blank! Use the number pad."),
  ];
}

export function simulateAllComplete() {
  return []; // No text on screen, so no narration to match
}

// ─── PLAY PHASE ──────────────────────────────────

export function playWorldIntro(worldName) {
  return [
    celebrate(`Welcome to ${worldName}!`),
  ];
}

export function playReadQuestion(questionText) {
  return [
    say(questionText),
  ];
}

export function getHelpNarration(hintLevel = 1) {
  // No text on screen for hints
  return [];
}

export function getEncouragementNarration() {
  // No text on screen for random encouragement
  return [];
}

export function playCorrectNarration(streak = 0) {
  return [];
}

export function playWrongNarration() {
  return [];
}

export function playWorldComplete(worldName, score, total) {
  return [
    say(`${worldName} Complete!`),
    say(`Score: ${score} out of ${total}`),
  ];
}

// ─── REFLECT PHASE ───────────────────────────────

export function reflectIntroNarration() {
  return [
    say("Reflect. What did you learn?"),
  ];
}

export function reflectCorrectNarration() {
  return [];
}

export function reflectWrongNarration() {
  return [];
}

export function reflectConfidenceNarration() {
  return [
    ask("How confident do you feel about subtraction using number bonds?"),
  ];
}

export function reflectCertificateNarration(pct) {
  return [
    say("Certificate of Achievement!"),
    say(`Score: ${Math.round(pct)}%`),
  ];
}
