// https://developer.chrome.com/docs/extensions/reference/tabs/
chrome.tabs.onCreated.addListener((tab) => {
  setTimeout(
    () => { chrome.tabs.update(tab.id, { active: true }); },
    100
  );
});
