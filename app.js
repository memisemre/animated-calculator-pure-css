const time = document.querySelector(".time");
function startApp() {
          getTime();
}
function getTime() {
          setInterval(() => {
                    const date = new Date();
                    time.innerHTML = `${date.getHours()}: ${date.getMinutes()}`;
          },1000)
}
startApp();