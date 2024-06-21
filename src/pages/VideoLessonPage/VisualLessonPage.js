import React, { useState } from 'react';
import Header from '../../components/Header';
import Sidebar from './SideBar';
import VideoContent from './VideoContent';
import QuestionsSection from './QuestionsSection'; // Importando o novo componente
import './styles.css';

const lessons = [
  { id: 1, title: 'Conjuntos Numéricos', videoUrl: 'https://www.youtube.com/embed/GLYEff_w-dE?si=KwPsSprtBWuLoSE1', previous: null, next: 2 },
  { id: 2, title: 'Função Afim', videoUrl: 'https://www.youtube.com/embed/R8UZRBFWJXY?si=5mxO4FhdvbE7C3Nd', previous: 1, next: 3 },
  { id: 3, title: 'Função Quadrática', videoUrl: 'https://www.youtube.com/embed/1cqNdPSB_nY?si=u7-8wnrylV4-lKzF', previous: 2, next: 4 },
  { id: 4, title: 'Função Modular', videoUrl: 'https://www.youtube.com/embed/WJ0H0jV3Y-o?si=Af_BdUuKPAoykoJV', previous: 3, next: null },
  { id: 5, title: 'Função Exponencial', videoUrl: 'https://www.youtube.com/embed/3lR3guqfbUg?si=126npBosuN7CZI2l', previous: 4, next: 6 },
  { id: 6, title: 'Logaritmos', videoUrl: 'https://www.youtube.com/embed/P8uxcolt8OQ?si=Xls_qAWWeCnzV6Bu', previous: 5, next: 7 },
  { id: 7, title: 'Análise Combinatória', videoUrl: 'https://www.youtube.com/embed/ZuukDbf4IY0?si=LeSC8NMzRM-O2t1K', previous: 6, next: 8 },
  { id: 8, title: 'Probabilidade', videoUrl: 'https://www.youtube.com/embed/G2u2haFb4tw?si=unWQRWBNY5NwQ6jK', previous: 7, next: 9 },
  { id: 9, title: 'Matrizes', videoUrl: 'https://www.youtube.com/embed/lZ9onrdpusA?si=PX5-SxTROZXC1OdC', previous: 8, next: 10 },
  { id: 10, title: 'PA  e PG', videoUrl: 'https://www.youtube.com/embed/_A2njpGHDn4?si=xVAUn3cbutfpDWys', previous: 9, next: 11 },
  { id: 11, title: 'Trigonometria', videoUrl: 'https://www.youtube.com/embed/nlJaRrB0nyg?si=DahXx8amZjMa9z23', previous: 10, next: 12 },
  { id: 12, title: 'Geometria Plana', videoUrl: 'https://www.youtube.com/embed/EzGf1UEnnsY?si=AMYp_s4198rIUTwp', previous: 11, next: 13 },
  { id: 13, title: 'Geometria Espacial', videoUrl: 'https://www.youtube.com/embed/Y_gD7S6OkC4?si=AJ-mIaLx2Wk7hUMT', previous: 12, next: 14 },
  { id: 14, title: 'Equação da Reta', videoUrl: 'https://www.youtube.com/embed/KjugJ3kIkU0?si=dRRU4tJPxpg-YF-8', previous: 13, next: 15 },
  { id: 15, title: 'Cônicas', videoUrl: 'https://www.youtube.com/embed/tu81HCPl4mU?si=dTqwNaFD36pku6-O', previous: 14, next: 16 },
  { id: 16, title: 'Introdução ao Cálculo', videoUrl: 'https://www.youtube.com/embed/6v0SMTZ8hkU?si=KUZmKDQyfnauwv-C', previous: 15, next: 17 },
  // Continue adicionando aulas conforme necessário
];

const VideoLessonPage = () => {
  const [currentLessonId, setCurrentLessonId] = useState(1);

  const currentLesson = lessons.find(lesson => lesson.id === currentLessonId);

  const handlePrevious = () => {
    if (currentLesson.previous) {
      setCurrentLessonId(currentLesson.previous);
    }
  };

  const handleNext = () => {
    if (currentLesson.next) {
      setCurrentLessonId(currentLesson.next);
    }
  };

  return (
    <>
      <Header />
      <div className="main-container">
        <Sidebar lessons={lessons} currentLessonId={currentLessonId} onSelectLesson={setCurrentLessonId} />
        <div className="content">
          <VideoContent lesson={currentLesson} onPrevious={handlePrevious} onNext={handleNext} />
          <QuestionsSection />
        </div>
      </div>
    </>
  );
};

export default VideoLessonPage;
