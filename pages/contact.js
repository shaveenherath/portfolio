import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div>
      <Header />
      <main className="container">
        <h1>Contact</h1>
        <p>If you'd like to get in touch for opportunities, please email: <strong>your-email@example.com</strong></p>
        <p>Or link to LinkedIn / GitHub here.</p>
      </main>
      <Footer />
    </div>
  )
}
