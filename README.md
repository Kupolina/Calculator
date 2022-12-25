Task: https://drive.google.com/file/d/1o6UzaoWDE1l0PPG2lM4fc-95w1DuCv4Q/view?usp=share_link

How to run the app: 
1. Clone the app using git clone https://github.com/Kupolina/Calculator.git
2. Be sure you have the node package manager. White "npm -v" in the command line.
    If you don't have the npm:
    1) Download LTS version of node.js from https://nodejs.org/en/
    2) Check "node -v" and "npm -v" one more time
3. Write npm install
4. Use "npm run start" to start the webpack server or "npm run build-prod" to have a production build

Folder structure: 
1.-Calculator (contains .json, .js, .ignore and .md files)
1.1--.husky (doesnt't exists at first time, contains .sh and .gitignore files)
1.2--dist (doesnt't exists at first time, contains one .html one and .js files)
1.3--node_modules (doesnt't exists at first time, contains packages)
1.4--src (contains .js, .html files)
1.4.1---css (contains .css files)
1.4.2---scripts (contains .js files)
