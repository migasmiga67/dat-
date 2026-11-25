/* =========================================================
   TUTAJ EDYTUJESZ WSZYSTKIE NIESPODZIANKI 🎁
   ---------------------------------------------------------
   Typy niespodzianek:
     "zdjecie"   – zdjęcie (jpg / png / webp)
     "glosowka"  – wiadomość głosowa (mp3 / m4a / ogg)
     "filmik"    – filmik (mp4 / webm)
     "list"      – sam tekst (liścik)

   Pliki wrzucasz do folderu  kalendarz/media/
   i wpisujesz ścieżkę w polu  plik: "media/nazwa.jpg"

   "tekst" – opcjonalny podpis / wiadomość pod niespodzianką.
   ========================================================= */

const USTAWIENIA = {
  imie: "Kochanie",                 // jak się do niej zwracasz
  rok: 2026,                        // rok kalendarza (grudzień tego roku)
  podpis: "Twój ❤️",                 // podpis pod liścikami
};

const NIESPODZIANKI = [
  { dzien: 1,  typ: "list",     tytul: "Na dobry początek",       tekst: "Od dziś przez 24 dni każdego ranka czeka tu na Ciebie coś małego ode mnie. Bo zasługujesz na niespodziankę każdego dnia ✨" },
  { dzien: 2,  typ: "zdjecie",  plik: "media/02.jpg", tytul: "Pamiętasz ten dzień?", tekst: "Jedno z moich ulubionych zdjęć z nami." },
  { dzien: 3,  typ: "glosowka", plik: "media/03.mp3", tytul: "Posłuchaj mnie",       tekst: "Nagrałem coś tylko dla Ciebie 🎧" },
  { dzien: 4,  typ: "filmik",   plik: "media/04.mp4", tytul: "Mały filmik",          tekst: "Włącz dźwięk 🔊" },
  { dzien: 5,  typ: "list",     tytul: "Za co Cię kocham #1",     tekst: "Za to, jak się śmiejesz, kiedy próbujesz powstrzymać śmiech. Nie da się wtedy na Ciebie patrzeć bez uśmiechu." },
  { dzien: 6,  typ: "zdjecie",  plik: "media/06.jpg", tytul: "Mikołajki 🎅",         tekst: "Grzeczna byłaś, więc masz prezent!" },
  { dzien: 7,  typ: "glosowka", plik: "media/07.mp3", tytul: "Dzień dobry, słońce",  tekst: "Na dobry początek dnia." },
  { dzien: 8,  typ: "zdjecie",  plik: "media/08.jpg", tytul: "My ❤️",                 tekst: "" },
  { dzien: 9,  typ: "list",     tytul: "Kupon",                   tekst: "🎟️ Ten kupon uprawnia do: jednego wieczoru filmowego z kocem, herbatą i wyborem filmu bez dyskusji. Ważny do odwołania (czyli zawsze)." },
  { dzien: 10, typ: "filmik",   plik: "media/10.mp4", tytul: "Wspomnienie",          tekst: "" },
  { dzien: 11, typ: "zdjecie",  plik: "media/11.jpg", tytul: "Nasze miejsce",        tekst: "Wrócimy tam?" },
  { dzien: 12, typ: "glosowka", plik: "media/12.mp3", tytul: "Piosenka",             tekst: "Ta piosenka zawsze kojarzy mi się z Tobą 🎶" },
  { dzien: 13, typ: "list",     tytul: "Za co Cię kocham #2",     tekst: "Za to, że przy Tobie mogę być sobą. Całkowicie." },
  { dzien: 14, typ: "zdjecie",  plik: "media/14.jpg", tytul: "Ty ✨",                 tekst: "Najpiękniejsza." },
  { dzien: 15, typ: "filmik",   plik: "media/15.mp4", tytul: "Zobacz to",            tekst: "" },
  { dzien: 16, typ: "glosowka", plik: "media/16.mp3", tytul: "Na dobranoc",          tekst: "Posłuchaj przed snem 🌙" },
  { dzien: 17, typ: "list",     tytul: "Kupon #2",                tekst: "🎟️ Ten kupon uprawnia do: masażu pleców bez marudzenia. 20 minut. Minimum." },
  { dzien: 18, typ: "zdjecie",  plik: "media/18.jpg", tytul: "Pierwsze zdjęcie",     tekst: "Nasze pierwsze wspólne zdjęcie 🥹" },
  { dzien: 19, typ: "glosowka", plik: "media/19.mp3", tytul: "Sekret",               tekst: "" },
  { dzien: 20, typ: "filmik",   plik: "media/20.mp4", tytul: "Kompilacja",           tekst: "Nasze najlepsze momenty." },
  { dzien: 21, typ: "list",     tytul: "Za co Cię kocham #3",     tekst: "Za wszystko. Serio. Ta lista nie miałaby końca." },
  { dzien: 22, typ: "zdjecie",  plik: "media/22.jpg", tytul: "Zimowo ❄️",             tekst: "" },
  { dzien: 23, typ: "glosowka", plik: "media/23.mp3", tytul: "Już jutro…",            tekst: "Jeszcze tylko jeden dzień!" },
  { dzien: 24, typ: "filmik",   plik: "media/24.mp4", tytul: "Wesołych Świąt ❤️",     tekst: "Kocham Cię najbardziej na świecie. Wesołych Świąt!" },
];
