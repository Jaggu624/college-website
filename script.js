function mark(button, status) {
    // 1. Get the row containing the clicked button
    let row = button.closest('tr');
    let statusCell = row.querySelector('.status');
    let timeCell = row.querySelector('.time');

    // 2. Update the Status cell
    statusCell.innerText = status;
    statusCell.className = "status " + (status === 'Present' ? 'present-text' : 'absent-text');

    // 3. Set real-time Date & Time
    let now = new Date();
    timeCell.innerText = now.toLocaleDateString() + " | " + now.toLocaleTimeString();

    // 4. Update the Dashboard Counters
    updateDashboard();
}

function updateDashboard() {
    let pCount = 0;
    let aCount = 0;

    // Look at every status cell and count
    document.querySelectorAll('.status').forEach(cell => {
        if (cell.innerText === "Present") pCount++;
        if (cell.innerText === "Absent") aCount++;
    });

    document.getElementById('presentCount').innerText = pCount;
    document.getElementById('absentCount').innerText = aCount;
  }

