import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  type: 'open' | 'number' | 'multiple_choice';
  options?: string[];
  hint?: string;
}

interface ScoreResult {
  level: string;
  message: string;
  color: string;
}

const questions: Question[] = [
  {
    id: 1,
    text: "Retracez le chemin de l'eau de la pluie à votre robinet.",
    type: "open",
    hint: "D'où vient votre eau potable?"
  },
  {
    id: 2,
    text: "Combien de jours avant la prochaine pleine lune? (à deux jours près)",
    type: "number"
  },
  {
    id: 3,
    text: "Sur quel type de sol vous tenez-vous?",
    type: "multiple_choice",
    options: ["Argileux", "Sableux", "Limoneux", "Calcaire", "Schisteux", "Je ne sais pas"]
  },
  {
    id: 4,
    text: "Quel est le total des précipitations l'an passé? (à cent millimètres près)",
    type: "number"
  },
  {
    id: 5,
    text: "Quand a eu lieu le dernier incendie près de chez vous?",
    type: "open"
  },
  {
    id: 6,
    text: "Quelles étaient les techniques de subsistance de la société qui vous a précédé ici?",
    type: "open"
  },
  {
    id: 7,
    text: "Nommez cinq plantes indigènes comestibles et leur saison.",
    type: "open"
  },
  {
    id: 8,
    text: "De quelle direction viennent généralement les tempêtes hivernales?",
    type: "multiple_choice",
    options: ["Nord", "Sud", "Est", "Ouest", "Nord-Est", "Nord-Ouest", "Sud-Est", "Sud-Ouest"]
  },
  {
    id: 9,
    text: "Où vont vos déchets?",
    type: "open"
  },
  {
    id: 10,
    text: "Combien de temps dure la saison végétative, chez vous?",
    type: "number"
  },
  {
    id: 11,
    text: "Quel jour de l'année les ombres sont-elles les plus courtes?",
    type: "open",
    hint: "Pensez au solstice..."
  },
  {
    id: 12,
    text: "Quand le cerf brame-t-il? Quand naissent ses petits?",
    type: "open"
  },
  {
    id: 13,
    text: "Désignez cinq herbes locales et parmi elles les indigènes.",
    type: "open"
  },
  {
    id: 14,
    text: "Citez cinq oiseaux sédentaires et cinq migrateurs de votre région.",
    type: "open"
  },
  {
    id: 15,
    text: "Quelle est l'histoire de l'utilisation des terres chez vous?",
    type: "open"
  },
  {
    id: 16,
    text: "Quel événement écologique est à l'origine de la formation du paysage local?",
    type: "open",
    hint: "Question bonus : quelle preuve en avez-vous?"
  },
  {
    id: 17,
    text: "Quelles espèces ont disparu de votre territoire?",
    type: "open"
  },
  {
    id: 18,
    text: "Quelle est la principale association de plantes dans votre région?",
    type: "open"
  },
  {
    id: 19,
    text: "Depuis l'endroit où vous lisez ce questionnaire, indiquez le nord.",
    type: "multiple_choice",
    options: ["↑", "↗", "→", "↘", "↓", "↙", "←", "↖"]
  },
  {
    id: 20,
    text: "Parmi les plantes sauvages, quelle est la première à fleurir au printemps?",
    type: "open"
  }
];

const getScoreResult = (score: number): ScoreResult => {
  if (score <= 3) return {
    level: "Déconnecté",
    message: "Vous êtes à côté de la plaque ! Il est temps de sortir explorer!",
    color: "#ff4444"
  };
  if (score <= 7) return {
    level: "En éveil",
    message: "C'est difficile d'être à deux endroits en même temps quand on n'est nulle part !",
    color: "#ff9944"
  };
  if (score <= 12) return {
    level: "Conscient",
    message: "Une compréhension satisfaisante de ce qui est évident.",
    color: "#ffcc00"
  };
  if (score <= 16) return {
    level: "Ancré",
    message: "Vous prêtez attention à ce qui vous entoure.",
    color: "#88cc00"
  };
  if (score <= 19) return {
    level: "Enraciné",
    message: "Vous savez où vous êtes.",
    color: "#44cc00"
  };
  return {
    level: "Gardien du territoire",
    message: "Non seulement vous savez où vous êtes, mais vous savez où c'est !",
    color: "#00cc44"
  };
};

interface WhereYouAtQuizProps {
  isOpen: boolean;
  onClose: () => void;
}

