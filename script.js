document.addEventListener('DOMContentLoaded', async function () {
  const celebritiesContainer = document.getElementById('celebritiesContainer');

  try {
    const response = await fetch('https://wishiy.com/api/today', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        limit: 10, // Ganti angka 10 dengan jumlah data yang Anda inginkan, maksimal 100.
        response: 'json',
      }),
    });
    const data = await response.json();

    data.forEach(celebrity => {
      celebritiesContainer.innerHTML += `
        <div class="card bg-white rounded-lg p-4 shadow-md">
          <h2 class="text-xl font-semibold">${celebrity.name}</h2>
          <p>First Name: ${celebrity.fname}</p>
          <p>Last Name: ${celebrity.lname}</p>
          <p>Gender: ${celebrity.gender}</p>
          <p>Occupation: ${celebrity.occupation}</p>
          <p>Birth Place: ${celebrity.birth_place}</p>
          <p>Country: ${celebrity.country}</p>
          <p>Country ISO Code: ${celebrity.country_iso}</p>
          <p>Religion: ${celebrity.religion}</p>
        </div>
      `;
    });
  } catch (error) {
    console.error('Gagal mendapatkan data:', error.message);
  }
});
