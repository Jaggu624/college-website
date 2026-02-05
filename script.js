function mark(button, status) {
  const row = button.closest("tr");
  const statusCell = row.querySelector(".status");
  const timeCell = row.querySelector(".time");

  statusCell.innerText = status;
  statusCell.className = "status " + (status === "Present" ? "present-text" : "absent-text");

  const now = new Date();
  timeCell.innerText = now.toLocaleDateString() + " " + now.toLocaleTimeString();

  updateDashboard();
}

function updateDashboard() {
  let present = 0, absent = 0;

  document.querySelectorAll(".status").forEach(cell => {
    if (cell.innerText === "Present") present++;
    if (cell.innerText === "Absent") absent++;
  });

  document.getElementById("presentCount").innerText = present;
  document.getElementById("absentCount").innerText = absent;
}


