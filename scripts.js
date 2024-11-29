// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Dummy Map Placeholder
  document.getElementById('map').style.height = "300px";
  document.getElementById('map').style.background = "yellow";
  document.getElementById('map').style.display = "flex";
  document.getElementById('map').style.justifyContent = "center";
  document.getElementById('map').style.alignItems = "center";
  document.getElementById('map').style.color = "#e74c3c"; // Red
  document.getElementById('map').innerText = "Interactive Map Coming Soon!";
  
  function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}  