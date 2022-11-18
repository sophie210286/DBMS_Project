# Set Up and Info ⚙️ 😏

The box below means terminal

```console
>> I am Terminal
```

<br/>

## Basic Requirement 🗎

Check whether or not your device has git installed:

```console
git --version
```

If not, download it:

- Git for [windows](https://git-scm.com/download/win)
- Git for [mac](https://git-scm.com/download/mac)

If you are windows user, use **git-bash** terminal. In my opinion, git-bash has better interface than cmd. Mac book has good terminal, so need for git-bash.

<br/>

## Project Installation 🚀

`Step 0`: Open the folder where you want to store your project in the terminal

`Step 1`: The following command will clone the repository from GitHub

```console
git clone https://github.com/sophie210286/DBMS_Project.git
```

<br/>

## Helpful Infos and Commands 💻

`Note`: All the following commands should be executed in the project folder

### Terminologies

```txt
Remote repository: The repository that is on GitHub
Local repository: The repository that is on your device
```

<br />

### Branch

- By default, GitHub shows the `main` branch
- The `*` symbol in the branch list means the current branch
- To see the list of branches in your local repository:

```console
git branch
```

- To see the list of branches in your remote repository:

```console
git branch -r
```

- To see the list of all branches in the local + remote repositories:

```console
git branch -a
```

- To change the branch:

```console
git checkout <write-branch-name>
```

<br/>

### Pull

**Always run the following command when you start working on the project or change the branch which on remote repository to get new changes**

```
git pull
```

- `git pull` command will pull new changes from the remote repository to your local repository

<br/>

### Adding/Updating the Content

> You added a new file or changed some files, and now, you want to share the changes with others.

`Step 0` To check, what new files or changed files are not in the remote repository:

```console
git status
```

- The above command will show you the list of files that are changed or newly added

`Step 1` Now you will select what files you to add in your remote repository:

- If you want to add specific file:

  ```console
  git add <file-name>
  ```

- If you want to add all the changed file(I usually use this):
  ```console
  git add .
  ```

`Step 2` To commit(save) the changes to the remote repository

```console
git commit -m "<write-meaningful-message>"
```

`Step 3` To send all the changes to the remote repository

```console
git push
```

<br/>

### Git Ignore

> Let's say there is a file that you don't want to share with anyone on the remote repository, but you still want to keep the file inside this project folder.

- Create a `.gitignore` file and put relative file paths that you want to ignore.

Example:

```console
.gitignore
<file-paths>

# Example
setup.txt

# If there is a file which is inside the folder
/queries/secretfile.txt
```

- Here `#` is a comment
