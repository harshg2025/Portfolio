# 📋 Portfolio Customization Guide
> Complete instructions to replace "Neha Pawar's" info with **your own** information

---

## 🗂️ Project Structure Overview

```
Portfolio-master/
├── public/
│   ├── index.html          ← Browser tab title & meta description
│   └── resume.pdf          ← Your downloadable resume
└── src/
    ├── assets/
    │   ├── heroImage.jpg           ← Your profile photo (Home section)
    │   ├── portfolio/
    │   │   ├── devly.png           ← Project 1 screenshot
    │   │   ├── linkup.png          ← Project 2 screenshot
    │   │   └── buyhive.png         ← Project 3 screenshot
    │   └── (skill icons: html, css, react, etc.)
    └── components/
        ├── NavBar.jsx      ← Logo name (top-left)
        ├── Home.jsx        ← Hero: Your name & intro tagline
        ├── About.jsx       ← About me paragraph
        ├── Experience.jsx  ← Skills/technologies
        ├── Portfolio.jsx   ← Projects (screenshots + links)
        ├── Contact.jsx     ← Contact form (getform.io endpoint)
        └── SocialLink.jsx  ← LinkedIn, GitHub, Email, Resume links
```

---

## 1️⃣ Browser Tab Title & Meta Description
**File:** `public/index.html` — Line 10 & 27

```diff
- <title>Neha's Portfolio</title>
+ <title>Your Name's Portfolio</title>

- content="Web site created using create-react-app"
+ content="Portfolio of [Your Name] – [Your Role e.g. Full Stack Developer]"
```

---

## 2️⃣ Your Name in the Navigation Bar (Logo)
**File:** `src/components/NavBar.jsx` — Line 36

```diff
- <h1 className='text-5xl font-signature ml-2'>Neha</h1>
+ <h1 className='text-5xl font-signature ml-2'>YourName</h1>
```
> Change `Neha` to your **first name** (or short name). This appears as the logo on the top-left of the navbar.

---

## 3️⃣ Home / Hero Section
**File:** `src/components/Home.jsx` — Lines 13–17

### 3a. Your Full Name (Big Heading)
```diff
- I'm Neha Pawar
+ I'm [Your Full Name]
```

### 3b. Your Short Bio / Tagline (Paragraph below the name)
```diff
- A fresher with a strong passion for coding and a drive to continuously learn and grow...
+ [Write your own 2-3 sentence introduction here. Example:]
+ A final-year Computer Science student passionate about building full-stack web applications...
```

### 3c. Your Profile Photo
- Replace the file: `src/assets/heroImage.jpg`
- **Keep the same filename** `heroImage.jpg` — just replace the image file with your own photo
- Recommended size: **400×500px or similar portrait/square** format

---

## 4️⃣ About Section
**File:** `src/components/About.jsx` — Lines 12–20

Replace the two paragraphs with your own bio:

```diff
- Hello! I'm Neha Pawar, a passionate and eager developer...
- I am proficient in C++, HTML, CSS, React, MySQL...
+ Hello! I'm [Your Name], [your description]...
+ I am proficient in [your skills list]...

- I'm always open to new challenges...
+ [Your closing paragraph / call to action]
```

**Tips for writing your About section:**
- Paragraph 1: Who you are, your background, what drives you
- Paragraph 2: Your key skills / tech stack
- Paragraph 3 (already there): Open to opportunities / contact invitation

---

## 5️⃣ Experience / Skills Section
**File:** `src/components/Experience.jsx` — Lines 14–71

Each skill card looks like this:
```js
{
    id: 1,
    src: htmlimg,        // The skill logo image
    title: 'HTML',       // Displayed name
    style: 'shadow-orange-500',  // Glow color on hover
},
```

### To ADD a new skill:
1. Save your skill's logo image into `src/assets/` (e.g., `python.png`)
2. Import it at the top of `Experience.jsx`:
   ```js
   import python from '../assets/python.png'
   ```
3. Add a new entry in the `techs` array:
   ```js
   {
       id: 10,
       src: python,
       title: 'Python',
       style: 'shadow-blue-400',
   },
   ```

### To REMOVE a skill:
Simply delete its `{ id, src, title, style }` object from the `techs` array.

### Available shadow colors you can use:
`shadow-red-500` | `shadow-yellow-400` | `shadow-green-400` | `shadow-blue-500` | `shadow-purple-500` | `shadow-pink-500` | `shadow-orange-500` | `shadow-cyan-400`

---

## 6️⃣ Portfolio / Projects Section
**File:** `src/components/Portfolio.jsx` — Lines 8–27

