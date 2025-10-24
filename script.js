document.addEventListener("DOMContentLoaded", function () {
  // ==== EFEK 1: FADE-IN SECTION SAAT SCROLL (Hiperaktif) ====
  const sections = document.querySelectorAll(".section-fade-in");

  const observerOptions = {
    root: null, // relatif terhadap viewport
    rootMargin: "0px",
    threshold: 0.1, // 10% section terlihat
  };

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Berhenti mengamati setelah terlihat
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });

  // ==== EFEK 2: NAVIGASI AKTIF SAAT SCROLL (Hiperaktif) ====
  const navLinks = document.querySelectorAll(".nav-menu li a");
  const allSections = document.querySelectorAll("main section"); // Ambil semua section di main

  const navObserverOptions = {
    root: null,
    rootMargin: "-50% 0px -50% 0px", // Aktif saat section ada di tengah layar
    threshold: 0,
  };

  const navObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Dapatkan id section (cth: "proyek")
        const id = entry.target.getAttribute("id");

        // Hapus 'active' dari semua link
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });

        // Tambahkan 'active' ke link yang sesuai
        // Cari link yang href-nya mengandung id (cth: href="#proyek")
        const activeLink = document.querySelector(
          `.nav-menu li a[href="#${id}"]`
        );
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  }, navObserverOptions);

  allSections.forEach((section) => {
    navObserver.observe(section);
  });
});
