/* eslint-disable no-literal-string */

import { Page } from '@/widgets/Page';
import '../styles/AboutPage.scss';
import photo from '../images/photo_me.jpg'
import StampImage from './StampImage';

const AboutPage = () => {
   
    return <Page data-testid="AboutPage">
    
    <div className="dossier-background">
            <div className="dossier-paper">
                <header className="dossier-header">
                    <h1 className="classified-stamp">MOST WANTED</h1>
                </header>

                <div className="dossier-main-content">
                    <div className="left-panel">
                        <div className="photo-container">
                            <StampImage src={photo} alt='Serhii Malakhov' />
                        </div>
                        <section className="dossier-section">
                            <h2 className="section-title">[ CONTACTS ]</h2>
                            <p><strong>Address:</strong> Krakow, Poland, 31-940 </p>
                            <p><strong>Phone:</strong> (+48) 795 547 225 </p>
                            <p><strong>Email:</strong> serzhmalakhov02@gmail.com </p>
                            <p><strong>Profile:</strong> <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">Linkedin</a> </p>
                        </section>

                        <section className="dossier-section">
                            <h2 className="section-title">[ LANGUAGES ]</h2>
                            <p>English - B1-B2 </p>
                            <p>Polish - B1 </p>
                            <p>Ukrainian - Native </p>
                            <p>Russian - C1 </p>
                        </section>

                        <section className="dossier-section">
                            <h2 className="section-title">[ EDUCATION ]</h2>
                            <p><strong>Institution:</strong> Kharkiv Computer Technology College NTU 2017-2021 </p>
                            <p><strong>Degree:</strong> Software Development (Professional Junior Bachelor) </p>
                            <p><strong>ALevel Frontend course:</strong> Completion of courses, including OOP, Asp.Net, Databases, Basic JavaScript, and Advanced Frontend. </p>
                            <p><strong>Advanced Frontend course:</strong> During the course I've studied such technologies as Redux, all types of tests (Screenshot, e2e, unit, integration tests), i18n- for have multi language support, JSON server, and built the CV-Project as my final work. </p>
                        </section>
                    </div>

                    <div className="right-panel">
                        <section className="dossier-section subject-info">
                            <h2 className="section-title">[ SUBJECT FILE: MALAKHOV, SERHII ]</h2>
                            <p><strong>Name:</strong> Serhii Malakhov</p>
                            <p><strong>Role:</strong> Frontend Developer</p>
                            <p><strong>Experience:</strong> 3 years of experience specializing in React web applications.</p>
                        </section>
                        
                        <section className="dossier-section">
                            <h2 className="section-title">[ OVERVIEW & CORE COMPETENCIES ]</h2>
                            <ul>
                                <li>Developing scalable applications in React using JavaScript and TypeScript.</li>
                                <li>Experienced with Ant Design components library.</li>
                                <li>Experienced with CEO and accessibility best practices.</li>
                                <li>Use AI for increase performance.</li>
                                <li>Experience working with automated testing, CI/CD, code generation, and documentation.</li>
                                <li>Implementing applications to high code quality standards.</li>
                                <li>Working in Agile/Scrum environments and effective team collaboration.</li>
                                <li>Backend experience: Node.js, C#, C++ open to development towards FullStack.</li>
                            </ul>
                        </section>

                        <section className="dossier-section">
                            <h2 className="section-title">[ SKILLS ]</h2>
                            <p>React/React Native, Redux/Jotai, Typescript/JavaScript, Node.js, Next.js, Ant Design, Cypress/Playwright, C#, C++, Figma/PixelPerfect.</p>
                        </section>
                        <div className="job-history-section">
                        <section className="dossier-section">
                            <h2 className="section-title">[ WORK EXPERIENCE ]</h2>
                            <div className="job-entry">
                                <h3>Frontend developer - Superfund Technologies, Krakow (04/2022 - 02/2025)</h3>
                                <p>Single-handedly architected and developed a comprehensive cryptocurrency trading platform's admin website from the ground up, while also contributing to the collaborative development of its mobile application. The admin website, built entirely from scratch, served as the nerve center for monitoring trading activities, managing user accounts, and overseeing platform security.</p>
                                <ul>
                                    <li>Implemented Jotai for state management.</li>
                                    <li>Designed and implemented real-time market data visualization, trade monitoring systems, and robust user management interfaces.</li>
                                    <li>Maintained code quality through comprehensive testing strategies using Cypress and Playwright, achieving 90%+ test coverage across critical components.</li>
                                    <li>Worked within an agile team structure, participating in daily stand-ups, sprint planning, and retrospectives while managing feature branches and pull requests through Git.</li>
                                </ul>
                                 <p> <strong>Contributed</strong> to the React Native mobile application that provided users with seamless cryptocurrency trading capabilities.</p>
                                  <ul>
                                    <li>Used Redux, Redux Saga, Redux Toolkit</li>
                                    <li>Implemented Lightweight-charts library to display charts on currency preview tab + contributed in improvement of main chart with dynamic data</li>
                                     <li>Worked with libraries like react-native-mmkv, lightweight-charts   , react-native-device-info</li>
                                </ul>
                            </div>
                              <div className="job-entry">
                                <h3>Frilance Projects</h3>
                                <p>During last year finished few frilance project using HTML CSS Javascript. </p>
                                 <ul>
                                    <li>Used best CEO practices</li>
                                    <li>Developed a custom, static website for a small e-commerce brand, focusing on clean HTML5 and CSS3 to ensure fast load times and a seamless user experience</li>
                                </ul>
                            </div>
                            <div className="job-entry">
                                <h3>Support Engineer - ABCloudZ, Kharkiv (02/2021 - 03/2022)</h3>
                                <p>First-line Support Engineer, handling customer support tickets and monitoring alerts for a complex data migration platform. Performed initial technical analysis and troubleshooting, while creating escalation tasks for the development team. Maintained efficient communication between customers and technical teams, ensuring timely resolution of reported issues and high customer satisfaction levels.</p>
                            </div>
                        </section>
                        </div>
                    </div>
                </div>
                
                <footer className="dossier-footer">
                    <p>I consent to the processing of my personal data for recruitment purposes, as well as for future recruitment, in accordance with Article 6(1)(a) of the Regulation (EU) 2016/679 of the European Parliament and of the Council of April 27, 2016 on the protection of individuals with regard to the processing of personal data and on the free movement of such data and repealing Directive 95/46/EC (General Data Protection Regulation).</p>
                </footer>
            </div>
        </div>
    </Page>;
};

export default AboutPage;
