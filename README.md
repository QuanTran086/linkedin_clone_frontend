# LinkedIn Clone using React

## Technologies Used
- React
- Axios
- State Hooks
- React Router
- LocalStorage
- CSS

## Folder Structure

After creation, the project should look like this:

```
linkedin_clone_frontend/
  node_modules/
  public/
    index.html
    favicon.ico
  src/
    apis/
      baseURL.js
    assets/
    components/
      navbar/
      post/
      postcard/
    pages/
      homepage/
      profile/
      sign-in/
      sign-up/
    App.css
    App.js
    index.css
    index.js
  .gitignore
  package-lock,json
  package.json
  README.md
```

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/index.js` is the JavaScript entry point.

## User Flow
![Screenshot 2024-06-10 170529](https://github.com/QuanTran086/linkedin_clone_frontend/assets/130350185/94f1d024-021d-424e-9f66-d8a5eace4e57)

1. **App Initialization**: Upon opening the app, users are presented with the option to either sign in to an existing account or sign up for a new one.

2. **Authentication**:
   - **Sign Up**: New users can create an account by providing their details on the sign-up page.
   - **Sign In**: Existing users can enter their credentials to access their personalized feed.

3. **Home Feed**: After successful authentication, users are directed to their feed where they can browse posts and updates from their connections and groups.

4. **Engagement with Posts**: Users can interact with the content in their feed through the following actions:
   - **Like**: Toggle the like status of a post to show appreciation or endorsement.
   - **Comment**: Engage in discussions by adding a comment to a post. Users have the option to post their comment or delete it if they change their mind.
   - **Repost**: Share content within their network, increasing the post's visibility and engagement.

## Installation
Instructions on setting up the project locally.
- Ensure you have Node.js and npm installed.
- Clone this repository.
- Run `npm install` to install dependencies.
- `npm start` to start the development server.
