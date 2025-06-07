# Layiga Adventure Park Website

A premium, immersive website for Layiga Salıncak & Zipline Adventure Park in Uzungöl, Turkey.

## ✨ Features

- **Multi-language Support**: Turkish, English, Arabic
- **Dark/Light Theme Toggle**: Premium sliding switch design
- **Auto-playing Videos**: Promotional videos optimized for web
- **Interactive Gallery**: Photo gallery with hover effects
- **WhatsApp Integration**: Direct booking through WhatsApp
- **Google Maps Integration**: High-zoom embedded map with directions
- **Responsive Design**: Mobile-first approach with premium animations
- **Theme-aware Components**: Seamless dark/light mode transitions

## 🚀 Activities Featured

- **Zipline**: 300m length, 80m height, 60 km/h speed
- **Giant Swing**: 60m height, 40m swing, 360° panoramic view
- **Shooting Range**: Professional range with air rifles and paintball
- **Electric Vehicles**: Eco-friendly ATV adventures
- **ÖZSE Café**: Local delicacies and traditional flavors

## 📱 Social Media Integration

- **Instagram**: [@layigasalincak](https://instagram.com/layigasalincak)
- **TikTok**: [@layiga.salincak.z](https://tiktok.com/@layiga.salincak.z)
- **WhatsApp**: +90 537 873 83 98 (Özgür Karatay, Park Manager)

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS with custom variables
- **Build Tool**: Vite
- **Animations**: GSAP, CSS animations
- **Deployment**: GitHub Pages

## 📦 Installation & Development

```bash
# Clone the repository
git clone <repository-url>
cd LayigaWebsite

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 GitHub Pages Deployment

### Automatic Deployment (Recommended)

The project includes GitHub Actions for automatic deployment:

1. Push to `main` or `master` branch
2. GitHub Actions will automatically build and deploy to `gh-pages` branch
3. Visit your GitHub Pages URL: `https://[username].github.io/LayigaWebsite/`

### Manual Deployment

```bash
# Build and deploy manually
npm run deploy
```

### GitHub Pages Setup

1. Go to repository Settings → Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` / `root`
4. Save

## 📁 Project Structure

```
LayigaWebsite/
├── images/                     # Image and video assets
│   ├── hero.jpg               # Main hero image
│   ├── logo.png               # Park logo
│   ├── IMG_*.jpg              # Activity images
│   ├── IMG_2052 2.mov         # Promotional video 1
│   └── IMG_4239 2.mov         # Promotional video 2
├── assets/                    # Static assets
├── .github/workflows/         # GitHub Actions
│   └── deploy.yml             # Deployment workflow
├── index.html                 # Main HTML file
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS config
└── README.md                  # This file
```

## 🎨 Color Scheme

- **Primary Orange**: #FF6B35 (Layiga Orange)
- **Primary Green**: #16A085 (Forest Green)
- **Forest Dark**: #2C5530
- **Light Theme**: Clean whites and grays
- **Dark Theme**: Dark blues and slates

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌍 Multi-language Support

The website supports three languages with dynamic content switching:
- Turkish (TR) - Default
- English (EN)
- Arabic (AR) - with RTL navigation fix

## 📧 Contact Information

- **Park Manager**: Özgür Karatay
- **Phone**: +90 537 873 83 98
- **Location**: Uzungöl, Çaykara, Trabzon, Turkey
- **Operating Hours**: 08:00 - 20:00 (Daily)

## 🔧 Configuration

### For GitHub Pages

Update the `base` path in `vite.config.js`:
```javascript
base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
```

### Environment Variables

No environment variables required for basic deployment.

## 📈 Performance Optimizations

- **Lazy Loading**: Images and videos
- **Optimized Assets**: Compressed images and videos
- **Minimal Dependencies**: Lightweight bundle size
- **CSS Variables**: Theme-aware styling
- **Preload Metadata**: Videos load efficiently

## 🐛 Known Issues & Solutions

1. **Video Autoplay**: Some browsers block autoplay - videos include `muted` attribute
2. **Dark Mode Persistence**: Theme choice is stored in localStorage
3. **Mobile Performance**: Videos are optimized with `preload="metadata"`

## 🚀 Future Enhancements

- [ ] Booking system integration
- [ ] Photo upload for visitors
- [ ] Weather widget integration
- [ ] Virtual tour feature
- [ ] Blog section for adventures

## 📄 License

This project is licensed under the ISC License.

---

**Built with ❤️ for Layiga Adventure Park** 