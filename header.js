export function renderHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
        <div class="logo-lockup">
            <img src="images/logo.png" alt="logo">
            <h3>My learning journal</h3>
        </div>
        <div class="nav-links">
            <a href="/">Home</a>
            <a href="about-me.html">About Me</a>
        </div>
    `;
    document.body.prepend(header);
}