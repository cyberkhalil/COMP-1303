# COMP 1303 · Operating Systems & Linux Practical

> **A complete 15-week university course site** for **COMP 1303 — Operating Systems & Linux Practical**, taught at the **University College of Applied Sciences (UCAS) — Bachelor of Cybersecurity Engineering** by **Mahmoud Khalil**.

---

## Table of Contents

- [Overview](#overview)
- [Quick Start](#quick-start)
- [Course Structure](#course-structure)
- [Repository Layout](#repository-layout)
- [File-by-File Reference](#file-by-file-reference)
- [Tech Stack](#tech-stack)
- [How to Contribute / Extend](#how-to-contribute--extend)
- [Assessment & Grading](#assessment--grading)
- [References](#references)
- [License](#license)

---

## Overview

This repository contains the full static site for a 15-week operating systems and Linux administration course. It is designed to work with **zero build step** — every page is plain HTML, CSS, and vanilla JavaScript, and can be published directly on GitHub Pages or served from any static host.

### What's inside

- **14 lecture pages** covering OS theory (Weeks 1–8) and Linux practical deep labs (Weeks 9–14).
- **A midterm exam page** for Week 8.
- **A final project brief** for the integrated services lab (Weeks 14–15).
- **14 narration scripts** (`.txt`) intended as instructor speaking notes for recorded video lessons.
- **A unified design system** in `style.css` and `lecture.css`, plus a shared `main.js` for navigation.

### Design philosophy

The course follows a **two-phase structure**:

| Phase | Weeks | Focus |
|-------|-------|-------|
| **Phase 1 — OS Theory** | 1 – 8 | Core operating systems concepts, each week paired with a **short Linux touch lab** to ground the theory in real commands. |
| **Phase 2 — Linux Practical** | 9 – 14 | Six intensive weeks of hands-on Linux: shell, permissions, systemd, DHCP, DNS, HTTP, MariaDB, and an integrated services capstone. |
| **Week 15** | 15 | Final project presentations & comprehensive course review. |

---

## Quick Start

No dependencies, no build step. Just clone and open.

### Option 1 — Open directly

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
xdg-open index.html     # Linux
open index.html         # macOS
start index.html        # Windows
```

### Option 2 — Serve locally (recommended)

Some browsers restrict fonts and cross-origin resources on `file://` URLs. Serve with any static server:

```bash
# Python 3 (usually pre-installed)
python3 -m http.server 8000

# Or Node
npx serve .

# Or PHP
php -S localhost:8000
```

Then open **http://localhost:8000**.

### Option 3 — Publish on GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, select `Deploy from a branch` → `main` → `/ (root)`.
4. Save. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

---

## Course Structure

### Phase 1 — Operating Systems Theory (Weeks 1–8)

| Week | Topic | Lecture |
|:----:|-------|:-------:|
| **1** | Introduction to Operating Systems | [`lecture1.html`](lecture1.html) |
| **2** | Processes & Process Management | [`lecture2.html`](lecture2.html) |
| **3** | Threads & Multithreading | [`lecture3.html`](lecture3.html) |
| **4** | Synchronization & Concurrency | [`lecture4.html`](lecture4.html) |
| **5** | CPU Scheduling | [`lecture5.html`](lecture5.html) |
| **6** | Deadlocks | [`lecture6.html`](lecture6.html) |
| **7** | Memory Management & Virtual Memory | [`lecture7.html`](lecture7.html) |
| **8** | File Systems, I/O & Midterm Exam | [`lecture8.html`](lecture8.html) · [`mid_exam.html`](mid_exam.html) |

### Phase 2 — Linux Practical (Weeks 9–14)

| Week | Topic | Lecture |
|:----:|-------|:-------:|
| **9**  | Linux Shell, Users, Permissions & systemd | [`lecture9.html`](lecture9.html) |
| **10** | Packages, Networking Basics & DHCP | [`lecture10.html`](lecture10.html) |
| **11** | DNS — Domain Name System | [`lecture11.html`](lecture11.html) |
| **12** | HTTP — Web Service with Nginx | [`lecture12.html`](lecture12.html) |
| **13** | MariaDB — Database Service | [`lecture13.html`](lecture13.html) |
| **14** | Integrated Services Lab (DNS + HTTP + MariaDB) | [`lecture14.html`](lecture14.html) · [`project.html`](project.html) |

### Week 15 — Final Project

Presentations, demo day, and comprehensive review. Deliverables are defined in [`project.html`](project.html).

---

## Repository Layout

```
.
├── index.html              # Course home page
├── mid_exam.html           # Week 8 midterm exam brief
├── project.html            # Week 14 integrated-services project brief
├── lecture1.html  …  lecture14.html
├── style.css               # Home page design system
├── lecture.css             # Shared lecture / exam / project page styles
├── main.js                 # Shared JavaScript (year, quick-nav, smooth scroll)
├── script1.txt  …  script14.txt
└── README.md
```

---

## File-by-File Reference

### Core pages

| File | Purpose |
|------|---------|
| `index.html` | Course home. Hero header, quick stats, phase overview, week cards linking into each lecture, assessment rubric, official textbook list, footer. |
| `mid_exam.html` | Week 8 midterm exam specification. Includes sampling questions across four sections (Multiple choice, Short answer, Numerical, Diagrams) plus a formula sheet and preparation tips. |
| `project.html` | Week 14 project brief. Target architecture, pre-flight checklist, deliverable specs in three parts, grading rubric (out of 100), and submission requirements. This is the feed-in document for the Week 15 final project. |

### Lecture pages — Phase 1 (OS Theory)

| File | Summary |
|------|---------|
| `lecture1.html`  | Definition of an OS, user mode vs kernel mode, syscalls / interrupts / traps, kernel architectures, VM setup lab. |
| `lecture2.html`  | Program vs process, address space layout, five-state model, PCB, context switching, `fork`/`exec`/`wait`, IPC mechanisms. |
| `lecture3.html`  | Thread vs process, shared/private state, threading models (1:1, N:1, M:N), race conditions, pthread API, `ps -eLf` observation. |
| `lecture4.html`  | Locks, mutexes, semaphores, condition variables, producer–consumer, reader–writer, monitors, Helgrind debugging. |
| `lecture5.html`  | Metrics (turnaround, waiting, response), FCFS / SJF / SRTF, Round Robin, Priority, MLFQ, Linux CFS, `nice` and `chrt`. |
| `lecture6.html`  | Coffman's four conditions, resource allocation graphs, prevention, Banker's Algorithm, detection & recovery, Dining Philosophers. |
| `lecture7.html`  | Virtual memory, segmentation vs paging, TLB, multi-level page tables, demand paging, FIFO/LRU/Optimal/Clock replacement, thrashing. |
| `lecture8.html`  | Files & directories, inodes vs FAT, allocation methods, journaling, RAID, disk scheduling — plus midterm pointers. |

### Lecture pages — Phase 2 (Linux Practical)

| File | Summary |
|------|---------|
| `lecture9.html`  | Shell & FHS, pipes & redirection, text tools, users & groups, permissions, special bits (setuid/setgid/sticky), `sudo`, systemd units, `journalctl`. |
| `lecture10.html` | Package management (`apt` / `dnf`), IP addressing, `ip` / `ss` / `ping` / `traceroute`, Netplan, DHCP fundamentals and the DORA handshake, dnsmasq lab. |
| `lecture11.html` | DNS hierarchy, recursion vs iteration, resource records, zones & zone files, reverse zones (PTR), caching & TTL, `dig` / `nslookup` / `host`, BIND9 deployment. |
| `lecture12.html` | HTTP methods, status codes, headers, connections & HTTP versions, Nginx installation, virtual hosts, reverse proxy & caching lab. |
| `lecture13.html` | Relational model, SQL basics, installing / securing MariaDB, users & privileges, connecting a web app, `mysqldump` backup & restore, full-stack lab. |
| `lecture14.html` | Full-stack architecture, planning, three-layer integration, end-to-end testing, cross-layer diagnostics, integrated build & verification lab. |

### Stylesheets

| File | Scope |
|------|-------|
| `style.css` | Course home page (`index.html`). Hero, stats, phase legend, week cards, assessment grid, textbook grid, responsive breakpoints, print styles. |
| `lecture.css` | Shared across all `lecture*.html`, `mid_exam.html`, and `project.html`. Info / warning / success notes, comparison tables, SVG containers, code blocks, question boxes, quick-nav, responsive breakpoints, print styles. |

### JavaScript

| File | Scope |
|------|-------|
| `main.js` | Shared script used on all lecture / exam / project pages. Handles: current year in footer, quick-nav active-link tracking (throttled with `requestAnimationFrame`), smooth scrolling that respects `prefers-reduced-motion`, and hash-anchor correction on page load. |

### Narration scripts

| File | Week |
|------|:----:|
| `script1.txt`  | Week 1 — Introduction to Operating Systems |
| `script2.txt`  | Week 2 — Processes |
| `script3.txt`  | Week 3 — Threads |
| `script4.txt`  | Week 4 — Synchronization |
| `script5.txt`  | Week 5 — CPU Scheduling |
| `script6.txt`  | Week 6 — Deadlocks |
| `script7.txt`  | Week 7 — Memory Management |
| `script8.txt`  | Week 8 — File Systems + Midterm brief |
| `script9.txt`  | Week 9 — Shell, Users, Permissions, systemd |
| `script10.txt` | Week 10 — Packages, Networking, DHCP |
| `script11.txt` | Week 11 — DNS |
| `script12.txt` | Week 12 — HTTP / Nginx |
| `script13.txt` | Week 13 — MariaDB |
| `script14.txt` | Week 14 — Integrated Services Lab |

Each script is a **speaking-notes style** document with:

- `[SLIDE n]` markers for visual cues
- `SPEAK:` prefixed blocks with the exact words to read aloud
- `[PAUSE]` / `[TRANSITION]` stage directions
- Time budget annotations per video

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| **Structure** | HTML5 (semantic, accessible) |
| **Styling** | Vanilla CSS with custom properties and modern layout (Grid / Flexbox) |
| **Behaviour** | Vanilla JavaScript (ES2015+, no framework, no bundler) |
| **Icons** | [Font Awesome 6.4](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css) (CDN) |
| **Fonts** | [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts (CDN) |
| **Diagrams** | Inline SVG — no external chart libraries |
| **Hosting** | Any static host (GitHub Pages, Netlify, Cloudflare Pages, S3, …) |

### Key features

- **Zero-dependency runtime** — only external references are Font Awesome and Google Fonts.
- **Mobile-first responsive design** — dedicated breakpoints at `780px` and `560px` for tablet and phone.
- **Print-friendly** — every page has a `@media print` override that inverts the dark theme and hides interactive chrome.
- **Dark theme by default** — designed as a code-heavy interface for extended reading sessions.
- **Accessibility-conscious** — respects `prefers-reduced-motion`, uses semantic headings, and provides high-contrast accent colours on dark backgrounds.
- **Inline SVG diagrams** — every architectural figure (threading models, page tables, RAID levels, DNS hierarchy, DORA handshake, three-tier stack, …) is hand-authored SVG, so it scales cleanly and can be themed via CSS variables.

---

## How to Contribute / Extend

### Adding a new lecture

1. Copy an existing `lectureN.html` as a template.
2. Update the `<title>`, `<h1>`, quick-nav anchors, and body content.
3. In `index.html`, add a new `.week-card` for the week with a link to the new lecture page.
4. If creating a new narration script, follow the format of `scriptN.txt`.

### Editing the colour palette

All theme colours live in the `:root` block at the top of each stylesheet:

```css
:root {
    --bg-dark:   #0b1120;
    --primary:   #3b82f6;
    --success:   #10b981;
    --violet:    #8b5cf6;
    --pink:      #ec4899;
    --warn:      #f59e0b;
    --accent:    #7dd3fc;
    /* … */
}
```

Changing a single token updates every page that uses it.

### Local preview tips

- Open the **browser devtools** at 375×667 to test the phone layout.
- Use **Ctrl + P → Save as PDF** to preview the print sheet.
- The **quick-nav** on lecture pages auto-highlights the section you're reading; scroll a long page to see it working.

---

## Assessment & Grading

The assessment model used in `index.html` and `mid_exam.html`:

| Component | Weight | Notes |
|-----------|:------:|-------|
| **Labs & Assignments** | 25% | Weekly touch labs (Phase 1) + deep labs (Phase 2) |
| **Quizzes** | 10% | Short in-class or online quizzes |
| **Midterm Exam** | 20% | Covers Weeks 1–7 theory |
| **Final Project** | 20% | Integrated Linux services deployment (Weeks 14–15) |
| **Final Exam** | 25% | Comprehensive — theory + applied |

The midterm is **90 minutes**, permits **one handwritten A4 sheet** (both sides), and takes the form of a mixed exam: multiple choice, short answer, numerical problems, and diagram labelling.

---

## References

The course is based on the following primary sources, which are listed on the home page:

- **Silberschatz, Galvin, Gagne** — *Operating System Concepts* (10th/11th Ed.) — main theory textbook.
- **Arpaci-Dusseau** — *Operating Systems: Three Easy Pieces (OSTEP)* — free, modern supplement.
- **Brian Ward** — *How Linux Works* (3rd Ed.)
- **William Shotts** — *The Linux Command Line* (2nd Ed.)
- **Nemeth et al.** — *UNIX and Linux System Administration Handbook* (5th Ed.)
- **Cricket Liu & Paul Albitz** — *DNS and BIND* (5th Ed.)
- **Gourley & Totty** — *HTTP: The Definitive Guide*
- **MariaDB official documentation**
- **BIND 9 Administrator Reference Manual**
- **Nginx official documentation**
- **RFC 1034 / 1035** (DNS), **RFC 2131** (DHCP), **RFC 7230–7235** (HTTP/1.1)

---

## License

© Cyber Khalil — All Rights Reserved.

Course content, lecture notes, narration scripts, and diagrams are the intellectual property of the instructor and may not be redistributed or republished without permission. The site's **code** (HTML / CSS / JS) is provided as-is for educational use within the course.

---

## Contact

**Instructor:** Mahmoud Khalil
**Email:** `makhalil@ucas.edu.ps`
**Institution:** University College of Applied Sciences — Cybersecurity Engineering Department
**Course Code:** COMP 1303 · 15 Weeks · 3 Academic Hours / Week

---

<p align="center">
  <sub>Built with plain HTML, CSS, and JavaScript · Deployed on GitHub Pages</sub>
</p>