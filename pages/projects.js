import Header from '../components/Header'
import Footer from '../components/Footer'

const projects = [
  {
    title: 'Multi-Modal RAG Chatbot System',
    date: '2024',
    details:
      'Designed and deployed an end-to-end RAG system that ingests PDFs, builds a vector DB, and answers queries using LLMs. Tech: FastAPI, OpenAI, Pinecone, React, Docker, AWS.',
  },
  {
    title: 'Transformer Management System',
    date: '2023',
    details:
      'Full-stack platform for power transformer inspection workflows, thermal image comparison, and anomaly detection. Tech: React, Spring Boot, AI image analysis.',
  },
  {
    title: 'Elephant Tracking System (YOLOv8)',
    date: '2022',
    details: 'Infrared video-based detection and tracking for wildlife monitoring.',
  },
]

export default function Projects() {
  return (
    <div>
      <Header />
      <main className="container">
        <h1>Projects</h1>
        <div className="grid">
          {projects.map((p) => (
            <article key={p.title} className="card project-card">
              <h3>{p.title}</h3>
              <small>{p.date}</small>
              <p>{p.details}</p>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
