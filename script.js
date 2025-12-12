// DATA MOCKUP REAL-TIME (Desember 2025)
const disasters = [
  {
    lat: 5.0135,
    lng: 97.1633,
    title: "BANJIR ACEH UTARA",
    type: "banjir",
    desc: "Banjir meluas di Lhoksukon. Status: Darurat.",
    searchQuery: "Banjir Aceh Utara hari ini",
  },
  {
    lat: -8.5413,
    lng: 122.7744,
    title: "ERUPSI LEWOTOBI",
    type: "erupsi",
    desc: "Semburan abu vulkanik tinggi. Zona bahaya 7km.",
    searchQuery: "Erupsi Gunung Lewotobi terkini",
  },
  {
    lat: -6.968,
    lng: 110.3175,
    title: "BANJIR ROB SEMARANG",
    type: "banjir",
    desc: "Air pasang laut merendam kawasan pelabuhan.",
    searchQuery: "Banjir Rob Semarang terkini",
  },
  {
    lat: -0.9492,
    lng: 100.3543,
    title: "LONGSOR SUMBAR",
    type: "longsor",
    desc: "Jalur Sitinjau Lauik rawan longsor.",
    searchQuery: "Longsor Sumatera Barat hari ini",
  },
  {
    lat: -6.2088,
    lng: 106.8456,
    title: "SIAGA BANJIR JAKARTA",
    type: "banjir",
    desc: "Pintu air Manggarai Siaga 3.",
    searchQuery: "Banjir Jakarta hari ini",
  },
  {
    lat: -8.3405,
    lng: 116.3265,
    title: "GEMPA LOMBOK",
    type: "gempa",
    desc: "Gempa ringan M3.5 dirasakan.",
    searchQuery: "Gempa Lombok hari ini",
  },
];

// INIT MAP (Dark Mode CartoDB)
var map = L.map("map", {
  center: [-2.5, 118],
  zoom: 5,
  zoomControl: false,
});

L.control.zoom({ position: "bottomright" }).addTo(map);

L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
  attribution: "© INA-DisasterMonitor",
  subdomains: "abcd",
  maxZoom: 19,
}).addTo(map);

// Custom Icon Generator
const createIcon = (color) => {
  return L.divIcon({
    className: "custom-marker",
    html: `<div style="
            width: 12px; height: 12px; 
            background: ${color}; 
            border-radius: 50%; 
            border: 2px solid #fff;
            box-shadow: 0 0 10px ${color};
            position: relative;">
            <div style="
                position: absolute; top: -6px; left: -6px;
                width: 20px; height: 20px;
                border: 2px solid ${color};
                border-radius: 50%;
                opacity: 0.5;
                animation: pulse 1.5s infinite;
            "></div>
        </div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });
};

// Render Data
disasters.forEach((d) => {
  let color = "#0ea5e9"; // Default Blue
  if (d.type === "erupsi") color = "#ef4444"; // Red
  if (d.type === "longsor") color = "#f59e0b"; // Orange
  if (d.type === "gempa") color = "#a855f7"; // Purple

  const marker = L.marker([d.lat, d.lng], { icon: createIcon(color) }).addTo(
    map
  );

  // Popup dengan Tombol Search
  const popupContent = `
        <div style="font-family: 'Inter', sans-serif; min-width: 200px;">
            <h4 style="margin:0 0 5px; color:#0f172a; font-weight:700; border-bottom:1px solid #eee; padding-bottom:5px;">
                ${d.title}
            </h4>
            <p style="margin:0 0 10px; font-size:12px; color:#64748b;">${
              d.desc
            }</p>
            <a href="https://www.google.com/search?q=${encodeURIComponent(
              d.searchQuery
            )}" 
               target="_blank" 
               style="display:block; background:${color}; color:#fff; text-align:center; padding:6px; text-decoration:none; border-radius:4px; font-size:11px; font-weight:bold; letter-spacing:0.5px;">
               <i class="fas fa-search"></i> CEK BERITA & FOTO
            </a>
        </div>
    `;

  marker.bindPopup(popupContent);
});

// Inject Animation Style
const style = document.createElement("style");
style.innerHTML = `
    @keyframes pulse {
        0% { transform: scale(1); opacity: 0.8; }
        100% { transform: scale(2.5); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Animasi Bar Chart di Statistik
setTimeout(() => {
  document.querySelectorAll(".bar").forEach((bar) => {
    setInterval(() => {
      const h = Math.floor(Math.random() * 80) + 20;
      bar.style.height = h + "%";
    }, 800 + Math.random() * 1000);
  });
}, 1000);


