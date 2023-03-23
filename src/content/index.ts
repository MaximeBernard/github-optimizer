console.log("Github Optimizer is running!");

document.addEventListener("DOMContentLoaded", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];

    if (activeTab.id === undefined) throw new Error("Tab ID is undefined");

    chrome.scripting.insertCSS({
      // files: ["focus-mode.css"],
      css: "body: { background-color: red; }",
      target: { tabId: activeTab.id },
    });
  });
});
console.log("hello");
