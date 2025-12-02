import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Globe,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/SectionHeading";

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description:
      "We stay at the forefront of AI technology to deliver cutting-edge solutions that give our clients a competitive edge.",
  },
  {
    icon: Heart,
    title: "Client Success",
    description:
      "Your success is our success. We measure our achievements by the tangible results we deliver for your business.",
  },
  {
    icon: Users,
    title: "Accessible AI",
    description:
      "We believe every SME deserves access to AI technology, regardless of size or technical expertise.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards in everything we do, from development to client support.",
  },
];

const reasons = [
  "UK-based team with deep local market knowledge",
  "Proven track record with SMEs across diverse sectors",
  "End-to-end support from concept to deployment",
  "Competitive pricing tailored to SME budgets",
  "Ongoing maintenance and optimisation services",
  "Strong network of funding and innovation partners",
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary-foreground/10 text-primary-foreground mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Driving AI Innovation for UK SMEs
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              West Midlands Centre for AI and Innovation Ltd is a UK-based
              technology company dedicated to making AI accessible and practical
              for small and medium enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card border border-border rounded-2xl p-8 hover-lift shadow-card">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower SMEs across the UK and beyond with practical,
                affordable AI solutions that drive growth, efficiency, and
                innovation. We bridge the gap between cutting-edge technology
                and real-world business needs.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 hover-lift shadow-card">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading AI innovation partner for SMEs in the UK and
                Europe, creating a future where every business can harness the
                power of artificial intelligence to compete and thrive in the
                digital economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Values"
            title="What Drives Us"
            description="The principles that guide everything we do."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card border border-border rounded-2xl p-6 text-center hover-lift shadow-card animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-accent text-accent-foreground mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why SMEs Trust Us
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With years of experience working exclusively with small and
                medium enterprises, we understand your unique challenges and
                opportunities.
              </p>
              <ul className="space-y-4">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "50+", label: "Clients Served" },
                { value: "£2M+", label: "Funding Secured" },
                { value: "95%", label: "Client Satisfaction" },
                { value: "5+", label: "Years Experience" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-card border border-border rounded-2xl p-6 text-center hover-lift shadow-card animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <p className="text-3xl font-bold text-gradient mb-2">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expansion */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-6">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              UK-Based, Growing Globally
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Headquartered in the West Midlands, we're proud of our UK roots.
              As part of our growth strategy, we're expanding our services
              across Europe, bringing practical AI solutions to SMEs throughout
              the continent.
            </p>
            <Button asChild variant="default" size="lg">
              <Link to="/contact">
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
