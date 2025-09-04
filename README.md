<img width="1536" height="1024" alt="ChatGPT Image Sep 4, 2025, 12_01_41 PM" src="https://github.com/user-attachments/assets/75e9ee56-70da-4a08-9b50-ee31bfde057d" /><img width="1536" height="1024" alt="ChatGPT Image Sep 4, 2025, 12_01_41 PM" src="https://github.com/user-attachments/assets/68cf9643-869f-4407-a6d2-6aa246241a32" /><img width="1536" height="1024" alt="ChatGPT Image Sep 4, 2025, 12_01_46 PM (2)" src="https://github.com/user-attachments/assets/f58cee29-2124-4894-990a-718b68127c14" />React URL Shortener (Student-Style)

A client-side React web app for creating short URLs with optional custom shortcodes. All data is stored in localStorage, so no backend is required. Includes logging, analytics, and URL management.

Features

Create Short URLs

Input original URL.

Optional custom shortcode (4–20 characters: letters/numbers/_/-).

Default validity: 30 minutes (user can change).

Auto-generated unique shortcodes if not custom.

Stored data: {shortcode, originalUrl, createdAt, expiresAt, clicks, history}.

Redirection

Visit /:shortcode to redirect to the original URL.

Checks existence and expiration.

Increments click count and logs the redirect.

URL Management & Analytics

"My URLs" tab: shows all created URLs, clicks, expiry, copy/delete actions.

"Analytics" tab: shows click counts, creation time, and expiry.

Logging Middleware

Logs all actions (create, copy, delete, redirect, failed redirect) in localStorage under key appLogs.

Viewable in "Logs" tab.

No console.log used.

Technologies Used

React (Create React App)

React Router (/:shortcode route)

LocalStorage for URL and log storage

JavaScript (ES6+)

CSS (App styling)

File Structure
22FE1A05E2/
  LoggingMiddleware/
    logging.js
    readme.md
  FrontendTestSubmission/
    package.json
    public/
    src/
      index.js
      App.js
      App.css
      loggingMiddleware.js
      components/
        CreateShortUrl.js
        UrlList.js
        Stats.js
        RedirectPage.js

Installation & Setup

Navigate to the React app folder:

cd C:\Users\LAB\22FE1A05E2\FrontendTestSubmission


Install dependencies:

npm install
npm install react-router-dom


Start the app:

npm start


Open http://localhost:3000
 in your browser.

Usage

Create a short URL

Go to Create tab.

Enter original URL.

Optional: Add custom shortcode and validity.

Click Create.

Test redirect

Open the generated short URL in a new tab.

Should redirect to the original URL.

Manage URLs

Go to My URLs tab to see all created URLs.

Copy or delete URLs.

View Analytics

Go to Analytics tab to see click counts, creation time, and expiry.

View Logs

Go to Logs tab to see all actions logged.

Notes

All data is stored in localStorage. Clearing the browser storage will remove URLs and logs.

Unique shortcode generation ensures no duplicates.

App is fully client-side; no server is required.
