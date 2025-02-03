const testimonials = [
  {
    name: "Anmol Singh",
    review:
      "To Pay off my credit card debt I’m using Bright money App. It’s really easy to use and their customer service is excellent. They are helpful.",
    image: "./assets/stars.svg",
  },
  {
    name: "Lance Nelson",
    review:
      "Bright money is willing to invest their time and get you an financial plan. Increase your score and reduce your debt in all in one App.",
    image: "./assets/stars.svg",
  },
  {
    name: "Sergio Lopez",
    review:
      "If you’re looking to get your score better - this is the App that will help and guide you. You’ll be with better score in few months. Get it. ",
    image: "./assets/stars.svg",
  },
  {
    name: "Todd Curry",
    review:
      "I recommend the Bright App to everybody. It helped me cut down on my credit card debt, help me save for car, vacation. Next we’re saving for house.",
    image: "./assets/stars.svg",
  },
  {
    name: "Tom",
    review:
      "Thank you to Bright for helping me improve my credit and eliminating my debt. The customer service is super helpful. Appreciate the journey. ",
    image: "./assets/stars.svg",
  },
];

const swiperContainer = document.querySelector(".swiper-container");

testimonials.forEach((testimonial) => {
  swiperContainer.innerHTML += `
      <div class="swiper-card">
        <img src="${testimonial.image}" />
        <p class="swiper-card-content">${testimonial.review}</p>
        <p class="swiper-card-name">${testimonial.name}</p>
      </div>
    `;
});

function trackButtonClick() {
  window.dataLayer = window.dataLayer || [];
  dataLayer.push({
    event: "get_started_click",
    button_id: "getStartedButton",
  });
}
