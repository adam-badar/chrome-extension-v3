import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  all_frames: true
}

function injectPopup() {
  const popupRoot = document.createElement("div")
  popupRoot.id = "extension-popup"
  document.body.appendChild(popupRoot)

  const blockButton = document.createElement("button")
  blockButton.id = "block-button"
  blockButton.textContent = "Block Website"
  blockButton.addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "blockWebsite" })
  })

  popupRoot.appendChild(blockButton)
}

injectPopup()
