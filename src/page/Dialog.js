// Підключаємо потрібні технології
import React, { useState } from "react";
import styled from "styled-components";

// ============================================

// Імпортуємо компонент "Шапка"
import Header from "../component/Header";
// Імпортуємо компонент "Меню"
import Menu from "../component/Menu";
// Імпортуємо компонент "Сторінка"
import Page from "../component/Page";

// Імпортуємо компонент "MessageList"
import MessageList from "../component/MessageList";
import Input from "../component/Input";
import SendButton from "../component/SendButton";

// ============================================
// Генеруємо константи, в яких тримаємо дані про список повідомлень в чаті

const MESSAGE_LIST = [
  {
    id: 1,
    message: "Привіт. Як справи?",
    isMe: true,
    time: "10:23"
  },
  {
    id: 2,
    message: "Все добре. В тебе як?",
    isMe: false,
    time: "10:24"
  }
];

// ============================================
// Генеруємо сторінку "Діалог чату"
export default function Dialog() {
  const [value, updateValue] = React.useState();

  const [list, updateList] = React.useState(MESSAGE_LIST);

  const addMessage = () => {
    updateValue("");

    return updateList([
      ...list,
      {
        id: Math.random(),
        message: value,
        isMe: true,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        })
      }
    ]);
  };

  return (
    <Page>
      {/* В title передаємо текст заголовка сторінки */}
      <Header title="Діалог чату" />
      <DialogView>
        <MessageList list={list} />
        <SendMessageBlock>
          <Input
            value={value}
            onChange={updateValue}
            placeholder="Введіть свій текст (Текст-підказка)"
          />
          <SendButton onClick={addMessage} />
        </SendMessageBlock>
      </DialogView>
      <Menu />
    </Page>
  );
}

// Відповідає за коректне відображення основного вмісту Діалогу
const DialogView = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
`;

// Відповідає за коректне відображення вмісту компонента "Поле вводу" та "Кнопка відправити"
const SendMessageBlock = styled.div`
  /* Колір фону */
  background-color: #f6f6f6;
  /* Відступи всередені вертикальні та горизонтальні */
  padding: 15px;
  /* Розмір та Колір сітки країв блока*/
  border-top: 1px #d7d7d7 solid;

  display: grid;
  grid-template-columns: 1fr 32px;
  gap: 15px;
`;
