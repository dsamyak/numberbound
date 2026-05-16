// Singapore context
const sgNames = ['Mia','Raju','Wei Ming','Priya','Ahmad','Siti','Ming','Kavya','Jason','Lin', 'Jun', 'Ryan', 'Xiao Ling'];
const femaleNames = ['Mia','Priya','Siti','Kavya','Lin','Xiao Ling'];
const sgSettings = ['playground','classroom','hawker centre','void deck','provision shop'];

export function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function pronoun(name) { return femaleNames.includes(name) ? 'her' : 'him'; }

export function generateDistractors(correct, min = 0, max = 20, count = 3) {
  const distractors = new Set();
  let attempts = 0;
  while (distractors.size < count && attempts < 50) {
    const offset = (Math.random() > 0.5 ? 1 : -1) * (Math.ceil(Math.random() * 3));
    const d = correct + offset;
    if (d >= min && d <= max && d !== correct) distractors.add(d);
    attempts++;
  }
  // Fallback distractors if not enough found
  [correct - 1, correct + 1, correct + 2].forEach(d => {
    if (d >= min && d <= max && d !== correct && distractors.size < count)
      distractors.add(d);
  });
  return shuffleArray([correct, ...distractors]);
}

// Helper to generate whole, part1, part2 based on difficulty
function generateNumbers(diff, type) {
  let whole, part1, part2;
  if (type === 'within_20' || type === 'find_whole_hard') {
      whole = Math.floor(Math.random() * 6) + 15; // 15-20
      part1 = Math.floor(Math.random() * 9) + 1; // 1-9
  } else if (diff === 1) { // Easy: within 10
      whole = Math.floor(Math.random() * 6) + 5; // 5-10
      part1 = Math.floor(Math.random() * (whole - 1)) + 1; // 1 to whole-1
  } else if (diff === 2) { // Medium: within 15
      whole = Math.floor(Math.random() * 6) + 10; // 10-15
      part1 = Math.floor(Math.random() * (whole - 1)) + 1;
  } else { // Hard: within 20
      whole = Math.floor(Math.random() * 6) + 15; // 15-20
      part1 = Math.floor(Math.random() * (whole - 1)) + 1;
  }
  part2 = whole - part1;
  return { whole, part1, part2 };
}

// 10 Question Types
// Q1: Number bond diagram - find part
function genQ1(id, diff) {
  const { whole, part1, part2 } = generateNumbers(diff);
  return {
    id, type: 'bond_diagram', world: 0, difficulty: diff,
    whole, part1, part2, missingSlot: 'part2',
    questionText: `Look at the number bond. What is the missing part?`,
    visual: 'bond',
    hint1: `The whole is ${whole}. One part is ${part1}.`,
    hint2: `Count ${whole} and take away ${part1}. How many are left?`,
    explanation: `${whole} – ${part1} = ${part2}. The missing part is ${part2}.`,
    options: generateDistractors(part2),
    correctAnswer: part2
  };
}

// Q2: Subtraction sentence - fill blank
function genQ2(id, diff) {
  const { whole, part1, part2 } = generateNumbers(diff);
  return {
    id, type: 'fill_blank', world: 0, difficulty: diff,
    whole, part1, part2, missingSlot: 'part2',
    questionText: `Fill in the blank: ${whole} – ___ = ${part2}`,
    visual: 'sentence',
    hint1: `If ${whole} take away something leaves ${part2}, what is the missing part?`,
    hint2: `Think of the number bond: ${part2} + ___ = ${whole}.`,
    explanation: `${whole} – ${part1} = ${part2}. The missing number is ${part1}.`,
    options: generateDistractors(part1),
    correctAnswer: part1
  };
}

