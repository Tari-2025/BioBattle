/* =========================================================
   BioBattle – Fragenkatalog (335 Fragen)
   =========================================================
   FORMAT:
   {
     id: "q-0001",
     question: "...",
     options: ["A", "B", "C", "D"],
     correctIndex: 0,          ← Index der richtigen Antwort (0–3)
     explanation: "...",
     topic: ["Thema"]          ← ein oder mehrere Themen
   }

   FRAGENTYPEN – Vielfalt erwünscht! Beispiele:
   ✓ "Welche Aussage ist korrekt?"
   ✓ "Welche Kombination ist richtig?"
   ✓ "Welche Konsequenz ist zu erwarten?"
   ✓ "Welcher Schritt folgt unmittelbar auf …?"
   ✓ "Was ist die wahrscheinlichste Ursache für …?"
   ✓ "Welcher Mechanismus erklärt …?"
   ✓ "Was unterscheidet X von Y?"

   VERFÜGBARE THEMEN:
   Aminosäuren und Proteine | Enzyme | Kohlenhydrate
   Bioenergetik | Lipide | Kompartimente | Nukleinsäuren
   Hormone | Blut | Techniken | Klinik

   Neues Thema? Einfach einen neuen String eintragen –
   es erscheint automatisch im Menü! 🎉

   Entwickelt von T. Riyahi (Med. Fakultät, Uni Köln)
   mit maßgeblicher Unterstützung von:
   🤖 Claude (Anthropic) – Fragenentwicklung, Qualitätssicherung, Code
   🤖 ChatGPT (OpenAI)  – Fragenentwicklung und inhaltliche Beiträge
   Ohne diese KI-Unterstützung wäre BioBattle in dieser Form nicht möglich gewesen.
   Lizenz: CC BY 4.0
   ========================================================= */

