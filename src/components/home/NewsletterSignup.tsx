export default function NewsletterSignup() {
  return (
    <section className="section-padding gradient-warm">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 dark:text-white mb-4">
          Join Our Newsletter
        </h2>
        <p className="text-lg text-charcoal-600 dark:text-charcoal-400 mb-6">
          Get gardening tips delivered to your inbox
        </p>
        <form className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-xl border border-charcoal-300 dark:border-charcoal-600 focus:outline-none focus:ring-2 focus:ring-mint-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-mint-800 text-white rounded-xl hover:bg-mint-900 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
