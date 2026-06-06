import { getFamilyData } from './data.js';

let chart;
let currentFilter = 'all';

const f3lib = globalThis.f3;
const chartSelector = '#FamilyChart';

if (!f3lib) {
  document.querySelector(chartSelector).innerHTML = `
    <div class="error-card">
      <h2>Family Chart did not load</h2>
      <p>Check your internet connection and that the CDN scripts in index.html are reachable.</p>
    </div>
  `;
} else {
  renderTree(currentFilter);
  wireControls();
}

function renderTree(filter) {
  const container = document.querySelector(chartSelector);
  container.innerHTML = '';

  chart = f3lib.createChart(chartSelector, getFamilyData(filter));

  chart
    .setCardHtml()
    .setCardDisplay([
      ['first name', 'last name'],
      ['relationship'],
      ['notes'],
    ]);

  chart.updateTree({ initial: true });
}

function wireControls() {
  document.querySelector('#showAll').addEventListener('click', () => setFilter('all'));
  document.querySelector('#showPaternalGrandfather').addEventListener('click', () => setFilter('paternal-grandfather'));
  document.querySelector('#showPaternalGrandmother').addEventListener('click', () => setFilter('paternal-grandmother'));
}

function setFilter(filter) {
  currentFilter = filter;
  renderTree(currentFilter);
  updateActiveButton(filter);
}

function updateActiveButton(filter) {
  const buttonMap = {
    all: '#showAll',
    'paternal-grandfather': '#showPaternalGrandfather',
    'paternal-grandmother': '#showPaternalGrandmother',
  };

  document.querySelectorAll('.controls button').forEach((button) => button.classList.remove('active'));
  document.querySelector(buttonMap[filter])?.classList.add('active');
}