const QUESTIONS = [
  {
    "id": "q-0001",
    "question": "Welche Eigenschaft unterscheidet Glycin von allen anderen proteinogenen Aminosäuren?",
    "options": [
      "Es besitzt eine aromatische Seitenkette",
      "Es ist optisch inaktiv",
      "Es ist schwefelhaltig",
      "Es ist basisch"
    ],
    "correctIndex": 1,
    "explanation": "Glycin ist die einzige proteinogene Aminosäure ohne chirales Zentrum und daher optisch inaktiv.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine"
    ]
  },
  {
    "id": "q-0002",
    "question": "Welche Aminosäure bildet Disulfidbrücken in Proteinen?",
    "options": [
      "Methionin",
      "Cystein",
      "Tyrosin",
      "Histidin"
    ],
    "correctIndex": 1,
    "explanation": "Cystein kann über seine Thiolgruppe (–SH) Disulfidbindungen bilden, die die Proteinstruktur stabilisieren.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Klinik"
    ]
  },
  {
    "id": "q-0003",
    "question": "Was beschreibt die Michaelis-Menten-Konstante (Km) am besten?",
    "options": [
      "Die Enzymkonzentration, bei der die Reaktion halbmaximal verläuft",
      "Die Substratkonzentration, bei der die Geschwindigkeit halbmaximal ist",
      "Die maximale Reaktionsgeschwindigkeit eines Enzyms",
      "Die Aktivierungsenergie, die zum Start der Reaktion benötigt wird"
    ],
    "correctIndex": 1,
    "explanation": "Km ist definiert als die Substratkonzentration, bei der ein Enzym die Hälfte seiner maximalen Geschwindigkeit erreicht.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme"
    ]
  },
  {
    "id": "q-0004",
    "question": "Welches Enzym katalysiert den geschwindigkeitsbestimmenden Schritt der Glykolyse?",
    "options": [
      "Hexokinase (HK)",
      "Phosphofructokinase-1 (PFK-1)",
      "Pyruvatkinase (PK)",
      "Aldolase"
    ],
    "correctIndex": 1,
    "explanation": "Die Phosphofructokinase-1 (PFK-1) katalysiert den Schlüsselschritt der Glykolyse.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Kohlenhydrate"
    ]
  },
  {
    "id": "q-0005",
    "question": "Welches Enzym katalysiert die Phosphorylierung von Glukose zu Glukose-6-phosphat?",
    "options": [
      "Hexokinase",
      "Glukose-6-Phosphatase",
      "Phosphofructokinase",
      "Pyruvatkinase"
    ],
    "correctIndex": 0,
    "explanation": "Die Hexokinase ist das erste Enzym der Glykolyse und phosphoryliert Glukose zu Glukose-6-phosphat.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Enzyme"
    ]
  },
  {
    "id": "q-0006",
    "question": "Welche Produkte entstehen beim vollständigen Abbau von Glukose in der Zellatmung?",
    "options": [
      "ATP, CO2 und H2O",
      "ATP und Pyruvat",
      "Laktat und ATP",
      "Acetyl-CoA und NADH"
    ],
    "correctIndex": 0,
    "explanation": "Der vollständige Abbau liefert CO2 und H2O als Endprodukte sowie ATP als Energieäquivalent.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Bioenergetik",
      "Kohlenhydrate"
    ]
  },
  {
    "id": "q-0007",
    "question": "Welche Aussage trifft auf gesättigte Fettsäuren zu?",
    "options": [
      "Sie enthalten mindestens eine Doppelbindung",
      "Sie sind bei Raumtemperatur meist fest",
      "Sie sind essentielle Fettsäuren",
      "Sie sind immer flüssig"
    ],
    "correctIndex": 1,
    "explanation": "Gesättigte Fettsäuren enthalten keine Doppelbindungen und sind bei Raumtemperatur oft fest, z. B. Butterfett.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Bioenergetik"
    ]
  },
  {
    "id": "q-0008",
    "question": "Welches Lipid ist ein Hauptbestandteil biologischer Membranen?",
    "options": [
      "Triacylglycerine",
      "Phospholipide",
      "Cholesterinester",
      "Wachse"
    ],
    "correctIndex": 1,
    "explanation": "Phospholipide bilden die Doppelschicht biologischer Membranen.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0009",
    "question": "Welche Funktion hat die Atmungskette in den Mitochondrien?",
    "options": [
      "Synthese von DNA im Mitochondrienstroma",
      "Erzeugung eines Protonengradienten zur ATP-Synthese",
      "Spaltung von Glukose zu Pyruvat im Cytosol",
      "Aufbau von Proteinen aus Aminosäuren an Ribosomen"
    ],
    "correctIndex": 1,
    "explanation": "Die Atmungskette pumpt Protonen über die innere Mitochondrienmembran und erzeugt den Protonengradienten für die ATP-Synthese.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Bioenergetik",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0010",
    "question": "Wo findet die Glykolyse in der Zelle statt?",
    "options": [
      "Im Cytosol",
      "In den Mitochondrien",
      "Im Zellkern",
      "Im endoplasmatischen Retikulum"
    ],
    "correctIndex": 0,
    "explanation": "Die Glykolyse läuft vollständig im Cytosol ab.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kompartimente",
      "Kohlenhydrate"
    ]
  },
  {
    "id": "q-0011",
    "question": "Welche Basenpaarung ist in der DNA korrekt?",
    "options": [
      "Adenin – Guanin",
      "Adenin – Thymin",
      "Cytosin – Adenin",
      "Cytosin – Uracil"
    ],
    "correctIndex": 1,
    "explanation": "In der DNA paart sich Adenin mit Thymin und Cytosin mit Guanin.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren"
    ]
  },
  {
    "id": "q-0012",
    "question": "Welche Base kommt in RNA, aber nicht in DNA vor?",
    "options": [
      "Thymin",
      "Uracil",
      "Cytosin",
      "Adenin"
    ],
    "correctIndex": 1,
    "explanation": "In RNA ersetzt Uracil das Thymin der DNA.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren"
    ]
  },
  {
    "id": "q-0013",
    "question": "Welches Hormon wird in der Nebennierenrinde produziert?",
    "options": [
      "Insulin",
      "Adrenalin",
      "Cortisol",
      "Glukagon"
    ],
    "correctIndex": 2,
    "explanation": "Cortisol ist ein Glucocorticoid, das in der Nebennierenrinde gebildet wird.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Hormone"
    ]
  },
  {
    "id": "q-0014",
    "question": "Welches Hormon senkt den Blutzuckerspiegel?",
    "options": [
      "Insulin",
      "Glukagon",
      "Adrenalin",
      "Cortisol"
    ],
    "correctIndex": 0,
    "explanation": "Insulin senkt den Blutzuckerspiegel, indem es die Aufnahme von Glukose in die Zellen fördert.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Hormone",
      "Blut"
    ]
  },
  {
    "id": "q-0015",
    "question": "Welcher Bestandteil des Blutes ist vor allem für die Sauerstoffbindung zuständig?",
    "options": [
      "Erythrozyten",
      "Leukozyten",
      "Thrombozyten",
      "Plasma"
    ],
    "correctIndex": 0,
    "explanation": "Erythrozyten enthalten Hämoglobin und binden Sauerstoff.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Blut"
    ]
  },
  {
    "id": "q-0016",
    "question": "Welche Blutgruppe besitzt keine Antigene auf den Erythrozyten?",
    "options": [
      "A",
      "B",
      "AB",
      "0"
    ],
    "correctIndex": 3,
    "explanation": "Menschen mit Blutgruppe 0 besitzen keine A- oder B-Antigene auf ihren Erythrozyten.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Blut",
      "Klinik"
    ]
  },
  {
    "id": "q-0017",
    "question": "Welche Technik trennt Proteine basierend auf ihrer Größe?",
    "options": [
      "Western Blot",
      "SDS-PAGE",
      "ELISA",
      "PCR"
    ],
    "correctIndex": 1,
    "explanation": "SDS-PAGE trennt Proteine nach ihrer Molekülmasse im elektrischen Feld.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Techniken",
      "Aminosäuren und Proteine"
    ]
  },
  {
    "id": "q-0018",
    "question": "Welche Methode eignet sich zur Vervielfältigung von DNA?",
    "options": [
      "ELISA",
      "PCR",
      "Western Blot",
      "Spektroskopie"
    ],
    "correctIndex": 1,
    "explanation": "Die Polymerase-Kettenreaktion (PCR) dient der Vervielfältigung spezifischer DNA-Sequenzen.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Techniken",
      "Nukleinsäuren"
    ]
  },
  {
    "id": "q-0019",
    "question": "In welchem Organell findet die oxidative Phosphorylierung statt?",
    "options": [
      "Zellkern",
      "Mitochondrien",
      "Golgi-Apparat",
      "Endoplasmatisches Retikulum"
    ],
    "correctIndex": 1,
    "explanation": "Mitochondrien erzeugen ATP durch oxidative Phosphorylierung und werden deshalb als Kraftwerke der Zelle bezeichnet.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kompartimente",
      "Bioenergetik"
    ]
  },
  {
    "id": "q-0020",
    "question": "Welche Struktur dient in Eukaryoten als Sortier- und Versandzentrum für Proteine?",
    "options": [
      "Golgi-Apparat",
      "Endoplasmatisches Retikulum",
      "Lysosomen",
      "Ribosomen"
    ],
    "correctIndex": 0,
    "explanation": "Der Golgi-Apparat modifiziert, sortiert und verpackt Proteine für den Transport.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kompartimente",
      "Aminosäuren und Proteine"
    ]
  },
  {
    "id": "q-0021",
    "question": "Welche Aminosäure ist im physiologischen pH-Bereich meist positiv geladen?",
    "options": [
      "Glutamat",
      "Asparagin",
      "Lysin",
      "Serin"
    ],
    "correctIndex": 2,
    "explanation": "Lysin besitzt eine basische ε-Aminogruppe, die im physiologischen pH-Bereich protoniert und positiv geladen ist.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Klinik"
    ]
  },
  {
    "id": "q-0022",
    "question": "Welche Struktur beschreibt die dreidimensionale Anordnung einer Polypeptidkette?",
    "options": [
      "Primärstruktur",
      "Sekundärstruktur",
      "Tertiärstruktur",
      "Quartärstruktur"
    ],
    "correctIndex": 2,
    "explanation": "Die Tertiärstruktur beschreibt die räumliche Gesamtanordnung einer Polypeptidkette, die durch Wechselwirkungen zwischen Seitenketten stabilisiert wird.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine"
    ]
  },
  {
    "id": "q-0023",
    "question": "Welche Aussage beschreibt kompetitive Enzymhemmung?",
    "options": [
      "Der Inhibitor bindet nur an den Enzym-Substrat-Komplex",
      "Der Inhibitor bindet an das aktive Zentrum und konkurriert mit dem Substrat",
      "Der Inhibitor verändert die Vmax, lässt aber Km unverändert",
      "Der Inhibitor bindet kovalent und hemmt das Enzym irreversibel"
    ],
    "correctIndex": 1,
    "explanation": "Bei kompetitiver Hemmung konkurriert der Inhibitor mit dem Substrat um die Bindung an das aktive Zentrum.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme"
    ]
  },
  {
    "id": "q-0024",
    "question": "Welches Enzym ist für die Umwandlung von Pyruvat zu Laktat verantwortlich?",
    "options": [
      "Laktatdehydrogenase",
      "Pyruvatdehydrogenase",
      "Aldolase",
      "Hexokinase"
    ],
    "correctIndex": 0,
    "explanation": "Die Laktatdehydrogenase katalysiert die Reduktion von Pyruvat zu Laktat unter NADH-Verbrauch.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Kohlenhydrate"
    ]
  },
  {
    "id": "q-0025",
    "question": "Welche Aussage über Glykogen ist korrekt?",
    "options": [
      "Es ist die Speicherform von Glukose in Pflanzen (Stärke)",
      "Es besteht aus α-1,4- und α-1,6-glykosidischen Bindungen",
      "Es wird ausschließlich im Magen-Darm-Trakt synthetisiert",
      "Es ist ein unverzweigtes Homopolymer aus Fruktose"
    ],
    "correctIndex": 1,
    "explanation": "Glykogen ist die tierische Speicherform von Glukose mit Verzweigungen über α-1,6-Bindungen.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Bioenergetik"
    ]
  },
  {
    "id": "q-0026",
    "question": "Welche Erkrankung ist typisch mit einem Insulinmangel verbunden?",
    "options": [
      "Hypothyreose (Schilddrüsenunterfunktion)",
      "Diabetes mellitus Typ 1 (absoluter Insulinmangel)",
      "Cushing-Syndrom (Glukokortikoidexzess)",
      "Morbus Addison (Nebennierenrindeninsuffizienz)"
    ],
    "correctIndex": 1,
    "explanation": "Bei Diabetes mellitus Typ 1 führt ein Insulinmangel zu Hyperglykämie und Ketoazidose.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Hormone",
      "Kohlenhydrate"
    ]
  },
  {
    "id": "q-0027",
    "question": "Welche Lipidklasse dient primär als Energiespeicher?",
    "options": [
      "Phospholipide",
      "Cholesterin",
      "Triacylglycerine",
      "Sphingolipide"
    ],
    "correctIndex": 2,
    "explanation": "Triacylglycerine speichern Energie in Form von Fettsäuren und Glycerin.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Bioenergetik"
    ]
  },
  {
    "id": "q-0028",
    "question": "Welche Rolle spielt Carnitin im Fettstoffwechsel?",
    "options": [
      "Es ist ein Peptidhormon der Nebennierenrinde",
      "Es transportiert langkettige Fettsäuren in die Mitochondrien",
      "Es spaltet Triglyceride durch lipolytische Aktivität",
      "Es aktiviert Glukose durch Phosphorylierung im Cytosol"
    ],
    "correctIndex": 1,
    "explanation": "Carnitin ermöglicht den Transport langkettiger Fettsäuren durch die mitochondriale Membran.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Bioenergetik"
    ]
  },
  {
    "id": "q-0029",
    "question": "Wo genau findet die oxidative Phosphorylierung statt?",
    "options": [
      "Im Zytosol (wie Glykolyse)",
      "In der inneren Mitochondrienmembran",
      "Im Zellkern (wie DNA-Replikation)",
      "Im endoplasmatischen Retikulum (wie Proteinsynthese)"
    ],
    "correctIndex": 1,
    "explanation": "Die Enzymkomplexe der Atmungskette befinden sich in der inneren Mitochondrienmembran.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Bioenergetik",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0030",
    "question": "Welche Aussage trifft auf mitochondriale DNA (mtDNA) zu?",
    "options": [
      "Sie ist linear wie eukaryotische Chromosomen organisiert",
      "Sie wird ausschließlich vom Vater über Spermien vererbt",
      "Sie ist ringförmig und kodiert für essentielle Proteine und tRNAs",
      "Sie codiert die gesamte Atmungskette inklusive aller Untereinheiten"
    ],
    "correctIndex": 2,
    "explanation": "Die mtDNA ist zirkulär und kodiert für einige essentielle Proteine und tRNAs, aber nicht für alle Bestandteile der Atmungskette.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kompartimente",
      "Nukleinsäuren"
    ]
  },
  {
    "id": "q-0031",
    "question": "Welche Nukleotidbase wird durch Desaminierung von Cytosin gebildet?",
    "options": [
      "Adenin",
      "Thymin",
      "Uracil",
      "Guanin"
    ],
    "correctIndex": 2,
    "explanation": "Durch spontane Desaminierung von Cytosin entsteht Uracil, das in der DNA normalerweise durch Reparaturmechanismen entfernt wird.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren",
      "Klinik"
    ]
  },
  {
    "id": "q-0032",
    "question": "Welchen Mutationstyp beschreibt ein Basenaustausch ohne Änderung der Aminosäuresequenz?",
    "options": [
      "Missense-Mutation",
      "Nonsense-Mutation",
      "Stille Mutation",
      "Frameshift-Mutation"
    ],
    "correctIndex": 2,
    "explanation": "Bei einer stillen Mutation wird ein Codon verändert, das jedoch die gleiche Aminosäure codiert.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren",
      "Klinik"
    ]
  },
  {
    "id": "q-0033",
    "question": "Welche Hormone werden im Pankreas gebildet?",
    "options": [
      "Insulin und Glukagon",
      "Adrenalin und Noradrenalin",
      "Cortisol und Aldosteron",
      "TSH und ACTH"
    ],
    "correctIndex": 0,
    "explanation": "Die Langerhans-Inseln des Pankreas produzieren Insulin (β-Zellen) und Glukagon (α-Zellen).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Hormone",
      "Kohlenhydrate"
    ]
  },
  {
    "id": "q-0034",
    "question": "Welche Blutgerinnungsfaktoren sind Vitamin-K-abhängig?",
    "options": [
      "Faktor I, II, III, IV",
      "Faktor II, VII, IX, X",
      "Faktor VIII, IX, X, XI",
      "Faktor XII, XIII, XIV"
    ],
    "correctIndex": 1,
    "explanation": "Die Vitamin-K-abhängigen Gerinnungsfaktoren sind II (Prothrombin), VII, IX und X.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Blut",
      "Klinik",
      "Enzyme"
    ]
  },
  {
    "id": "q-0035",
    "question": "Welcher Laborwert ist bei einer Anämie typischerweise erniedrigt?",
    "options": [
      "Hämoglobin",
      "Leukozyten",
      "Thrombozyten",
      "Natrium"
    ],
    "correctIndex": 0,
    "explanation": "Eine Anämie ist definiert durch einen erniedrigten Hämoglobinwert im Blut.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Blut",
      "Klinik"
    ]
  },
  {
    "id": "q-0036",
    "question": "Welche Technik dient zur quantitativen Bestimmung spezifischer Proteine in einem Probenlysat?",
    "options": [
      "ELISA",
      "SDS-PAGE",
      "PCR",
      "Southern Blot"
    ],
    "correctIndex": 0,
    "explanation": "ELISA erlaubt den spezifischen und quantitativen Nachweis von Proteinen wie z. B. Hormonen oder Antikörpern.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Techniken",
      "Aminosäuren und Proteine"
    ]
  },
  {
    "id": "q-0037",
    "question": "Welche Technik wird zur Trennung von DNA-Fragmenten nach Größe eingesetzt?",
    "options": [
      "Western Blot (Proteinnachweis)",
      "Northern Blot (RNA-Nachweis)",
      "Agarose-Gelelektrophorese (DNA-Trennung)",
      "Massenspektrometrie (Molekülmassen)"
    ],
    "correctIndex": 2,
    "explanation": "Die Agarose-Gelelektrophorese trennt DNA- oder RNA-Fragmente basierend auf ihrer Länge.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Techniken",
      "Nukleinsäuren"
    ]
  },
  {
    "id": "q-0038",
    "question": "Welches Organell ist für den Abbau von Makromolekülen zuständig?",
    "options": [
      "Lysosomen",
      "Mitochondrien",
      "Golgi-Apparat",
      "Peroxisomen"
    ],
    "correctIndex": 0,
    "explanation": "Lysosomen enthalten hydrolytische Enzyme, die Proteine, Lipide und andere Makromoleküle abbauen.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kompartimente",
      "Klinik"
    ]
  },
  {
    "id": "q-0039",
    "question": "Welche Substanz entsteht im ersten Schritt des Citratzyklus?",
    "options": [
      "Pyruvat",
      "Citrat",
      "Laktat",
      "Acetyl-CoA"
    ],
    "correctIndex": 1,
    "explanation": "Im ersten Schritt des Citratzyklus kondensieren Oxalacetat und Acetyl-CoA zu Citrat.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Bioenergetik",
      "Kohlenhydrate"
    ]
  },
  {
    "id": "q-0040",
    "question": "Welche Substanz hemmt die Atmungskette am Komplex IV?",
    "options": [
      "Cyanid",
      "Rotenon",
      "Antimycin A",
      "Oligomycin"
    ],
    "correctIndex": 0,
    "explanation": "Cyanid blockiert die Cytochrom-c-Oxidase (Komplex IV) und verhindert so die Elektronenübertragung auf Sauerstoff.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Bioenergetik",
      "Klinik"
    ]
  },
  {
    "id": "q-0041",
    "question": "Welcher Puffer ist der wichtigste im Blutplasma?",
    "options": [
      "Phosphatpuffer",
      "Plasmaproteine",
      "Bicarbonat/CO₂-Puffer",
      "Ammoniumpuffer"
    ],
    "correctIndex": 2,
    "explanation": "Der Bicarbonat/CO₂-Puffer dominiert im Plasma und wird über Lunge und Niere reguliert.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Blut",
      "Bioenergetik"
    ]
  },
  {
    "id": "q-0042",
    "question": "Welche Aussage trifft auf Myoglobin im Vergleich zu Hämoglobin zu?",
    "options": [
      "Myoglobin zeigt kooperative O₂-Bindung",
      "Myoglobin hat eine sigmoide O₂-Kurve",
      "Myoglobin speichert O₂ in der Muskulatur",
      "Myoglobin besteht aus vier Untereinheiten"
    ],
    "correctIndex": 2,
    "explanation": "Myoglobin ist monomer, dient der O₂-Speicherung und zeigt eine hyperbolische Bindungskurve ohne Kooperativität.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Blut"
    ]
  },
  {
    "id": "q-0043",
    "question": "Welcher Cofaktor ist für Transaminierungsreaktionen essentiell?",
    "options": [
      "Biotin (B7)",
      "Pyridoxalphosphat (B6)",
      "Thiaminpyrophosphat (B1)",
      "Nicotinamid (B3)"
    ],
    "correctIndex": 1,
    "explanation": "Pyridoxalphosphat (PLP, Vitamin B6) ist der klassische Cofaktor von Aminotransferasen.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Aminosäuren und Proteine"
    ]
  },
  {
    "id": "q-0044",
    "question": "Welche Struktur ist typisch für Kollagen?",
    "options": [
      "α-Helix aus einer einzelnen Kette",
      "β-Faltblatt aus antiparallelen Strängen",
      "Triple-Helix aus drei Polypeptidketten",
      "Random-Coil ohne definierte Struktur"
    ],
    "correctIndex": 2,
    "explanation": "Kollagen bildet eine charakteristische Triple-Helix; Hydroxylierungen sind Vitamin-C-abhängig (Skorbut-Risiko).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Klinik"
    ]
  },
  {
    "id": "q-0045",
    "question": "Welches Enzym wird allosterisch durch ATP gehemmt und durch AMP aktiviert?",
    "options": [
      "Pyruvatkinase (PK)",
      "Hexokinase (HK)",
      "Phosphofructokinase-1 (PFK-1)",
      "Glukose-6-Phosphatase (G6Pase)"
    ],
    "correctIndex": 2,
    "explanation": "ATP hemmt und AMP aktiviert PFK-1 – zentraler Regulationspunkt der Glykolyse.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Kohlenhydrate"
    ]
  },
  {
    "id": "q-0046",
    "question": "Welches Produkt entsteht bei der Glykogenolyse durch Glykogenphosphorylase?",
    "options": [
      "Glukose-6-phosphat",
      "Glukose-1-phosphat",
      "Freie Glukose",
      "Fruktose-6-phosphat"
    ],
    "correctIndex": 1,
    "explanation": "Die Glykogenphosphorylase spaltet α-1,4-Bindungen und setzt Glukose-1-phosphat frei.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Enzyme"
    ]
  },
  {
    "id": "q-0047",
    "question": "Welcher Glukosetransporter ist insulinabhängig und v. a. in Muskel und Fettgewebe zu finden?",
    "options": [
      "GLUT1",
      "GLUT2",
      "GLUT3",
      "GLUT4"
    ],
    "correctIndex": 3,
    "explanation": "GLUT4 wird durch Insulin an die Membran rekrutiert (Skelettmuskel, Herz, Fettgewebe).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Hormone",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0048",
    "question": "Wo findet die β-Oxidation langkettiger (C14–C20) Fettsäuren statt?",
    "options": [
      "Zytosol",
      "Mitochondriale Matrix",
      "Glattes ER",
      "Peroxisomen ausschließlich"
    ],
    "correctIndex": 1,
    "explanation": "Die β-Oxidation verläuft überwiegend in der mitochondrialen Matrix; Carnitin-Shuttle ist notwendig.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0049",
    "question": "Welche Fettsäure ist für den Menschen essentiell?",
    "options": [
      "Palmitinsäure",
      "Stearinsäure",
      "Linolsäure (ω-6)",
      "Ölsäure (ω-9)"
    ],
    "correctIndex": 2,
    "explanation": "Linolsäure (ω-6) und α-Linolensäure (ω-3) sind essentiell, da Doppelbindungen nicht an allen Positionen eingeführt werden können.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Klinik"
    ]
  },
  {
    "id": "q-0050",
    "question": "Welche Aussage zu Ketonkörpern ist korrekt?",
    "options": [
      "Sie werden ausschließlich in Skelettmuskelzellen gebildet",
      "Sie entstehen im Lebercytoplasma aus freien Fettsäuren",
      "Sie entstehen in Lebermitochondrien und werden u. a. vom Gehirn genutzt",
      "Sie erhöhen den pH des Blutes durch Bikarbonatbildung"
    ],
    "correctIndex": 2,
    "explanation": "Ketonkörper entstehen in den Mitochondrien der Leber und dienen v. a. bei Fasten als Energiequelle, auch für das Gehirn.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Bioenergetik",
      "Lipide"
    ]
  },
  {
    "id": "q-0051",
    "question": "Welche Aussage zur DNA-Replikation ist richtig?",
    "options": [
      "Sie erfolgt 3'→5'",
      "Sie benötigt keine Primer",
      "Sie erfolgt 5'→3'",
      "Sie findet nur in der G1-Phase statt"
    ],
    "correctIndex": 2,
    "explanation": "DNA-Polymerasen synthetisieren immer in 5'→3'-Richtung und benötigen Primer.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0052",
    "question": "Was wird beim Spleißen eukaryotischer prä-mRNA entfernt?",
    "options": [
      "Exons",
      "Introns",
      "Promotor",
      "Poly-A-Schwanz"
    ],
    "correctIndex": 1,
    "explanation": "Beim RNA-Spleißen werden Introns entfernt und Exons zusammengefügt.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0053",
    "question": "Welche Bestandteile sind für eine PCR zwingend erforderlich?",
    "options": [
      "Primer, dNTPs und thermostabile DNA-Polymerase",
      "RNase, dNTPs und RNA-Ligase",
      "Antikörper, Substrat, Enzymkonjugat",
      "Methylasen, Restriktionsenzyme, ATP"
    ],
    "correctIndex": 0,
    "explanation": "PCR benötigt u.a. zwei Primer, dNTPs und eine thermostabile DNA-Polymerase (z. B. Taq).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Techniken",
      "Nukleinsäuren"
    ]
  },
  {
    "id": "q-0054",
    "question": "Welcher Hormonrezeptor-Typ vermittelt klassisch cAMP als second messenger?",
    "options": [
      "Insulinrezeptor (RTK)",
      "Glukagonrezeptor (GPCR)",
      "Thyroidhormonrezeptor (nukleär)",
      "IGF-1-Rezeptor (RTK)"
    ],
    "correctIndex": 1,
    "explanation": "Glukagon bindet an GPCRs, aktiviert Adenylylcyclase → cAMP steigt.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Hormone",
      "Enzyme"
    ]
  },
  {
    "id": "q-0055",
    "question": "Welche Aussage passt zum Cori-Zyklus?",
    "options": [
      "Laktat wird in der Muskulatur zu Glukose",
      "Laktat wird in der Leber zu Glukose",
      "Pyruvat wird im Fettgewebe zu Glykogen",
      "Glukose wird in der Leber zu Ketonkörpern"
    ],
    "correctIndex": 1,
    "explanation": "Im Cori-Zyklus wird extrahepatisch gebildetes Laktat in der Leber über die Glukoneogenese zu Glukose aufgebaut.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Bioenergetik"
    ]
  },
  {
    "id": "q-0056",
    "question": "Welche Aussage zur Eisenmangelanämie trifft zu?",
    "options": [
      "Normozytär, normochrom",
      "Makrozytär, hyperchrom",
      "Mikrozytär, hypochrom",
      "Makrozytär, hypochrom"
    ],
    "correctIndex": 2,
    "explanation": "Eisenmangel führt typischerweise zu mikrozytären, hypochromen Erythrozyten (niedriger MCV/MCH).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Blut",
      "Klinik"
    ]
  },
  {
    "id": "q-0057",
    "question": "Welcher Prozess findet im Zytosol statt?",
    "options": [
      "Citratzyklus",
      "β-Oxidation",
      "Fettsäuresynthese",
      "Atmungskette"
    ],
    "correctIndex": 2,
    "explanation": "Die Fettsäuresynthese ist ein zytosolischer Prozess; Citratzyklus und Atmungskette sind mitochondrial; β-Oxidation überwiegend mitochondrial (sehr langkettige auch peroxisomal)",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kompartimente",
      "Lipide"
    ]
  },
  {
    "id": "q-0058",
    "question": "Welcher Inhibitor blockiert Komplex I der Atmungskette?",
    "options": [
      "Oligomycin",
      "Antimycin A",
      "Rotenon",
      "Cyanid"
    ],
    "correctIndex": 2,
    "explanation": "Rotenon hemmt NADH-Dehydrogenase (Komplex I); Antimycin A hemmt Komplex III; Oligomycin die ATP-Synthase; Cyanid Komplex IV.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Bioenergetik",
      "Klinik"
    ]
  },
  {
    "id": "q-0059",
    "question": "Woraus werden Schilddrüsenhormone (T3/T4) synthetisiert?",
    "options": [
      "Tryptophan + Selen",
      "Tyrosin + Iod",
      "Glycin + Häm",
      "Cholesterin"
    ],
    "correctIndex": 1,
    "explanation": "T3/T4 entstehen durch Iodierung und Kopplung von Tyrosylresten des Thyreoglobulins.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Hormone",
      "Aminosäuren und Proteine"
    ]
  },
  {
    "id": "q-0060",
    "question": "Welche Aussage zur SDS-PAGE ist korrekt?",
    "options": [
      "Trennt Proteine ausschließlich anhand ihrer Nettoladung",
      "SDS normiert die Ladung pro Masse, Trennung erfolgt nach Größe",
      "Erfordert spezifische Antikörper für den Proteinnachweis",
      "Dient zur Größenbestimmung von Lipiden"
    ],
    "correctIndex": 1,
    "explanation": "SDS linearisiert Proteine und verleiht eine nahezu konstante negative Ladung pro Masse → Trennung nach Größe.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Techniken",
      "Aminosäuren und Proteine"
    ]
  },
  {
    "id": "q-0061",
    "question": "Was versteht man unter Signaltransduktion?",
    "options": [
      "Übertragung genetischer Information auf Proteine",
      "Weiterleitung und Umwandlung von Signalen in der Zelle",
      "Transport von Ionen durch Membrankanäle",
      "Bildung von Hormonen in endokrinen Organen"
    ],
    "correctIndex": 1,
    "explanation": "Signaltransduktion bezeichnet die Umwandlung eines extrazellulären Signals in eine spezifische intrazelluläre Antwort.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Hormone",
      "Enzyme"
    ]
  },
  {
    "id": "q-0062",
    "question": "Welche Aussage beschreibt den Unterschied zwischen primären und sekundären Botenstoffen?",
    "options": [
      "Primäre Botenstoffe sind intrazellulär aktiv, sekundäre extrazellulär",
      "Primäre Botenstoffe (Hormone) lösen intrazellulär die Bildung sekundärer Botenstoffe aus",
      "Sekundäre Botenstoffe sind Hormone im Blut, primäre sind Ionenkanäle",
      "Primäre Botenstoffe sind Enzyme, sekundäre Botenstoffe sind DNA-Abschnitte"
    ],
    "correctIndex": 1,
    "explanation": "Primäre Botenstoffe (z. B. Hormone) binden an Rezeptoren und lösen die Bildung sekundärer Botenstoffe wie cAMP oder Ca²⁺ aus.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Hormone",
      "Enzyme"
    ]
  },
  {
    "id": "q-0063",
    "question": "Welche Signalübertragungsform wirkt auf benachbarte Zellen?",
    "options": [
      "Endokrin",
      "Parakrin",
      "Autokrin",
      "Intrakrin"
    ],
    "correctIndex": 1,
    "explanation": "Parakrine Signalübertragung wirkt lokal auf benachbarte Zellen, im Gegensatz zur endokrinen, die über das Blut wirkt.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Hormone",
      "Enzyme"
    ]
  },
  {
    "id": "q-0064",
    "question": "Welche Signalübertragung wirkt auf die eigene Zelle zurück?",
    "options": [
      "Juxtakrin",
      "Autokrin",
      "Endokrin",
      "Synaptisch"
    ],
    "correctIndex": 1,
    "explanation": "Bei autokriner Signalübertragung reagiert die Zelle auf ihre eigenen Signale, z. B. Wachstumsfaktoren.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Hormone"
    ]
  },
  {
    "id": "q-0065",
    "question": "Welcher Rezeptortyp vermittelt schnelle, ionenflussabhängige Antworten?",
    "options": [
      "Ionotrope Rezeptoren",
      "Metabotrope Rezeptoren",
      "Nukleäre Rezeptoren",
      "Enzymgekoppelte Rezeptoren"
    ],
    "correctIndex": 0,
    "explanation": "Ionotrope Rezeptoren sind ligandengesteuerte Ionenkanäle und wirken sehr schnell, z. B. der nikotinische Acetylcholinrezeptor.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Hormone",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0066",
    "question": "Wie wirken G-Protein-gekoppelte Rezeptoren (GPCRs)?",
    "options": [
      "Sie binden direkt an DNA im Zellkern und regulieren Gene",
      "Sie aktivieren G-Proteine, die wiederum Second Messenger erzeugen",
      "Sie phosphorylieren Zielproteine direkt ohne Zwischenschritte",
      "Sie transportieren Liganden aktiv in das Zellinnere"
    ],
    "correctIndex": 1,
    "explanation": "GPCRs aktivieren über GTP-gebundene G-Proteine Enzyme wie Adenylatcyclase oder Phospholipase C, die Second Messenger erzeugen.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Hormone",
      "Enzyme"
    ]
  },
  {
    "id": "q-0067",
    "question": "Welches Molekül ist ein typischer Second Messenger?",
    "options": [
      "Insulin",
      "cAMP",
      "Glukose",
      "ATP"
    ],
    "correctIndex": 1,
    "explanation": "cAMP wird durch Adenylatcyclase aus ATP gebildet und dient als Second Messenger in vielen Signalwegen.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Hormone"
    ]
  },
  {
    "id": "q-0068",
    "question": "Welche Enzymklasse deaktiviert phosphorylierte Proteine?",
    "options": [
      "Kinasen",
      "Phosphatasen",
      "Ligase",
      "Synthase"
    ],
    "correctIndex": 1,
    "explanation": "Phosphatasen entfernen Phosphatgruppen und beenden so häufig Signalkaskaden.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Hormone"
    ]
  },
  {
    "id": "q-0069",
    "question": "Welches Enzym wandelt ATP in cAMP um?",
    "options": [
      "Adenylatcyclase",
      "Phosphodiesterase",
      "ATP-Synthase",
      "Guanylatcyclase"
    ],
    "correctIndex": 0,
    "explanation": "Adenylatcyclase katalysiert die Umwandlung von ATP zu cAMP, einem wichtigen Second Messenger.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Hormone"
    ]
  },
  {
    "id": "q-0070",
    "question": "Welches der folgenden Hormone wirkt über einen Rezeptor mit Tyrosinkinase-Aktivität?",
    "options": [
      "Insulin",
      "Adrenalin",
      "Glukagon",
      "Cortisol"
    ],
    "correctIndex": 0,
    "explanation": "Der Insulinrezeptor ist eine Rezeptor-Tyrosinkinase, die durch Autophosphorylierung intrazelluläre Signalwege aktiviert.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Hormone",
      "Enzyme"
    ]
  },
  {
    "id": "q-0071",
    "question": "Welches Enzym wird durch cAMP aktiviert?",
    "options": [
      "Proteinkinase A",
      "Proteinkinase C",
      "Phospholipase A2",
      "Calmodulin"
    ],
    "correctIndex": 0,
    "explanation": "cAMP aktiviert die Proteinkinase A (PKA), welche Zielproteine phosphoryliert und die Zellantwort vermittelt.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Hormone"
    ]
  },
  {
    "id": "q-0072",
    "question": "Was beschreibt Signalverstärkung (Amplifikation)?",
    "options": [
      "Verstärkung der Affinität zwischen Ligand und Rezeptor",
      "Ein Signal aktiviert viele nachgeschaltete Moleküle (Kaskade)",
      "Abschwächung der Zellantwort durch Rezeptor-Desensitivierung",
      "Abbau des Liganden durch extrazelluläre Enzyme"
    ],
    "correctIndex": 1,
    "explanation": "Ein aktivierter Rezeptor kann mehrere G-Proteine aktivieren, die wiederum viele Enzymmoleküle anregen – das verstärkt das Signal enorm.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Hormone"
    ]
  },
  {
    "id": "q-0073",
    "question": "Wie wird ein G-Protein inaktiviert?",
    "options": [
      "Durch Bindung von ATP",
      "Durch GTP-Hydrolyse zu GDP",
      "Durch Phosphorylierung",
      "Durch Bindung an DNA"
    ],
    "correctIndex": 1,
    "explanation": "G-Proteine besitzen eine intrinsische GTPase-Aktivität, die GTP zu GDP hydrolysiert und das Protein inaktiviert.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Hormone"
    ]
  },
  {
    "id": "q-0074",
    "question": "Welcher Botenstoff vermittelt die Vasodilatation über cGMP?",
    "options": [
      "Adrenalin (über β₂-Rezeptoren und cAMP)",
      "Stickstoffmonoxid (NO, über Guanylatcyclase)",
      "Cortisol (über intrazelluläre Kernrezeptoren)",
      "Histamin (über H₁-Rezeptoren an Gefäßen)"
    ],
    "correctIndex": 1,
    "explanation": "NO aktiviert die lösliche Guanylatzyklase, die cGMP bildet; cGMP aktiviert PKG und führt zur Relaxation der glatten Muskulatur.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Hormone",
      "Blut"
    ]
  },
  {
    "id": "q-0075",
    "question": "Welche Aussage beschreibt Desensitivierung eines GPCRs?",
    "options": [
      "Der Rezeptor wird durch GRK-Phosphorylierung inaktiviert",
      "Der Ligand wird durch extrazelluläre Enzyme abgebaut",
      "Das G-Protein bleibt dauerhaft im aktiven GTP-Zustand",
      "cAMP-Spiegel sinken spontan ohne aktiven Abbau"
    ],
    "correctIndex": 0,
    "explanation": "GPCR-Kinasen phosphorylieren aktivierte Rezeptoren; β-Arrestine binden und verhindern weitere Signalübertragung.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Hormone"
    ]
  },
  {
    "id": "q-0076",
    "question": "Welche Funktion hat die Proteinkinase C (PKC)?",
    "options": [
      "Phosphoryliert Zielproteine nach Aktivierung durch DAG und Ca²⁺",
      "Spaltet Phospholipide zu Second Messengern in der Membran",
      "Aktiviert direkt die Adenylatcyclase über Gs-Proteine",
      "Hydrolysiert GTP an der Gα-Untereinheit des G-Proteins"
    ],
    "correctIndex": 0,
    "explanation": "PKC wird durch DAG und Ca²⁺ aktiviert und reguliert viele zelluläre Prozesse wie Wachstum oder Sekretion.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Hormone",
      "Lipide"
    ]
  },
  {
    "id": "q-0077",
    "question": "Welche sekundären Botenstoffe entstehen aus PIP₂?",
    "options": [
      "DAG und IP₃",
      "cAMP und cGMP",
      "ATP und ADP",
      "Ca²⁺ und Cl⁻"
    ],
    "correctIndex": 0,
    "explanation": "Die Phospholipase C spaltet PIP₂ in DAG und IP₃; beide wirken als Second Messenger.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Lipide"
    ]
  },
  {
    "id": "q-0078",
    "question": "Welches Enzym baut cAMP ab und beendet so das Signal?",
    "options": [
      "Phosphodiesterase",
      "Adenylatcyclase",
      "Proteinkinase A (PKA)",
      "Guanylatcyclase"
    ],
    "correctIndex": 0,
    "explanation": "Phosphodiesterasen hydrolysieren cAMP zu AMP und beenden so den Signalweg.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Hormone"
    ]
  },
  {
    "id": "q-0079",
    "question": "Welche Aussage beschreibt die Wirkung von Adrenalin auf Blutgefäße korrekt?",
    "options": [
      "Adrenalin bewirkt an allen Gefäßen ausschließlich Vasodilatation",
      "Adrenalin verursacht je nach Rezeptor Vasokonstriktion oder Vasodilatation",
      "Adrenalin hemmt die Glykogenolyse in Leber und Skelettmuskel",
      "Adrenalin aktiviert ausschließlich β₂-Rezeptoren an Blutgefäßen"
    ],
    "correctIndex": 1,
    "explanation": "Adrenalin aktiviert α₁-Rezeptoren (Vasokonstriktion) oder β₂-Rezeptoren (Vasodilatation) – je nach Gewebe.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Hormone",
      "Blut"
    ]
  },
  {
    "id": "q-0080",
    "question": "Welcher Rezeptor-Typ vermittelt die Wirkung von Cortisol?",
    "options": [
      "G-Protein-gekoppelter Rezeptor",
      "Ionotroper Rezeptor",
      "Intrazellulärer Kernrezeptor",
      "Enzymgekoppelter Rezeptor"
    ],
    "correctIndex": 2,
    "explanation": "Cortisol diffundiert in die Zelle, bindet an einen intrazellulären Rezeptor und beeinflusst die Genexpression.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Hormone",
      "Nukleinsäuren"
    ]
  },
  {
    "id": "q-0081",
    "question": "Welcher Rezeptorweg führt typischerweise zur Aktivierung von MAP-Kinasen (ERK)?",
    "options": [
      "GPCR → Gs → cAMP → PKA-Aktivierung",
      "Rezeptor-Tyrosinkinase → Ras → Raf → MEK → ERK",
      "Nukleärer Rezeptor → direkte Genbindung im Kern",
      "Guanylatzyklase → cGMP → PKG-Aktivierung"
    ],
    "correctIndex": 1,
    "explanation": "RTKs rekrutieren Adapter (z. B. Grb2/SOS), aktivieren Ras und die Kinasekaskade Raf→MEK→ERK.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Aminosäuren und Proteine"
    ]
  },
  {
    "id": "q-0082",
    "question": "Welche G-Protein-Untereinheit bindet und hydrolysiert GTP?",
    "options": [
      "Gα",
      "Gβ",
      "Gγ",
      "Alle Untereinheiten"
    ],
    "correctIndex": 0,
    "explanation": "Die Gα-Untereinheit besitzt die GTPase-Aktivität und schaltet damit das Signal an/aus.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Hormone"
    ]
  },
  {
    "id": "q-0083",
    "question": "Welcher Second Messenger wird durch Phospholipase C aus PIP₂ freigesetzt und erhöht Ca²⁺ aus dem ER?",
    "options": [
      "cAMP",
      "IP₃",
      "DAG",
      "cGMP"
    ],
    "correctIndex": 1,
    "explanation": "PLC spaltet PIP₂ zu DAG und IP₃; IP₃ öffnet Ca²⁺-Kanäle am ER und erhöht das cytosolische Ca²⁺.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0084",
    "question": "Welche Aussage trifft auf die JAK/STAT-Signalübertragung zu?",
    "options": [
      "Aktiviert die Adenylatcyclase direkt über Gs-Proteine",
      "Wird ausschließlich durch G-Protein-gekoppelte Rezeptoren ausgelöst",
      "Wird oft durch Zytokinrezeptoren ausgelöst → JAK-Phosphorylierung → STAT",
      "Erhöht cGMP in glatter Muskulatur über lösliche Guanylatcyclase"
    ],
    "correctIndex": 2,
    "explanation": "Viele Zytokinrezeptoren rekrutieren JAKs, die STATs phosphorylieren → Transkriptionsantwort.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Hormone",
      "Nukleinsäuren"
    ]
  },
  {
    "id": "q-0085",
    "question": "Welcher Mechanismus beendet typischerweise die cAMP-Signalisierung?",
    "options": [
      "Aktivierung der PKA durch cAMP-Bindung",
      "Hydrolyse von cAMP zu AMP durch Phosphodiesterasen",
      "Freisetzung von IP₃ aus PIP₂ durch PLC",
      "Öffnung spannungsabhängiger Ca²⁺-Kanäle an der Membran"
    ],
    "correctIndex": 1,
    "explanation": "Phosphodiesterasen bauen cAMP zu AMP ab und terminieren die PKA-Aktivierung.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Hormone"
    ]
  },
  {
    "id": "q-0086",
    "question": "Welche Aussage beschreibt Downregulation eines Rezeptors korrekt?",
    "options": [
      "Verstärkte Ligandenbindung durch erhöhte Rezeptoraffinität",
      "Verminderte Rezeptorzahl durch Internalisierung und Abbau",
      "Aktivierung der Proteinkinase C (PKC) durch DAG",
      "Erhöhte GTP-Bindung an die Gα-Untereinheit des G-Proteins"
    ],
    "correctIndex": 1,
    "explanation": "Nach Aktivierung werden Rezeptoren oft internalisiert und abgebaut oder recycelt → geringere Zellantwort.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kompartimente",
      "Hormone"
    ]
  },
  {
    "id": "q-0087",
    "question": "Welcher Rezeptortyp vermittelt die Wirkung von Schilddrüsenhormonen?",
    "options": [
      "G-Protein-gekoppelter Rezeptor (GPCR) an der Zellmembran",
      "Ligandengesteuerter Ionenkanal (ionotrop) an der Membran",
      "Rezeptor-Tyrosinkinase mit intrazellulärer Kinasedomäne",
      "Intrazellulärer/nukleärer Rezeptor (Kernrezeptor)"
    ],
    "correctIndex": 3,
    "explanation": "T3/T4 passieren die Membran und binden nukleäre Rezeptoren, die die Genexpression regulieren.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Hormone",
      "Nukleinsäuren"
    ]
  },
  {
    "id": "q-0088",
    "question": "Welcher Effekt ist typisch für β₂-Adrenozeptor-Aktivierung im Bronchialsystem?",
    "options": [
      "Bronchokonstriktion",
      "Bronchodilatation",
      "Vasokonstriktion",
      "Bradykardie"
    ],
    "correctIndex": 1,
    "explanation": "β₂-Rezeptoraktivierung (Gs/cAMP/PKA) führt zur Relaxation der glatten Bronchialmuskulatur → Bronchodilatation.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Hormone",
      "Blut"
    ]
  },
  {
    "id": "q-0089",
    "question": "Welche Lipidkomponente ist direkte Vorstufe für DAG und IP₃?",
    "options": [
      "Cholesterin",
      "PIP₂",
      "Sphingomyelin",
      "Cardiolipin"
    ],
    "correctIndex": 1,
    "explanation": "PIP₂ wird durch PLC gespalten → DAG (Membran) und IP₃ (löslich).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Enzyme"
    ]
  },
  {
    "id": "q-0090",
    "question": "Welche Kinase wird primär durch Ca²⁺/Calmodulin aktiviert?",
    "options": [
      "Proteinkinase A (PKA)",
      "Proteinkinase C (PKC)",
      "CaMK (Ca²⁺/Calmodulin-abhängige Kinase)",
      "Akt (Proteinkinase B)"
    ],
    "correctIndex": 2,
    "explanation": "Ca²⁺-Anstieg bindet Calmodulin und aktiviert CaMKs, die Zielproteine phosphorylieren.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Hormone"
    ]
  },
  {
    "id": "q-0091",
    "question": "Welches Molekül aktiviert die lösliche Guanylatzyklase in Gefäßmuskelzellen?",
    "options": [
      "NO",
      "CO₂",
      "Adrenalin",
      "Angiotensin II"
    ],
    "correctIndex": 0,
    "explanation": "NO diffundiert in die Zelle, aktiviert sGC → cGMP↑ → PKG → Vasodilatation (klinische Relevanz: Nitroglycerin).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Hormone",
      "Blut"
    ]
  },
  {
    "id": "q-0092",
    "question": "Welche Aussage beschreibt Crosstalk zwischen Signalwegen?",
    "options": [
      "Signalwege laufen vollständig isoliert ohne gegenseitige Beeinflussung",
      "Zwei oder mehr Signalwege beeinflussen sich gegenseitig",
      "Ausschließlich GPCRs können RTK-Signalwege transaktivieren",
      "Ausschließlich RTKs können GPCR-Signalwege hemmen"
    ],
    "correctIndex": 1,
    "explanation": "Signalnetzwerke interagieren; z. B. PKA-Phosphorylierungen können MAPK-Signale modulieren (positiv/negativ).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Hormone"
    ]
  },
  {
    "id": "q-0093",
    "question": "Welche G-Protein-Familie hemmt typischerweise die Adenylatcyclase?",
    "options": [
      "Gq",
      "Gs",
      "Gi/o",
      "G12/13"
    ],
    "correctIndex": 2,
    "explanation": "Gi koppelt inhibitorisch an Adenylatcyclase → cAMP↓ und geringere PKA-Aktivität.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Hormone"
    ]
  },
  {
    "id": "q-0094",
    "question": "Welche Aussage zu Insulin ist korrekt?",
    "options": [
      "Insulin wirkt über einen G-Protein-gekoppelten Rezeptor",
      "Insulin erhöht den intrazellulären cAMP-Spiegel",
      "Insulin aktiviert eine Rezeptor-Tyrosinkinase (RTK)",
      "Insulin bindet an intrazelluläre Kernrezeptoren"
    ],
    "correctIndex": 2,
    "explanation": "Der Insulinrezeptor ist eine RTK; Autophosphorylierung → PI3K/Akt- und MAPK-Wege, Glukoseaufnahme↑ (GLUT4 in Muskel/Fett).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Hormone",
      "Enzyme"
    ]
  },
  {
    "id": "q-0095",
    "question": "Welcher Schritt erfolgt direkt nach Ligandenbindung an einen GPCR?",
    "options": [
      "GTP-Bindung an Gα und Dissoziation des Gβγ-Dimers",
      "Autophosphorylierung des aktivierten Rezeptors an Tyrosin",
      "Direkte Aktivierung von Proteinkinase G (PKG)",
      "Translokation des Rezeptors in den Zellkern"
    ],
    "correctIndex": 0,
    "explanation": "Aktivierte GPCRs fördern GDP→GTP-Austausch an Gα; Gα-GTP und Gβγ aktivieren Effektorenzyme/Kanäle.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0096",
    "question": "Welcher Befund passt zu α₁-Adrenozeptor-Aktivierung in Gefäßen?",
    "options": [
      "Vasodilatation über cAMP (β₂-Adrenozeptor-Effekt)",
      "Vasokonstriktion über Gq → PLC → IP₃/DAG → Ca²⁺↑",
      "Keine Änderung des Gefäßtonus (neutraler Effekt)",
      "Erhöhtes cGMP durch NO-Synthase-Aktivierung"
    ],
    "correctIndex": 1,
    "explanation": "α₁ koppelt über Gq → PLC → IP₃/DAG; Ca²⁺↑ führt in glatter Muskulatur zur Kontraktion (Vasokonstriktion).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Hormone",
      "Blut"
    ]
  },
  {
    "id": "q-0097",
    "question": "Welche Aussage zu Rezeptor-Desensitivierung durch β-Arrestin ist korrekt?",
    "options": [
      "Verstärkt G-Protein-Signale",
      "Fördert Rezeptorinternalisierung",
      "Erhöht cAMP-Spiegel",
      "Aktiviert direkt die Adenylatcyclase"
    ],
    "correctIndex": 1,
    "explanation": "Nach GRK-vermittelter Phosphorylierung bindet β-Arrestin, verhindert weitere G-Protein-Kopplung und fördert Endozytose des Rezeptors.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kompartimente",
      "Enzyme"
    ]
  },
  {
    "id": "q-0098",
    "question": "Welche Kinase ist zentral im PI3K/Akt-Signalweg für Zellüberleben?",
    "options": [
      "PKA",
      "Akt (PKB)",
      "MAPK (ERK)",
      "CaMKII"
    ],
    "correctIndex": 1,
    "explanation": "PI3K generiert PIP₃, rekrutiert PDK1/Akt; Akt fördert Überleben/Wachstum (z. B. mTOR-Aktivierung).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Aminosäuren und Proteine"
    ]
  },
  {
    "id": "q-0099",
    "question": "Welche Aussage zur Cortisolwirkung ist korrekt?",
    "options": [
      "Sekunden-schnelle Effekte durch direkte Öffnung von Ionenkanälen",
      "Bindet an G-Protein-gekoppelte Rezeptoren in der Zellmembran",
      "Reguliert die Genexpression über Hormon-Response-Elemente (HREs)",
      "Aktiviert die Adenylatcyclase direkt über Gs-Proteine"
    ],
    "correctIndex": 2,
    "explanation": "Cortisol bindet intrazellulär, der Komplex wirkt als Transkriptionsfaktor an Hormone-Response-Elementen (HREs).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Hormone",
      "Nukleinsäuren"
    ]
  },
  {
    "id": "q-0100",
    "question": "Welcher Schritt beendet ein Gq/PLC/IP₃-Signal typischerweise?",
    "options": [
      "Aktivierung der Adenylatcyclase durch Gα",
      "Abbau von IP₃ und Ca²⁺-Rücktransport ins ER durch SERCA",
      "Verstärkte DAG-Bildung aus Phosphatidylcholin",
      "Aktivierung einer Rezeptor-Tyrosinkinase (RTK)"
    ],
    "correctIndex": 1,
    "explanation": "IP₃ wird abgebaut, Ca²⁺-Pumpen (SERCA) senken das Cytosol-Ca²⁺ und terminieren die Antwort.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0101",
    "question": "Welche nicht kovalente Wechselwirkung ist einzeln betrachtet typischerweise am stärksten?",
    "options": [
      "Ionenbindung",
      "Van-der-Waals-Kraft",
      "Wasserstoffbrücke",
      "Hydrophobe Wechselwirkung"
    ],
    "correctIndex": 0,
    "explanation": "Einzelne Ionenbindungen sind energetisch stärker als einzelne H-Brücken, doch die Summe vieler H-Brücken und hydrophober Wechselwirkungen kann die Stabilität eines Proteins maßgeblich bestimmen.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine"
    ]
  },
  {
    "id": "q-0102",
    "question": "Was beschreibt die Primärstruktur eines Proteins?",
    "options": [
      "Die Faltung der Polypeptidkette in α-Helices und β-Faltblätter",
      "Die Sequenz der Aminosäuren in der Polypeptidkette",
      "Die dreidimensionale Anordnung mehrerer Untereinheiten",
      "Die Anordnung der hydrophoben Seitenketten im Proteininneren"
    ],
    "correctIndex": 1,
    "explanation": "Die Primärstruktur ist die lineare Aminosäuresequenz, die durch Peptidbindungen kovalent verbunden ist.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine"
    ]
  },
  {
    "id": "q-0103",
    "question": "Welche der folgenden Aussagen zur Peptidbindung trifft zu?",
    "options": [
      "Sie ist eine Esterbindung zwischen zwei Aminosäuren",
      "Sie ist frei drehbar und vollständig unpolar",
      "Sie besitzt partiellen Doppelbindungscharakter und ist planar",
      "Sie wird ausschließlich durch Disulfidbrücken stabilisiert"
    ],
    "correctIndex": 2,
    "explanation": "Die Peptidbindung hat partiellen Doppelbindungscharakter, wodurch sie starr und planar ist und nicht frei rotieren kann.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Enzyme"
    ]
  },
  {
    "id": "q-0104",
    "question": "Welche Wechselwirkungen stabilisieren die Sekundärstruktur eines Proteins?",
    "options": [
      "Disulfidbrücken zwischen Cysteinresten",
      "Ionenbindungen zwischen geladenen Seitenketten",
      "Wasserstoffbrücken zwischen Peptidbindungen",
      "Hydrophobe Wechselwirkungen im Proteininneren"
    ],
    "correctIndex": 2,
    "explanation": "Sekundärstrukturen wie α-Helices und β-Faltblätter werden durch Wasserstoffbrücken zwischen CO- und NH-Gruppen der Peptidbindungen stabilisiert.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine"
    ]
  },
  {
    "id": "q-0105",
    "question": "Was unterscheidet α-Helix und β-Faltblatt grundlegend voneinander?",
    "options": [
      "Die α-Helix entsteht durch Disulfidbindungen, das β-Faltblatt durch Ionenbindungen",
      "Die α-Helix ist eine rechtsgängige Spirale, das β-Faltblatt besteht aus gestreckten Strängen",
      "Beide Strukturen sind ausschließlich antiparallel angeordnet",
      "Das β-Faltblatt enthält im Gegensatz zur α-Helix keine Wasserstoffbrücken"
    ],
    "correctIndex": 1,
    "explanation": "In der α-Helix stabilisieren intramolekulare H-Brücken eine Spiralstruktur, während β-Faltblätter aus nebeneinander liegenden, H-gebundenen Polypeptidsträngen bestehen.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine"
    ]
  },
  {
    "id": "q-0106",
    "question": "Welche Aussage zur Tertiärstruktur ist richtig?",
    "options": [
      "Sie beschreibt ausschließlich α-Helices und β-Faltblätter einer Kette",
      "Sie beruht ausschließlich auf kovalenten Bindungen wie Disulfidbrücken",
      "Sie beschreibt die räumliche Gesamtanordnung einer Polypeptidkette",
      "Sie entspricht der linearen Abfolge der Aminosäuren im Protein"
    ],
    "correctIndex": 2,
    "explanation": "Die Tertiärstruktur ist die dreidimensionale Anordnung der gesamten Polypeptidkette, stabilisiert durch H-Brücken, hydrophobe, ionische und Disulfid-Wechselwirkungen.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine"
    ]
  },
  {
    "id": "q-0107",
    "question": "Was ist charakteristisch für die Quartärstruktur eines Proteins?",
    "options": [
      "Die Ausbildung von Peptidbindungen zwischen den Aminosäureresten",
      "Die räumliche Anordnung mehrerer Polypeptidketten zu einem Komplex",
      "Die Ausbildung einer α-Helix innerhalb einer einzelnen Untereinheit",
      "Das Vorliegen von Disulfidbrücken zwischen benachbarten Resten"
    ],
    "correctIndex": 1,
    "explanation": "Die Quartärstruktur beschreibt die räumliche Anordnung mehrerer Untereinheiten (z. B. Hämoglobin) zu einem funktionellen Gesamtprotein.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine"
    ]
  },
  {
    "id": "q-0108",
    "question": "Welche Aussage zur Funktion des Ubiquitin-Proteasom-Systems (UPS) ist korrekt?",
    "options": [
      "Es baut extrazelluläre Proteine durch Sekretion von Proteasen ab",
      "Es markiert Proteine durch K48-verknüpfte Ubiquitin-Ketten für das Proteasom",
      "Es dient der Proteinfaltung im endoplasmatischen Retikulum (wie Chaperone)",
      "Es degradiert RNA-Moleküle im Cytosol durch cytoplasmatische Ribonukleasen"
    ],
    "correctIndex": 1,
    "explanation": "Das UPS markiert kurzlebige oder fehlerhafte Proteine mit K48-verknüpften Ubiquitin-Ketten, die deren Abbau durch das 26S-Proteasom einleiten.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kompartimente",
      "Aminosäuren und Proteine",
      "Klinik"
    ]
  },
  {
    "id": "q-0109",
    "question": "Welche Aussage zur Funktion von Enzymen trifft zu?",
    "options": [
      "Sie verändern die Lage des chemischen Gleichgewichts.",
      "Sie senken die Aktivierungsenergie einer Reaktion.",
      "Sie werden während der Reaktion verbraucht.",
      "Sie erhöhen die freie Enthalpie der Produkte."
    ],
    "correctIndex": 1,
    "explanation": "Enzyme senken die Aktivierungsenergie einer Reaktion und beschleunigen so die Gleichgewichtseinstellung, ohne das Gleichgewicht selbst zu verändern.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme"
    ]
  },
  {
    "id": "q-0110",
    "question": "Welche der folgenden Aussagen beschreibt die Induced-Fit-Theorie?",
    "options": [
      "Das Substrat passt starr wie ein Schlüssel in das aktive Zentrum",
      "Das Enzym ändert seine Konformation bei Substratbindung (Induced Fit)",
      "Das Enzym wird während der Reaktion irreversibel verändert",
      "Die Enzymaktivität hängt ausschließlich von der Temperatur ab"
    ],
    "correctIndex": 1,
    "explanation": "Die Induced-Fit-Theorie besagt, dass das Enzym seine Struktur an das Substrat anpasst, um den Übergangszustand optimal zu stabilisieren.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme"
    ]
  },
  {
    "id": "q-0111",
    "question": "Welche Größe beschreibt der Km-Wert der Michaelis-Menten-Gleichung?",
    "options": [
      "Die maximale Reaktionsgeschwindigkeit eines Enzyms",
      "Die Substratkonzentration bei halbmaximaler Geschwindigkeit",
      "Die Aktivierungsenergie der Reaktion",
      "Das Verhältnis von Produkt- zu Substratkonzentration im Gleichgewicht"
    ],
    "correctIndex": 1,
    "explanation": "Km ist die Substratkonzentration, bei der die Reaktionsgeschwindigkeit die Hälfte von Vmax erreicht, und reflektiert die Affinität des Enzyms zum Substrat.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme"
    ]
  },
  {
    "id": "q-0112",
    "question": "Welche Aussage zur Enzymhemmung trifft auf die kompetitive Hemmung zu?",
    "options": [
      "Der Inhibitor bindet kovalent an das Enzym.",
      "Km steigt, Vmax bleibt unverändert.",
      "Km bleibt konstant, Vmax sinkt.",
      "Der Inhibitor bindet an eine allosterische Stelle."
    ],
    "correctIndex": 1,
    "explanation": "Bei kompetitiver Hemmung konkurriert der Inhibitor mit dem Substrat um das aktive Zentrum, wodurch Km steigt, Vmax aber unverändert bleibt.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme"
    ]
  },
  {
    "id": "q-0113",
    "question": "Welche Aussage zur nicht-kompetitiven Hemmung ist richtig?",
    "options": [
      "Der Inhibitor verringert die Affinität des Enzyms zum Substrat, ohne die maximale Geschwindigkeit zu verändern.",
      "Der Inhibitor bindet an das aktive Zentrum und blockiert es irreversibel.",
      "Der Inhibitor bindet unabhängig vom Substrat an eine andere Stelle und verringert Vmax.",
      "Der Inhibitor wird im Enzym-Substrat-Komplex umgesetzt."
    ],
    "correctIndex": 2,
    "explanation": "Nicht-kompetitive Inhibitoren binden an eine separate Stelle und verringern die maximale Reaktionsgeschwindigkeit (Vmax), ohne Km zu verändern.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme"
    ]
  },
  {
    "id": "q-0114",
    "question": "Welche Funktion hat die Carboanhydrase im menschlichen Körper?",
    "options": [
      "Abbau von Glukose zu CO₂ und Wasser im Cytosol",
      "Hydratisierung von CO₂ zu H₂CO₃ zur pH-Regulation",
      "Oxidation von Pyruvat zu Acetyl-CoA in Mitochondrien",
      "Bildung von Ammonium aus Glutamat im Harnstoffzyklus"
    ],
    "correctIndex": 1,
    "explanation": "Die Carboanhydrase katalysiert die reversible Umsetzung von CO₂ zu Kohlensäure und ist wichtig für den pH-Wert im Blut und die CO₂-Ausscheidung.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Klinik"
    ]
  },
  {
    "id": "q-0115",
    "question": "Welche Aussage zur Alanin-Aminotransferase (ALT) ist korrekt?",
    "options": [
      "Sie katalysiert den Abbau von Fettsäuren in den Mitochondrien",
      "Sie überträgt Aminogruppen zwischen Aminosäuren und Ketosäuren",
      "Sie spaltet Peptidbindungen im Cytoplasma hydrolytisch",
      "Sie synthetisiert Harnstoff aus NH₃ und CO₂ im Leberparenchym"
    ],
    "correctIndex": 1,
    "explanation": "Die Alanin-Aminotransferase überträgt Aminogruppen und ist diagnostisch relevant bei Lebererkrankungen, da erhöhte Serumwerte Zellschäden anzeigen.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Klinik"
    ]
  },
  {
    "id": "q-0116",
    "question": "Was bewirkt eine allosterische Aktivierung eines Enzyms?",
    "options": [
      "Verringerung der Substrataffinität durch Konformationsänderung",
      "Erhöhung der Enzymaktivität durch allosterische Konformationsänderung",
      "Irreversible kovalente Bindung des Aktivators ans Enzym",
      "Senkung der maximalen Reaktionsgeschwindigkeit (Vmax)"
    ],
    "correctIndex": 1,
    "explanation": "Allosterische Aktivatoren stabilisieren die aktive (R-)Konformation des Enzyms und erhöhen so seine Aktivität.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme"
    ]
  },
  {
    "id": "q-0117",
    "question": "Welche Aussage beschreibt am besten den Unterschied zwischen reversibler und irreversibler Enzymhemmung?",
    "options": [
      "Reversible Hemmstoffe binden kovalent, irreversible elektrostatisch",
      "Reversible Hemmstoffe lösen sich wieder, irreversible binden dauerhaft",
      "Nur reversible Hemmstoffe verändern das aktive Zentrum des Enzyms",
      "Irreversible Hemmung wird durch hohe Substratkonzentration aufgehoben"
    ],
    "correctIndex": 1,
    "explanation": "Reversible Inhibitoren binden nicht-kovalent und können sich wieder lösen, während irreversible Inhibitoren das Enzym dauerhaft inaktivieren, meist durch kovalente Bindung.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme"
    ]
  },
  {
    "id": "q-0118",
    "question": "Was ist ein charakteristisches Merkmal der allosterischen Regulation?",
    "options": [
      "Sie erfolgt ausschließlich über kovalente Bindungen am aktiven Zentrum",
      "Sie wirkt über Bindungsstellen außerhalb des aktiven Zentrums",
      "Sie ist vollständig unabhängig von der Substratkonzentration",
      "Sie betrifft ausschließlich Enzyme des Citratzyklus"
    ],
    "correctIndex": 1,
    "explanation": "Allosterische Effektoren binden an spezifische Stellen außerhalb des aktiven Zentrums und beeinflussen dadurch die Enzymaktivität positiv oder negativ.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme"
    ]
  },
  {
    "id": "q-0119",
    "question": "Welche Aussage zur Kooperativität bei Enzymen trifft zu?",
    "options": [
      "Die Bindung eines Substrats erleichtert die Bindung weiterer Substrate",
      "Kooperativität beschreibt die irreversible Hemmung durch Produktfeedback",
      "Kooperativität senkt die Substrataffinität bei steigender Konzentration",
      "Kooperative Enzyme zeigen eine hyperbolische Michaelis-Menten-Kurve"
    ],
    "correctIndex": 0,
    "explanation": "Kooperativität führt zu einer sigmoiden Sättigungskurve, klassisches Beispiel ist Hämoglobin; kooperative Enzyme zeigen ein ähnliches Verhalten.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme"
    ]
  },
  {
    "id": "q-0120",
    "question": "Welche Aussage beschreibt die Funktion der Amidophosphoribosyltransferase korrekt?",
    "options": [
      "Sie katalysiert den Abbau von Purinbasen zu Harnsäure (Xanthinoxidase)",
      "Sie ist das Schlüsselenzym der Purinbiosynthese und allosterisch reguliert",
      "Sie synthetisiert PRPP aus Ribose-5-phosphat und ATP (PRPP-Synthetase)",
      "Sie ist das Schlüsselenzym der Pyrimidinbiosynthese im Cytosol (CPS II)"
    ],
    "correctIndex": 1,
    "explanation": "Die Amidophosphoribosyltransferase katalysiert den zweiten Schritt (geschwindigkeitsbestimmend) der Purinbiosynthese und wird durch AMP, GMP und IMP allosterisch gehemmt.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Klinik"
    ]
  },
  {
    "id": "q-0121",
    "question": "Welche Aussage zur thermodynamischen Rolle von Enzymen ist korrekt?",
    "options": [
      "Enzyme verändern die Gibbs’sche freie Energie der Reaktion (ΔG).",
      "Enzyme beschleunigen Reaktionen, ohne ΔG zu beeinflussen.",
      "Enzyme machen endergone Reaktionen spontan.",
      "Enzyme erhöhen die Aktivierungsenergie."
    ],
    "correctIndex": 1,
    "explanation": "Enzyme senken die Aktivierungsenergie, beeinflussen jedoch nicht die freie Enthalpie (ΔG) und damit nicht die Lage des Gleichgewichts.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme"
    ]
  },
  {
    "id": "q-0122",
    "question": "Welche der folgenden Aussagen zur Disulfidbrücke ist korrekt?",
    "options": [
      "Sie entsteht durch Oxidation zweier Cysteinreste.",
      "Sie ist eine nicht-kovalente Bindung.",
      "Sie stabilisiert ausschließlich Sekundärstrukturen.",
      "Sie ist nur in Cytosolproteinen zu finden."
    ],
    "correctIndex": 0,
    "explanation": "Disulfidbrücken sind kovalente Bindungen zwischen zwei Cysteinresten, die durch Oxidation der Thiolgruppen entstehen und Proteine stabilisieren.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Klinik"
    ]
  },
  {
    "id": "q-0123",
    "question": "Welche Eigenschaft der α-Helix ermöglicht ihre Stabilität?",
    "options": [
      "Hydrophobe Wechselwirkungen zwischen den Aminosäureseitenketten",
      "Wasserstoffbrücken zwischen den C=O- und N-H-Gruppen jeder vierten Aminosäure",
      "Ionenbindungen zwischen entgegengesetzt geladenen Peptidgruppen",
      "Kovalente Bindungen zwischen den aufeinanderfolgenden Helixwindungen"
    ],
    "correctIndex": 1,
    "explanation": "In der α-Helix stabilisieren H-Brücken zwischen CO- und NH-Gruppen jeder vierten Aminosäure die spiralige Struktur.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine"
    ]
  },
  {
    "id": "q-0124",
    "question": "Welche Funktion hat Ubiquitin in der Zelle?",
    "options": [
      "Es dient der Synthese neuer Proteine am Ribosom",
      "Es markiert Proteine für den sekretorischen Weg",
      "Es markiert Proteine für den proteasomalen Abbau im 26S-Proteasom",
      "Es aktiviert Proteasen in den Lysosomen durch Konformationsänderung"
    ],
    "correctIndex": 2,
    "explanation": "Ubiquitin wird kovalent an Zielproteine gebunden und signalisiert deren Abbau im 26S-Proteasom.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kompartimente",
      "Aminosäuren und Proteine",
      "Klinik"
    ]
  },
  {
    "id": "q-0125",
    "question": "Welche Aussage beschreibt die Funktion der Caspasen korrekt?",
    "options": [
      "Sie sind an der DNA-Synthese und Replikation im Zellkern beteiligt",
      "Sie spielen eine zentrale Rolle im programmierten Zelltod (Apoptose)",
      "Sie aktivieren die Proteasomen durch direkte Phosphorylierung im Kern",
      "Sie katalysieren die Harnstoffbildung aus Arginin in der Leber"
    ],
    "correctIndex": 1,
    "explanation": "Caspasen sind Cysteinproteasen, die Proteine während der Apoptose spalten und so den programmierten Zelltod steuern.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kompartimente",
      "Aminosäuren und Proteine",
      "Klinik"
    ]
  },
  {
    "id": "q-0126",
    "question": "Welche Bedingung beeinflusst die Enzymaktivität am stärksten?",
    "options": [
      "pH-Wert und Temperatur",
      "Substratgröße",
      "Dichte des Lösungsmittels",
      "Elektrische Leitfähigkeit"
    ],
    "correctIndex": 0,
    "explanation": "Die Enzymaktivität hängt stark von pH-Wert und Temperatur ab, da beide Parameter die Enzymstruktur und Ionisationszustände der Seitenketten beeinflussen.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme"
    ]
  },
  {
    "id": "q-0127",
    "question": "Welche Aussage zur Rolle von Metallionen in Enzymen ist korrekt?",
    "options": [
      "Metallionen dienen ausschließlich der Enzymhemmung im aktiven Zentrum",
      "Metallionen können Substrate stabilisieren oder Elektronen übertragen",
      "Metallionen ersetzen organische Cofaktoren vollständig im aktiven Zentrum",
      "Metallionen destabilisieren die Tertiärstruktur und zerstören die Aktivität"
    ],
    "correctIndex": 1,
    "explanation": "Viele Enzyme sind Metalloenzyme. Metallionen wie Zn²⁺ oder Fe²⁺ stabilisieren Substrate oder übertragen Elektronen, z. B. in der Carboanhydrase oder Cytochromoxidase.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme"
    ]
  },
  {
    "id": "q-0128",
    "question": "Welche Aussage zur Funktion von Chaperonen ist richtig?",
    "options": [
      "Sie katalysieren Hydrolysereaktionen an Peptidbindungen",
      "Sie unterstützen die korrekte Faltung von neu synthetisierten Proteinen",
      "Sie markieren fehlgefaltete Proteine für den proteasomalen Abbau",
      "Sie transportieren Proteine durch die innere Mitochondrienmembran"
    ],
    "correctIndex": 1,
    "explanation": "Chaperone unterstützen die Faltung neu synthetisierter oder denaturierter Proteine und verhindern Aggregation oder Fehlfaltung.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Klinik"
    ]
  },
  {
    "id": "q-0129",
    "question": "Welche Aussage beschreibt den Begriff der Isoenzyme korrekt?",
    "options": [
      "Isoenzyme sind genetisch verschiedene Enzyme mit identischer Funktion",
      "Isoenzyme sind verschiedene Substrate, die dasselbe Enzym umsetzt",
      "Isoenzyme entstehen durch posttranskriptionelle Mutationen in der tRNA",
      "Isoenzyme sind dauerhaft inaktivierte Formen desselben Enzyms"
    ],
    "correctIndex": 0,
    "explanation": "Isoenzyme sind verschiedene Enzymproteine, die dieselbe Reaktion katalysieren, sich aber in Struktur, Regulation oder Gewebeverteilung unterscheiden (z. B. LDH-Isoenzyme).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Klinik"
    ]
  },
  {
    "id": "q-0130",
    "question": "Was beschreibt den Übergangszustand einer enzymatischen Reaktion?",
    "options": [
      "Das stabile Endprodukt der enzymatischen Reaktion",
      "Den energetisch höchsten Punkt mit maximaler Aktivierungsenergie",
      "Die stabile Zwischenstufe zwischen zwei verschiedenen Substraten",
      "Die Gleichgewichtslage der Reaktion bei gegebenen Bedingungen"
    ],
    "correctIndex": 1,
    "explanation": "Der Übergangszustand ist der energetisch höchste Punkt der Reaktion; Enzyme stabilisieren diesen Zustand und senken damit die Aktivierungsenergie.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme"
    ]
  },
  {
    "id": "q-0131",
    "question": "Welche Aussage zur β-Faltblattstruktur ist korrekt?",
    "options": [
      "Sie wird durch H-Brücken zwischen benachbarten Strängen stabilisiert",
      "Sie entsteht ausschließlich aus hydrophoben Aminosäureresten",
      "Sie ist in Proteinen immer ausschließlich antiparallel aufgebaut",
      "Sie wird durch Disulfidbrücken zwischen Cysteinresten gebildet"
    ],
    "correctIndex": 0,
    "explanation": "β-Faltblätter werden durch Wasserstoffbrücken zwischen benachbarten Polypeptidsträngen stabilisiert, die parallel oder antiparallel verlaufen können.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine"
    ]
  },
  {
    "id": "q-0132",
    "question": "Welche klinische Bedeutung haben erhöhte LDH-Werte im Blut?",
    "options": [
      "Sie weisen auf einen erhöhten Harnstoffspiegel hin.",
      "Sie deuten auf Gewebeschäden oder Zellzerfall hin.",
      "Sie zeigen eine Hypoglykämie an.",
      "Sie sind spezifisch für Virusinfektionen."
    ],
    "correctIndex": 1,
    "explanation": "Erhöhte LDH-Spiegel im Serum sind unspezifische Marker für Zelluntergang, z. B. bei Infarkt, Tumoren oder Hämolyse.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Klinik"
    ]
  },
  {
    "id": "q-0133",
    "question": "Welche Aussage beschreibt den Effekt der Temperatur auf Enzymreaktionen korrekt?",
    "options": [
      "Die Aktivität steigt unbegrenzt proportional zur Temperatur",
      "Hohe Temperaturen denaturieren Enzyme und zerstören ihre Aktivität",
      "Enzyme arbeiten bei Raumtemperatur (25°C) am besten",
      "Die Temperatur hat keinerlei Einfluss auf die Enzymaktivität"
    ],
    "correctIndex": 1,
    "explanation": "Enzyme besitzen ein Temperaturoptimum. Oberhalb dieses Bereichs führen Denaturierung und Strukturverlust zur Inaktivierung.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme"
    ]
  },
  {
    "id": "q-0134",
    "question": "Welche Aussage zur Struktur-Funktions-Beziehung von Enzymen ist richtig?",
    "options": [
      "Ausschließlich die Primärstruktur bestimmt die Enzymaktivität",
      "Die Tertiärstruktur formt das aktive Zentrum und die Substratspezifität",
      "Sekundärstrukturen verhindern generell die Enzymaktivität",
      "Die Tertiärstruktur hat keinen Einfluss auf die Substratspezifität"
    ],
    "correctIndex": 1,
    "explanation": "Die Tertiärstruktur schafft das aktive Zentrum, das die Substraterkennung und Katalyse ermöglicht.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme"
    ]
  },
  {
    "id": "q-0135",
    "question": "Welche Aussage beschreibt am besten den Einfluss von Mutationen auf Enzyme?",
    "options": [
      "Mutationen haben grundsätzlich keinen Einfluss auf die Enzymfunktion",
      "Mutationen können Aktivität, Stabilität oder Regulation verändern",
      "Mutationen betreffen ausschließlich regulatorische und keine katalytischen Proteine",
      "Mutationen erhöhen grundsätzlich immer die Enzymaktivität"
    ],
    "correctIndex": 1,
    "explanation": "Austausch einzelner Aminosäuren kann die Enzymstruktur und damit Aktivität, Stabilität oder Regulation verändern.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Klinik"
    ]
  },
  {
    "id": "q-0136",
    "question": "Welche Aussage beschreibt den Einfluss der Substratkonzentration auf die Reaktionsgeschwindigkeit?",
    "options": [
      "Bei niedriger [S] steigt die Geschwindigkeit proportional mit [S]",
      "Die Geschwindigkeit sinkt bei steigender Substratkonzentration stets",
      "Die Geschwindigkeit ist vollständig unabhängig von der Substratkonzentration",
      "Bei hoher [S] wird das Enzym durch Substratüberschuss gehemmt"
    ],
    "correctIndex": 0,
    "explanation": "Nach der Michaelis-Menten-Kinetik steigt v zunächst proportional mit [S], bis bei Sättigung das Enzym mit Vmax arbeitet.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme"
    ]
  },
  {
    "id": "q-0137",
    "question": "Welche Aussage zur Bedeutung von Proteasen in der Medizin ist korrekt?",
    "options": [
      "Proteasen haben im menschlichen Körper ausschließlich schädliche Wirkungen",
      "Proteasen sind zentral bei Verdauung, Blutgerinnung und Immunantwort",
      "Proteasen wirken ausschließlich intrazellulär und nie im Blutplasma",
      "Proteasen werden ausschließlich durch pH-Änderungen im Körper reguliert"
    ],
    "correctIndex": 1,
    "explanation": "Proteasen sind physiologisch zentral (z. B. Verdauungsenzyme, Gerinnungskaskade, Immunantwort). Pathologisch können sie Gewebe schädigen, was therapeutisch gezielt moduliert wird.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Klinik"
    ]
  },
  {
    "id": "q-0138",
    "question": "Wie verändert eine kompetitive Hemmung die Lineweaver–Burk-Darstellung?",
    "options": [
      "Der 1/Vmax-Achsenabschnitt steigt, der −1/Km-Abschnitt bleibt gleich",
      "Der 1/Vmax-Abschnitt bleibt gleich, der −1/Km-Abschnitt wandert nach rechts",
      "Beide Achsenabschnitte bleiben bei kompetitiver Hemmung unverändert",
      "Der 1/Vmax-Abschnitt sinkt und der −1/Km-Abschnitt wandert nach links"
    ],
    "correctIndex": 1,
    "explanation": "Bei kompetitiver Hemmung bleibt Vmax unverändert (y-Intercept konstant), während Km steigt. In der doppelt-reziproken Darstellung verschiebt sich der x-Intercept nach rechts (−1/Km rückt zur Null).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme"
    ]
  },
  {
    "id": "q-0139",
    "question": "Welche Aussage zur kooperativen (allosterischen) Enzymkinetik ist korrekt?",
    "options": [
      "Kooperative Enzyme zeigen eine hyperbolische Michaelis-Menten-Kurve",
      "Allosterische Aktivatoren verschieben die Sättigungskurve nach links",
      "Allosterische Inhibitoren erhöhen Vmax ohne Einfluss auf die Affinität",
      "Kooperativität tritt ausschließlich bei dimeren Enzymen auf"
    ],
    "correctIndex": 1,
    "explanation": "Kooperative Enzyme zeigen eine sigmoide v–[S]-Kurve. Allosterische Aktivatoren stabilisieren die R-Form und verschieben die Kurve nach links (scheinbar geringeres Km/erhöhte Affinität).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme"
    ]
  },
  {
    "id": "q-0140",
    "question": "Welche Ubiquitin-Verknüpfung dient klassisch als Signal für den proteasomalen Abbau?",
    "options": [
      "K48-verknüpfte Polyubiquitin-Kette",
      "K63-verknüpfte Polyubiquitin-Kette",
      "M1 (linear) verknüpfte Polyubiquitin-Kette",
      "K27-verknüpfte Polyubiquitin-Kette"
    ],
    "correctIndex": 0,
    "explanation": "K48-verknüpfte Ubiquitin-Ketten markieren Proteine für den Abbau im 26S-Proteasom (typischerweise ≥4 Ubiquitin-Einheiten).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kompartimente",
      "Aminosäuren und Proteine",
      "Klinik"
    ]
  },
  {
    "id": "q-0141",
    "question": "Welche Enzymklasse spaltet die in Stärke vorkommenden α-1,4-glykosidischen Bindungen während der Verdauung?",
    "options": [
      "β-Glykosidasen",
      "α-Amylasen",
      "Hexokinasen",
      "Proteasen"
    ],
    "correctIndex": 1,
    "explanation": "Die Verdauung von Stärke beginnt durch α-Amylasen (Speichel, Pankreas), die spezifisch α-1,4-glykosidische Bindungen hydrolysieren.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Enzyme",
      "Klinik"
    ]
  },
  {
    "id": "q-0142",
    "question": "Welche der folgenden Disaccharidasen ist für die Spaltung von Saccharose zuständig?",
    "options": [
      "Lactase (spaltet Laktose)",
      "Maltase-Glucoamylase (spaltet Maltose)",
      "Saccharase-Isomaltase (spaltet Saccharose)",
      "Trehalase (spaltet Trehalose)"
    ],
    "correctIndex": 2,
    "explanation": "Das Enterozyten-Enzymkomplex Saccharase-Isomaltase spaltet u. a. Saccharose, Maltose und Isomaltose an der Bürstensaummembran.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Enzyme",
      "Klinik"
    ]
  },
  {
    "id": "q-0143",
    "question": "Welche Aussage zur intestinalen Glukoseaufnahme über SGLT ist korrekt?",
    "options": [
      "Sie ist primär-aktiv und verbraucht direkt ATP.",
      "Sie ist sekundär-aktiv und nutzt den Na+-Gradienten.",
      "Sie erfolgt ausschließlich über erleichterte Diffusion.",
      "Sie benötigt Insulinbindung an den Enterozyten."
    ],
    "correctIndex": 1,
    "explanation": "SGLT1 transportiert Glukose sekundär-aktiv zusammen mit Na+; der Na+-Gradient wird durch die basolaterale Na+/K+-ATPase aufrechterhalten.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0144",
    "question": "Welcher GLUT-Transporter vermittelt die basolaterale Abgabe von Glukose aus Enterozyten ins Blut?",
    "options": [
      "GLUT1",
      "GLUT2",
      "GLUT3",
      "GLUT4"
    ],
    "correctIndex": 1,
    "explanation": "GLUT2 befindet sich an der basolateralen Membran der Enterozyten und vermittelt die erleichterte Diffusion von Glukose in den Blutstrom.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0145",
    "question": "Welche Kombination ist typisch für den Pankreas-β-Zell-Sensor für Blutzucker beim Menschen?",
    "options": [
      "GLUT4 + Hexokinase",
      "GLUT1 + Glucokinase",
      "GLUT2 + Hexokinase",
      "GLUT3 + Glucokinase"
    ],
    "correctIndex": 1,
    "explanation": "In menschlichen β-Zellen dominiert GLUT1 zur Aufnahme und Glucokinase als ‚Glukosesensor‘ mit hohem KM zur adäquaten Kopplung an die Insulinsekretion.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Hormone",
      "Enzyme"
    ]
  },
  {
    "id": "q-0146",
    "question": "Welche unmittelbare Wirkung hat ATP auf K+-Kanäle der β-Zelle im Rahmen der glukoseinduzierten Insulinsekretion?",
    "options": [
      "Aktivierung ATP-sensitiver K+-Kanäle",
      "Hemmung spannungsabhängiger Ca2+-Kanäle",
      "Schließen ATP-sensitiver K+-Kanäle",
      "Öffnen spannungsunabhängiger Na+-Kanäle"
    ],
    "correctIndex": 2,
    "explanation": "ATP (durch Glukosemetabolismus erhöht) schließt ATP-sensitive K+-Kanäle, depolarisiert die Membran und öffnet nachfolgend spannungsabhängige Ca2+-Kanäle → Exozytose von Insulin.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Hormone"
    ]
  },
  {
    "id": "q-0147",
    "question": "Welche Aussage zum Insulinrezeptor trifft zu?",
    "options": [
      "Es handelt sich um einen Gs-gekoppelten Rezeptor.",
      "Er ist ein Tetramer mit Tyrosinkinaseaktivität.",
      "Er bindet 2 Insulinmoleküle pro αβ-Dimer.",
      "Nach Ligandenbindung wird IRS1 dephosphoryliert."
    ],
    "correctIndex": 1,
    "explanation": "Der Insulinrezeptor ist ein (α2β2)-Tetramer; die β-Untereinheiten besitzen Tyrosinkinaseaktivität und phosphorylieren u. a. IRS-Proteine nach Insulinbindung.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Hormone",
      "Enzyme"
    ]
  },
  {
    "id": "q-0148",
    "question": "Welche der folgenden Reaktionen erklärt, warum Glukose nach Phosphorylierung die Zelle nicht mehr verlassen kann?",
    "options": [
      "Phosphorylierung zu Fructose-6-Phosphat",
      "Phosphorylierung zu Glucose-6-Phosphat",
      "Isomerisierung zu Mannose-6-Phosphat",
      "Reduktion zu Sorbitol"
    ],
    "correctIndex": 1,
    "explanation": "Die Bildung von Glucose-6-Phosphat verhindert den Transport über GLUT-Transporter (die phosphorylierte Form wird nicht transportiert).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Enzyme"
    ]
  },
  {
    "id": "q-0149",
    "question": "Welche Enzymausstattung der Leber erklärt ihre Rolle als ‚Blutzuckerpuffer‘?",
    "options": [
      "GLUT4 und Hexokinase (KM ~0,1 mM)",
      "GLUT2 (KM hoch) und Glucokinase (KM ~10 mM)",
      "GLUT3 (KM niedrig) und Phosphofruktokinase-2",
      "GLUT1 und Glucose-6-Phosphatase im Cytosol"
    ],
    "correctIndex": 1,
    "explanation": "Leber: hoher KM von GLUT2 und Glucokinase erlaubt Anpassung an steigende Blutglukose; zusätzlich besitzt die Leber Glucose-6-Phosphatase für Glukosefreisetzung.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Enzyme",
      "Bioenergetik"
    ]
  },
  {
    "id": "q-0150",
    "question": "Welches Organ kann Glukose aus Glykogen direkt ins Blut abgeben?",
    "options": [
      "Skelettmuskel",
      "Herzmuskel",
      "Leber",
      "Gehirn"
    ],
    "correctIndex": 2,
    "explanation": "Nur Leber (sowie Niere und Darmepithel) besitzen Glucose-6-Phosphatase (im ER) und können G6P zu Glukose dephosphorylieren und ans Blut abgeben.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Bioenergetik",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0151",
    "question": "Welche Aktivitätsänderung beschreibt die hormonelle Interkonvertierung im Glykogenstoffwechsel korrekt?",
    "options": [
      "Phosphorylierung aktiviert Glykogensynthase",
      "Phosphorylierung aktiviert Glykogenphosphorylase",
      "Dephosphorylierung aktiviert Glykogenphosphorylase",
      "Phosphorylierung inaktiviert beide Enzyme"
    ],
    "correctIndex": 1,
    "explanation": "Phosphorylierung (z. B. durch PKA) aktiviert die Glykogenphosphorylase (Abbau) und inaktiviert die Glykogensynthase (Aufbau). Umgekehrt wirkt Dephosphorylierung.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Enzyme",
      "Hormone"
    ]
  },
  {
    "id": "q-0152",
    "question": "Welches Molekül wirkt im Muskel allosterisch als Aktivator der Glykogenphosphorylase?",
    "options": [
      "ATP",
      "Glucose-6-Phosphat",
      "AMP",
      "Fructose-2,6-Bisphosphat"
    ],
    "correctIndex": 2,
    "explanation": "AMP signalisiert niedrige Energieladung und aktiviert die Glykogenphosphorylase; ATP und G6P hemmen den Abbauweg allosterisch.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Enzyme",
      "Bioenergetik"
    ]
  },
  {
    "id": "q-0153",
    "question": "Welche Hormon-Rezeptor-Kombination triggert in der Leber v. a. den Glykogenabbau?",
    "options": [
      "Insulin – Tyrosinkinase",
      "Adrenalin – nukleärer Rezeptor",
      "Glucagon – GPCR (Gs)",
      "Cortisol – GPCR (Gi)"
    ],
    "correctIndex": 2,
    "explanation": "Glucagon bindet an einen Gs-gekoppelten GPCR in der Leber → cAMP/PKA-Signalweg → Aktivierung der Glykogenphosphorylase und Hemmung der Glykogensynthase.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Hormone",
      "Enzyme"
    ]
  },
  {
    "id": "q-0154",
    "question": "Welche Aussage zur Glykolyse ist korrekt?",
    "options": [
      "Sie findet ausschließlich in den Mitochondrien statt",
      "Sie erzeugt pro Glukosemolekül netto 4 ATP (brutto)",
      "Unter anaeroben Bedingungen entsteht Lactat zur NAD⁺-Regeneration",
      "Sie ist als Gesamtprozess vollständig reversibel"
    ],
    "correctIndex": 2,
    "explanation": "Die Glykolyse läuft im Cytosol ab und liefert netto 2 ATP/Glukose. Unter anaeroben Bedingungen wird Pyruvat zu Lactat reduziert, um NAD+ zu regenerieren.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Bioenergetik",
      "Enzyme"
    ]
  },
  {
    "id": "q-0155",
    "question": "Welche Reaktion der Glykolyse stellt die erste Substratkettenphosphorylierung dar?",
    "options": [
      "Phosphofructokinase-1",
      "Phosphoglyceratkinase",
      "Pyruvatkinase",
      "Glycerinaldehyd-3-phosphat-Dehydrogenase"
    ],
    "correctIndex": 1,
    "explanation": "Die Phosphoglyceratkinase überträgt ein Phosphat vom 1,3-Bisphosphoglycerat auf ADP → Bildung von ATP (erste Substratkettenphosphorylierung).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Enzyme",
      "Bioenergetik"
    ]
  },
  {
    "id": "q-0156",
    "question": "Welches ist der dritte irreversible Schrittmacher der Glykolyse, stark allosterisch reguliert und organspezifisch isoformiert?",
    "options": [
      "Hexokinase",
      "Phosphoglyceratkinase",
      "Enolase",
      "Pyruvatkinase"
    ],
    "correctIndex": 3,
    "explanation": "Die Pyruvatkinase katalysiert den letzten Schritt der Glykolyse (PEP → Pyruvat, ATP-Bildung), ist allosterisch reguliert und zeigt organspezifische Isoformen.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Enzyme"
    ]
  },
  {
    "id": "q-0157",
    "question": "Welcher Faktor aktiviert die Phosphofructokinase-1 (PFK-1) besonders in Leber und Herzmuskel?",
    "options": [
      "Fructose-2,6-Bisphosphat (F2,6-BP)",
      "Citrat (Signal für hohen Energiestatus)",
      "ATP (Signal für hohen Energiestatus)",
      "Hoher pH-Wert (>7,5) im Cytosol"
    ],
    "correctIndex": 0,
    "explanation": "F2,6-BP ist ein starker allosterischer Aktivator der PFK-1 und koppelt hormonelle Signale (über PFK-2/FBPase-2) an die Glykolyserate.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Enzyme",
      "Hormone"
    ]
  },
  {
    "id": "q-0158",
    "question": "Warum betreiben Erythrozyten ausschließlich anaerobe Glykolyse?",
    "options": [
      "Sie verfügen über keine Hexokinase.",
      "Sie besitzen keine Mitochondrien.",
      "Ihr pH ist dauerhaft <7.",
      "Sie exprimieren nur GLUT4."
    ],
    "correctIndex": 1,
    "explanation": "Erythrozyten haben keine Mitochondrien; daher erfolgt ATP-Gewinn allein über die anaerobe Glykolyse (Glukose → Lactat).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Blut",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0159",
    "question": "Welche Aussage beschreibt den Cori-Zyklus korrekt?",
    "options": [
      "Transport von Lactat aus der Leber zum Muskel zur weiteren Lactatbildung",
      "Transport von Lactat aus extrahepatischem Gewebe zur Leber – dort Gluconeogenese",
      "Transport von Alanin aus der Leber zum Muskel, dort Transaminierung zu Pyruvat",
      "Transport von Glycerin aus dem Fettgewebe zur Niere, dort Ketogenese"
    ],
    "correctIndex": 1,
    "explanation": "Extrahepatisches Laktat wird in der Leber durch Glukoneogenese zu Glukose.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Bioenergetik",
      "Aminosäuren und Proteine"
    ]
  },
  {
    "id": "q-0160",
    "question": "Was beschreibt den Warburg-Effekt?",
    "options": [
      "Vermehrte Glukoseaufnahme und aerobe Glykolyse in Tumorzellen",
      "Hemmung der Glykolyse durch Hypoxie in Tumorzellen",
      "Erhöhte Fettsäuresynthese in Erythrozyten bei Sauerstoffmangel",
      "Vermehrte Ketonkörperbildung in Leberkarzinomen bei Fasten"
    ],
    "correctIndex": 0,
    "explanation": "Viele Tumorzellen zeigen hohe Glukoseaufnahme und bevorzugen Glykolyse selbst bei O2-Angebot (‚aerobe Glykolyse‘); Grundlage der FDG-PET-Diagnostik.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Klinik"
    ]
  },
  {
    "id": "q-0161",
    "question": "Welche Hauptsubstrate dienen der Glukoneogenese?",
    "options": [
      "Acetyl-CoA, Ketonkörper, Fructose",
      "Lactat, Alanin, Glycerin",
      "Palmitat, Citrat, Pyrophosphat",
      "ATP, NADH, Pi"
    ],
    "correctIndex": 1,
    "explanation": "Lactat (aus Muskel/Erythrozyten), Alanin (aus Muskelproteinabbau) und Glycerin (aus TAG) speisen die Glukoneogenese ein.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Aminosäuren und Proteine",
      "Bioenergetik"
    ]
  },
  {
    "id": "q-0162",
    "question": "Welches Enzym ist NICHT Teil der Glukoneogenese-Umgehung der drei irreversiblen Glykolyseschritte?",
    "options": [
      "Pyruvatcarboxylase",
      "Phosphoenolpyruvat-Carboxykinase (PEPCK)",
      "Fructose-1,6-Bisphosphatase",
      "Phosphoglyceratmutase"
    ],
    "correctIndex": 3,
    "explanation": "Die Umgehung nutzt Pyruvatcarboxylase, PEPCK, F-1,6-Bisphosphatase und Glucose-6-Phosphatase; Phosphoglyceratmutase gehört zur reversiblen Mittelstrecke der Glykolyse.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Enzyme",
      "Bioenergetik"
    ]
  },
  {
    "id": "q-0163",
    "question": "Wo ist Glucose-6-Phosphatase lokalisiert und welche Bedeutung hat dies?",
    "options": [
      "Cytosol; ermöglicht schnelle Diffusion von Glukose",
      "Mitochondrien; Kopplung der Glukolyse an die Atmungskette",
      "Endoplasmatisches Retikulum; kontrollierte Glukosefreisetzung ins Blut",
      "Peroxisomen; Kopplung an peroxisomale β-Oxidation"
    ],
    "correctIndex": 2,
    "explanation": "G6Pase befindet sich im ER-Lumen von Leber, Niere und Darmepithel; dort wird G6P zu Glukose dephosphoryliert und ans Blut abgegeben.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Kompartimente",
      "Enzyme"
    ]
  },
  {
    "id": "q-0164",
    "question": "Wie viele hochenergetische Phosphatbindungen werden in der Glukoneogenese pro Glukose verbraucht?",
    "options": [
      "2 ATP",
      "4 ATP + 2 GTP",
      "6 ATP + 2 NADH",
      "8 ATP ohne Reduktionsäquivalente"
    ],
    "correctIndex": 1,
    "explanation": "Die Glukoneogenese aus 2 Pyruvat benötigt 4 ATP, 2 GTP und 2 NADH und ist energetisch aufwendig.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Bioenergetik"
    ]
  },
  {
    "id": "q-0165",
    "question": "Welcher allosterische Effektor koppelt die hormonelle Regulation an die reziproke Steuerung von Glykolyse und Glukoneogenese?",
    "options": [
      "Fructose-2,6-Bisphosphat (F2,6-BP)",
      "Acetyl-CoA (Signal für Energieüberschuss)",
      "Citrat (Signal für hohen Energiestatus)",
      "Alanin (glucogene Aminosäure aus dem Muskel)"
    ],
    "correctIndex": 0,
    "explanation": "F2,6-BP aktiviert PFK-1 (Glykolyse) und hemmt F-1,6-Bisphosphatase (Glukoneogenese); seine Konzentration wird über PFK-2/FBPase-2 hormonell reguliert (cAMP).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Enzyme",
      "Hormone"
    ]
  },
  {
    "id": "q-0166",
    "question": "Welche Gewebe sind auf kontinuierliche Glukoseversorgung angewiesen und profitieren von der Glukoneogenese?",
    "options": [
      "Gehirn und Erythrozyten",
      "Leber und Herz",
      "Skelettmuskel und Darm",
      "Niere und Haut"
    ],
    "correctIndex": 0,
    "explanation": "Erythrozyten (besitzen keine Mitochondrien) benötigen stets Glukose; das Gehirn meist (Ausnahme: längere Ketose). Die Glukoneogenese sichert die Versorgung in Nüchternphasen.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Blut",
      "Bioenergetik"
    ]
  },
  {
    "id": "q-0167",
    "question": "Welche Funktion erfüllt der Pentosephosphatweg primär?",
    "options": [
      "ATP-Gewinnung durch Substratkettenphosphorylierung",
      "NADPH-Bildung und Bereitstellung von Ribose-5-Phosphat",
      "Acetyl-CoA-Bildung aus Pyruvat für den Citratzyklus",
      "Oxidation von Fettsäuren zur Energiegewinnung"
    ],
    "correctIndex": 1,
    "explanation": "Der PPP liefert NADPH für reduktive Biosynthesen und Ribose-5-Phosphat für Nukleotid- und Nukleinsäuresynthesen.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Bioenergetik",
      "Nukleinsäuren"
    ]
  },
  {
    "id": "q-0168",
    "question": "Welche Produkte entstehen in der oxidativen Phase des Pentosephosphatwegs?",
    "options": [
      "Glycerinaldehyd-3-Phosphat (GAP) und Dihydroxyacetonphosphat (DHAP)",
      "Ribulose-5-Phosphat und NADPH (je 2 mol pro Glukose)",
      "Fructose-6-Phosphat und Glycerinaldehyd-3-Phosphat",
      "CO₂ und FADH₂ als Endprodukte der Oxidation"
    ],
    "correctIndex": 1,
    "explanation": "Die oxidative Phase erzeugt Ribulose-5-Phosphat und NADPH (unter Freisetzung von CO2).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Bioenergetik"
    ]
  },
  {
    "id": "q-0169",
    "question": "Welche Umwandlungen kennzeichnen die nicht-oxidative Phase des Pentosephosphatwegs?",
    "options": [
      "Dehydrierungen und Hydrolysen von Phosphatestern",
      "Isomerisierung, Epimerisierung und Transketolase/Transaldolase-Transfers",
      "β-Oxidation und Ketogenese von Fettsäureketten",
      "Pyruvatdehydrogenase-Reaktionen zur Acetyl-CoA-Bildung"
    ],
    "correctIndex": 1,
    "explanation": "Die nicht-oxidative Phase recycelt C5-Zucker über Isomerase/Epimerase und C2/C3-Transfers (Transketolase/-aldolase) zu F6P und GAP für Glykolyse/Gluconeogenese.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Enzyme"
    ]
  },
  {
    "id": "q-0170",
    "question": "Warum wird in Lipogenese-aktivem Fettgewebe der nicht-oxidative Arm des PPP in die Glykolyse rückgeführt?",
    "options": [
      "Zur NADH-Bildung für die anschließende β-Oxidation",
      "Zur Bereitstellung von Acetyl-CoA (über Pyruvat) und weiterem NADPH",
      "Zur Senkung des intrazellulären pH-Wertes in Adipozyten",
      "Zur allosterischen Hemmung der Citratsynthase im Mitochondrium"
    ],
    "correctIndex": 1,
    "explanation": "Fettgewebe benötigt NADPH und Acetyl-CoA für die Fettsäuresynthese; Pentosen werden zu GAP/F6P recycelt und über Glykolyse/Citrat-Shuttle zur Lipogenese genutzt.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Lipide",
      "Bioenergetik"
    ]
  },
  {
    "id": "q-0171",
    "question": "Wie können Zellen Ribose-5-Phosphat (R5P) produzieren, wenn kein erhöhter Bedarf an NADPH besteht?",
    "options": [
      "Durch verstärkte oxidative Phase des Pentosephosphatwegs",
      "Durch Umwandlung von Glykolyseintermediaten über die nicht-oxidative Phase des Pentosephosphatwegs",
      "Durch direkte Spaltung von Glukose zu Ribose im Cytosol",
      "Durch vollständige Umkehr der Glykolyse"
    ],
    "correctIndex": 1,
    "explanation": "Wenn Zellen Ribose-5-Phosphat benötigen, aber kein zusätzliches NADPH, können sie R5P über die nicht-oxidative Phase des Pentosephosphatwegs aus Fructose-6-Phosphat und Glycerinaldehyd-3-Phosphat erzeugen. So wird die NADPH-bildende oxidative Phase umgangen.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Nukleinsäuren"
    ]
  },
  {
    "id": "q-0172",
    "question": "Welche klinische Konsequenz kann ein G6PD-Mangel haben?",
    "options": [
      "Hypoglykämische Krisen durch übermäßige Insulinausschüttung",
      "Hämolytische Anämien bei oxidativem Stress (z. B. Favabohnen, Medikamente)",
      "Hyperthyreose durch gestörte Schilddrüsenhormonsynthese",
      "Rachitis durch gestörten Vitamin-D-Stoffwechsel"
    ],
    "correctIndex": 1,
    "explanation": "G6PD-Mangel vermindert NADPH in Erythrozyten und erhöht die Empfindlichkeit gegenüber oxidativem Stress → hämolytische Krisen (Favismus, bestimmte Medikamente).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Blut",
      "Klinik"
    ]
  },
  {
    "id": "q-0173",
    "question": "Welches Hormon fördert primär die Glykogensynthese in Leber und Muskel?",
    "options": [
      "Glucagon",
      "Adrenalin",
      "Insulin",
      "Cortisol"
    ],
    "correctIndex": 2,
    "explanation": "Insulin aktiviert über PI3K/Akt u. a. Proteinphosphatasen, die Glykogensynthase dephosphorylieren (aktivieren) und die Phosphorylase inaktivieren.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Hormone",
      "Enzyme"
    ]
  },
  {
    "id": "q-0174",
    "question": "Welche Aussage zu Hexokinase vs. Glucokinase trifft zu?",
    "options": [
      "Beide haben niedrigen KM und sind bei Nüchternblutzucker bereits gesättigt",
      "Hexokinase hat niedrigen KM; Glucokinase hohen KM – dient als Glukosesensor",
      "Glucokinase ist in allen Körperzellen exprimiert; Hexokinase nur in der Leber",
      "Hexokinase wird durch Fructose-2,6-Bisphosphat allosterisch aktiviert"
    ],
    "correctIndex": 1,
    "explanation": "Hexokinase (niedriger KM) arbeitet schon bei wenig Glukose nahezu maximal; Glucokinase (hoher KM) in Leber/β-Zellen dient der Anpassung an Blutzuckerspiegel.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Enzyme",
      "Hormone"
    ]
  },
  {
    "id": "q-0175",
    "question": "Welche Reaktion regeneriert unter aeroben Bedingungen das für die Glykolyse benötigte NAD⁺?",
    "options": [
      "Lactatdehydrogenase (LDH) durch Pyruvat→Lactat",
      "Atmungskette/Oxidative Phosphorylierung in Mitochondrien",
      "Pyruvatdehydrogenase (PDH) durch Pyruvat→Acetyl-CoA",
      "Cori-Zyklus durch Laktat-Transport zur Leber"
    ],
    "correctIndex": 1,
    "explanation": "In Gegenwart von O2 wird NADH in der Atmungskette reoxidiert (→ NAD+), was die Fortführung der Glykolyse ermöglicht; unter anaeroben Bedingungen übernimmt LDH dies.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Bioenergetik",
      "Enzyme"
    ]
  },
  {
    "id": "q-0176",
    "question": "Welche Aussage zur Rolle von Glucose-6-Phosphat im Stoffwechsel ist korrekt?",
    "options": [
      "G6P ist ausschließlich Substrat der Glykolyse im Cytosol",
      "G6P ist Knotenpunkt: Glykolyse, Glykogensynthese, Pentosephosphatweg, Glukoneogenese",
      "G6P kann aufgrund seiner Ladung die Zellmembran leicht passieren",
      "G6P wird ausschließlich im Skelettmuskel durch Hexokinase gebildet"
    ],
    "correctIndex": 1,
    "explanation": "G6P verteilt Kohlenstofffluss in mehrere Wege: Glykolyse, Glykogenstoffwechsel, Pentosephosphatweg und – in Leber/Niere – Glukoneogenese/Blutglukosefreisetzung.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Bioenergetik",
      "Enzyme"
    ]
  },
  {
    "id": "q-0177",
    "question": "Welche Wirkung hat eine Azidose (pH < 7) auf die PFK-1?",
    "options": [
      "Aktivierung der PFK-1",
      "Keine Wirkung",
      "Rasche Hemmung der PFK-1",
      "Aktivierung nur im Muskel"
    ],
    "correctIndex": 2,
    "explanation": "Niedriger pH hemmt PFK-1 und begrenzt so die Pyruvat- und Laktatproduktion, um eine weitere pH-Senkung zu verhindern (Schutzmechanismus).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Enzyme",
      "Klinik"
    ]
  },
  {
    "id": "q-0178",
    "question": "Welcher Schritt der Glykolyse ist die zweite Substratkettenphosphorylierung?",
    "options": [
      "Phosphoglyceratkinase-Reaktion",
      "Aldolase-Reaktion",
      "Pyruvatkinase-Reaktion",
      "Enolase-Reaktion"
    ],
    "correctIndex": 2,
    "explanation": "Die Pyruvatkinase überträgt ein Phosphat von PEP auf ADP und bildet ATP – die zweite Substratkettenphosphorylierung der Glykolyse.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Enzyme",
      "Bioenergetik"
    ]
  },
  {
    "id": "q-0179",
    "question": "Welche Signalkomponente gehört NICHT zum klassischen Insulin-Signalweg an der Plasmamembran?",
    "options": [
      "Autophosphorylierter Insulinrezeptor (RTK) als Ausgangspunkt",
      "IRS-Proteine als direkte Substrate des Insulinrezeptors",
      "PI3K/Akt-Signalweg als zentraler Effektor",
      "Gs-Protein und Adenylatcyclase-Aktivierung (Glucagon-typisch)"
    ],
    "correctIndex": 3,
    "explanation": "Insulin signalisiert über RTK → IRS → PI3K/Akt/MAPK. Gs-gekoppeltes Adenylatcyclase-Signal ist typisch für Glucagon/Adrenalin, nicht für Insulin.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Hormone",
      "Enzyme"
    ]
  },
  {
    "id": "q-0180",
    "question": "Welche Aussage beschreibt die reziproke Steuerung von Glykogenauf- und -abbau korrekt?",
    "options": [
      "Insulin fördert Phosphorylierung beider Enzyme",
      "Adrenalin/Glucagon fördern Dephosphorylierung",
      "Phosphorylierung aktiviert den Abbau und hemmt die Synthese",
      "Dephosphorylierung aktiviert den Abbau und hemmt die Synthese"
    ],
    "correctIndex": 2,
    "explanation": "Phosphorylierung (v. a. via cAMP/PKA) aktiviert die Glykogenphosphorylase (Abbau) und inaktiviert Glykogensynthase; Insulin fördert Dephosphorylierung (Synthese).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Enzyme",
      "Hormone"
    ]
  },
  {
    "id": "q-0181",
    "question": "Welche Aussage beschreibt den Hauptunterschied zwischen DNA und RNA korrekt?",
    "options": [
      "DNA enthält Uracil statt Thymin",
      "RNA enthält Desoxyribose als Zucker",
      "RNA enthält Ribose und Uracil",
      "DNA ist meist einzelsträngig"
    ],
    "correctIndex": 2,
    "explanation": "RNA besitzt Ribose als Zucker und Uracil als Base, während DNA Desoxyribose und Thymin enthält.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren"
    ]
  },
  {
    "id": "q-0182",
    "question": "Welche strukturelle Besonderheit der RNA führt zu ihrer Instabilität im Vergleich zur DNA?",
    "options": [
      "fehlende Methylgruppen",
      "2'-Hydroxylgruppe der Ribose",
      "fehlende Phosphatgruppen",
      "fehlende Basenpaarung"
    ],
    "correctIndex": 1,
    "explanation": "Die 2'-OH-Gruppe kann intramolekular angreifen und das Phosphodiester-Rückgrat spalten, daher ist RNA weniger stabil.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren"
    ]
  },
  {
    "id": "q-0183",
    "question": "Woher stammt die Ribose für die Synthese von Nukleotiden?",
    "options": [
      "Aus der Glykolyse (Glukose-6-Phosphat)",
      "Aus dem Pentosephosphatweg (Ribose-5-Phosphat)",
      "Aus der Gluconeogenese (Glukose)",
      "Aus dem Citratzyklus (Oxalacetat)"
    ],
    "correctIndex": 1,
    "explanation": "Ribose-5-Phosphat wird im Pentosephosphatweg gebildet und dient als Zuckerkomponente von Nukleotiden.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren",
      "Kohlenhydrate"
    ]
  },
  {
    "id": "q-0184",
    "question": "Welche Aussage zur Purinsynthese ist richtig?",
    "options": [
      "Die Base wird vollständig vor dem Anhängen an Ribose gebildet.",
      "Die Base wird schrittweise auf der Ribose aufgebaut.",
      "PRPP wird am Ende der Synthese hinzugefügt.",
      "Die Synthese erfolgt im Zellkern."
    ],
    "correctIndex": 1,
    "explanation": "Bei der de-novo-Purinsynthese wird die Base schrittweise auf der Ribose-5-Phosphat-Vorstufe (PRPP) aufgebaut.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren",
      "Aminosäuren und Proteine"
    ]
  },
  {
    "id": "q-0185",
    "question": "Welche Aminosäuren tragen Atome zur Synthese des Purinrings bei (C und N)?",
    "options": [
      "Glycin, Glutamin, Aspartat",
      "Alanin, Serin, Methionin",
      "Arginin, Lysin, Prolin",
      "Valin, Isoleucin, Threonin"
    ],
    "correctIndex": 0,
    "explanation": "Glycin liefert C- und N-Atome, Glutamin und Aspartat Stickstoffatome zum Aufbau des Purinrings.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren",
      "Aminosäuren und Proteine"
    ]
  },
  {
    "id": "q-0186",
    "question": "Welches Enzym ist beim Lesch-Nyhan-Syndrom defekt?",
    "options": [
      "Adenin-Phosphoribosyl-Transferase (APRT) – Adenin-Recycling",
      "Xanthinoxidase – Harnsäurebildung aus Xanthin",
      "Hypoxanthin-Guanin-Phosphoribosyl-Transferase (HGPRT)",
      "Adenosindesaminase (ADA) – Adenosin-Abbau"
    ],
    "correctIndex": 2,
    "explanation": "Beim Lesch-Nyhan-Syndrom fehlt die HGPRT-Aktivität, was zu verminderter Purinwiederverwertung und übermäßiger Harnsäurebildung führt.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren",
      "Klinik"
    ]
  },
  {
    "id": "q-0187",
    "question": "Welche klinische Folge kann ein Adenosindesaminase-Mangel (ADA-Mangel) haben?",
    "options": [
      "Hyperurikämie durch Purinabbau-Störung",
      "Severe Combined Immunodeficiency (SCID) durch dATP-Akkumulation",
      "Lesch-Nyhan-Syndrom durch HGPRT-Defekt",
      "Diabetes mellitus durch Insulinmangel"
    ],
    "correctIndex": 1,
    "explanation": "Ein ADA-Mangel führt zu Anreicherung von Desoxyadenosin und dATP, was die DNA-Synthese hemmt und zu SCID führt.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren",
      "Klinik"
    ]
  },
  {
    "id": "q-0188",
    "question": "Welches Endprodukt entsteht beim Purinabbau im Menschen?",
    "options": [
      "Allantoin",
      "Harnstoff",
      "Harnsäure",
      "Hypoxanthin"
    ],
    "correctIndex": 2,
    "explanation": "Im Menschen endet der Purinabbau mit der Bildung von Harnsäure, da die Uricase fehlt, die Harnsäure weiter zu Allantoin abbauen würde.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren",
      "Klinik"
    ]
  },
  {
    "id": "q-0189",
    "question": "Welche Enzymhemmung wird zur Therapie der Gicht eingesetzt?",
    "options": [
      "Hemmung der Adenylatcyclase",
      "Hemmung der Xanthinoxidase",
      "Aktivierung der HGPRT",
      "Hemmung der PRPP-Synthetase"
    ],
    "correctIndex": 1,
    "explanation": "Allopurinol hemmt die Xanthinoxidase und reduziert so die Bildung von Harnsäure im Purinabbau.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren",
      "Enzyme",
      "Klinik"
    ]
  },
  {
    "id": "q-0190",
    "question": "Wodurch unterscheidet sich die Pyrimidinsynthese grundlegend von der Purinsynthese?",
    "options": [
      "Die Base wird vollständig aufgebaut, bevor sie an Ribose geknüpft wird",
      "Sie erfordert kein ATP für die Carbamoylphosphat-Synthese",
      "Sie nutzt keinerlei Aminosäuren als Vorläufer",
      "Sie findet ausschließlich im Zellkern von Eukaryoten statt"
    ],
    "correctIndex": 0,
    "explanation": "Bei der Pyrimidinsynthese wird die Base zunächst vollständig aufgebaut und erst danach an PRPP gekoppelt.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren",
      "Aminosäuren und Proteine"
    ]
  },
  {
    "id": "q-0191",
    "question": "Welches Enzym katalysiert den ersten Schritt der Pyrimidinsynthese?",
    "options": [
      "Carbamoylphosphat-Synthetase II (CPS II, cytoplasmatisch)",
      "Thymidilat-Synthase (dUMP → dTMP, Cofaktor Folat)",
      "Ribonukleotid-Reduktase (NDP → dNDP)",
      "Aspartat-Transcarbamoylase (CAP + Asp → Carbamoylaspartat)"
    ],
    "correctIndex": 0,
    "explanation": "Die Carbamoylphosphat-Synthetase II (CPS II) bildet Carbamoylphosphat als ersten Schritt der de-novo-Pyrimidinsynthese im Cytosol.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren",
      "Enzyme"
    ]
  },
  {
    "id": "q-0192",
    "question": "Welches Enzym ist Angriffspunkt für Methotrexat in der Chemotherapie?",
    "options": [
      "Dihydrofolat-Reduktase",
      "Thymidilat-Synthase",
      "Ribonukleotid-Reduktase",
      "DNA-Ligase"
    ],
    "correctIndex": 0,
    "explanation": "Methotrexat hemmt die Dihydrofolat-Reduktase und verhindert so die Regeneration von Tetrahydrofolat, das für die dTMP-Synthese benötigt wird.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren",
      "Enzyme",
      "Klinik"
    ]
  },
  {
    "id": "q-0193",
    "question": "Welche Aussage zur DNA-Struktur trifft zu?",
    "options": [
      "Die Stränge verlaufen parallel.",
      "Die DNA-Synthese erfolgt von 3' nach 5'.",
      "Die Stränge sind antiparallel angeordnet.",
      "GC-Basenpaare sind schwächer gebunden als AT-Paare."
    ],
    "correctIndex": 2,
    "explanation": "Die DNA besteht aus zwei antiparallelen Strängen, die durch Wasserstoffbrücken zwischen komplementären Basen verbunden sind.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren"
    ]
  },
  {
    "id": "q-0194",
    "question": "Was bewirkt ein hoher GC-Gehalt in einer DNA-Sequenz?",
    "options": [
      "Geringere Schmelztemperatur durch schwächere Basenstapelung",
      "Höhere thermische Stabilität durch drei Wasserstoffbrücken pro GC-Paar",
      "Erhöhte Mutationsrate durch häufigere Desaminierungsereignisse",
      "Schnellere Replikation durch effizientere Polymerase-Bindung"
    ],
    "correctIndex": 1,
    "explanation": "GC-Paare sind durch drei Wasserstoffbrücken verbunden (AT nur zwei), daher erhöhen sie die thermische Stabilität der DNA.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren"
    ]
  },
  {
    "id": "q-0195",
    "question": "Wie viele Chromosomen besitzt eine menschliche Körperzelle?",
    "options": [
      "23",
      "24",
      "44",
      "46"
    ],
    "correctIndex": 3,
    "explanation": "Diploide menschliche Körperzellen enthalten 46 Chromosomen (22 Autosomenpaare + 2 Gonosomen).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren"
    ]
  },
  {
    "id": "q-0196",
    "question": "Was unterscheidet Euchromatin von Heterochromatin?",
    "options": [
      "Euchromatin ist stärker kondensiert",
      "Euchromatin ist transkriptionell aktiv",
      "Heterochromatin enthält viele Gene",
      "Heterochromatin repliziert früh in der S-Phase"
    ],
    "correctIndex": 1,
    "explanation": "Euchromatin ist weniger kondensiert, enthält viele aktive Gene und wird früh repliziert, während Heterochromatin spät repliziert und inaktiv ist.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren"
    ]
  },
  {
    "id": "q-0197",
    "question": "Welche Funktion haben Topoisomerasen bei der Replikation?",
    "options": [
      "Sie entfernen RNA-Primer vom Folgestrang (Funktion der RNase H)",
      "Sie verknüpfen DNA-Fragmente durch Phosphodiesterbindung (Ligase)",
      "Sie entspannen die DNA-Überspiralisierung vor der Replikationsgabel",
      "Sie synthetisieren den Leitstrang in 5'→3'-Richtung (Polymerase)"
    ],
    "correctIndex": 2,
    "explanation": "Topoisomerasen verhindern DNA-Überwindungen vor der Replikationsgabel, indem sie Stränge vorübergehend schneiden und wieder verknüpfen.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren",
      "Enzyme"
    ]
  },
  {
    "id": "q-0198",
    "question": "Welches Enzym verlängert Chromosomenenden und verhindert den Verlust genetischer Information?",
    "options": [
      "DNA-Polymerase δ",
      "Topoisomerase II",
      "Telomerase",
      "DNA-Ligase"
    ],
    "correctIndex": 2,
    "explanation": "Die Telomerase verlängert die Telomerenden von Chromosomen und schützt sie vor Verkürzung während der Replikation.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren",
      "Klinik"
    ]
  },
  {
    "id": "q-0199",
    "question": "Welche Art von Mutation führt meist zu einem frühzeitigen Abbruch der Translation?",
    "options": [
      "Missense-Mutation",
      "Nonsense-Mutation",
      "Stille Mutation",
      "Frameshift-Mutation"
    ],
    "correctIndex": 1,
    "explanation": "Nonsense-Mutationen erzeugen ein Stopcodon und führen zur vorzeitigen Termination der Proteinsynthese.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren",
      "Klinik"
    ]
  },
  {
    "id": "q-0200",
    "question": "Welche DNA-Reparaturform entfernt Basen, die die DNA-Struktur verzerren (z. B. Thymindimere)?",
    "options": [
      "Basen-Excisionsreparatur (BER) – entfernt modifizierte Einzelbasen",
      "Nukleotid-Excisionsreparatur (NER) – entfernt helixverzerrende Schäden",
      "Mismatch-Reparatur (MMR) – korrigiert Replikationsfehler",
      "Photoreaktivierung – spaltet Thymindimere direkt durch Licht"
    ],
    "correctIndex": 1,
    "explanation": "Die Nukleotid-Excisionsreparatur erkennt helixverzerrende Schäden wie Thymindimere und ersetzt den fehlerhaften DNA-Abschnitt.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren",
      "Klinik"
    ]
  },
  {
    "id": "q-0201",
    "question": "Welche Sequenzelemente gehören typischerweise zum Core-Promotor eukaryotischer Gene?",
    "options": [
      "TATA-Box und Initiator (Inr)",
      "Shine-Dalgarno-Sequenz und Pribnow-Box",
      "Kozak-Sequenz und Poly-A-Signal",
      "Enhancer und Silencer"
    ],
    "correctIndex": 0,
    "explanation": "Der eukaryotische Core-Promotor umfasst häufig eine TATA-Box und/oder ein Initiator-Element; Shine-Dalgarno/Pribnow sind prokaryotisch.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren"
    ]
  },
  {
    "id": "q-0202",
    "question": "Welche Aussage zur RNA-Polymerase II trifft zu?",
    "options": [
      "Sie benötigt einen RNA-Primer wie DNA-Polymerasen",
      "Sie synthetisiert RNA ausschließlich in 3'→5'-Richtung",
      "Ihre Carboxyterminale Domäne (CTD) wird regulierend phosphoryliert",
      "Sie transkribiert ausschließlich rRNA (28S, 18S, 5.8S) im Nukleolus"
    ],
    "correctIndex": 2,
    "explanation": "Die CTD der RNA-Pol II wird während Initiation/Elongation unterschiedlich phosphoryliert; RNA-Synthese verläuft 5'→3' und ohne Primer.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren"
    ]
  },
  {
    "id": "q-0203",
    "question": "Welche Rolle spielen Allgemeine Transkriptionsfaktoren (GTFs) wie TFIIH?",
    "options": [
      "Erkennung der Shine-Dalgarno-Sequenz",
      "DNA-Aufschmelzen und CTD-Kinase-Aktivität",
      "Beladung der tRNA mit Aminosäuren",
      "Spaltung des 3'-Endes für Polyadenylierung"
    ],
    "correctIndex": 1,
    "explanation": "TFIIH besitzt Helikase- und CTD-Kinase-Aktivität und unterstützt Promotor-Schmelzen sowie Pol-II-Phosphorylierung.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren"
    ]
  },
  {
    "id": "q-0204",
    "question": "Welche Sequenz kennzeichnet das 5'-Capping eukaryotischer mRNAs?",
    "options": [
      "5'-5'-Triphosphatbrücke zu 7-Methylguanosin (m⁷G-Cap)",
      "3'-Poly(U)-Schwanz als alternatives Ende der mRNA",
      "5'-Monophosphat-Verknüpfung mit Adenosin am 5'-Ende",
      "Kovalente Bindung an eine spezifische tRNA-Molekülgruppe"
    ],
    "correctIndex": 0,
    "explanation": "Beim Cap entsteht eine 5'-5'-Triphosphatbrücke zu 7-Methylguanosin, die vor Abbau schützt und Translation erleichtert.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren"
    ]
  },
  {
    "id": "q-0205",
    "question": "Welche Komponenten bilden den Spliceosom-Kernkomplex?",
    "options": [
      "snRNPs (z. B. U1, U2, U4/U6, U5)",
      "miRNA-RISC",
      "Ribosomale Untereinheiten 30S/50S",
      "DNA-Polymerase δ und ε"
    ],
    "correctIndex": 0,
    "explanation": "Das Spliceosom besteht aus snRNPs, die prä-mRNA an 5'- und 3'-Spleißstellen sowie am Branchpoint erkennen und schneiden.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren"
    ]
  },
  {
    "id": "q-0206",
    "question": "Welche Aussage zur Polyadenylierung ist korrekt?",
    "options": [
      "Sie erfolgt ausschließlich im Zellkern prokaryotischer Organismen",
      "Das AAUAAA-Signal leitet den Endonuklease-Schnitt und Poly(A)-Synthese ein",
      "Poly(A)-Schwänze destabilisieren die mRNA und verkürzen ihre Halbwertszeit",
      "Sie ist für rRNA essenziell und findet im Nukleolus statt"
    ],
    "correctIndex": 1,
    "explanation": "Das AAUAAA-Motiv signalisiert Spaltung und anschließende Poly(A)-Polymerase-Aktivität; meist stabilisiert der Poly(A)-Schwanz mRNA.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren"
    ]
  },
  {
    "id": "q-0207",
    "question": "Wie wirken Enhancer typischerweise auf die Transkriptionsrate?",
    "options": [
      "Sie binden Repressoren und verringern die RNA-Pol-Affinität zur DNA",
      "Sie wirken ausschließlich stromabwärts (downstream) des Zielgens",
      "Sie erhöhen die Transkription über DNA-Looping und Aktivator-Rekrutierung",
      "Sie codieren direkt für snRNA-Moleküle des Spliceosoms"
    ],
    "correctIndex": 2,
    "explanation": "Enhancer können in variabler Position/Orientierung liegen und über Mediator/DNA-Looping Aktivatoren rekrutieren, wodurch die Transkription steigt.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0208",
    "question": "Welche epigenetische Modifikation ist typischerweise mit Transkriptionsrepression assoziiert?",
    "options": [
      "DNA-Methylierung von CpG-Inseln",
      "Histon-Acetylierung (H3/H4)",
      "Chromatin-Remodelling zu Euchromatin",
      "CTD-Phosphorylierung von Pol II"
    ],
    "correctIndex": 0,
    "explanation": "DNA-Methylierung an CpG-Inseln korreliert oft mit geringer Genaktivität; Histon-Acetylierung fördert dagegen Transkription.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0209",
    "question": "Welche Sequenz interagiert in Eukaryoten mit der kleinen ribosomalen Untereinheit zur Initiation der Translation?",
    "options": [
      "Shine-Dalgarno-Sequenz (Prokaryoten, 16S-rRNA-Bindung)",
      "Kozak-Konsensus um das Startcodon (AUG-Erkennung)",
      "Pribnow-Box (prokaryotischer −10-Promotor)",
      "AAUAAA-Signal (Polyadenylierungssignal der mRNA)"
    ],
    "correctIndex": 1,
    "explanation": "Die eukaryotische Initiation nutzt das 5'-Cap und den Kozak-Konsensus (z. B. GCCRCCAUGG) zur Startcodon-Erkennung.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren"
    ]
  },
  {
    "id": "q-0210",
    "question": "Wofür steht der Begriff „Wobble-Base-Pairing“?",
    "options": [
      "Fehlpaarung an der Replikationsgabel im DNA-Replikationsfork",
      "Flexibilität an Position 1 des Codons beim Aminosäureeinbau",
      "Nichtkanonische Basenpaarung an Position 3 des Codons/5' der Anticodonschleife",
      "Purin-Purin-Fehlpaarung in der mRNA-Kappe-Bindungsregion"
    ],
    "correctIndex": 2,
    "explanation": "Wobble betrifft die 3. Position des Codons (entspricht 5'-Ende der Anticodon-Base) und erlaubt degenerierte Codon-Erkennung durch tRNA.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren"
    ]
  },
  {
    "id": "q-0211",
    "question": "Welche Komponente bringt die korrekte Aminosäure an die tRNA?",
    "options": [
      "Elongationsfaktor eEF1A",
      "Aminoacyl‑tRNA‑Synthetase",
      "Peptidyl‑Transferasezentrum der 60S‑Untereinheit",
      "eIF4E"
    ],
    "correctIndex": 1,
    "explanation": "Aminoacyl‑tRNA‑Synthetasen katalysieren die spezifische Veresterung der Aminosäure am 3'-Ende der tRNA (CCA).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren",
      "Aminosäuren und Proteine"
    ]
  },
  {
    "id": "q-0212",
    "question": "Welche posttranslationale Modifikation markiert Proteine typischerweise für den proteasomalen Abbau?",
    "options": [
      "N-Glykosylierung am Asparagin im ER",
      "Ubiquitinierung (K48-verknüpft) am Lysin",
      "Myristoylierung am N-terminalen Glycin",
      "Phosphorylierung an Serin oder Threonin"
    ],
    "correctIndex": 1,
    "explanation": "K48‑polyubiquitinierte Proteine werden meist dem 26S‑Proteasom zugeführt.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Kompartimente",
      "Klinik"
    ]
  },
  {
    "id": "q-0213",
    "question": "Welche Aussage zur Phosphorylierung ist korrekt?",
    "options": [
      "Sie ist eine irreversible Modifikation ohne Gegenspieler",
      "Kinasen übertragen Phosphat typischerweise auf Ser/Thr/Tyr-Reste",
      "Sie findet ausschließlich im Zellkern an Histonproteinen statt",
      "Sie ersetzt stets eine vorhandene Acetylgruppe am Protein"
    ],
    "correctIndex": 1,
    "explanation": "Proteinkinasen phosphorylieren meist Ser/Thr oder Tyr; Phosphatasen machen die Modifikation reversibel.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Enzyme",
      "Hormone"
    ]
  },
  {
    "id": "q-0214",
    "question": "Wo beginnt der co‑translationale Import sekretorischer Proteine?",
    "options": [
      "Am freien 80S‑Ribosom im Zytosol ohne weitere Faktoren",
      "An der äußeren Mitochondrienmembran",
      "Am rER nach Erkennung des Signalpeptids durch SRP",
      "Im Zellkern an Kernporen"
    ],
    "correctIndex": 2,
    "explanation": "SRP erkennt das N‑terminale Signalpeptid und leitet das Ribosom an den SRP‑Rezeptor des rER; Translokation erfolgt über Sec61.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0215",
    "question": "Welche Sequenz hält ER‑luminale Proteine im ER zurück?",
    "options": [
      "PTS1 (SKL)",
      "KDEL‑Motiv am C‑Terminus",
      "NLS (basisches Kernlokalisationssignal)",
      "NES (leucinreich)"
    ],
    "correctIndex": 1,
    "explanation": "Das KDEL‑Signal (Lys‑Asp‑Glu‑Leu) vermittelt Retrieval aus dem Golgi zurück ins ER über KDEL‑Rezeptoren.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0216",
    "question": "Welche Aussage zur Chromatin‑Zugänglichkeit ist korrekt?",
    "options": [
      "Heterochromatin ist transkriptiv aktiv und DNase-I-hypersensitiv",
      "Acetylierung von Histon-Lysinen neutralisiert Ladung → Euchromatin → Zugänglichkeit",
      "Histon-Deacetylasen (HDACs) erhöhen die Transkriptionsrate von Genen",
      "ATP-abhängige Chromatin-Remodeller verringern stets die DNA-Zugänglichkeit"
    ],
    "correctIndex": 1,
    "explanation": "Histon‑Acetylierung neutralisiert positive Ladungen, lockert Nukleosomen und begünstigt Transkription.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0217",
    "question": "Welche Reaktion katalysiert die Peptidyl‑Transferaseaktivität des Ribosoms?",
    "options": [
      "Bildung der Peptidbindung zwischen Aminoacyl-tRNA (A) und Peptidyl-tRNA (P)",
      "Hydrolyse des tRNA-Esterbonds an der E-Stelle nach Translokation",
      "Beladung der tRNA mit der korrekten Aminosäure (Aminoacyl-tRNA-Synthetase)",
      "Deaminierung von ATG zu AUG bei der mRNA-Prozessierung"
    ],
    "correctIndex": 0,
    "explanation": "Das Peptidyl‑Transferasezentrum der großen Untereinheit (ribozyme) überträgt die Peptidkette auf die Aminoacyl‑tRNA an der A‑Stelle.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren",
      "Aminosäuren und Proteine"
    ]
  },
  {
    "id": "q-0218",
    "question": "Welche Domäne vermittelt oft DNA‑Bindung von Transkriptionsaktivatoren?",
    "options": [
      "SH3-Domäne (Prolin-reiche Sequenzen)",
      "bZIP- oder Helix-Turn-Helix-Motiv (DNA-Bindung)",
      "PH-Domäne (Phosphoinositid-Bindung)",
      "PDZ-Domäne (Protein-Protein-Interaktion)"
    ],
    "correctIndex": 1,
    "explanation": "Viele TFs besitzen bZIP, bHLH oder HTH‑Motife zur Sequenzspezifischen DNA‑Bindung.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren"
    ]
  },
  {
    "id": "q-0219",
    "question": "Welche Aussage zur Translationstermination in Eukaryoten ist richtig?",
    "options": [
      "Eine tRNA^Stop bindet an die Stoppcodons UAA, UAG oder UGA",
      "Release-Faktoren erkennen Stoppcodons und hydrolysieren die Peptidyl-tRNA",
      "Ribosomen gleiten automatisch über Stoppcodons hinweg (Read-through)",
      "Die Termination benötigt zwingend die Kozak-Sequenz als Signal"
    ],
    "correctIndex": 1,
    "explanation": "Eukaryotische eRFs erkennen Stoppcodons und fördern Hydrolyse des Esterbonds—die Polypeptidkette wird freigesetzt.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren",
      "Aminosäuren und Proteine"
    ]
  },
  {
    "id": "q-0220",
    "question": "Welche Aussage zur N‑gebundenen Glykosylierung trifft zu?",
    "options": [
      "Sie erfolgt im Golgi an Serin- oder Threonin-Resten",
      "Sie startet cotranslational am rER an Asn-X-Ser/Thr-Motiven (N-Glykosylierung)",
      "Sie entfernt das KDEL-Retentionssignal vom C-Terminus sekretorischer Proteine",
      "Sie markiert Proteine direkt für den proteasomalen Abbau"
    ],
    "correctIndex": 1,
    "explanation": "N‑Glykosylierung beginnt am rER, wo ein Oligosaccharid auf Asn‑X‑Ser/Thr übertragen und später im Golgi prozessiert wird.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0221",
    "question": "Welche Enzymklasse spaltet PIP₂ zu den Second Messengern DAG und IP₃?",
    "options": [
      "Phospholipase C",
      "Adenylatcyclase",
      "Guanylatcyclase",
      "Phosphodiesterase"
    ],
    "correctIndex": 0,
    "explanation": "Die Phospholipase C spaltet PIP₂ in DAG (membrangebunden) und IP₃ (löslich).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Lipide"
    ]
  },
  {
    "id": "q-0222",
    "question": "Ein 35-jähriger Mann wird bewusstlos in einer Garage aufgefunden. Der Patient atmet kaum, trotzdem misst der Notarzt einen SpO₂ von 98 % und der Patient hat eine kirschrote Hautfarbe. Welche Substanz erklärt diesen Befund?",
    "options": [
      "Cyanid – hemmt die Cytochrom-c-Oxidase (Komplex IV) der Atmungskette",
      "Kohlenmonoxid – bindet mit hoher Affinität an Hämoglobin und verdrängt O₂",
      "Methan – verdünnt den Sauerstoff in der eingeatmeten Atemluft",
      "Stickstoffdioxid – oxidiert Hämoglobin zu nicht-funktionstüchtigem Methämoglobin"
    ],
    "correctIndex": 1,
    "explanation": "CO bindet ca. 250× stärker an Hämoglobin als O₂ und bildet Carboxyhämoglobin. Das Pulsoximeter unterscheidet beide nicht → falsch hohe SpO₂. Therapie: 100 % O₂ oder Druckkammer.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Blut",
      "Klinik"
    ]
  },
  {
    "id": "q-0223",
    "question": "Ein 8-jähriger Junge aus Westafrika leidet seit früher Kindheit unter Episoden starker Knochenschmerzen, Milzvergrößerung und Anämie. Ein Blutausstrich zeigt sichelförmige Erythrozyten. Welche molekulare Ursache liegt vor?",
    "options": [
      "Deletion der α-Kette → fehlende Hämoglobin-Untereinheiten",
      "Punktmutation (Glu→Val) in der β-Kette → Aggregation unter Hypoxie",
      "Fehlerhafte Glykosylierung → instabiles Hämoglobin im Blut",
      "Überproduktion von HbF durch epigenetische Veränderungen"
    ],
    "correctIndex": 1,
    "explanation": "Sichelzellkrankheit: Glu6Val-Mutation in der HBB-β-Kette → HbS polymerisiert unter O₂-Mangel → Sichelform → Gefäßverschlüsse und Hämolyse. Klassisches Beispiel für Quartärstruktur-relevante Mutation.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Klinik"
    ]
  },
  {
    "id": "q-0224",
    "question": "Ein Seemann, der monatelang ohne frisches Obst und Gemüse auf See war, klagt über Zahnfleischbluten, schlecht heilende Wunden und Gelenkschmerzen. Welcher biochemische Defekt liegt vor?",
    "options": [
      "Vitamin-D-Mangel → gestörte Kalziumaufnahme im Darm (Rachitis/Osteomalazie)",
      "Vitamin-C-Mangel → gestörte Hydroxylierung von Prolin/Lysin in Kollagen (Skorbut)",
      "Vitamin-K-Mangel → gestörte Carboxylierung der Gerinnungsfaktoren (Blutungsneigung)",
      "Vitamin-B12-Mangel → gestörte DNA-Synthese in proliferierenden Zellen (Anämie)"
    ],
    "correctIndex": 1,
    "explanation": "Skorbut: Vitamin-C-Mangel hemmt Prolyl- und Lysylhydroxylase → instabile Kollagen-Triple-Helix → brüchige Gefäße, schlechte Wundheilung. Direkter klinischer Bezug zur Kollagen-Biochemie.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Klinik"
    ]
  },
  {
    "id": "q-0225",
    "question": "Eine 19-jährige Typ-1-Diabetikerin vergisst ihre Insulinspritze. Sie kommt mit Übelkeit, Bauchschmerzen, tiefer Atemfrequenz (Kussmaul-Atmung) und einem Blut-pH von 7,15 in die Notaufnahme. Welche Stoffwechsellage erklärt den Befund?",
    "options": [
      "Hypoglykämie durch übermäßige zelluläre Glukoseaufnahme",
      "Laktatazidose durch anaerobe Glykolyse in Muskeln",
      "Ketoazidose durch exzessive Ketonkörperbildung bei Insulinmangel",
      "Hyperosmoläres Koma durch osmotische Diurese ohne Ketonkörper"
    ],
    "correctIndex": 2,
    "explanation": "Insulinmangel → unkontrollierte Lipolyse → β-Oxidation → exzessives Acetyl-CoA → Ketonkörper (Acetoacetat, β-Hydroxybutyrat) → metabolische Azidose. Kussmaul-Atmung kompensiert durch CO₂-Abatmung.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Klinik"
    ]
  },
  {
    "id": "q-0226",
    "question": "Ein Intensivpatient mit septischem Schock entwickelt einen Blut-pH von 7,18 und einen Laktat-Spiegel von 9 mmol/l (Norm <2). Welcher Mechanismus ist primär verantwortlich?",
    "options": [
      "Übermäßige Ketonkörperbildung durch gesteigerte hepatische Lipolyse",
      "Gewebehypoxie → anaerobe Glykolyse → Laktatakkumulation (Typ-A-Azidose)",
      "Übermäßige Insulinausschüttung mit konsekutiver schwerer Hypoglykämie",
      "Renale Bikarbonatverluste durch proximale tubuläre Azidose"
    ],
    "correctIndex": 1,
    "explanation": "Bei Gewebehypoxie fehlt O₂ für die Atmungskette → NAD⁺-Mangel → LDH reduziert Pyruvat zu Laktat zur NAD⁺-Regeneration → Laktatazidose. Direkter Bezug zum Cori-Zyklus und anaeroben Stoffwechsel.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Bioenergetik",
      "Klinik"
    ]
  },
  {
    "id": "q-0227",
    "question": "Ein 6 Monate altes Kind fällt durch Hypoglykämie, Laktatazidose, eine massiv vergrößerte Leber und Wachstumsverzögerung auf. Leberbiopsie zeigt exzessive Glykogeneinlagerung. Welches Enzym ist defekt?",
    "options": [
      "Glykogensynthase-Defekt – zu wenig Glykogen wird aufgebaut (GSD 0)",
      "Glucose-6-Phosphatase-Defekt – Glykogen kann nicht zu freier Glukose abgebaut werden",
      "Glykogenphosphorylase-Defekt – Glykogen kann nicht mobilisiert werden (GSD V)",
      "Hexokinase-Defekt – Glukose wird nicht phosphoryliert und nicht gespeichert"
    ],
    "correctIndex": 1,
    "explanation": "Morbus von Gierke (GSD Typ I): Glucose-6-Phosphatase-Mangel → G6P kann nicht zu Glukose dephosphoryliert werden → keine Blutglukosefreisetzung aus Leber → Hypoglykämie und Glykogenstau.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kohlenhydrate",
      "Klinik"
    ]
  },
  {
    "id": "q-0228",
    "question": "Bei einem 65-jährigen Parkinson-Patienten werden in der Histologie sogenannte Lewy-Körperchen in Neuronen gefunden – Aggregate aus fehlgefaltetem α-Synuclein. Welches zelluläre System ist bei der Entstehung dieser Pathologie mitbeteiligt?",
    "options": [
      "Überfunktion des Proteasoms führt zu übermäßigem Proteinabbau in Neuronen",
      "Dysfunktion des Ubiquitin-Proteasom-Systems verhindert Abbau fehlgefalteter Proteine",
      "Überaktivierung der Lysosomen führt zu autophager Zelllyse in Neuronen",
      "Defekte Ribosomen produzieren übermäßig viel fehlgefaltetes α-Synuclein"
    ],
    "correctIndex": 1,
    "explanation": "Fehlgefaltete Proteine sollten durch das UPS abgebaut werden. Bei Parkinson ist dieses System überlastet oder dysfunktional → α-Synuclein akkumuliert → Lewy-Körperchen → Neurodegeneration.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kompartimente",
      "Klinik"
    ]
  },
  {
    "id": "q-0229",
    "question": "Ein Kind leidet seit früher Kindheit an extremer Lichtempfindlichkeit der Haut, häufigen Sonnenbrandreaktionen und einem drastisch erhöhten Hautkrebsrisiko. Welcher molekulare Defekt liegt vor?",
    "options": [
      "Defekt der Basen-Exzisionsreparatur – oxidierte Basen nicht entfernt",
      "Defekt der Nukleotid-Exzisionsreparatur – UV-Thymindimere nicht repariert",
      "Defekt der Mismatch-Reparatur – Replikationsfehler häufen sich",
      "Defekt der homologen Rekombination – Doppelstrangbrüche unrepariert"
    ],
    "correctIndex": 1,
    "explanation": "Xeroderma pigmentosum: Defekte NER-Proteine (z. B. XPA–XPG) können UV-induzierte Thymindimere nicht entfernen → Mutationsakkumulation → hohes Hautkrebsrisiko.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren",
      "Klinik"
    ]
  },
  {
    "id": "q-0230",
    "question": "Fluorchinolone (z. B. Ciprofloxacin) sind wichtige Antibiotika gegen bakterielle Infektionen. Welches Enzym hemmen sie und warum wirken sie selektiv auf Bakterien?",
    "options": [
      "Sie hemmen die bakterielle RNA-Polymerase (β-Untereinheit) – wie Rifampicin",
      "Sie hemmen bakterielle Topoisomerasen (DNA-Gyrase/Topo IV), nicht eukaryotische",
      "Sie hemmen die bakterielle Ribonukleotid-Reduktase und blockieren dNTP-Synthese",
      "Sie hemmen das bakterielle Ribosom an der 30S-Untereinheit – wie Aminoglykoside"
    ],
    "correctIndex": 1,
    "explanation": "Fluorchinolone hemmen die bakterielle DNA-Gyrase (Topo II) und Topoisomerase IV → DNA-Replikation und -Transkription gestoppt. Eukaryotische Topoisomerasen haben andere Struktur → Selektivität.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren",
      "Klinik"
    ]
  },
  {
    "id": "q-0231",
    "question": "N-Acetylcystein (NAC) wird als Mukolytikum bei zähflüssigem Bronchialsekret eingesetzt. Welcher biochemische Mechanismus erklärt seine schleimverflüssigende Wirkung?",
    "options": [
      "NAC phosphoryliert Muzinproteine und verändert deren elektrische Ladung",
      "NAC spaltet Disulfidbrücken in Muzin-Netzwerken und reduziert die Viskosität",
      "NAC aktiviert muzinabbauende Serinproteasen in den Atemwegen",
      "NAC hemmt die Muzinsekretion direkt durch Becherzellen der Bronchien"
    ],
    "correctIndex": 1,
    "explanation": "Muzine sind durch Disulfidbrücken vernetzt → zähes Gel. NAC liefert freie Thiolgruppen (-SH), die Disulfidbrücken reduktiv spalten → Muzinnetzwerk löst sich auf → Sekret wird flüssiger.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Klinik"
    ]
  },
  {
    "id": "q-0232",
    "question": "Ein 58-jähriger Hypertoniker erhält Ramipril, einen ACE-Hemmer. Welcher biochemische Mechanismus senkt seinen Blutdruck?",
    "options": [
      "Ramipril blockiert kompetitiv ACE und verhindert so die Angiotensin-II-Bildung",
      "Ramipril aktiviert die Guanylatcyclase und erhöht cGMP in Gefäßmuskelzellen",
      "Ramipril hemmt direkt die Aldosteronsynthase in der Nebennierenrinde",
      "Ramipril blockiert β₁-Adrenozeptoren am Herzen und senkt das Herzminutenvolumen"
    ],
    "correctIndex": 0,
    "explanation": "ACE ist eine Zinkmetalloprotease, die Angiotensin I → Angiotensin II spaltet. Ramipril bindet kompetitiv das aktive Zentrum → weniger Ang II → weniger Vasokonstriktion und Aldosteronsekretion → Blutdrucksenkung.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Klinik"
    ]
  },
  {
    "id": "q-0233",
    "question": "Ein Asthmapatient fragt seinen Arzt, warum er keinen herkömmlichen Beta-Blocker gegen seinen Bluthochdruck nehmen darf. Welche Gefahr besteht?",
    "options": [
      "Nicht-selektive Beta-Blocker hemmen β₁ und β₂ → Bronchospasmus durch β₂-Hemmung",
      "Beta-Blocker erhöhen die Histaminausschüttung aus Mastzellen und verstärken Allergie",
      "Beta-Blocker hemmen die Kortikosteroidproduktion und verschlechtern die Entzündung",
      "Beta-Blocker aktivieren α₁-Rezeptoren in der Bronchialschleimhaut und fördern Schleimsekretion"
    ],
    "correctIndex": 0,
    "explanation": "β₂-Rezeptoren in der Bronchialmuskulatur vermitteln Bronchodilatation (via cAMP/PKA). Nicht-selektive Beta-Blocker (z. B. Propranolol) blockieren auch β₂ → Bronchokonstriktion → lebensbedrohlicher Asthmaanfall.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Hormone",
      "Klinik"
    ]
  },
  {
    "id": "q-0234",
    "question": "Ein Patient mit Morbus Gaucher leidet unter Milz- und Lebervergrößerung sowie Knochenschmerzen durch Anreicherung von Glucocerebrosid in Makrophagen. Welcher Enzymdefekt liegt vor?",
    "options": [
      "Defekt der Sphingomyelinase → Sphingomyelin akkumuliert in Lysosomen (Niemann-Pick)",
      "Defekt der Glucocerebrosidase → Glucocerebrosid akkumuliert in Lysosomen (Gaucher)",
      "Defekt der Hexosaminidase A → GM2-Gangliosid akkumuliert in Neuronen (Tay-Sachs)",
      "Defekt der α-Galaktosidase A → Globotriaosylceramid akkumuliert in Gefäßen (Fabry)"
    ],
    "correctIndex": 1,
    "explanation": "Morbus Gaucher: Mangel an lysosomaler Glucocerebrosidase → Glucocerebrosid häuft sich in Lysosomen von Makrophagen an → Speicherzellen (Gaucher-Zellen) → Organomegalie und Knocheninfiltration.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kompartimente",
      "Klinik"
    ]
  },
  {
    "id": "q-0235",
    "question": "Telomerase ist in den meisten Körperzellen inaktiv, in Tumorzellen jedoch häufig reaktiviert. Welche klinische Bedeutung hat dies?",
    "options": [
      "Tumorzellen leiten durch Telomerase-Reaktivierung gezielt Apoptose ein",
      "Reaktivierte Telomerase verhindert Seneszenz und ermöglicht unbegrenzte Teilung",
      "Telomerase repariert DNA-Doppelstrangbrüche und stabilisiert so das Tumorgenom",
      "Telomerase methyliert Tumorsuppressorgene und reaktiviert diese dadurch"
    ],
    "correctIndex": 1,
    "explanation": "Normale Zellen verlieren bei jeder Teilung Telomersequenzen → Seneszenz oder Apoptose. Tumorzellen reaktivieren Telomerase → Telomere bleiben erhalten → replikative Unsterblichkeit. Daher ist Telomerase ein Angriffspunkt in der Krebstherapie.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren",
      "Klinik"
    ]
  },
  {
    "id": "q-0236",
    "question": "Metformin ist das meistverordnete Medikament bei Typ-2-Diabetes. Einer seiner Wirkmechanismen beruht auf der Hemmung eines mitochondrialen Komplexes. Welcher ist das und was ist die Folge?",
    "options": [
      "Hemmung von Komplex II → verminderte FADH₂-Oxidation → weniger Fettsäureabbau",
      "Hemmung von Komplex I → AMPK-Aktivierung → Hemmung der Glukoneogenese und Lipogenese",
      "Hemmung von Komplex IV → Sauerstoffakkumulation → reaktive Sauerstoffspezies",
      "Hemmung der ATP-Synthase → direkter ATP-Mangel → kompensatorische Insulinsekretion"
    ],
    "correctIndex": 1,
    "explanation": "Metformin hemmt mild Komplex I → weniger ATP, mehr AMP → AMPK aktiviert → hepatische Glukoneogenese gehemmt, Glukoseaufnahme gefördert. Bei Monotherapie quasi kein Hypoglykämierisiko, da insulinunabhängig.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Bioenergetik",
      "Klinik"
    ]
  },
  {
    "id": "q-0237",
    "question": "Wohin geht die Aminogruppe (NH₂) beim Abbau von Aminosäuren primär?",
    "options": [
      "Direkt in die Atmungskette als Elektronendonator",
      "In den Harnstoffzyklus oder durch Transaminierung auf andere Ketosäuren",
      "In den Citratzyklus direkt als Anaplerosesubstrat",
      "Direkt zur renalen Ausscheidung als NH₄⁺ in die Niere"
    ],
    "correctIndex": 1,
    "explanation": "Die Aminogruppe wird durch Transaminierung auf α-Ketoglutarat übertragen (→ Glutamat) oder durch oxidative Desaminierung als NH₃ freigesetzt und im Harnstoffzyklus entgiftet.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Bioenergetik",
      "Klinik"
    ]
  },
  {
    "id": "q-0238",
    "question": "Welche Aminosäure wirkt im ZNS als wichtigster exzitatorischer Neurotransmitter?",
    "options": [
      "Glycin",
      "GABA",
      "Glutamat",
      "Taurin"
    ],
    "correctIndex": 2,
    "explanation": "Glutamat ist der wichtigste exzitatorische Neurotransmitter im ZNS und aktiviert NMDA-, AMPA- und Kainat-Rezeptoren. GABA und Glycin sind inhibitorisch.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Klinik"
    ]
  },
  {
    "id": "q-0239",
    "question": "Aus welcher Aminosäure entsteht der inhibitorische Neurotransmitter GABA und durch welche Reaktion?",
    "options": [
      "Aus Glycin durch Hydroxylierung (Glycin-Hydroxylase)",
      "Aus Glutamat durch Decarboxylierung (GAD, Cofaktor PLP)",
      "Aus Aspartat durch Transaminierung (Aspartat-Aminotransferase)",
      "Aus Tryptophan durch Oxidation (Tryptophan-Oxidase)"
    ],
    "correctIndex": 1,
    "explanation": "GABA (γ-Aminobuttersäure) entsteht durch Decarboxylierung von Glutamat via Glutamatdecarboxylase, die Pyridoxalphosphat (Vitamin B6) als Cofaktor benötigt.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Klinik"
    ]
  },
  {
    "id": "q-0240",
    "question": "Welche Funktion hat Glutathion im Oxidationsschutz der Zelle?",
    "options": [
      "Es neutralisiert Säuren im Lysosom durch Pufferkapazität",
      "Als Tripeptid (Glu-Cys-Gly) reduziert es reaktive Sauerstoffspezies via Thiolgruppe",
      "Es aktiviert die Superoxiddismutase allosterisch",
      "Es bildet Disulfidbrücken im extrazellulären Kollagengerüst"
    ],
    "correctIndex": 1,
    "explanation": "Glutathion (γ-Glu-Cys-Gly) neutralisiert ROS durch seine freie -SH-Gruppe des Cysteins. Die oxidierte Form (GSSG) wird durch Glutathionreduktase unter NADPH-Verbrauch regeneriert.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Klinik"
    ]
  },
  {
    "id": "q-0241",
    "question": "Welcher universelle Cofaktor wird für alle Transaminierungsreaktionen benötigt?",
    "options": [
      "Thiaminpyrophosphat (B1)",
      "Pyridoxalphosphat (B6)",
      "Biotin (B7)",
      "Cobalamin (B12)"
    ],
    "correctIndex": 1,
    "explanation": "Pyridoxalphosphat (PLP, aktive Form von Vitamin B6) ist der Cofaktor aller Aminotransferasen. Es überträgt die Aminogruppe als Schiff'sche Base zwischen Amino- und Ketosäuren.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Enzyme"
    ]
  },
  {
    "id": "q-0242",
    "question": "Welche Reaktion katalysiert die Alanin-Aminotransferase (ALT)?",
    "options": [
      "Alanin + NAD⁺ → Pyruvat + NH₃ + NADH",
      "Alanin + α-Ketoglutarat ↔ Pyruvat + Glutamat",
      "Alanin + Oxalacetat ↔ Aspartat + Pyruvat",
      "Alanin + ATP → Alanyl-tRNA + AMP + PPᵢ"
    ],
    "correctIndex": 1,
    "explanation": "ALT überträgt die Aminogruppe von Alanin auf α-Ketoglutarat → Pyruvat + Glutamat. Diese Reaktion ist zentral im Glucose-Alanin-Zyklus und klinisch wichtig als Lebermarker.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Enzyme"
    ]
  },
  {
    "id": "q-0243",
    "question": "Welche Reaktion katalysiert die Aspartat-Aminotransferase (AST)?",
    "options": [
      "Aspartat + α-Ketoglutarat ↔ Oxalacetat + Glutamat",
      "Aspartat + Pyruvat ↔ Alanin + Oxalacetat (Transaminierung)",
      "Aspartat + NAD⁺ → Fumarat + NH₃ + NADH (Desaminierung)",
      "Aspartat + ATP → AMP + PPᵢ + Carbamoylaspartat (Synthetase)"
    ],
    "correctIndex": 0,
    "explanation": "AST überträgt die Aminogruppe von Aspartat auf α-Ketoglutarat → Oxalacetat + Glutamat. AST ist in Leber und Herzmuskel hoch konzentriert und ein wichtiger klinischer Marker.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Enzyme"
    ]
  },
  {
    "id": "q-0244",
    "question": "Was beschreibt die oxidative Desaminierung von Glutamat durch die Glutamatdehydrogenase (GDH)?",
    "options": [
      "Glutamat + NAD⁺ → α-Ketoglutarat + NH₃ + NADH",
      "Glutamat + O₂ → α-Ketoglutarat + H₂O₂ + NH₃",
      "Glutamat + FAD → Succinyl-CoA + FADH₂ + NH₄⁺",
      "Glutamat + ATP → Glutamin + ADP + Pᵢ (Glutaminsynthetase)"
    ],
    "correctIndex": 0,
    "explanation": "GDH katalysiert: Glutamat + NAD⁺ → α-Ketoglutarat + NH₃ + NADH (katabole Richtung, in Lebermitochondrien). NADP⁺ wird in der anabolen Richtung bevorzugt. Dieser Schritt ist zentral für die Stickstofffreisetzung vor dem Harnstoffzyklus.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Enzyme"
    ]
  },
  {
    "id": "q-0245",
    "question": "Was ist die Funktion des Glucose-Alanin-Zyklus?",
    "options": [
      "Transport von Fettsäuren aus dem Muskel zur Leber für die β-Oxidation",
      "Transport von Stickstoff (als Alanin) zur Leber und Rücklieferung von Glukose",
      "Transport von Ketonkörpern aus der Leber zum Muskel als Energiequelle",
      "Transport von Laktat aus der Leber zum Muskel für die Glykogensynthese"
    ],
    "correctIndex": 1,
    "explanation": "Im Muskel: Pyruvat + Glutamat → Alanin (ALT) → Alanin ins Blut. In der Leber: Alanin → Pyruvat (Gluconeogenese) + NH₃ (Harnstoffzyklus). Glukose kehrt zum Muskel zurück.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Kohlenhydrate"
    ]
  },
  {
    "id": "q-0246",
    "question": "Welcher Stickstoffträger transportiert im Blut die meiste Aminogruppe aus peripheren Geweben zur Leber?",
    "options": [
      "Aspartat und Asparagin",
      "Harnstoff und Ammoniak",
      "Glutamin und Alanin",
      "Ammonium (NH₄⁺) und Citrullin"
    ],
    "correctIndex": 2,
    "explanation": "Glutamin (vor allem aus Muskel, Gehirn, Darm) und Alanin (Glucose-Alanin-Zyklus aus Muskel) sind die wichtigsten nicht-toxischen Stickstofftransporter im Blut zur Leber.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Bioenergetik"
    ]
  },
  {
    "id": "q-0247",
    "question": "In welchen Zellkompartimenten findet der Harnstoffzyklus statt?",
    "options": [
      "Ausschließlich im Cytosol der Leberzellen (Hepatozyten)",
      "Ausschließlich in der mitochondrialen Matrix der Leber",
      "Teils in der mitochondrialen Matrix (CPS1, OTC), teils im Cytosol (AS, AL, Arginase)",
      "Im endoplasmatischen Retikulum und Cytosol der Hepatozyten"
    ],
    "correctIndex": 2,
    "explanation": "Der Harnstoffzyklus beginnt mitochondrial (CPS1: NH₃ + CO₂ → Carbamoylphosphat; OTC: → Citrullin) und wird im Cytosol fortgeführt (Argininosuccinat-Synthase, -Lyase, Arginase).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0248",
    "question": "Was katalysiert die Carbamoylphosphat-Synthetase 1 (CPS1) und was unterscheidet sie von CPS2?",
    "options": [
      "CPS1 cytoplasmatisch (Pyrimidine, Glutamin), CPS2 mitochondrial (Harnstoff, NH₃)",
      "CPS1 mitochondrial (Harnstoffzyklus, NH₃), CPS2 cytoplasmatisch (Pyrimidine, Glutamin)",
      "Beide Isoformen sind funktionell identisch und nur organspezifisch exprimiert",
      "CPS1 benötigt Biotin als Cofaktor, CPS2 Pyridoxalphosphat (PLP)"
    ],
    "correctIndex": 1,
    "explanation": "CPS1 (Mitochondrien, Leber): NH₃ + CO₂ + 2 ATP → Carbamoylphosphat → Harnstoffzyklus. CPS2 (Cytosol, alle Zellen): Glutamin als N-Quelle → Pyrimidinsynthese. Aktivator von CPS1: N-Acetylglutamat.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Nukleinsäuren"
    ]
  },
  {
    "id": "q-0249",
    "question": "Welche klinischen Folgen hat eine schwere Hyperammonämie?",
    "options": [
      "Hypoglykämie und Laktatazidose durch Hemmung der Glykolyse",
      "Hepatische Enzephalopathie mit Bewusstseinstrübung, Tremor und Koma",
      "Metabolische Alkalose durch übermäßige NH₄⁺-Bildung in der Niere",
      "Hämolytische Anämie durch direkte Schädigung der Erythrozytenmembran"
    ],
    "correctIndex": 1,
    "explanation": "NH₃ ist neurotoxisch: es stört den Glutamat-Stoffwechsel im Gehirn (→ Glutamin↑, osmotisches Ödem), hemmt den Citratzyklus und führt zu hepatischer Enzephalopathie bis zum Koma.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Klinik"
    ]
  },
  {
    "id": "q-0250",
    "question": "Welche zwei Aminosäuren sind rein ketogen – d. h. ihr Kohlenstoffgerüst kann nicht zur Glukosesynthese genutzt werden?",
    "options": [
      "Alanin und Glutamat",
      "Leucin und Lysin",
      "Phenylalanin und Tyrosin",
      "Isoleucin und Tryptophan"
    ],
    "correctIndex": 1,
    "explanation": "Leucin und Lysin sind die einzigen rein ketogenen Aminosäuren – ihr Kohlenstoffgerüst wird ausschließlich zu Acetyl-CoA oder Acetoacetat abgebaut, die nicht gluconeogenetisch genutzt werden können.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Bioenergetik"
    ]
  },
  {
    "id": "q-0251",
    "question": "Welche Aussage zu gemischt ketogen/glucogenen Aminosäuren trifft zu?",
    "options": [
      "Alle proteinogenen Aminosäuren sind gemischt ketogen/glucogen",
      "Isoleucin und die aromatischen Aminosäuren (Phe, Tyr, Trp) sind gemischt ketogen/glucogen",
      "Nur Methionin und Cystein sind gemischt ketogen/glucogen",
      "Gemischt ketogen/glucogen bedeutet, dass sie sowohl im Muskel als auch in der Leber abgebaut werden"
    ],
    "correctIndex": 1,
    "explanation": "Gemischt ketogen/glucogen: Ile, Phe, Tyr, Trp (aromatische AS). Sie liefern teils glucogene Intermediate (Fumarat, Succinyl-CoA, etc.) und teils ketogene (Acetoacetyl-CoA, Acetyl-CoA).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Bioenergetik"
    ]
  },
  {
    "id": "q-0252",
    "question": "Zu welchen 7 zentralen Molekülen wird das Kohlenstoffgerüst aller Aminosäuren abgebaut?",
    "options": [
      "Glukose, Fruktose, Galaktose, Mannose, Ribose, Xylose, Arabinose",
      "Pyruvat, Acetyl-CoA, Acetoacetyl-CoA, α-Ketoglutarat, Succinyl-CoA, Fumarat, Oxalacetat",
      "ATP, NADH, FADH₂, GTP, NADPH, CoA, Ubichinol",
      "Malat, Citrat, Isocitrat, Succinat, Aconitat, Oxalosuccinat, Glutamat"
    ],
    "correctIndex": 1,
    "explanation": "Das Kohlenstoffgerüst aller 20 AS mündet in 7 Moleküle: Pyruvat und 4 Citratzyklus-Intermediate (α-KG, Succinyl-CoA, Fumarat, OAA) sowie die ketogenen Acetyl-CoA und Acetoacetyl-CoA.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Bioenergetik"
    ]
  },
  {
    "id": "q-0253",
    "question": "Welches Enzym ist für den ersten Schritt des Phenylalanin-Abbaus verantwortlich und welchen Cofaktor benötigt es?",
    "options": [
      "Tyrosinase; Cofaktor Kupfer (Cu²⁺)",
      "Phenylalanin-Hydroxylase; Cofaktor Tetrahydrobiopterin (BH4)",
      "Phenylalanin-Aminotransferase; Cofaktor Pyridoxalphosphat (PLP)",
      "Phenylpyruvat-Decarboxylase; Cofaktor Thiaminpyrophosphat (TPP)"
    ],
    "correctIndex": 1,
    "explanation": "Phenylalanin-Hydroxylase (PAH) hydroxyliert Phe → Tyr und benötigt Tetrahydrobiopterin (BH4) als Elektronendonor. Bei PAH-Mangel oder BH4-Mangel entsteht Phenylketonurie (PKU).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Enzyme"
    ]
  },
  {
    "id": "q-0254",
    "question": "Was akkumuliert bei der klassischen Phenylketonurie (PKU) und warum ist dies schädlich?",
    "options": [
      "Tyrosin akkumuliert und hemmt die Dopaminsynthese im ZNS",
      "Phenylalanin und Nebenprodukte (Phenylpyruvat) akkumulieren und schädigen das Gehirn",
      "Homogentisinsäure akkumuliert und lagert sich in Gelenken und Knorpel ab (Alkaptonurie)",
      "Fumarat akkumuliert und hemmt den Citratzyklus direkt in Leberzellen"
    ],
    "correctIndex": 1,
    "explanation": "Bei PKU (PAH-Mangel) akkumuliert Phe und wird alternativ zu Phenylpyruvat, Phenylacetat und Phenyllactat abgebaut. Diese Metabolite sind neurotoxisch und führen unbehandelt zu schwerer geistiger Behinderung.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Klinik"
    ]
  },
  {
    "id": "q-0255",
    "question": "Welche Behandlung ist bei klassischer PKU (Phenylketonurie) die Grundlage der Therapie?",
    "options": [
      "Insulingabe zur Förderung der Phenylalanin-Aufnahme in Körperzellen",
      "Lebenslange phenylalaninarme Diät zur Vermeidung der Akkumulation",
      "Substitution von Tyrosin ohne Reduktion der Phenylalaninaufnahme",
      "Enzymersatztherapie mit rekombinanter Phenylalanin-Hydroxylase i.v."
    ],
    "correctIndex": 1,
    "explanation": "Grundlage ist die lebenslange Phenylalanin-arme Diät (kein normales Protein, speziell formulierte AS-Mischungen mit erhöhtem Tyrosinanteil). Zusätzlich kann bei BH4-sensitiver PKU Sapropterin (synthetisches BH4) eingesetzt werden.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Klinik"
    ]
  },
  {
    "id": "q-0256",
    "question": "Was bestimmt die Halbwertszeit (T1/2) eines Proteins im Ubiquitin-Proteasom-System maßgeblich?",
    "options": [
      "Die Länge der Polypeptidkette in Aminosäuren bestimmt die Stabilität",
      "Degrons (z. B. PEST-Sequenzen, N-End-Regel) lösen die Ubiquitinierung aus",
      "Der GC-Gehalt der kodierenden mRNA reguliert die Proteinmenge",
      "Die Anzahl der Disulfidbrücken schützt vor proteasomalem Abbau"
    ],
    "correctIndex": 1,
    "explanation": "Degrons sind Zerstörungs-Signale: PEST-Sequenzen (reich an Pro, Glu, Ser, Thr), N-End-Regel (bestimmte N-terminale AS → kurze T1/2), Phosphorylierungsmarker. Sie werden von E3-Ligasen erkannt → Ubiquitinierung.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0257",
    "question": "Welche Rolle spielen E3-Ubiquitin-Ligasen im Proteinabbau?",
    "options": [
      "Sie aktivieren Ubiquitin durch ATP-abhängige Adenylierung (wie E1)",
      "Sie übertragen Ubiquitin von E2 auf das Substrat und bestimmen die Spezifität",
      "Sie entfalten Proteine aktiv vor dem Eintritt ins 26S-Proteasom",
      "Sie hydrolysieren die Isopeptidbindung zwischen Ubiquitin und Substrat"
    ],
    "correctIndex": 1,
    "explanation": "E3-Ligasen sind die spezifitätsvermittelnden Enzyme: sie erkennen das Substrat (Degron) und übertragen Ubiquitin von E2 auf Lysinreste des Zielproteins. Hunderte verschiedene E3s gibt es im Genom.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0258",
    "question": "Wie nutzt das Virus HPV (Humanes Papillomavirus) das Ubiquitin-Proteasom-System zu seinem Vorteil?",
    "options": [
      "HPV hemmt das Proteasom, um eigene Proteine vor dem Abbau zu schützen",
      "HPV-Onkoprotein E6 rekrutiert E3-Ligase (E6-AP) → p53-Ubiquitinierung → Abbau",
      "HPV kodiert für ein eigenes Ubiquitin, das zelluläre Proteine stabilisiert",
      "HPV aktiviert Deubiquitinasen, um seinen Replikationsmechanismus zu fördern"
    ],
    "correctIndex": 1,
    "explanation": "HPV-E6 bindet die E3-Ligase E6-AP → Komplex ubiquitiniert den Tumorsuppressor p53 → proteasomaler Abbau → Zelle verliert Wachstumskontrolle. Dies ist ein zentraler Mechanismus der HPV-Karzinogenese.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kompartimente",
      "Klinik"
    ]
  },
  {
    "id": "q-0259",
    "question": "Welche Aufgabe hat der Mannose-6-Phosphat-Rezeptor (M6PR)?",
    "options": [
      "Er transportiert Glukose in Lysosomen zur Glykogensynthese",
      "Er leitet M6P-markierte lysosomale Enzyme vom Golgi zu Lysosomen",
      "Er vermittelt die Clathrin-abhängige Endozytose von LDL-Partikeln",
      "Er aktiviert lysosomale Enzyme durch direkte Phosphorylierung"
    ],
    "correctIndex": 1,
    "explanation": "Lysosomale Enzyme erhalten im cis-Golgi ein Mannose-6-Phosphat-Signal (M6P). M6PR im trans-Golgi-Netzwerk erkennt M6P und transportiert die Enzyme in späte Endosomen/Lysosomen. Bei M6PR-Defekt: I-Zell-Krankheit.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kompartimente",
      "Klinik"
    ]
  },
  {
    "id": "q-0260",
    "question": "Was sind lysosomale Speicherkrankheiten (LSDs) und was haben sie gemeinsam?",
    "options": [
      "Erkrankungen durch Überproduktion lysosomaler Enzyme mit systemischer Toxizität",
      "Erkrankungen durch Defekt eines lysosomalen Enzyms → Akkumulation unverdauter Substrate",
      "Erkrankungen durch zusätzliches M6P-Signal → nicht-lysosomale Enzyme werden fälschlich in das Lysosom sortiert",
      "Erkrankungen durch übermäßige Autophagie mit progressivem Selbstverdau von Organellen"
    ],
    "correctIndex": 1,
    "explanation": "LSDs entstehen durch Mangel eines lysosomalen Hydrolasen → Substrate (Sphingolipide, Mukopolysaccharide, Glykoproteine) akkumulieren in Lysosomen → progressive Organschäden. Beispiele: Gaucher, Tay-Sachs, Morbus Fabry.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kompartimente",
      "Klinik"
    ]
  },
  {
    "id": "q-0261",
    "question": "Welcher Zusammenhang besteht zwischen Alpha-1-Antitrypsin (AAT), Elastase und der Entstehung von COPD?",
    "options": [
      "AAT aktiviert Elastase → übermäßiger Kollagenabbau → Lungenfibrose",
      "AAT hemmt Neutrophilen-Elastase; AAT-Mangel → Elastaseabbau → Emphysem/COPD",
      "Elastase hemmt AAT-Synthese in der Leber → sekundärer Mangel",
      "AAT und Elastase konkurrieren um dieselben Substrate im Blutplasma"
    ],
    "correctIndex": 1,
    "explanation": "Neutrophile setzen Elastase frei, die normalerweise durch AAT (α1-Antitrypsin, Serin-Proteaseinhibitor) gehemmt wird. Bei AAT-Mangel (genetisch oder durch Rauchen) → Lungengewebsabbau → Lungenemphysem und COPD.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Klinik"
    ]
  },
  {
    "id": "q-0262",
    "question": "Was produzieren die Belegzellen (Parietalzellen) des Magens und wie?",
    "options": [
      "Pepsinogen durch konstitutive Exozytose aus apikalen Speichervesikeln",
      "HCl durch die H⁺/K⁺-ATPase (Protonenpumpe) unter ATP-Verbrauch",
      "Muzine durch Golgi-vermittelte regulierte Exozytose in Becherzellen",
      "Trypsinogen durch proteolytische Aktivierung aus Pepsinogen-Vorstufen"
    ],
    "correctIndex": 1,
    "explanation": "Belegzellen sezernieren HCl über die H⁺/K⁺-ATPase (Protonenpumpe): sie pumpen H⁺ ins Magenlumen gegen K⁺. H⁺ stammt aus CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻ (Carboanhydrase).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0263",
    "question": "Welche Rolle spielt die Carboanhydrase in den Belegzellen bei der HCl-Produktion?",
    "options": [
      "Sie aktiviert die H⁺/K⁺-ATPase durch direkte Phosphorylierung",
      "CO₂ + H₂O → H⁺ + HCO₃⁻: Sie liefert H⁺-Ionen für die HCl-Sekretion",
      "Sie neutralisiert überschüssige HCl direkt im Magenlumen",
      "Sie spaltet Pepsinogen proteolytisch zu aktivem Pepsin"
    ],
    "correctIndex": 1,
    "explanation": "Carboanhydrase (CA II) in Belegzellen: CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻. H⁺ wird durch H⁺/K⁺-ATPase ins Lumen gepumpt, HCO₃⁻ wird basolateral gegen Cl⁻ ausgetauscht (→ 'alkaline tide' postprandial).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Klinik"
    ]
  },
  {
    "id": "q-0264",
    "question": "Wie wirkt Pantoprazol als Protonenpumpeninhibitor (PPI)?",
    "options": [
      "Blockiert reversibel H₂-Rezeptoren und senkt cAMP in Belegzellen",
      "Bindet irreversibel (kovalent) an die H⁺/K⁺-ATPase und hemmt HCl-Sekretion",
      "Neutralisiert HCl im Magenlumen durch Pufferkapazität (Antazidum)",
      "Hemmt die Carboanhydrase und verhindert so die H⁺-Bereitstellung"
    ],
    "correctIndex": 1,
    "explanation": "Pantoprazol ist ein Prodrug: es wird im sauren Milieu der Belegzell-Canaliculi aktiviert und bindet kovalent (Disulfidbrücke) an Cys822 der H⁺/K⁺-ATPase → irreversible Hemmung → Wirkdauer bis zur Neusynthese der Pumpe (~24–48h).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Klinik"
    ]
  },
  {
    "id": "q-0265",
    "question": "Was sind Zymogene und warum werden Verdauungsenzyme als Zymogene sezerniert?",
    "options": [
      "Inaktive Enzymvorstufen, die erst am Wirkort aktiviert werden – Schutz vor Selbstverdauung",
      "Fermentierte Enzyme, die durch Hitze oder Säure am Wirkort aktiviert werden",
      "Enzymkomplexe aus Untereinheiten, die sich erst am Wirkort zusammenlagern",
      "Enzyme, die ausschließlich im basischen Milieu des Dünndarms aktiv sind"
    ],
    "correctIndex": 0,
    "explanation": "Zymogene (z. B. Pepsinogen → Pepsin, Trypsinogen → Trypsin) sind inaktive Vorstufen. Aktivierung erst im Zielkompartiment (Magensäure, Enterokinase im Darm) schützt die Produktionszellen vor Selbstverdauung.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Klinik"
    ]
  },
  {
    "id": "q-0266",
    "question": "Was sezerniert das exokrine Pankreas und welche Funktion hat es?",
    "options": [
      "Insulin und Glukagon zur direkten Blutzuckerregulation im Blut",
      "Verdauungsenzyme (Proteasen, Lipasen, Amylasen) und Bikarbonat ins Duodenum",
      "Gallensäuren zur Emulgierung von Nahrungsfetten im Dünndarm",
      "Muzus und Pepsinogen zum Schutz der Magenschleimhaut vor Säure"
    ],
    "correctIndex": 1,
    "explanation": "Das exokrine Pankreas sezerniert täglich ~1,5 L Pankreassaft: Proteasen (Trypsinogen, Chymotrypsinogen, Elastase), Lipasen, Amylase, Nukleasen – als Zymogene – plus HCO₃⁻ zur Neutralisierung (pH ~8).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Hormone",
      "Klinik"
    ]
  },
  {
    "id": "q-0267",
    "question": "Warum sind erhöhte ALT-Werte im Serum ein spezifischerer Marker für Leberschäden als erhöhte AST-Werte?",
    "options": [
      "ALT wird überwiegend hepatisch exprimiert; AST zusätzlich stark in Herz- und Skelettmuskel",
      "ALT ist nur bei viraler Hepatitis erhöht; AST ist nur bei toxischen Leberschäden erhöht",
      "ALT hat eine deutlich längere Halbwertszeit im Serum als AST (Tage vs. Stunden)",
      "AST ist nur bei Cholestase erhöht; ALT ist dagegen nur bei Leberzelllyse erhöht"
    ],
    "correctIndex": 0,
    "explanation": "ALT ist überwiegend in Hepatozyten exprimiert → erhöhte ALT = Leberschaden (Hepatitis, Steatosis, Toxizität). AST ist auch in Herzmuskel (Infarkt), Skelettmuskel und Erythrozyten → weniger spezifisch für die Leber.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Klinik"
    ]
  },
  {
    "id": "q-0268",
    "question": "Welche Funktion hat die Glutamin-Synthetase in perivenösen Hepatozyten?",
    "options": [
      "Sie spaltet Glutamin zu Glutamat und NH₃ für den Harnstoffzyklus",
      "Sie bindet verbleibendes NH₃ zu Glutamin als letzte hepatische Detoxifikationsstufe",
      "Sie synthetisiert Harnstoff direkt aus Glutamin und CO₂ in der Leber",
      "Sie aktiviert den Harnstoffzyklus durch Bildung von N-Acetylglutamat (NAG)"
    ],
    "correctIndex": 1,
    "explanation": "Perivenöse Hepatozyten (letzte Zone des Leberazinus) exprimieren Glutamin-Synthetase: NH₃ + Glutamat + ATP → Glutamin. Dieser zweite Schritt der Ammoniak-Entgiftung fängt NH₃ auf, das den Harnstoffzyklus passiert hat.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0269",
    "question": "Aus welcher Aminosäure entstehen Histamin und durch welche Reaktion?",
    "options": [
      "Aus Tryptophan durch Hydroxylierung und anschließende Decarboxylierung",
      "Aus Histidin durch Decarboxylierung (Histidindecarboxylase, Cofaktor PLP)",
      "Aus Tyrosin durch Transaminierung zu Histamin",
      "Aus Arginin durch Guanidinierung zu Histamin"
    ],
    "correctIndex": 1,
    "explanation": "Histamin entsteht aus Histidin durch Histidindecarboxylase (PLP-abhängig). Histamin wirkt als Neurotransmitter, Mediator allergischer Reaktionen und stimuliert die HCl-Sekretion der Belegzellen über H₂-Rezeptoren.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Klinik"
    ]
  },
  {
    "id": "q-0270",
    "question": "Aus welcher Aminosäure wird Serotonin synthetisiert?",
    "options": [
      "Phenylalanin → Tyrosin → Serotonin durch Hydroxylierung",
      "Tryptophan → 5-Hydroxytryptophan → Serotonin (5-HT)",
      "Histidin → Histamin → Serotonin durch Oxidation",
      "Glutamat → GABA → Serotonin durch Decarboxylierung"
    ],
    "correctIndex": 1,
    "explanation": "Tryptophan → (Tryptophan-Hydroxylase, BH4) → 5-Hydroxytryptophan → (Aromatische AS-Decarboxylase, PLP) → Serotonin (5-Hydroxytryptamin, 5-HT). Ca. 90% des Serotonins entstehen im Darm.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Klinik"
    ]
  },
  {
    "id": "q-0271",
    "question": "Was sind anaplerotische Reaktionen und warum sind sie wichtig?",
    "options": [
      "Reaktionen, die Intermediate aus dem Zyklus für Biosynthesen abziehen",
      "Reaktionen, die verbrauchte Citratzyklus-Intermediate wieder auffüllen",
      "Reaktionen, die ATP direkt aus dem Citratzyklus in das Cytosol exportieren",
      "Reaktionen, die den Citratzyklus bei hohem Energiestatus vollständig hemmen"
    ],
    "correctIndex": 1,
    "explanation": "Anaplerotische Reaktionen füllen Citratzyklus-Intermediate nach, die für Biosynthesen abgezogen wurden. Wichtigstes Beispiel: Pyruvatcarboxylase (Pyruvat + CO₂ + ATP → Oxalacetat, Cofaktor Biotin).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Bioenergetik",
      "Enzyme"
    ]
  },
  {
    "id": "q-0272",
    "question": "Bei welchen Carboxylierungsreaktionen ist Biotin als Cofaktor essentiell?",
    "options": [
      "Transaminierungen und oxidative Desaminierungen (Cofaktor PLP)",
      "Pyruvatcarboxylase, Acetyl-CoA-Carboxylase und Propionyl-CoA-Carboxylase",
      "Hydroxylierungsreaktionen im Kollagenstoffwechsel (Cofaktor Vitamin C)",
      "Methylierungsreaktionen im Nukleotidstoffwechsel (Cofaktor SAM)"
    ],
    "correctIndex": 1,
    "explanation": "Biotin (Vitamin B7) ist der CO₂-Träger bei Carboxylierungen: Pyruvatcarboxylase (OAA-Bildung), Acetyl-CoA-Carboxylase (Malonyl-CoA → Fettsäuresynthese), Propionyl-CoA-Carboxylase (odd-chain FA-Abbau). Alle verbrauchen ATP.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Enzyme",
      "Bioenergetik"
    ]
  },
  {
    "id": "q-0273",
    "question": "Welche Funktion hat Tetrahydrofolat (THF) im Stoffwechsel?",
    "options": [
      "THF überträgt C1-Einheiten für Purine, Thymidin und Methionin",
      "THF dient als Elektronencarrier in der mitochondrialen Atmungskette",
      "THF aktiviert Fettsäuren vor der β-Oxidation als Acyl-Carrier",
      "THF ist der Cofaktor aller Transaminierungsreaktionen (wie PLP)"
    ],
    "correctIndex": 0,
    "explanation": "THF (aktive Form von Folat) trägt C1-Einheiten in verschiedenen Oxidationszuständen: Formiat (Purinsynthese), Methylen (dTMP-Synthese via Thymidilat-Synthase), Methyl (Methioninsynthese). Daher ist Folsäuremangel fatal für Zellproliferation.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Nukleinsäuren",
      "Aminosäuren und Proteine"
    ]
  },
  {
    "id": "q-0274",
    "question": "Was ist S-Adenosylmethionin (SAM) und welche Rolle spielt es im Stoffwechsel?",
    "options": [
      "SAM ist ein Lipidmolekül, das Fettsäuren in Membranen aktiviert",
      "SAM ist der universelle Methylgruppendonor für DNA, Histone und Neurotransmitter",
      "SAM ist ein Zwischenprodukt des Harnstoffzyklus in der Leber",
      "SAM aktiviert die RNA-Polymerase als allosterischer Transkriptionsfaktor"
    ],
    "correctIndex": 1,
    "explanation": "SAM (S-Adenosylmethionin) entsteht aus Methionin + ATP und überträgt seine Methylgruppe auf diverse Akzeptoren: DNA (Epigenetik), Histome, Phosphatidylcholin, Kreatin, Neurotransmitter (Noradrenalin → Adrenalin via PNMT).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Enzyme"
    ]
  },
  {
    "id": "q-0275",
    "question": "Welche Reaktion katalysiert die Methionin-Synthase und welchen Cofaktor benötigt sie?",
    "options": [
      "Methionin → SAM + ATP; Cofaktor Mg²⁺",
      "Homocystein + Methyl-THF → Methionin + THF; Cofaktor Vitamin B12",
      "Methionin → Cystein + Propionyl-CoA; Cofaktor Biotin",
      "SAM + Homocystein → Methionin + S-Adenosylhomocystein; Cofaktor Zink"
    ],
    "correctIndex": 1,
    "explanation": "Methionin-Synthase regeneriert Methionin aus Homocystein durch Methylgruppenübertragung von 5-Methyl-THF. Cofaktor: Methylcobalamin (Vitamin B12). Bei B12-Mangel akkumuliert Homocystein und THF bleibt als 5-Methyl-THF 'gefangen' (Methyl-Trap).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Enzyme"
    ]
  },
  {
    "id": "q-0276",
    "question": "Was ist die Ursache der perniziösen Anämie und welcher Mechanismus liegt zugrunde?",
    "options": [
      "Eisenmangel durch chronische Blutung → mikrozytäre hypochrome Anämie",
      "Mangel an Intrinsic Factor → gestörte B12-Absorption → megaloblastäre Anämie",
      "Folsäuremangel durch schlechte Ernährung → makrozytäre hypochrome Anämie",
      "Autoimmunhämolyse durch Antikörper gegen Erythrozytenantigene (AIHA)"
    ],
    "correctIndex": 1,
    "explanation": "Perniziöse Anämie: Autoantikörper gegen Parietalzellen oder Intrinsic Factor (IF) → kein IF → kein B12-IF-Komplex → keine B12-Resorption im Ileum → Methionin-Synthase-Mangel → Methyl-Trap → THF-Mangel → gestörte DNA-Synthese → megaloblastäre Anämie.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Klinik"
    ]
  },
  {
    "id": "q-0277",
    "question": "Wie erklärt der 'Methyl-Trap' den Zusammenhang zwischen Vitamin-B12-Mangel und Folsäuremangel-ähnlichen Symptomen?",
    "options": [
      "B12-Mangel hemmt die Folsäureaufnahme im Darm durch Transportdefekt",
      "Ohne B12 kann 5-Methyl-THF nicht zu THF umgewandelt werden → THF-Mangel",
      "B12-Mangel führt zu erhöhtem Folsäureabbau durch renale Ausscheidung",
      "B12-Mangel aktiviert eine Folsäuredehydrogenase, die THF direkt abbaut"
    ],
    "correctIndex": 1,
    "explanation": "Methionin-Synthase (B12-abhängig) überführt 5-Methyl-THF → THF. Ohne B12 bleibt THF als 5-Methyl-THF 'gefangen' (Methyl-Trap) → funktioneller THF-Mangel → gestörte dTMP- und Purinsynthese → megaloblastäre Veränderungen.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Klinik"
    ]
  },
  {
    "id": "q-0278",
    "question": "Was ist MHC-Klasse-I und welche Rolle spielt das Proteasom dabei?",
    "options": [
      "MHC-I präsentiert extrazelluläre Antigene auf B-Lymphozyten",
      "MHC-I präsentiert intrazelluläre Peptide (aus dem Proteasom) an CD8⁺-T-Zellen",
      "MHC-I transportiert lysosomale Enzyme zu Phagosomen in Makrophagen",
      "MHC-I aktiviert das Komplementsystem über den klassischen Aktivierungsweg"
    ],
    "correctIndex": 1,
    "explanation": "Das Proteasom zerlegt intrazelluläre Proteine (körpereigen oder viral) → Peptide (8–10 AS) werden über TAP ins ER transportiert → beladen MHC-I → Präsentation auf Zelloberfläche → Erkennung durch CD8⁺-zytotoxische T-Zellen.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Kompartimente",
      "Aminosäuren und Proteine"
    ]
  },
  {
    "id": "q-0279",
    "question": "Was ist der Unterschied zwischen glucogenen und ketogenen Aminosäuren bezüglich ihrer Stoffwechselprodukte?",
    "options": [
      "Glucogene AS liefern Acetyl-CoA; ketogene AS liefern Oxalacetat",
      "Glucogene AS speisen die Gluconeogenese; ketogene AS liefern Acetyl-CoA/Acetoacetat",
      "Glucogene AS werden ausschließlich im Muskel, ketogene in der Leber abgebaut",
      "Glucogene AS erhöhen den Blutzucker direkt; ketogene AS senken ihn"
    ],
    "correctIndex": 1,
    "explanation": "Glucogene AS → Pyruvat, OAA, α-KG, Succinyl-CoA, Fumarat → Gluconeogenese möglich. Ketogene AS → Acetyl-CoA, Acetoacetyl-CoA → nur Ketogenese oder Fettsäuresynthese, keine Nettoglukosesynthese.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Bioenergetik"
    ]
  },
  {
    "id": "q-0280",
    "question": "Aus welcher Aminosäure wird Dopamin synthetisiert und was sind die Schritte?",
    "options": [
      "Tryptophan → 5-HTP → Serotonin → Dopamin (mehrere Schritte)",
      "Tyrosin → DOPA (Tyrosinhydroxylase, BH4) → Dopamin (DOPA-Decarboxylase, PLP)",
      "Phenylalanin → Dopamin durch direkte Decarboxylierung",
      "Histidin → Histamin → Dopamin durch Oxidationsreaktion"
    ],
    "correctIndex": 1,
    "explanation": "Tyrosin → L-DOPA (Tyrosinhydroxylase, geschwindigkeitsbestimmend, Cofaktor BH4) → Dopamin (DOPA-Decarboxylase, Cofaktor PLP). Bei Parkinson: Dopaminmangel durch Untergang dopaminerger Neurone in der Substantia nigra.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Klinik"
    ]
  },
  {
    "id": "q-0281",
    "question": "Welche Aminosäure ist Vorstufe für die Synthese von Stickstoffmonoxid (NO) und durch welches Enzym?",
    "options": [
      "Glutamin durch Glutaminase",
      "Arginin durch NO-Synthase (NOS)",
      "Glycin durch Glycin-Oxidase",
      "Lysin durch Lysin-Decarboxylase"
    ],
    "correctIndex": 1,
    "explanation": "NO-Synthase (NOS) oxidiert L-Arginin zu L-Citrullin + NO. NO wirkt als Vasodilatator (aktiviert sGC → cGMP), Neurotransmitter und Immunmediator. Cofaktoren: O₂, NADPH, FAD, FMN, BH4.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Blut"
    ]
  },
  {
    "id": "q-0282",
    "question": "Was versteht man unter der N-End-Regel im Kontext des Proteinabbaus?",
    "options": [
      "Proteine mit langen N-terminalen Signalsequenzen werden ins ER importiert",
      "Die N-terminale Aminosäure bestimmt die Halbwertszeit und kann als Degron wirken",
      "Alle Proteine werden grundsätzlich vom N-Terminus beginnend abgebaut",
      "Das N-terminale Methionin wird immer zuerst durch das Proteasom entfernt"
    ],
    "correctIndex": 1,
    "explanation": "N-End-Regel (Varshavsky): Bestimmte N-terminale Aminosäuren (z.B. Arg, Lys → 'destabilisierend') führen zu rascher Ubiquitinierung durch N-End-Regel-E3-Ligasen → kurze T1/2. Met, Ala, Val, Thr → stabilisierend → lange T1/2.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0283",
    "question": "Welche Aminosäuren sind für den Menschen essentiell und müssen mit der Nahrung zugeführt werden?",
    "options": [
      "Alanin, Glutamat, Glycin, Serin und Aspartat",
      "His, Ile, Leu, Lys, Met, Phe, Thr, Trp, Val",
      "Cystein, Tyrosin, Glutamin, Arginin und Prolin",
      "Alle aromatischen Aminosäuren sowie Lysin und Methionin"
    ],
    "correctIndex": 1,
    "explanation": "Die 9 essentiellen Aminosäuren (His, Ile, Leu, Lys, Met, Phe, Thr, Trp, Val) kann der Mensch nicht selbst synthetisieren.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine"
    ]
  },
  {
    "id": "q-0284",
    "question": "Welche Funktion hat Taurin im menschlichen Körper?",
    "options": [
      "Taurin ist ein wichtiger inhibitorischer Neurotransmitter im ZNS",
      "Taurin ist an der Gallensäurekonjugation beteiligt und wirkt als Antioxidans",
      "Taurin aktiviert die Glukoneogenese durch allosterische Enzymregulation",
      "Taurin ist Vorstufe für die Cortisolsynthese in der Nebennierenrinde"
    ],
    "correctIndex": 1,
    "explanation": "Taurin (aus Cystein) konjugiert Gallensäuren zu Taurocholat, wirkt als Antioxidans, stabilisiert Membranen, reguliert Osmose und hat neuroprotektive Eigenschaften. Essentiell für Katzen, beim Menschen bedingt essentiell.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Lipide"
    ]
  },
  {
    "id": "q-0285",
    "question": "Welche Aminosäuren liefern Atome für die Biosynthese von Purinen (A, G)?",
    "options": [
      "Alanin, Valin und Leucin liefern alle C-Atome des Purinrings",
      "Glycin, Glutamin und Aspartat",
      "Lysin, Arginin und Histidin liefern alle N-Atome des Purinrings",
      "Ausschließlich Methionin (als SAM) und Cystein liefern C1-Einheiten"
    ],
    "correctIndex": 1,
    "explanation": "Glycin liefert C4, C5, N7; Glutamin liefert N3 und N9 (Startpunkt auf PRPP); Aspartat liefert N1. Formyl-THF liefert C2 und C8, CO₂ liefert C6 – sind aber natürlich keine Aminosäuren! 😉",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Nukleinsäuren"
    ]
  },
  {
    "id": "q-0286",
    "question": "Was ist Kreatinphosphat und aus welchen Aminosäuren wird Kreatin synthetisiert?",
    "options": [
      "Lipid-Energiespeicher im Fettgewebe; Kreatin aus Leucin und Isoleucin",
      "Hochenergetischer Phosphatpuffer im Muskel; Kreatin aus Arginin, Glycin, Met/SAM",
      "Coenzym der Glykolyse im Cytosol; Kreatin aus Glutamat und Alanin",
      "Harnstoffzyklus-Zwischenprodukt in der Leber; Kreatin aus Ornithin und Citrullin"
    ],
    "correctIndex": 1,
    "explanation": "Kreatinphosphat (Phosphokreatin) dient als schneller ATP-Puffer im Muskel (Kreatin + ATP ↔ Phosphokreatin + ADP, Kreatinkinase). Kreatin-Biosynthese: Glycin + Arginin → Guanidinoacetat (Niere) → + SAM (Methylierung) → Kreatin (Leber).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Bioenergetik"
    ]
  },
  {
    "id": "q-0287",
    "question": "Welche Aminosäure ist Vorstufe für die Melaninsynthese und warum ist dies klinisch relevant?",
    "options": [
      "Tryptophan → Melanin durch Tryptophan-Hydroxylase in Melanozyten",
      "Tyrosin → DOPA → Melanin durch Tyrosinase (Cu-abhängig); Albinismus: Defekt",
      "Phenylalanin → Melanin direkt durch Phenylalanin-Hydroxylase",
      "Histidin → Melanin durch Histidindecarboxylase in Melanozyten"
    ],
    "correctIndex": 1,
    "explanation": "Tyrosinase (Kupfer-Enzym) oxidiert Tyrosin → DOPA → Dopachinon → Melanin (Eu- oder Phäomelanin). Albinismus: Tyrosinase-Mutation → kein Melanin → fehlende UV-Protektion → erhöhtes Hautkrebsrisiko.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Aminosäuren und Proteine",
      "Klinik"
    ]
  },
  {
    "id": "q-0288",
    "question": "Warum ist Acetyl-CoA ein zentrales Knotenmolekül im Stoffwechsel?",
    "options": [
      "Es wird ausschließlich in der Glykolyse gebildet und liefert direkt ATP",
      "Es ist Ausgangspunkt für Fettsäuresynthese, Cholesterin, Ketonkörper und Citratzyklus",
      "Es ist der einzige Elektronendonor der mitochondrialen Atmungskette",
      "Es wirkt direkt als exzitatorischer Neurotransmitter im synaptischen Spalt"
    ],
    "correctIndex": 1,
    "explanation": "Acetyl-CoA ist ein metabolischer Knotenpunkt: es speist den Citratzyklus (→ ATP), dient als Substrat für Fettsäuresynthese, Cholesterin-/Isoprenoidbiosynthese und Ketonkörperbildung. Es entsteht aus Pyruvat, β-Oxidation, Aminosäureabbau und Acetat.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Bioenergetik"
    ]
  },
  {
    "id": "q-0289",
    "question": "Welches Enzym katalysiert den geschwindigkeitsbestimmenden Schritt der Fettsäuresynthese und welchen Cofaktor benötigt es?",
    "options": [
      "Fettsäuresynthase (FASN); Cofaktor NADH",
      "Acetyl-CoA-Carboxylase (ACC); Cofaktor Biotin",
      "ATP-Citrat-Lyase (ACLY); Cofaktor CoA",
      "Malonyl-CoA-Decarboxylase (MCD); Cofaktor FAD"
    ],
    "correctIndex": 1,
    "explanation": "ACC (Acetyl-CoA-Carboxylase) katalysiert den ersten und regulierten Schritt: Acetyl-CoA + CO₂ + ATP → Malonyl-CoA. Biotin überträgt CO₂. ACC wird durch Citrat aktiviert, durch Malonyl-CoA-Spiegel und Phosphorylierung (AMPK) reguliert.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Enzyme"
    ]
  },
  {
    "id": "q-0290",
    "question": "Welche Reaktion katalysiert die ATP-Citrat-Lyase (ACLY) und welche Bedeutung hat sie?",
    "options": [
      "Citrat → Isocitrat durch Aconitase im mitochondrialen Citratzyklus",
      "Citrat + CoA + ATP → Acetyl-CoA + Oxalacetat (für cytoplasmatische Lipogenese)",
      "Acetyl-CoA + CO₂ + ATP → Malonyl-CoA durch Acetyl-CoA-Carboxylase",
      "Citrat → Succinat + CO₂ durch Isocitratdehydrogenase in Mitochondrien"
    ],
    "correctIndex": 1,
    "explanation": "ACLY spaltet cytoplasmatisches Citrat (aus Citrattransport aus Mitochondrien) in Acetyl-CoA + OAA. So wird mitochondriales Acetyl-CoA für cytoplasmatische Fettsäure- und Cholesterinsynthese verfügbar gemacht.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Enzyme",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0291",
    "question": "Welche Funktion hat die Fettsäuresynthase (FASN) und wie viele NADPH-Moleküle werden pro Palmitat benötigt?",
    "options": [
      "FASN verlängert Fettsäuren in Mitochondrien; verbraucht 4 NADPH pro Palmitat",
      "FASN synthetisiert Palmitat (C16) aus Malonyl-CoA + Acetyl-CoA; 14 NADPH pro Palmitat",
      "FASN katalysiert Desaturierung von Fettsäuren im ER; verbraucht 7 NADPH pro Palmitat",
      "FASN aktiviert Fettsäuren mit CoA für den Transport ins Mitochondrium; 2 NADPH"
    ],
    "correctIndex": 1,
    "explanation": "FASN (cytoplasmatisch) ist ein Multienzymkomplex: kondensiert 1 Acetyl-CoA + 7 Malonyl-CoA → Palmitat (C16:0) unter Verbrauch von 14 NADPH und 7 ATP. NADPH stammt hauptsächlich aus dem Pentosephosphatweg und der Malatenzym-Reaktion.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Enzyme"
    ]
  },
  {
    "id": "q-0292",
    "question": "Warum kann Fettsäuresynthese und β-Oxidation nicht gleichzeitig aktiv sein und wie wird das sichergestellt?",
    "options": [
      "Beide Prozesse konkurrieren im gleichen Kompartiment um dieselben Enzymkomplexe",
      "Malonyl-CoA hemmt CPT1 und verhindert den Import von Fettsäuren ins Mitochondrium",
      "NADPH hemmt direkt die β-Oxidationsenzyme in der mitochondrialen Matrix",
      "Insulin phosphoryliert und inaktiviert die Schlüsselenzyme der β-Oxidation direkt"
    ],
    "correctIndex": 1,
    "explanation": "Malonyl-CoA (Syntheseprodukt der ACC) hemmt CPT1, das für den Transport langkettiger Fettsäuren ins Mitochondrium verantwortlich ist. Hohe Lipogenese → hohe Malonyl-CoA → kein Fettsäureimport → keine β-Oxidation. Eleganter reziproker Kontrollmechanismus.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Bioenergetik",
      "Enzyme"
    ]
  },
  {
    "id": "q-0293",
    "question": "Was passiert nach einer hochkalorischen, kohlenhydratreichen Mahlzeit mit überschüssigem Acetyl-CoA in der Leber?",
    "options": [
      "Es wird direkt als Acetat über die Niere ausgeschieden",
      "Es wird via Citrattransport-Shuttle ins Cytosol exportiert und für Lipogenese genutzt",
      "Es hemmt die Glykolyse durch allosterische Hemmung der PFK-1",
      "Es wird durch die Carboanhydrase vollständig zu CO₂ und H₂O abgebaut"
    ],
    "correctIndex": 1,
    "explanation": "Überschüssige Glucose → Pyruvat → Acetyl-CoA (Mitochondrien) → Citratsynthase → Citrat → Export durch Citrat-Carrier → ACLY → cytoplasmatisches Acetyl-CoA → ACC/FASN → Fettsäuren → TAG. So wird Kohlenhydratüberschuss in Fett umgewandelt.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Kohlenhydrate",
      "Bioenergetik"
    ]
  },
  {
    "id": "q-0294",
    "question": "Welches ist das Schlüsselenzym der Cholesterinbiosynthese und wo findet dieser Schritt statt?",
    "options": [
      "Squalensynthase; lokalisiert im glatten ER der Leberzellen",
      "HMG-CoA-Reduktase (HMGCR); lokalisiert im ER (cytosolische Seite)",
      "Farnesylpyrophosphatsynthase; lokalisiert in Peroxisomen",
      "Lanosterinsynthase; lokalisiert im Zellkern der Hepatozyten"
    ],
    "correctIndex": 1,
    "explanation": "HMG-CoA-Reduktase (HMGCR) katalysiert: HMG-CoA + 2 NADPH → Mevalonat. Dies ist der geschwindigkeitsbestimmende, irreversible Schritt der Cholesterinbiosynthese. HMGCR ist im ER-Membran verankert und streng reguliert.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Enzyme"
    ]
  },
  {
    "id": "q-0295",
    "question": "Wie wird die HMG-CoA-Reduktase (HMGCR) reguliert?",
    "options": [
      "Ausschließlich durch Phosphorylierung über Proteinkinase A (PKA)",
      "Durch SREBP (Transkription), Proteinabbau (Cholesterin) und AMPK (Phosphorylierung)",
      "Ausschließlich durch allosterische Hemmung durch Cholesterin am aktiven Zentrum",
      "Durch Glukagon-abhängige Aktivierung nach dem Fasten (cAMP/PKA-Weg)"
    ],
    "correctIndex": 1,
    "explanation": "HMGCR-Regulation: 1) SREBP (Sterol-Response-Element-Binding-Protein) erhöht Transkription bei Cholesterinmangel. 2) Cholesterin → beschleunigter HMGCR-Abbau im ER. 3) AMPK phosphoryliert und hemmt HMGCR (Energiemangel). 4) Insulin aktiviert, Glucagon hemmt.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Enzyme",
      "Hormone"
    ]
  },
  {
    "id": "q-0296",
    "question": "Wie wirken Statine und welche klinische Bedeutung haben sie?",
    "options": [
      "Statine hemmen die Squalensynthase und blockieren die gesamte Sterolbiosynthese",
      "Statine hemmen kompetitiv HMG-CoA-Reduktase → weniger Cholesterin → mehr LDL-Rezeptoren → LDL↓",
      "Statine aktivieren die Lipoproteinlipase und erhöhen so den HDL-Spiegel direkt",
      "Statine hemmen NPC1L1 und blockieren die intestinale Cholesterinabsorption"
    ],
    "correctIndex": 1,
    "explanation": "Statine (z.B. Atorvastatin, Simvastatin) hemmen kompetitiv HMGCR → weniger intrazelluläres Cholesterin → SREBP aktiviert → LDL-Rezeptor-Expression↑ → mehr LDL-Aufnahme aus Blut → LDL-C sinkt um 30–50%. Primärprävention kardiovaskulärer Erkrankungen.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Enzyme",
      "Klinik"
    ]
  },
  {
    "id": "q-0297",
    "question": "Welche wichtigen Produkte entstehen im Mevalonat-Pathway neben Cholesterin?",
    "options": [
      "Ausschließlich Gallensäuren und Steroidhormone als Nebenprodukte",
      "Ubiquinon (CoQ10), Dolichol, Häm A und farnesylierte/geranylierte Proteine",
      "Vitamin D, Cortisol und Aldosteron als ausschließliche Nebenprodukte",
      "Phospholipide und Sphingolipide als wichtige Nebenprodukte"
    ],
    "correctIndex": 1,
    "explanation": "Der Mevalonat-Weg liefert über Farnesyl-PP zwei Äste: Sterol-Ast (→ Squalensynth. → Cholesterin → Steroidhormone, Gallensäuren, VitD) und Non-sterol-Ast (→ Ubiquinon/CoQ10, Dolichol, Häm A, Prenylierung von Ras/Rho-Proteinen).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Bioenergetik",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0298",
    "question": "Welche Organellen sind an der Cholesterinbiosynthese beteiligt?",
    "options": [
      "Ausschließlich Mitochondrien synthetisieren Cholesterin",
      "Cytosol (bis Mevalonat) und ER (HMGCR, Squalen→Cholesterin) sind Hauptorte",
      "Golgi-Apparat und Lysosomen für alle Schritte der Cholesterinsynthese",
      "Nucleus und raues ER für frühe und späte Schritte der Biosynthese"
    ],
    "correctIndex": 1,
    "explanation": "Frühe Schritte (Acetyl-CoA → HMG-CoA → Mevalonat → Isopentenyl-PP) im Cytosol/ER. Späte Schritte (Squalenepoxidase, Lanosterinsynthase → Cholesterin) im glatten ER. HMGCR ist ER-membranverankert. Peroxisomen: beschriebene Beteiligung bei einigen Schritten.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0299",
    "question": "Was kann aus Cholesterin entstehen?",
    "options": [
      "Ausschließlich Gallensäuren und Vitamin D₃ als Endprodukte",
      "Gallensäuren, Steroidhormone (Cortisol, Aldosteron, Sexualhormone), Vitamin D₃",
      "Ketonkörper, freie Fettsäuren und Triglyceride bei erhöhtem Angebot",
      "Phospholipide, Sphingomyelin und Ceramid als Membranbestandteile"
    ],
    "correctIndex": 1,
    "explanation": "Cholesterin ist Vorstufe für: Gallensäuren (Leber), Steroidhormone (Cortisol, Aldosteron in Nebenniere; Testosteron, Östrogen, Progesteron in Gonaden), Vitamin D₃ (Haut → Leber → Niere) und Cholesterinester (Speicherform).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Hormone"
    ]
  },
  {
    "id": "q-0300",
    "question": "Wie wird Cholesterin in Zellen gespeichert und wie wird es transportiert?",
    "options": [
      "Als freies Cholesterin in Lipidtröpfchen; Transport als freies Molekül im Plasma",
      "Als Cholesterinester (durch ACAT) in Lipidtröpfchen; Transport in Lipoproteinen",
      "Als Cholesteringlykoprotein im Golgi; Transport durch Albumin-Bindung",
      "Als Phosphocholesterin in Mitochondrien; Transport durch spezifische Carrier"
    ],
    "correctIndex": 1,
    "explanation": "Überschüssiges Cholesterin wird durch ACAT (Acyl-CoA-Cholesterin-Acyltransferase) zu Cholesterinestern verestert und in zytoplasmatischen Lipidtröpfchen gespeichert. Plasma-Transport erfolgt ausschließlich in Lipoproteinen (LDL, HDL, VLDL, Chylomikronen).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0301",
    "question": "Wie nehmen Zellen Cholesterin über LDL auf (LDL-Rezeptor-Weg)?",
    "options": [
      "LDL diffundiert passiv durch die Plasmamembran in die Zelle",
      "LDL bindet LDLR → Endozytose → Lysosom",
      "LDL wird durch Lipoproteinlipase an der Zelloberfläche direkt gespalten",
      "LDL-Cholesterin wird durch HDL-Partikel aktiv auf die Zelle übertragen"
    ],
    "correctIndex": 1,
    "explanation": "LDL bindet über ApoB-100 an den LDL-Rezeptor (LDLR) → Clathrin-Vesikel → Endosom (pH↓) → Rezeptorrecycling → Lysosom → Cholesterinfreisetzung → hemmt HMGCR (weniger Eigensynthese) + verhindert SREBP-Aktivierung durch ER-Retention (weniger LDLR) + aktiviert ACAT (Speicherung als Cholesterinester).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0302",
    "question": "Was ist familiäre Hypercholesterinämie (FH) und welcher Defekt liegt vor?",
    "options": [
      "Überproduktion von VLDL durch die Leber bei Insulinresistenz (Typ IIb)",
      "Mutation im LDL-Rezeptor-Gen → gestörte LDL-Aufnahme → erhöhtes LDL → Atherosklerose",
      "Mangel an Lipoproteinlipase → gestörter Chylomikronen-Abbau → Hypertriglyzeridämie",
      "Defekt der LCAT → HDL-Mangel und Cholesterinablagerungen in Geweben (LCAT-Mangel)"
    ],
    "correctIndex": 1,
    "explanation": "FH (autosomal-dominant): LDLR-Mutation (heterozyg.: LDL ~200–400 mg/dl; homozyg.: >600 mg/dl) → kein LDL-Clearance → Atherosklerose ab Jugend, Xanthome, Arcus corneae. Therapie: Statine + Ezetimib + PCSK9-Inhibitoren.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Klinik"
    ]
  },
  {
    "id": "q-0303",
    "question": "Was beschreibt der reverse Cholesterintransport über HDL?",
    "options": [
      "HDL transportiert Cholesterin von der Leber zu peripheren Geweben",
      "HDL nimmt überschüssiges Cholesterin aus Geweben auf und bringt es zur Leber",
      "HDL aktiviert die Cholesterinbiosynthese in der Leber allosterisch",
      "HDL überträgt Triglyceride aus der Leber auf LDL im Cholesterinaustauch"
    ],
    "correctIndex": 1,
    "explanation": "Reverser Cholesterintransport: Nascentes HDL (ApoA-I) → nimmt Cholesterin aus Zellen via ABCA1/G1 auf → LCAT verestert Cholesterin → reifes HDL → Leber nimmt über SR-BI auf → Ausscheidung als Gallensäuren. Hohe HDL-Spiegel sind kardioprotektiv.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Blut",
      "Klinik"
    ]
  },
  {
    "id": "q-0304",
    "question": "Welche Lipoproteine sind die Haupttransportformen von Triglyceriden im Blut?",
    "options": [
      "LDL und HDL sind Haupttransportformen für Triglyceride",
      "Chylomikronen (exogen, aus Darm) und VLDL (endogen, aus Leber)",
      "Albumin-Fettsäurekomplexe und IDL als gemischte Transportformen",
      "HDL und Lipoprotein(a) sind Haupttransportformen für Triglyceride"
    ],
    "correctIndex": 1,
    "explanation": "Chylomikronen: transportieren diätetische Triglyceride aus Darm über Lymphe ins Blut. VLDL (Very Low Density Lipoprotein): transportiert hepatisch synthetisierte Triglyceride. Beide werden durch Lipoproteinlipase (LPL) an Kapillarendothel gespalten.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Blut"
    ]
  },
  {
    "id": "q-0305",
    "question": "Wie werden Chylomikronen aufgebaut und welches Apolipoprotein ist für ihre Sekretion essentiell?",
    "options": [
      "Im Zellkern von Enterozyten; essentielles Apolipoprotein: ApoE",
      "Im glatten ER und Golgi von Enterozyten; essentielles Apolipoprotein: ApoB-48",
      "In Hepatozyten aus LDL-Remnants; essentielles Apolipoprotein: ApoC-II",
      "In Thrombozyten aus HDL-Vorstufen; essentielles Apolipoprotein: ApoA-I"
    ],
    "correctIndex": 1,
    "explanation": "Enterozyten: resorbierende Fettsäuren/Glycerin → TAG-Resynthese im ER → MTP (Microsomal Triglyceride Transfer Protein) belädt ApoB-48 → Chylomikron → Golgi → Exozytose → Lymphe → Ductus thoracicus → Blut.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0306",
    "question": "Welche Rolle spielt ApoC-II auf Chylomikronen und VLDL?",
    "options": [
      "ApoC-II ermöglicht die Bindung an LDL-Rezeptoren in der Leber",
      "ApoC-II aktiviert die Lipoproteinlipase (LPL) an Kapillarendothelzellen → TAG-Hydrolyse",
      "ApoC-II hemmt die hepatische Lipase und verhindert so den HDL-Abbau",
      "ApoC-II ist für die VLDL-Assemblierung im endoplasmatischen Retikulum nötig"
    ],
    "correctIndex": 1,
    "explanation": "ApoC-II ist ein essentieller Aktivator der Lipoproteinlipase (LPL). LPL sitzt an Kapillarendothel von Muskel und Fettgewebe und hydrolysiert TAG aus Chylomikronen/VLDL → freie Fettsäuren für Gewebe. LPL-Mangel → Hypertriglyzeridämie Typ I.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Enzyme"
    ]
  },
  {
    "id": "q-0307",
    "question": "Wie transportiert Albumin Fettsäuren im Blut?",
    "options": [
      "Albumin bildet kovalente Esterbindungen mit freien Fettsäuren",
      "Albumin bindet nicht-kovalent freie Fettsäuren (FFA) und transportiert sie zu Organen",
      "Albumin verpackt Fettsäuren in Liposomen für den wässrigen Bluttransport",
      "Albumin aktiviert Fettsäuren durch Phosphorylierung vor dem Organtransport"
    ],
    "correctIndex": 1,
    "explanation": "Freie Fettsäuren (FFA, NEFA) sind wasserunlöslich. Albumin bindet reversibel 1–6 FFA-Moleküle nicht-kovalent und transportiert sie von Fettgewebe (Lipolyse) zu Muskel/Leber/Herz. Haupttransportform für FFA bei Nüchternheit/Stress.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Blut"
    ]
  },
  {
    "id": "q-0308",
    "question": "Was ist Lipolyse und durch welche Enzyme und Signale wird sie reguliert?",
    "options": [
      "Abbau von Fettsäuren in Mitochondrien; aktiviert durch Insulin",
      "Hydrolyse von TAG zu Glycerin + FFA; aktiviert durch Adrenalin/Glucagon, gehemmt durch Insulin",
      "Spaltung von Phospholipiden durch Phospholipase A2; aktiviert durch Cortisol",
      "Abbau von Cholesterinestern zu freiem Cholesterin; aktiviert durch ACTH"
    ],
    "correctIndex": 1,
    "explanation": "Lipolyse im Fettgewebe: Adrenalin/Glucagon → β-Adrenozeptor/GPCR → cAMP↑ → PKA → phosphoryliert HSL (Hormonsensitive Lipase) + Perilipin → TAG → DAG → MAG → Glycerin + FFA. Insulin hemmt PKA und aktiviert Phosphodiesterase → Anti-Lipolyse.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Hormone",
      "Enzyme"
    ]
  },
  {
    "id": "q-0309",
    "question": "Welches ist das erste und geschwindigkeitsbestimmende Enzym der Lipolyse in Adipozyten?",
    "options": [
      "Hormonsensitive Lipase (HSL) hydrolysiert DAG zu MAG und ist hormonell reguliert",
      "Adipozyten-Triglyceridlipase (ATGL) hydrolysiert TAG zu DAG – erster und limitierender Schritt",
      "Monoacylglycerollipase (MAGL) hydrolysiert MAG zu Glycerin und freien Fettsäuren",
      "Lipoproteinlipase (LPL) hydrolysiert TAG aus Lipidtröpfchen im Fettgewebe"
    ],
    "correctIndex": 1,
    "explanation": "ATGL (Adipozyten-Triglyceridlipase) ist das Schlüsselenzym für den ersten Schritt: TAG → DAG + FFA. Aktiviert durch CGI-58, gehemmt durch G0S2. HSL hydrolysiert dann DAG → MAG, MAGL MAG → Glycerin + FFA.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Enzyme"
    ]
  },
  {
    "id": "q-0310",
    "question": "Was ist der Unterschied zwischen gesättigten, einfach ungesättigten und mehrfach ungesättigten Fettsäuren bezüglich ihrer Synthese im Menschen?",
    "options": [
      "Alle drei Typen können vollständig de novo im Menschen synthetisiert werden",
      "Gesättigte und einfach ungesättigte FS (ω-9) synthetisierbar; ω-3 und ω-6 essentiell",
      "Nur gesättigte FS können synthetisiert werden; alle ungesättigten sind essentiell",
      "Der Mensch kann keine Fettsäuren synthetisieren und ist auf Nahrungsfette angewiesen"
    ],
    "correctIndex": 1,
    "explanation": "FASN liefert Palmitat (C16:0). Desaturasen (Δ9, Δ6, Δ5) und Elongasen können ω-9-FS (Ölsäure C18:1) bilden. Jedoch fehlen Δ12- und Δ15-Desaturasen → ω-6 (Linolsäure, 18:2) und ω-3 (α-Linolensäure, 18:3) sind essentiell.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Klinik"
    ]
  },
  {
    "id": "q-0311",
    "question": "Welche Schritte umfasst ein Zyklus der β-Oxidation und wie viele ATP-Äquivalente liefert die vollständige Oxidation von Palmitat?",
    "options": [
      "3 Schritte (Oxidation, Hydration, Thiolyse); ~64 ATP pro Palmitat",
      "4 Schritte pro Zyklus → je 1 FADH₂, 1 NADH, 1 Acetyl-CoA; ~106 ATP pro Palmitat",
      "5 Schritte inklusive Carnitinaktivierung; ~80 ATP pro Palmitat",
      "2 Schritte (Aktivierung und Thiolspaltung); ~40 ATP pro Palmitat"
    ],
    "correctIndex": 1,
    "explanation": "β-Oxidation (4 Schritte/Zyklus): 1. FAD-abhängige Oxidation (→FADH₂), 2. Hydratation, 3. NAD⁺-abhängige Oxidation (→NADH), 4. Thiolyse (→Acetyl-CoA + verkürzte Acyl-CoA). Palmitat (C16): 7 Zyklen → 7 FADH₂ + 7 NADH + 8 Acetyl-CoA → ~106 ATP netto.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Bioenergetik"
    ]
  },
  {
    "id": "q-0312",
    "question": "Welche Besonderheit gilt für die β-Oxidation von ungeradzahligen Fettsäuren?",
    "options": [
      "Ungeradzahlige Fettsäuren können gar nicht oxidiert werden",
      "Im letzten Zyklus entsteht Propionyl-CoA → Succinyl-CoA (über Biotin/B12)",
      "Sie werden zunächst enzymatisch zu geradzahligen Fettsäuren verlängert",
      "Sie liefern Acetoacetat als letztes Produkt statt Acetyl-CoA"
    ],
    "correctIndex": 1,
    "explanation": "Ungeradzahlige FS (selten, in Pflanzen/Meeresfrüchten): Beim letzten Zyklus entsteht C3 Propionyl-CoA → Propionyl-CoA-Carboxylase (Cofaktor Biotin) → Methylmalonyl-CoA → Methylmalonyl-CoA-Mutase (Cofaktor B12) → Succinyl-CoA → Citratzyklus.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Bioenergetik"
    ]
  },
  {
    "id": "q-0313",
    "question": "Wo findet die Ketonkörpersynthese statt und aus welchem Substrat?",
    "options": [
      "Im Cytosol aller Körperzellen aus freien Fettsäuren direkt",
      "In der mitochondrialen Matrix der Leber aus Acetyl-CoA (Fasten/Diabetes)",
      "Im Fettgewebe aus Glycerin bei hormonell stimulierter Lipolyse",
      "Im Gehirn aus Glukose bei niedrigem Blutzuckerspiegel"
    ],
    "correctIndex": 1,
    "explanation": "Ketonkörpersynthese (Ketogenese) in Lebermitochondrien: 2 Acetyl-CoA → Acetoacetat (+ β-Hydroxybutyrat + Aceton). Ausgelöst bei hohem Acetyl-CoA/OAA-Verhältnis (Fasten) oder Insulinmangel. Ketonkörper werden ins Blut abgegeben und in Gehirn/Muskel oxidiert.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Bioenergetik",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0314",
    "question": "Warum kann die Leber selbst keine Ketonkörper oxidieren?",
    "options": [
      "Weil die Leber keine Mitochondrien für die Ketonoxidation besitzt",
      "Weil ihr die Thiophorase (Succinyl-CoA-Acetoacetat-CoA-Transferase) fehlt",
      "Weil Ketonkörper die innere mitochondriale Membran der Leber nicht passieren",
      "Weil die Leber kein funktionsfähiges β-Oxidationsenzymsystem exprimiert"
    ],
    "correctIndex": 1,
    "explanation": "Hepatozyten fehlt die Thiophorase (SCOT), die Acetoacetat + Succinyl-CoA → Acetoacetyl-CoA + Succinat katalysiert. Daher ist die Leber ein reiner Ketonkörperproduzent, der selbst nicht davon profitiert – die Ketonkörper werden für andere Organe (Gehirn, Herz, Muskel) gebildet.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0315",
    "question": "Was ist der strukturelle Unterschied zwischen Glycerophospholipiden und Sphingolipiden?",
    "options": [
      "Glycerophospholipide enthalten Cholesterin als Rückgrat, Sphingolipide nicht",
      "Glycerophospholipide: Glycerin + 2 Fettsäuren + Phosphat; Sphingolipide: Sphingosin als Rückgrat",
      "Sphingolipide sind gesättigter und kommen ausschließlich in tierischen Membranen vor",
      "Glycerophospholipide sind außen in der Membran, Sphingolipide ausschließlich innen"
    ],
    "correctIndex": 1,
    "explanation": "Glycerophospholipide (z.B. PC, PE, PS, PI): Glycerin + 2 FS + Phosphat + Kopfgruppe. Sphingolipide (z.B. Ceramid, Sphingomyelin, Ganglioside): Sphingosin (langkettiger Aminoalkohol) + Fettsäure (→ Ceramid) + Kopfgruppe. Beide bilden Biomembranen.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0316",
    "question": "Welche Lipidklassen sind Hauptbestandteile der Plasmamembran und wie sind sie angeordnet?",
    "options": [
      "Triglyceride und Cholesterinester in nahezu gleichen Mengen",
      "Phospholipide (Doppelschicht), Cholesterin (Fluidität) und Sphingolipide – asymmetrisch",
      "Ausschließlich Phosphatidylcholin in symmetrischer Doppelschichtanordnung",
      "Wachse und Ceramide außen, Phospholipide in der inneren Schicht"
    ],
    "correctIndex": 1,
    "explanation": "Plasmamembran: Phospholipid-Doppelschicht (PC, PE, PS, PI, SM), Cholesterin (reguliert Fluidität, ~30–40 mol%), asymmetrisch: PS, PE und PI auf der cytoplasmatischen Seite, PC und SM auf der extrazellulären. Flippasen/Floppases halten Asymmetrie aufrecht.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0317",
    "question": "Wie reguliert Cholesterin die Fluidität der Plasmamembran?",
    "options": [
      "Cholesterin erhöht immer die Fluidität durch Störung der Fettsäurepackung",
      "Cholesterin hat biphasischen Effekt: verhindert Gelphase und senkt zu hohe Fluidität",
      "Cholesterin senkt immer die Fluidität durch Verstärkung von Wasserstoffbrücken",
      "Cholesterin hat keinen messbaren Einfluss auf die Membranfluidität"
    ],
    "correctIndex": 1,
    "explanation": "Cholesterin wirkt als 'Fluiditätspuffer': bei tiefen Temperaturen stört es die Kristallisation gesättigter FS → flüssig bleiben. Bei hohen Temperaturen schränkt es die Beweglichkeit ein → verhindert zu hohe Fluidität. Lipid Rafts entstehen durch Cholesterin/Sphingolipid-reiche Mikrodomänen.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0318",
    "question": "Was sind Eicosanoide und aus welcher Fettsäure entstehen sie hauptsächlich?",
    "options": [
      "20-C-Signalmoleküle aus Palmitinsäure (C16:0) durch Fettsäuresynthase",
      "20-C-Signalmoleküle (Prostaglandine, Thromboxane, Leukotriene) aus Arachidonsäure (C20:4, ω-6)",
      "Lipidmediatoren aus Docosahexaensäure (DHA, C22:6, ω-3) durch Cytochrom-P450",
      "Steroidartige Moleküle aus Cholesterin durch Seitenkettenspaltung im ER"
    ],
    "correctIndex": 1,
    "explanation": "Eicosanoide: 20C-Lipidmediatoren aus Arachidonsäure (AA, C20:4 ω-6, aus Membranphospholipiden durch PLA₂ freigesetzt). COX (Cyclooxygenase) → Prostaglandine + Thromboxane. LOX (Lipoxygenase) → Leukotriene. Pharmakologisch: Aspirin hemmt COX irreversibel.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Klinik",
      "Enzyme"
    ]
  },
  {
    "id": "q-0319",
    "question": "Wie wirkt Aspirin auf den Eicosanoidstoffwechsel?",
    "options": [
      "Aspirin hemmt reversibel die Lipoxygenase und verhindert Leukotriensynthese",
      "Aspirin acetyliert und hemmt irreversibel COX-1/COX-2 → weniger Prostaglandine und TXA₂",
      "Aspirin hemmt Phospholipase A₂ und verhindert die Freisetzung von Arachidonsäure",
      "Aspirin aktiviert Prostacyclinsynthase und erhöht so die Thrombozytenaggregation"
    ],
    "correctIndex": 1,
    "explanation": "Aspirin (Acetylsalicylsäure) acetyliert irreversibel Ser530 in COX-1/COX-2 → kein TXA₂ mehr in Thrombozyten (keine Neusynthese → lebenslange Hemmung) → Thrombozytenaggregationshemmung. Basis der kardiovaskulären Prävention.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Enzyme",
      "Klinik"
    ]
  },
  {
    "id": "q-0320",
    "question": "Was ist SREBP und welche Rolle spielt es in der Lipidstoffwechselregulation?",
    "options": [
      "SREBP ist eine Kinase, die ACC bei niedrigem Cholesterin aktiviert",
      "SREBP ist ein Transkriptionsfaktor; bei niedrigem Cholesterin aktiviert → Lipidsynthesegene↑",
      "SREBP ist ein Transportprotein, das Cholesterin vom ER zum Golgi transportiert",
      "SREBP ist ein membranständiger Rezeptor für Statine an Hepatozyten"
    ],
    "correctIndex": 1,
    "explanation": "SREBP (Sterol Regulatory Element-Binding Protein) sitzt inaktiv im ER. Bei Cholesterin-/Fettsäuremangel: SCAP/SREBP-Komplex → Golgi → S1P/S2P-Proteasen spalten SREBP → aktive Domäne ins Kernziel → transkribiert HMGCR, FASN, LDLR und andere Lipogene-Gene.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Nukleinsäuren",
      "Enzyme"
    ]
  },
  {
    "id": "q-0321",
    "question": "In welchen Geweben findet Cholesterinsynthese hauptsächlich statt?",
    "options": [
      "Ausschließlich in der Leber (Hepatozyten) als einzigem Syntheseort",
      "Leber (Hauptort), Darm, Haut (7-Dehydrocholesterin), Gonaden und Nebenniere",
      "Ausschließlich in Fettgewebe und Skelettmuskel bei hohem Energieangebot",
      "Primär im Gehirn, da es kein Cholesterin aus dem Blutkreislauf aufnehmen kann"
    ],
    "correctIndex": 1,
    "explanation": "Ca. 70–80% des körpereigenen Cholesterins wird in der Leber synthetisiert. Weitere wichtige Orte: Dünndarm, Haut (7-Dehydrocholesterin → Vitamin D₃ durch UV-Licht), Gonaden/Nebenniere (Steroidhormonsynthese). Alle kernhaltigen Zellen können Cholesterin synthetisieren.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0322",
    "question": "Wie wird Cholesterin ausgeschieden und kann es direkt abgebaut werden?",
    "options": [
      "Direkt renal ausgeschieden als freies Cholesterin im Urin",
      "Cholesterin wird in der Leber zu Gallensäuren umgewandelt und mit der Galle ausgeschieden",
      "Cholesterin wird in Adipozyten als Cholesterinester dauerhaft gespeichert",
      "Cholesterin wird durch intestinale Bakterien vollständig zu CO₂ abgebaut"
    ],
    "correctIndex": 1,
    "explanation": "Cholesterin ist nicht oxidierbar zu CO₂ (kein Abbauweg). Hauptausscheidungsweg: Leber → 7α-Hydroxylase → Gallensäuren (primäre: Cholat, Chenodesoxycholat) → Galle → Darm → Ausscheidung/enterohepatischer Kreislauf. Oder: direkte Cholesterinsekretion in die Galle.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Klinik",
      "Enzyme"
    ]
  },
  {
    "id": "q-0323",
    "question": "Welche Funktion haben Gallensäuren und was passiert im enterohepatischen Kreislauf?",
    "options": [
      "Gallensäuren aktivieren Pankreasenzyme durch pH-Änderung; vollständige Ausscheidung",
      "Gallensäuren emulgieren Nahrungsfette; ~95% werden im Ileum rückresorbiert (enterohepatisch)",
      "Gallensäuren hemmen die Lipoproteinlipase im Blut und verlangsamen den TAG-Abbau",
      "Gallensäuren dienen als Substrate für die Fettsäuresynthese im Darmepithel"
    ],
    "correctIndex": 1,
    "explanation": "Gallensäuren (konjugiert mit Glycin/Taurin) sind Detergentien: emulgieren Fette → erleichtern Lipasewirkung. ~95% werden im Ileum via ASBT rückresorbiert → Pfortader → Leber (enterohepatischer Kreislauf). Der tägliche Gallensäurepool (~3 g) zirkuliert 6–10×/Tag.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Kompartimente",
      "Klinik"
    ]
  },
  {
    "id": "q-0324",
    "question": "Was ist PCSK9 und welche therapeutische Bedeutung hat seine Hemmung?",
    "options": [
      "PCSK9 ist eine Kinase, die LDL-Rezeptoren phosphoryliert und aktiviert",
      "PCSK9 leitet LDL-Rezeptoren nach Endozytose dem Abbau zu → weniger LDLR → LDL↑; Inhibitoren senken LDL stark",
      "PCSK9 aktiviert HMGCR und erhöht so die Cholesterinsynthese in Hepatozyten",
      "PCSK9 ist ein Transportprotein für Cholesterinester in Lipoproteinen"
    ],
    "correctIndex": 1,
    "explanation": "PCSK9 (Proprotein-Convertase Subtilisin/Kexin Typ 9) bindet LDLR im Endosom und verhindert dessen Recycling → LDLR-Abbau → mehr LDL im Plasma. PCSK9-Inhibitoren (Evolocumab, Alirocumab) sind monoklonale Antikörper, die LDL-C um weitere 50–60% senken, auch bei Statinversagern.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Enzyme",
      "Klinik"
    ]
  },
  {
    "id": "q-0325",
    "question": "Was sind Lipidtröpfchen (Lipid Droplets) und welche Proteine bedecken ihre Oberfläche?",
    "options": [
      "Membranumschlossene Organellen im Zellkern zur DNA-Verpackung",
      "Cytoplasmatische Speicherorganellen für Triglyceride/Cholesterinester (Perilipine)",
      "Lysosomal-assoziierte Vesikel für den enzymatischen Lipidabbau",
      "Exozytotische Vesikel für die Lipoproteinsekretion an der Basalmembran"
    ],
    "correctIndex": 1,
    "explanation": "Lipidtröpfchen: hydrophober Kern aus TAG + Cholesterinestern, umgeben von Phospholipid-Monoschicht + Perilipine (PLIN1 dominant in Adipozyten). Perilipine regulieren den Zugang von Lipasen (ATGL, HSL) → Schutz vor basaler Lipolyse.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0326",
    "question": "Was ist der Unterschied zwischen LDL und HDL bezüglich Zusammensetzung und kardiovaskulärem Risiko?",
    "options": [
      "LDL und HDL haben identische Zusammensetzung; der Unterschied liegt nur in der Größe",
      "LDL: cholesterinreich, ApoB-100, atherogen; HDL: proteinreich, ApoA-I, kardioprotektiv",
      "LDL hat hohen Triglyceridgehalt; HDL transportiert primär Triglyceride zur Leber",
      "HDL ist das atherogenere Lipoprotein; LDL ist dagegen kardioprotektiv"
    ],
    "correctIndex": 1,
    "explanation": "LDL (~45% Cholesterin, ApoB-100): liefert Cholesterin an Gewebe, bei Überschuss → Oxidation → Aufnahme durch Makrophagen → Schaumzellen → Atherosklerose. HDL (~50% Protein/ApoA-I): sammelt Cholesterin aus Geweben → Leber → Ausscheidung. Hohe HDL = kardioprotektiv.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Klinik"
    ]
  },
  {
    "id": "q-0327",
    "question": "Wie entsteht oxidiertes LDL (ox-LDL) und welche Rolle spielt es bei der Atherosklerose?",
    "options": [
      "ox-LDL entsteht durch enzymatische Oxidation in der Leber und wird dort abgebaut",
      "LDL in der Gefäßwand wird durch ROS oxidiert → Makrophagen nehmen ox-LDL auf → Schaumzellen",
      "ox-LDL aktiviert HDL und fördert aktiv den reversen Cholesterintransport",
      "ox-LDL bindet an LDL-Rezeptoren mit erhöhter Affinität und wird schneller abgebaut"
    ],
    "correctIndex": 1,
    "explanation": "In der Intima oxidieren ROS LDL-Phospholipide und ApoB → ox-LDL. Makrophagen nehmen es via Scavenger-Rezeptoren (nicht reguliert!) auf → Cholesterinüberladung → Schaumzellen → Fettkern → Plaque-Bildung → Ruptur → Herzinfarkt/Schlaganfall.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Klinik"
    ]
  },
  {
    "id": "q-0328",
    "question": "Was ist LCAT und welche Rolle spielt es im HDL-Stoffwechsel?",
    "options": [
      "LCAT ist eine Lipase, die HDL-Triglyceride zu freien Fettsäuren hydrolysiert",
      "LCAT verestert freies Cholesterin in HDL → Cholesterinester wandern in HDL-Kern → HDL reift",
      "LCAT überträgt Cholesterinester direkt von HDL auf LDL-Partikel im Plasma",
      "LCAT aktiviert ApoA-I und fördert die ABCA1-abhängige Cholesterinabgabe"
    ],
    "correctIndex": 1,
    "explanation": "LCAT (aktiviert durch ApoA-I) verestert freies Cholesterin (aus Zellen via ABCA1/G1) mit Fettsäure aus Lecithin → Cholesterinester → hydrophob → wandern in HDL-Kern → HDL wird größer (HDL3 → HDL2). Essentiell für funktionalen reversen Cholesterintransport.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Enzyme"
    ]
  },
  {
    "id": "q-0329",
    "question": "Welche Konsequenz hat nicht-alkoholische Fettlebererkrankung (NAFLD) biochemisch?",
    "options": [
      "Zu wenig TAG-Synthese durch Insulinresistenz der hepatischen Lipogenese",
      "Übermäßige TAG-Akkumulation in Hepatozyten durch gestörte Lipogenese/β-Oxidation/VLDL-Sekretion",
      "Fehlende Gallensäurensynthese durch CYP7A1-Mangel in Hepatozyten",
      "Verstärkte Ketonkörperbildung und konsekutive metabolische Alkalose"
    ],
    "correctIndex": 1,
    "explanation": "NAFLD: Insulinresistenz → erhöhte de-novo-Lipogenese + erhöhte Lipolyse im Fettgewebe + verminderte β-Oxidation → TAG-Akkumulation in Hepatozyten. Bei Progression: NASH (Entzündung), Fibrose, Zirrhose. Häufigste Lebererkrankung weltweit.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Klinik"
    ]
  },
  {
    "id": "q-0330",
    "question": "Was sind Sphingolipidosen und welche Gemeinsamkeit haben Tay-Sachs und Niemann-Pick A/B?",
    "options": [
      "Beide sind Erkrankungen durch Überproduktion von Sphingolipiden in Lysosomen",
      "Beide sind lysosomale Speicherkrankheiten durch defekte Sphingolipid-abbauende Enzyme",
      "Beide betreffen den Cholesterintransport und führen zu Hypercholesterinämie",
      "Beide werden symptomatisch durch eine Statintherapie behandelt"
    ],
    "correctIndex": 1,
    "explanation": "Tay-Sachs: Hexosaminidase A-Mangel → GM2-Gangliosid akkumuliert in Neuronen. Niemann-Pick A/B: Sphingomyelinase-Mangel → Sphingomyelin akkumuliert. Alle sind lysosomale Speicherkrankheiten mit progressivem neurologischen Verlauf.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Kompartimente",
      "Klinik"
    ]
  },
  {
    "id": "q-0331",
    "question": "Welche Rolle spielen Peroxisomen im Lipidstoffwechsel?",
    "options": [
      "Peroxisomen synthetisieren alle Phospholipide für die Plasmamembran",
      "Peroxisomen oxidieren VLCFA (>C22), verzweigte FS und bilden Ether-Phospholipide (H₂O₂)",
      "Peroxisomen sind der Hauptort der β-Oxidation normaler langkettiger Fettsäuren",
      "Peroxisomen synthetisieren Gallensäuren aus Mevalonat im Darmepithel"
    ],
    "correctIndex": 1,
    "explanation": "Peroxisomen: α-Oxidation (verzweigte FS, z.B. Phytansäure) und β-Oxidation sehr langkettiger FS (VLCFA >C22, die nicht ins Mitochondrium können). Ether-Phospholipid-Synthese (Plasmalogene, wichtig im Gehirn). Bei Peroxisomendefekt: Zellweger-Syndrom.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0332",
    "question": "Was ist die Rolle von Dolichol im Glykosylierungsstoffwechsel?",
    "options": [
      "Dolichol ist ein Cholesterinvorläufer im Mevalonat-Syntheseweg",
      "Dolichol ist ein Lipidcarrier im ER für N-Glykosylierungs-Oligosaccharide",
      "Dolichol aktiviert Fettsäuren für den mitochondrialen Carnitin-Shuttle",
      "Dolichol ist eine strukturelle Kernkomponente des 26S-Proteasoms"
    ],
    "correctIndex": 1,
    "explanation": "Dolichol-Phosphat (langer Isoprenoidalkohol aus dem Mevalonat-Weg) dient als Träger für den Oligosaccharidvorläufer bei der N-Glykosylierung im ER: Oligosaccharid wird auf Dolichol-PP assembliert und dann auf Asn-X-Ser/Thr des Proteins übertragen.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Nukleinsäuren",
      "Aminosäuren und Proteine"
    ]
  },
  {
    "id": "q-0333",
    "question": "Was sind Plasmalogene und warum sind sie physiologisch wichtig?",
    "options": [
      "Gesättigte Triglyceride mit sehr langen Fettsäureketten in Adipozyten",
      "Ether-Phospholipide (Vinylether an sn-1); wichtig im Gehirn/Herz als ROS-Schutz",
      "Oxidierte Cholesterinderivate (Oxysterole) die in Atherosklerose akkumulieren",
      "Phosphatidylserin-reiche Membranbereiche die als Apoptosesignal dienen"
    ],
    "correctIndex": 1,
    "explanation": "Plasmalogene (1-Alkenyl-2-acyl-Glycerophospholipide): Vinylether an sn-1-Position, meist Ethanolamin oder Cholin als Kopfgruppe. ~18% aller Phospholipide im Menschen. Reich im Gehirn, Herzmuskel, Neutrophilen. Schutz gegen oxidativen Stress. Synthese in Peroxisomen. Defekt: Zellweger-Syndrom.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0334",
    "question": "Welche Aussage zum Carnitin-Shuttle ist korrekt?",
    "options": [
      "Carnitin transportiert kurzkettige Fettsäuren (<C8) in die Mitochondrien",
      "CPT1 (außen) und CPT2 (innen) transportieren langkettige Acyl-Gruppen zur β-Oxidation",
      "Carnitin wird durch Malonyl-CoA aktiviert und initiiert die Fettsäuremobilisierung",
      "Carnitin ist ein wasserlöslicher Cofaktor der β-Oxidation im Cytosol"
    ],
    "correctIndex": 1,
    "explanation": "Langkettige FS (>C12) können innere Mitochondrienmembran nicht direkt passieren: Acyl-CoA + Carnitin → (CPT1, außen) → Acylcarnitin → Translokase → CPT2 (innen) → Acyl-CoA + freies Carnitin. CPT1 wird durch Malonyl-CoA gehemmt (Anti-Oxidations-Signal).",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Bioenergetik",
      "Kompartimente"
    ]
  },
  {
    "id": "q-0335",
    "question": "Was versteht man unter 'Lipotoxizität' und in welchen klinischen Kontexten ist sie relevant?",
    "options": [
      "Vergiftung durch übermäßigen Konsum von Omega-3-Fettsäuren (Fischöl)",
      "Schädigung nicht-adipöser Zellen durch Lipidakkumulation (Ceramid, DAG, FFA) → Apoptose",
      "Hemmung der Glykolyse durch hohe Fettsäurekonzentrationen im Cytosol",
      "Übermäßige Ketonkörperbildung bei fettreicher Ernährung ohne Insulinmangel"
    ],
    "correctIndex": 1,
    "explanation": "Lipotoxizität: Ektopische Lipidakkumulation in Herz, Pankreas, Leber, Skelettmuskel bei Adipositas/Insulinresistenz → Ceramid und DAG aktivieren Stresswege → ER-Stress → Apoptose von β-Zellen (→ Typ-2-Diabetes-Progression) und Kardiomyozyten.",
    "author": "BioBattle-Team · Med. Fakultät, Uni Köln",
    "license": "CC BY 4.0",
    "status": "approved",
    "topic": [
      "Lipide",
      "Klinik"
    ]
  }
];
