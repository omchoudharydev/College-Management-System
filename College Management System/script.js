/**
 * CollegePro - College Management System
 * Task ID: WD-COL-001 | Data Alcott Systems
 * Client-side Storage & Logic using JavaScript Objects and LocalStorage
 */

// ==========================================
// 1. INITIAL SEED DATA
// ==========================================

const INITIAL_DEPARTMENTS = [
    { id: 1, name: "Computer Science", head: "Dr. Alan Turing", established: 1998, description: "Advanced Computing, AI, Software Engineering & Systems Architecture." },
    { id: 2, name: "Electronics & Communication", head: "Dr. Claude Shannon", established: 2001, description: "Signal Processing, VLSI Design, Embedded Systems & Telephony." },
    { id: 3, name: "Mechanical Engineering", head: "Dr. Nikola Tesla", established: 1995, description: "Thermodynamics, Robotics, Fluid Dynamics, and Automotive Design." },
    { id: 4, name: "Civil Engineering", head: "Dr. Thomas Telford", established: 1994, description: "Structural Analysis, Geotechnics, Transportation & Urban Design." },
    { id: 5, name: "Business Administration", head: "Dr. Peter Drucker", established: 2005, description: "Finance, Global Marketing, Strategic Leadership & Analytics." },
    { id: 6, name: "Arts & Humanities", head: "Dr. Maya Angelou", established: 2008, description: "Literature, Philosophy, Creative Writing & Cultural Studies." }
];

const INITIAL_STUDENTS = [
    { id: 1, name: "John Smith", email: "john@college.edu", phone: "+91 9876543210", department: "Computer Science", year: "3rd Year", status: "Active", enrollment_date: "2024-06-01" },
    { id: 2, name: "Sarah Johnson", email: "sarah@college.edu", phone: "+91 9876543211", department: "Business Administration", year: "2nd Year", status: "Active", enrollment_date: "2025-06-01" },
    { id: 3, name: "Rahul Verma", email: "rahul.v@college.edu", phone: "+91 9876543212", department: "Computer Science", year: "4th Year", status: "Active", enrollment_date: "2023-07-15" },
    { id: 4, name: "Ananya Iyer", email: "ananya.i@college.edu", phone: "+91 9876543213", department: "Electronics & Communication", year: "3rd Year", status: "Enrolled", enrollment_date: "2024-06-10" },
    { id: 5, name: "Marcus Wright", email: "marcus.w@college.edu", phone: "+91 9876543214", department: "Mechanical Engineering", year: "4th Year", status: "Graduated", enrollment_date: "2022-08-01" },
    { id: 6, name: "Elena Rostova", email: "elena.r@college.edu", phone: "+91 9876543215", department: "Civil Engineering", year: "1st Year", status: "Active", enrollment_date: "2026-06-15" },
    { id: 7, name: "David Chen", email: "david.c@college.edu", phone: "+91 9876543216", department: "Business Administration", year: "2nd Year", status: "On Leave", enrollment_date: "2025-06-05" },
    { id: 8, name: "Priya Sharma", email: "priya.s@college.edu", phone: "+91 9876543217", department: "Arts & Humanities", year: "1st Year", status: "Active", enrollment_date: "2026-07-01" }
];

const INITIAL_FACULTY = [
    { id: 1, name: "Dr. Alan Turing", email: "turing@college.edu", department: "Computer Science", qualification: "Ph.D. in Computer Science (Cambridge)", join_date: "2015-08-10" },
    { id: 2, name: "Prof. Sarah Jenkins", email: "jenkins@college.edu", department: "Computer Science", qualification: "M.Tech in Software Engineering", join_date: "2019-01-15" },
    { id: 3, name: "Dr. Claude Shannon", email: "shannon@college.edu", department: "Electronics & Communication", qualification: "Ph.D. in Electrical Eng.", join_date: "2016-04-12" },
    { id: 4, name: "Dr. Nikola Tesla", email: "tesla@college.edu", department: "Mechanical Engineering", qualification: "D.Sc. in Applied Physics", join_date: "2014-11-20" },
    { id: 5, name: "Dr. Peter Drucker", email: "drucker@college.edu", department: "Business Administration", qualification: "Ph.D. in Management", join_date: "2017-09-01" }
];

