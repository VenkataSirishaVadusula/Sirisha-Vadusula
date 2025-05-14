$(document).ready(function () {
    $('.work-popup').magnificPopup({
      type: 'image',
      closeBtnInside: true,
      fixedContentPos: true,
      removalDelay: 300,
      mainClass: 'mfp-fade',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1],
      },
      image: {
        titleSrc: 'title',
      },
      zoom: {
        enabled: true,
        duration: 300,
        opener: function (element) {
          return element.is('img') ? element : element.find('img');
        },
      },
      callbacks: {
        open: function () {
          // Remove title attribute on close button
          $('.mfp-close').removeAttr('title');
        }
      }
    });
  });
  