deploy mit vercel
- anmelden https://vercel.com/dashboard
- über cli:
    - npm i -g vercel
    - vercel eingeben
    - ? Set up and deploy “~/D08-A/04_SPA/07_store/spa-theme-switch-wilhelmine-erber/todo-app”? [Y/n] y
    - ? Which scope do you want to deploy to? wilhelmine-erber
    - ? Link to existing project? [y/N] n
    - ? What’s your project’s name? todo-app
    - ? In which directory is your code located? ./
    - Local settings detected in vercel.json:

    - update & neu deployen: vercel --prod


    ________________________
    Vercel deployment
vercel Account erstellen (sign in => github)
install Vercel CLI
npm i -g vercel
 run the vercel command from your project's root directory
choose: Login with github
"Set up and deploy “..../toDo-App”? [Y/n]" => Press "Y"
"Which scope do you want to deploy to?" => Your github username
"Link to existing project?" => N
What’s your project’s name? => z.B ToDo-App
"In which directory is your code located?" => "./"
"Want to modify these settings?" => "N"
(edited)
New


Project updaten und neu deployen: vercel --prod