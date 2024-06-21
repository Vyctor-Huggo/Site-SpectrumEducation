import React, { useState } from 'react';
import './QuestionsSection.css'; // Defina os estilos conforme necessário
import perfil from '../../imagens/fotoPerfil01.png';

const QuestionsSection = () => {
  const [questions, setQuestions] = useState([
    {
      nome: 'João Silva',
      imagemPerfil: perfil,
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      nome: 'Maria Oliveira',
      imagemPerfil: perfil,
      texto: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    // Adicione mais perguntas conforme necessário
  ]);

  const [newQuestion, setNewQuestion] = useState('');

  const handleAddQuestion = () => {
    const newQuestionObject = {
      nome: 'Usuário Atual', // Você pode ajustar isso para o nome do usuário atual
      imagemPerfil: perfil,
      texto: newQuestion
    };
    setQuestions([...questions, newQuestionObject]);
    setNewQuestion('');
  };

  return (
    <div className="questions-section mr-2 ml-2">
      <h2>Dúvidas...</h2>
      <div className="questions-list">
        {questions.map((question, index) => (
          <div key={index} className="question">
            <div className="img-nome">
              <img src={question.imagemPerfil} alt="Perfil" className="img-perfil" />
              <h5>{question.nome}</h5>
            </div>
            <p>{question.texto}</p>
          </div>
        ))}
      </div>
      <div className="add-question">
        <textarea
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          placeholder="Digite sua dúvida..."
        />
        <button onClick={handleAddQuestion}>Adicionar Dúvida</button>
      </div>
    </div>
  );
};

export default QuestionsSection;
