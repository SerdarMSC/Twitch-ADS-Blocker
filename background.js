// Eklenti yüklendiğinde konsola bir mesaj yaz.
chrome.runtime.onInstalled.addListener(() => {
  console.log('Twitch Reklam Engelleyici başarıyla yüklendi!');
});