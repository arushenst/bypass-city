chrome.action.onClicked.addListener((tab) => {
  const url = `https://bypass.city/bypass?bypass=${encodeURIComponent(tab.url)}`;

  chrome.tabs.create({ url });
});