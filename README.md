# Statystyka - Notatki Interaktywne

Aplikacja internetowa stworzona jako nowoczesne, eleganckie i angażujące miejsce do nauki statystyki z myślą o egzaminach na studiach z metod matematycznych i statystycznych (na podstawie materiałów prof. UPP dr hab. Bogny Zawieja).

Czysty projekt HTML/CSS/JS (SPA/Multi-page), wysoce interaktywny, dostosowany pod pełne responsywne wykorzystanie na urządzeniach mobilnych z animacjami.

Strona jest przygotowana do bezpośredniego wrzucenia na GitHub Pages.

## Przegląd Tematów (Lekcji)

1. **Temat 1: Zmienne Losowe i Prawdopodobieństwo** (`lesson1.html`)
   - Eksperyment, Zdarzenia elementarne
   - Zmienne losowe (skokowe, ciągłe)
   - Prawdopodobieństwo i Dystrybuanta
   - Charakterystyki Rozkładu (Wartość Oczekiwana, Wariancja)
   - Rodzaje zmiennych
2. **Temat 2: Estymacja Przedziałowa** (`lesson2.html`)
   - Przedziały ufności dla średniej (Rozkład T-Studenta i Z-Normalny)
   - Przedziały ufności dla wariancji (Test Chi-Kwadrat)
   - Przedziały dla wskaźnika struktury
3. **Temat 3: Testy Normalności** (`lesson3.html`)
   - Skośność i Kurtoza
   - Test KS i Test Lillieforsa
   - Test Chi-Kwadrat Zgodności Pearsona
   - Shapiro-Wilk i Wykres QQ
4. **Temat 4: Testowanie Hipotez** (`lesson4.html`)
   - Konstrukcja H0 i H1
   - Błąd I i II rodzaju w statystyce (Poziom $\alpha$ i Moc $1-\beta$)
   - Procedura wnioskowa, statystyki testowe

## Funkcjonalności
* **Dynamiczne rendery LaTeX** za pomocą *MathJax*, dostarczające bezbłędny zapis matematyczny do uczenia się i pracy ze wzorami z PDF.
* **Proste Przykłady:** Elementy interaktywne na stronie głównej po kliknięciu ujawniają przystępny i obrazowy ("na chłopski rozum") przykład ze świata informatyki/IT. Zmniejsza to barierę wejścia i niezrozumienie trudnej naukowej teorii.
* Czysty, płynny skrypt JS z animacjami na osi scroll-bar. Zastosowane wariacje na obiekcie IntersectionObserver do podnoszenia satysfakcji ze scrollowania UI.

## Setup & Demo 
Otwórz w Przeglądarce plik `index.html` lokalnie, po prostu klikając dwa razy.
```bash
# Szybki Live Server do developerskiego trybu podglądu (np. z NodeJS Live-Server)
npx live-server .
```

---
Wykonanie kodu: **Miłosz Prusinowski** 2026.
Oryginalna teoria PDF: prof. Bogna Zawieja, Katedra Metod Matematycznych i Statystycznych, UPP.  
Wszelkie materiały zamieszczone służą wyłącznie jako edukacyjna strona wspierana wizualnie.
