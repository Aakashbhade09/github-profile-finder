# GitHub Profile Finder 🔍

A simple and user-friendly web application that allows users to search for GitHub profiles and view their public information using the GitHub REST API.

## 🚀 Features

- 🔎 Search GitHub users by username.
- 👤 Display profile picture, name, and username.
- 📝 Show the user's bio.
- 📦 Display public repository count.
- 👥 Show followers and following counts.
- 🔗 Visit the user's GitHub profile directly.
- ⚠️ Handle invalid usernames and network errors.
- 🌙 Clean dark-themed user interface.

## 🛠️ Technologies Used

- **HTML5** – Structure of the application.
- **CSS3** – Styling and responsive layout.
- **JavaScript** – Application logic and API requests.
- **GitHub REST API** – Fetching public user profile information.

## 📂 Project Structure

```text
github-profile-finder/
├── index.html
├── style.css
└── script.js
```

## 💻 How to Run the Project

1. Clone this repository:

   ```bash
   git clone https://github.com/YOUR-USERNAME/github-profile-finder.git
   ```

2. Open the project folder.

3. Open `index.html` in your web browser.

4. Enter a GitHub username in the search box.

5. Click the **Search** button to view the profile details.

Alternatively, you can download the repository as a ZIP file and open `index.html`.

## 🔌 API Used

This project uses the GitHub REST API to retrieve public user information.

**API endpoint:**

```text
https://api.github.com/users/{username}
```

Example:

```text
https://api.github.com/users/torvalds
```

## 📸 Usage

Enter any valid GitHub username to view the user's public profile information, including their repositories, followers, and following.

## 🎯 Learning Outcomes

Through this project, I practiced:

- Working with the GitHub REST API.
- Making HTTP requests using `XMLHttpRequest`.
- Handling JSON responses.
- Manipulating the DOM using JavaScript.
- Handling errors and displaying messages.
- Separating HTML, CSS, and JavaScript into individual files.

## 🔮 Future Improvements

- Add a loading animation.
- Display repository details and links.
- Add pagination for repositories.
- Improve mobile responsiveness.
- Add a search history feature.

## 📄 License

This project is open-source and available for learning and educational purposes.

---

**Made with ❤️ using HTML, CSS, and JavaScript.**
