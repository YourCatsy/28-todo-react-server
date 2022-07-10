import React from 'react';

function Form({ defaultMessage, onSubmit }) {
  const [message, setMessage] = React.useState(defaultMessage);

  function onFormSubmit(e) {
    e.preventDefault();
    onSubmit(message);
    setMessage('');
  }

  function onMessageChange(e) {
    setMessage(e.target.value);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input
        id="msgInput"
        type="text"
        placeholder="Введите сообщение"
        value={message}
        onChange={onMessageChange}
      />
      <button id="msgButton">Отправить</button>
    </form>
  );
}

export default Form;
