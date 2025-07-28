import React from 'react';
import { Code, TrendingUp, Users, ArrowRight, Database, Shield, Zap, Target } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs',
      features: [
        'Full-stack web applications',
        'Mobile app development',
        'API design & integration',
        'Legacy system modernization'
      ],
      color: 'blue'
    },
    {
      icon: TrendingUp,
      title: 'Technology Consulting',
      description: 'Strategic technology guidance to drive business growth',
      features: [
        'Technology strategy & planning',
        'Digital transformation',
        'Cloud migration & optimization',
        'Performance & scalability'
      ],
      color: 'indigo'
    },
    {
      icon: Users,
      title: 'Leadership Development',
      description: 'Executive coaching and organizational leadership training',
      features: [
        'Executive coaching',
        'Team leadership training',
        'Change management',
        'Organizational culture'
      ],
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 border-blue-200 text-blue-600',
      indigo: 'bg-indigo-50 border-indigo-200 text-indigo-600',
      purple: 'bg-purple-50 border-purple-200 text-purple-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive solutions across software development, technology consulting, 
            and leadership development to help your organization thrive.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl border ${getColorClasses(service.color)} mb-6`}>
                <service.icon className="h-8 w-8" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 group-hover:translate-x-1">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Gordian Development?
            </h3>
            <p className="text-lg text-gray-600">
              We combine technical expertise with strategic thinking to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Results-Driven</h4>
              <p className="text-sm text-gray-600">Focused on measurable outcomes and business impact</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-indigo-100 rounded-lg">
                  <Zap className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Fast Delivery</h4>
              <p className="text-sm text-gray-600">Rapid prototyping and iterative development</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Secure & Reliable</h4>
              <p className="text-sm text-gray-600">Enterprise-grade security and reliability</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Database className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Scalable Solutions</h4>
              <p className="text-sm text-gray-600">Built to grow with your business needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 