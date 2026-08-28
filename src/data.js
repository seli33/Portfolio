export const profile = {
  name: 'Selina Maharjan',
  title: 'AI trainer | ML Engineer',
  tagline: 'Building intelligent systems that learn, reason, and make a real-world impact.',
  phone: '9810250305',
  email: 'selimaharjan33@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/selina-maharjan-25a67431b/',
    github: 'https://github.com/seli33',
  },
  about: [
    'I am  passionate about building practical, data-driven solutions. From conversational AI and RAG systems to end-to-end data pipelines and predictive models, I enjoy turning raw data into systems that people actually use.',
    'I have hands-on experience fine-tuning models, designing knowledge-graph-based learning systems, and facilitating AI workshops that help individuals and organizations adopt machine learning in their daily work.',
  ],
}

export const skills = [
  {
    category: 'Programming',
    items: ['Python', 'SQL', 'Git'],
  },
  {
    category: 'Data Science',
    items: ['NumPy', 'Pandas', 'Data Analysis', 'Matplotlib'],
  },
  {
    category: 'Data Engineering',
    items: ['Web Scraping', 'ETL Pipeline', 'Power BI'],
  },
  {
    category: 'Machine Learning & AI',
    items: ['Rasa', 'XGBoost', 'Prompt Engineering', 'RAG', 'LLMs', 'Fine-tuning', 'Naive Bayes', 'NLP'],
  },
]

export const projects = [
  {
    title: 'Nepal Job Market Analytics Pipeline',
    description:
      'Built an end-to-end data engineering pipeline that scrapes job postings with Python and BeautifulSoup, then performs exploratory data analysis before building interactive Power BI dashboards.',
    tech: ['Python', 'BeautifulSoup', 'Power BI', 'EDA'],
    links: {},
  },
  {
    title: 'RAG Chatbot',
    description:
      'Developed a retrieval-augmented generation chatbot with multi-intent handling and low-latency retrieval for fast, accurate question answering.',
    tech: ['RAG', 'LLM', 'Vector Retrieval'],
    links: {},
  },
  {
    title: 'Learning Path Generation with DAG-based Knowledge Graphs',
    description:
      'Built a learning path generation system using DAG-based knowledge graphs, combining NLP-based feature extraction, statistical similarity, and rule-based inference to construct personalized learning paths.',
    tech: ['Knowledge Graphs', 'NLP', 'Python'],
    links: {},
  },
  {
    title: 'Stress Prediction Model',
    description:
      'Built a stress prediction model using XGBoost paired with an LLM-based chatbot, providing personalized student well-being support.',
    tech: ['XGBoost', 'LLM', 'Python'],
    links: {},
  },
  {
    title: 'Spam Detection Model',
    description:
      'Developed a machine learning model to classify emails as spam or not using NLP techniques and algorithms such as Naive Bayes.',
    tech: ['NLP', 'Scikit-learn', 'Naive Bayes', 'Python'],
    links: {},
  },
]

export const experience = [
  {
    role: 'AI Trainer',
    company: 'Nepal Speakers Bureau',
    period: 'Apr 2026 – Present',
    points: [
      'Co-facilitated a 2-day AI workshop at Karuna Foundation.',
      'Co-facilitated a 3-day session on AI for Workplace Productivity at the National Inclusion Commission.',
      'Co-facilitated a 2-day AI workshop at Action for Nepal.',
    ],
  },
  {
    role: 'ML Intern',
    company: 'FuseMachines Nepal',
    period: 'Dec 2025 – Mar 2026',
    points: [
      'Gained hands-on experience with conversational AI development using Rasa.',
      'Explored prompt engineering techniques for optimizing LLM outputs.',
      'Fine-tuned machine learning models for domain-specific tasks, evaluated model performance, and applied optimization techniques.',
    ],
  },
]

export const education = [
  {
    degree: "Bachelor in Computer Science and Information Technology",
    school: "St. Xavier's College",
    period: '2026',
    detail: 'GPA 3.78',
  },
  {
    degree: 'High School (Class XII)',
    school: 'United Academy',
    period: '2021',
    detail: 'Science Stream',
  },
]

export const currentlyBuilding = [
  'RAG',
  'LLM applications',
  'AI agents',
  'data systems',
]

export const whatIDo = [
  {
    number: '01',
    title: 'Machine Learning',
    description:
      'Building and fine-tuning predictive models, evaluating performance, and applying optimization techniques for real-world tasks.',
  },
  {
    number: '02',
    title: 'Generative AI',
    description:
      'Designing retrieval-augmented generation and LLM applications that produce fast, accurate, intelligent responses.',
  },
  {
    number: '03',
    title: 'Data',
    description:
      'Turning raw data into insight through pipelines, web scraping, exploratory analysis, and clear visualization.',
  },
  {
    number: '04',
    title: 'AI Training',
    description:
      'Facilitating AI workshops and sessions that help individuals and organizations adopt machine learning in daily work.',
  },
]

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
