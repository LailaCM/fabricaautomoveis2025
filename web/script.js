const uri = 'http://localhost:3000/areas';
const main = document.querySelector('#planta');

async function carregarAreas() {
  try {
    const resp = await fetch(uri);
    const dados = await resp.json();

    for (let i = 1; i <= 11; i++) {
      const areaInfo = dados.find(a => a.area === i);
      const total = areaInfo ? areaInfo.total : 0;

      const area = document.createElement('div');
      area.id = `area-${i}`;
      area.textContent = i;

      if (total > 0) {
        area.style.backgroundColor = '#0000FF'; 
        area.style.color = '#FFFFFF';
      } else {
        area.style.backgroundColor = '#FFFFFF'; 
        area.style.color = '#000000';
      }

      area.addEventListener('click', () => {
        if (total > 0) {
          alert(`A área ${i} está ocupada.`);
        } else {
          alert(`A área ${i} está vazia.`);
        }
      });

      main.appendChild(area);
    }
  } catch (error) {
    console.error('Erro ao carregar áreas:', error);
  }
}

carregarAreas();
