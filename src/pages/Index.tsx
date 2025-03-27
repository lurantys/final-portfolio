import React, { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import AIInterests from "@/components/AIInterests";
import Contact from "@/components/Contact";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { fetchGitHubProjects } from "@/utils/fetchGitHubProjects";

const Index = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const githubData = await fetchGitHubProjects();
        setProjects(githubData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Intersection Observer for section animations
    const sections = document.querySelectorAll('.section-fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      <NavBar />

      <main className="container mx-auto px-4 py-8 max-w-5xl mt-12"> {/* Added margin-top to main */}
        <Hero />

        <div className="space-y-28 my-24">
          <section id="projects" className="section-fade-in">
            <Projects projects={projects} loading={loading} />
          </section>

          <section id="ai" className="section-fade-in">
            <AIInterests />
          </section>

          <section id="contact" className="section-fade-in">
            <Contact />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
