document.addEventListener("DOMContentLoaded", function () {
    // Centralized dates for all projects
    const projectDates = [
        { id: "Beef", startDate: "2022-02-25" }, // BeEF XSS and SQL Injection
        { id: "LocalNetwork", startDate: "2023-04-27" }, 
        { id: "Ransomware", startDate: "2025-05-10" }, 
        { id: "BruteForce", startDate: "2025-04-05" }, 
        { id: "AutomatedBurp", startDate: "2025-05-20" }, 
        { id: "MalwareDropper", startDate: "2025-07-02" }, 
        { id: "IDS", startDate: "2025-06-02" }, 
        { id: "mdxcyberhub", startDate: "2025-04-02" },
        { id: "Placeholder", startDate: "" },// Placeholder (no date)
    ];

    function updateDates() {
        projectDates.forEach((project) => {
            const startDateElement = document.querySelector(`.app-card[href*="${project.id}"] .start-date`);
            const timeAgoElement = document.querySelector(`.app-card[href*="${project.id}"] .time-ago`);

            if (startDateElement && timeAgoElement) {
                if (project.startDate) {
                    // Format start date in UK format: D MMM YYYY (e.g., 2 Feb 2021)
                    const formattedDate = moment(project.startDate).format("D MMM YYYY");
                    startDateElement.textContent = `Start: ${formattedDate}`; // Update the start date text

                    // Calculate time ago
                    const timeAgo = moment(project.startDate).fromNow();
                    timeAgoElement.textContent = timeAgo; // Update the time ago text
                } else {
                    // Handle empty dates
                    startDateElement.textContent = "Start: TBD";
                    timeAgoElement.textContent = "";
                }
            }
        });
    }

    // Call the function to update dates
    updateDates();
});