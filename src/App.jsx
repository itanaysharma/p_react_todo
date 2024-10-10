import React from "react";
import anime from "animejs/lib/anime.es.js";
anime({
  targets: ".circle",
  loop: true,
  scale: function (el, i, l) {
    return l - i + 0.25;
  },
});
function MyApp() {
  return (
    <div className="min-h-screen bg-gray-800 relative pl-32 pr-32">
      <div className="absolute left-0 right-0  top-10">
        <div className="circle w-44 h-44 flex flex-col justify-center items-center rounded-full bg-gray-400 mx-auto">
          404
        </div>
        <div className="todos mt-10 w-96 mx-auto h-96 bg-gray-900 rounded-2xl"></div>
      </div>

      <div className="absolute top-10 h-96 w-28 bg-gray-900">Hello</div>
      <div className="absolute top-64 right-32 bg-gray-400 p-6 rounded-lg w-56 flex flex-col items-center">
        {/* Wallet Text */}
        <div className="text-pink-400 text-lg mb-4">
          Connect your crypto wallet
        </div>
        {/* Green Buttons */}
        <div className="flex space-x-4">
          <div className="bg-green-400 h-6 w-10 rounded-full"></div>
          <div className="bg-green-400 h-6 w-10 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default MyApp;
