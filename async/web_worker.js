// function slowLog(total) {
//   for (let i = 0; i < total; i++) {
//     console.log(i);
//   }
// }

// document.getElementById("buttonTask").onclick = function () {
//   console.log("Start Log");
//   slowLog(90000);
//   console.log("Finished Log");
// };

const worker = new Worker("worker.js");
// worker.onmessage -callback
worker.addEventListener("message", function (message) {
  console.info(message.data);
});

document.getElementById("buttonTask").onclick = function () {
  worker.postMessage(200000);
};
