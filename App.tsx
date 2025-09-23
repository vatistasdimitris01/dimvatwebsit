
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CardList from './components/CardList';
import Footer from './components/Footer';
import { portfolioData } from './constants';
import BannerCarousel from './components/BannerCarousel';
import Modal from './components/Modal';

const AboutSection: React.FC = () => (
    <section id="about" className="bg-white py-12 md:py-20 px-4 md:px-6 scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal">About Me</h2>
             <p className="font-sans-text text-lg md:text-xl mt-8 leading-relaxed">
                {portfolioData.personalInfo.bio}
             </p>
        </div>
    </section>
);

const PrivacyContent: React.FC = () => (
    <div className="font-sans-text text-base md:text-lg leading-relaxed space-y-4 text-gray-700">
        <p><strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <p>
            Welcome to the portfolio of Dimitris Vatistas. Your privacy is important to me. This Privacy Policy explains how I handle information on this website.
        </p>
        <h3 className="text-2xl font-medium pt-4">Information I Collect</h3>
        <p>
            This website is a personal portfolio designed to showcase my work. As such, I do not actively collect any personal data from visitors. You can browse my projects and learn about my experience without providing any personal information.
        </p>
        <p>
            If you choose to contact me via the provided email address (<a href={`mailto:${portfolioData.connect.email}`} className="underline">{portfolioData.connect.email}</a>), I will use your email address solely for the purpose of responding to your inquiry. Your email address will not be sold, shared with third parties, or used for marketing purposes.
        </p>
        <h3 className="text-2xl font-medium pt-4">Third-Party Services</h3>
        <p>
            Please be aware that this website may be hosted on a third-party platform which may collect standard analytics data, such as your IP address, browser type, and pages visited. This data is used for statistical purposes and to maintain the security and functionality of the website.
        </p>
        <h3 className="text-2xl font-medium pt-4">Changes to This Policy</h3>
        <p>
            I may update this Privacy Policy from time to time. Any changes will be posted on this page.
        </p>
        <h3 className="text-2xl font-medium pt-4">Contact Me</h3>
        <p>
            If you have any questions about this Privacy Policy, you can contact me at: <a href={`mailto:${portfolioData.connect.email}`} className="underline">{portfolioData.connect.email}</a>.
        </p>
    </div>
);

const TermsContent: React.FC = () => (
    <div className="font-sans-text text-base md:text-lg leading-relaxed space-y-4 text-gray-700">
        <p><strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <p>
            Please read these Terms of Service ("Terms") carefully before using the personal portfolio website of Dimitris Vatistas (the "Service").
        </p>
        <h3 className="text-2xl font-medium pt-4">Acceptance of Terms</h3>
        <p>
            By accessing and using this Service, you accept and agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
        </p>
        <h3 className="text-2xl font-medium pt-4">Intellectual Property</h3>
        <p>
            All content presented on this website, including but not limited to text, graphics, logos, images, project descriptions, and code snippets, is the intellectual property of Dimitris Vatistas unless otherwise stated. This content is for showcase purposes only. You may not reproduce, distribute, modify, or create derivative works from any material on this website without my express prior written permission.
        </p>
        <h3 className="text-2xl font-medium pt-4">Links to Other Websites</h3>
        <p>
            My Service contains links to third-party websites or services that are not owned or controlled by me, such as my hosted projects. I have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that I shall not be responsible or liable, directly or indirectly, for any damage or loss caused by or in connection with the use of any such content or services available on or through any such websites.
        </p>
        <h3 className="text-2xl font-medium pt-4">Disclaimer</h3>
        <p>
            This website and its content are provided "as is" without warranty of any kind. I do not guarantee the accuracy, completeness, or timeliness of the information presented.
        </p>
        <h3 className="text-2xl font-medium pt-4">Changes</h3>
        <p>
            I reserve the right, at my sole discretion, to modify or replace these Terms at any time. I will try to provide notice of any changes by posting the new Terms on this page.
        </p>
        <h3 className="text-2xl font-medium pt-4">Contact Me</h3>
        <p>
            If you have any questions about these Terms, please contact me at: <a href={`mailto:${portfolioData.connect.email}`} className="underline">{portfolioData.connect.email}</a>.
        </p>
    </div>
);


const App: React.FC = () => {
  const [modalContent, setModalContent] = useState<{ title: string; content: React.ReactNode } | null>(null);

  const openModal = (type: 'privacy' | 'terms') => {
    if (type === 'privacy') {
      setModalContent({ title: 'Privacy Policy', content: <PrivacyContent /> });
    } else {
      setModalContent({ title: 'Terms of Service', content: <TermsContent /> });
    }
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="bg-white text-black font-sans">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <BannerCarousel />
        <CardList id="projects" title="Projects" projects={portfolioData.projects} />
      </main>
      <Footer onPrivacyClick={() => openModal('privacy')} onTermsClick={() => openModal('terms')} />
      
      {modalContent && (
        <Modal 
          isOpen={!!modalContent}
          onClose={closeModal}
          title={modalContent.title}
        >
          {modalContent.content}
        </Modal>
      )}
    </div>
  );
};

export default App;