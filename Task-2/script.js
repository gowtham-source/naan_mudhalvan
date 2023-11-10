document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the calendar container
    const calendar = document.getElementById("calendar");

    // Define a sample set of events
    const events = {
        "2023-11-05": ["Event A", "Event B"],
        "2023-11-10": ["Event C"],
        "2023-11-15": ["Event D"],
        // Add more events here...
    };

    // Generate the calendar
    generateCalendar(new Date(2023, 10), calendar, events);
});

function generateCalendar(date, calendar, events) {
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement("div");
        emptyDay.className = "day";
        calendar.appendChild(emptyDay);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
        const dayDiv = document.createElement("div");
        dayDiv.className = "day";
        dayDiv.textContent = day;

        if (events[dateStr]) {
            const eventMarker = document.createElement("div");
            eventMarker.className = "event-marker";
            eventMarker.textContent = events[dateStr].length;
            dayDiv.appendChild(eventMarker);

            // Add a click event to display event details
            dayDiv.addEventListener("click", () => {
                alert("Events on " + dateStr + ":\n" + events[dateStr].join("\n"));
            });
        }

        calendar.appendChild(dayDiv);
    }
}
