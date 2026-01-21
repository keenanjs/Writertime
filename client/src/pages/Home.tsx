import Layout from "@/components/Layout";
import { Link } from "wouter";
import { ArrowRight, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";

const storyExcerpts = [
  {
    id: 4,
    title: "Renovations",
    excerpt: "I've been watching the walls dissolve for three weeks now. Not dramatically – they simply become less certain of themselves each morning. My neighbour insists it's just condensation, but I've seen the plaster develop anxiety.",
    type: "Flash Fiction",
    theme: "Surrealism & Decay"
  },
  {
    id: 1,
    title: "I Woke Up Especially Early for This",
    excerpt: '"Remember when we first moved here?" Sarah asked finally. "You said you\'d never been anywhere so quiet it hurt your ears."\nI smiled despite everything. "And you said I\'d get used to it."\n"Did you?"',
    type: "Flash Fiction",
    theme: "Loss & Longing"
  },
  {
    id: 2,
    title: "Obituaries",
    excerpt: "The obituaries started writing themselves last March. They appeared overnight, without warning. Stark and unembellished. No flowered eulogies. No gentle remembrances. Just lives, stripped to the bone.",
    type: "Flash Fiction",
    theme: "Mortality & Meaning"
  },
  {
    id: 3,
    title: "Against Immortality: Why Nothing Lasts and Why That's Enough",
    excerpt: "I had genuinely thought consciousness was something I could control through pure force of will—that if pushed to the brink, say by injury or violence, I could simply choose to hang on, to keep breathing, to remain aware through sheer determination. The restaurant floor proved me catastrophically wrong. Consciousness, it turned out, wasn't a matter of willpower... It was a biological function as vulnerable to failure as any other, and no amount of resolve could override my body's decision to simply... stop.",
    type: "Essay",
    theme: "Consciousness & Mortality"
  }
];

export default function Home() {
  const [activeExcerpt, setActiveExcerpt] = useState(0);

  useEffect(() => {
    // Setup scroll animations
    const observerOptions = {
      threshold: 0.05,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          entry.target.classList.add("fade-in-up");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const scrollElements = document.querySelectorAll("[data-scroll]");
    scrollElements.forEach((el) => {
      el.classList.add("opacity-0");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(80px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        [data-scroll] {
          transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        [data-scroll].animate-in.fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        [data-scroll]:nth-child(odd).animate-in {
          animation: fadeInLeft 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        [data-scroll]:nth-child(even).animate-in {
          animation: fadeInRight 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>

      <div className="space-y-0">
        {/* Hero Section with Subtle Textured Background */}
        <section 
          data-scroll
          className="relative -mx-8 md:-mx-12 px-8 md:px-12 py-20 md:py-28 overflow-hidden rounded-sm"
          style={{
            backgroundImage: 'url(/images/hero-birch-tree.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            opacity: 0.05
          }}
        >
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/55 to-background/60" />
          
          <div className="relative z-10 max-w-3xl space-y-6">

            <h2 className="text-4xl md:text-5xl font-serif leading-tight text-foreground">
              Stories that linger in the margins of ordinary life.
            </h2>
            
            <p className="text-lg text-foreground/80 font-serif max-w-2xl leading-relaxed">
              Explore the archive of Keenan Sands' work—where loss, isolation, and the surreal collide with the everyday, all presented in a style sitting somewhere between a public service announcement and a breakdown scribbled on an air sickness bag.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/work">
                <span className="inline-flex items-center gap-2 px-6 py-3 font-mono text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5" style={{backgroundColor: '#2C2C2C', color: '#ffffff'}}>
                  Explore the Archive <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 px-6 py-3 font-mono text-sm uppercase tracking-wider transition-colors cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5" style={{backgroundColor: '#2C2C2C', color: '#ffffff'}}>
                  Get in Touch
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Excerpt Carousel */}
        <section className="relative bg-background py-12 md:py-16 px-8 md:px-12 space-y-6 scroll-section" data-scroll>
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-mono font-bold uppercase tracking-wider">Featured Excerpt</h3>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveExcerpt((prev) => (prev - 1 + storyExcerpts.length) % storyExcerpts.length)}
                className="p-2 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                ←
              </button>
              <button
                onClick={() => setActiveExcerpt((prev) => (prev + 1) % storyExcerpts.length)}
                className="p-2 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                →
              </button>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-secondary/50 to-secondary/20 p-8 md:p-12 border border-border/50 rounded-sm min-h-72 flex flex-col justify-between group hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
              <BookOpen className="w-12 h-12 text-primary" />
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-primary font-bold">
                  {storyExcerpts[activeExcerpt].theme}
                </span>
                <h4 className="font-serif text-2xl font-semibold text-foreground">
                  {storyExcerpts[activeExcerpt].title}
                </h4>
              </div>
              <p className="text-lg md:text-xl font-serif italic leading-relaxed text-foreground/85 whitespace-pre-line">
                "{storyExcerpts[activeExcerpt].excerpt}"
              </p>
            </div>
            
            <div className="flex justify-between items-end pt-6 border-t border-border/30 mt-6">
              <span className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
                {storyExcerpts[activeExcerpt].type}
              </span>
              <Link href="/work">
                <span className="inline-flex items-center gap-1 text-primary font-mono text-xs uppercase tracking-wider hover:gap-2 transition-all cursor-pointer">
                  Read More <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </div>
          </div>

          <div className="flex justify-center gap-2">
            {storyExcerpts.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveExcerpt(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === activeExcerpt ? "bg-primary w-6" : "bg-border"
                }`}
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative -mx-8 md:-mx-12 px-8 md:px-12 py-12 rounded-sm border border-primary/20 text-center space-y-6 scroll-section overflow-hidden" data-scroll style={{
          backgroundImage: 'url(/images/color-field-decay.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="absolute inset-0 bg-background" style={{opacity: 0.5, minHeight: '100%'}} />
          <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-serif">
            Enter the archive.
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/work">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5">
                View the Archive <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 px-6 py-3 font-mono text-sm uppercase tracking-wider transition-colors cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5" style={{backgroundColor: '#404040', color: '#ffffff'}}>
                Get in Touch
              </span>
            </Link>
          </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
