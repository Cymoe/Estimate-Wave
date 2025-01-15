// Grid background component
const GridBackground = () => {
  const gridContainer = document.createElement('div');
  gridContainer.className = 'grid-background';
  
  // Create grid lines with increased coverage
  for (let i = 0; i < 50; i++) { // Reduced number of lines
    const horizontalLine = document.createElement('div');
    horizontalLine.className = 'grid-line horizontal';
    horizontalLine.style.top = `${i * 2}%`;
    gridContainer.appendChild(horizontalLine);

    const verticalLine = document.createElement('div');
    verticalLine.className = 'grid-line vertical';
    verticalLine.style.left = `${i * 2}%`;
    gridContainer.appendChild(verticalLine);
  }

  return gridContainer;
};

// Dot background component
const DotBackground = () => {
  const dotContainer = document.createElement('div');
  dotContainer.className = 'dot-background';
  
  // Create dots
  for (let i = 0; i < 100; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.top = `${Math.random() * 100}%`;
    dotContainer.appendChild(dot);
  }

  return dotContainer;
};

// Initialize backgrounds
document.addEventListener('DOMContentLoaded', () => {
  // Add grid background to body
  const bodyBackground = GridBackground();
  bodyBackground.classList.add('full-page-grid');
  document.body.insertBefore(bodyBackground, document.body.firstChild);

  // Add dot background to about section
  const aboutSection = document.querySelector('.about');
  aboutSection.insertBefore(DotBackground(), aboutSection.firstChild);
});
