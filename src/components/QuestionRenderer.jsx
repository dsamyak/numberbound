import React, { useState, useCallback } from 'react';
import NumberBondDiagram from './NumberBondDiagram';

// Visual aids for word problems
function Visual({ question }) {
  if (!question.visual) return null;

  if (question.visual === 'bond') {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', margin: '24px 0' }}>
        <NumberBondDiagram 
          whole={question.missingSlot === 'whole' ? '?' : question.whole} 
          part1={question.missingSlot === 'part1' ? '?' : question.part1} 
          part2={question.missingSlot === 'part2' ? '?' : question.part2} 
          missing={question.missingSlot} 
        />
      </div>
    );
  }

  if (question.visual === 'picture') {
    return (
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', margin: '24px 0' }}>
        {Array.from({ length: question.whole }, (_, i) => (
          <div key={i} style={{ 
            position: 'relative', fontSize: '2.5rem', 
            opacity: i < question.part1 ? 0.4 : 1,
            transform: i < question.part1 ? 'scale(0.8)' : 'scale(1)'
          }}>
            {question.counterEmoji}
            {i < question.part1 && (
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'red', fontSize: '3rem', fontWeight: 'bold' }}>X</div>
            )}
          </div>
        ))}
      </div>
    );
  }

  if (question.visual === 'sentence') {
    return null; // The sentence is in the text
  }

  return null;
}

// Custom option renderer for 'bond_options'
function OptionButton({ opt, onClick, cls }) {
  if (typeof opt === 'string' && opt.startsWith('Whole:')) {
    const parts = opt.split(', Parts:');
    const whole = parts[0].replace('Whole:', '');
    const [p1, p2] = parts[1].split(',');
    return (
      <button className={cls} onClick={() => onClick(opt)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '16px' }}>
        <NumberBondDiagram whole={whole} part1={p1} part2={p2} missing="none" />
      </button>
    );
  }

  return (
    <button className={cls} onClick={() => onClick(opt)}>
      {opt}
    </button>
  );
}

// Main Question Renderer
export default function QuestionRenderer({ question, onAnswer, disabled }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = useCallback((option) => {
    if (disabled) return;
    setSelectedOption(option);
    const isCorrect = String(option) === String(question.correctAnswer);
    setTimeout(() => {
      onAnswer(isCorrect);
      setSelectedOption(null);
    }, 600);
  }, [disabled, question.correctAnswer, onAnswer]);

  return (
    <div>
      <div style={{ display: 'inline-block', background: 'var(--coral)', color: 'white', padding: '4px 12px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 700, marginBottom: 12, letterSpacing: '0.5px' }}>
        📝 NUMBER BONDS
      </div>
      <p className="question-text">{question.questionText}</p>
      
      <Visual question={question} />

      {question.options && (
        <div className="options-grid">
          {question.options.map((opt, i) => {
            let cls = 'option-btn';
            if (disabled) cls += ' disabled';
            if (selectedOption === opt) {
              cls += String(opt) === String(question.correctAnswer) ? ' correct' : ' wrong';
            } else if (disabled && String(opt) === String(question.correctAnswer)) {
              cls += ' correct';
            }
            return (
              <OptionButton key={i} opt={opt} onClick={handleOptionClick} cls={cls} />
            );
          })}
        </div>
      )}
    </div>
  );
}
