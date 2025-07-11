# מדריך העלאת האפליקציה ל-Google Play

## מצב נוכחי של הפרויקט
האפליקציה שלך כעת מוכנה עם:
- ✅ קובץ `app.json` מעודכן עם הגדרות Android
- ✅ קובץ `eas.json` עם הגדרות build
- ✅ EAS CLI מותקן
- ⚠️ נדרש עדכון גרסאות חבילות

## צעדים להעלאה ל-Google Play

### שלב 0: תיקון גרסאות חבילות (חשוב!)
```bash
# עדכן את כל החבילות לגרסאות הנכונות
npx expo install --check

# או לחילופין עדכן ידנית:
npx expo install expo@53.0.19 react-native@0.79.5
npx expo install expo-router@~5.1.3 expo-font@~13.3.2
```

### שלב 1: התחברות ל-Expo Account
```bash
# התחבר לחשבון Expo שלך (צור חשבון ב-expo.dev אם אין לך)
eas login
```

### שלב 2: הגדרת EAS Project
```bash
# הגדר project חדש (בחר Yes לכל השאלות)
eas init
```

### שלב 3: בניית האפליקציה לפרודקשן
```bash
# בנה את האפליקציה עבור Android (זה ייקח כמה דקות)
eas build --platform android --profile production
```

האמר יצור עבורך:
- קובץ AAB (Android App Bundle) מוכן להעלאה
- Keystore אוטומטי לחתימת האפליקציה

### שלב 4: הגדרת Google Play Console

1. **צור חשבון Google Play Console:**
   - גש ל: https://play.google.com/console
   - שלם את דמי הרישום (25$) אם עוד לא שילמת

2. **צור אפליקציה חדשה:**
   - לחץ על "Create app"
   - בחר שם: "SalsaStepsCatalog"
   - בחר קטגוריה: "Education" או "Entertainment"

3. **מלא פרטי האפליקציה:**
   - תיאור קצר ומפורט של אפליקציית הריקודים
   - צילומי מסך (לפחות 2) של האפליקציה בפעולה
   - איקון האפליקציה (512x512 פיקסלים)
   - Privacy Policy (אם נדרש)

### שלב 5: העלאת האפליקציה

1. **העלה את קובץ AAB:**
   - בחר "Release" → "Production" או "Internal testing" (מומלץ להתחיל)
   - העלה את קובץ ה-AAB שנוצר ב-EAS Build
   - מלא Release Notes

2. **הגדר Content Rating:**
   - ענה על השאלון לקביעת דירוג גיל
   - עבור אפליקציית ריקודים: כנראה "Everyone" או "Teen"

3. **שלח לבדיקה:**
   - לחץ "Submit for review"
   - התהליך לוקח 1-3 ימים עבודה

### שלב 6: אוטומציה עתידית (אופציונלי)

יצירת Service Account ל-Google Play לעדכונים אוטומטיים:

1. גש ל-Google Cloud Console
2. צור Service Account
3. הורד את קובץ ה-JSON
4. שמור אותו כ-`pc-api-key.json` בפרויקט
5. הוסף הרשאות ב-Google Play Console

## פקודות שימושיות

```bash
# בדק תקינות הפרויקט
npx expo-doctor

# בנה APK לבדיקה מקומית
eas build --platform android --profile preview

# עדכן גרסה והעלה אוטומטית
eas submit --platform android

# בדק סטטוס Build
eas build:list

# צפה בלוגים של Build
eas build:view [BUILD_ID]
```

## פתרון בעיות נפוצות

### שגיאות Build:
- וודא שכל התלויות מותקנות: `npm install`
- עדכן גרסאות: `npx expo install --check`
- בדק שאין שגיאות TypeScript: `npx tsc --noEmit`

### שגיאות Google Play:
- וודא שה-package name ייחודי: `com.salsastepscatalog.app`
- וודא שה-versionCode עולה בכל upload
- וודא שיש לפחות 2 צילומי מסך

### עדכון גרסה:
```json
// ב-app.json
"version": "1.0.1",  // גרסה לתצוגה
"android": {
  "versionCode": 2   // מספר גרסה פנימי (חייב לעלות)
}
```

## דרישות תוכן לGoogle Play:

### צילומי מסך נדרשים:
- לפחות 2 צילומי מסך
- רזולוציה: 320px-3840px (יחס גובה-רוחב 16:9 או 9:16)
- פורמט: PNG או JPEG

### איקון אפליקציה:
- 512x512 פיקסלים
- פורמט: PNG
- 32-bit עם שקיפות

### תיאור האפליקציה (הצעה):
```
"SalsaStepsCatalog - ספריית צעדי סלסה מקיפה

אפליקציה מיועדת לרקדני סלסה בכל הרמות. האפליקציה מכילה מגוון רחב של צעדי סלסה מבוארים, מצעדים בסיסיים ועד טכניקות מתקדמות.

תכונות עיקריות:
• קטלוג מקיף של צעדי סלסה
• הוראות מפורטות לכל צעד
• ממשק ידידותי וקל לשימוש
• מתאים לרקדנים בכל הרמות

למד, תרגל ושפר את כישורי הריקוד שלך עם SalsaStepsCatalog!"
```

## סטטוס הבא
1. 🔄 עדכן חבילות: `npx expo install --check`
2. 🔄 התחבר ל-Expo: `eas login`
3. 🔄 הגדר project: `eas init`
4. 🔄 בנה אפליקציה: `eas build --platform android --profile production`
5. 🔄 צור חשבון Google Play Console
6. 🔄 העלה והגש לאישור

---

**הערות חשובות:**
- שמור את קובץ ה-keystore שיוצר בתהליך! הוא נדרש לעדכונים עתידיים
- התחל עם Internal Testing לפני פרסום ציבורי
- הכן צילומי מסך איכותיים של האפליקציה
- וודא שהתיאור באנגלית ובעברית (אם רלוונטי)