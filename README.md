# Profile Card Component

A fully accessible, responsive profile card built with semantic HTML, modern CSS, and vanilla JavaScript for the HNG Internship frontend track.

## Links 
- GitHub Repo: https://github.com/JosephOluOlofinte/hng-profile-card

- Live URL: https://josepholuolofinte.github.io/hng-profile-card/

---

## Features

- ✅ Semantic HTML5 elements
- ✅ Fully accessible (WCAG compliant)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Keyboard navigation support
- ✅ Real-time clock display (milliseconds)
- ✅ `data-testid` attributes for automated testing
- ✅ Modern, clean UI with smooth animations

---

## Folder Structure

```
accessible-profile-card/
- ├── assets/        
--    ├── fonts/          
---        ├──  Inter-VariableFont_slnt,wght.ttf         
---        └──  OFL.txt         
--    └── images/         
--`         └── avatar-joseph-olu.png   
- ├── css/
--     ├── fonts.css       
--     └── style.css        
- ├── index.html       
- └── README.md        
```

---

## Getting Started

### Installation

1. Clone or download this repository
2. Open `index.html` in your browser

```bash
# Simply open the file
open index.html

# Or use a local server
python -m http.server 8000
# Then visit http://localhost:8000
```

---

## Accessibility Features

- **Semantic HTML**: Uses proper HTML5 elements (`<article>`, `<nav>`, `<section>`, etc.)
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Focus Indicators**: Clear visual focus states for keyboard users
- **Alt Text**: Descriptive alt text for images
- **ARIA Labels**: Proper labeling where needed
- **External Links**: Safe external links with `rel="noopener noreferrer"`
- **Reduced Motion**: Respects `prefers-reduced-motion` setting

--- 

### Keyboard Navigation

- `Tab` - Move to next interactive element
- `Shift + Tab` - Move to previous interactive element
- `Enter` - Activate links
- All social links are fully keyboard accessible

---

## Responsive Design

### Breakpoints

- **Mobile** (< 768px): Stacked vertical layout
- **Tablet** (768px - 1023px): Horizontal layout with 2-column grids
- **Desktop** (≥ 1024px): Full-width layout with enhanced spacing

--- 

### Layout Behavior

- Avatar and name stack vertically on mobile
- Content sections adapt to screen size
- Social links wrap appropriately
- Hobbies/dislikes display in responsive grid

---

## Technical Details

### Time Display

The current time is displayed in milliseconds and updates every second:

```javascript
function updateTime() {
    const timeElement = document.getElementById('currentTime');
    if (timeElement) {
        timeElement.textContent = Date.now();
    }
}

setInterval(updateTime, 1000);
```

---

## Testing

All elements include the required `data-testid` attributes for automated testing:

```javascript
// Example test queries
document.querySelector('[data-testid="test-profile-card"]')
document.querySelector('[data-testid="test-user-name"]')
document.querySelector('[data-testid="test-user-time"]')
// etc.
```
