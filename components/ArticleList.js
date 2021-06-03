import articleStyle from '../styles/Articles.module.css'

const ArticleList = ({ articles }) => {
    return (
        <div className={articleStyle.grid}>
            {articles.map((article) => (
                <h3>{article.title}</h3>
            ))}
        </div>
    )
}

export default ArticleList