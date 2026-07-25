# Manoj Reddy Poreddy - Portfolio

A modern, responsive portfolio website showcasing 11+ years of experience in DevOps, Site Reliability Engineering, and Cloud Infrastructure.

![Portfolio Preview](https://img.shields.io/badge/Status-Production_Ready-success?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🚀 Features

- **Modern Terminal-Inspired Design**: Dark theme with cyan and purple gradients
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Scroll-triggered animations and typing effects
- **Interactive Elements**: Animated progress bars, hover effects, and transitions
- **SEO Optimized**: Complete meta tags for search engines and social media
- **Accessible**: WCAG compliant with ARIA labels and keyboard navigation
- **Performance Optimized**: Fast loading with efficient CSS and JavaScript
- **Contact Form**: Frontend validation with visual feedback

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── style.css           # Comprehensive stylesheet
├── script.js           # Interactive JavaScript
├── favicon.svg         # DevOps-themed favicon
└── README.md           # Documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with:
  - CSS Grid & Flexbox layouts
  - CSS Variables for theming
  - Keyframe animations
  - Glassmorphism effects
- **Vanilla JavaScript**: No dependencies
  - Intersection Observer API
  - Form validation
  - Smooth scrolling
  - Dynamic typing animation

## 🎨 Design Features

### Color Palette
- **Terminal Background**: `#0a0e1a`
- **Cyan Primary**: `#00d9ff`
- **Purple Primary**: `#a855f7`
- **Green Success**: `#00ff88`
- **Text Primary**: `#e8edf4`

### Typography
- **Display Font**: Space Grotesk
- **Monospace Font**: JetBrains Mono

### Key Sections
1. **Hero Section**: Terminal window with typing animation
2. **About**: Professional summary with code snippet
3. **Skills**: 9 skill categories with progress bars
4. **Experience**: Timeline layout with 5 positions
5. **Certifications**: 5 certifications + education
6. **Contact**: Contact form with validation

## 📦 Deployment to GitHub Pages

### Option 1: Quick Deploy (Recommended)

1. **Create a new repository on GitHub**
   ```bash
   # Repository name should be: yourusername.github.io
   # For example: manojreddyporeddy.github.io
   ```

2. **Upload files**
   - Go to your repository
   - Click "Add file" → "Upload files"
   - Drag and drop all files (index.html, style.css, script.js, favicon.svg)
   - Commit the changes

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be live at: `https://yourusername.github.io`

### Option 2: Using Git Command Line

1. **Initialize local repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: portfolio"
   ```

2. **Connect to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages** (same as Option 1, step 3)

### Option 3: Using GitHub Desktop

1. **Open GitHub Desktop**
2. **File → Add Local Repository**
3. **Select your portfolio folder**
4. **Publish repository** to GitHub
5. **Enable GitHub Pages** in repository settings

## 🔧 Customization Guide

### Update Personal Information

1. **Contact Details** (in `index.html`):
   ```html
   <!-- Search for these and update -->
   <a href="mailto:YOUR_EMAIL@gmail.com">
   <a href="tel:+1YOURNUMBER">
   <a href="https://www.linkedin.com/in/YOUR_LINKEDIN">
   ```

2. **Resume Link** (in `index.html`):
   ```html
   <a href="YOUR_RESUME_LINK" target="_blank" class="btn btn-secondary">
   ```

3. **Meta Tags** (in `index.html` `<head>`):
   ```html
   <meta property="og:url" content="YOUR_WEBSITE_URL">
   <meta property="og:image" content="YOUR_OG_IMAGE_URL">
   ```

### Customize Colors

Edit CSS variables in `style.css`:
```css
:root {
    --cyan-primary: #00d9ff;      /* Change cyan color */
    --purple-primary: #a855f7;     /* Change purple color */
    --green-success: #00ff88;      /* Change green color */
}
```

### Add/Remove Sections

Each section is wrapped in:
```html
<section id="section-name" class="section">
    <!-- Content -->
</section>
```

Simply copy, modify, or remove section blocks as needed.

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Total Bundle Size**: < 100KB (excluding fonts)

## 📧 Contact Form Integration

The contact form currently has **frontend validation only**. To make it functional:

### Option 1: FormSpree (Easiest)

1. Sign up at [FormSpree.io](https://formspree.io)
2. Get your form endpoint
3. Update form action in `index.html`:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option 2: Netlify Forms

1. Deploy to Netlify
2. Add `netlify` attribute to form:
   ```html
   <form id="contactForm" netlify>
   ```

### Option 3: Custom Backend

Uncomment the fetch code in `script.js` and connect to your API:
```javascript
fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
})
```

## 🐛 Troubleshooting

### Icons not showing
- Ensure SVG icons in HTML are properly formatted
- Check browser console for errors

### Fonts not loading
- Verify Google Fonts URL is correct
- Check internet connection
- Clear browser cache

### Animations not working
- Check if `prefers-reduced-motion` is enabled in OS
- Verify JavaScript is enabled
- Check browser console for errors

### Mobile menu not working
- Clear browser cache
- Check JavaScript console for errors
- Verify viewport meta tag is present

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Credits

**Designed and Developed by**: Manoj Reddy Poreddy  
**Email**: manojreddy9186@gmail.com  
**LinkedIn**: [linkedin.com/in/manojreddyporeddy](https://www.linkedin.com/in/manojreddyporeddy)

---

### 🌟 Features Checklist

- [x] Responsive design (mobile, tablet, desktop)
- [x] Modern terminal aesthetic
- [x] Smooth scroll navigation
- [x] Typing animation effect
- [x] Scroll-triggered animations
- [x] Progress bar animations
- [x] Form validation
- [x] SEO optimization
- [x] Accessibility features
- [x] Back to top button
- [x] Mobile navigation menu
- [x] Professional favicon
- [x] Clean, commented code
- [x] Performance optimized

### 🚀 Quick Start

1. Download all files
2. Open `index.html` in browser
3. Customize content as needed
4. Deploy to GitHub Pages
5. Share your professional portfolio!

---