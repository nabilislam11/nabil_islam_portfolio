import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Palette, Database, Zap, Globe, Smartphone } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Full-stack development using modern technologies like React, Node.js, and MongoDB to build scalable applications.',
      features: ['Custom Web Applications', 'API Development', 'Database Design']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive user interfaces with modern design principles and responsive layouts.',
      features: ['Responsive Design', 'User Experience', 'Modern UI Components']
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Robust server-side solutions with secure APIs, database optimization, and cloud deployment.',
      features: ['RESTful APIs', 'Database Management', 'Server Configuration']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed, efficiency, and better user experience across all devices.',
      features: ['Code Optimization', 'Load Time Reduction', 'SEO Enhancement']
    },
    {
      icon: Globe,
      title: 'Full-Stack Development',
      description: 'End-to-end development from frontend interfaces to backend infrastructure and deployment.',
      features: ['MERN Stack', 'Complete Solutions', 'Deployment & Hosting']
    },
    {
      icon: Smartphone,
      title: 'Responsive Development',
      description: 'Mobile-first approach ensuring your application works perfectly on all devices and screen sizes.',
      features: ['Mobile Optimization', 'Cross-browser Testing', 'Progressive Web Apps']
    }
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20 text-primary text-sm font-medium mb-4">
            Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            What I <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development services to bring your digital vision to life with modern technologies and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 h-full"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto p-8 bg-primary/5 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-muted-foreground mb-6">
              Every project is unique. Let's discuss your specific requirements and create a tailored solution that fits your needs perfectly.
            </p>
            <a 
              href="https://www.linkedin.com/in/nabilislam11" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;