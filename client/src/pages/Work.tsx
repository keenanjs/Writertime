import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const works = [
  {
    title: "Obituaries",
    year: "2026",
    type: "Flash Fiction",
    status: "Published",
    publication: "Flash Fiction Magazine",
    link: "https://flashfictionmagazine.com/blog/2026/01/18/obituaries/",
    description: "When obituaries begin writing themselves, a town discovers that some truths cannot be erased—only accepted."
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
            <div className="relative group flex-1 text-center">
              <button className="w-full px-0 py-2 font-mono uppercase text-xs tracking-wider text-foreground hover:text-primary transition-colors">
                Unpublished
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 mt-0 w-40 bg-background border border-border/50 rounded-sm shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {categories.map((cat) => (
                  <a
                    key={cat.value}
                    href={`#${cat.value}`}
                    className="block px-4 py-2 text-sm font-mono uppercase tracking-wider text-foreground hover:bg-primary/10 hover:text-primary transition-colors first:rounded-t-sm last:rounded-b-sm"
                  >
                    {cat.label}
                  </a>
                ))}
              </div>
            </div>
          </TabsList>
          
          <TabsContent value="published" className="mt-0">
            <div className="grid md:grid-cols-2 gap-6">
              {works.filter(w => w.status === "Published").map((work, index) => (
                <WorkCard key={index} work={work} />
              ))}
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
          <a href={work.link} className="after:absolute after:inset-0">
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
