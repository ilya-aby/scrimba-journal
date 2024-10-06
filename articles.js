import { articles } from './article-data.js';

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export function renderArticles(showFeatured) {
  const articleContainer = document.querySelector('.article-container');
  const articleHtml = articles.map((article, index) => {
    return `
    <article class="${(showFeatured && article.featured) ? 'featured-article' : ''}">
      <img src="${article.imageUrl}" alt="${article.imageAlt}">
      <time datetime="${article.date}">${formatDate(article.date)}</time>
      <h1><a href="#">${article.title}</a></h1>
      <p>${article.body}</p>
    </article>
    `
  }).join('');
  articleContainer.innerHTML = articleHtml;
}