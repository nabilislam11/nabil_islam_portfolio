import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const ReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechCorp Solutions',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "Nabil delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and modern design approach helped increase our conversion rate by 40%. The project was completed on time and within budget."
    },
    {
      name: 'Michael Chen',
      role: 'Startup Founder',
      company: 'InnovateLab',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "Working with Nabil was a game-changer for our startup. He built our entire web application from scratch using the MERN stack. His expertise in both frontend and backend development saved us months of work. Highly recommended!"
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      company: 'Digital Dynamics',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "Nabil's technical skills are outstanding. He created a responsive dashboard that perfectly matched our design requirements. The code quality is excellent, and he provided thorough documentation. A true professional."
    },
    {
      name: 'David Thompson',
      role: 'Business Owner',
      company: 'Local Services Hub',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "I needed a complete website overhaul, and Nabil delivered beyond my expectations. The new site is not only beautiful but also loads incredibly fast. Our customer engagement has improved significantly since the launch."
    },
    {
      name: 'Lisa Park',
      role: 'E-commerce Manager',
      company: 'Fashion Forward',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "Nabil built our online store with React and integrated it seamlessly with our inventory system. His understanding of both business needs and technical implementation is impressive. The project was delivered flawlessly."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20 text-primary text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            What Clients <span className="text-gradient">Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from real clients who trusted me with their projects and achieved outstanding results.
          </p>
        </div>

        {/* Featured Review */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50">
            <div className="absolute top-6 left-6 text-primary/20">
              <Quote className="w-12 h-12" />
            </div>
            <CardHeader className="pt-16 pb-6">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={reviews[currentReview].avatar} />
                  <AvatarFallback>{reviews[currentReview].name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-semibold">{reviews[currentReview].name}</h3>
                  <p className="text-muted-foreground">{reviews[currentReview].role}</p>
                  <p className="text-primary font-medium">{reviews[currentReview].company}</p>
                  <div className="flex items-center gap-1 mt-2 justify-center sm:justify-start">
                    {[...Array(reviews[currentReview].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-center leading-relaxed italic">
                "{reviews[currentReview].text}"
              </p>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevReview}
              className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              aria-label="Previous review"
            >
              <span className="text-primary">‹</span>
            </button>
            
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentReview ? 'bg-primary' : 'bg-primary/20'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              aria-label="Next review"
            >
              <span className="text-primary">›</span>
            </button>
          </div>
        </div>

        {/* All Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card 
              key={index}
              className={`group cursor-pointer transition-all duration-300 bg-card/30 backdrop-blur-sm border-border/50 hover:border-primary/20 hover:scale-105 ${
                index === currentReview ? 'border-primary/50 bg-card/60' : ''
              }`}
              onClick={() => setCurrentReview(index)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={review.avatar} />
                    <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-sm">{review.name}</h4>
                    <p className="text-xs text-muted-foreground">{review.role}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-4">
                  "{review.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
          <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">2+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;