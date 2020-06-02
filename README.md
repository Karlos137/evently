<p align="center">
  <img width="260" height="166" src="https://github.com/Karlos137/evently/blob/master/src/images/logo-vertical.svg">
</p>

<h3 align="center">Webová aplikace pro správu událostí</h3>

<p align="center"><em>Vytvořeno jako součást diplomové práce.</em></p>
<br>
<p><em>Node.js verze použitá při vývoji: v12.16.1</em></p>
<br>
<p>Pro nainstalování všech použitých balíčků je zapotřebí v kořenovém adresáři (klientská část) a v adresáři <em>/server/</em> (serverová část) spustit příkaz <code>npm install</code>.</p>

<p>Po lokální konfiguraci připojení k databázi (v případě Firestore definice proměnných prostředí a vytvoření konfiguračního souboru <em>serviceAccountKey.json</em>) je možné v adresáři <em>/server/</em> spustit projekt pomocí příkazu <code>npm run dev</code>.</p>
<br>
<p>Hlavní větev (<em>master</em>) obsahuje implementaci s pomocí databáze Firestore.</p>
<p>Větev <em>sql</em> obsahuje několik ukázkových routes a způsob konfigurace připojení k lokální MySQL databázi.</p>
<p>Větev <em>graph</em> obsahuje několik ukázkových routes a způsob konfigurace připojení k lokální Neo4j databázi.</p>
<br>
<p><em>Author: Karel Kvítek</em></p>
<p><em>License: MIT</em></p>
