# 🎓 CollegePro - College Management System

[![Task ID](https://img.shields.io/badge/Task%20ID-WD--COL--001-1A56DB.svg)](https://www.freeinternships.in)
[![Student Code](https://img.shields.io/badge/Student%20Code-DAS--COL--001-green.svg)](https://www.freeinternships.in)
[![Internship](https://img.shields.io/badge/Internship-Data%20Alcott%20Systems-orange.svg)](https://www.dataalcott.com)
[![Status](https://img.shields.io/badge/Status-Completed-success.svg)](#)

A modern, responsive, and feature-rich frontend College Management System built with semantic **HTML5**, **CSS3 (Glassmorphism & Custom Animations)**, and vanilla **JavaScript (ES6+)**. This application provides administrative tools for student enrollments, faculty directory management, course allocation, real-time daily attendance tracking, class timetable scheduling, campus announcements, and one-click data audits with CSV export.

---

## 📌 Submission & Internship Metadata

- **Company:** [Data Alcott Systems](https://www.dataalcott.com)
- **Domain:** College Management / Education & Administration
- **Internship Portal:** [freeinternships.in](https://www.freeinternships.in)
- **Task Link / Blog Submission:** [https://www.freeinternships.in/blog/](https://www.freeinternships.in/blog/)
- **Task ID:** `WD-COL-001`
- **Student Code:** `DAS-COL-001`
- **GitHub Repository:** `https://github.com/your-username/college-pro-system`
- **Live Demo Website:** `https://your-username.github.io/college-pro-system/`
- **YouTube Walkthrough:** `https://youtu.be/your-video-link`

---

## 🚀 Live Demo & Preview

- **Live Application:** [Click Here to View CollegePro Live](https://your-username.github.io/college-pro-system/)
- **Video Walkthrough:** [Watch Feature Demonstration on YouTube](https://youtu.be/your-video-link)

---

## 📋 Features Overview

### 🏛️ Core Modules
1. **Interactive Dashboard:**
   - Real-time statistics counters: Total Students, Active Count, Faculty Strength, Course Offerings, and Department Counts.
   - Dynamic department enrollment distribution progress bars.
   - Recent announcements and quick administrative actions.
2. **Student Directory & Admissions (Full CRUD):**
   - Enroll new students, view roster, update details, or delete records.
   - Multi-facet live search by student name, email, or student ID.
   - Dynamic filters by Department and Enrollment Status (Active, Enrolled, Graduated, On Leave, Dropped).
3. **Faculty & Staff Directory (Full CRUD):**
   - Appoint new faculty members with qualifications, assigned departments, and joining history.
   - Real-time search and department filtering.
4. **Academic Course Catalog:**
   - Create, edit, and assign professors to courses with custom credits and schedules.
   - Department-level course sorting and filtering.
5. **Departmental Hub:**
   - Pre-configured departments: Computer Science, Electronics & Communication, Mechanical Engineering, Civil Engineering, Business Administration, and Arts & Humanities.
   - Shows Department Head (HOD), year established, and live student/faculty counts.
6. **Daily Attendance Tracking:**
   - Filter roster by course and session date.
   - Toggle individual student attendance: **Present**, **Late**, or **Absent**.
   - Bulk "Mark All Present" action with instant calculation of attendance percentages.
7. **Timetable Matrix:**
   - Weekly schedule breakdown from Monday to Saturday across morning and afternoon lecture slots.
   - Filterable by department and academic year.
   - Print-ready format.
8. **Reports & Audit Center:**
   - Visual executive summary metrics.
   - Instant CSV export for **Students**, **Faculty**, and **Attendance Logs**.
   - Built-in print feature for institutional records.

### ⭐ Bonus & UI Enhancements
- **Glassmorphism Design:** Modern translucent cards with backdrop blur, subtle borders, and background ambient glow orbs.
- **Micro-Interactions & Hover Animations:** Interactive 3D card lift effects, icon rotations, button glows, and smooth transitions.
- **Hero Banner:** Eye-catching welcoming dashboard hero section with quick enrollment CTAs.
- **Dark / Light Theme Toggle:** Instant theme switcher saved across browser sessions via `localStorage`.
- **Role Simulation:** Instant switcher between **Administrator**, **Faculty Member**, and **Student** views.
- **Toast Notifications:** Clean feedback alerts for data actions (add, edit, delete, export).
- **Persistent LocalStorage:** Changes remain intact on page refreshes without needing an external database.

---

## 🎨 Design Guidelines & Color Palette

| Element | Color Code | Preview |
| :--- | :--- | :--- |
| **Primary Blue** | `#1A56DB` | ![#1A56DB](https://via.placeholder.com/15/1A56DB/000000?text=+) `#1A56DB` |
| **Light Blue Accent** | `#DBEAFE` | ![#DBEAFE](https://via.placeholder.com/15/DBEAFE/000000?text=+) `#DBEAFE` |
| **Background (Light)** | `#F1F5F9` | ![#F1F5F9](https://via.placeholder.com/15/F1F5F9/000000?text=+) `#F1F5F9` |
| **Glass Surface** | `rgba(255, 255, 255, 0.65)` | Translucent Glass |
| **Typography** | `'Plus Jakarta Sans', sans-serif` | Clean, academic & modern |

---

## 📂 Project Structure

```plaintext
college-pro-system/
│
├── index.html        # Semantic HTML5 layout, modals, and templates
├── style.css         # Glassmorphism styling, ambient orbs, animations & themes
├── script.js         # Vanilla JS application state, CRUD logic & LocalStorage
└── README.md         # Comprehensive project documentation and internship report