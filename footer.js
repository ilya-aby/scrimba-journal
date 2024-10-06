export function renderFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <h4>My Learning Journal</h4>
        <p>Copyright ©2024</p>
    `;
    document.body.appendChild(footer);
}