Each project card looks like this:
```js
{
    id: 1,
    src: devly,                                    // Project screenshot image
    codeLink: 'https://github.com/NehaPawar12/Devly',  // GitHub repo URL
    demoLink: 'https://devly-4rju.onrender.com',       // Live demo URL
},
```

### Steps to update your projects:

**Step 1 — Add your project screenshot:**
- Take a screenshot of your project
- Save it in `src/assets/portfolio/` (e.g., `myproject.png`)

**Step 2 — Import it at the top of `Portfolio.jsx`:**
```diff
- import devly from '../assets/portfolio/devly.png';
+ import myproject from '../assets/portfolio/myproject.png';
```

**Step 3 — Update the project entry:**
```diff
- {
-     id: 1,
-     src: devly,
-     codeLink: 'https://github.com/NehaPawar12/Devly',
-     demoLink: 'https://devly-4rju.onrender.com',
- },
+ {
+     id: 1,
+     src: myproject,
+     codeLink: 'https://github.com/YourUsername/YourRepo',
+     demoLink: 'https://your-live-demo-url.com',
+ },
```

> You can add up to **3 projects** (or more — the grid will auto-adjust).  
> If you don't have a live demo, you can set `demoLink` to your GitHub repo link as well.

---

## 7️⃣ Contact Form (getform.io endpoint)
**File:** `src/components/Contact.jsx` — Line 12

The form currently submits to **Neha's getform.io** endpoint:
```diff
- <form action="https://getform.io/f/azyyendb" method='POST' ...>
+ <form action="https://getform.io/f/YOUR_FORM_ID" method='POST' ...>
```

### How to get your own form endpoint:
1. Go to [https://getform.io](https://getform.io) and create a **free account**
2. Create a new form — you'll get a unique URL like `https://getform.io/f/xxxxxxxx`
3. Replace `azyyendb` with your own form ID

> ⚠️ **Important:** If you don't change this, all contact messages will go to Neha's email, not yours!

---

## 8️⃣ Social Links (LinkedIn, GitHub, Email, Resume)
**File:** `src/components/SocialLink.jsx` — Lines 7–46

These are the sliding buttons on the **left side** of the screen.

### LinkedIn
```diff
- href: 'https://www.linkedin.com/in/neha-pawar-np1223/',
+ href: 'https://www.linkedin.com/in/your-linkedin-username/',
```

### GitHub
```diff
- href: 'https://github.com/NehaPawar12',
+ href: 'https://github.com/YourGitHubUsername',
```

### Email
```diff
- href: 'mailto:nehapawar2320@gmail.com',
+ href: 'mailto:youremail@gmail.com',
```

### Resume (Downloadable PDF)
- Replace the file: `public/resume.pdf`
- **Keep the exact same filename** `resume.pdf` — just replace the file with your own PDF resume
- The download link (`href: '/resume.pdf'`) will automatically use your new file

---

## 9️⃣ Quick Checklist ✅

| # | What to Change | File | Status |
|---|---------------|------|--------|
| 1 | Browser tab title | `public/index.html` | ⬜ |
| 2 | Meta description | `public/index.html` | ⬜ |
| 3 | Nav logo name | `src/components/NavBar.jsx` | ⬜ |
| 4 | Hero: Full name | `src/components/Home.jsx` | ⬜ |
| 5 | Hero: Bio/tagline | `src/components/Home.jsx` | ⬜ |
| 6 | Profile photo | `src/assets/heroImage.jpg` | ⬜ |
| 7 | About paragraph | `src/components/About.jsx` | ⬜ |
| 8 | Skills list | `src/components/Experience.jsx` | ⬜ |
| 9 | Projects (screenshots + links) | `src/components/Portfolio.jsx` | ⬜ |
| 10 | Contact form endpoint | `src/components/Contact.jsx` | ⬜ |
| 11 | LinkedIn URL | `src/components/SocialLink.jsx` | ⬜ |
| 12 | GitHub URL | `src/components/SocialLink.jsx` | ⬜ |
| 13 | Email address | `src/components/SocialLink.jsx` | ⬜ |
| 14 | Resume PDF | `public/resume.pdf` | ⬜ |

---

## 🚀 How to Run the Portfolio Locally

```powershell
# Navigate to project folder
cd "c:\Users\91842\OneDrive\Desktop\Portfolio-master H\Portfolio-master"

# Install dependencies (only first time)
npm install

# Start development server
npm start
```
Then open your browser at **http://localhost:3000**

---

> 💡 **Tip:** Make changes one section at a time and check `http://localhost:3000` in your browser after each change to see how it looks!
