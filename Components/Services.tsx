import {
  Code,
  Globe,
  Brain,
  ShoppingCart,
  Database,
  Search,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Full Stack Development",
      description:
        "Modern web applications using React, Next.js, Node.js, and MongoDB.",
      icon: <Code size={32} />,
    },
    {
      title: "Website Development",
      description:
        "Business websites, portfolios, landing pages, and corporate websites.",
      icon: <Globe size={32} />,
    },
    {
      title: "AI Integration",
      description:
        "AI chatbots, automation workflows, and OpenAI-powered solutions.",
      icon: <Brain size={32} />,
    },
    {
      title: "Shopify Development",
      description:
        "Custom Shopify stores, WhatsApp checkout, and eCommerce solutions.",
      icon: <ShoppingCart size={32} />,
    },
    {
      title: "Database Solutions",
      description:
        "Firebase, MongoDB, and MySQL database design and integration.",
      icon: <Database size={32} />,
    },
    {
      title: "SEO Optimization",
      description:
        "Improve website rankings, performance, and Core Web Vitals.",
      icon: <Search size={32} />,
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Services I Offer
        </h2>

        <p className="text-center text-slate-400 mb-12">
          Helping businesses build modern digital products and grow online.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300"
            >
              <div className="text-purple-400 mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-slate-400">
                {service.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}