# Job Search App

This project is a job search application built using Django (backend) and React (frontend). It allows users to search for job listings by position and location, utilizing the **JSearch API** on RapidAPI to retrieve job data.

## Features

*   **Job Search:** Users can search for jobs based on keywords, such as job title, company, or specific skills.
*   **Location-Based Filtering:** Users can specify a location (city, state, country) to narrow down search results.
*   **Dynamic Job Listings:** The application fetches real-time job listings from the JSearch API on RapidAPI.
*   **Responsive UI:** The frontend, built with React, provides a user-friendly and responsive interface that adapts to different screen sizes.
*   **Job Details:** Users can view detailed information about each job listing, including description, requirements, and application link (if available).
*   **Pagination:** The results are paginated, allowing users to easily browse through a large number of job listings.

## Technologies Used

*   **Backend:**
    *   Django: Python web framework for building the REST API.
    *   Django REST Framework: Toolkit for building Web APIs with Django.
*   **Frontend:**
    *   React: JavaScript library for building user interfaces.
    *   React Router: For handling navigation and routing within the React application.
    *   Axios (or similar): For making HTTP requests to the backend API.
*   **Database:**
    *   SQLite (for development)
*   **API:**
    *   JSearch API (from RapidAPI)

## Prerequisites

Before running the project, make sure you have the following installed:

*   Python (version 3.9 or higher)
*   Node.js (version 16 or higher)
*   npm (Node Package Manager)
*   Git

## Project Setup

### Backend (Django)

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/SosoPkhakadze/Job_Search.git
    cd Job_Search
    ```
2. **Create and Activate Virtual Environment (Recommended):**

    *   **Windows:**
    ```bash
        python -m venv env
        env\Scripts\activate
    ```

    *   **macOS/Linux:**
    ```bash
        python3 -m venv env
        source env/bin/activate
    ```
3. **Install Backend Dependencies:**
    ```bash
    pip install -r requirements.txt
    ```
4. **Database Migrations:**
    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```
5. **Run the Development Server:**
    ```bash
    python manage.py runserver
    ```
    The Django backend will be running at `http://127.0.0.1:8000/`.

### Frontend (React)

1. **Navigate to the Frontend Directory:**
    ```bash
    cd frontend
    ```
2. **Install Frontend Dependencies:**
    ```bash
    npm install
    ```
3. **Start the React Development Server:**
    ```bash
    npm start
    ```
    The React frontend will be running at `http://localhost:3000/`.

## API Configuration (Important!)

*   This application uses the **JSearch API** from **RapidAPI** to fetch job data.
*   **You must have a RapidAPI account and subscribe to the JSearch API to use this application.**
*   Follow these steps:

    1. **Sign up for a free RapidAPI account:** Go to [https://rapidapi.com/](https://rapidapi.com/) and create an account.
    2. **Subscribe to the JSearch API:**
        *   Go to the JSearch API page on RapidAPI: [https://rapidapi.com/letscrape-com-letscrape-com-default/api/jsearch/](https://rapidapi.com/letscrape-com-letscrape-com-default/api/jsearch/)
        *   Click on "**Subscribe to Test**" (or a similar button, the label might have changed).
        *   Choose a subscription plan (there's usually a free tier with limited requests).
    3. **Obtain your API Key:**
        *   After subscribing, go to your RapidAPI dashboard ([https://rapidapi.com/developer/dashboard/](https://rapidapi.com/developer/dashboard/)).
        *   Click on "My Apps".
        *   Select your app that uses the JSearch API.
        *   You'll find your **X-RapidAPI-Key** under the Security section of your application.
    4. **Set your API Key in `api/views.py` file in your code like so:**

        ```python
        headers = {
            "X-RapidAPI-Key": "YOUR_API_KEY_HERE", #REPLACE  YOUR_API_KEY_HERE WITH THE KEY YOU GOT FROM RAPID API
            "X-RapidAPI-Host": "jsearch.p.rapidapi.com"
        }
        ```

## Usage

1. Open your browser and go to `http://localhost:3000/` (or the address where the React development server is running).
2. Enter keywords for the job you're looking for (e.g., "Software Engineer") in the "Job title, keywords..." input field.
3. Enter a location (e.g., "San Francisco", "Remote") in the "Location..." input field (optional).
4. Click the "Search" button.
5. The application will display a list of relevant job listings based on your search criteria, fetched from the JSearch API.
6. Click on a job card to view more details about the job, including the full description, requirements, and how to apply.

## Deployment

### Backend (Django)

*   **Database:** Replace SQLite with a production-ready database like PostgreSQL or MySQL.
*   **Web Server:** Use a production-grade WSGI server like Gunicorn or uWSGI to serve the Django application.
*   **Static Files:** Configure Django to serve static files correctly in production using `collectstatic`.
*   **Security:** Review Django's deployment checklist to ensure security best practices.

### Frontend (React)

*   **Build:** Create a production build of your React app:
    ```bash
    npm run build
    ```
*   **Serve:** Use a web server (like Nginx or Apache) to serve the static files generated in the `build` folder.
*   You could also use a platform like Netlify or Vercel, which are designed for serving frontend applications.

## Contributing

Contributions to this project are welcome! Please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add your commit message"`
4. Push the branch: `git push origin feature/your-feature-name`
5. Create a pull request on GitHub.

## Acknowledgments

*   JSearch API on RapidAPI for providing job listing data.

## Contact

*   Soso Pkhakadze - \[sosiko2004@gmail.com](mailto:sosiko2004@gmail.com)
*   Project Link: [https://github.com/SosoPkhakadze/Job\_Search](https://github.com/SosoPkhakadze/Job_Search)

**Important Reminders:**

*   **API Key:** Emphasize to users that they need their own RapidAPI account and JSearch API subscription.
*   **Rate Limits:** Inform users about any rate limits on the free tier of the JSearch API (they might need to upgrade their subscription if they make too many requests).
*   **Environment Variables:** If you later decide to use environment variables for the API key, update the instructions in the README accordingly.

This README provides clear instructions on setting up the project, especially the critical part about the JSearch API and using individual API keys.
