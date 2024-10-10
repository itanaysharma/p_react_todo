import React from "react";
import anime from "animejs/lib/anime.es.js";
anime({
  targets: ".circle",
  loop: true,
  scale: function (el, i, l) {
    return l - i + 0.1;
  },
  delay: 100,
});
function MyApp() {
  return (
    <div className="min-h-screen bg-gray-800 relative pl-32 pr-32">
      <div className="absolute left-0 right-0  top-10">
        <div className="circle w-44 h-10 flex flex-col justify-center items-center rounded-3xl bg-gray-400 mx-auto">
          TODO
        </div>
        <div className="todos mt-10 w-96 mx-auto h-96 bg-gray-900 rounded-2xl"></div>
      </div>
    </div>
  );
}

export default MyApp;
