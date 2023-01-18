# How this begins
Some steps on the scenerios of why we get stuck when we have to push a local repo to github  
## Two Scenerios  
### 1. When you first create a local repo and wants to push it to the github.  
In that case:  
- __create a new repo__ on github (this reponame would be used in the just next step)  
- __Now switch to your local repo__
- __add a remote__ by syntax : __`git remote add <remote_name_of_your_choice> <git@github.com:username/reponame.git>`__  
- __Now switch to the main branch__ of the remote by : __`git checkout <remote_that_you_have_mentioned_above/main>`__  
- Now __fetch__ the contents of the __remote__ branch by : __`git fetch <remote_that_you_have_mentioned_above>`__
- Now __switch__ to master (the main branch of your local git repo) by: __`git checkout master`__
- Now __merge__ both master (the main branch of your local git repo) and remote's main branch by: __`git merge --allow-unrelated-histories <remote_that_you_have_mentioned_above/main>`__
- Now you can run : __`git push org master`__
- And this will no longer show __unrelated histories__ and __'cannot generate pull req'__ issue  
### 2. When you have already created an empty repo on github. 
In that case:  
- run: git clone __`git@github.com:username/reponame.git`__
- Add a remote same as above : __`git remote add <remote> <git@github.com:username/reponame.git>`__
- After committing your local repo you can push the changes to the remote: __`git push orign <branch name of your local git repo`__
- Then open github create a pull request  

## Which one is the best
    Usually the second one is the better approach, clearly you can see you don't need to much step as in first.
