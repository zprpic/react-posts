    Overview



    Create a React application that shows a list of Posts and associated post Comments that are fetched via provided API.

    Push the code to github + describe the build/run process in a Readme file

    Write approximate time needed to finish the assignment



    Features

        Create 2 routes: '/posts' & 'post/{id}'.

        Posts route should show a list of posts and associated comments. Every post should have a user's name associated.

        Create a search input and filter posts by user data using an input field.

        Clicking a post will open it in a new page

        MUST! EVERY component one rendered must log in the console 'Hello from <insert component name>'. The part 'Hello from' must be sent to a component via props and defined only once within the scope of the application. So it looks something like console.log('${propsmessage} ${componentName}'). Feel free to name the variable names as you see fit.

---

### 1 Connect project to github

- app name: react-posts
- github repo: https://github.com/zprpic/react-posts

### 2 Prepare folder structure

- structuring folders by "features":

a) components
b) pages
c) hooks
d) config

### 3 Prepare necessary dependencies

a) react-router-dom (from npm install react-router-dom)

### 4 Prepare API_URL inside config folder

### 5 Prepare 2 pages/routes with react-router-dom

- "/" home page
- /posts route
- /post/${id} route
- "star" error page

### 6 Create a posts component and useFetch hook

- Post component should return posts grouped by userId using the useFetch custom hook

### 7 Create a post component and useFetch hook

- Post component should render the post according to its ${id}

### 8 Create a comments component and useFetch hook

- Should fetch ALL comments

### 9 Create helper functions to help proccess response data and make rendering easier

- prepare all posts data (needs to be ONE(1 array of objects))
- prepare all comments data (group into Object by postId key)
- prepare a join of posts and their RELATED comments
- content = posts with their RELATED comments

### 10 Render content

### Greet the user in the console from every rendered component

- pass "hello" message as props
- access component name
- create function that does console.log(message, componentName)
