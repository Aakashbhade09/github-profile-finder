
const form = document.querySelector('#searchForm');
const usernameInput = document.querySelector('#username');
const profile = document.querySelector('#profile');
const message = document.querySelector('#message');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = usernameInput.value.trim();

    if (!username) {
        message.textContent = 'Please enter a username.';
        return;
    }

    const requestUrl =
        'https://api.github.com/users/' +
        encodeURIComponent(username);

    const xhr = new XMLHttpRequest();

    message.textContent = 'Loading profile...';
    profile.style.display = 'none';

    xhr.open('GET', requestUrl);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {

            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);

                document.querySelector('#avatar').src =
                    data.avatar_url;

                document.querySelector('#name').textContent =
                    data.name || data.login;

                document.querySelector('#login').textContent =
                    '@' + data.login;

                document.querySelector('#bio').textContent =
                    data.bio || 'No bio available';

                document.querySelector('#repos').textContent =
                    data.public_repos;

                document.querySelector('#followers').textContent =
                    data.followers;

                document.querySelector('#following').textContent =
                    data.following;

                document.querySelector('#profileLink').href =
                    data.html_url;

                message.textContent = '';
                profile.style.display = 'block';

            } else if (xhr.status === 404) {
                message.textContent =
                    'User not found! Check the username.';
            } else {
                message.textContent =
                    'Something went wrong. Try again later.';
            }
        }
    };

    xhr.onerror = function() {
        message.textContent =
            'Network error. Please check your connection.';
    };

    xhr.send();
});
