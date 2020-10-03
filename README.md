# Tick-it-easy
```
Egy weboldal, ahol különböző járatokra és különböző jármű típusokra tudunk jegyeket vásárolni.
```
# Fejlesztők
* **Back-end:** *Erdősi Péter*
* **Front-end:** *Hires Krisztián*
# Feladat funkcionális követelményeit
* **Alkalmazás:** kezdőoldalon megjelennek a legfrissebb jegyek, egy oldalon összesítve vannak a jegyek szűréssel párosítva, egy kosár oldal amit lehet módosítani, felhasználói profil módosítási lehetőségekkel
* **Felhasználó:** be tud jelentkezni, profilján tud módisítani, jegyeket tud a kosarába pakolini / kivenni / vásárolni / egyenleget feltölteni, tud böngészni az oldalon bejelentkezés nélkül
* **Admin user:** tud a jegyeken módosítani, újat hozzáadni, listázni, törölni
# Feladat nem funkcionális követelményei
**Technológiák:** 
* adatbázis: MySQL
    - legalább 4 táblát
    - legyen benne 1-sok kapcsolat
    - legyen benne sok-sok kapcsolat
* szerveroldalon: Java Spring Boot
    - MVC modell
    - REST API
    - authorizált végpontokkal
* kliensoldalon: Angular 10
    - technológiát illetően az órán megismert Angular keretrendszert kell használni (6+ verzió).
    - legalább három tábla adatait szerkeszteni kell tudni a felületen: lista, új, módosít, töröl (vagy inaktívvá tesz)
    - legyenek benne csak hitelesítés után elérhető funkciók (autentikáció)
    - ügyelni kell, hogy csak a megfelelő adatokhoz férjen hozzá a megfelelő felhasználó (autorizáció)
    - a szerverrel AJAX kérésekkel történjen a kommunikáció
# Szakterületi fogalomjegyzék:
* REST API
* TypeScript
* MySQL
* Authentication
* Authorisation
* MVC
* AJAX
* JAVA Spring Boot
* Session Handling
* CI / CD
* Testing
# Szerepkörök:
* **Vendég:** tud az oldalon böngészni, de bármilyen interakcióhoz autentikáció szükséges
* **Bejelentkezett felhasználó:**
    - *User:* képes jegyeket kosarába pakolini / kivenni / vásárolni / egyenleget feltölteni
    - *Admin:* képes jegyeken módosítani, újat hozzáadni, listázni, törölni