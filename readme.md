# DESCRIPTION:
The app is meant to take an informal straw poll for an upcoming parliamentary election. It was written in four hours as part of a coding exercise for mySociety.

-	The app first asks if the user will vote in the upcoming election, and what constituency they vote in.
-	If the user answers yes, then it asks who they will vote for. It then takes them to the results page.
-	If the user answers no, it takes them straight to the results page.
-	The results page shows two doughnut graphs with results for both the constituency and national contexts.

# REQUIREMENTS:
The app is written using the Express web application framework, so you will need the following to run it:
-	NodeJS v0.8.14
-	Express v3.1.0
-	Jade 0.28.2
-	A server capable of running nodeJS.
-	A browser that supports HTML5.

I’ve included a copy of Express and Jade in the node_modules directory.

I am using the open source Chart.js graphing library, which I’ve included in public/javascripts.

To run the app, make sure node is in your PATH and type ‘node app.js’.

Point your browser (I recommend Chrome) to ‘http://localhost:3000’ to play with the app. Currently, you can vote multiple times by going back to this main page.

# TODOS:
-	The app currently stores the data in memory to simplify everything. Implement a way to persist the data to a file from time to time, or use some sort of database as the data store (maybe Redis).
-	The parties, constituencies and polling objects currently are explicitly defined. Generate them programmatically, perhaps from text files.
-	Leave a cookie on the user’s browser to prevent them from voting multiple times.
-	Currently using HTML5 specific features and tested only in Chrome. Do cross-browser testing and support older browsers.
-	Make the site responsive so that it appears reasonable when accessed from a mobile phone.
-	Make site accessible.
-	Tweak theming…
