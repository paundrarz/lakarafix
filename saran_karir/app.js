let currentSlide = 1;
const totalSlides = 3; // Jumlah total slide

function showSlide(n) {
    // Sembunyikan semua slide
    document.querySelectorAll('.slider img').forEach(slide => {
        slide.style.display = 'none';
    });
    // Tampilkan slide yang dipilih
    document.getElementById(`slide-${n}`).style.display = 'block';
}

function nextSlide() {
    currentSlide = (currentSlide % totalSlides) + 1;
    showSlide(currentSlide);
}

// Atur interval untuk mengubah slide setiap beberapa detik
setInterval(nextSlide, 5000); // Ganti 5000 dengan interval waktu yang Anda inginkan (dalam milidetik)
showSlide(currentSlide);
