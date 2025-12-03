
document.addEventListener("DOMContentLoaded", () => {
    const courses = [
        { name: "Introduction to Computer Science", department: "Computer Science" },
        { name: "Principles of Management", department: "Business Administration" },
        // Add more courses as needed
    ];

    const courseList = document.getElementById("course-list");

    courses.forEach(course => {
        const li = document.createElement("li");
        li.textContent = ${course.name} - ${course.department};
        courseList.appendChild(li);
    });

    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", event => {
        event.preventDefault();
        alert("Your message has been sent!");
        contactForm.reset();
    });
});