# SHELL SCRIPTS*
*Special Notice:
This lesson doesn't apply directly to Windows machines.  Check out [cygwin](http://cygwin.com), an application that will allow you to simulate shell scripts in Windows.
---
### Shell Scripts ?
This is one of those topics that sounds like a wizard's trick only master Linux users can understand.  So untrue.
* Can you enter multiple commands into the terminal, one at a time?  
    Yup.  You do it every day.  
* Are there certain series of commands you enter _all the time_? 
Certainly, every time you push your code.  

Enter shell scripts.
___
### How to Shell Script

Making shell scripts is silly easy:
1. Open a new file, give it a nice name with '.sh' extension.
2. Write a series of bash commands you would like to automate.
    * New lines separate distinct commands
    * '#' are for comments
    * Scripts execute synchronously from top to bottom
3. Modify the execution permissions for this file. ("chmod +x file_name")
4. Save, and good to go.

To execute a shell script simply navigate to it's directory from terminal, type the file name including extension, and hit enter.  Voila.

___
### Resources  
* [build little programs](https://developer.atlassian.com/blog/2015/11/scripting-with-node/)  
* [Tutorialesque](https://lifehacker.com/5743814/become-a-command-line-ninja-with-these-time-saving-shortcuts) guide to being effective in terminal.
* [Interactive website](http://explainshell.com) that explains the meaning of any shell command, including git commands.
* [Organized list](https://www.tjhsst.edu/~dhyatt/superap/unixcmd.html) of the most useful bash commands.
___
### Two Examples
A most basic example:
```shell
## shell script for pushing to remote repo
git add .
git commit -m 'routine push'
git pull origin master
git push origin master
```
Saving this to a file called 'push.sh' will allow you to push with a single terminal command:  "./push.sh"


A more advanced example:
```shell
##########################################################
###  shell script for publishing gitbooks to gh-pages  ###
##########################################################

# add, commit recent changes
git add .
git commit -m 'building'

# go to master if you weren't already
git checkout master

# build new gitbook
gitbook build

# copy it out of the way for branch change
cp -rf ./_book/. ../book-holder 

# commit recent build
git add .
git commit -m 'publishing'

# push newest source
git push origin master

# switch to gh-pages branch
git checkout gh-pages

# copy the new book back to main folder
cp -rf ../book-holder/. ./

# commit changes
git add .
git commit -m 'publishing'

# publish changes
git push origin gh-pages

# return to master
git checkout master


################################################
#  Recommended file structure for using this script
# 
#	| ## documents, desktop, whatevs ##
# 	|
# 	|- gitbooking ## -> contains only these two folders
# 		|- gitbook ## -> SUMMARY, markdowns, config, this script, ...
#		|- book-holder ## -> to stash built gitbook while changing branches
```
We use this script to build and publish the gitbook curriculum every time we make changes. Without this script, it's a real pain.  You need to copy-paste stuff all over the place, make a few commits, and procrastinate the next publish until you can't anymore. With this script it's all done with a single terminal command.

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>