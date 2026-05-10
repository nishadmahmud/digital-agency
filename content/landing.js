/** Landing page copy — single source of truth */

export const nav = {
  brand: "Digital Agency",
  links: [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ],
  cta: "Get Started",
};

export const hero = {
  titleBefore: "Grow Your Business with Powerful",
  titleHighlight: "Digital Solutions",
  subtitle:
    "We help brands scale through marketing, design & video editing",
  primaryCta: "Get Started",
  secondaryCta: "View Portfolio",
};

export const kpis = [
  { value: "500+", label: "Projects Done", accent: "blue" },
  { value: "98%", label: "Client Satisfaction", accent: "green" },
  { value: "50+", label: "Team Members", accent: "blue" },
];

export const servicesIntro = {
  title: "Our Services",
  subtitle:
    "Comprehensive digital solutions to help your business thrive in the modern marketplace",
};

export const services = [
  {
    id: "marketing",
    title: "Digital Marketing",
    description:
      "Boost your online presence with data-driven marketing strategies and campaigns.",
    link: "Learn More",
    icon: "chart",
    iconVariant: "blue",
  },
  {
    id: "video",
    title: "Video Editing",
    description:
      "Professional video production and editing to engage your audience effectively.",
    link: "Learn More",
    icon: "video",
    iconVariant: "green",
  },
  {
    id: "graphic",
    title: "Graphic Design",
    description:
      "Creative designs that capture your brand identity and resonate with customers.",
    link: "Learn More",
    icon: "palette",
    iconVariant: "blue",
  },
  {
    id: "web",
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies.",
    link: "Learn More",
    icon: "code",
    iconVariant: "green",
  },
];

export const highlightStats = [
  {
    headline: "24/7",
    subhead: "Support Available",
    description: "Round-the-clock assistance for your projects",
    accent: "blue",
  },
  {
    headline: "100%",
    subhead: "Client Retention",
    description: "Long-term partnerships built on trust",
    accent: "green",
  },
  {
    headline: "Fast",
    subhead: "Delivery Time",
    description: "Quick turnaround without compromising quality",
    accent: "blue",
  },
];

export const portfolioGrid = {
  title: "Our Portfolio",
  subtitle:
    "Explore our latest projects and see how we've helped businesses achieve their goals",
  items: [
    {
      tag: "Digital Marketing",
      title: "Analytics Dashboard",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      imageAlt: "Laptop showing analytics dashboard with charts",
    },
    {
      tag: "Web Development",
      title: "Data Insights Platform",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      imageAlt: "Digital interface showing revenue insight dashboard",
    },
    {
      tag: "Digital Marketing",
      title: "Content Strategy",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
      imageAlt: "Team collaboration and strategy whiteboard",
    },
    {
      tag: "Graphic Design",
      title: "Brand Campaign",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
      imageAlt: "Team working on laptop with data visualizations",
    },
    {
      tag: "Digital Marketing",
      title: "Marketing Strategy",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&q=80",
      imageAlt: "Marketing strategy desk flat lay",
    },
    {
      tag: "Video Editing",
      title: "Creative Planning",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80",
      imageAlt: "Creative planning session at a desk",
    },
  ],
};

export const pricing = {
  title: "Simple, Transparent Pricing",
  subtitle:
    "Choose the perfect plan for your business needs. No hidden fees, cancel anytime.",
  footnote: "Need a custom plan?",
  footnoteLink: "Contact us",
  plans: [
    {
      id: "basic",
      name: "Basic",
      description: "Perfect for startups and small businesses",
      price: "$499",
      period: "/month",
      cta: "Get Started",
      featured: false,
      checkColor: "blue",
      buttonVariant: "blue",
      features: [
        "5 Video Edits per Month",
        "Basic Graphic Design",
        "Monthly Analytics Report",
        "Email Support",
      ],
    },
    {
      id: "pro",
      name: "Pro",
      description: "Most popular choice for growing businesses",
      price: "$999",
      period: "/month",
      cta: "Get Started",
      featured: true,
      badge: "Most Popular",
      checkColor: "green",
      buttonVariant: "green",
      features: [
        "Everything in Basic",
        "Unlimited Video Edits",
        "Advanced Graphic Design",
        "SEO Optimization",
        "Priority Support",
        "Dedicated Account Manager",
        "Weekly Analytics Reports",
      ],
    },
    {
      id: "premium",
      name: "Premium",
      description: "Enterprise solution for large organizations",
      price: "$1,999",
      period: "/month",
      cta: "Get Started",
      featured: false,
      checkColor: "blue",
      buttonVariant: "blue",
      features: [
        "Everything in Pro",
        "Custom Web Development",
        "Brand Strategy Consulting",
        "Multi-channel Campaigns",
        "24/7 Premium Support",
        "Advanced Analytics Dashboard",
        "Quarterly Business Reviews",
      ],
    },
  ],
};

export const testimonials = {
  title: "What Our Clients Say",
  subtitle:
    "Don't just take our word for it. Here's what our satisfied clients have to say about working with us.",
  items: [
    {
      quote:
        "Working with this agency transformed our digital presence. Their strategic approach and creativity led to a 300% increase in our online engagement.",
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      initials: "SJ",
    },
    {
      quote:
        "The team delivered exceptional results beyond our expectations. Their video editing skills and marketing expertise are truly world-class.",
      name: "Michael Chen",
      role: "Marketing Director, GrowthCo",
      initials: "MC",
    },
    {
      quote:
        "Professional, creative, and results-driven. They understood our vision and brought it to life with stunning designs and effective campaigns.",
      name: "Emily Rodriguez",
      role: "Founder, Creative Studio",
      initials: "ER",
    },
  ],
};

export const cta = {
  title: "Ready to Grow Your Business?",
  subtitle:
    "Let's transform your digital presence together. Get in touch with our team and start your journey to success today.",
  primary: "Start Now",
  secondary: "Schedule a Call",
  emailLabel: "Email Us",
  email: "hello@agency.com",
  phoneLabel: "Call Us",
  phone: "+1 (555) 123-4567",
};

export const footer = {
  brand: "Digital Agency",
  about:
    "We help brands scale through marketing, design, and video editing with proven strategies and creative excellence.",
  services: {
    title: "Services",
    links: [
      "Digital Marketing",
      "Video Editing",
      "Graphic Design",
      "Web Development",
    ],
  },
  support: {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Contact Us", href: "#contact", highlight: true },
    ],
  },
  connect: {
    title: "Connect With Us",
    newsletterEmail: "newsletter@agency.com",
    social: [
      { label: "Facebook", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
  copyright: "© 2026 Digital Agency. All rights reserved.",
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};
