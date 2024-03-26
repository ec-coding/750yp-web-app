# Things that need to be done

- check every component and piece for refactoring
- wire in the auth0 login
- wire in admin functionality
- wire in the backend with API calls
  - I would look into tanstack react-query for this
- update all styling to remove tailwind
- add a protected routes that checks for admin access
- you can add the users page to it as well if there is a users page
- everything is done with react-router-dom now, so be sure to look into that as well
- ive implemented the useAuth0 hook in parts that were using it, but you need to make sure it works correctly, because I just threw code in there to save time
- Ive commented out alot of code that was not functioning as intended, so be sure to check that as well
- you can probably remove the parent .gitignore, or put everything in it, you just dont need 3 .gitignores in my opinion
- put the images your using in the public folder, and reference them from there
  - this is a good practice for SEO and performance
