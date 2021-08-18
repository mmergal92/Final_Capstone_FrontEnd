# Client_Portal

### The live site can be accessed here on Netlify: [Client Portal](https://condescending-banach-e42f44.netlify.app/)

### The server can be accessed here on Heroku: [Client Portal](https://proof-backend.herokuapp.com/)

#### About this Project
For this project, I created a client portal. It would allow my agency to have a place to keep all client files and communication in one place.

#### General App features
User can login to delete or edit their own comments or projects. This allows me to keep monitor who is logged in and how comments can be edited. 

There is a comment component where users can leave comments about the project and if anything needs to be done. 

The app also includes Google authentication. 

#### Tech features

Node.JS
Express
MongoDB Atlas
Mongoose
React
Figma API

I was. As a strech feature, I would like to be able to have the clients (of the agency) log in and see their own brand kits. Ideally they can have access to edit and update only their brand kits. 

#### Challenges
I faced a few challenges while completing this project. The first challange was creating and linking all 7 RESTful routes. The delete and update feature were originally presenting an issue which I soon realized was due to not linking the pages properly. Another difficulty was in connecting the application to Heroku and MongoDB Atlas. There were several errors I had to work through and learn about during this process. Another challange that I'm still working on is creating dropdown features to allow users to choose from a list of options (while still have the option of "other" to insert their own custom fields) for the color and Typography options. I would also like to use EJS Partials in this project as that will help my code not be as DRY. 

#### Stretch Goals
As mentioned in the about section, one of my first stretch features would be login authentication. It would be idea for the potiential clients to be able to login and see their particular brand kits. Another stretch goal would be adding a dropdown menu for the color and type options so that clients can have some options in case they don't already have hex codes and typography names chosen. I would also create an alert before the delete route to ensure users have to confirm they meant to click the delete button to delete their entry.

##### &copy; This was created by Maria Mergal.