document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const patientName = document.getElementById('patientName').value;
    const patientEmail = document.getElementById('patientEmail').value;
    const patientPhone = document.getElementById('patientPhone').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const problem = document.getElementById('problem').value;
    const gender = document.getElementById('gender').value;
    const age = document.getElementById('age').value;
    const appointmentTime = document.getElementById('appointmentTime').value;
    const specialist = document.getElementById('specialist').value;

    // Validate form inputs
    if (!patientName || !patientEmail || !patientPhone || !appointmentDate || !problem || !gender || !age || !appointmentTime || !specialist) {
        alert('Please fill out all fields.');
        return;
    }

    // Create appointment object
    const appointment = {
        patientName,
        patientEmail,
        patientPhone,
        appointmentDate,
        problem,
        gender,
        age,
        appointmentTime,
        specialist
    };

    // Save to local storage
    saveAppointment(appointment);

    // Reset the form
    resetForm();

    // Show success message
    showSuccessMessage('Appointment booked successfully!');

    // Redirect to the list page
    setTimeout(() => {
        window.location.href = "./Appointment_Booking.html";
    }, 2000);
});

function saveAppointment(appointment) {
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.push(appointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));
}

function resetForm() {
    document.getElementById('appointmentForm').reset();
}

function showSuccessMessage(message) {
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = message;

    document.body.appendChild(successMessage);

    // Remove the message after 3 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 3000);
}