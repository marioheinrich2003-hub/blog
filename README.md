# MyBlog — Modulares Blog-Template

Ein flexibler, konfigurierbarer Blog, der über eine zentrale Konfigurationsdatei für beliebige Zwecke angepasst werden kann.

![Dark Mode](https://img.shields.io/badge/Dark_Mode-unterstützt-8b5cf6?style=flat-square)
![Light Mode](https://img.shields.io/badge/Light_Mode-unterstützt-f59e0b?style=flat-square)
![Responsive](https://img.shields.io/badge/Responsive-ja-22c55e?style=flat-square)
![No Framework](https://img.shields.io/badge/Framework-keins-ef4444?style=flat-square)

## ✨ Features

- 🎨 **Dark/Light Mode** — Toggle mit Speicherung im Browser
- 🏠 **Hero Section** — Featured Post mit Gradient-Overlay
- 🗂️ **Kategorie-Filter** — Posts dynamisch filtern
- 📱 **Responsive Design** — Mobile-first, funktioniert überall
- ⚡ **Scroll-Animationen** — Fade-in beim Scrollen
- 🔧 **Komplett konfigurierbar** — Alles über eine einzige Datei

## 📁 Projektstruktur

```
blog/
├── index.html    # HTML-Gerüst
├── style.css     # Design-System (CSS Custom Properties)
├── config.js     # ⭐ Zentrale Konfiguration
└── app.js        # Rendering-Engine
```

## 🚀 Schnellstart

1. Repository klonen:
   ```bash
   git clone https://github.com/DEIN-USERNAME/blog.git
   ```
2. `index.html` im Browser öffnen — fertig!

> Es wird kein Build-Tool, Framework oder Server benötigt.

## 🔧 Anpassung

Editiere **nur `config.js`**:

| Was ändern?     | Wo in config.js        | Beispiel                         |
|-----------------|------------------------|----------------------------------|
| Blog-Name       | `siteName`             | `"Mein Tech Blog"`              |
| Farben          | `colors.dark.primary`  | `"#f97316"` (Orange)             |
| Neuer Post      | `posts[]`              | Objekt mit title, content, etc.  |
| Nav-Links       | `navLinks[]`           | `{ label: "About", href: "#" }` |
| Kategorien      | `categories[]`         | `{ name: "Food", slug: "food" }` |
| Footer-Text     | `footerText`           | `"© 2026 Mein Blog"`            |

### Beispiel: Farben ändern

```javascript
colors: {
  dark: {
    primary: "#f97316",    // Orange statt Violett
    accent: "#ea580c",
    gradient1: "#ea580c",
    gradient2: "#f97316",
    // ...
  }
}
```

### Beispiel: Neuen Post hinzufügen

```javascript
posts: [
  {
    id: "7",
    title: "Mein neuer Artikel",
    excerpt: "Kurzbeschreibung...",
    content: `<p>Artikelinhalt als HTML</p>`,
    category: "technologie",
    date: "2026-03-01",
    author: "Dein Name",
    readTime: "5 min",
    image: "https://example.com/bild.jpg",
  },
  // ...
]
```

## 🛠️ Technologien

- HTML5 (semantisch)
- CSS3 (Custom Properties, Glassmorphism, Grid)
- Vanilla JavaScript (ES6+, IntersectionObserver)
- Google Fonts (Inter)

## 📄 Lizenz

MIT
