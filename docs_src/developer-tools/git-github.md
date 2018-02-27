# Git and Hub 101
-----------------


### Why GIT and GitHub ?
* GIT: To organize your development process and protect your codebase against human error.
* GitHub: Because finished code isn't a finished project.  

In the colaborative world of web development, a project (or your piece of one) isn't finished until someone else can understand it - be it a co-worker, collaborator, yourself in a month, or some rando. GIT and Github allows you to protect your code against silly mistakes, organize, and document your code so others know how to use it and what to use it for.

-------
### What's GIT ?
* Git is a command-line application that allows you to travel through time.  Every commit saves a complete image of your directory structure at the time of commiting (actually your staged directory structure, but whatever for now). 
* Git allows you to create alternative universes.  With branches you can save two copies of the same directory that differ by a single file/method/bug/...  This is very practical for testing experimental features, fixing bugs, or sharing work across a group.
* Git allows you to commune with parallel dimensions.  'Pull' and 'push' allows your local git commit tree to synchronize with a git tree located anywhere on the internet.  This is how you will use GitHub and how multiple people are able to collaborate on the same codebase.

Git has more tricks up it's sleeves, but these 3 will carry farther than you can see without awakening your third eye.

### What's GitHub ?
tl;dr - it can be anything you need it to be.  

