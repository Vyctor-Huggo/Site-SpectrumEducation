import React from 'react';

const tasks = [
  { id: 1, title: 'Soma e Subtração', description: 'Descrição da tarefa', dueDate: '09/05/2023 23:59', instructions: 'Seguir a lista de exercícios abaixo, realizar e mandar foto do caderno.', references: [{ title: 'Lista_Exercícios', url: 'https://example.com/lista_exercicios' }], points: [] }
];

const TaskList = ({ onSelectTask }) => {
  return (
    <div className="task-list">
      <h2>Tarefas</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id} onClick={() => onSelectTask(task)}>
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
