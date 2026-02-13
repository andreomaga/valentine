document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // ===== 1. GANTI PUISI (TOMbol) =====
    const puisiKonten = document.getElementById('puisiKonten');
    const tombolGanti = document.getElementById('gantiPuisi');

    if (puisiKonten && tombolGanti) {
        const kumpulanPuisi = [
            `Aa, aku menulis ini bukan karena hari ini valentine.
Bukan karena dunia sedang merayakan cinta.
Aku menulis ini karena sejak aku mengenal Aa,
setiap hari terasa seperti perayaan.

Aa tahu, sebelum Aa, aku pikir cinta itu sederhana.
Cukup suka, cukup rindu, cukup sesekali bertemu.
Tapi setelah Aa, aku sadar:
cinta itu rumit, berantakan, kadang tidak masuk akal.
Dan aku menyukai semua kerumitan itu selama bersama Aa.

Aku suka cara Aa marah tanpa alasan,
lalu baikan tanpa aku minta maaf.
Aku suka cara Aa tiba-tiba diam,
lalu tiba-tiba bercerita panjang lebar.
Aku suka semua sisi Aa—
yang rapi maupun yang berantakan.

Kadang aku berpikir,
apa yang membuat Aa tetap memilih aku?
Aku bukan yang paling baik,
bukan yang paling sabar,
juga bukan yang paling bisa diandalkan.
Tapi Aa tetap di sini.
Dan itu membuatku ingin terus menjadi lebih baik.

Aku tidak tahu sampai kapan kita akan begini.
Yang aku tahu, selama Aa masih mau,
aku akan terus ada.
Bukan karena terbiasa,
tapi karena memilih Aa adalah hal termudah
yang pernah aku lakukan.

Mungkin suatu hari nanti kita akan bertengkar hebat.
Mungkin suatu hari nanti Aa lelah dengan aku.
Tapi kalau boleh,
jangan pergi tanpa bilang.
Karena aku akan selalu berusaha menemukan Aa,
sejauh apa pun Aa pergi.

Di usiaku yang sekarang,
aku belajar bahwa cinta bukan tentang memiliki.
Tapi tentang menjaga,
meskipun tidak ada jaminan.
Tentang tetap ada,
meskipun tidak ada kepastian.
Dan aku akan terus menjaga Aa,
selama Aa mengizinkanku.

Selamat hari valentine, Aa.
Maaf tidak ada cokelat atau bunga.
Hanya kata-kata ini—
yang mudah-mudahan cukup mewakili
betapa berartinya Aa
dalam hidupku.

— dari adik kecilmu`,

            `Kalau aku boleh jujur, Aa,
aku tidak tahu kapan tepatnya Aa mulai berarti.
Mungkin saat Aa tersenyum kecil melihat sesuatu yang lucu.
Mungkin saat Aa tanpa sengaja menyebut namaku di tengah obrolan.
Atau mungkin sejak awal, sejak pertama Aa hadir,
aku sudah tahu: aku akan menyukai Aa.

Dan sekarang, setelah sekian lama,
aku masih di sini.
Masih memilih Aa.
Masih merasa beruntung,
Aa adalah bagian dari hari-hariku.

Aku tidak sempurna, Aa.
Sering lupa, kadang egois,
terkadang terlalu sibuk dengan diriku sendiri.
Tapi satu hal yang aku tahu pasti:
aku tidak ingin kehilangan Aa.

Aa boleh marah, Aa boleh kecewa,
tapi tolong jangan pergi tanpa bicara.
Karena aku akan selalu mencari cara
untuk kembali pada Aa.

Selamat valentine, Aa.
Terima kasih sudah menjadi alasan
aku percaya pada cinta.`,

            `Cinta itu tidak selalu indah, kata Aa.
Aku setuju.
Kadang cinta itu bertengkar lalu diam.
Kadang cinta itu menunggu tanpa kepastian.
Kadang cinta itu tetap bertahan meski lelah.

Tapi kalau cinta itu Aa,
aku ambil semua risikonya.
Aku terima lelahnya.
Aku terima menunggunya.
Aku terima diamnya.

Karena setelah semua itu,
Aa tetap yang aku cari.
Aa tetap yang aku rindu.
Aa tetap rumah,
di mana pun Aa berada.

Selamat hari valentine.
Untuk Aa yang tidak pernah lelah
menjadi alasan aku bertahan.`
        ];

        tombolGanti.addEventListener('click', function () {
            const randomIndex = Math.floor(Math.random() * kumpulanPuisi.length);
            const puisiBaru = kumpulanPuisi[randomIndex];

            // Pisah huruf pertama buat dropcap
            const firstLetter = puisiBaru.charAt(0);
            const restText = puisiBaru.slice(1);

            puisiKonten.innerHTML = `<span class="awalan-besar">${firstLetter}</span>${restText}`;
        });
    }

    // ===== 2. AUDIO PLAYER — VOLUME & FALLBACK =====
    const audio = document.getElementById('lagu');
    if (audio) {
        audio.volume = 0.5;

        audio.addEventListener('error', function () {
            console.warn('Audio file tidak ditemukan atau format tidak didukung');
        });

        audio.addEventListener('ended', function () {
            console.log('Lagu selesai');
        });
    }

    // ===== 3. FOTO — HOVER EFFECT =====
    const semuaFoto = document.querySelectorAll('.foto-klasik, .foto-mini img');
    semuaFoto.forEach(foto => {
        foto.addEventListener('mouseenter', function () {
            this.style.transition = 'transform 0.3s ease, filter 0.3s ease';
            this.style.transform = 'scale(1.02)';
            this.style.filter = 'sepia(0.2) contrast(1.1)';
        });
        foto.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
            this.style.filter = 'sepia(0.3) contrast(1.05)';
        });
    });

    // ===== 4. SCROLL KE ATAP =====
    const scrollBtn = document.getElementById('scrollToTop');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

  
});
