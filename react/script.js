<!DOCTYPE html>
<html lang="ru">
  <head>
  <meta charset="UTF-8">
  <script src="vendor/react.development.js"></script>
<script src="vendor/react-dom.development.js"></script>
<script src="vendor/babel.min.js"></script>
<link rel="stylesheet" href="css/style.css">
  <script src="data.js"></script>
  <title>Новости</title>
</head>
<body>
<div id="root"></div>
<script type="text/babel">
    const container = document.getElementById('root');
    const root = ReactDOM.createRoot(container);
    root.render(<App articlesData={articlesData}/>);

    function App({articlesData}) {
      const [firstArticle, secondArticle] = articlesData;
      return (
        <section className="blog">
          <h2>Новости</h2>
          <Article content={firstArticle} />
          <Article content={secondArticle} isReverse />
        </section>
      );
    }

    function Article({content, isReverse}) {
      const {title, from, to, img: src, alt, text} = content;
      const formatDate = (date) => new Date(date).toLocaleDateString('ru', {
        day: 'numeric',
        month: 'long',
      });

      const isOpen = true;
      // Добавьте в выражение для вычисления переменной articleClassName условие добавления класса short в зависимости от значения переменной isOpen
      const articleClassName = `blog-article ${isReverse ? 'reverse' : ''} short`;
      return (
        <article className={articleClassName}>
          <div className="blog-article-content">
            <p className="blog-article-date">
              <time dateTime={from}>{formatDate(from)}</time> -{' '}
              <time dateTime={to}>{formatDate(to)}</time>
            </p>
            <h3>{title}</h3>
            <p className="blog-article-description">{text}</p>
            <button className="more" type="button">Читать дальше</button>
          </div>
          <img className="blog-article-img" src={src} alt={alt} width="235" height="260" />
        </article>
      );
    }
</script>
</body>
</html>
