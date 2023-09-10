#Netflix GPT

- Create React App
- Configure TailwindCSS - Tailwind CSS is a popular utility-first CSS framework that simplifies the process of building responsive and highly customizable web interfaces. It provides a set of pre-designed utility classes that you can apply directly to HTML elements to style them without writing custom CSS. 
- Header
- Routing of app
- Login Form 
- Sign Up Form
- Form Validation 
- useRef Hook
- Firebase Setup 
- Deploying our app to production
- Create SignUp User Account 
- Implement Sign In User Api 
- Created Redux Store with UserSlice
- Implemented Sign Out 
- Update Profile
- BugFix: Sign up user displayName and profile picture update 
- BugFix: If the user is not logged in redirect / browse page to Login page and vice-versa 
- Unsubscribed to the onAuthStateChanged callback
- Add hardcoded values to the constants file
- Register TMDB API & create an app & get access token 
- Get Data from TMDB now playing movies list API
- Custom Hook for Now Playing Movies 
- Create MovieSlice
- Update Store with Movies data 
- Planning for MainContainer and secondary container 
- Fetch data for trailer video 
- Update Store with Trailer Video Data 
- Tailwind Classes to make Main Container Look better 
- Build Secondary Components 
- Build Movie List 
- Build Movie Card 
- TMDB Image CDN URL 
- usePopularMovies, useTrendingMovies, useTopRatedMovies custom hooks 
- GPT Search Feature 
- GPT Search Page 
- GPT Search Bar 
- Multi-language Feature in App
- Get Open AI API Key 
- Get Search API Call
- Movie Suggestions was fetched from TMDB 
- created gptSlice added data 
- Reused Movie List component to make movie suggestion container 
- Memoization 
- Added .env file and added it to gitignore 
- Made Website to be responsive 

# Features 
- Login / Sign Up 
    - Sign In / Sign Up Form 
    - redirect to Browse page 

- Browse (After authentication)
    - Header
    - Main Movie 
        - Trailer in the background 
        - Title & Description 
        - Movie suggestions 
            - MovieLists * N 

- NetflixGPT 
    - Search Bar 
    - Movie Suggestions 

