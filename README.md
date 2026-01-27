

Aplikacja sklepu internetowego zbudowana w oparciu o React.js. Projekt symuluje pełny proces zakupowy: od przeglądania produktów, przez filtrowanie i wybór wariantów, aż po zarządzanie koszykiem.


Główne Funkcjonalności:

Przeglądanie Produktów: Pobieranie danych z zewnętrznego API (FakeStoreAPI).
System Kategorii: Dynamiczne filtrowanie produktów (Damskie, Męskie, Elektronika, Biżuteria).
Zaawansowany Koszyk:
    * Obsługa wariantów produktów (rozmiary XS-XL).
    * Grupowanie tych samych produktów.
    * Dynamiczne przeliczanie sumy zamówienia.
Wyszukiwarka: Filtrowanie produktów w czasie rzeczywistym.
Lista Życzeń (Ulubione): Możliwość zapisywania produktów na później.

Tech Stack (Technologie)

Core: React 18, Vite
Routing: React Router DOM v6
State Management: Context API (Globalny stan koszyka i ulubionych)
Styling: CSS3 (Custom Properties, Flexbox, CSS Grid)
Icons: Lucide React
Deployment: Vercel

Instalacja i Uruchomienie

Aby uruchomić projekt lokalnie:

1.  **Sklonuj repozytorium:**
    ```bash
    git clone [https://github.com/wiktoriasikerko05/modern-shop.git](https://github.com/wiktoriasikerko05/modern-shop.git)
    ```

2.  **Zainstaluj zależności:**
    ```bash
    npm install
    ```

3.  **Uruchom serwer deweloperski:**
    ```bash
    npm run dev
    ```
