// Підключаємо потрібні технології
import React from "react";

// ============================================

// Імпортуємо компонент "Шапка"
import Header from "../component/Header";
// Імпортуємо компонент "Меню"
import Menu from "../component/Menu";
// Імпортуємо компонент "Сторінка"
import Page from "../component/Page";
// Імпортуємо компонент "Пусто"
import Empty from "../component/Empty";
// Імпортуємо компонент "ChatList"
import ChatList from "../component/ChatList";
// ============================================
// Імпортуємо файли потрібних картинок

import CatPhoto from "../file/photo/cat.png";
import DimaPhoto from "../file/photo/dima.png";
import AnnPhoto from "../file/photo/ann.png";
import FamilyPhoto from "../file/photo/family-dog.png";
import NewsPhoto from "../file/photo/politic-news.png";

// ============================================
// Генеруємо константи, в яких тримаємо дані про список чатів

const CHATS_LIST = [
  {
    id: 1,
    photo: CatPhoto,
    name: "Про котів",
    message: "Я люблю пити молоко",
    isRead: true,
    time: "10:44"
  },
  {
    id: 2,
    photo: DimaPhoto,
    name: "Дмитро",
    message: "Привіт! Як справи?",
    isUnread: true,
    time: "09:21"
  },
  {
    id: 3,
    photo: AnnPhoto,
    name: "Дружина",
    message: "Ти купив хліб?",
    messageAmount: 10,
    time: "08:44"
  },
  {
    id: 4,
    photo: FamilyPhoto,
    name: "Чат родини",
    message: "Хто вже вдома?",
    messageAmount: 24,
    notifyOff: true,
    time: "08:12",
    user: "Мама",
    hashtag: "#family"
  },
  {
    id: 5,
    photo: NewsPhoto,
    name: "American News",
    message: "The Kremlin burned down!",
    messageAmount: 105,
    notifyOff: true,
    time: "07:54",
    hashtag: "#news"
  }
];

// ============================================
// Генеруємо сторінку "Чати"

export default function Chats() {
  return (
    <Page>
      {/* В title передаємо текст заголовка сторінки */}
      <Header title="Всі чати" />
      <div>
        <ChatList list={CHATS_LIST} />
      </div>
      {/* В activePage передаємо посилання поточної сторінки */}
      <Menu activePage="/chats" />
    </Page>
  );
}
