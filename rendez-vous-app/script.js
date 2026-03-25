document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('appointmentForm');
    const appointmentsList = document.getElementById('appointmentsList');

    // Load appointments from localStorage
    loadAppointments();

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const title = document.getElementById('title').value.trim();
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const description = document.getElementById('description').value.trim();

        if (!title || !date || !time) {
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }

        const appointment = {
            id: Date.now(),
            title,
            date,
            time,
            description
        };

        saveAppointment(appointment);
        addAppointmentToDOM(appointment);
        form.reset();
    });

    function saveAppointment(appointment) {
        const appointments = getAppointments();
        appointments.push(appointment);
        localStorage.setItem('appointments', JSON.stringify(appointments));
    }

    function getAppointments() {
        const appointments = localStorage.getItem('appointments');
        return appointments ? JSON.parse(appointments) : [];
    }

    function loadAppointments() {
        const appointments = getAppointments();
        appointments.forEach(appointment => addAppointmentToDOM(appointment));
    }

    function addAppointmentToDOM(appointment) {
        const card = document.createElement('div');
        card.className = 'appointment-card';
        card.dataset.id = appointment.id;

        card.innerHTML = `
            <h3>${appointment.title}</h3>
            <p class="date-time">${formatDate(appointment.date)} à ${appointment.time}</p>
            ${appointment.description ? `<p>${appointment.description}</p>` : ''}
            <button class="btn-delete" onclick="deleteAppointment(${appointment.id})">×</button>
        `;

        appointmentsList.appendChild(card);
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    window.deleteAppointment = function(id) {
        if (confirm('Êtes-vous sûr de vouloir supprimer ce rendez-vous ?')) {
            // Remove from DOM
            const card = document.querySelector(`[data-id="${id}"]`);
            if (card) {
                card.remove();
            }

            // Remove from localStorage
            const appointments = getAppointments().filter(app => app.id !== id);
            localStorage.setItem('appointments', JSON.stringify(appointments));
        }
    };
});