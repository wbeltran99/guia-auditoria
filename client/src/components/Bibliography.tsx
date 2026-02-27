import { ExternalLink } from "lucide-react";

interface BibliographyItem {
  id: number;
  author: string;
  title: string;
  year: number;
  source: string;
}

interface BibliographyProps {
  items: BibliographyItem[];
}

export function Bibliography({ items }: BibliographyProps) {
  return (
    <section className="py-12 md:py-16 bg-secondary/30 rounded-lg">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Bibliografía
        </h2>
        <div className="space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="border border-border rounded-lg p-5 bg-card hover:shadow-md transition-shadow"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm">
                  {item.id}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {item.author} ({item.year})
                  </p>
                  <a
                    href={item.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                  >
                    Ver fuente
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