const WhereYouAtQuiz: React.FC<WhereYouAtQuizProps> = ({ isOpen, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [selfScore, setSelfScore] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSelfScore = (score: number) => {
    setSelfScore(score);
  };

  const reset = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setSelfScore(null);
  };

  const currentQ = questions[currentQuestion];
  const scoreResult = selfScore !== null ? getScoreResult(selfScore) : null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-black/90 border border-cyan-400/20 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-cyan-400/20">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-cyan-300">Where You At?</h2>
            <p className="text-sm text-cyan-100">Quiz de conscience biorégionale</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-cyan-300 hover:text-cyan-100 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {!showResults ? (
          <div className="p-4 sm:p-6">
            {/* Progress */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm text-cyan-200">
                Question {currentQuestion + 1} / {questions.length}
              </span>
              <div className="flex-1 mx-4 bg-black/50 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="bg-black/40 rounded-xl p-4 sm:p-6 mb-6">
              <h3 className="text-lg sm:text-xl text-cyan-300 mb-4">{currentQ.text}</h3>
              
              {currentQ.hint && (
                <p className="text-sm text-cyan-200 mb-4 italic">💡 {currentQ.hint}</p>
              )}

              {currentQ.type === 'open' && (
                <textarea
                  value={answers[currentQ.id] || ''}
                  onChange={(e) => handleAnswer(currentQ.id, e.target.value)}
                  placeholder="Votre réponse..."
                  className="w-full p-3 bg-black/50 border border-cyan-500/30 rounded-lg text-cyan-100 placeholder-cyan-300/50 resize-none"
                  rows={4}
                />
              )}

              {currentQ.type === 'number' && (
                <input
                  type="number"
                  value={answers[currentQ.id] || ''}
                  onChange={(e) => handleAnswer(currentQ.id, e.target.value)}
                  placeholder="Votre réponse..."
                  className="w-full p-3 bg-black/50 border border-cyan-500/30 rounded-lg text-cyan-100 placeholder-cyan-300/50"
                />
              )}

              {currentQ.type === 'multiple_choice' && currentQ.options && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentQ.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(currentQ.id, option)}
                      className={`p-3 rounded-lg border transition-all ${
                        answers[currentQ.id] === option
                          ? 'bg-cyan-600/30 border-cyan-400 text-cyan-300'
                          : 'bg-black/30 border-cyan-500/30 text-cyan-100 hover:bg-cyan-600/10'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <button
                onClick={handlePrev}
                disabled={currentQuestion === 0}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  currentQuestion === 0
                    ? 'text-cyan-600 cursor-not-allowed'
                    : 'text-cyan-300 hover:text-cyan-100 border border-cyan-500/30 hover:border-cyan-400/50'
                }`}
              >
                <ChevronLeft size={20} />
                Précédent
              </button>

              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-4 py-2 bg-cyan-600/30 hover:bg-cyan-600/40 text-cyan-300 border border-cyan-500/50 rounded-lg transition-colors"
              >
                {currentQuestion === questions.length - 1 ? 'Terminer' : 'Suivant'}
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        ) : (
          <div className="p-4 sm:p-6">
            {!selfScore ? (
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-cyan-300 mb-4">
                  Auto-évaluation
                </h3>
                <p className="text-cyan-100 mb-6">
                  Sur combien de questions pensez-vous avoir donné une bonne réponse ?
                  <br />
                  <span className="text-sm italic">La notation est faite sur l'honneur.</span>
                </p>
                
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 max-w-md mx-auto">
                  {Array.from({ length: 21 }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelfScore(i)}
                      className="aspect-square bg-black/40 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400/50 rounded-lg transition-colors"
                    >
                      {i}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div 
                  className="inline-block px-6 py-3 rounded-2xl mb-4"
                  style={{ backgroundColor: `${scoreResult?.color}20`, border: `1px solid ${scoreResult?.color}50` }}
                >
                  <h3 
                    className="text-2xl sm:text-3xl font-bold mb-2"
                    style={{ color: scoreResult?.color }}
                  >
                    {scoreResult?.level}
                  </h3>
                  <p className="text-lg text-cyan-100">
                    Score: {selfScore}/20
                  </p>
                </div>
                
                <p className="text-cyan-100 mb-6 max-w-2xl mx-auto">
                  {scoreResult?.message}
                </p>

                <div className="bg-black/40 rounded-xl p-4 sm:p-6 mb-6 text-left">
                  <h4 className="text-lg font-bold text-cyan-300 mb-3">À propos de ce quiz</h4>
                  <p className="text-sm text-cyan-100 mb-3">
                    À quel point connaissez-vous votre bio-région ? Ce questionnaire, traduit de la version originale 
                    de Van Andruss (1981), invite à réfléchir sur notre ancrage territorial. Plus qu'un simple test, 
                    c'est une invitation à explorer et découvrir ce qui fait région.
                  </p>
                  <p className="text-xs text-cyan-200 italic">
                    Van Andruss, Christopher Plant, Judith Plant, Eleanor Wright (1990), Home! A Bioregional Reader, 
                    Philadelphia, New Society Publishers. Traduit par Martin Paquot.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={reset}
                    className="px-6 py-2 bg-cyan-600/30 hover:bg-cyan-600/40 text-cyan-300 border border-cyan-500/50 rounded-lg transition-colors"
                  >
                    Refaire le test
                  </button>
                  <button
                    onClick={onClose}
                    className="px-6 py-2 bg-black/30 hover:bg-black/40 text-cyan-300 border border-cyan-500/50 rounded-lg transition-colors"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default WhereYouAtQuiz;