import { renderArticles } from './articles.js';
import { renderHeader } from './header.js';
import { renderFooter } from './footer.js';

const showFeaturedArticle = true;

renderHeader();
renderFooter();
renderArticles(showFeaturedArticle);