// Q3: Picture take-away
function genQ3(id, diff) {
  const { whole, part1, part2 } = generateNumbers(diff);
  const emoji = pick(['⭐', '🍎', '🍪', '🎈', '🚗', '🧸']);
  return {
    id, type: 'picture_takeaway', world: 0, difficulty: diff,
    whole, part1, part2, missingSlot: 'part2',
    questionText: `There are ${whole} ${emoji}, and ${part1} are crossed out. How many are left?`,
    visual: 'picture', counterEmoji: emoji,
    hint1: `Count the ${emoji} that are NOT crossed out.`,
    hint2: `${whole} take away ${part1} is...`,
    explanation: `${whole} – ${part1} = ${part2}. There are ${part2} left.`,
    options: generateDistractors(part2),
    correctAnswer: part2
  };
}

// Q4: Word problem
function genQ4(id, diff) {
  const { whole, part1, part2 } = generateNumbers(diff);
  const name = pick(sgNames);
  const giver = pick(sgNames.filter(n => n !== name));
  const obj = pick(['sweets', 'stickers', 'apples', 'cookies', 'books', 'marbles']);
  return {
    id, type: 'word_problem', world: 0, difficulty: diff,
    whole, part1, part2, missingSlot: 'part2',
    questionText: `${name} has ${whole} ${obj}. ${pronoun(name)} gives ${part1} to ${giver}. How many ${obj} does ${name} have left?`,
    visual: 'picture', counterEmoji: '🏷️', characterName: name, objectName: obj,
    hint1: `Draw a number bond. Put ${whole} at the top. Put ${part1} in one circle.`,
    hint2: `${whole} take away ${part1}. Count backwards from ${whole}.`,
    explanation: `${whole} – ${part1} = ${part2}. ${name} has ${part2} ${obj} left.`,
    options: generateDistractors(part2),
    correctAnswer: part2
  };
}

// Q5: Fact family
function genQ5(id, diff) {
  const { whole, part1, part2 } = generateNumbers(diff);
  return {
    id, type: 'fact_family', world: 0, difficulty: diff,
    whole, part1, part2, missingSlot: 'part2',
    questionText: `Which sentence belongs to the fact family for ${part1}, ${part2}, and ${whole}?`,
    visual: 'sentence',
    hint1: `A fact family uses the same three numbers: ${part1}, ${part2}, and ${whole}.`,
    hint2: `If ${part1} + ${part2} = ${whole}, then ${whole} – ${part1} = ?`,
    explanation: `The family is ${part1}+${part2}=${whole}, ${part2}+${part1}=${whole}, ${whole}-${part1}=${part2}, ${whole}-${part2}=${part1}.`,
    options: shuffleArray([`${whole} - ${part1} = ${part2}`, `${whole} + ${part1} = ${whole + part1}`, `${part1} - ${part2} = ${Math.abs(part1 - part2)}`, `${whole} - ${part2} = ${whole}`]),
    correctAnswer: `${whole} - ${part1} = ${part2}`
  };
}

// Q6: True/False
function genQ6(id, diff) {
  const { whole, part1, part2 } = generateNumbers(diff);
  const isTrue = Math.random() > 0.5;
  const fakePart2 = isTrue ? part2 : (part2 + (Math.random() > 0.5 ? 1 : -1));
  return {
    id, type: 'true_false', world: 0, difficulty: diff,
    whole, part1, part2: fakePart2, missingSlot: 'none',
    questionText: `Is this correct? ${whole} – ${part1} = ${fakePart2}`,
    visual: 'sentence',
    hint1: `Check the math: what is ${whole} take away ${part1}?`,
    hint2: `Does ${part1} + ${fakePart2} make ${whole}?`,
    explanation: `${whole} – ${part1} is ${part2}. So the statement is ${isTrue ? 'True' : 'False'}.`,
    options: ['True', 'False'],
    correctAnswer: isTrue ? 'True' : 'False'
  };
}

// Q7: Part-whole match bond
function genQ7(id, diff) {
  const { whole, part1, part2 } = generateNumbers(diff);
  return {
    id, type: 'match_bond', world: 0, difficulty: diff,
    whole, part1, part2, missingSlot: 'none',
    questionText: `Which number bond matches the sentence: ${whole} – ${part1} = ${part2}?`,
    visual: 'bond_options', // Custom renderer needed
    hint1: `The whole is ${whole}, so ${whole} must be at the top!`,
    hint2: `The parts are ${part1} and ${part2} at the bottom.`,
    explanation: `The whole is ${whole}, and the parts are ${part1} and ${part2}.`,
    options: generateDistractors(part1, 1, 20, 3).map(d => `Whole:${whole}, Parts:${d},${whole-d}`),
    correctAnswer: `Whole:${whole}, Parts:${part1},${part2}` // Render will parse this
  };
}

