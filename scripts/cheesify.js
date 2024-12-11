function cheesify() {
  const images = document.querySelectorAll('img');
  images.forEach(image => {
    image.src = `https://picsum.photos/${image.width}/${image.height}?${Math.random(10000)}`;
    image.srcset = image.src;
  })
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === 'cheesify') cheesify();
  }
);