const INITIAL_COURSES = [
    { id: 1, name: "Data Structures & Algorithms", code: "CS201", department: "Computer Science", credits: 4, faculty_id: 1, schedule: "Mon, Wed 09:00 - 10:30 AM" },
    { id: 2, name: "Database Management Systems", code: "CS302", department: "Computer Science", credits: 4, faculty_id: 2, schedule: "Tue, Thu 10:45 - 12:15 PM" },
    { id: 3, name: "Web Development", code: "CS305", department: "Computer Science", credits: 3, faculty_id: 2, schedule: "Mon, Wed 01:15 - 02:45 PM" },
    { id: 4, name: "Machine Learning", code: "CS401", department: "Computer Science", credits: 4, faculty_id: 1, schedule: "Tue, Thu 03:00 - 04:30 PM" },
    { id: 5, name: "Business Analytics", code: "BA204", department: "Business Administration", credits: 3, faculty_id: 5, schedule: "Mon, Wed 10:45 - 12:15 PM" },
    { id: 6, name: "Digital Marketing", code: "BA302", department: "Business Administration", credits: 3, faculty_id: 5, schedule: "Fri 09:00 - 12:00 PM" }
];

const INITIAL_NOTICES = [
    { id: 1, title: "Semester Final Examination Timetable Released", category: "Exam", date: "2026-09-25", content: "The schedule for Odd Semester 2026-27 is now published on the official notice portal. Students are advised to verify their subject codes." },
    { id: 2, title: "Annual Inter-College Tech Symposium 'HackCon 2026'", category: "Event", date: "2026-10-12", content: "Registrations are now open for HackCon 2026. Teams from all branches are invited to participate in the 36-hour hackathon." },
    { id: 3, title: "Library Weekend Extended Hours Notice", category: "Academic", date: "2026-09-18", content: "The Central Library will remain open until 11:00 PM on weekends during the pre-examination study weeks." }
];

const INITIAL_ATTENDANCE = [
    { id: 1, student_id: 1, course_id: 1, date: "2026-09-20", status: "Present" },
    { id: 2, student_id: 3, course_id: 1, date: "2026-09-20", status: "Present" },
    { id: 3, student_id: 1, course_id: 3, date: "2026-09-21", status: "Present" }
];

// ==========================================
// 2. DATA PERSISTENCE LAYER (LocalStorage)
// ==========================================

function loadStore(key, defaultValue) {
    const raw = localStorage.getItem("COLLEGEPRO_" + key);
    return raw ? JSON.parse(raw) : defaultValue;
}

function saveStore(key, value) {
    localStorage.setItem("COLLEGEPRO_" + key, JSON.stringify(value));
}

let students = loadStore("students", INITIAL_STUDENTS);
let faculty = loadStore("faculty", INITIAL_FACULTY);
let courses = loadStore("courses", INITIAL_COURSES);
let departments = loadStore("departments", INITIAL_DEPARTMENTS);
let notices = loadStore("notices", INITIAL_NOTICES);
let attendance = loadStore("attendance", INITIAL_ATTENDANCE);

// ==========================================
// 3. INITIALIZATION & ROUTING
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initTheme();
    initRoleSwitcher();
    initAttendanceDate();
    
    renderDashboard();
    renderStudents();
    renderFaculty();
    renderCourses();
    renderDepartments();
    renderAttendance();
    renderTimetable();
    renderNotices();
    renderReports();
    
    setupFilters();
});

function initNavigation() {
    const navLinks = document.querySelectorAll(".nav-link");
    const openSectionBtns = document.querySelectorAll(".open-section-btn");
    const sidebar = document.getElementById("sidebar");
    const menuBtn = document.getElementById("menuBtn");
    const mobileCloseBtn = document.getElementById("mobileCloseBtn");

    function switchSection(targetId) {
        document.querySelectorAll(".content-section").forEach(sec => sec.classList.remove("active"));
        navLinks.forEach(link => link.classList.remove("active"));

        const activeSec = document.getElementById(targetId);
        if (activeSec) {
            activeSec.classList.add("active");
            const activeLink = document.querySelector(`.nav-link[data-target="${targetId}"]`);
            if (activeLink) activeLink.classList.add("active");

            // Update top bar title
            const titles = {
                dashboard: "Dashboard Overview",
                students: "Student Directory & Records",
                faculty: "Faculty & Staff Directory",
                courses: "Academic Course Catalog",
                departments: "Departments & Faculties",
                attendance: "Daily Attendance Tracker",
                timetable: "Weekly Schedule Matrix",
                notices: "Notice Board & Campus Events",
                reports: "Reports & Data Export"
            };
            document.getElementById("pageTitle").textContent = titles[targetId] || "CollegePro";
        }
        sidebar.classList.remove("open");
    }

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = link.dataset.target;
            switchSection(target);
        });
    });

    openSectionBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            switchSection(btn.dataset.target);
        });
    });

    menuBtn.addEventListener("click", () => sidebar.classList.add("open"));
    mobileCloseBtn.addEventListener("click", () => sidebar.classList.remove("open"));
}

