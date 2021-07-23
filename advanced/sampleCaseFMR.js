// ambil semua element video
const videos = Array.from(document.querySelectorAll("[data-duration]"));

// pilih haya yang'JAVASCRIPT LANJUTAN'
let jsNext = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))

  // ambil masing-masing durasi video
  .map((item) => item.dataset.duration)

  // ubah durasi menjadi float, ubah menit menjadi detik
  .map((times) => {
    // 10:30 -> [10, 30] split -> float
    const parts = times.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })

  // jumlahkan semua detik
  .reduce((total, detik) => total + detik);

// ubah formatnya menjadi jam menit detik
const jam = Math.floor(jsNext / 3600);
jsNext = jsNext - jam * 3600;
const menit = Math.floor(jsNext / 60);
const detik = jsNext - menit * 60;

// simpan di DOM
const pDuration = document.querySelector(".total-durasi");
pDuration.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

const jmlVideos = videos.filter((video) =>
  video.textContent.includes("JAVASCRIPT LANJUTAN")
).length;
const jmlVideo = document.querySelector(".jumlah-video");
jmlVideo.textContent = `${jmlVideos} Video`;

console.log(jam);
console.log(menit);
console.log(detik);
