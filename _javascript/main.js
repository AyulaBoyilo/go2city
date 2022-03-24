// Header title
gsap.from('.header__title', {
  y: -400,
  ease: 'none',
  // duration: 2,
  scrollTrigger: {
      trigger:'.header__title',
      start: 'top 40%',
      scrub: true,
      end: 'top top'
  }
})

if (document.querySelector('body').offsetWidth > 1024) {
  // Picture left
  var picturesLeft = document.querySelectorAll('.picture__left');
  var slideLeft = gsap.timeline({});
  
  picturesLeft.forEach(pic => {
      slideLeft.to(pic, {
          y: 1900,
          ease: 'none',
          scrollTrigger: {
              trigger: pic,
              scrub: true,
              start: 'top 30%',
              end: 'bottom top'
          }
      })
  });
  
  // Picture right
  var picturesRight = document.querySelectorAll('.picture__right');
  var slideRight = gsap.timeline({});
  
  picturesRight.forEach(pic_r => {
      console.log(pic_r.parentNode)
      slideRight.to(pic_r, {
          y: -1200,
          ease: 'none',
          scrollTrigger: {
              trigger: pic_r.parentNode,
              scrub: true,
              start: 'top 50%',
              end: 'top top'
          }
      })
  });
}
