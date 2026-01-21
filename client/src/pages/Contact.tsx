import Layout from "@/components/Layout";
import { Mail, PenTool } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div 
        className="min-h-screen relative"
        style={{
          backgroundImage: 'url(/images/contact-bg-birch.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-background/50" />
        
        <div className="max-w-2xl mx-auto space-y-12 py-12 relative z-10">
        <div className="bg-white p-8 rounded-sm shadow-sm border border-border/50 text-center space-y-4">
          <h2 className="text-3xl font-serif font-bold text-foreground">Get in Touch</h2>
          <p className="text-muted-foreground font-serif text-lg">
            Open for commissions, collaborations, and conversation.
          </p>
        </div>

        <div className="grid gap-8">
          <div className="bg-card p-8 rounded-sm shadow-sm border border-border/50 hover:border-primary/30 transition-colors text-center group">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-mono text-sm font-bold uppercase tracking-wider mb-2">Direct Contact</h3>
            <a 
              href="mailto:keenansandswriting@gmail.com" 
              className="text-2xl font-serif text-foreground hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary/30 pb-1"
            >
              keenansandswriting@gmail.com
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              For general inquiries, press, and everything else.
            </p>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-sm border border-border/50 hover:border-primary/30 transition-colors text-center group">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
              <PenTool className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-mono text-sm font-bold uppercase tracking-wider mb-2">Representation</h3>
            <p className="font-serif text-lg text-foreground">
              Currently seeking representation.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Please direct literary rights inquiries to the email above.
            </p>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
}
