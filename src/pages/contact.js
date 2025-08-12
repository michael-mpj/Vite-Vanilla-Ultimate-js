export default function ContactPage() {
  return `
    <section>
      <h2>Contact</h2>
      <form id="contact-form">
        <input name="name" placeholder="Your name" required />
        <input name="email" type="email" placeholder="Your email" required />
        <textarea name="message" placeholder="Your message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  `
}
