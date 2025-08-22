const today = new Date();
const formattedDate = today.toISOString().split('T')[0];
document.getElementById("Date").textContent = formattedDate;
