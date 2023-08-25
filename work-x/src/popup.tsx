import { CountButton } from "~features/count-button"

import "~style.css"

function IndexPopup() {
  const handleBlockWebsite = () => {
    console.log("handleBlockWebsite");
  }

  const handleUnblockWebsite = () => {
    console.log("handleUnblockWebsite");
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
