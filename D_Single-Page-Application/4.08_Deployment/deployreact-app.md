# Deployment von einer React App: 

## Wann und Was:

Verwende [`create-react-app`](https://create-react-app.dev/) oder [`create vite@latest`](https://vitejs.dev/guide/)

Wir werden mit [`gh-pages`](https://github.com/tschaub/gh-pages) arbeiten. 

Und das Projekt auf [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages) hosten. 



## 1.  Ein neues Projekt machen auf GitHub 
1. Wir brauchen ein leeres Repo auf GitHub. Erstelle das neue Repo unter deinem eigenen Account. Das Repo muss öffentlich/'public' sein, wenn du kein Pro-Account hast. 
2. Initializier das Projekt ohne Inhalt (kein `README.md`, `.gitignore`, `LICENSE`  oder andere Datei auswählen)


## 2. Erstelle ein Projekt mit React app

1. Verwende    
 ```shell
    $ npx create-react-app my-app
 ```
   

2. Navigiere zu dem Ordner mit dem neuen Projekt:
  
    ```shell
    $ cd my-app
    ```
    
3. Und mache das Projekt mit VS Code auf; 


    ```shell
    $ code .
    ```

4. Installiere [`gh-pages`](https://github.com/tschaub/gh-pages) mit npm
    ```shell
    $ npm install gh-pages --save-dev
    ```


5. Füge ein Feld für`homepage` ein in der `package.json` Datei.

    1. Öffne die `package.json` Datei.
   

    2. Füge `"homepage"` hinzu in diesem Format `https://{deinUsername}.github.io/{repo-name}`

    ```diff
    {
      "name": "my-app",
      "version": "0.1.0",
    + "homepage": "https://gitname.github.io/react-gh-pages",
      "private": true,
    ```
6. Füge deployment Scripts  hinzu zu der `package.json` Datei.


    1. In der `package.json` Datei:

    2. Füge ein Feld für `predeploy` und ein für `deploy` ein im `scripts` Objekt:

    ```diff
    "scripts": {
    +   "predeploy": "npm run build",
    +   "deploy": "gh-pages -d build",
        "start": "react-scripts start",
        "build": "react-scripts build",
    ```

7. Füge ein "remote" hinzu, das zu dein  GitHub repository zeigt. 

    
    ```shell
    $ git remote add origin https://github.com/{username}/{repo-name}.git
    ```
    
  Ersetzte {username} mit deinem Namen und {repo-name} mit dem Namen von deinem Repo. 


8. Deploye die React app zu GitHub Pages


    ```shell
    $ npm run deploy
    ```

    Es wird einen neuen Branch mit dem Namen  `gh-pages` erstellt, und der Code von dem 'build'-Ordner da hochgeladen. 


**Das war's** Die App ist über GitHub Pages deployed auf die Adresse, die du im Schritt 5 hinzugefügt hast! :rocket:



9. (Optional) Lade auch dein Quell-Code hoch bei GitHub


    ```shell
    $ git add .
    $ git commit -m "Deine Nachricht"
    $ git push origin main
    ```

  
# Deine schon fertige React app deployen: 

Wenn du schone ein Projekt hast, das du online stellen möchtest mache folgendes: 
1. Mache es mit VS Code auf. Mach auch ein Terminal auf. 
2. Arbeite durch Schritt 4, 5, und 6  oben.
3. Wenn du schon eine Projekt hast, und es schon auf Git Hub ist, kannst du Schritt 7 überspringen. Wenn du den Remote von Projekt ändern möchstest, musst du auf GitHub ein neues Repo erstellen (Schritt 1) und dann den Remote von deinem lokalen Projekt ändern mit `git remote set-url origin <neue url>`. 
4. Mache mit Schritt 8 weiter. 


# References
[Detalierte Anleitung (Englisch)](https://github.com/gitname/react-gh-pages/blob/master/README.md)


1. [The official `create-react-app` deployment guide](https://create-react-app.dev/docs/deployment/#github-pages)
2. [GitHub blog: Build and deploy GitHub Pages from any branch](https://github.blog/changelog/2020-09-03-build-and-deploy-github-pages-from-any-branch/)

