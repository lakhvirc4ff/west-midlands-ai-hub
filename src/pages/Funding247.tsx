import { Link } from "react-router-dom";
import { Sparkles, Search, Target, Users, Bell, BarChart3, Shield, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/SectionHeading";
const features = [{
  icon: Target,
  title: "AI Relevance Scoring",
  description: "Our advanced AI analyses your profile and matches you with the most relevant funding opportunities, saving hours of manual searching."
}, {
  icon: Search,
  title: "Personalised Matches",
  description: "Receive tailored funding recommendations based on your industry, size, location, and innovation goals."
}, {
  icon: Users,
  title: "Partner Search",
  description: "Find potential collaborators for consortium bids and joint funding applications across the UK."
}, {
  icon: Bell,
  title: "Real-Time Alerts",
  description: "Never miss a deadline with instant notifications when new relevant funding opportunities are published."
}, {
  icon: BarChart3,
  title: "Application Tracking",
  description: "Monitor your funding pipeline with a comprehensive dashboard showing all your applications and their status."
}, {
  icon: Shield,
  title: "Secure & Confidential",
  description: "Your business data is protected with enterprise-grade security and never shared without consent."
}];
const steps = [{
  number: "1",
  title: "Create Your Profile",
  description: "Tell us about your organisation, sector, and innovation interests."
}, {
  number: "2",
  title: "AI Analysis",
  description: "Our AI processes thousands of funding opportunities against your profile."
}, {
  number: "3",
  title: "Receive Matches",
  description: "Get personalised funding recommendations ranked by relevance."
}, {
  number: "4",
  title: "Apply & Track",
  description: "Apply directly and track all your applications in one place."
}];
const stats = [{
  value: "2,500+",
  label: "Active Opportunities"
}, {
  value: "78%",
  label: "Match Success Rate"
}, {
  value: "£50M+",
  label: "Funding Identified"
}, {
  value: "150+",
  label: "UK Partners"
}];
export default function Funding247() {
  return <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary mb-6">
              <Sparkles className="h-4 w-4" />
              AI-Powered Platform
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Funding247.online
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
              The intelligent funding recommendation platform that connects
              SMEs, academics, and innovation stakeholders with the perfect
              funding opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <a href="https://funding247.online" target="_blank" rel="noopener noreferrer">Join Funding247.online<ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/contact">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(stat => <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-gradient">
                  {stat.value}
                </p>
                <p className="text-muted-foreground mt-1">{stat.label}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading badge="How It Works" title="Find Funding in Four Simple Steps" description="Our AI-powered platform simplifies the funding discovery process." />
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => <div key={step.number} className="relative bg-card border border-border rounded-2xl p-6 hover-lift shadow-card animate-fade-up" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-primary-foreground">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
                {index < steps.length - 1 && <div className="hidden md:block absolute top-10 -right-3 w-6 h-0.5 bg-border" />}
              </div>)}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeading badge="Features" title="Powerful Tools for Funding Success" description="Everything you need to find, apply for, and win funding." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => <div key={feature.title} className="bg-card border border-border rounded-2xl p-6 hover-lift shadow-card animate-fade-up" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Platform Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-accent text-accent-foreground mb-4">
                Platform Preview
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Funding Dashboard
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Access all your funding opportunities, applications, and
                matches in one intuitive dashboard designed for busy
                professionals.
              </p>
              <ul className="space-y-4">
                {["View all matched opportunities at a glance", "Track application deadlines and status", "Export reports for stakeholders", "Collaborate with team members", "Access historical funding data"].map(item => <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>)}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-hero rounded-2xl p-8 shadow-card">
                <div className="bg-card rounded-xl overflow-hidden shadow-lg">
                  {/* Mock Dashboard UI */}
                  <div className="bg-muted/50 px-4 py-3 border-b border-border flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/50" />
                    <div className="w-3 h-3 rounded-full bg-secondary/50" />
                    <div className="w-3 h-3 rounded-full bg-primary/50" />
                    <span className="ml-2 text-xs text-muted-foreground">
                      funding247.online/dashboard
                    </span>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-foreground">
                        Your Matches
                      </h4>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Updated today
                      </span>
                    </div>
                    {[{
                    title: "Innovate UK Smart Grant",
                    match: "95%",
                    deadline: "Dec 15"
                  }, {
                    title: "West Midlands AI Fund",
                    match: "89%",
                    deadline: "Jan 5"
                  }, {
                    title: "Digital Growth Programme",
                    match: "82%",
                    deadline: "Jan 20"
                  }].map(opportunity => <div key={opportunity.title} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                        <div>
                          <p className="font-medium text-foreground text-sm">
                            {opportunity.title}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Deadline: {opportunity.deadline}
                          </p>
                        </div>
                        <span className="text-sm font-semibold text-secondary">
                          {opportunity.match}
                        </span>
                      </div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Start Finding Funding Today
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of SMEs and organisations using Funding247 to
            discover and secure innovation funding.
          </p>
          <Button asChild variant="hero" size="xl">
            <a href="https://funding247.online" target="_blank" rel="noopener noreferrer">
              Join Funding247 Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>;
}