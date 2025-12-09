export const translations = {
    he: {
        nav: {
            solutions: "פתרונות",
            services: "שירותים",
            pricing: "מחירים",
            calculator: "מחשבון",
            contact: "צור קשר",
            cta: "התחל בדיקה חינם",
        },
        hero: {
            badge: "הפלטפורמה המובילה לרגולציה דיגיטלית",
            title_start: "הפוך את הרגולציות הדיגיטליות",
            title_end: "לנגישות ופשוטות.",
            subtitle: "ניהול מלא של המערך המשפטי הדיגיטלי במקום אחד: מנגישות ופרטיות ועד מבצעים ומשלוחים. חסוך בעלויות משפטיות והימנע מקנסות מיותרים.",
            cta_primary: "צור קשר להדגמה",
            cta_secondary: "התחל בדיקה במחשבון",
            trust: "נבחר על ידי 2,000+ עסקים בישראל",
        },
        // Solutions Section (Plugins)
        solutions: {
            title_start: "פלטפורמה אחת.",
            title_end: "כיסוי רגולטורי מלא.",
            subtitle: "הכלים המתקדמים שלנו הופכים את העמידה ברגולציות דיגיטליות לפשוטה, אוטומטית וחכמה יותר.",
            learn_more: "למידע נוסף",
            items: [
                {
                    slug: "cookie-compliance",
                    title: "תוסף Cookie Compliance",
                    description: "פתרון מלא לניהול קוקיז: סריקה אוטומטית, באנר הסכמה מעוצב, וטיפול בבקשות מחיקה.",
                    detailed: {
                        hero: {
                            title: "ניהול קוקיז ופרטיות",
                            subtitle: "הפוך את האתר שלך לתואם GDPR ו-CCPA בקלות. באנר הסכמה מעוצב וניהול העדפות משתמש.",
                            badge: "פרטיות מובטחת"
                        },
                        features: [
                            { title: "סריקה חודשית", description: "זיהוי אוטומטי של קבצי קוקיז חדשים באתר." },
                            { title: "עיצוב מותאם", description: "התאם את נראות הבאנר לשפה העיצובית של המותג." },
                            { title: "יומן הסכמות", description: "תיעוד מלא של הסכמות המשתמשים להגנה משפטית." },
                            { title: "חסימה חכמה", description: "חסימת קוקיז צד-שלישי עד לקבלת הסכמה." }
                        ],
                        process: {
                            title: "איך זה עובד?",
                            steps: [
                                { title: "סריקת אתר", description: "המערכת סורקת את האתר ומזהה את כל העוגיות הקיימות." },
                                { title: "קטגוריזציה", description: "מיון העוגיות לפי סוגים (חיוני, שיווק, סטטיסטיקה)." },
                                { title: "הטמעת באנר", description: "הצגת באנר חכם למשתמשים בהתאם למיקום שלהם." },
                                { title: "ניהול הסכמות", description: "שמירת בחירות המשתמש וניהול היומן המשפטי." }
                            ]
                        },
                        technical: {
                            title: "מפרט טכני",
                            items: [
                                "תמיכה ב-GDPR ו-CCPA",
                                "תצורה תואמת IAB TCF v2.2",
                                "תמיכה ב-Cross-domain Consent",
                                "ממשק ניהול API",
                                "ייצוא נתונים ל-CSV"
                            ]
                        },
                        faq: [
                            { q: "האם זה מאט את האתר?", a: "התוסף בנוי לביצועים מהירים ולא פוגע במהירות הטעינה." },
                            { q: "האם זה עובד עם וורדפרס?", a: "כן, יש לנו תוסף ייעודי לוורדפרס וגם הטמעה אוניברסלית." }
                        ]
                    }
                },
                {
                    slug: "accessibility-ai",
                    title: "חבילת נגישות + AI",
                    description: "סורק נגישות WCAG 2.1 אוטומטי משולב עם סוכן AI קולי המסייע למשתמשים עם מוגבלויות.",
                    detailed: {
                        hero: {
                            title: "נגישות מבוססת AI",
                            subtitle: "הנגש את האתר שלך לכולם באמצעות טכנולוגיה מתקדמת. עמידה בתקן WCAG 2.1 באופן אוטומטי.",
                            badge: "נגישות אוטומטית"
                        },
                        features: [
                            { title: "תיקון אוטומטי", description: "תיקון בעיות נגישות נפוצות ללא התערבות ידנית." },
                            { title: "סוכן קולי", description: "עזרה בניווט באתר למשתמשים כבדי ראייה." },
                            { title: "הגנה משפטית", description: "מזער את הסיכון לתביעות נגישות." },
                            { title: "סרגל נגישות", description: "תפריט נגישות מלא להתאמה אישית של המשתמש." }
                        ],
                        process: {
                            title: "תהליך ההנגשה",
                            steps: [
                                { title: "התקנה", description: "הטמעת שורת קוד אחת באתר (או תוסף וורדפרס)." },
                                { title: "ניתוח ראשוני", description: "הבינה המלאכותית סורקת ומנתחת את מבנה האתר." },
                                { title: "תיקון קוד", description: "יצירת שכבת נגישות שמתקנת תגיות ARIA ומבנה סמנטי." },
                                { title: "תחזוקה שוטפת", description: "סריקה יומית לזיהוי שינויים ותיקון אוטומטי." }
                            ]
                        },
                        technical: {
                            title: "עמידה בתקנים",
                            items: [
                                "תקן ישראלי 5568",
                                "WCAG 2.1 רמה AA",
                                "תמיכה בקוראי מסך (NVDA, JAWS)",
                                "ניווט מקלדת מלא",
                                "תמיכה בכל הדפדפנים המודרניים"
                            ]
                        },
                        faq: [
                            { q: "האם זה מכסה את כל דרישות החוק?", a: "הפתרון מכסה את רוב דרישות WCAG 2.1 רמה AA." },
                            { q: "האם צריך מתכנת כדי להתקין?", a: "לא, ההתקנה פשוטה ומהירה באמצעות שורת קוד אחת." }
                        ]
                    }
                },
                {
                    slug: "promotion-tracker",
                    title: "מערכת מעקב מבצעים",
                    description: "תיעוד היסטוריית מחירים בזמן אמת וולידציה לחוקיות מבצעים למניעת קנסות.",
                    detailed: {
                        hero: {
                            title: "מעקב וניהול מבצעים",
                            subtitle: "ודא שהמבצעים שלך חוקיים. מערכת אוטומטית למעקב אחרי היסטוריית מחירים ומניעת הטעיית צרכן.",
                            badge: "הגנת בצרכן"
                        },
                        features: [
                            { title: "היסטוריית מחירים", description: "שמירת המחיר הקודם כנדרש בחוק." },
                            { title: "התראות בזמן אמת", description: "קבל התראה אם מבצע חורג מהכללים." },
                            { title: "דוחות לרגולטור", description: "הפקת דוחות המוכיחים עמידה בחוק הגנת הצרכן." },
                            { title: "ניתוח מתחרים", description: "השוואת מחירים ומבצעים מול המתחרים." }
                        ],
                        process: {
                            title: "זרימת העבודה",
                            steps: [
                                { title: "סנכרון מוצרים", description: "חיבור לקטלוג המוצרים שלך וקריאת נתונים ראשונית." },
                                { title: "ניטור שוטף", description: "דגימת מחירים יומית ושמירת היסטוריה." },
                                { title: "זיהוי שינויים", description: "זיהוי ירידות מחיר והגדרת 'מחיר קודם' חוקי." },
                                { title: "ולידציה", description: "בדיקה אוטומטית לפני פרסום מבצע חדש." }
                            ]
                        },
                        technical: {
                            title: "אינטגרציות ונתונים",
                            items: [
                                "Shopify App מוסמך",
                                "תוסף WooCommerce",
                                "API למערכות מותאמות",
                                "אחסון נתונים ל-7 שנים",
                                "ייצוא דוחות Excel/PDF"
                            ]
                        },
                        faq: [
                            { q: "האם זה עובד עם Shopify?", a: "כן, אינטגרציה מלאה ל-Shopify, WooCommerce ועוד." },
                            { q: "כמה זמן נשמרת ההיסטוריה?", a: "ההיסטוריה נשמרת ללא הגבלת זמן כל עוד המנוי פעיל." }
                        ]
                    }
                },
                {
                    slug: "shipping-manager",
                    title: "ניהול זמני משלוח",
                    description: "מנוע חישוב חכם לזמני משלוח המתחשב בחגים וסופ\"ש, למניעת הטעיית צרכן.",
                    detailed: {
                        hero: {
                            title: "מחשבון זמני משלוח חכם",
                            subtitle: "אל תבטיח מה שאי אפשר לקיים. חישוב מדויק של ימי עסקים, חגים וסופי שבוע.",
                            badge: "לוגיסטיקה חכמה"
                        },
                        features: [
                            { title: "חישוב ימי עסקים", description: "דילוג אוטומטי על שבתות וחגים רשמיים." },
                            { title: "שקיפות ללקוח", description: "הצגת תאריך משוער מדויק בקופה." },
                            { title: "מניעת אכזבות", description: "תיאום ציפיות נכון מפחית ביטולים ותלונות." },
                            { title: "ניהול אזורי שילוח", description: "הגדרת זמנים שונים לכל אזור בארץ." }
                        ],
                        process: {
                            title: "איך זה מחשב?",
                            steps: [
                                { title: "הגדרת יומן", description: "הזנת ימי עבודה, שעות פעילות וחגים של העסק." },
                                { title: "הגדרת חוקים", description: "קביעת זמני טיפול (Handling Time) וזמני שילוח (Transit Time)." },
                                { title: "אינטגרציה לקופה", description: "הצגת הווידג'ט בעמוד המוצר ובצ'ק-אאוט." },
                                { title: "חישוב דינמי", description: "חישוב תאריך המסירה המדויק ללקוח בזמן אמת." }
                            ]
                        },
                        technical: {
                            title: "יכולות המערכת",
                            items: [
                                "API ללוח שנה עברי",
                                "תמיכה בחגים לאומיים ודתיים",
                                "זיהוי מיקום גיאוגרפי (Geo-location)",
                                "התאמה למובייל",
                                "תמיכה בריבוי מחסנים"
                            ]
                        },
                        faq: [
                            { q: "האם ניתן להגדיר חופשות מותאמות?", a: "כן, ניתן להוסיף ימי חופשה של העסק." },
                            { q: "האם זה תומך במשלוח לחו\"ל?", a: "כרגע המערכת מותאמת ללוח השנה הישראלי." }
                        ]
                    }
                },
            ]
        },
        // Services Section (Tools)
        services: {
            title_start: "שירותים משלימים",
            title_end: "לניהול חכם.",
            subtitle: "כלים נוספים שיעזרו לכם לנהל את העסק בראש שקט.",
            items: [
                {
                    slug: "digital-examiner",
                    title: "הבוחן הדיגיטלי החכם",
                    description: "שאלון אינטראקטיבי מתקדם המנתח את הנכסים הדיגיטליים שלך ומספק דוח מותאם אישית.",
                    detailed: {
                        hero: {
                            title: "הבוחן הדיגיטלי החכם",
                            subtitle: "קבל תמונת מצב רגולטורית מלאה של העסק שלך תוך דקות. ללא צורך בידע משפטי.",
                            badge: "מבוסס בינה מלאכותית"
                        },
                        features: [
                            { title: "מנוע אדפטיבי", description: "השאלות משתנות בזמן אמת בהתאם לתשובות הקודמות שלך." },
                            { title: "מסד נתונים גלובלי", description: "עדכון שוטף של כל הרגולציות העולמיות (GDPR, CCPA, וכו')." },
                            { title: "מחשבון סיכונים", description: "אלגוריתם חכם להערכת החשיפה המשפטית ופוטנציאל הקנסות." },
                            { title: "דוח מותאם אישית", description: "הפקת PDF מפורט עם המלצות ספציפיות לעסק שלך." }
                        ],
                        process: {
                            title: "איך זה עובד?",
                            steps: [
                                { title: "זיהוי עסק", description: "אנחנו מזהים את סוג העסק (E-commerce, SaaS) ותחום הפעילות." },
                                { title: "מיפוי נכסים", description: "מיפוי הנוכחות הדיגיטלית: אתרים, אפליקציות, CRM ושירותי ענן." },
                                { title: "ניתוח קהל", description: "הבנת המשתמשים: מיקום גיאוגרפי, גילאים ונתונים רגישים." },
                                { title: "בדיקת נגישות", description: "בדיקת מצב הנגישות הנוכחי ורמת העמידה בתקן." },
                                { title: "ניתוח מעקבים", description: "סריקה עמוקה של קבצי קוקיז, אנליטיקס וכלים צד-שלישי." }
                            ]
                        },
                        technical: {
                            title: "מה מקבלים בדוח?",
                            items: [
                                "רשימת רגולציות רלוונטיות (GDPR, CCPA, תקן 5568)",
                                "מפת סיכונים ויזואלית (גבוה/בינוני/נמוך)",
                                "תוכנית פעולה מדורגת ליישום",
                                "הערכת עלויות ומשאבים",
                                "רשימת ספקים מומלצים"
                            ]
                        },
                        faq: [
                            { q: "כמה זמן לוקחת הסריקה?", a: "הסריקה אורכת פחות מ-2 דקות." },
                            { q: "האם זה מחליף ייעוץ משפטי?", a: "המערכת נותנת אינדיקציה טובה, אך לא תחליף מלא לייעוץ משפטי פרטני." }
                        ]
                    }
                },
                {
                    slug: "legal-document-bank",
                    title: "בנק מסמכים משפטיים",
                    description: "מאגר מסמכים חכמים הכולל תקנונים, מדיניות פרטיות, והצהרות נגישות.",
                    detailed: {
                        hero: {
                            title: "בנק מסמכים משפטיים",
                            subtitle: "גישה מיידית לכל המסמכים המשפטיים שהעסק שלך צריך, מעודכנים לתקנות החדשות ביותר.",
                            badge: "משפטי"
                        },
                        features: [
                            { title: "תמיד מעודכן", description: "המסמכים מתעדכנים אוטומטית עם כל שינוי חקיקה." },
                            { title: "התאמה אישית", description: "התאם את המסמכים לצרכים הספציפיים של העסק שלך." },
                            { title: "חסכון בזמן", description: "הורד והשתמש מיד, ללא צורך בניסוח מאפס." },
                            { title: "מגוון רחב", description: "מתקנוני אתר ועד הסכמי עבודה והזמנות עבודה." }
                        ],
                        process: {
                            title: "תהליך העבודה",
                            steps: [
                                { title: "חיפוש", description: "איתור המסמך הנדרש מתוך המאגר החכם." },
                                { title: "אשף התאמה", description: "מענה על שאלון קצר להתאמת המסמך לעסק." },
                                { title: "תצוגה מקדימה", description: "צפייה במסמך המוכן לפני הורדה." },
                                { title: "הורדה ושימוש", description: "קבלת הקובץ בפורמט לבחירתך מוכן לחתימה." }
                            ]
                        },
                        technical: {
                            title: "פורמטים ותכונות",
                            items: [
                                "תמיכה ב-Word ו-PDF",
                                "אפשרות לעריכה מלאה",
                                "לוגו מותאם אישית",
                                "שמירת גרסאות בענן",
                                "חתימה דיגיטלית (בקרוב)"
                            ]
                        },
                        faq: [
                            { q: "האם המסמכים קבילים בבית משפט?", a: "כן, המסמכים נוסחו על ידי עורכי דין מומחים." },
                            { q: "האם אני יכול לערוך את המסמכים?", a: "בהחלט, כל המסמכים ניתנים לעריכה מלאה." }
                        ]
                    }
                },
                {
                    slug: "contract-manager",
                    title: "ניהול חוזים",
                    description: "מערכת לזיהוי סעיפים משפטיים מסוכנים וכלי עזר לניהול משברים משפטיים.",
                    detailed: {
                        hero: {
                            title: "ניהול חוזים ומשברים",
                            subtitle: "הגן על העסק שלך מפני חוזים מסוכנים. בינה מלאכותית שתעבור על החוזים שלך ותסמן סעיפים בעייתיים.",
                            badge: "AI Legal"
                        },
                        features: [
                            { title: "סריקת חוזים", description: "זיהוי מהיר של סעיפים מקפחים או מסוכנים." },
                            { title: "ניהול ארכיון", description: "שמירה מסודרת ומאובטחת של כל החוזים שלך." },
                            { title: "תבניות מוכנות", description: "גישה למאגר חוזים סטנדרטיים לעבודה מול ספקים." },
                            { title: "תזכורות", description: "התראות אוטומטיות על חידוש חוזים ותאריכי יעד." }
                        ],
                        process: {
                            title: "איך המערכת עובדת?",
                            steps: [
                                { title: "העלאת חוזה", description: "טעינת הקובץ (PDF/DOCX) למערכת המאובטחת." },
                                { title: "ניתוח AI", description: "המנוע סורק את הטקסט ומזהה מושגים משפטיים." },
                                { title: "סימון סיכונים", description: "הדגשת סעיפים בעייתיים עם הסבר והמלצות." },
                                { title: "דוח סיכום", description: "קבלת תקציר מנהלים של החוזה עם רמת הסיכון." }
                            ]
                        },
                        technical: {
                            title: "אבטחה וטכנולוגיה",
                            items: [
                                "מנוע NLP מתקדם בעברית",
                                "טכנולוגיית OCR לחוזים סרוקים",
                                "הצפנת נתונים AES-256",
                                "גיבוי יומי בענן",
                                "אימות דו-שלבי (2FA)"
                            ]
                        },
                        faq: [
                            { q: "האם זה מחליף עו\"ד?", a: "זה כלי עזר מצוין אך לא תחליף לייעוץ משפטי מלא בחוזים מורכבים." },
                            { q: "האם המידע שלי מאובטח?", a: "כן, אנו משתמשים בהצפנה ברמה בנקאית." }
                        ]
                    }
                },
            ]
        },
        calculator: {
            badge: "קסם טכנולוגי",
            title: "האם האתר שלך\nמוגן משפטית?",
            subtitle: "אל תחכה לתביעה הבאה. המנוע החכם שלנו יסרוק את האתר שלך, ימצא פרצות רגולטוריות ויגיד לך בדיוק מה צריך לתקן - לפני שיהיה מאוחר מדי.",
            placeholder: "Www.YourWebsite.co.il",
            cta: "סרוק עלי",
            steps: [
                "מאתחל סורק רגולציה...",
                "מחפש קבצי Cookies מתחת לשטיח...",
                "בודק אם עורכי הדין ישנים...",
                "סורק הנגשת צבעים (גם לעיוורי צבעים)...",
                "קורא את האותיות הקטנות בשבילך...",
                "מחשב סיכוי לתביעה ייצוגית...",
                "מיירט סקריפטים חשודים...",
                "מאמת תאימות GDPR עם האיחוד האירופי...",
                "מכין דוח שהמנכ\"ל יבין...",
            ],
            result_title: "נמצאו 14 פרצות סיכון!",
            result_text: "סתם בצחוק... זה רק דמו 😉 אבל הגרסה המלאה שלנו לא צוחקת.",
            result_cta: "קבל דוח אמיתי עכשיו",
            idle_title: "המערכת בהמתנה...",
            idle_subtitle: "הזן כתובת URL כדי להעיר את המפלצת",
        },
        pricing: {
            title: "חבילות ומחירים",
            subtitle: "בחרו את המסלול שמתאים לצרכים שלכם. שקיפות מלאה, ללא אותיות קטנות.",
            plans: [
                {
                    name: "בסיסי",
                    description: "לעסקים קטנים בתחילת הדרך",
                    price: "179",
                    features: [
                        "הבוחן הדיגיטלי - אתר אחד",
                        "10 מסמכים בסיסיים מבנק המסמכים",
                        "תוסף קוכיז (חבילה בסיסית)",
                        "דוח נגישות חודשי (PDF)",
                        "תמיכה במייל (עד 48 שעות)",
                    ],
                    cta: "התחל עכשיו",
                    recommended: false
                },
                {
                    name: "מקצועי",
                    description: "החבילה המומלצת לעסקים בצמיחה",
                    price: "549",
                    features: [
                        "הבוחן הדיגיטלי - עד 5 אתרים",
                        "גישה מלאה לכל בנק המסמכים",
                        "תוסף קוכיז מתקדם + דוחות אנליטיים",
                        "תוסף נגישות Smart AI",
                        "מעקב מבצעים (עד 1,000 מוצרים)",
                        "תמיכה בצ'אט ובטלפון",
                        "מעקב אחר 3 מתחרים",
                    ],
                    cta: "התחל ניסיון חינם",
                    recommended: true
                },
                {
                    name: "ארגוני",
                    description: "פתרון מקיף לארגונים וחברות גדולות",
                    price: "1,799",
                    features: [
                        "הבוחן הדיגיטלי - אתרים ללא הגבלה",
                        "כל הכלים, התוספים וה-API",
                        "מעקב מבצעים (10,000+ מוצרים)",
                        "מנהל תיק לקוח אישי (CSM)",
                        "SLA לתמיכה (4 שעות)",
                        "הדרכות צוות והטמעה מותאמת",
                        "דוחות מנהלים מתקדמים",
                    ],
                    cta: "צור קשר לארגונים",
                    recommended: false
                }
            ],
            disclaimer: "* המחירים אינם כוללים מע״מ. ט.ל.ח"
        },
        contact: {
            title: "מוכנים להתחיל?",
            title_highlight: "דברו איתנו",
            subtitle: "קבעו שיחת הדגמה חינם ונראה לכם איך RegulationKit יכול לחסוך לכם זמן וכסף.",
            form: {
                name: "שם מלא",
                email: "אימייל",
                phone: "טלפון",
                message: "הודעה",
                submit: "שלח בקשה להדגמה",
                success_title: "תודה רבה!",
                success_text: "קיבלנו את פנייתכם ונחזור אליכם בהקדם."
            },
            info: {
                phone: "טלפון",
                email: "אימייל",
                address: "כתובת"
            }
        },
        footer: {
            products_title: "מוצרים",
            products: [
                "הבוחן הדיגיטלי",
                "בנק מסמכים",
                "תוסף קוכיז",
                "תוסף נגישות"
            ],
            company_title: "חברה",
            company: [
                "אודות",
                "בלוג",
                "לקוחות",
                "קריירה"
            ],
            legal_title: "משפטי",
            legal: [
                "תנאי שימוש",
                "מדיניות פרטיות",
                "הצהרת נגישות"
            ],
            rights: "© 2025 RegulationKit. כל הזכויות שמורות.",
            tagline: "עוזרים לעסקים לעמוד ברגולציות 🇮🇱"
        }
    },
    en: {
        nav: {
            solutions: "Solutions",
            services: "Services",
            pricing: "Pricing",
            calculator: "Calculator",
            contact: "Contact",
            cta: "Start Free Check",
        },
        hero: {
            badge: "The Leading Digital Regulation Platform",
            title_start: "Make Digital Regulations",
            title_end: "Accessible & Simple.",
            subtitle: "Complete management of your digital legal compliance in one place: from accessibility and privacy to promotions and shipping. Save on legal costs and avoid unnecessary fines.",
            cta_primary: "Book a Demo",
            cta_secondary: "Start Calculation",
            trust: "Trusted by 2,000+ businesses in Israel",
        },
        // Solutions Section (Plugins)
        solutions: {
            title_start: "One Platform.",
            title_end: "Full Regulatory Coverage.",
            subtitle: "Our advanced tools make digital compliance simple, automated, and smarter.",
            learn_more: "Learn More",
            items: [
                {
                    slug: "cookie-compliance",
                    title: "Cookie Compliance Plugin",
                    description: "Complete cookie management solution: auto-scanning, designed consent banner, and deletion request handling.",
                    detailed: {
                        hero: {
                            title: "Cookie & Privacy Management",
                            subtitle: "Make your site GDPR & CCPA compliant easily. Designed consent banner and user preference management.",
                            badge: "Privacy First"
                        },
                        features: [
                            { title: "Monthly Scan", description: "Auto-detect new cookies on your site." },
                            { title: "Custom Design", description: "Match the banner look to your brand identity." },
                            { title: "Consent Log", description: "Full documentation of user consents for legal protection." },
                            { title: "Smart Blocking", description: "Block third-party scripts until consent is given." }
                        ],
                        process: {
                            title: "How It Works",
                            steps: [
                                { title: "Website Scan", description: "The system scans your site and identifies all existing cookies." },
                                { title: "Categorization", description: "Sorts cookies by type (Essential, Marketing, Statistics)." },
                                { title: "Banner Deploy", description: "Displays a smart banner to users based on their location." },
                                { title: "Consent Management", description: "Records user choices and manages the legal log." }
                            ]
                        },
                        technical: {
                            title: "Technical Specs",
                            items: [
                                "GDPR & CCPA Support",
                                "IAB TCF v2.2 Compliant",
                                "Cross-domain Consent",
                                "Management API",
                                "CSV Data Export"
                            ]
                        },
                        faq: [
                            { q: "Does it slow down the site?", a: "Built for speed, it does not impact load times." },
                            { q: "Does it work with WordPress?", a: "Yes, we have a dedicated plugin and universal integration." }
                        ]
                    }
                },
                {
                    slug: "accessibility-ai",
                    title: "Accessibility + AI Suite",
                    description: "Automated WCAG 2.1 accessibility scanner combined with a Voice AI agent assisting users with disabilities.",
                    detailed: {
                        hero: {
                            title: "AI-Based Accessibility",
                            subtitle: "Make your site accessible to everyone with advanced tech. WCAG 2.1 compliance automatically.",
                            badge: "Auto Accessibility"
                        },
                        features: [
                            { title: "Auto Remediation", description: "Fix common accessibility issues without manual intervention." },
                            { title: "Voice Agent", description: "Assist visually impaired users in navigating your site." },
                            { title: "Legal Protection", description: "Minimize the risk of accessibility lawsuits." },
                            { title: "Accessibility Toolbar", description: "Full accessibility menu for user customization." }
                        ],
                        process: {
                            title: "Remediation Process",
                            steps: [
                                { title: "Installation", description: "Embed a single line of code (or WP plugin)." },
                                { title: "Analysis", description: "AI scans and analyzes your site structure." },
                                { title: "Code Fixing", description: "Creates an accessibility layer fixing ARIA tags and semantics." },
                                { title: "Maintenance", description: "Daily scans to detect changes and auto-fix new issues." }
                            ]
                        },
                        technical: {
                            title: "Compliance Standards",
                            items: [
                                "WCAG 2.1 Level AA",
                                "ADA Compliant",
                                "Screen Reader Support (NVDA, JAWS)",
                                "Full Keyboard Navigation",
                                "Cross-browser Support"
                            ]
                        },
                        faq: [
                            { q: "Does it cover all requirements?", a: "It covers most WCAG 2.1 Level AA requirements." },
                            { q: "Do I need a developer?", a: "No, installation is simple via a single line of code." }
                        ]
                    }
                },
                {
                    slug: "promotion-tracker",
                    title: "Promotion Tracker",
                    description: "Real-time price history documentation and promotion legality validation to prevent fines.",
                    detailed: {
                        hero: {
                            title: "Promotion Management",
                            subtitle: "Ensure your promos are legal. Auto-tracking of price history to prevent consumer deception.",
                            badge: "Consumer Protection"
                        },
                        features: [
                            { title: "Price History", description: "Save previous prices as required by law." },
                            { title: "Real-time Alerts", description: "Get notified if a promo breaks the rules." },
                            { title: "Regulator Reports", description: "Generate reports proving compliance." },
                            { title: "Competitor Analysis", description: "Compare prices and promos with competitors." }
                        ],
                        process: {
                            title: "Workflow",
                            steps: [
                                { title: "Product Sync", description: "Connects to your catalog and reads initial data." },
                                { title: "Monitoring", description: "Daily price sampling and history logging." },
                                { title: "Change Detection", description: "Identifies price drops and sets legal 'previous price'." },
                                { title: "Validation", description: "Auto-check before publishing a new promotion." }
                            ]
                        },
                        technical: {
                            title: "Integrations & Data",
                            items: [
                                "Certified Shopify App",
                                "WooCommerce Plugin",
                                "Custom API",
                                "7-Year Data Retention",
                                "Excel/PDF Export"
                            ]
                        },
                        faq: [
                            { q: "Works with Shopify?", a: "Yes, full integration for Shopify, WooCommerce, and more." },
                            { q: "How long is history kept?", a: "Indefinitely as long as your subscription is active." }
                        ]
                    }
                },
                {
                    slug: "shipping-manager",
                    title: "Shipping Time Management",
                    description: "Smart shipping time calculation engine considering holidays and weekends, preventing consumer deception.",
                    detailed: {
                        hero: {
                            title: "Smart Shipping Calculator",
                            subtitle: "Don't promise what you can't keep. Accurate calculation of business days, holidays, and weekends.",
                            badge: "Smart Logistics"
                        },
                        features: [
                            { title: "Business Days", description: "Auto-skip Saturdays and official holidays." },
                            { title: "Customer Transparency", description: "Show accurate estimated dates at checkout." },
                            { title: "Reduce Churn", description: "Proper expectations reduce cancellations." },
                            { title: "Zone Management", description: "Set different times for different shipping zones." }
                        ],
                        process: {
                            title: "Calculation Logic",
                            steps: [
                                { title: "Calendar Setup", description: "Input business days, hours, and holidays." },
                                { title: "Rules Config", description: "Set Handling Time and Transit Time rules." },
                                { title: "Checkout Integration", description: "Display widget on product page and checkout." },
                                { title: "Dynamic Calc", description: "Calculate exact delivery date for customer in real-time." }
                            ]
                        },
                        technical: {
                            title: "System Capabilities",
                            items: [
                                "Jewish Calendar API",
                                "National & Religious Holidays",
                                "Geo-location Support",
                                "Mobile Optimized",
                                "Multi-warehouse Support"
                            ]
                        },
                        faq: [
                            { q: "Can I set custom holidays?", a: "Yes, you can add business closure dates." },
                            { q: "Support international?", a: "Currently optimized for the local calendar." }
                        ]
                    }
                },
            ]
        },
        // Services Section
        services: {
            title_start: "Complementary Services",
            title_end: "for Smart Management.",
            subtitle: "Additional tools to help you run your business with peace of mind.",
            items: [
                {
                    slug: "digital-examiner",
                    title: "The Smart Digital Examiner",
                    description: "Advanced interactive questionnaire analyzing your digital assets and providing a custom report.",
                    detailed: {
                        hero: {
                            title: "The Smart Digital Examiner",
                            subtitle: "Get a full regulatory snapshot of your business in minutes. No legal knowledge required.",
                            badge: "AI-Powered Analysis"
                        },
                        features: [
                            { title: "Adaptive Engine", description: "Question flow adapts in real-time based on your answers." },
                            { title: "Global Database", description: "Always up-to-date with the latest global regulations (GDPR, CCPA, etc)." },
                            { title: "Risk Calculator", description: "Smart algorithm estimating your legal exposure and fine potential." },
                            { title: "Custom PDF", description: "Generate a comprehensive, actionable report tailored to your business." }
                        ],
                        process: {
                            title: "How It Works",
                            steps: [
                                { title: "Business Identity", description: "We identify your business type (E-commerce, SaaS, etc.) and activity field." },
                                { title: "Asset Mapping", description: "Mapping your digital presence: Websites, Apps, CRM, and Cloud services." },
                                { title: "Audience Analysis", description: "Understanding your users: Geolocation, Age groups, and Sensitive data." },
                                { title: "Accessibility Check", description: "Verifying current accessibility status and compliance levels." },
                                { title: "Tracking Analysis", description: "Deep scan of Cookies, Analytics, and Third-party integrations." }
                            ]
                        },
                        technical: {
                            title: "What You Get in the Report",
                            items: [
                                "Relevant Regulations List (GDPR, CCPA, IS 5568)",
                                "Visual Risk Heatmap (High/Medium/Low)",
                                "Step-by-Step Action Plan",
                                "Cost & Resource Estimation",
                                "Recommended Vendors List"
                            ]
                        },
                        faq: [
                            { q: "How long does scanning take?", a: "The scan takes less than 2 minutes." },
                            { q: "Does this replace legal advice?", a: "It provides a good indication but is not a substitute for individual legal counsel." }
                        ]
                    }
                },
                {
                    slug: "legal-document-bank",
                    title: "Legal Document Bank",
                    description: "Smart document repository including terms, privacy policies, and accessibility statements.",
                    detailed: {
                        hero: {
                            title: "Legal Document Bank",
                            subtitle: "Instant access to all legal documents your business needs, updated to the latest regulations.",
                            badge: "Legal Compliance"
                        },
                        features: [
                            { title: "Always Updated", description: "Documents update automatically with legislation changes." },
                            { title: "Customizable", description: "Tailor documents to your specific business needs." },
                            { title: "Time Saver", description: "Download and use immediately, no drafting from scratch." },
                            { title: "Wide Variety", description: "From site terms to employment agreements and work orders." }
                        ],
                        process: {
                            title: "How It Works",
                            steps: [
                                { title: "Search", description: "Find the required document in the smart repository." },
                                { title: "Wizard", description: "Answer a short questionnaire to customize the document." },
                                { title: "Preview", description: "View the ready document before downloading." },
                                { title: "Download", description: "Get the file in your preferred format ready for signing." }
                            ]
                        },
                        technical: {
                            title: "Formats & Features",
                            items: [
                                "Word & PDF Support",
                                "Full Editing Capabilities",
                                "Custom Logo",
                                "Cloud Versioning",
                                "Digital Signature (Soon)"
                            ]
                        },
                        faq: [
                            { q: "Are these admissible in court?", a: "Yes, drafted by expert lawyers." },
                            { q: "Can I edit the documents?", a: "Absolutely, full editing capabilities are included." }
                        ]
                    }
                },
                {
                    slug: "contract-manager",
                    title: "Contract Management",
                    description: "System for identifying dangerous legal clauses and aiding in legal crisis management.",
                    detailed: {
                        hero: {
                            title: "Contract & Crisis Management",
                            subtitle: "Protect your business from dangerous contracts. AI scans your contracts and flags risky clauses.",
                            badge: "AI Legal Assistant"
                        },
                        features: [
                            { title: "Contract Scan", description: "Quick ID of restrictive or dangerous clauses." },
                            { title: "Archive", description: "Organized and secure storage for all your contracts." },
                            { title: "Templates", description: "Access standard contract templates for vendors." },
                            { title: "Reminders", description: "Auto-alerts for contract renewals and deadlines." }
                        ],
                        process: {
                            title: "How It Works",
                            steps: [
                                { title: "Upload", description: "Upload file (PDF/DOCX) to the secure system." },
                                { title: "AI Analysis", description: "Engine scans text and identifies legal concepts." },
                                { title: "Risk Flagging", description: "Highlights problematic clauses with explanation." },
                                { title: "Summary Report", description: "Get an executive summary with risk level." }
                            ]
                        },
                        technical: {
                            title: "Security & Tech",
                            items: [
                                "Advanced NLP Engine",
                                "OCR for Scanned Contracts",
                                "AES-256 Encryption",
                                "Daily Cloud Backup",
                                "Two-Factor Auth (2FA)"
                            ]
                        },
                        faq: [
                            { q: "Replace a lawyer?", a: "Great tool but not a substitute for full legal advice on complex deals." },
                            { q: "Is my data safe?", a: "Yes, we use bank-level encryption." }
                        ]
                    }
                },
            ]
        },
        calculator: {
            badge: "Tech Magic",
            title: "Is Your Website\nLegally Protected?",
            subtitle: "Don't wait for the next lawsuit. Our smart engine will scan your site, find regulatory loopholes, and tell you exactly what to fix - before it's too late.",
            placeholder: "Www.YourWebsite.com",
            cta: "Scan Me",
            steps: [
                "Initializing regulation scanner...",
                "Looking for cookies under the rug...",
                "Checking if lawyers are asleep...",
                "Scanning color contrast (even for color blind)...",
                "Reading the fine print for you...",
                "Calculating class action probability...",
                "Intercepting suspicious scripts...",
                "Verifying GDPR compliance...",
                "Generating a report the CEO will understand...",
            ],
            result_title: "14 Risks Found!",
            result_text: "Just kidding... this is just a demo 😉 But our full version doesn't joke around.",
            result_cta: "Get Real Report Now",
            idle_title: "System Standing By...",
            idle_subtitle: "Enter URL to wake the beast",
        },
        pricing: {
            title: "Plans & Pricing",
            subtitle: "Choose the path that fits your needs. Full transparency, no fine print.",
            plans: [
                {
                    name: "Basic",
                    description: "For small businesses starting out",
                    price: "179",
                    features: [
                        "Digital Examiner - 1 Site",
                        "10 Basic Documents from Bank",
                        "Cookie Plugin (Basic)",
                        "Monthly Accessibility Report (PDF)",
                        "Email Support (48h)",
                    ],
                    cta: "Start Now",
                    recommended: false
                },
                {
                    name: "Professional",
                    description: "Recommended for growing businesses",
                    price: "549",
                    features: [
                        "Digital Examiner - Up to 5 Sites",
                        "Full Document Bank Access",
                        "Advanced Cookie Plugin + Analytics",
                        "Smart AI Accessibility Plugin",
                        "Promotion Tracking (1k products)",
                        "Chat & Phone Support",
                        "3 Competitor Tracking",
                    ],
                    cta: "Start Free Trial",
                    recommended: true
                },
                {
                    name: "Enterprise",
                    description: "Comprehensive solution for enterprises",
                    price: "1,799",
                    features: [
                        "Digital Examiner - Unlimited Sites",
                        "All Tools, Plugins & API",
                        "Promotion Tracking (10k+ products)",
                        "Personal Customer Success Manager",
                        "SLA Support (4h)",
                        "Team Training & Custom Onboarding",
                        "Advanced Executive Reports",
                    ],
                    cta: "Contact Sales",
                    recommended: false
                }
            ],
            disclaimer: "* Prices exclude VAT. E&OE"
        },
        contact: {
            title: "Ready to Start?",
            title_highlight: "Talk to Us",
            subtitle: "Schedule a free demo call and we'll show you how RegulationKit can save you time and money.",
            form: {
                name: "Full Name",
                email: "Email",
                phone: "Phone",
                message: "Message",
                submit: "Request Demo",
                success_title: "Thank You!",
                success_text: "We received your request and will get back to you shortly."
            },
            info: {
                phone: "Phone",
                email: "Email",
                address: "Address"
            }
        },
        footer: {
            products_title: "Products",
            products: [
                "Digital Examiner",
                "Document Bank",
                "Cookie Plugin",
                "Accessibility Plugin"
            ],
            company_title: "Company",
            company: [
                "About",
                "Blog",
                "Customers",
                "Careers"
            ],
            legal_title: "Legal",
            legal: [
                "Terms of Use",
                "Privacy Policy",
                "Accessibility Statement"
            ],
            rights: "© 2025 RegulationKit. All rights reserved.",
            tagline: "Helping businesses comply with regulations 🇮🇱"
        }
    }
}
