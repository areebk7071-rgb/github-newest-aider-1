import { Link } from 'react-router-dom';
import Seo from '../components/shared/Seo';
import PlantQuiz from '../components/quiz/PlantQuiz';
import { useProducts } from '../hooks/useProducts';
import { pageSeo } from '../config/seo';
import { Sparkles, Brain, Map, Users } from 'lucide-react';

export default function QuizPage() {
  const { products, loading } = useProducts();

  const futureImplementations = [
    {
      icon: Brain,
      title: 'AI Plant Doctor & Scanner',
      desc: 'Point your camera or upload a leaf photo to diagnose plant symptoms (e.g. nitrogen deficiency, rust) instantly.',
      badge: 'Future Extension'
    },
    {
      icon: Map,
      title: 'Native Karachi Restoration',
      desc: 'Urban greening guides, Miyawaki forest concepts, and citizen science database mapping local urban biodiversity.',
      badge: 'Coming Soon',
      link: '/native-karachi'
    },
    {
      icon: Users,
      title: 'Gardeners’ Community Forum',
      desc: 'Connect with 5,000+ local growers in Karachi. Share balcony designs, exchange seeds, and troubleshoot care.',
      badge: 'Coming Soon',
      link: '/community'
    }
  ];

  return (
    <>
      <Seo
        title={pageSeo.quiz.title}
        description={pageSeo.quiz.description}
        path="/quiz"
        noSuffix
      />

      <div className="page-top pb-20 min-h-screen gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <header className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-mint-100 dark:bg-mint-400/10 text-mint-800 dark:text-mint-400 text-xs font-bold uppercase tracking-widest mb-3 border border-mint-200/50">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A62A]" /> Interactive Smart Quiz
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-[#1F4D36] dark:text-warm-50 mb-3 tracking-tight">
              Find Your Perfect Seed Match
            </h1>
            <p className="text-charcoal-600 dark:text-charcoal-350 max-w-xl mx-auto leading-relaxed text-sm sm:text-base font-medium">
              Answer 6 quick questions about your sunlight, watering habits, and balcony space, and we will instantly recommend Karachi-tested seeds you can order.
            </p>
          </header>

          {/* Active Quiz Area */}
          <div className="bg-white/40 dark:bg-charcoal-900/40 rounded-3xl p-1.5 border border-sage-200/40 dark:border-charcoal-700/40 mb-16 shadow-inner">
            {loading ? (
              <div className="h-96 rounded-3xl bg-sage-200/50 dark:bg-charcoal-700 animate-pulse" />
            ) : (
              <PlantQuiz products={products} />
            )}
          </div>

          {/* Future Seeds / Teaser Section */}
          <div className="border-t border-sage-200/50 dark:border-charcoal-750/50 pt-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#1F4D36] dark:text-warm-50">
                Future Seeds of Innovation
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-500 max-w-md mx-auto mt-2">
                We are actively building smart tools and databases to support urban restoration and home gardening in Karachi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {futureImplementations.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/60 dark:bg-charcoal-800/60 border border-sage-200/45 dark:border-charcoal-700/45 p-6 rounded-2xl flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-mint-100 dark:bg-mint-900/20 flex items-center justify-center mb-4">
                      <item.icon className="w-5 h-5 text-mint-800 dark:text-mint-400" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D4A62A] block mb-1">
                      {item.badge}
                    </span>
                    <h3 className="font-display font-bold text-base text-charcoal-900 dark:text-warm-100 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-charcoal-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  {item.link ? (
                    <Link
                      to={item.link}
                      className="text-xs font-extrabold text-[#1F4D36] dark:text-[#D4A62A] hover:underline uppercase tracking-wider mt-4 inline-block"
                    >
                      View Preview &rarr;
                    </Link>
                  ) : (
                    <span className="text-[10px] font-extrabold text-charcoal-400 uppercase tracking-wider mt-4 inline-block">
                      Under Development
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
