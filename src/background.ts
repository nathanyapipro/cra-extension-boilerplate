import { browser } from "webextension-polyfill-ts";

browser.browserAction.onClicked.addListener(() => {
  console.log("TAB CLICK");
  browser.tabs.executeScript({ file: "content.js" });
});

export {};
