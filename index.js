// index.js

// Sosyal medya linklerine tıklanıldığında konsola bir mesaj yazdıran bir işlev
document.addEventListener('DOMContentLoaded', function() {
    var socialLinks = document.querySelectorAll('.social-links a');
    
    socialLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            console.log('Sosyal medya bağlantısına tıkladınız: ' + this.textContent.trim());
        });
    });
});
