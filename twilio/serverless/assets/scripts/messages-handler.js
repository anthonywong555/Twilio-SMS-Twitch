const renderMessage = (message) => {
  const CHAT_DIV = document.getElementById('chat');
  const color = getRandomColor();
  const vertical = Math.floor(Math.random() * 80) + 20;
  const size = Math.floor((Math.random() * (70 - 40)) + 40);
  const aBlock = document.createElement('div');

  aBlock.innerHTML = message;
  aBlock.className = 'popup';
  aBlock.style.cssText = `top:${vertical}vh;font-size:${size}px;color:${color};`
  CHAT_DIV.appendChild(aBlock);

  setTimeout( function() { aBlock.parentNode.removeChild(aBlock); }, 10000);
}

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}