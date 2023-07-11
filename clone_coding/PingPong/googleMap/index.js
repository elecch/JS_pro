const chatLog = document.getElementById('chat-log'),
userInput = document.getElementById('user-input'),
sendButton = document.getElementById('send-button'),
buttonIcon = document.getElementById('button-icon'),
info = document.querySelector('.info');

sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keydown', (event)=>{
  if(event.key === 'Enter' ){
    sendMessage();
  }
});

function sendMessage(){
  const message= userInput.value.trim();
  // if message = empty do nothing
  if(message === ''){
    return;
  }
  // if message = developer - show our message
  else if(message === 'developer'){
    // clear input value
    userInput.value = '';
    // append message as user - we will cod it's function
    appendMessage('user', message);
    // sets a fake timeout that showing loading on send button
    setTimeout(()=>{
      // send our message as bot(sender  :bot)
      appendMessage('bot', 'This Source Coded By elecch \n github : @elecch');
      // change button icon to default
      buttonIcon.classList.add('fa-solid', 'fa-paper-plane');
      buttonIcon.classList.remove('fas', 'fa-spinner','fa-pulse');
    }, 2000);
     
  }

  //else if none of above
  // appends users message to screen
  appendMessage('user', message);
  userInput.value = '';

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '40d82ca9b8msh1b929d20f79b4dcp174347jsn2a888edf0872',
      'X-RapidAPI-Host': 'chatgpt-openai.p.rapidapi.com'
    },
    body: JSON.stringify({
      "message": [{"role":"user","content": `${message}`}]
    })
};

  // official api : 
  fetch('https://chatgpt-openai.p.rapidapi.com/chat-completion', options)
.then((response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
})
.then((response) => {
  appendMessage('bot', response.choice[0].message.content);
  buttonIcon.classList.add('fa-solid', 'fa-paper-plane');
  buttonIcon.classList.remove('fas', 'fa-spinner','fa-pulse');
})
.catch((err) => {
  appendMessage('bot', `Error: ${err}`);
  buttonIcon.classList.add('fa-solid', 'fa-paper-plane');
  buttonIcon.classList.remove('fas', 'fa-spinner','fa-pulse');
});


}

function appendMessage(sender, message){
  info.style.display = " none";
  // change send button icon to loading using fontawesome
  buttonIcon.classList.remove('fa-solid', 'fa-paper-plane');
      buttonIcon.classList.add('fas', 'fa-spinner','fa-pulse');

      const messageElement = document.createElement('div');
      const iconElement = document.createElement('div');
      const chatElement = document.createElement('div');
      const icon = document.createElement('i');

      chatElement.classList.add("chat-box");
      iconElement.classList.add("icon");
      messageElement.classList.add(sender);
      messageElement.innerText = message;

      // add icons depending on who send message bot or user
      if(sender === 'user'){
        icon.classList.add('fa-regular', 'fa-user');
        iconElement.setAttribute('id', 'user-icon');
      }else{
        icon.classList.add('fa-solid', 'fa-robot');
        iconElement.setAttribute('id', 'bot-icon');
      }

      iconElement.appendChild(icon);
      chatElement.appendChild(iconElement);
      chatElement.appendChild(messageElement);
      chatLog.appendChild(chatElement);
      chatLog.scrollTo = chatLog.scrollHeight;
}