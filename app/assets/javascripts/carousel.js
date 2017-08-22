$('[data-carousel]').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
		slidesToScroll: 1,
      }
    }]
});