function initTheme() {
    const themeBtn = document.getElementById("themeToggle");
    const savedTheme = localStorage.getItem("COLLEGEPRO_theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);

    themeBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("COLLEGEPRO_theme", newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const icon = document.querySelector("#themeToggle i");
    if (theme === "dark") {
        icon.className = "fa-solid fa-sun";
    } else {
        icon.className = "fa-solid fa-moon";
    }
}

function initRoleSwitcher() {
    const btn = document.getElementById("userProfileBtn");
    const menu = document.getElementById("roleMenu");
    const items = document.querySelectorAll(".role-item");

    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        menu.classList.toggle("show");
    });

    document.addEventListener("click", () => menu.classList.remove("show"));

    items.forEach(item => {
        item.addEventListener("click", () => {
            const role = item.dataset.role;
            const name = item.dataset.name;
            document.getElementById("currentUserRole").textContent = role;
            document.getElementById("currentUserName").textContent = name;
            showToast(`Switched account mode to: ${role} (${name})`, "success");
        });
    });
}

function initAttendanceDate() {
    const dateInput = document.getElementById("attDateInput");
    const today = new Date().toISOString().split("T")[0];
    dateInput.value = today;
    dateInput.addEventListener("change", renderAttendance);
}

// ==========================================
// 4. TOAST NOTIFICATIONS
// ==========================================

function showToast(message, type = "info") {
    const container = document.getElementById("toastContainer");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    
    let icon = "fa-circle-info";
    if (type === "success") icon = "fa-circle-check";
    if (type === "error") icon = "fa-circle-exclamation";
    
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(100%)";
        setTimeout(() => toast.remove(), 300);
    }, 3200);
}

// ==========================================
// 5. DASHBOARD MODULE
// ==========================================

function renderDashboard() {
    // Stat Counters
    document.getElementById("statTotalStudents").textContent = students.length;
    document.getElementById("statActiveStudents").textContent = students.filter(s => s.status === "Active").length;
    document.getElementById("statTotalFaculty").textContent = faculty.length;
    document.getElementById("statTotalCourses").textContent = courses.length;
    document.getElementById("statTotalDepartments").textContent = departments.length;

    // Department Distribution Bars
    const deptContainer = document.getElementById("deptBarsContainer");
    deptContainer.innerHTML = "";
    const totalStudents = students.length || 1;

    departments.forEach(dept => {
        const count = students.filter(s => s.department === dept.name).length;
        const percent = Math.round((count / totalStudents) * 100);

        const barItem = document.createElement("div");
        barItem.className = "dept-bar-item";
        barItem.innerHTML = `
            <div class="dept-bar-label">
                <span>${dept.name}</span>
                <span>${count} students (${percent}%)</span>
            </div>
            <div class="dept-bar-track">
                <div class="dept-bar-fill" style="width: ${percent}%;"></div>
            </div>
        `;
        deptContainer.appendChild(barItem);
    });

    // Dashboard Recent Notices
    const noticePreview = document.getElementById("dashboardNotices");
    noticePreview.innerHTML = "";
    notices.slice(0, 3).forEach(n => {
        const div = document.createElement("div");
        div.className = "dash-notice-item";
        div.innerHTML = `
            <div class="dash-notice-title">${n.title}</div>
            <div class="dash-notice-date"><i class="fa-regular fa-clock"></i> ${n.date} · <span class="badge badge-info">${n.category}</span></div>
        `;
        noticePreview.appendChild(div);
    });
}

// ==========================================
// 6. STUDENTS MODULE (CRUD & Filters)
// ==========================================

function setupFilters() {
    const studentSearch = document.getElementById("studentSearchInput");
    const deptFilter = document.getElementById("studentDeptFilter");
    const statusFilter = document.getElementById("studentStatusFilter");

    [studentSearch, deptFilter, statusFilter].forEach(el => {
        el.addEventListener("input", renderStudents);
    });

    const facultySearch = document.getElementById("facultySearchInput");
    const facultyDeptFilter = document.getElementById("facultyDeptFilter");
    [facultySearch, facultyDeptFilter].forEach(el => {
        el.addEventListener("input", renderFaculty);
    });

    const courseSearch = document.getElementById("courseSearchInput");
    const courseDept = document.getElementById("courseDeptFilter");
    [courseSearch, courseDept].forEach(el => {
        el.addEventListener("input", renderCourses);
    });

    document.getElementById("attCourseSelect").addEventListener("change", renderAttendance);
    document.getElementById("markAllPresentBtn").addEventListener("click", markAllPresent);
    
    document.getElementById("timetableDeptSelect").addEventListener("change", renderTimetable);
    document.getElementById("timetableYearSelect").addEventListener("change", renderTimetable);
}

