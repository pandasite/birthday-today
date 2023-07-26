document.addEventListener('DOMContentLoaded', async function () {
  const celebritiesContainer = document.getElementById('celebritiesContainer');
  const loadingText = document.getElementById('loadingText');

  try {
    const response = await fetch('https://wishiy.com/api/today', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        limit: 31, // Ganti angka 10 dengan jumlah data yang Anda inginkan, maksimal 100.
        response: 'json',
      }),
    });
    const data = await response.json();

    loadingText.style.display = 'none';

    data.forEach(celebrity => {
      celebritiesContainer.innerHTML += `
        <div class="card">
          <h2 class="text-2xl font-bold">${celebrity.name}</h2>
          <p>Nama Depan: ${celebrity.fname}</p>
          <p>Nama Belakang: ${celebrity.lname}</p>
          <p>Jenis Kelamin: ${celebrity.gender}</p>
          <p>Pekerjaan: ${celebrity.occupation}</p>
          <p>Tempat Lahir: ${celebrity.birth_place}</p>
          <p>Negara: ${celebrity.country}</p>
          <p>Kode ISO Negara: ${celebrity.country_iso}</p>
          <p>Agama: ${celebrity.religion}</p>
        </div>
      `;
    });
  } catch (error) {
    console.error('Gagal mendapatkan data:', error.message);
    loadingText.innerHTML = 'Terjadi kesalahan saat memuat data. Mohon coba lagi nanti.';
  }
});