// Q8: Number before/after link
function genQ8(id, diff) {
  const { whole, part1, part2 } = generateNumbers(diff);
  return {
    id, type: 'number_before_after', world: 0, difficulty: diff,
    whole, part1, part2, missingSlot: 'whole',
    questionText: `___ – ${part1} = ${part2}`,
    visual: 'sentence',
    hint1: `To find the whole, we add the two parts together.`,
    hint2: `${part1} + ${part2} = ?`,
    explanation: `The parts are ${part1} and ${part2}. ${part1} + ${part2} = ${whole}.`,
    options: generateDistractors(whole),
    correctAnswer: whole
  };
}

// Q9: Double subtraction (within 20)
function genQ9(id, diff) {
  const { whole, part1, part2 } = generateNumbers(diff, 'within_20');
  return {
    id, type: 'within_20', world: 0, difficulty: diff,
    whole, part1, part2, missingSlot: 'part2',
    questionText: `${whole} – ${part1} = ___`,
    visual: 'sentence',
    hint1: `Start at ${whole} and count back ${part1}.`,
    hint2: `Use a number bond: ${whole} has parts ${part1} and what else?`,
    explanation: `${whole} – ${part1} = ${part2}.`,
    options: generateDistractors(part2),
    correctAnswer: part2
  };
}

// Q10: Find the whole (Reverse)
function genQ10(id, diff) {
  const { whole, part1, part2 } = generateNumbers(diff, diff === 3 ? 'find_whole_hard' : '');
  return {
    id, type: 'find_whole', world: 0, difficulty: diff,
    whole, part1, part2, missingSlot: 'whole',
    questionText: `What is the missing whole in this number bond? Parts: ${part1} and ${part2}`,
    visual: 'bond',
    hint1: `To find the whole, you ADD the parts.`,
    hint2: `${part1} + ${part2} = ?`,
    explanation: `The parts are ${part1} and ${part2}. ${part1} + ${part2} = ${whole}.`,
    options: generateDistractors(whole),
    correctAnswer: whole
  };
}

const generators = [genQ1, genQ2, genQ3, genQ4, genQ5, genQ6, genQ7, genQ8, genQ9, genQ10];
const diffDist = [
  // PRD requires Easy(39)/Med(36)/Hard(25) distributed across types
  // We'll just generate 10 questions per type (total 100).
  // Dist for Q1: 5 Easy, 3 Med, 2 Hard
  { q1: [1,1,1,1,1,2,2,2,3,3], 
    q2: [1,1,1,1,2,2,2,2,3,3], 
    q3: [1,1,1,1,1,2,2,2,3,3], 
    q4: [1,1,1,2,2,2,2,3,3,3],
    q5: [1,1,1,1,2,2,2,3,3,3],
    q6: [1,1,1,1,1,2,2,2,3,3],
    q7: [1,1,1,1,2,2,2,2,3,3],
    q8: [1,1,1,2,2,2,2,3,3,3],
    q9: [1,1,1,2,2,2,2,3,3,3],
    q10: [1,1,1,2,2,2,2,3,3,3]
  }
];

export function generateSessionQuestions() {
  const bank = [];
  let qid = 1;
  const dist = diffDist[0];
  
  const qKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10'];
  
  generators.forEach((gen, gi) => {
    const diffs = dist[qKeys[gi]];
    diffs.forEach(diff => {
      bank.push(gen(`Q${gi + 1}_${String(qid).padStart(3, '0')}`, diff));
      qid++;
    });
  });
  
  // Assign worlds after shuffle
  const selected = shuffleArray(bank);
  selected.forEach((q, index) => {
    q.world = Math.floor(index / 10);
  });
  
  return selected;
}

export { sgNames };
