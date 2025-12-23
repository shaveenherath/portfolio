import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div>
      <Header />
      <main className="container">
        <h1>About / Resume</h1>

        <section>
          <h2>Profile</h2>
          <p>
            Final-year Electronic and Telecommunication Engineering undergraduate at the
            University of Moratuwa with hands-on experience in machine learning, deep
            learning, and AI-driven software development. Skilled in end-to-end model
            development, data preprocessing, model training, evaluation, and performance
            optimization.
          </p>
        </section>

        <section>
          <h2>Education</h2>
          <p>
            B.Sc. Honors in Engineering, Department of Electronic and Telecommunication
            Engineering, University of Moratuwa — CGPA 3.81/4.00 (after 6 semesters). Dean's
            List — 4 times.
          </p>
        </section>

        <section>
          <h2>Work Experience</h2>
          <p>
            <strong>AI Engineer Intern — Pekoe (Pvt) Ltd</strong> (Dec 2024 — Jul 2025)
          </p>
          <ul>
            <li>Research and developed AI models and end-to-end ML pipelines.</li>
            <li>Built automated data pipelines, benchmarking, optimization, and data refinement.</li>
            <li>Tools: Python, PyTorch, OpenCV, Git, Ubuntu.</li>
          </ul>
        </section>

        <section>
          <h2>Skills</h2>
          <p>
            Programming: Python, Java, C++, JavaScript. Machine Learning: PyTorch, TensorFlow,
            Hugging Face, OpenCV. Cloud: AWS. Version control: Git.
          </p>
        </section>

        <section>
          <h2>Research & Projects</h2>
          <p>See the Projects page for selected research and AI projects.</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
