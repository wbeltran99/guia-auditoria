import { QuestionCard } from "@/components/QuestionCard";
import { Bibliography } from "@/components/Bibliography";
import { auditQuestions, bibliography } from "@/data/auditContent";
import { BookOpen, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-4 md:py-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              Guía de Auditoría e ISO
            </h1>
          </div>
          <p className="text-muted-foreground text-sm md:text-base">
            Respuestas extensas a preguntas fundamentales sobre auditoría, ISO y normativas
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Introduction Section */}
        <section className="mb-12 p-6 md:p-8 bg-card border border-border rounded-lg">
          <div className="flex gap-4 mb-4">
            <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                Contenido de esta Guía
              </h2>
              <p className="text-muted-foreground">
                Esta guía proporciona respuestas detalladas y extensas a 12 preguntas fundamentales sobre auditoría, 
                la Organización Internacional de Normalización (ISO), y normativas importantes como la Ley 1581 de 2012 
                en Colombia. Cada respuesta ha sido cuidadosamente investigada y redactada para proporcionar una comprensión 
                profunda de los conceptos clave en el campo de la auditoría y la gestión de calidad.
              </p>
            </div>
          </div>
        </section>

        {/* Questions Section */}
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Preguntas y Respuestas
          </h2>
          {auditQuestions.map((item) => (
            <QuestionCard
              key={item.id}
              id={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </section>

        {/* Bibliography Section */}
        <Bibliography items={bibliography} />

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>
            © 2026 Guía de Auditoría e ISO. Todos los derechos reservados.
          </p>
          <p className="mt-2">
            Esta guía ha sido compilada con fines educativos e informativos.
          </p>
        </footer>
      </main>
    </div>
  );
}
