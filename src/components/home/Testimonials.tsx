import { motion } from "framer-motion";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Urban Gardener",
    avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=150&h=150&fit=crop&crop=face",
    text: "Nayab Seeds helped me transform my balcony into a lush vegetable garden. The seeds were high quality and grew beautifully!",
    rating: 5,
  },
  {
    id: "2",
    name: "Ahmed Khan",
    role: "Beginner Gardener",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    text: "As a complete beginner, I loved the detailed guides. My first harvest was amazing thanks to these seeds!",
    rating: 5,
  },
  {
    id: "3",
    name: "Maria Rodriguez",
    role: "Herb Enthusiast",
    avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=150&h=150&fit=crop&crop=face",
    text: "The herb seeds from Nayab Seeds are exceptional. Fresh basil and mint all year round!",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding gradient-mint">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 dark:text-white mb-4">
            What Gardeners Are Saying
          </h2>
          <p className="text-lg text-charcoal-600 dark:text-charcoal-400 max-w-2xl mx-auto">
            Join thousands of happy gardeners growing extraordinary plants
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating ? "text-yellow-400 fill-current" : "text-charcoal-300"
                    }`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-charcoal-700 dark:text-charcoal-300 mb-4 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-semibold text-charcoal-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-charcoal-500 dark:text-charcoal-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