We'll be discussing the following uses in this course:
* Remote hosting for Git repositories.  With pushing and pulling, you can use GitHub to back up your work.  If you stop there, you're a fool. GitHub can do so much more for you.
* [Personal portfolio](https://elium-student.github.io). GitHub has built-in tools for hosting static pages. With a little ingenuity this can be used to build a pretty sick portfolio that's fully integrated with your GitHub account.

These are for you to explore on your own:
* Social network and linkedin for developers.
* Project hosting and project management.
* An infinite library of useful code to study or use. 
* Interactive documentation.
* Integrator with many apps - we've used sketchboard.io's integration.
* 

We've created this curriculum entirely on GitHub relying mostly on these features: github pages, organizations, issues, repo hosting, and projects.
___

### How does this all fit together ?

![](https://github.com/elewa-academy/diagrams/blob/master/git-hub/where-it-fits.png)

Git is like a really **epic save button** for your files and directories - officially Git is called a version control system.

To compare, a *save* in a text editor would record all of the words of a document as a single file. You are only ever given one record of the file like `essay.doc` unless you make duplicate copies (which would be difficult to remember to do and keep track of):

`essay-draft1.doc`, `essay-draft2.doc`, `essay-final.doc`

A *save* in Git however, would record differences of files and folders AND keep a **historical record of each save**. This feature is a game changer. As an individual developer, Git enables you to review how your project grows and to easily look at or restore file states from the past. Once connected to a network, Git allows you to push your project to GitHub for sharing and collaborating with other developers.

While Git works on your *local* machine, GitHub is a *remote* storage facility on the web for all your coding projects. This means that by learning Git, you will get to showcase your portfolio on GitHub! This is really important because almost all software development companies consider the ability to use Git as an **essential skill for a modern web developer** to have; having a portfolio will provide proof to future potential employers as to what you are capable of.

In the next lesson we will go over the basic workflow of using Git which should enhance your understanding and demonstrate why Git is so useful.

And finally, you will set up a project with Git and this will serve as a template for setting up your future projects.

## Learning Outcome:
*By the end of this lesson you should be able to:*

* Define what kind of program Git is
* Describe the differences between Git and a text editor in terms of what they save and their record keeping
* Describe whether Git and GitHub work at a local or remote level
* Describe why Git is useful for an individual developer and a team of developers    
___   
## SSH keys
[a how and why to article](https://jdblischak.github.io/2014-09-18-chicago/novice/git/05-sshkeys.html)
___

Study resources:
* [Git and Github in plain English](https://blog.red-badger.com/blog/2016/11/29/gitgithub-in-plain-english).  Out standing overview.
* Complete [git workflow and overview](https://www.vikingcodeschool.com/web-development-basics/getting-to-know-git).
* The [git workflow cheatsheet](https://github.com/adrianholovaty/git_workflow) to git.  All the commands you need for our workflow.

* Derek Banas' [introduction videos](https://www.youtube.com/watch?v=r63f51ce84A), if you're into videos.  
* A little [history](https://www.youtube.com/watch?v=1h9_cB9mPT8&feature=youtu.be&t=13s)
* Comprehensive [git CheatSheet] from Tiimgreen(https://github.com/tiimgreen/github-cheat-sheet).
* Learn [git tagging](http://alblue.bandlem.com/2011/04/git-tip-of-week-tags.html).  
* Another great resource for understanding tags in git (https://www.youtube.com/watch?v=Yvy5PijsVZw)
* [Some common tasks](http://jlord.us/git-it/)


Practice resources: 
* The best place to [practice git branching](http://learngitbranching.js.org/).
* A [CLI game](https://www.git-game.com).  Play is learning.
* For the very technical, this site helps you learn Git by [building Git](http://kushagragour.in/blog/2014/01/build-git-learn-git/) - super cool
* [Git Calisthenics](http://www.vikingcodeschool.com/web-development-basics/git-calisthenics).

THE resource: 
* I you REALLY want to know [how git works](https://www.youtube.com/watch?v=1ffBJ4sVUb4&list=TLj1nt5nzukA8). 
  
Practice projects:
1. [basics](https://github.com/jankeLearning/content-md/git/project-1-basics.md)  // dead link 
2. [branching](https://github.com/jankeLearning/content-md/git/project-2-branching.md)  
3. [undoing commits](https://github.com/jankeLearning/content-md/git/project-3-decommitting.md)  



We will be doing almost everything on GitHub.  GitHub comes with many great tools for collaboration.  These are the elementals.

projects
------
repos

# GitHub Repos 1
Finished code isn't a finished project.  Navigable and helpful GitHub repositories are finished projects. Fortunately git provides all the tools necessary to organize your code in a developer-friendly way and GitHub provides a great interface for exploring well-organized projects.

Building a good repo is a little tricky and will take some practice.  It requires careful planning and extra attention through your development process.  At the end you will have something that looks like this: [A complete repository](https://github.com/elium-student/my-first-repo).
___
### What makes a good repo?

You will begin implementing these features in week 1 project:
* [An informative README](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* [Version tags](http://semver.org) - versions are fully functional releases, they can be downloaded and run without crashing.
* Branches - gh-pages branch, master release branch. 
* gh-pages demo
*tests - for now, simple hand-build testing suites

Later in the course we will discuss how to use these features in a repo:
* documentation - wiki, gh-pages, markdown.  There are many ways to do this
* Full testing suites
* Contributing guidelines - ideas for contributors, code of conduct, ...
* Github projects - for organizing collaborative directly in the repo
* Pull requests and issues

This lesson is the first in a series of lessons that will cover how to use GitHub to organize your entire development process.  This series will include lessons on Agile and Scrum methodologies by Juan David and will culminate in the final colaborative projects in the last 4 weeks of this program.

 
 ---
 ### skillz
 
These skills will be necesary for completing week 1's GitHub project:  
  * committing, branching, and tagging locally.
  * pushing and pulling from remote branches  
  * pushing tags to remote repos  
  * hosting a gh-pages static site  

-------
gh-pages
___
### Gists
These are designed for sharing code snippets.  You can send them as a link, edit them, fork them, and they stay connected to your GitHub account so you can always find them back. They're ideal for asking questions over slack, copy-pasting error messages and notes on solving them, sharing solutions, or sharing neat tricks.  Simple to use but crucial. 

* Create a new gist [HERE](https://gist.github.com)
* Search ALL gists [HERE](https://gist.github.com/discover)
* [About Gists](https://help.github.com/articles/about-gists/)
* [How-to](https://help.github.com/articles/creating-gists/)

___
### Issues
These are part of the GitHub workflow. Issues are connected to a specific repository.  You can use them as a todo list, to assign tasks to team members, or as notes for yourself.  Using these effectively can be tricky, it requires organization and planning.  

* [About Issues](https://help.github.com/articles/about-issues/)
* [How-to Issues](https://guides.github.com/features/issues/)
* [Dominate Issues](https://developer.github.com/v3/issues/)
___
### Pull Requests
These are used for contributing to other people's GitHub repositories.  You will be using pull requests to improve your content over the next 3 months.  If you're reading a lesson and would like suggest better wording, new resources, extra exercises, ...  send us a pull request!  You'll be getting practice collaborating and improving your classmate's study materials at the same time.

* [About Pull Requests](https://help.github.com/articles/about-pull-requests/)
* [Fork - Work - Pull Request  tutorial](https://gist.github.com/Chaser324/ce0505fbed06b947d962)
* [Complete pull/merge cycle tutorial](https://yangsu.github.io/pull-request-tutorial/)


full project repos

	pages
		live demo or landing page - something more marketing-oriented
	wiki
		documentation, auto-generated - where a developer would go to learn how to use it
	readmes
		practical navigation of codebase - one per folder
	issues
		tasks - used to assign work to team-members. cards on projects
	project
		managing progress of issues
	pull requests
		merging eachother's things. cards on projects
	branches
		for developing features or fixing bugs 
	versions
		stable releases, don't all need to be on master


-----
### Branching strategy

Using branch commands is simple.  Using them effectively takes some planning and discipline.  
* [simple local strategy](https://www.visualstudio.com/en-us/articles/git-branching-guidance)  - contradicts what i said about tags, wha-eva  
* [simple workflow walkthrough](https://www.atlassian.com/blog/git/simple-git-workflow-simple)  
* [Stackoverflow Discusion](https://stackoverflow.com/questions/2428722/git-branch-strategy-for-small-dev-team)  
* [From the GIT docs](https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows)
* [comparison of strategies](http://www.creativebloq.com/web-design/choose-right-git-branching-strategy-121518344)    
* [develop, release, master](http://drewfradette.ca/a-simpler-successful-git-branching-model/)  
* [three-flow](http://www.nomachetejuggling.com/2017/04/09/a-different-branching-strategy/)  - says its better than the advanced one
* [so many words](http://scottchacon.com/2011/08/31/github-flow.html)
* [advanced group remote/local branching strategy](http://nvie.com/posts/a-successful-git-branching-model/)  
* [a repo](https://github.com/steotia/branching-strategies)

### Atomic Commits
When you start working on big projects, you will be modifying multiple files which will all need saving. However, it's best practice to save files purposefully; we call this an **atomic commit**.

If we were to add all the files onto one stage and not think about making atomic commits, this would make your snapshot really crowded and congested - this is bad for two reasons:

First, you will not know why the snapshot was meaningful and if you wanted to find a specific snapshot you would find it difficult to trace what you were trying to accomplish with those files.

Second, imagine if your project got corrupted or your code has a bug you can't figure out and does not work anymore. If you were to put all your files onto one stage and then tried to load a previous snapshot known to be stable, you would lose a lot of progress with your work and then piecing all the files back to their desired state would be painstaking.

To get around this, only `git add` files that are thematically similar. For example if your project had a lot of text files and image files, you could stage all text files together for one snapshot and then all image files together for another snapshot.

All snapshots taken must have a message attached to it. When you have staged files purposefully (or with a theme), it's easy to decide what kind of message to include.

To take a snapshot, you would run `git commit -m "Initial commit"`. The `-m` flag stands for message and then you include your short message in between the quotation marks: `"Initial commit"`.


* More about writing [atomic commits](http://chris.beams.io/posts/git-commit/)
