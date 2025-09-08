// Weekly Planner JavaScript
function resetPlanner() {
  document.querySelectorAll('#weekly-planner input[type="checkbox"]').forEach(cb => cb.checked = false);
}
