import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const works = [
  {
    title: "Obituaries",
    year: "2026",
    type: "Flash Fiction",
    status: "Published",
    publication: "Flash Fiction Magazine",
    link: "https://flashfictionmagazine.com/blog/2026/01/18/obituaries/",
    description: "When obituaries begin writing themselves, a town discovers that some truths cannot be erased—only accepted."
  },
  {
    title: "Drug Binge",
    year: "2025",
    type: "Screenplay",
    status: "Unpublished",
    category: "screenplay",
    link: "/pdfs/drug-binge.pdf",
    description: "A darkly comedic tale of a party gone horribly wrong at a seedy motor lodge."
  },
  {
    title: "The Last Goodbye",
    year: "2025",
    type: "Screenplay",
    status: "Unpublished",
    category: "screenplay",
    link: "/pdfs/the-last-goodbye.pdf",
    description: "An elderly widower climbs a windswept cliff to scatter his wife's ashes and say his final goodbye."
  }
];

const categories = [
  { label: "Poems", value: "poem" },
  { label: "Flash", value: "flash" },
  { label: "Short", value: "short" },
  { label: "Novella", value: "novella" },
  { label: "Essays", value: "essay" },
  { label: "Screenplays", value: "screenplay" }
];

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("screenplay");

  return (
    <Layout>
      <div className="space-y-8">
        <div className="text-center border-b border-border/50 pb-4">
          <h2 className="text-3xl font-serif font-bold">The Archive</h2>
        </div>

        <Tabs defaultValue="published" className="w-full">
          <TabsList className="bg-transparent border-b border-border/50 w-full justify-between rounded-none h-auto p-0 mb-8">
            <TabsTrigger 
              value="published" 
              className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 py-2 font-mono uppercase text-xs tracking-wider flex-1 text-center"
            >
              Published
            </TabsTrigger>
            <TabsTrigger 
              value="unpublished" 
              className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 py-2 font-mono uppercase text-xs tracking-wider flex-1 text-center"
            >
              Unpublished
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="published" className="mt-0">
            <div className="grid md:grid-cols-2 gap-6">
              {works.filter(w => w.status === "Published").map((work, index) => (
                <WorkCard key={index} work={work} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="unpublished" className="mt-0">
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setSelectedCategory(cat.value)}
                    className={`px-4 py-2 font-mono uppercase text-xs tracking-wider rounded-sm border transition-all ${
                      selectedCategory === cat.value
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background text-foreground border-border/50 hover:border-primary/50"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {works
                .filter(w => w.status === "Unpublished" && w.category === selectedCategory)
                .map((work, index) => (
                  <WorkCard key={index} work={work} />
                ))}
              {works.filter(w => w.status === "Unpublished" && w.category === selectedCategory).length === 0 && (
                <div className="col-span-2 text-center py-12 text-muted-foreground font-mono text-sm">
                  No {categories.find(c => c.value === selectedCategory)?.label.toLowerCase()} yet. Check back soon.
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}

function WorkCard({ work }: { work: any }) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border/60 bg-card hover:-translate-y-1 overflow-hidden relative">
      <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
        {work.status === "Published" ? (
          <img src="/images/stamp-published.png" alt="Published" className="w-16 h-auto rotate-12" />
        ) : (
          <img src="/images/stamp-draft.png" alt="Draft" className="w-16 h-auto -rotate-6" />
        )}
      </div>
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="font-mono text-xs uppercase tracking-wider rounded-sm border-primary/30 text-primary">
            {work.type}
          </Badge>
          <span className="font-mono text-xs text-muted-foreground">{work.year}</span>
        </div>
        <CardTitle className="font-serif text-xl leading-tight group-hover:text-primary transition-colors">
          <a href={work.link} target={work.status === "Unpublished" ? "_blank" : undefined} rel={work.status === "Unpublished" ? "noopener noreferrer" : undefined} className="after:absolute after:inset-0">
            {work.title}
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {work.description}
        </p>
        {work.publication && (
          <div className="text-xs font-mono text-foreground/70 border-t border-border/40 pt-2">
            Published in <span className="font-bold">{work.publication}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
