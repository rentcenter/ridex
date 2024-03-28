'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navToggleFunc = function () {
  navToggleBtn.classList.toggle("active");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navToggleFunc);
}



/**
 * header active on scroll
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 10 ? header.classList.add("active")
    : header.classList.remove("active");
});



// Fungsi untuk menangani klik pada tautan WhatsApp
function handleWhatsAppClick(event) {
  event.preventDefault(); // Menghentikan perilaku default dari tautan
  
  var adminNumber = "6282210269977"; // Ganti dengan nomor telepon admin
  
  // Pesan yang akan dikirim
  var message = encodeURIComponent("Halo, saya ingin menyewa mobil di Ridex...");

  // Buat URL khusus untuk membuka WhatsApp ke chat admin dan membuat pesan otomatis
  var url = "https://wa.me/" + adminNumber + "?text=" + message;

  // Buka tautan WhatsApp di jendela atau tab baru
  window.open(url, '_blank');
}

// Ambil tautan WhatsApp dan tambahkan event listener
var whatsappLink = document.getElementById("whatsappLink");
whatsappLink.addEventListener("click", handleWhatsAppClick);