function renderStudents() {
    const search = (document.getElementById("studentSearchInput").value || "").toLowerCase();
    const dept = document.getElementById("studentDeptFilter").value;
    const status = document.getElementById("studentStatusFilter").value;

    const tbody = document.getElementById("studentsTableBody");
    tbody.innerHTML = "";

    const filtered = students.filter(s => {
        const matchesSearch = s.name.toLowerCase().includes(search) || 
                              s.email.toLowerCase().includes(search) || 
                              s.id.toString().includes(search);
        const matchesDept = !dept || s.department === dept;
        const matchesStatus = !status || s.status === status;
        return matchesSearch && matchesDept && matchesStatus;
    });

    document.getElementById("studentCountLabel").textContent = `Showing ${filtered.length} of ${students.length} students`;

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:30px; color:var(--text-muted);">No student records found matching filter criteria.</td></tr>`;
        return;
    }

    filtered.forEach(s => {
        const tr = document.createElement("tr");
        const statusClass = `badge-${s.status.toLowerCase().replace(/\s+/g, '')}`;

        tr.innerHTML = `
            <td><strong>#${s.id}</strong></td>
            <td><strong>${s.name}</strong></td>
            <td>${s.department}</td>
            <td>${s.year}</td>
            <td>
                <div><i class="fa-regular fa-envelope"></i> ${s.email}</div>
                <small class="text-muted"><i class="fa-solid fa-phone"></i> ${s.phone}</small>
            </td>
            <td><span class="badge ${statusClass}">${s.status}</span></td>
            <td>${s.enrollment_date}</td>
            <td class="text-right">
                <button class="btn btn-outline btn-sm" onclick="editStudent(${s.id})" title="Edit"><i class="fa-solid fa-pen-to-square"></i></button>
                <button class="btn btn-danger btn-sm" onclick="deleteStudent(${s.id})" title="Delete"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function openStudentModal(editId = null) {
    const modal = document.getElementById("studentModal");
    const form = document.getElementById("studentForm");
    form.reset();

    if (editId) {
        const s = students.find(item => item.id === editId);
        if (s) {
            document.getElementById("studentModalTitle").textContent = "Update Student Record";
            document.getElementById("studentId").value = s.id;
            document.getElementById("studentName").value = s.name;
            document.getElementById("studentEmail").value = s.email;
            document.getElementById("studentPhone").value = s.phone;
            document.getElementById("studentDept").value = s.department;
            document.getElementById("studentYear").value = s.year;
            document.getElementById("studentStatus").value = s.status;
            document.getElementById("studentEnrollDate").value = s.enrollment_date;
        }
    } else {
        document.getElementById("studentModalTitle").textContent = "Enroll New Student";
        document.getElementById("studentId").value = "";
        document.getElementById("studentEnrollDate").value = new Date().toISOString().split("T")[0];
    }

    modal.classList.add("active");
}

function handleStudentFormSubmit(e) {
    e.preventDefault();
    const id = document.getElementById("studentId").value;
    const name = document.getElementById("studentName").value.trim();
    const email = document.getElementById("studentEmail").value.trim();
    const phone = document.getElementById("studentPhone").value.trim();
    const department = document.getElementById("studentDept").value;
    const year = document.getElementById("studentYear").value;
    const status = document.getElementById("studentStatus").value;
    const enrollment_date = document.getElementById("studentEnrollDate").value;

    if (id) {
        // Edit existing
        const index = students.findIndex(s => s.id === parseInt(id));
        if (index !== -1) {
            students[index] = { ...students[index], name, email, phone, department, year, status, enrollment_date };
            showToast(`Student record for "${name}" updated successfully.`, "success");
        }
    } else {
        // Create new
        const newId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;
        students.push({ id: newId, name, email, phone, department, year, status, enrollment_date });
        showToast(`Student "${name}" enrolled successfully.`, "success");
    }

    saveStore("students", students);
    closeModal("studentModal");
    renderStudents();
    renderDashboard();
    renderReports();
}

function editStudent(id) {
    openStudentModal(id);
}

function deleteStudent(id) {
    const s = students.find(item => item.id === id);
    if (!s) return;
    if (confirm(`Are you certain you wish to delete student: ${s.name}?`)) {
        students = students.filter(item => item.id !== id);
        saveStore("students", students);
        showToast(`Deleted student: ${s.name}`, "error");
        renderStudents();
        renderDashboard();
        renderReports();
    }
}

// ==========================================
// 7. FACULTY MODULE (CRUD & Directory)
// ==========================================

function renderFaculty() {
    const search = (document.getElementById("facultySearchInput").value || "").toLowerCase();
    const dept = document.getElementById("facultyDeptFilter").value;

    const tbody = document.getElementById("facultyTableBody");
    tbody.innerHTML = "";

    const filtered = faculty.filter(f => {
        const matchesSearch = f.name.toLowerCase().includes(search) || 
                              f.qualification.toLowerCase().includes(search) ||
                              f.email.toLowerCase().includes(search);
        const matchesDept = !dept || f.department === dept;
        return matchesSearch && matchesDept;
    });

    document.getElementById("facultyCountLabel").textContent = `Showing ${filtered.length} faculty members`;

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:30px; color:var(--text-muted);">No faculty members found.</td></tr>`;
        return;
    }

    filtered.forEach(f => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>#${f.id}</strong></td>
            <td><strong>${f.name}</strong></td>
            <td>${f.email}</td>
            <td><span class="badge badge-info">${f.department}</span></td>
            <td>${f.qualification}</td>
            <td>${f.join_date}</td>
            <td class="text-right">
                <button class="btn btn-outline btn-sm" onclick="editFaculty(${f.id})" title="Edit"><i class="fa-solid fa-pen-to-square"></i></button>
                <button class="btn btn-danger btn-sm" onclick="deleteFaculty(${f.id})" title="Delete"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    // Also populate Faculty select dropdown in Course modal
    const courseFacultySelect = document.getElementById("courseFaculty");
    if (courseFacultySelect) {
        courseFacultySelect.innerHTML = faculty.map(f => `<option value="${f.id}">${f.name} (${f.department})</option>`).join("");
    }
}

function openFacultyModal(editId = null) {
    const modal = document.getElementById("facultyModal");
    const form = document.getElementById("facultyForm");
    form.reset();

    if (editId) {
        const f = faculty.find(item => item.id === editId);
        if (f) {
            document.getElementById("facultyModalTitle").textContent = "Edit Faculty Profile";
            document.getElementById("facultyId").value = f.id;
            document.getElementById("facultyName").value = f.name;
            document.getElementById("facultyEmail").value = f.email;
            document.getElementById("facultyDept").value = f.department;
            document.getElementById("facultyQual").value = f.qualification;
            document.getElementById("facultyJoinDate").value = f.join_date;
        }
    } else {
        document.getElementById("facultyModalTitle").textContent = "Add Faculty Member";
        document.getElementById("facultyId").value = "";
        document.getElementById("facultyJoinDate").value = new Date().toISOString().split("T")[0];
    }

    modal.classList.add("active");
}

function handleFacultyFormSubmit(e) {
    e.preventDefault();
    const id = document.getElementById("facultyId").value;
    const name = document.getElementById("facultyName").value.trim();
    const email = document.getElementById("facultyEmail").value.trim();
    const department = document.getElementById("facultyDept").value;
    const qualification = document.getElementById("facultyQual").value.trim();
    const join_date = document.getElementById("facultyJoinDate").value;

    if (id) {
        const index = faculty.findIndex(f => f.id === parseInt(id));
        if (index !== -1) {
            faculty[index] = { ...faculty[index], name, email, department, qualification, join_date };
            showToast(`Updated profile for ${name}`, "success");
        }
    } else {
        const newId = faculty.length > 0 ? Math.max(...faculty.map(f => f.id)) + 1 : 1;
        faculty.push({ id: newId, name, email, department, qualification, join_date });
        showToast(`Added ${name} to Faculty registry`, "success");
    }

    saveStore("faculty", faculty);
    closeModal("facultyModal");
    renderFaculty();
    renderDashboard();
    renderReports();
}

function editFaculty(id) {
    openFacultyModal(id);
}

function deleteFaculty(id) {
    const f = faculty.find(item => item.id === id);
    if (!f) return;
    if (confirm(`Are you sure you want to remove faculty member: ${f.name}?`)) {
        faculty = faculty.filter(item => item.id !== id);
        saveStore("faculty", faculty);
        showToast(`Removed faculty member: ${f.name}`, "error");
        renderFaculty();
        renderDashboard();
        renderReports();
    }
}

// ==========================================
// 8. COURSES MODULE
// ==========================================

function renderCourses() {
    const search = (document.getElementById("courseSearchInput").value || "").toLowerCase();
    const dept = document.getElementById("courseDeptFilter").value;
    const grid = document.getElementById("coursesGrid");
    grid.innerHTML = "";

    const filtered = courses.filter(c => {
        const matchesSearch = c.name.toLowerCase().includes(search) || c.code.toLowerCase().includes(search);
        const matchesDept = !dept || c.department === dept;
        return matchesSearch && matchesDept;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding:30px; color:var(--text-muted);">No courses found.</p>`;
        return;
    }

    filtered.forEach(c => {
        const instructor = faculty.find(f => f.id === c.faculty_id);
        const instructorName = instructor ? instructor.name : "To be assigned";

        const card = document.createElement("div");
        card.className = "course-card";
        card.innerHTML = `
            <div>
                <div class="course-card-top">
                    <span class="course-code">${c.code}</span>
                    <span class="badge badge-info">${c.credits} Credits</span>
                </div>
                <h4 class="course-title">${c.name}</h4>
                <div class="course-meta">
                    <div><i class="fa-solid fa-building-columns"></i> ${c.department}</div>
                    <div><i class="fa-solid fa-user-tie"></i> ${instructorName}</div>
                    <div><i class="fa-regular fa-clock"></i> ${c.schedule}</div>
                </div>
            </div>
            <div class="course-footer">
                <button class="btn btn-outline btn-sm" onclick="editCourse(${c.id})"><i class="fa-solid fa-pen"></i> Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteCourse(${c.id})"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
        grid.appendChild(card);
    });

    // Populate course select in Attendance module
    const attCourseSelect = document.getElementById("attCourseSelect");
    if (attCourseSelect) {
        const currentVal = attCourseSelect.value;
        attCourseSelect.innerHTML = courses.map(c => `<option value="${c.id}">${c.code} - ${c.name}</option>`).join("");
        if (currentVal) attCourseSelect.value = currentVal;
    }
}

function openCourseModal(editId = null) {
    const modal = document.getElementById("courseModal");
    const form = document.getElementById("courseForm");
    form.reset();

    renderFaculty(); // ensure faculty select is updated

    if (editId) {
        const c = courses.find(item => item.id === editId);
        if (c) {
            document.getElementById("courseModalTitle").textContent = "Edit Course";
            document.getElementById("courseId").value = c.id;
            document.getElementById("courseName").value = c.name;
            document.getElementById("courseCode").value = c.code;
            document.getElementById("courseDept").value = c.department;
            document.getElementById("courseCredits").value = c.credits;
            document.getElementById("courseFaculty").value = c.faculty_id;
            document.getElementById("courseSchedule").value = c.schedule;
        }
    } else {
        document.getElementById("courseModalTitle").textContent = "Add New Course";
        document.getElementById("courseId").value = "";
    }

    modal.classList.add("active");
}

function handleCourseFormSubmit(e) {
    e.preventDefault();
    const id = document.getElementById("courseId").value;
    const name = document.getElementById("courseName").value.trim();
    const code = document.getElementById("courseCode").value.trim().toUpperCase();
    const department = document.getElementById("courseDept").value;
    const credits = parseInt(document.getElementById("courseCredits").value);
    const faculty_id = parseInt(document.getElementById("courseFaculty").value);
    const schedule = document.getElementById("courseSchedule").value.trim();

    if (id) {
        const index = courses.findIndex(c => c.id === parseInt(id));
        if (index !== -1) {
            courses[index] = { ...courses[index], name, code, department, credits, faculty_id, schedule };
            showToast(`Course ${code} updated`, "success");
        }
    } else {
        const newId = courses.length > 0 ? Math.max(...courses.map(c => c.id)) + 1 : 1;
        courses.push({ id: newId, name, code, department, credits, faculty_id, schedule });
        showToast(`Course ${code} created`, "success");
    }

    saveStore("courses", courses);
    closeModal("courseModal");
    renderCourses();
    renderDashboard();
}

function editCourse(id) {
    openCourseModal(id);
}

function deleteCourse(id) {
    const c = courses.find(item => item.id === id);
    if (!c) return;
    if (confirm(`Delete course "${c.name}"?`)) {
        courses = courses.filter(item => item.id !== id);
        saveStore("courses", courses);
        showToast(`Deleted course: ${c.code}`, "error");
        renderCourses();
        renderDashboard();
    }
}

// ==========================================
// 9. DEPARTMENTS MODULE
// ==========================================

function renderDepartments() {
    const grid = document.getElementById("departmentsGrid");
    grid.innerHTML = "";

    departments.forEach(dept => {
        const deptStudents = students.filter(s => s.department === dept.name).length;
        const deptFaculty = faculty.filter(f => f.department === dept.name).length;
        const deptCourses = courses.filter(c => c.department === dept.name).length;

        const card = document.createElement("div");
        card.className = "dept-card";
        card.innerHTML = `
            <div class="dept-card-header">
                <div class="dept-icon"><i class="fa-solid fa-graduation-cap"></i></div>
                <div>
                    <h3>${dept.name}</h3>
                    <small class="text-muted">Est. ${dept.established} · Head: <strong>${dept.head}</strong></small>
                </div>
            </div>
            <p class="dept-desc">${dept.description}</p>
            <div class="dept-stats-row">
                <span><i class="fa-solid fa-user-graduate"></i> <strong>${deptStudents}</strong> Students</span>
                <span><i class="fa-solid fa-chalkboard-user"></i> <strong>${deptFaculty}</strong> Faculty</span>
                <span><i class="fa-solid fa-book"></i> <strong>${deptCourses}</strong> Courses</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ==========================================
// 10. ATTENDANCE TRACKER MODULE
// ==========================================

function renderAttendance() {
    const courseId = parseInt(document.getElementById("attCourseSelect").value) || (courses[0] ? courses[0].id : null);
    const date = document.getElementById("attDateInput").value;
    const tbody = document.getElementById("attendanceTableBody");
    tbody.innerHTML = "";

    if (!courseId) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:20px;">Please create a course first.</td></tr>`;
        return;
    }

    const currentCourse = courses.find(c => c.id === courseId);
    // Filter students belonging to this department
    const eligibleStudents = students.filter(s => s.department === currentCourse.department && (s.status === "Active" || s.status === "Enrolled"));

    if (eligibleStudents.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:30px; color:var(--text-muted);">No enrolled students found in ${currentCourse.department}.</td></tr>`;
        document.getElementById("attendanceSummaryBadge").textContent = "No Students";
        return;
    }

    let presentCount = 0;

    eligibleStudents.forEach(st => {
        // Find existing record
        const record = attendance.find(a => a.student_id === st.id && a.course_id === courseId && a.date === date);
        const status = record ? record.status : "Present"; // default present
        if (status === "Present") presentCount++;

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>#${st.id}</td>
            <td><strong>${st.name}</strong></td>
            <td>${st.department}</td>
            <td>${st.year}</td>
            <td class="text-center">
                <div class="attendance-toggle-group">
                    <button class="attendance-btn ${status === 'Present' ? 'active present' : ''}" onclick="setAttendanceStatus(${st.id}, ${courseId}, '${date}', 'Present')">Present</button>
                    <button class="attendance-btn ${status === 'Late' ? 'active late' : ''}" onclick="setAttendanceStatus(${st.id}, ${courseId}, '${date}', 'Late')">Late</button>
                    <button class="attendance-btn ${status === 'Absent' ? 'active absent' : ''}" onclick="setAttendanceStatus(${st.id}, ${courseId}, '${date}', 'Absent')">Absent</button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });

    const percent = Math.round((presentCount / eligibleStudents.length) * 100);
    document.getElementById("attendanceSummaryBadge").textContent = `Session Attendance: ${percent}% (${presentCount}/${eligibleStudents.length} Present)`;
}

function setAttendanceStatus(studentId, courseId, date, status) {
    const index = attendance.findIndex(a => a.student_id === studentId && a.course_id === courseId && a.date === date);
    if (index !== -1) {
        attendance[index].status = status;
    } else {
        const newId = attendance.length > 0 ? Math.max(...attendance.map(a => a.id)) + 1 : 1;
        attendance.push({ id: newId, student_id: studentId, course_id: courseId, date: date, status: status });
    }
    saveStore("attendance", attendance);
    renderAttendance();
}

function markAllPresent() {
    const courseId = parseInt(document.getElementById("attCourseSelect").value);
    const date = document.getElementById("attDateInput").value;
    const currentCourse = courses.find(c => c.id === courseId);
    if (!currentCourse) return;

    const eligible = students.filter(s => s.department === currentCourse.department);
    eligible.forEach(st => {
        const index = attendance.findIndex(a => a.student_id === st.id && a.course_id === courseId && a.date === date);
        if (index !== -1) {
            attendance[index].status = "Present";
        } else {
            const newId = attendance.length > 0 ? Math.max(...attendance.map(a => a.id)) + 1 : 1;
            attendance.push({ id: newId, student_id: st.id, course_id: courseId, date: date, status: "Present" });
        }
    });

    saveStore("attendance", attendance);
    showToast("Marked all enrolled students as Present for this session.", "success");
    renderAttendance();
}

// ==========================================
// 11. TIMETABLE MODULE
// ==========================================

const TIMETABLE_SAMPLE = [
    { day: "Monday", slots: ["Data Structures (CS201)", "Web Dev (CS305)", "Break / Self Study", "Lab Session 1"] },
    { day: "Tuesday", slots: ["Database Systems (CS302)", "Algorithms Tutorial", "Machine Learning (CS401)", "Library Research"] },
    { day: "Wednesday", slots: ["Data Structures (CS201)", "Web Dev (CS305)", "Computer Networks", "Sports / Club Activity"] },
    { day: "Thursday", slots: ["Database Systems (CS302)", "Software Eng", "Machine Learning (CS401)", "Project Mentorship"] },
    { day: "Friday", slots: ["Open Elective Seminar", "Web Dev Practical Lab", "Digital Marketing (BA302)", "Faculty Office Hours"] },
    { day: "Saturday", slots: ["Industry Guest Lecture", "Hackathon Preparation", "Weekend Assessment", "Campus Recess"] }
];

function renderTimetable() {
    const tbody = document.getElementById("timetableBody");
    tbody.innerHTML = "";

    TIMETABLE_SAMPLE.forEach(row => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${row.day}</strong></td>
            ${row.slots.map(slot => `
                <td>
                    <div class="timetable-slot">
                        <strong>${slot}</strong>
                        <span>Main Block Rm 402</span>
                    </div>
                </td>
            `).join("")}
        `;
        tbody.appendChild(tr);
    });
}

// ==========================================
// 12. NOTICES & EVENTS MODULE
// ==========================================

function renderNotices() {
    const grid = document.getElementById("noticesFullGrid");
    grid.innerHTML = "";

    notices.forEach(n => {
        const card = document.createElement("div");
        card.className = "notice-card";
        card.innerHTML = `
            <div>
                <span class="notice-tag">${n.category}</span>
                <h4 style="font-size:1.05rem; font-weight:700; margin:6px 0 8px 0;">${n.title}</h4>
                <p style="font-size:0.86rem; color:var(--text-muted);">${n.content}</p>
            </div>
            <div style="margin-top:16px; font-size:0.75rem; color:var(--text-light); display:flex; justify-content:space-between; align-items:center;">
                <span><i class="fa-regular fa-calendar"></i> ${n.date}</span>
                <button class="btn btn-outline btn-sm" onclick="deleteNotice(${n.id})"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function openNoticeModal() {
    document.getElementById("noticeForm").reset();
    document.getElementById("noticeDate").value = new Date().toISOString().split("T")[0];
    document.getElementById("noticeModal").classList.add("active");
}

function handleNoticeFormSubmit(e) {
    e.preventDefault();
    const title = document.getElementById("noticeTitle").value.trim();
    const category = document.getElementById("noticeCategory").value;
    const date = document.getElementById("noticeDate").value;
    const content = document.getElementById("noticeContent").value.trim();

    const newId = notices.length > 0 ? Math.max(...notices.map(n => n.id)) + 1 : 1;
    notices.unshift({ id: newId, title, category, date, content });
    saveStore("notices", notices);

    closeModal("noticeModal");
    showToast("Announcement published successfully.", "success");
    renderNotices();
    renderDashboard();
}

function deleteNotice(id) {
    if (confirm("Remove this announcement?")) {
        notices = notices.filter(n => n.id !== id);
        saveStore("notices", notices);
        showToast("Announcement deleted.", "info");
        renderNotices();
        renderDashboard();
    }
}

// ==========================================
// 13. REPORTS & CSV EXPORT
// ==========================================

function renderReports() {
    const container = document.getElementById("auditSummaryContainer");
    const activeStudents = students.filter(s => s.status === "Active").length;
    const attendanceRecords = attendance.length;

    container.innerHTML = `
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:16px;">
            <div style="padding:14px; background:var(--bg-body); border-radius:8px;">
                <small class="text-muted">Enrollment Health</small>
                <h4>${Math.round((activeStudents / (students.length || 1)) * 100)}% Active Ratio</h4>
            </div>
            <div style="padding:14px; background:var(--bg-body); border-radius:8px;">
                <small class="text-muted">Faculty to Student Ratio</small>
                <h4>1 : ${Math.round(students.length / (faculty.length || 1))}</h4>
            </div>
            <div style="padding:14px; background:var(--bg-body); border-radius:8px;">
                <small class="text-muted">Recorded Attendance Sessions</small>
                <h4>${attendanceRecords} Entries</h4>
            </div>
            <div style="padding:14px; background:var(--bg-body); border-radius:8px;">
                <small class="text-muted">Accreditation Status</small>
                <h4 style="color:#10b981;"><i class="fa-solid fa-circle-check"></i> Compliant</h4>
            </div>
        </div>
    `;
}

function downloadCSV(filename, csvContent) {
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(`Downloaded: ${filename}`, "success");
}

function exportStudentsCSV() {
    let csv = "ID,Name,Email,Phone,Department,Year,Status,EnrollmentDate\n";
    students.forEach(s => {
        csv += `"${s.id}","${s.name}","${s.email}","${s.phone}","${s.department}","${s.year}","${s.status}","${s.enrollment_date}"\n`;
    });
    downloadCSV("CollegePro_Students_Roster.csv", csv);
}

function exportFacultyCSV() {
    let csv = "ID,Name,Email,Department,Qualification,JoinDate\n";
    faculty.forEach(f => {
        csv += `"${f.id}","${f.name}","${f.email}","${f.department}","${f.qualification}","${f.join_date}"\n`;
    });
    downloadCSV("CollegePro_Faculty_Roster.csv", csv);
}

function exportAttendanceCSV() {
    let csv = "ID,StudentID,CourseID,Date,Status\n";
    attendance.forEach(a => {
        csv += `"${a.id}","${a.student_id}","${a.course_id}","${a.date}","${a.status}"\n`;
    });
    downloadCSV("CollegePro_Attendance_Logs.csv", csv);
}

// ==========================================
// 14. MODAL UTILITIES
// ==========================================

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove("active");
}

window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
        e.target.classList.remove("active");
    }
});