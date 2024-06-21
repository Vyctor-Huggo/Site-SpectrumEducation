import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskDetail from './TaskDetail';
import './TaskPage.css';
import Header from '../../components/Header';

const TaskPage = () => {
  const [selectedTask, setSelectedTask] = useState(null);

  const sampleTask = {
    title: 'Soma e Subtração',
    dueDate: '09/05/2023 23:59',
    instructions: 'Seguir a lista de exercícios abaixo, realizar e mandar foto do caderno.',
    references: [
      { title: 'Lista_Exercícios', url: 'https://example.com/lista_exercicios' }
    ],
    points: []
  };

  return (
    <>
    <Header />
    <div className="task-page">
          {selectedTask ? (
              <TaskDetail task={selectedTask} onBack={() => setSelectedTask(null)} />
          ) : (
              <TaskList onSelectTask={() => setSelectedTask(sampleTask)} />
          )}
      </div></>
  );
};

export default TaskPage;
