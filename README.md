# tinder-clone
This my Tinder Clone MERN STACK app built with React JS!
I used https://cloud.mongodb.com/ for my database.
I get some css and js structures from Ania Kubov and Jakob Unnebäck.
# How to Run the App:
Clone the repository to your local machine using git clone https://github.com/3p10/tinder-clone .
Navigate to the project directory with cd command.
Install the required dependencies using npm install.
Open two terminals for front and back. Run the app by npm run start in both sides.
Open your browser and visit http://localhost:3000 to view the app.
# Features:
Message Functionality: Engage in conversations with your matches and make connections. 
Swipe Functionality to swipe left or right to like or dislike users, just like the real Tinder app!
# Project Structure:
The project structure is simple and focused on frontend implementation. Here's a quick overview of the main files and folders:
client/: Contains all the React components and styles for client side.
Server/: Contains all the backend side.
# Technology Used:
Create-React-App
MongoDB
React.js
Node.js
Nodemon 
Mongoose
Express
Dotenv
Jsonwebtoken
Bcrypt
Cors
uuid
Javascript
HTML
CSS
GitHub
# Explanation of Dependencies:
1.	Created the project using npx create-react-app tinder-clone.
2.	Installed react-router-dom@6 and react-tinder-card package for the client side.
3.	Created the backend using npm init in the server named folder. It will run on port 8000.
4.	Installed nodemon package by npm i nodemon.
5.	Added express package to help me to do routing, mongodb, dotenv to store our variables secretely, bcrypt to hash passwords, cors to help to communicate with backend, uuid to generate unique identifier, jsonwebtoken to do a synchronous sign-in when log-in is done as an existing user, react-cookie to manage (set, remove) cookies.
6.	Methods like .insertOne, .db, .find, .connect, .collection and etc come with mongodb package.
# About the Project:
In the home page http://localhost:3000/ you can do SIGN IN or SIGN UP buttons. It is better to create at least 4 accounts (2 men, 2 women).
By clicking on SIGN UP and inserting the email and password, it directs you to the onboarding page http://localhost:3000/onboarding , in which you can go through in completing your profile info.
In the http://localhost:3000/onboarding you can see the users who signed up in the application and your name at the top of Chat section. After swiping the card to the right side, you have to reload the page to make the matches’ list shown up. However, by swiping the card to the left side, the card will be removed.
Then, by clicking on a matched individual, it will show up the chat section. Now, you can start chatting.
After clicking on SIGN OUT, you have to reload http://localhost:3000/ to start over.
I don’t use secret key. Because it’s not really secure to sign up to get a secret key. So I pass through the values that I want to use to generate token and the amount of time that I want the token to expire in.
Future Development:
The app will be further developed to become a fully functional app. This is yet to be determined when it will be developed.
