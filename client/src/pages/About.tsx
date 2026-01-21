import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5 relative">
          <div className="sticky top-8">
            <div className="relative">
              <img 
                src="/images/keenan-portrait.jpg" 
                alt="Keenan Sands" 
                className="w-full h-auto rounded-sm object-cover max-h-96"
              />
            </div>
          </div>
        </div>
        
        <div className="md:col-span-7 space-y-8">
          <h2 className="text-3xl font-serif font-bold border-b border-border/50 pb-4">About Me</h2>
          
          <div className="prose prose-stone prose-lg text-foreground/90 font-serif space-y-4">
            <p>
              I'm never entirely sure how to talk about myself, nor do I make it easy for myself. To me, it means to compress one's entire existence into a handful of tidy paragraphs: you begin editing your own life, deciding which parts are relevant, which parts are merely decoration, and which parts make you sound like a person worth paying attention to. It's a kind of tug-of-war. Ultimately, I want to be sincere, but at the same time I want to be impressive, or at least persuasive in the sense that I am, in fact, living a life, and that by the end of this I will have proven that I am, by some definition, unique.
            </p>
            <p>
              I think what I struggle with most is the feeling that writing about myself is akin to describing a fictional character loosely based on me, written by someone who isn't convinced I'm all that compelling. Still, I suppose the polite thing is to try.
            </p>
            <p className="font-semibold text-foreground mt-6">
              Some stark and unembellished facts, important or otherwise:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Born in London, January 1998.</li>
              <li>Raised in a single-parent household.</li>
              <li>Still in London; I simultaneously feel trapped and entirely at home here.</li>
              <li>I wake up around 7:15am.</li>
              <li>Some mornings start with a mocha.</li>
              <li>A recent small thing that made me unreasonably annoyed: being in a crowd.</li>
              <li>Lastly, one day I hope to write something that doesn't make me nervous and uneasy to talk about.</li>
            </ul>
          </div>

          <div className="bg-secondary/30 p-6 rounded-sm border border-border/50">
            <h3 className="font-mono text-sm font-bold uppercase tracking-wider mb-4 text-primary">Select Publications</h3>
            <ul className="space-y-2 font-serif text-sm">
              <li className="flex justify-between border-b border-border/30 pb-1">
                <span>LISP Finalist</span>
                <span className="text-muted-foreground">2025</span>
              </li>
              <li className="flex justify-between border-b border-border/30 pb-1">
                <span>FlashFiction Magazine</span>
                <span className="text-muted-foreground">2026</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
