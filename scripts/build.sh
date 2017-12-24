# add, commit recent changes
git add .
git commit -m 'building'
git checkout master
# enter gitbook source
cd src
# build new gitbook
gitbook build
# return to parent directory
cd ..
# commit recent build
git add .
git commit -m 'building'



# to execute this file run this command in terminal:
# chmod a+x ./build.sh