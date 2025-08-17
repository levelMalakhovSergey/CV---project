
import { Page } from '@/widgets/Page';
import "../styles/CowerLetter.css"
const CoverLetter = () => {
  return (
    <div className="cover-letter">
      
      {/* Header Section with personal information */}
      <header className="cover-letter-header">
        <h1>Serhii Malakhov</h1>
        <div className="contact-info">
          <a href="tel:+48795547225">+48 795 547 225</a>
          <span className="separator">|</span>
          <a href="mailto:serzhmalakhov02@gmail.com">serzhmalakhov02@gmail.com</a>
        </div>
      </header>

      {/* Main Body of the Cover Letter */}
      <main className="cover-letter-body">
        <p>
          I am writing to express my strong interest in the Frontend Developer position at your company. My three years of experience specializing in React-based web applications, coupled with my proven ability to deliver high-quality, scalable interfaces, make me a strong candidate for this role.
        </p>
        <p>
          At Superfund Technologies, I single-handedly architected and developed the admin website for a cryptocurrency trading platform, managing the entire development lifecycle and implementing key features like real-time market data visualization and robust user management. I also contributed to the React Native mobile application, working within an agile team. My experience with Jotai, Cypress, and Playwright ensures I can build performant and well-tested applications.
        </p>
        <p>
          My background also includes experience as a Support Engineer, where I honed my problem-solving and communication skills. My education in Software Development and specialized frontend training further solidify my technical foundation.
        </p>
        <p>
          I am eager to discuss how my skills can benefit your team. Thank you for your consideration.
        </p>
      </main>

      {/* Footer / Closing Section */}
      <footer className="cover-letter-footer">
        <p>Sincerely,</p>
        <p className="signature">Serhii Malakhov</p>
      </footer>
      
    </div>
  );
};
const CowerLetterPage = () => {
  
    return <Page data-testid="CowerLetterPage">
        <div className="app-container">
      <CoverLetter />
    </div>
    </Page>;
};

export default CowerLetterPage;
