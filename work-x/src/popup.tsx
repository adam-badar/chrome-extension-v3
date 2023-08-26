

import "~style.css"

function IndexPopup() {
  const handleBlockWebsite = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0]
      if (activeTab) {
        chrome.scripting.executeScript(
          {
            target: { tabId: activeTab.id },
            func: blockContent
          },
          (results) => {
            if (chrome.runtime.lastError) {
              console.error(chrome.runtime.lastError.message)
            }
          }
        )
      }
    })
  }
  function blockContent() {
    const blockMessage = document.createElement("div")
    blockMessage.textContent = "This website has been blocked"
    document.body.innerHTML = "" // Clear existing content
    document.body.appendChild(blockMessage)
  }

  const handleUnblockWebsite = () => {
    console.log("handleUnblockWebsite")
  }
  return (
    <div className="w-80 h-96 bg-zinc-300 flex flex-col justify-center items-center">
      <div
        className="w-36 h-10 px-4 py-2 bg-zinc-600 rounded"
        onClick={handleBlockWebsite}>
        <div className="text-center text-white text-base font-normal leading-normal">
          Block Website
        </div>
      </div>
      <div
        className="w-40 h-10 mt-2 px-4 py-2 bg-zinc-600 rounded"
        onClick={handleUnblockWebsite}>
        <div className="text-center text-white text-base font-normal leading-normal">
          Unblock Website
        </div>
      </div>
    </div>
  )
}

export default IndexPopup
