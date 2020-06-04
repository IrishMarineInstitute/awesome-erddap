#!/bin/sh

#
# TRAVIS_BRANCH holds the branch name from a puch commit
#

setup_git(){
	git config --global user.email "travis@travis-ci.org"
	git config --global user.name "Travis CI"
}

commit_javascript_file(){
	git checkout -b $TRAVIS_BRANCH
	git add *.js
	git commit -m "Travis update: Travis build - # $TRAVIS_BUILD_NUMBER"
	
}