
# Full Stack Development 2 - Assignment.

__Name:__ Ayodele Onamusi

## Features.

[A bullet-point list of the features developed for the React SPA app (only new/modified ones for the Movies app),]

+ Playlist-added icon in the Movie Card Header when selected
+ Playlist Page for Playlist Movies
+ Remove movie from Playlist Button and Functionality
+ Cast of a Movie on Movie Details Page
+ Cast/Actor Page
+ Additional Filtering and Sorting Options
+ Fantasy Movie Form / List and Page
+ Similar Movies
+ Pagination of List Views from the tmdb endpoints
+ Multi-part search

## Feature Design.

[ For each feature listed above, show a screenshot(s) of its UI layout (use appropriate magnification for accessibility). Include a caption with each image.]

e.g. 
#### Playlist-added icon to movie card

> Shows playlist icon selected on movie cards when selected

![][myimage1]

#### Playlist page 

> Playlist page shows the user the list of movies in their playlist/ watchlist 

![][myimage2]

#### Remove Movie from playlist

> Button and functionality to remove a movie from playlist

![][myimage3]

#### Cast of Movies added to Movie Page

> The cast of a movie is now visible on the movie page along with the role they played in the movie

![][myimage4]

#### Cast/Actor Page

> using parameterised routes, Actor's Bio pages can be accessed from the movie page with a brief bio and also images of the actor 

![][myimage5]

#### Additional Filtering and Sorting Options 

> Using a slider bar , User can filter a list of movies based on the Vote average that movie received so far from tmdb

![][myimage6]

> Users can Sort a list of movies alphabetically using a dropdown menu

![][myimage7]

> Users can Sort a list of movies in reverse alphabetically using a dropdown menu

![][myimage8]

> Users can Sort a list of movies in ascending order of vote average ratings using a dropdown menu

![][myimage9]

> Users can Sort a list of movies in descending order of vote average ratings using a dropdown menu

![][myimage10]

#### Fantasy Movie 

> Created a form that the user can fill in to allow them fill in details of a fantasy movie they have. Users can fill in the movie title , movie overview , genres ( gotten from the tmdb API), date , and production company (gotten from the tmdb website). Id of the movie is generated using uuid().

![][myimage11]

> User can see their list of fantasy movies in a table on the page 

![][myimage12]

> User can see the details of their fantasy movie on a dedicated page (parameterised route uses the id generated from uuid )

![][myimage13]

#### Similar Movies 

> using the tmdb endpoint for similar movies, I added a button that the user can click to similar movies to the movie they just viewed. The header of the list also gives the name of the movie they came from 

![][myimage14]

#### Pagination

> pagination at the bottom of the pages of list views of requests from tmdb website, like the homepage or upcoming movies page

![][myimage15]

#### Multi Search

> using the parameters available to us from the tmdb endpoint, users can narrow down their search by either using the year, vote ratings range or cast member. The results are displayed on a separate page 

![][myimage16]

> multi search results page 

![][myimage17]



## Storybook.

[Include a screenshot(s) from the Storybook UI and highlight the stories for new components developed.]

e.g.

![][myimage18]

![][myimage19]

![][myimage20]

## Authentication. (if relevant)

#### Protected routes 

[List all the routes in your app and highlight those that are protected/private (require authentication).]

e.g.

+ /reviews/form - Form for adding a review to a movie
+ /success - page user sees after the log in or log out
+ /multisearch (protected) - page for searching discover endpoint parameters 
+ /movies/searchresults (protected) - page for results of the multi search 
+ /fantasymovie/add (protected) - page to add a fantasy movie
+ /fantasymovie/:id (protected) - page to view the details of a fantasy movie
+ /movies/favourites (protected) - page to view your list of favourite movies 
+ /movies/playlists (protected) - page for user to see their own movie playlist
+ /movies/upcoming - list of movies from the upcoming endpoint
+ /movies/similar/:id - list of movies similar to the movieid passed in the parameter
+ /movies/:id - shows the movie with the id passed as id from tmdb
+ /reviews/:id - for a specific review full text
+ /login - page to login as a user 
+ /cast/:id - show information for a specific cast member/ actor
+ / - home page



#### Protected functionality. (if relevant)

[ Briefly state any app functionality that requires authentication, e.g. only authenticated users can tag a movie as a 'favourite'.]

- only authenticated users can access the filter movies functionality

#### Supabase (if relevant)

[Include a screenshot(s) from your Supabase account that verifies its use for this app. ]

Authentication done using supabase

![][myimage21]

![][myimage22]




## Deployment (if relevant).

[Specify the URL of your deployed app and include a screenshot(s) from your deployment platform account (e.g. Vercal) that verifies its use for this app. Set up a registered user for your app and specify their credentials.



url : ayoflix.netlify.app
Username: bart@simpson.com ; Password: secret

![][myimage23]


## Persistence (if relevant).

[If you are persisting data to the Supabase backend (e.g. favourite movies, fantasy movie), include screenshots with appropriate captions to verify this aspect. ]

## Additional Information.

[ Briefly explain any other aspects of your app's design or implementation that is non-standard and worthy of mention.]

uuid() to manage content without ids.
For production companies used a json file rather than end point





[myimage1]: ./images/myimage1.png
[myimage2]: ./images/myimage2.png
[myimage3]: ./images/myimage3.png
[myimage4]: ./images/myimage4.png
[myimage5]: ./images/myimage5.png
[myimage6]: ./images/myimage6.png
[myimage7]: ./images/myimage7.png
[myimage8]: ./images/myimage8.png
[myimage9]: ./images/myimage9.png
[myimage10]: ./images/myimage10.png
[myimage11]: ./images/myimage11.png
[myimage12]: ./images/myimage12.png
[myimage13]: ./images/myimage13.png
[myimage14]: ./images/myimage14.png
[myimage15]: ./images/myimage15.png
[myimage16]: ./images/myimage16.png
[myimage17]: ./images/myimage17.png
[myimage18]: ./images/myimage18.png
[myimage19]: ./images/myimage19.png
[myimage20]: ./images/myimage20.png
[myimage21]: ./images/myimage21.png
[myimage22]: ./images/myimage22.png
[myimage23]: ./images/myimage23.png
