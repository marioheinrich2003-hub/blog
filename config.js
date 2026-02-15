// ============================================================
//  BLOG KONFIGURATION — Nur diese Datei anpassen!
// ============================================================

const CONFIG = {

    // ── Site-Einstellungen ──────────────────────────────────────
    siteName: "MyBlog",
    siteTagline: "Gedanken, Ideen & Geschichten",
    footerText: "© 2026 MyBlog. Alle Rechte vorbehalten.",

    // ── Navigation ──────────────────────────────────────────────
    navLinks: [
        { label: "Home", href: "#", id: "home" },
        { label: "Kategorien", href: "#categories", id: "categories" },
        { label: "Über mich", href: "#about", id: "about" },
    ],

    // ── Farbpalette ─────────────────────────────────────────────
    //    Diese Werte werden als CSS-Variablen gesetzt.
    //    Ändere sie, um das gesamte Farbschema zu wechseln.
    colors: {
        // Dark Mode (Standard)
        dark: {
            primary: "#a78bfa",    // Violett
            accent: "#6d28d9",    // Dunkelviolett
            bg: "#0f0f1a",    // Fast-Schwarz
            bgCard: "rgba(255, 255, 255, 0.04)",
            bgNav: "rgba(15, 15, 26, 0.85)",
            text: "#e4e4e7",
            textMuted: "#71717a",
            border: "rgba(255, 255, 255, 0.08)",
            gradient1: "#6d28d9",
            gradient2: "#a78bfa",
        },
        // Light Mode
        light: {
            primary: "#7c3aed",
            accent: "#a78bfa",
            bg: "#fafaf9",
            bgCard: "rgba(0, 0, 0, 0.03)",
            bgNav: "rgba(250, 250, 249, 0.85)",
            text: "#1c1917",
            textMuted: "#78716c",
            border: "rgba(0, 0, 0, 0.08)",
            gradient1: "#7c3aed",
            gradient2: "#c4b5fd",
        },
    },

    // ── Kategorien ──────────────────────────────────────────────
    categories: [
        { name: "Alle", slug: "all" },
        { name: "Technologie", slug: "technologie" },
        { name: "Design", slug: "design" },
        { name: "Lifestyle", slug: "lifestyle" },
    ],

    // ── Blog Posts ──────────────────────────────────────────────
    //    Füge neue Posts einfach als Objekte hinzu.
    //    Der erste Post wird automatisch als Hero/Featured angezeigt.
    posts: [
        {
            id: "1",
            title: "Die Zukunft des Webdesigns: Trends für 2026",
            excerpt: "Von KI-gestütztem Design bis hin zu immersiven 3D-Erlebnissen — ein Blick auf die wichtigsten Trends, die das Web in diesem Jahr prägen werden.",
            category: "design",
            date: "2026-02-15",
            author: "Max Mustermann",
            readTime: "6 min",
            image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=500&fit=crop",
            content: `
        <p>Das Webdesign entwickelt sich ständig weiter. In diesem Jahr sehen wir einige besonders spannende Trends, die das Nutzererlebnis grundlegend verändern werden.</p>

        <h2>1. KI-gestütztes Design in 2026</h2>
        <p>Künstliche Intelligenz wird immer stärker in den Designprozess integriert. Von automatisch generierten Layouts bis hin zu personalisierten Nutzererlebnissen — KI macht Design effizienter und individueller.</p>

        <h2>2. Immersive 3D-Erlebnisse</h2>
        <p>Dank WebGPU und verbesserter Browser-Performance werden 3D-Elemente im Web immer alltäglicher. Produkte lassen sich drehen, Räume virtuell betreten und Daten dreidimensional visualisieren.</p>

        <h2>3. Nachhaltiges Design in 2026</h2>
        <p>Performance-optimierte Websites mit geringerem Energieverbrauch rücken in den Fokus. Schlanker Code, effiziente Bilder und durchdachte Animationen schonen Ressourcen — und die Umwelt.</p>

        <h2>Fazit</h2>
        <p>2026 wird ein spannendes Jahr für Webdesigner. Die Kombination aus KI, 3D und Nachhaltigkeit eröffnet völlig neue Möglichkeiten, beeindruckende und gleichzeitig verantwortungsvolle Websites zu gestalten.</p>
      `,
        },
        {
            id: "2",
            title: "JavaScript im Jahr 2026: Was hat sich verändert?",
            excerpt: "Ein Überblick über die neuesten ECMAScript-Features, beliebte Frameworks und bewährte Praktiken in der modernen JavaScript-Entwicklung.",
            category: "technologie",
            date: "2026-02-10",
            author: "Max Mustermann",
            readTime: "8 min",
            image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=500&fit=crop",
            content: `
        <p>JavaScript bleibt die dominierende Sprache im Web. Doch was hat sich in den letzten Jahren verändert? Hier sind die wichtigsten Neuerungen.</p>

        <h2>Neue ECMAScript-Features</h2>
        <p>Mit jedem Jahr kommen neue Features hinzu, die die Sprache expressiver und sicherer machen. Pattern Matching, Pipe Operator und Records & Tuples sind nur einige der spannendsten Neuerungen.</p>

        <h2>Framework-Landschaft</h2>
        <p>React, Vue und Svelte dominieren weiterhin, aber neue Ansätze wie Signals und Islands Architecture gewinnen an Bedeutung. Der Trend geht klar in Richtung weniger JavaScript im Browser.</p>

        <h2>TypeScript ist Standard</h2>
        <p>TypeScript hat sich endgültig als Standard durchgesetzt. Kaum ein neues Projekt startet noch ohne statische Typisierung.</p>
      `,
        },
        {
            id: "3",
            title: "Minimalismus im Alltag: Weniger ist mehr",
            excerpt: "Wie ein minimalistischer Lebensstil zu mehr Klarheit, Fokus und Zufriedenheit führen kann — praktische Tipps für den Einstieg.",
            category: "lifestyle",
            date: "2026-02-05",
            author: "Max Mustermann",
            readTime: "5 min",
            image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&h=500&fit=crop",
            content: `
        <p>In einer Welt voller Überfluss kann Minimalismus wie ein Gegenmittel wirken. Es geht nicht darum, auf alles zu verzichten — sondern darum, bewusster zu leben.</p>

        <h2>Was bedeutet Minimalismus?</h2>
        <p>Minimalismus bedeutet, sich auf das Wesentliche zu konzentrieren. Es geht um Qualität statt Quantität, um bewusste Entscheidungen statt blindem Konsum.</p>

        <h2>Erste Schritte</h2>
        <p>Beginne mit einer Bestandsaufnahme: Was brauchst du wirklich? Welche Dinge nutzt du regelmäßig? Sortiere aus, was keinen Mehrwert bringt — und genieße die neue Freiheit.</p>

        <h2>Minimalismus im digitalen Leben</h2>
        <p>Auch digital lässt sich aufräumen: Weniger Apps, fokussierte Bildschirmzeit und ein aufgeräumter Desktop schaffen Raum für Kreativität und Produktivität.</p>
      `,
        },
        {
            id: "4",
            title: "Responsive Design: Best Practices für 2026",
            excerpt: "Container Queries, neue CSS-Features und moderne Layout-Techniken — so baut man heute wirklich responsive Websites.",
            category: "design",
            date: "2026-01-28",
            author: "Max Mustermann",
            readTime: "7 min",
            image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop",
            content: `
        <p>Responsive Design hat sich weit über Media Queries hinaus entwickelt. Moderne CSS-Features ermöglichen flexiblere und elegantere Lösungen als je zuvor.</p>

        <h2>Container Queries</h2>
        <p>Statt auf die Viewport-Breite zu reagieren, können Komponenten jetzt auf die Größe ihres Containers reagieren. Das macht wiederverwendbare Komponenten endlich wirklich flexibel.</p>

        <h2>Fluid Typography</h2>
        <p>Mit clamp() und modernen CSS-Funktionen skaliert Schrift automatisch und harmonisch zwischen verschiedenen Bildschirmgrößen — ohne einen einzigen Breakpoint.</p>

        <h2>Subgrid</h2>
        <p>CSS Subgrid ermöglicht verschachtelten Elementen, am Grid des Elternelements teilzunehmen. Das löst viele Layout-Probleme, die früher komplizierte Workarounds erforderten.</p>
      `,
        },
        {
            id: "5",
            title: "Produktivität steigern mit der Pomodoro-Technik",
            excerpt: "Eine einfache, aber bewährte Methode, um fokussierter zu arbeiten und Pausen sinnvoll zu nutzen.",
            category: "lifestyle",
            date: "2026-01-20",
            author: "Max Mustermann",
            readTime: "4 min",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop",
            content: `
        <p>Die Pomodoro-Technik ist eine Zeitmanagement-Methode, die auf kurzen, fokussierten Arbeitsintervallen basiert. Sie ist simpel — und erstaunlich effektiv.</p>

        <h2>So funktioniert's</h2>
        <p>Arbeite 25 Minuten konzentriert an einer Aufgabe. Dann 5 Minuten Pause. Nach vier Durchgängen eine längere Pause von 15–30 Minuten. Das ist alles.</p>

        <h2>Warum es funktioniert</h2>
        <p>Unser Gehirn ist nicht für stundenlange Konzentration gemacht. Kurze Intervalle halten die Aufmerksamkeit hoch und die regelmäßigen Pausen beugen Erschöpfung vor.</p>

        <h2>Tools und Apps</h2>
        <p>Es gibt zahlreiche Apps, die den Pomodoro-Rhythmus unterstützen. Aber im Grunde reicht auch ein einfacher Timer — die Methode lebt von ihrer Einfachheit.</p>
      `,
        },
        {
            id: "6",
            title: "Web Performance: Ladezeiten drastisch reduzieren",
            excerpt: "Lazy Loading, Code Splitting und moderne Bildformate — konkrete Techniken für schnellere Websites.",
            category: "technologie",
            date: "2026-01-15",
            author: "Max Mustermann",
            readTime: "9 min",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
            content: `
        <p>Geschwindigkeit ist kein Luxus — sie ist ein Ranking-Faktor, ein UX-Kriterium und entscheidet über Conversions. Hier sind die wichtigsten Techniken, um deine Website schneller zu machen.</p>

        <h2>Bilder optimieren</h2>
        <p>Verwende moderne Formate wie AVIF und WebP. Nutze responsive Bilder mit srcset und lass den Browser das passende Format wählen. Lazy Loading verhindert, dass Bilder geladen werden, die noch nicht sichtbar sind.</p>

        <h2>Code Splitting</h2>
        <p>Lade nur den JavaScript-Code, der für die aktuelle Seite benötigt wird. Dynamische Imports und Tree Shaking halten das initiale Bundle klein.</p>

        <h2>Core Web Vitals</h2>
        <p>LCP, INP und CLS sind die drei Metriken, die Google für das Ranking berücksichtigt. Optimiere diese gezielt, um sowohl technisch als auch im Ranking zu profitieren.</p>
      `,
        },
    ],
};
