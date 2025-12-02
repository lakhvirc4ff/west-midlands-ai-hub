import { Link } from "react-router-dom";
import {
  Brain,
  Cog,
  GraduationCap,
  FileText,
  ArrowRight,
  BarChart3,
  Eye,
  MessageSquare,
  Workflow,
  Zap,
  Users,
  BookOpen,
  Monitor,
  PoundSterling,
  FileCheck,
  Handshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/SectionHeading";

const services = [
  {
    icon: Brain,
    title: "Custom AI Development",
    description:
      "Build intelligent systems tailored to your business needs. From predictive analytics to computer vision, we develop AI solutions that solve real business problems.",
    features: [
      { icon: BarChart3, text: "Predictive Analytics & Forecasting" },
      { icon: Eye, text: "Computer Vision Solutions" },
      { icon: MessageSquare, text: "Natural Language Processing" },
      { icon: Brain, text: "Machine Learning Models" },
    ],
    color: "primary",
  },
  {
    icon: Cog,
    title: "Business Automation",
    description:
      "Streamline your operations and reduce manual work. We implement intelligent automation solutions that save time, reduce errors, and improve efficiency.",
    features: [
      { icon: MessageSquare, text: "Intelligent Chatbots" },
      { icon: Workflow, text: "Workflow Automation" },
      { icon: Zap, text: "Process Optimisation" },
      { icon: Cog, text: "System Integration" },
    ],
    color: "secondary",
  },
  {
    icon: GraduationCap,
    title: "AI Training for SMEs",
    description:
      "Empower your team with AI knowledge. Our practical training programmes help your staff understand and leverage AI technology effectively.",
    features: [
      { icon: Users, text: "Interactive Workshops" },
      { icon: Monitor, text: "Online Learning Modules" },
      { icon: BookOpen, text: "Corporate Upskilling" },
      { icon: GraduationCap, text: "Certification Programmes" },
    ],
    color: "primary",
  },
  {
    icon: FileText,
    title: "Funding Support",
    description:
      "Navigate the complex world of innovation funding. We help you identify opportunities, prepare applications, and maximise your chances of success.",
    features: [
      { icon: PoundSterling, text: "Innovate UK Grants" },
      { icon: FileCheck, text: "Council Funding Applications" },
      { icon: FileText, text: "Professional Bid Writing" },
      { icon: Handshake, text: "Partnership Facilitation" },
    ],
    color: "secondary",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary-foreground/10 text-primary-foreground mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Comprehensive AI Solutions for SMEs
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              From custom AI development to funding support, we provide
              end-to-end services to help your business thrive in the digital
              age.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                      service.color === "primary"
                        ? "bg-accent"
                        : "bg-secondary/20"
                    }`}
                  >
                    <service.icon
                      className={`h-7 w-7 ${
                        service.color === "primary"
                          ? "text-primary"
                          : "text-secondary"
                      }`}
                    />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <Button
                    asChild
                    variant={service.color === "primary" ? "default" : "teal"}
                    size="lg"
                  >
                    <Link to="/contact">
                      Request Service
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={feature.text}
                        className="bg-card border border-border rounded-xl p-5 hover-lift shadow-card animate-fade-up"
                        style={{ animationDelay: `${featureIndex * 100}ms` }}
                      >
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                            service.color === "primary"
                              ? "bg-accent"
                              : "bg-secondary/20"
                          }`}
                        >
                          <feature.icon
                            className={`h-5 w-5 ${
                              service.color === "primary"
                                ? "text-primary"
                                : "text-secondary"
                            }`}
                          />
                        </div>
                        <p className="font-medium text-foreground text-sm">
                          {feature.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Process"
            title="How We Work"
            description="A proven approach to delivering successful AI projects."
          />
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We learn about your business, challenges, and goals.",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "We develop a tailored plan aligned with your objectives.",
              },
              {
                step: "03",
                title: "Implementation",
                description:
                  "We build and deploy solutions with minimal disruption.",
              },
              {
                step: "04",
                title: "Support",
                description:
                  "We provide ongoing optimisation and maintenance.",
              },
            ].map((phase, index) => (
              <div
                key={phase.step}
                className="relative bg-card border border-border rounded-2xl p-6 hover-lift shadow-card animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-5xl font-bold text-muted/50">
                  {phase.step}
                </span>
                <h3 className="text-xl font-bold text-foreground mt-4 mb-2">
                  {phase.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and explore how our services can help
            your business grow.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
