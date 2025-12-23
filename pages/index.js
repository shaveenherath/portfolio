import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

const projects = [
  {
    title: 'Multi-Modal RAG Chatbot System',
    desc: 'RAG system for PDFs with vector DB and LLMs. FastAPI, Pinecone, Docker, AWS.',
  },
  {
    title: 'Transformer Management System',
    desc: 'Full-stack platform for transformer inspection, anomaly detection, and records.',
  },
]

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container">
        <section className="hero">
          <h1>Final-year Electronic & Telecommunication Engineering undergraduate</h1>
          <p>
            Hands-on experience in machine learning, deep learning, and AI-driven software
            development. Skilled in end-to-end model development, data pipelines, and
            production integration. Seeking AI Engineer / Software Engineer roles.
          </p>
          <p>
            <Link href="/projects" className="button">View Projects</Link>
            &nbsp;
            <Link href="/about" className="button outline">About / Resume</Link>
          </p>
        </section>

        <section>
          <h2>Selected Projects</h2>
          <div className="grid">
            {projects.map((p) => (
              <article key={p.title} className="card">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
