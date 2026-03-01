// Entrance animation controller
// Only runs on homepage and only on first visit per session

(function() {
  const isHomepage = window.location.pathname === '/' || window.location.pathname === '/index.html';
  const hasSeenAnimation = sessionStorage.getItem('hasSeenEntranceAnimation');

  if (!isHomepage || hasSeenAnimation) {
    // Skip animation - remove entrance elements and show content immediately
    const entranceOverlay = document.getElementById('entranceOverlay');
    const entranceName = document.getElementById('entranceName');
    const siteContainer = document.getElementById('siteContainer');

    if (entranceOverlay) entranceOverlay.remove();
    if (entranceName) entranceName.remove();
    if (siteContainer) siteContainer.style.opacity = '1';
    return;
  }

  // Run entrance animation
  const entranceOverlay = document.getElementById('entranceOverlay');
  const entranceName = document.getElementById('entranceName');
  const siteContainer = document.getElementById('siteContainer');

  if (!entranceOverlay || !entranceName || !siteContainer) return;

  // Set initial state
  siteContainer.classList.add('entrance-mode');

  // Start animation sequence
  setTimeout(() => {
    entranceName.classList.add('move-up');
  }, 1500);

  setTimeout(() => {
    siteContainer.classList.add('entrance-complete');
    siteContainer.classList.remove('entrance-mode');
  }, 2300);

  setTimeout(() => {
    entranceOverlay.classList.add('fade-out');
  }, 2500);

  setTimeout(() => {
    entranceOverlay.remove();
    entranceName.remove();
    sessionStorage.setItem('hasSeenEntranceAnimation', 'true');
  }, 3500);
})();
