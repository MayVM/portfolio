document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;
      const sectionInView =
        sectionTop <= scrollPosition + windowHeight * 0.5 &&
        sectionBottom > scrollPosition + windowHeight * 0.5;

      if (sectionInView) {
        const sectionId = section.getAttribute("id");
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  };
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
