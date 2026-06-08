import {
  Bot,
  MessageSquare,
  Workflow,
  FileText,
  Search,
  Brain,
} from "lucide-react";

export default function AISolutions() {
  const solutions = [
    {
      title: "AI Chatbots",
      description:
        "Custom AI assistants for customer support, FAQs, and lead generation.",
      icon: <Bot size={32} />,
    },
    {
      title: "Smart Customer Support",
      description:
        "Automate customer queries and reduce response times using AI.",
      icon: <MessageSquare size={32} />,
    },
    {
      title: "Workflow Automation",
      description:
        "Automate repetitive business processes and increase productivity.",
      icon: <Workflow size={32} />,
    },
    {
      title: "AI Content Generation",
      description:
        "Generate blogs, product descriptions, and marketing content.",
      icon: <FileText size={32} />,
    },
    {
      title: "AI Search Systems",
      description:
        "Implement intelligent search and recommendation features.",
      icon: <Search size={32} />,
    },
    {
      title: "Custom AI Integrations",
      description:
        "Integrate OpenAI and other AI services into web applications.",
      icon: <Brain size={32} />,
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            AI Solutions I Can Build
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Modern AI-powered solutions designed to automate workflows,
            improve customer experiences, and help businesses grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300"
            >
              <div className="text-cyan-400 mb-4">
                {solution.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {solution.title}
              </h3>

              <p className="text-slate-400">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}