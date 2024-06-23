import './styles.css';
import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import {DetailsButton} from '../components/DetailsButton/DetailsButton';

export const App = () => {
  const modalRootRef = useRef(null); // Используем useRef для хранения ссылки на элемент

  useEffect(() => {
    // После того, как DOM обновлён, получаем элемент с ID 'react-id'
    modalRootRef.current = document.getElementById('react-id');
  }, []); // Пустой массив зависимостей означает, что эффект запускается один раз после первого рендеринга

  return (
    <div className='element-container'>
      <div className='element-name'>
        <div>React</div>
        <div className='element-details-container' id='react-id'></div>
      </div>
      <DetailsButton
        text='React – библиотека для создания фронтенд-приложений'
        modalRoot={modalRootRef.current}
      />
    </div>
  )
};

import React, { useState, useLayoutEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import {Modal} from "../Modal/Modal";

export interface DetailsButtonProps {
  text: string;
  modalRoot: HTMLElement;
}

export const DetailsButton = ({text, modalRoot}: DetailsButtonProps) => {
  const [showModal, setShowModal] = useState<boolean>(false)

  if (!modalRoot) {
    console.error("Element with ID 'react-id' does not exist.");
    return null;
  }

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Подробнее
      </button>
      {showModal && ReactDOM.createPortal(<Modal onClose={() => setShowModal(false)} text={text}/>, modalRoot)}
    </>
  );
}
