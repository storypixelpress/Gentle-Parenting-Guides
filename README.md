# Anine West Landing Page

This repository contains the code for Anine West's professional landing page, featuring her parenting guides, author bio, testimonials, and purchase links.

## Deployment Instructions (GitHub Pages)

Follow these steps to deploy your landing page using GitHub Pages:

### 1. Create a New GitHub Repository

1.  Go to [GitHub](https://github.com/) and log in.
2.  Click the `+` sign in the top right corner and select `New repository`.
3.  Give your repository a name (e.g., `anine-west-landing-page`).
4.  Choose whether it's public or private.
5.  **Do NOT** initialize with a README, .gitignore, or license at this stage.
6.  Click `Create repository`.

### 2. Initialize Git and Push to GitHub

1.  **Extract the provided `anine-west-landing-dist.zip` file.** This will give you a `dist` folder containing all the optimized production files.
2.  Open your terminal or command prompt.
3.  Navigate into the `dist` folder you just extracted:
    ```bash
    cd path/to/your/extracted/dist
    ```
4.  Initialize a new Git repository:
    ```bash
    git init
    ```
5.  Add all files to the repository:
    ```bash
    git add .
    ```
6.  Commit your changes:
    ```bash
    git commit -m "Initial commit of Anine West Landing Page"
    ```
7.  Add the remote GitHub repository. Replace `YOUR_USERNAME` with your GitHub username and `YOUR_REPOSITORY_NAME` with the name you chose in step 1.
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
    ```
8.  Push your code to GitHub:
    ```bash
    git push -u origin master
    ```
    (If your default branch is `main`, use `git push -u origin main` instead.)

### 3. Deploy with GitHub Pages

1.  Once your code is pushed to GitHub, go to your repository on GitHub (e.g., `https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME`).
2.  Click on `Settings` (usually found in the top navigation bar of your repository).
3.  In the left sidebar, click `Pages`.
4.  Under the `Build and deployment` section, for `Source`, select `Deploy from a branch`.
5.  For `Branch`, select `master` (or `main`, depending on what you pushed) and choose the `/ (root)` folder.
6.  Click `Save`.
7.  GitHub Pages will now build and deploy your site. This process usually takes a few minutes. Once deployed, you'll see a link to your live website on the GitHub Pages settings page (e.g., `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/`).

Your landing page will now be publicly accessible!

