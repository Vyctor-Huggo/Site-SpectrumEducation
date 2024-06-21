import React, { useState } from 'react';
import './TaskDetail.css';

const TaskDetail = ({ task, onBack }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [answer] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Answer:', answer);
    console.log('Image:', image);
  };

  const toggleSubmission = () => {
    setIsSubmitted(!isSubmitted);
  };

  const { title, dueDate, instructions, references = [], points = [] } = task;

  return (
    <div className="task-detail">
      <div className="header">
        <button className="back-button" onClick={onBack}>&lt; Voltar</button>
        <button className="submit-button" onClick={toggleSubmission}>
          {isSubmitted ? 'Desfazer entrega' : 'Entregar'}
        </button>
      </div>
      <div className="main-content">
        <div className="task-info">
          <h2>{title}</h2>
          <p className="due-date">Vence {dueDate}</p>
          <div className="instructions">
            <h3>Instruções</h3>
            <p>{instructions}</p>
            <h3>Material de referência</h3>
            <ul>
              {references.map((ref, index) => (
                <li key={index}><a href={ref.url} target="_blank" rel="noopener noreferrer">{ref.title}</a></li>
              ))}
            </ul>
          </div>
          <div className="my-work">
            <h3>Meu trabalho</h3>
            <form onSubmit={handleSubmit}>
              <div className="file-upload">
                <label>Anexo:</label>
                <input type="file" onChange={(e) => setImage(e.target.files[0])} />
              </div>
              <button type="submit">Enviar</button>
            </form>
            {image && <img src={URL.createObjectURL(image)} alt="Minha atividade" className="preview-image" />}
          </div>
        </div>
        <div className="points">
          <h3>Pontos</h3>
          <p>{points.length > 0 ? points.join(', ') : 'Sem pontos'}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
