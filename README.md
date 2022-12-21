Task: https://drive.google.com/file/d/1o6UzaoWDE1l0PPG2lM4fc-95w1DuCv4Q/view?usp=share_link

How to run the app: 
1. Clone the app using git clone https://github.com/Kupolina/Calculator.git
2. Be sure you have the node package manager. White "npm -v" in the command line.
    If you don't have the npm:
    1) Download LTS version of node.js from https://nodejs.org/en/
    2) Check "node -v" and "npm -v" one more time
3. Write npm install
4. Use "npm run start" to start the webpack server or "npm build-prod" to have a production build

Folder structure: --Calculator (contains .json, .js, .ignore and .md files)
                    --.husky (doesnt't exists at first time, contains .sh and .gitignore files)
                    --dist (doesnt't exists at first time, contains one .html one and .js files)
                    --node_modules (doesnt't exists at first time, contains packages)
                    --src (contains .js, .html files)
                      --css (contains .css files)
