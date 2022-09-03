
**

# Purpose

JavaScript web app that maintains a list of bookmarks (links).

# Requirements

The user is able to add/edit/delete any link in the list. The application
should only use front-end technologies (i.e. no backend database!).

##  Overview page

 1. Displays a form on the top of the page that lets a user submit a link. The form should validate whether the input is a valid URL and exists. 
 2. Displays the list of links with pagination so 20 links are shown per page.
 3. The pagination should include numbered pagination with next and previous links eg. < 1 2 3 >.

## Results page

 1. Contains a message thanking the user for a submission.
 2. Displays the user’s submission.
 3. Includes a link back to the overview page.

# Detailed design
The application will have two modules (features): 
1. Overview page [route: /]
2. Thank you or results page [route: /thanks]

The overview page will have multiple components inside it:

 1. overview: Main content module, this will call the form and link-list components
 2. form: Where the user adds a link (form submition)
 3. link-list: the paginated list of links (uses the link-card)
 4. link-card: the individual links 
 5. pagination: the pagination component, this is where the paginated list is created using the main list

Besides that there will be a core module:
 1. components: nav-bar and footer
 2. layout: keeping everything tidy: calls navbar, router and footer
 3. services:
	 a. Where the magic happens, the bookmark service will handle the saving, editing, deleting and retrieving of the data (just local storage for now) the other components will subscribe to this as well to keep an updated version of the bookmark list 

And a shared module:
 1. util: for now just the form validation for the urls

## Tests
Ran out of time before actually writing tests (Definitely need to work on this) however manual testing was carried out:

 - Adding a link
	 - Nothing in the input
	 - Repeated link 
	 - Wrong format
 - Removing a link
	 - Adding the same link afterwards
 - Editing a link
 - No links
 - Deleting local storage data
 - Accessing non existent routes

# Limitations
Using local storage so limited to the current browser, the url validity is limited to the following regex: 

    ((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)

I'm sure there are plenty more things, tried to make it as responsive as I could with the time constraint. 
I would have liked to move the pagination to the shared module. 

