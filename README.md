# 🧬 BioBattle – Interaktives Biochemie-Quiz

**BioBattle** ist ein webbasiertes Quiz-Spiel für Studierende der Humanmedizin, Zahnmedizin und Neurowissenschaften an der Universität zu Köln. Es bietet Solo-, Lern- und Multiplayer-Modi mit 335 Fragen aus 11 biochemischen Themengebieten.

## Features

- **Quiz-Modus:** 10 Zufallsfragen pro Thema
- **Lernmodus:** Alle Fragen eines Themas systematisch durcharbeiten
- **Duell-Modus:** Echtzeit-Multiplayer mit Raum-Codes (via Supabase Realtime)
- **Themen-Freischaltung:** Topics werden schrittweise freigeschaltet, wenn Studierende Fragen beitragen
- **Anonyme Statistik:** Datenschutzkonforme Nutzungsauswertung ohne Personenbezug
- **SCORM 1.2:** Integration in ILIAS und andere LMS

## Themengebiete

Aminosäuren und Proteine · Enzyme · Kohlenhydrate · Lipide · Bioenergetik · Kompartimente · Nukleinsäuren · Hormone · Blut · Techniken · Klinik

## Technik

- **Frontend:** Vanilla JavaScript, HTML, CSS
- **Backend:** [Supabase](https://supabase.com) (PostgreSQL, Realtime, RLS)
- **Hosting:** GitHub Pages + ILIAS (SCORM 1.2)

## Dateien

| Datei | Beschreibung |
|-------|-------------|
| `index.html` | Haupt-App (Quiz, Multiplayer, Admin-Panel) |
| `questions.js` | Fragenkatalog (335 Fragen, JSON-Format) |
| `imsmanifest.xml` | SCORM 1.2 Manifest für ILIAS-Integration |
| `Fragenbeiträge.html` | Formular für Studierenden-Fragenbeiträge |

## Eigene Instanz einrichten

1. Repository forken oder Dateien herunterladen
2. Supabase-Projekt anlegen (siehe `Supabase_Anleitung.md`)
3. URL und Key in `index.html` eintragen
4. SQL-Migrationen im Supabase SQL-Editor ausführen
5. Dateien über GitHub Pages oder einen Webserver bereitstellen

## Entwicklung

Entwickelt von **T. Riyahi** (Med. Fakultät, Universität zu Köln)
mit maßgeblicher Unterstützung von:
- 🤖 **Claude** (Anthropic) – Konzeption, Fragenentwicklung, Qualitätssicherung, Code & Design
- 🤖 **ChatGPT** (OpenAI) – Fragenentwicklung und inhaltliche Beiträge

## Lizenz

CC BY 4.0 – [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)

