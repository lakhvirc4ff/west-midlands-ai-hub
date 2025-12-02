import { Link } from "react-router-dom";
import {
  Brain,
  Cog,
  GraduationCap,
  FileText,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Building2,
  Factory,
  Stethoscope,
  ShoppingBag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { SectionHeading } from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const services = [
  {
    icon: Brain,
    title: "Custom AI Development",
    description:
      "Build intelligent systems tailored to your business needs, from predictive analytics to computer vision.",
  },
  {
    icon: Cog,
    title: "Business Automation",
    description:
      "Streamline operations with chatbots, workflow automation, and process optimisation solutions.",
  },
  {
    icon: GraduationCap,
    title: "AI Training for SMEs",
    description:
      "Upskill your team with practical AI workshops, online modules, and corporate training programmes.",
  },
  {
    icon: FileText,
    title: "Funding Support",
    description:
      "Navigate Innovate UK grants and council funding with expert bid writing and application support.",
  },
];

const testimonials = [
  {
    quote:
      "Midland AI transformed our customer service with an intelligent chatbot that handles 70% of enquiries automatically.",
    author: "Sarah Mitchell",
    role: "Operations Director",
    company: "TechStart Birmingham",
  },
  {
    quote:
      "Their funding support helped us secure £150k in Innovate UK grants. The team's expertise is unmatched.",
    author: "James Chen",
    role: "CEO",
    company: "GreenTech Solutions",
  },
  {
    quote:
      "The AI training programme gave our staff the confidence to embrace digital transformation.",
    author: "Emma Williams",
    role: "HR Manager",
    company: "Midlands Manufacturing Ltd",
  },
];

const sectors = [
  { icon: Building2, name: "Professional Services" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Stethoscope, name: "Healthcare" },
  { icon: ShoppingBag, name: "Retail" },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6 animate-fade-up">
              <Sparkles className="h-4 w-4" />
              AI Innovation for SMEs
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: "100ms" }}>
              Empowering SMEs with{" "}
              <span className="text-gradient">AI and Innovation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "200ms" }}>
              We design custom AI systems, automate business workflows, support
              funding applications, and deliver AI training programmes for
              businesses across the UK.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  Book Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Services"
            title="How We Help Your Business Grow"
            description="From AI development to funding support, we provide comprehensive solutions tailored to SMEs."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Funding247 Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-secondary/20 text-secondary mb-4">
                Featured Product
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Discover{" "}
                <span className="text-gradient">Funding247.online</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our AI-powered funding recommendation platform connects SMEs,
                academics, and innovation stakeholders with the perfect funding
                opportunities.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "AI-powered relevance scoring",
                  "Personalised funding matches",
                  "Partner search capabilities",
                  "Real-time opportunity alerts",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="teal" size="lg">
                <Link to="/funding247">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-hero rounded-2xl p-8 shadow-card">
                <div className="bg-card rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                      <Sparkles className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Funding247.online
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        AI Funding Platform
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: "Funding Opportunities", value: "2,500+" },
                      { label: "Success Rate", value: "78%" },
                      { label: "UK Partners", value: "150+" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="flex justify-between items-center py-2 border-b border-border last:border-0"
                      >
                        <span className="text-muted-foreground text-sm">
                          {stat.label}
                        </span>
                        <span className="font-semibold text-foreground">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Testimonials"
            title="Trusted by SMEs Across the UK"
            description="See what our clients say about working with us."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
                className="animate-fade-up"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Industries"
            title="Sectors We Serve"
            description="We work with businesses across diverse industries to implement AI solutions."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <div
                key={sector.name}
                className="bg-card border border-border rounded-xl p-6 text-center hover-lift shadow-card animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                  <sector.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="font-medium text-foreground">{sector.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how AI and automation can drive growth and efficiency
            for your SME.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Book Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
