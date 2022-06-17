## PUBG Tour

##PPT Link:
https://prezi.com/view/jXjEgwAOsfMKuvvv1RF1/

## Problem Statement
Build a system to search for Tournaments of PUBG, Matches of Each Tournaments ,Search for a particular player,Display the most recommended player,Favourite matches, recommend player.
## Requirements
The application needs to fetch PUBG data by registering with the following API link and get API Key required to call the API.
https://developer.pubg.com/

- Reference APIs:
1. https://api.pubg.com/tournaments
2. https://api.pubg.com/tournaments/<tournament-ID>
3. https://api.pubg.com/shards/tournament/matches/82821ad4-1b53-48e0-
b116-1e33b89bb6c3
				
	- A frontend where the user can register/login to the application. The login page should have a link for registration using which the user
	should be able to register. On Successful registration the user should be taken to the login page.
	- Proper navigation links for all the pages should be available within pages
	- Error handling should be implemented across pages. Appropriate messages should be displayed for the same.
	- Success messages should be displayed for the User Registration.
	- Logout feature should be implemented.
**User can add a match to favourite list and should be able to view the favourite list.**

**User can recommend a player to recommendation list and should be able to view global recommendations.**

## Modules
### UI (User interface) - should be able to
1. View all the Tournaments.
2. Click each tournament and view all the matches of that tournament.
3. Search for a player.
4. View details of a player
5. Recommend a player.
6. Add a match into favourite list.
7. View favourite matches.
8. View global recommendations from recommendations list
9. User gets a welcome mail on registration.
10. User can edit his/her profile.
11. UI should be appealing, user friendly and responsive in nature.

### AuthenticationService - should be able to manage users account.
### googleapiService - should be able to store all the favourite/recommendation list for a specific user
## Tech Stack
- Spring Boot
- MySQL, MongoDB
- Angular 8,
- Docker, Docker Compose
- Java

## Flow of Modules
### Building frontend
1. Register/Login.
2. Show list of Tournaments - populating from external API.
3. Show list of matches of a particular tournaments - populating from external API.
4. Show match details - populating from external API.
5. Build a view to show favorite list.
6. Add Pagination for trending/favorite/recommendation list.
7. Search for players.
8. Display player details
	for example - Weapon Mastery, Lifetime stats.
- Using Services to populate these data in views
- Stitching these views using Routes and Guards
- Unit Tests should be created for the Components and Services
- E2E scripts using protractor should be created for the functional flows
- Implement CI - continuous Integration (use,.gitlab-ci.yml)
- Dockerize the frontend (create dockerfile,docker-compose.yml and get it executed through docker compose)

### Note: FrontEnd and all the backend services should be dockerized
and run through docker-compose

### Building the UserService
- Creating a server in Spring Boot to facilitate user registration and login with MySQL as backend. Upon login, JWT token has to be generated. 	It has to be used in the Filters set in other services.- Writing swagger documentation.
- Unit Testing of the entire code which involves the positive and negative scenarios.
- Implement continuous Integration CI ( use .gitlab-ci.yml).
- Dockerize the UserService (create dockerfile, docker-compose.yml and get it executed through docker compose).

### Building the favourite Service
- Building a server in Spring Boot to facilitate CRUD operation over favorite matches stored in MongoDB. JWT Filter should be
  applied for all the API calls of the googleapiservice. JWT token should be used to authorize the user access to all the resources.
- Writing Swagger Documentation.
- Write Unit Test Cases and get it executed.
- Implement CI - continuous Integration ( use .gitlab-ci.yml).
- Dockerize the favorite Service(create dockerfile and update the docker-compose.yml).

### Building the recommendation Service
- Building a server in Spring Boot to facilitate CRUD operation over recommended players stored in MongoDB. JWT Filter should be
  applied for all the API calls of the googleapiservice. JWT token should be used to authorize the user access to all the resources.
- Writing Swagger Documentation.
- Write Unit Test Cases and get it executed.
- Implement CI - continuous Integration ( use .gitlab-ci.yml).
- Dockerize the favorite Service(create dockerfile and update the docker-compose.yml).

### Demonstrate the entire application
1. Make sure all the functionalities are implemented.
2. Make sure both the UI (Component and Services) and server side (For all layers) codes are unit tested.
3. All the Services are up and running using docker (Dockercompose should be used for running them)
4. E2E tests should be executed and shown.
