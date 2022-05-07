let data = document.getElementById("data");
let btnSend = document.getElementById("send");

btnSend?.addEventListener("click", () => {
  if (Number(data.value) === 1) {
    console.log("Entregar medalla de oro");
  } else {
    if (Number(data.value) === 2) {
      console.log("Entregar medalla de plata");
    } else {
      if (Number(data.value) === 3) {
        console.log("Entregar medalla de bronce");
      } else {
        console.log("Entregar mención de participación");
      }
    }
  }
});
