# add, commit recent changes
git add .
git commit -m 'clearing /docs'
git checkout master
# delete contents in /docs to avoid conflicts
rm -rf ./docs
# pull other changes
git pull elewa master
# enter gitbook source
cd docs_src
# build new gitbook
gitbook build
# copy it out of the way for branch change
# f to overwirte last publication
cp -rf ./_book/. ../docs/ 
# delete the /_book foler
rm -rf _book
# return to parent directory
cd ..
# commit recent build
git add .
git commit -m 'publishing'
# publish changes
git push elewa master

# to execute this file run this command in terminal:
# chmod a+x ./publish.sh