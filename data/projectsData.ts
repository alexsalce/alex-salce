interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Machine Learning Optimization',
    description: `A dive into techniques and statistical background in machine learning optimization, with focus upon stochastic gradient descent, variance reduction techniques, and the bias-variance tradeoff`,
    imgSrc: '/static/files/ml_optimization/images/ml_opt_link.gif',
    href: 'blog/mloptimization',
  },
  {
    title: 'Machine Learning and NBA Statistics',
    description: `Applicaitons of Logistic Regression and LDA for analysis of player position classification, using a single-game NBA player statline to predict what position they are playing.`,
    imgSrc: '/static/files/sml_nba/smlnbalink.png',
    href: '/blog/sml',
  },
  {
    title: 'Statistical Design of Experiment - Free Throw Shooting',
    description: `A free throw "routine" factor screening using factorial experimental design.`,
    imgSrc: '/static/files/doe/ftlink.png',
    href: '/blog/doe',
  },
  {
    title: 'Natural Language Processing Sentiment Classifier',
    description: `Movie review sentiment classification using Python.`,
    imgSrc: '/static/files/nlp/images/nlp_link.png',
    href: '/blog/nlp',
  },
]

export default projectsData
