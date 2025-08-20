import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';

interface WhereYouAtQuizProps {
  isOpen: boolean;
  onClose: () => void;
}

const WhereYouAtQuiz: React.FC<WhereYouAtQuizProps> = ({ isOpen, onClose }) => {
  const [selectedQuiz, setSelectedQuiz] = useState<'where' | 'how' | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const whereYouAtQuestions = [
    "Retracez le chemin de l'eau de la pluie à votre robinet.",
    "Combien de jours avant la prochaine pleine lune ? (à deux jours près)",
    "Sur quel type de sol vous tenez-vous ?",
    "Quel est le total des précipitations l'an passé ? (à cent millimètres près)",
    "Quand a eu lieu le dernier incendie près de chez vous ?",
    "Quelles étaient les techniques de subsistance de la société qui vous a précédé ici ?",
    "Nommez cinq plantes indigènes comestibles et leur saison.",
    "De quelle direction viennent généralement les tempêtes hivernales ?",
    "Où vont vos déchets ?",
    "Combien de temps dure la saison végétative, chez vous ?",
    "Quel jour de l'année les ombres sont-elles les plus courtes ?",
    "Quand le cerf brame-t-il ? Quand naissent ses petits ?",
    "Désignez cinq herbes locales et parmi elles les indigènes.",
    "Citez cinq oiseaux sédentaires et cinq migrateurs de votre région.",
    "Quelle est l'histoire de l'utilisation des terres chez vous ?",
    "Quel événement écologique est à l'origine de la formation du paysage local ?",
    "Quelles espèces ont disparu de votre territoire ?",
    "Quel est la principale association de plantes dans votre région ?",
    "Depuis l'endroit où vous lisez ce questionnaire, indiquez le nord.",
    "Parmi les plantes sauvages, quelle est la première à fleurir au printemps ?"
  ];

  const getScoreLevel = (score: number) => {
    if (score <= 3) return { level: "Vous êtes à côté de la plaque !", color: "text-red-400" };
    if (score <= 7) return { level: "C'est difficile d'être à deux endroits en même temps quand on n'est nulle part !", color: "text-orange-400" };
    if (score <= 12) return { level: "Une compréhension satisfaisante de ce qui est évident.", color: "text-yellow-400" };
    if (score <= 16) return { level: "Vous prêtez attention à ce qui vous entoure.", color: "text-green-400" };
    if (score <= 19) return { level: "Vous savez où vous êtes.", color: "text-blue-400" };
    return { level: "Non seulement vous savez où vous êtes, mais vous savez où c'est !", color: "text-purple-400" };
  };

  const resetQuiz = () => {
    setSelectedQuiz(null);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const handleClose = () => {
    resetQuiz();
    onClose();
  };

  const startQuiz = (type: 'where' | 'how') => {
    setSelectedQuiz(type);
    if (type === 'how') {
      // Pour l'instant, on montre juste un message pour "How You Live?"
      alert("Le quiz 'Comment vivez-vous ?' sera bientôt disponible !");
      return;
    }
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < whereYouAtQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const renderQuizChoice = () => (
    <div className="p-6">
      <h2 className="text-xl font-bold text-cyan-300 mb-6 text-center">CHOISISSEZ VOTRE TEST</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-black/50 rounded-xl p-6 border border-cyan-500/30">
          <h3 className="text-lg font-bold text-cyan-300 mb-2">📍 "Où en êtes-vous ?"</h3>
          <p className="text-sm text-cyan-200 mb-3">Test individuel - Conscience du milieu</p>
          <p className="text-sm text-cyan-100 mb-4">
            20 questions sur votre connaissance du territoire : 
            eau, sol, plantes, cycles naturels...
          </p>
          <Button 
            onClick={() => startQuiz('where')}
            className="w-full bg-cyan-600/30 hover:bg-cyan-600/40 text-cyan-300 border border-cyan-500/50"
          >
            COMMENCER
          </Button>
        </div>
        
        <div className="bg-black/50 rounded-xl p-6 border border-cyan-500/30">
          <h3 className="text-lg font-bold text-cyan-300 mb-2">✊ "Comment vivez-vous ?"</h3>
          <p className="text-sm text-cyan-200 mb-3">Test collectif - Action biorégionale</p>
          <p className="text-sm text-cyan-100 mb-4">
            Évaluez vos pratiques : résistance locale, 
            communs, politique, écologie active...
          </p>
          <Button 
            onClick={() => startQuiz('how')}
            className="w-full bg-cyan-600/30 hover:bg-cyan-600/40 text-cyan-300 border border-cyan-500/50"
          >
            COMMENCER
          </Button>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-xs text-cyan-200">
          Sources : Van Andruss et al. (1981) • Miles & Thomashow (2012) • 
          Rollot & Schaffner (2024) - <em>Qu'est-ce qu'une biorégion ?</em>
        </p>
      </div>
    </div>
  );

  const renderQuizQuestion = () => (
    <div className="p-6">
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold text-cyan-300">Où en êtes-vous ?</h3>
          <span className="text-sm text-cyan-200">
            {currentQuestion + 1} / {whereYouAtQuestions.length}
          </span>
        </div>
        <div className="w-full bg-black/50 rounded-full h-2">
          <div 
            className="bg-cyan-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / whereYouAtQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="bg-black/50 rounded-xl p-6 border border-cyan-500/30 mb-6">
        <p className="text-cyan-100 mb-4 text-base leading-relaxed">
          <span className="text-cyan-300 font-semibold">{currentQuestion + 1}.</span> {whereYouAtQuestions[currentQuestion]}
        </p>
        <textarea
          className="w-full bg-black/50 border border-cyan-500/30 rounded-lg p-3 text-cyan-100 placeholder-cyan-300/50 resize-none"
          rows={3}
          placeholder="Votre réponse..."
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              const answer = (e.target as HTMLTextAreaElement).value;
              if (answer.trim()) {
                handleAnswer(answer);
                (e.target as HTMLTextAreaElement).value = '';
              }
            }
          }}
        />
        <p className="text-xs text-cyan-300/70 mt-2">Appuyez sur Entrée pour passer à la question suivante</p>
      </div>

      <div className="flex justify-between">
        <Button 
          onClick={() => handleAnswer('')}
          variant="outline"
          className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-600/20"
        >
          Passer
        </Button>
        <Button 
          onClick={resetQuiz}
          variant="outline"
          className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-600/20"
        >
          Recommencer
        </Button>
      </div>
    </div>
  );

  const renderResults = () => {
    const answeredQuestions = answers.filter(a => a.trim()).length;
    const scoreLevel = getScoreLevel(answeredQuestions);
    
    return (
      <div className="p-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-cyan-300 mb-2">Résultats</h3>
          <div className="bg-black/50 rounded-xl p-6 border border-cyan-500/30">
            <div className="text-3xl font-bold text-cyan-400 mb-2">
              {answeredQuestions} / {whereYouAtQuestions.length}
            </div>
            <div className={`text-lg font-semibold mb-4 ${scoreLevel.color}`}>
              {scoreLevel.level}
            </div>
            <p className="text-sm text-cyan-200">
              Ce questionnaire évalue votre conscience de votre environnement immédiat. 
              Plus votre score est élevé, plus vous êtes connecté à votre territoire.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            onClick={resetQuiz}
            className="flex-1 bg-cyan-600/30 hover:bg-cyan-600/40 text-cyan-300 border border-cyan-500/50"
          >
            Refaire le test
          </Button>
          <Button 
            onClick={handleClose}
            variant="outline"
            className="flex-1 border-cyan-500/50 text-cyan-300 hover:bg-cyan-600/20"
          >
            Fermer
          </Button>
        </div>
      </div>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] bg-black/90 border-cyan-400/20 text-cyan-100">
        <ScrollArea className="max-h-[80vh]">
          {!selectedQuiz && renderQuizChoice()}
          {selectedQuiz === 'where' && !showResults && renderQuizQuestion()}
          {selectedQuiz === 'where' && showResults && renderResults()}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default WhereYouAtQuiz;