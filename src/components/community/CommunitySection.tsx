import { motion } from 'framer-motion';
import { Heart, MessageCircle, Upload, Star, Quote } from 'lucide-react';
import { communityPosts, testimonials } from '../../data/products';

export default function CommunitySection() {
  return (
    <section className="section-padding bg-white dark:bg-charcoal-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-sage-100/80 dark:bg-sage-400/10 text-sage-700 dark:text-sage-400 text-sm font-medium mb-4">Community</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 dark:text-warm-50 mb-4">Grow With Karachi</h2>
          <p className="text-charcoal-600 dark:text-charcoal-300 max-w-2xl mx-auto">Join thousands of Karachi gardeners sharing their green journeys, balcony transformations, and plant love.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-charcoal-800 rounded-2xl shadow-lg shadow-black/5 dark:shadow-black/20 border border-sage-100 dark:border-charcoal-700 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <img src={post.avatar} alt={post.author} className="w-8 h-8 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold text-charcoal-900 dark:text-warm-100">{post.author}</p>
                    <p className="text-xs text-charcoal-400 dark:text-charcoal-500">{post.timeAgo}</p>
                  </div>
                </div>
                <p className="text-sm text-charcoal-600 dark:text-charcoal-300 leading-relaxed mb-3 line-clamp-3">{post.caption}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 rounded-full bg-mint-50 dark:bg-mint-400/10 text-mint-700 dark:text-mint-400 text-xs font-medium">#{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-3 border-t border-sage-100 dark:border-charcoal-700">
                  <button className="flex items-center gap-1.5 text-charcoal-400 hover:text-terracotta-500 transition-colors text-sm">
                    <Heart className="w-4 h-4" /> {post.likes}
                  </button>
                  <button className="flex items-center gap-1.5 text-charcoal-400 hover:text-mint-500 transition-colors text-sm">
                    <MessageCircle className="w-4 h-4" /> {post.comments}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Upload className="w-4 h-4" />
            Share Your Garden
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-charcoal-900 dark:text-warm-50 mb-2">What Our Growers Say</h3>
          <p className="text-charcoal-500 dark:text-charcoal-400">Real stories from real Karachi gardeners</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 sm:p-8"
            >
              <Quote className="w-8 h-8 text-mint-300 dark:text-mint-600 mb-4" />
              <p className="text-charcoal-600 dark:text-charcoal-300 leading-relaxed mb-6">{testimonial.text}</p>
              <div className="flex items-center gap-3">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-charcoal-900 dark:text-warm-100">{testimonial.name}</p>
                  <p className="text-xs text-charcoal-400 dark:text-charcoal-500">{testimonial.role}</p>
                </div>
                <div className="ml-auto flex items-center gap-0.5">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <Star key={i} className="w-4 h-4 fill-terracotta-400 text-terracotta-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
