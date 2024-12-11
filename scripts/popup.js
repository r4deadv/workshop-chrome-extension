function sendCheesifyMsg() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) { // Finds tabs that are active in the current window
    chrome.tabs.sendMessage(tabs[0].id, { action: 'cheesify' }); // Sends a message (object) to the first tab (tabs[0])
  });
}


const cheesifyBtn = document.querySelector('#cheesify');
cheesifyBtn.addEventListener('click', (event) => sendCheesifyMsg())