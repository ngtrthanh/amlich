# 🎨 Lịch Vạn Niên - Dynamic Theme Switcher v1.0.0

A Vietnamese Lunar Calendar with **7 beautiful themes** and **intelligent auto-switching** based on time of day and season!

## ✨ Features

### 🎭 7 Unique Themes

1. **Original** - Classic green theme
2. **Traditional** - Red & gold Vietnamese festive style
3. **Minimal** - Clean black & white monochrome
4. **Cyberpunk** - Neon pink/cyan futuristic design
5. **Nature Zen** - Bamboo green peaceful atmosphere
6. **Sunset** 🌅 - Warm orange/pink evening vibes
7. **Ocean** 🌊 - Purple/blue gradient waves

### 🔄 Auto Theme Mode

Automatically switches themes based on:

**Time of Day:**
- 🌅 6am-12pm → Nature Zen (morning freshness)
- ☀️ 12pm-6pm → Sunset (afternoon warmth)
- 🌆 6pm-10pm → Traditional (evening celebration)
- 🌙 10pm-6am → Cyberpunk (night mode)

**Season:**
- 🌸 Spring (Mar-May) → Nature Zen
- ☀️ Summer (Jun-Aug) → Sunset
- 🍂 Fall (Sep-Nov) → Original
- ❄️ Winter (Dec-Feb) → Minimal

### 💾 Persistent Settings

- Theme preference saved to localStorage
- Auto mode state remembered
- Survives page refresh

## 🚀 Usage

### Theme Switcher
Use the dropdown in the header to select any theme instantly.

### Auto Mode
Click the **🔄 Auto** button to enable automatic theme switching based on time/season.

### Manual Override
Selecting a theme manually disables auto mode.

## 🛠️ Technical Details

**New Files:**
- `app/themes.js` - Theme engine with 7 color schemes
- Updated `app/style.css` - CSS variables for dynamic theming
- Updated `app/app.js` - Theme picker UI
- Updated `app/index.html` - Load theme engine

**Theme System:**
- CSS custom properties (`--theme-primary`, `--theme-accent`, etc.)
- Smooth 0.5s transitions between themes
- localStorage persistence
- Auto-detection logic

## 📦 Installation

```bash
git checkout theme-switcher
docker-compose up
```

Open http://localhost:8080

## 🎨 Theme Palette

```javascript
original:    #3a8a3e (green)
traditional: #dc143c (red) + #ffd700 (gold)
minimal:     #000 (black) + #fff (white)
cyberpunk:   #ff006e (pink) + #00f5ff (cyan)
nature:      #2d5016 (bamboo) + #4a7c59 (moss)
sunset:      #c44569 (coral) + #f8b500 (amber)
ocean:       #4834d4 (deep blue) + #686de0 (lavender)
```

## 🔧 Customization

Add your own theme in `app/themes.js`:

```javascript
mytheme: {
  name: 'My Theme',
  bg: 'linear-gradient(135deg,#color1,#color2)',
  primary: '#mainColor',
  accent: '#accentColor',
  text: '#textColor',
  border: '#borderColor'
}
```

Then add to the dropdown in `app/app.js`.

## 📊 Version History

- **v1.0.0** - Dynamic theme switcher with 7 themes + auto mode
- **v0.5.0** - Nature zen theme
- **v0.4.0** - Neon cyberpunk theme
- **v0.3.0** - Modern minimalist theme
- **v0.2.0** - Traditional Vietnamese theme
- **v0.1.1** - Initial release

---

Made with ❤️ and maximum creativity 🎨
