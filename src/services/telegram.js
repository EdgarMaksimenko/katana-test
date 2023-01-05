import axios from 'axios';

export const postToTelegram = (formData, cartData) => {
  const TOKEN = '5983649685:AAGNx9FW_FpHOzPwtzC9yslofIY-qmVC3fk';
  const CHAT_ID = "-690176476";
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  let order = '';
  console.log(cartData);
  cartData.items.forEach(element => {
    order += element.taste + ' (' + element.capacity + ') ' + element.count + ' шт\n';
  });

  let message = `<b>Нове замовлення!</b>\n`;
  message += `<b>Отримувач: </b>${formData.name}\n`;
  message += `<b>Номер телефону: </b>${formData.phone}\n`;
  message += `<b>Відділення НП №</b>${formData.place}\n\n`;
  message += `<b>Замовлення: </b>\n${order}\n`;
  message += `<b>Всього до сплати: </b>${cartData.total} грн\n`;

  axios.post(URI_API, {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: message
  })
}