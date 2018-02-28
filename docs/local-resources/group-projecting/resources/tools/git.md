### collaborative git-flow

https://github.com/sf-wdi-24/modules/tree/master/how-tos/github/collaboration-workflow
http://nvie.com/posts/a-successful-git-branching-model/

___
### Atomic Commits
When you start working on big projects, you will be modifying multiple files which will all need saving. However, it's best practice to save files purposefully; we call this an **atomic commit**.

If we were to add all the files onto one stage and not think about making atomic commits, this would make your snapshot really crowded and congested - this is bad for two reasons:

First, you will not know why the snapshot was meaningful and if you wanted to find a specific snapshot you would find it difficult to trace what you were trying to accomplish with those files.

Second, imagine if your project got corrupted or your code has a bug you can't figure out and does not work anymore. If you were to put all your files onto one stage and then tried to load a previous snapshot known to be stable, you would lose a lot of progress with your work and then piecing all the files back to their desired state would be painstaking.

To get around this, only `git add` files that are thematically similar. For example if your project had a lot of text files and image files, you could stage all text files together for one snapshot and then all image files together for another snapshot.

All snapshots taken must have a message attached to it. When you have staged files purposefully (or with a theme), it's easy to decide what kind of message to include.

To take a snapshot, you would run `git commit -m "Initial commit"`. The `-m` flag stands for message and then you include your short message in between the quotation marks: `"Initial commit"`.

* More about writing [atomic commits](http://chris.beams.io/posts/git-commit/)

https://github.com/stujo/agile-git-workflow

https://github.com/features

http://opentechschool.github.io/social-coding/

## decommitting

# Undo Changes in Git
As mentioned in the [Git Intro lesson](http://www.theodinproject.com/courses/web-development-101/lessons/introduction-to-git), Git keeps a historical record of all the changes in a project based on each commit that is made. This gives you the capabilities to do some very useful things with Git.

One of the most useful abilities is to undo changes in a project. There are many scenarios where this will be useful to you as a developer.

Imagine you have introduced a serious bug in a app you are working on in your latest commit. The bug is breaking the functionality that allows users to make orders. Every second this bug is allowed to be on the live version of the app is losing you money. The quickest way to fix this problem in many cases is to revert to a previous working commit in your project which doesn't have the bug.

Another more common scenario is you don't want the changes you have made in your last few commits and want to go back to how your project was before making these changes. With git you can simply reset to the commit previous to the commits that introduced your new changes.

In this lesson you will learn all of the different ways you can undo changes with Git. This is the next important ability you need to gain in your road to mastery with Git.

## Learning outcomes
*Look through these now and then use them to test yourself after doing the assignment*

* You understand what the HEAD is in Git
* You know how to reset to a previous commit
* You know how to checkout a previous version of a file
* You understand what revert does
* You know how to clean new files from your project with git

## Assignment
1. Complete the second interactive lesson in Codecademys exellent Git course, [How to back track in git](https://www.codecademy.com/learn/learn-git) to get a feel for some of the basic ways to undo changes in Git.
2. Read through this [short tutorial from Atlassian](https://www.atlassian.com/git/tutorials/undoing-changes) which covers all you need to know about undoing changes in git.

## Additional Resources
*This section contains helpful links to other content. It isn't required, so consider it supplemental for if you need to dive deeper into something*
* [A very techincal explanation of git reset from pro git](https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified) 

___