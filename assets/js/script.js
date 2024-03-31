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
function handleWhatsAppClick(event, message) {
  event.preventDefault(); // Menghentikan perilaku default dari tautan
  
  var adminNumber = "6282210269977"; // Ganti dengan nomor telepon admin
  
  // Pesan yang akan dikirim
  var encodedMessage = encodeURIComponent(message);

  // Buat URL khusus untuk membuka WhatsApp ke chat admin dan membuat pesan otomatis
  var url = "https://wa.me/" + adminNumber + "?text=" + encodedMessage;

  // Buka tautan WhatsApp di jendela atau tab baru
  window.open(url, '_blank');
}

// Ambil tautan WhatsApp dan tambahkan event listener
var whatsappLink1 = document.getElementById("whatsappLink1");
whatsappLink1.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin menyewa mobil di Ridex, bagaimana caranya?");
});

var whatsappLink2 = document.getElementById("whatsappLink2");
whatsappLink2.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin menyewa mobil Toyota RAV4, bagaimana caranya?");
});

var whatsappLink3 = document.getElementById("whatsappLink2");
whatsappLink3.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin menyewa mobil BMW 3 Series, bagaimana caranya?");
});

var whatsappLink4 = document.getElementById("whatsappLink2");
whatsappLink4.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin menyewa mobil Volkswagen T-Cross, bagaimana caranya?");
});

var whatsappLink5 = document.getElementById("whatsappLink2");
whatsappLink5.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin menyewa mobil Cadillac Escalade, bagaimana caranya?");
});

var whatsappLink6 = document.getElementById("whatsappLink2");
whatsappLink6.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin menyewa mobil BMW 4 Series GTI, bagaimana caranya?");
});

var whatsappLink7 = document.getElementById("whatsappLink2");
whatsappLink7.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin menyewa mobil BMW 4 Series, bagaimana caranya?");
});

var whatsappLink8 = document.getElementById("whatsappLink1");
whatsappLink8.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin menyewa mobil di Ridex, bagaimana caranya?");
});
