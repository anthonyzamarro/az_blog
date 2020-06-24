---
path: '/cookies-session-localstorage'
title: 'Cookies vs. Sessions vs. LocalStorage'
published: true
author: 'Anthony'
date: '2019-03-09'
---


These are all terms you’ve probably heard before but didn’t quite know the difference between them. Here is a quick TLDR of the difference between a cookies, session, and local storage

## First, what’s the same?
- All are used to store a user’s data on the client.
- All can be cleared manually in their respective ways.

## Cookie
- Contains about 4kb of a user’s data
- The data stored in a cookie can be sent back to the server
- Has an expiration data which is set when the cookie is created and can be stored for an arbitrary length of time. By default, it is usually destroyed when the browser is closed
- Stores data in a key=value format
- Useful for transferring data between sessions and puts less burden on the server for things like authenticating whether a user is logged in or not.

## Session
- Data stays in window/tab in which it is set.
- Data doesn’t persist. It is lost when tab/window is closed.
- Contains a session ID which is sent back to the server
- Helps server determine whether the user has an active connection or not



## LocalStorage
- An API to store data (up to 5mb) as a string in the user’s browser. 
- Data is not sent back to server via HTTP request. 
- Persists indefinitely until explicitly deleted via JavaScript or user clearing browser application storage. 
- Uses same-origin policy

### Sources:	
- https://stackoverflow.com/questions/11142882/what-are-cookies-and-sessions-and-how-do-they-relate-to-each-other
- https://en.wikipedia.org/wiki/HTTP_cookie
- http://www.whatarecookies.com/
- https://web.stanford.edu/~ouster/cgi-bin/cs142-fall10/lecture.php?topic=cookie
