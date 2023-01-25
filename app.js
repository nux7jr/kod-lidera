// swiper
const org = new Swiper(".org-swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 2,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const reviews = new Swiper(".reviews-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  direction: "horizontal",

  loop: false,
  autoplay: {
    delay: 5000,
  },
});

const video = new Swiper(".video-swiper", {
  slidesPerView: 2,

  direction: "horizontal",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const preson = new Swiper(".person-swiper", {
  slidesPerView: 1,

  direction: "horizontal",

  loop: true,
  autoplay: {
    delay: 5000,
  },
});
// set sample info
const setInfo = () => {
  const sampleButtons = document.querySelectorAll(".sapmle");
  sampleButtons.forEach((element) => {
    element.addEventListener("click", function (evt) {
      let info = evt.target.getAttribute("data-info");
      const samplees = document.getElementById("samplees");
      // console.log(samplees);
      samplees.innerText = info;
    });
  });
};
setInfo();
// modals
const myModal = new HystModal({
  linkAttributeName: "data-hystmodal",
  beforeOpen: function (modal) {
    // let tes = modal.closest("userForm");
    // console.log(tes); //modal window object
    // лучше сделать debuone -_- или еще как-то!
    console.log(modal);
    console.log("Message before opening the modal");
    console.log("Сделать проверку");
  },
});
// timer
const timer = () => {
  // let countdownDate = new Date().setSeconds(new Date().getSeconds() + 10);
  let countdownDate = new Date().setHours(new Date().getHours() + 150);

  let timerInterval;

  const daysElem = document.getElementById("days"),
    hoursElem = document.getElementById("hours"),
    minutesElem = document.getElementById("minutes"),
    secondsElem = document.getElementById("seconds"),
    timer = document.getElementById("timer"),
    content = document.getElementById("timerContent");

  const formatTime = (time, string) => {
    return time == 1 ? `${time} ${string}` : `${time} ${string}s`;
  };

  const startCountdown = () => {
    const now = new Date().getTime();
    const countdown = new Date(countdownDate).getTime();

    const difference = (countdown - now) / 1000;

    if (difference < 1) {
      endCountdown();
    }

    let days = Math.floor(difference / (60 * 60 * 24));
    let hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
    let minutes = Math.floor((difference % (60 * 60)) / 60);
    let seconds = Math.floor(difference % 60);

    daysElem.innerHTML = days;
    hoursElem.innerHTML = hours;
    minutesElem.innerHTML = minutes;
    secondsElem.innerHTML = seconds;
  };

  const endCountdown = () => {
    clearInterval(timerInterval);
    timer.remove();
    content.classList.add("visible");
  };

  window.addEventListener("load", () => {
    startCountdown();
    timerInterval = setInterval(startCountdown, 1000);
  });
};
timer();
