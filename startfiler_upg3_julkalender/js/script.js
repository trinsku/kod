const koder = {
  "christmasSpecials": [
    { "label": "Läppärit -20%", "code": "ASDJKL9023", "image": "./img/bild1.jpg" },
    { "label": "Ilmainen toimitus", "code": "VNKJDO0987", "image": "./img/bild2.jpg" },
    { "label": "Muistikortit ja muistitikut puoleen hintaan", "code": "IOSDFJ872", "image": "./img/bild3.jpg" },
    { "label": "Geforce näytönohjaimet -30%", "code": "KLHJ8976", "image": "./img/bild1.jpg" },
    { "label": "Samsung 55'' televisio 399€", "code": "SDFJKL9080", "image": "./img/bild2.jpg" },
    { "label": "Robottipölynimuri 129€", "code": "PQWO23894", "image": "./img/bild3.jpg" },
    { "label": "Verkkotuotteet -40%", "code": "Doe", "image": "./img/bild1.jpg" },
    { "label": "1Tb SSD 49€", "code": "Doe", "image": "./img/bild2.jpg" },
    { "label": "Intel tuotteet -22%", "code": "Doe", "image": "./img/bild3.jpg" },
    { "label": "AMD 6600XT 249€", "code": "Doe", "image": "./img/bild1.jpg" }
  ]
};

  const today = new Date();
  const day = today.getDate();

function shuffleArray(arr) {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const shuffledOffers = shuffleArray(koder.christmasSpecials);

const calendarBody = document.getElementById("calendar-body");
calendarBody.innerHTML = "";

for(let i = 1; i <= 24; i++){
     const door = document.createElement("div");
  door.id = `door${i}`;
  door.className = "calendar-door";
  door.innerHTML = `<p class="door-number">${i}</p>`;

if (shuffledOffers[i-1]) {
    door.dataset.sale = JSON.stringify(shuffledOffers[i-1]);
    } else {
    door.dataset.sale = JSON.stringify({ label: "Ingen rabatt idag.", code: "" });
  }

    door.addEventListener("click", () => openDoor(i));

  calendarBody.appendChild(door);
}

function openDoor(nummer) {
  if (nummer > day) {
    alert("Du kan inte öppna luckan ännu!");
    return;
  }

  const door = document.getElementById(`door${nummer}`);
  const sale = JSON.parse(door.dataset.sale);

  alert(`Lucka ${nummer}\n\nErbjudande: ${sale.label}\nKod: ${sale.code}`);
}