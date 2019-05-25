const offerSwiper = new Swiper(".special-offer .swiper-container", {
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
  
  const whyUsSwiper = new Swiper(".why-us .swiper-container", {
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
  
  const teamSwiper = new Swiper('.our-team .swiper-container', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 35,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

const appModal = {
    el: null,
    buttons: [],
    init(opts) {
        this.el = document.querySelector(opts.el);
        this.buttons = document.querySelectorAll(opts.buttons);

        this.buttons.forEach(btn => {
            btn.addEventListener("click", () => this.open());
        });

        document.addEventListener("keydown", e => {
            if (e.keyCode === 27) this.close();
        });

        this.el.addEventListener("click", e => {
            if (e.target.classList.contains("modal")) this.close();
        });
    },
    open() {
        // document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
        document.body.style.overflow = "hidden";

        this.el.classList.add("modal--fade-in");
        this.el.classList.remove("modal--fade-out");
    },
    close() {
        document.body.style.overflow = '';
        // document.body.style.paddingRight = "initial";
        
        this.el.classList.add("modal--fade-out");
        this.el.classList.remove("modal--fade-in");
    }
    };

appModal.init({
    el: ".modal",
    buttons: ".button--modal"
});
