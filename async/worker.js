addEventListener("message", function (e) {
  const total = e.data;
  for (let i = 0; i < total; i++) {
    postMessage(i);
  }
});
