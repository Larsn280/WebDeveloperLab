mkdir my-folder // skapar en folder
mrdir my-folder // tar bort en folder

npx create-react-app name // skapar reactapp
npm start // startar app

git add .
git commit -m "name"
git push

Skapa en solution fil
1. Öppna upp terminalen(Mac) eller kommando-, bash-fönstret(Windows)
2. Navigera till den mapp/katalog som ni vill ha som rot för applikationen
3. Skriv in följande kommando dotnet new sln -n <namn på solution>. T ex
dotnet new sln -n Westcoast-Cars och tryck på Enter
4. Skriv nu in följande kommando för att skapa ett webapi projekt, dotnet
new webapi -n <namn på api projektet>. T ex dotnet new webapi -n Api.
5. Stående i rot katalogen, dvs den katalog som innehåller solution filen, skriv
följande kommando för att koppla webapi projektet till solution filen.
dotnet sln add <projekt mappen/>, t ex dotnet sln add Api/ och tryck på
Enter

npx create-react-app

dotnet ef database update
dotnet ef migrations add <Name> -o "Path"