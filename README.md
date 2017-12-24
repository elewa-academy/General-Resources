fork repo

change repo settings for gh-pages hosting to "docs" folder 

git clone  
  
npm install -g gitbook-cli  
  
read the gitbook docs, they're good:  https://toolchain.gitbook.com/structure.html
* the directectory structure they're talking about in the docs is inside the "src" folder

the scripts folder has bash scripts for the most common tasks you'll need.  you can learn more about them by reading them and looking at "Installation and Setup" in the docs.
* be sure to change execution privileges for each scripts.  there are instructions for that in each script
* to run a script, be in the top level directory and enter "./scripts/script_name.sh" into terminal

you don't have to worry about the "docs" folder, the "publish" script deals with that