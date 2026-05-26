import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Sparkles, CheckCircle, AlertTriangle, RefreshCw, ShoppingCart, Leaf, ShieldAlert, HeartHandshake } from 'lucide-react';
import { localProducts } from '../../data/products';
import { useCart } from '../../context/CartContext';

const samplePlants = [
  {
    id: 'mint-yellow',
    name: 'Sick Mint (Pudina)',
    image: 'https://images.pexels.com/photos/1072178/pexels-photo-1072178.jpeg?auto=compress&cs=tinysrgb&w=300',
    defaultSymptoms: { leafColor: 'yellowing', watering: 'daily', sunlight: 'shade', soil: 'damp' },
    expectedDiagnosis: {
      plantName: 'Mint (Pudina)',
      condition: 'Overwatering & Root Rot',
      severity: 'Moderate',
      description: 'Your Mint leaves are yellowing due to saturated roots. Mint loves moisture but needs excellent drainage in Karachi’s humid coastal climate.',
      care: [
        'Reduce watering to every 2 days; let the top 1 inch of soil dry out.',
        'Ensure container has ample drainage holes.',
        'Prune the yellowing lower leaves to encourage fresh airflow.',
        'Add a layer of organic neem cake powder to prevent root fungus.'
      ],
      recommendations: ['mint-pudina', 'beginner-herb-kit']
    }
  },
  {
    id: 'tulsi-spots',
    name: 'Sick Holy Basil (Tulsi)',
    image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=300',
    defaultSymptoms: { leafColor: 'spots', watering: 'moderate', sunlight: 'full-sun', soil: 'balanced' },
    expectedDiagnosis: {
      plantName: 'Holy Basil (Tulsi)',
      condition: 'Fungal Leaf Spot (Rust)',
      severity: 'Mild',
      description: 'Tiny brown spots with yellow halos indicate a fungal infection, common during Karachi’s high-humidity monsoon pre-seasons.',
      care: [
        'Immediately pinch off and safely discard all spotted leaves.',
        'Water the soil directly — avoid wetting the leaves.',
        'Prune center branches to let wind pass through the plant body.',
        'Spray with organic neem oil pesticide solution once a week.'
      ],
      recommendations: ['holy-basil-tulsi', 'neem-sapling']
    }
  },
  {
    id: 'moringa-wilt',
    name: 'Sick Moringa (Sahjan)',
    image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=300',
    defaultSymptoms: { leafColor: 'wilting', watering: 'low', sunlight: 'full-sun', soil: 'dry' },
    expectedDiagnosis: {
      plantName: 'Moringa (Sahjan)',
      condition: 'Extreme Dehydration & Heat Stress',
      severity: 'Critical',
      description: 'Despite being a summer survivor, young Moringa saplings wilt when baking in 40°C+ Karachi heat without adequate moisture establishment.',
      care: [
        'Give a deep, thorough watering immediately until water drains out the bottom.',
        'Water daily in the early morning (before 7:00 AM) during hot dry spells.',
        'Apply coco-peat or sugarcane bagasse mulch to retain soil moisture.',
        'Provide temporary light green shade cloth during afternoon peak heat.'
      ],
      recommendations: ['moringa', 'marigold']
    }
  }
];

export default function AIPlantDoctor() {
  const [step, setStep] = useState(0); // 0: Upload, 1: Questions, 2: Scanning, 3: Results
  const [selectedPlant, setSelectedPlant] = useState<typeof samplePlants[0] | null>(null);
  const [symptoms, setSymptoms] = useState({
    leafColor: 'yellowing',
    watering: 'moderate',
    sunlight: 'partial-sun',
    soil: 'balanced'
  });
  const [scanLog, setScanLog] = useState('Initializing scan...');
  const { addToCart } = useCart();

  // Run scanning animation simulation
  useEffect(() => {
    if (step !== 2) return;

    const logs = [
      'Extracting plant pixel map...',
      'Matching color histograms to chlorophyll signatures...',
      'Comparing with 4,200+ Pakistani regional plant pathogens...',
      'Cross-referencing Karachi weather data (34°C, 72% humidity)...',
      'Assessing drainage & moisture ratios...',
      'Synthesizing diagnostic recommendations...',
    ];

    let currentLogIndex = 0;
    const interval = setInterval(() => {
      if (currentLogIndex < logs.length) {
        setScanLog(logs[currentLogIndex]);
        currentLogIndex++;
      } else {
        clearInterval(interval);
        setStep(3);
      }
    }, 900);

    return () => clearInterval(interval);
  }, [step]);

  const selectSample = (plant: typeof samplePlants[0]) => {
    setSelectedPlant(plant);
    setSymptoms(plant.defaultSymptoms);
    setStep(1);
  };

  const handleCustomUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const mockPlant = {
        id: 'custom-upload',
        name: e.target.files[0].name,
        image: URL.createObjectURL(e.target.files[0]),
        defaultSymptoms: { leafColor: 'yellowing', watering: 'moderate', sunlight: 'partial-sun', soil: 'balanced' },
        expectedDiagnosis: {
          plantName: 'Identified Garden Species',
          condition: 'Nutrient Deficiency (Nitrogen/Iron)',
          severity: 'Moderate',
          description: 'Pale, light green, or yellowing leaves indicate nitrogen depletion. High Karachi temperatures speed up organic matter breakdown in small pots.',
          care: [
            'Top-dress soil with well-rotted cow manure (gobar ki khaad) or vermicompost.',
            'Ensure potting soil has balanced aeration using sand or leaf mold.',
            'Water only when top soil feels dry; avoid washing away nutrients.',
            'Spray liquid seaweed fertilizer once every 2 weeks.'
          ],
          recommendations: ['beginner-herb-kit', 'moringa']
        }
      };
      setSelectedPlant(mockPlant);
      setStep(1);
    }
  };

  const reset = () => {
    setStep(0);
    setSelectedPlant(null);
    setSymptoms({ leafColor: 'yellowing', watering: 'moderate', sunlight: 'partial-sun', soil: 'balanced' });
  };

  const activeDiagnosis = selectedPlant?.expectedDiagnosis || samplePlants[0].expectedDiagnosis;
  const recommendedProducts = localProducts.filter(p => activeDiagnosis.recommendations.includes(p.id));

  return (
    <div className="bg-white/80 dark:bg-charcoal-800/80 backdrop-blur-lg border border-sage-200/40 dark:border-charcoal-700/40 rounded-3xl p-6 sm:p-8 shadow-xl">
      
      {/* Step Header */}
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mint-100 dark:bg-mint-400/10 text-mint-800 dark:text-mint-400 text-xs font-bold uppercase tracking-widest mb-3 border border-mint-200/50">
          <Sparkles className="w-3.5 h-3.5" /> AI Plant Doctor &amp; Scanner
        </span>
        <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#1F4D36] dark:text-warm-100">
          Instant Plant Diagnostics
        </h2>
        <p className="text-charcoal-600 dark:text-charcoal-400 text-sm mt-2 max-w-lg mx-auto">
          Upload a photo of your sick or unidentified plant to run a virtual climate check and get immediate Karachi-specific remedies.
        </p>
      </div>

      <AnimatePresence mode="wait">
        
        {/* STEP 0: Upload Image / Select Sick Sample */}
        {step === 0 && (
          <motion.div
            key="step0"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-8"
          >
            {/* Uploader Box */}
            <label className="border-3 border-dashed border-sage-300 dark:border-charcoal-600 hover:border-[#1F4D36] transition-all bg-warm-100/35 dark:bg-charcoal-900/10 rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer group text-center">
              <input type="file" accept="image/*" className="hidden" onChange={handleCustomUpload} />
              <div className="w-14 h-14 rounded-full bg-white dark:bg-charcoal-850 flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform">
                <Upload className="w-6 h-6 text-mint-700" />
              </div>
              <span className="font-display font-bold text-lg text-charcoal-900 dark:text-warm-100 group-hover:text-mint-800 transition-colors">
                Upload a Photo of Your Plant
              </span>
              <span className="text-xs text-charcoal-500 mt-2">
                Drag and drop or select a file from your device (PNG, JPEG up to 10MB)
              </span>
            </label>

            {/* Simulated Sick Samples */}
            <div>
              <p className="text-sm font-extrabold uppercase tracking-wider text-charcoal-700 dark:text-warm-300 text-center mb-4">
                Or select a sick leaf sample to test:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {samplePlants.map((plant) => (
                  <button
                    key={plant.id}
                    onClick={() => selectSample(plant)}
                    className="p-3 bg-white dark:bg-charcoal-900 border border-sage-200/50 dark:border-charcoal-700/50 rounded-2xl hover:border-mint-700 transition-all text-left shadow-sm flex flex-row sm:flex-col items-center sm:items-start gap-4 hover:-translate-y-1 cursor-pointer w-full"
                  >
                    <img src={plant.image} alt={plant.name} className="w-14 h-14 sm:w-full sm:h-28 rounded-xl object-cover shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm text-charcoal-900 dark:text-warm-100 leading-tight">{plant.name}</h4>
                      <p className="text-[11px] text-terracotta-600 font-semibold mt-1">Tap to select →</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* STEP 1: Interactive Questions */}
        {step === 1 && selectedPlant && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
          >
            {/* Visual Panel */}
            <div className="bg-white dark:bg-charcoal-900 p-4 rounded-2xl border border-sage-200/40 shadow-sm text-center">
              <img src={selectedPlant.image} alt="Symptomatic plant leaf" className="w-full h-56 rounded-xl object-cover mb-3" />
              <p className="text-xs font-semibold text-charcoal-500">Scanning Image: <span className="text-[#1F4D36]">{selectedPlant.name}</span></p>
              <button onClick={reset} className="text-xs text-terracotta-600 font-bold hover:underline mt-2 flex items-center justify-center gap-1 mx-auto">
                <RefreshCw className="w-3 h-3" /> Reset and change photo
              </button>
            </div>

            {/* Questions Form */}
            <div className="space-y-4 font-sans text-sm">
              <h3 className="font-display font-extrabold text-base text-[#1F4D36] dark:text-warm-100 uppercase tracking-wider mb-2">
                Describe the Plant Symptoms
              </h3>

              {/* Q1: Leaf Color */}
              <div>
                <label className="block font-bold text-charcoal-700 dark:text-warm-300 mb-1">1. What color are the sick leaves?</label>
                <select
                  value={symptoms.leafColor}
                  onChange={(e) => setSymptoms({ ...symptoms, leafColor: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-sage-200 dark:border-charcoal-700 bg-white dark:bg-charcoal-900 text-charcoal-800 dark:text-warm-200 font-medium"
                >
                  <option value="yellowing">💛 Yellowing or pale light-green</option>
                  <option value="spots">🟫 Small brown/black dry spots</option>
                  <option value="powdery">⬜ White powdery coating on top</option>
                  <option value="wilting">🥀 Limp, drooping, and dry</option>
                </select>
              </div>

              {/* Q2: Watering */}
              <div>
                <label className="block font-bold text-charcoal-700 dark:text-warm-300 mb-1">2. How often do you water this plant?</label>
                <select
                  value={symptoms.watering}
                  onChange={(e) => setSymptoms({ ...symptoms, watering: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-sage-200 dark:border-charcoal-700 bg-white dark:bg-charcoal-900 text-charcoal-800 dark:text-warm-200 font-medium"
                >
                  <option value="daily">💧 Daily morning and evening</option>
                  <option value="moderate">💧 Every 2-3 days</option>
                  <option value="low">💧 Once a week or less</option>
                </select>
              </div>

              {/* Q3: Sunlight */}
              <div>
                <label className="block font-bold text-charcoal-700 dark:text-warm-300 mb-1">3. What is the sunlight exposure?</label>
                <select
                  value={symptoms.sunlight}
                  onChange={(e) => setSymptoms({ ...symptoms, sunlight: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-sage-200 dark:border-charcoal-700 bg-white dark:bg-charcoal-900 text-charcoal-800 dark:text-warm-200 font-medium"
                >
                  <option value="full-sun">☀️ Direct full sun (Rooftop/South balcony)</option>
                  <option value="partial-sun">⛅ Partial sun (Morning sun only)</option>
                  <option value="shade">🌑 Full shade or indoor window</option>
                </select>
              </div>

              {/* Q4: Soil */}
              <div>
                <label className="block font-bold text-charcoal-700 dark:text-warm-300 mb-1">4. How does the soil feel right now?</label>
                <select
                  value={symptoms.soil}
                  onChange={(e) => setSymptoms({ ...symptoms, soil: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-sage-200 dark:border-charcoal-700 bg-white dark:bg-charcoal-900 text-charcoal-800 dark:text-warm-200 font-medium"
                >
                  <option value="damp">🌊 Soggy, muddy, or standing water</option>
                  <option value="dry">🏜️ Sandy, hard, dry, and cracked</option>
                  <option value="balanced">🌱 Moderately damp, mulched, loose</option>
                </select>
              </div>

              {/* CTA */}
              <button
                onClick={() => setStep(2)}
                className="w-full mt-4 btn-primary flex items-center justify-center gap-2 cursor-pointer font-bold py-3.5"
              >
                <Sparkles className="w-5 h-5 text-[#D4A62A]" /> Run Diagnostic Scan
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 2: Scanning Simulation */}
        {step === 2 && selectedPlant && (
          <motion.div
            key="step2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            {/* Visual Scan Area */}
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden border-4 border-mint-750/30 mb-8 shadow-inner">
              <img src={selectedPlant.image} alt="Scanning" className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 h-1 bg-mint-500 top-0 shadow-lg shadow-mint-400 animate-bounce" style={{ animationDuration: '2s' }} />
              <div className="absolute inset-0 bg-mint-900/10 backdrop-blur-[1px] animate-pulse" />
            </div>

            {/* Log logs */}
            <div className="flex flex-col items-center gap-3">
              <RefreshCw className="w-8 h-8 text-mint-750 animate-spin" />
              <h3 className="font-display font-extrabold text-[#1F4D36] dark:text-warm-100 text-lg uppercase tracking-wider">
                Virtual Plant Diagnostic Scan
              </h3>
              <p className="text-sm font-semibold text-charcoal-600 dark:text-charcoal-400 font-mono h-6 transition-all duration-300">
                {scanLog}
              </p>
            </div>
          </motion.div>
        )}

        {/* STEP 3: Results Panel */}
        {step === 3 && selectedPlant && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-8 font-sans"
          >
            {/* Health Status Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-warm-100 dark:bg-charcoal-900 border border-sage-250/30 rounded-2xl p-5 items-center">
              
              <div className="md:col-span-1 flex flex-col items-center text-center">
                <img src={selectedPlant.image} alt={selectedPlant.name} className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md mb-3" />
                <span className="text-xs uppercase tracking-widest font-extrabold text-charcoal-500">Diagnosed Target</span>
                <span className="font-display font-extrabold text-[#1F4D36] dark:text-warm-100 text-lg leading-tight mt-0.5">{activeDiagnosis.plantName}</span>
              </div>

              <div className="md:col-span-2 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-terracotta-100 flex items-center justify-center shrink-0">
                    <ShieldAlert className="w-4 h-4 text-terracotta-700" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-charcoal-500 block">Condition Diagnosis</span>
                    <span className="font-bold text-terracotta-700 text-base">{activeDiagnosis.condition}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-4 h-4 text-amber-700" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-charcoal-500 block">Severity Level</span>
                    <span className="font-bold text-amber-700 text-sm">{activeDiagnosis.severity}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Explanation / Description */}
            <div className="space-y-4">
              <h3 className="font-display font-extrabold text-[#1F4D36] dark:text-warm-100 text-lg uppercase tracking-wider">
                Clinical Overview
              </h3>
              <p className="text-charcoal-700 dark:text-charcoal-350 text-sm leading-relaxed bg-white dark:bg-charcoal-900 border border-sage-200/40 p-4 rounded-2xl">
                {activeDiagnosis.description}
              </p>
            </div>

            {/* Care Calendar Recommendations */}
            <div className="space-y-4">
              <h3 className="font-display font-extrabold text-[#1F4D36] dark:text-warm-100 text-lg uppercase tracking-wider flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-[#D4A62A]" /> Karachi Remedial Action Plan
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {activeDiagnosis.care.map((item, idx) => (
                  <li key={idx} className="flex gap-3 p-3 bg-white dark:bg-charcoal-900 border border-sage-200/40 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-mint-700 shrink-0 mt-0.5" />
                    <span className="text-charcoal-700 dark:text-charcoal-300 leading-normal font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommended Products */}
            <div className="space-y-4 border-t border-sage-200/50 dark:border-charcoal-700/50 pt-8">
              <div>
                <h3 className="font-display font-extrabold text-[#1F4D36] dark:text-warm-100 text-lg uppercase tracking-wider">
                  Recommended Botanical Solutions
                </h3>
                <p className="text-xs text-charcoal-500 mt-1">Sow resilient organic seeds specifically adapted to recover biodiversity in this climate zone.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {recommendedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-charcoal-900 border border-sage-200/40 items-center hover:border-mint-700 transition-colors"
                  >
                    <img src={product.image} alt={product.name} className="w-16 h-16 rounded-xl object-cover shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm text-charcoal-900 dark:text-warm-100 truncate">{product.name}</h4>
                      <p className="text-xs text-mint-800 dark:text-mint-400 font-semibold mt-0.5">Tested for Karachi Heat</p>
                      <p className="text-sm font-extrabold text-[#1F4D36] dark:text-warm-100 mt-1">Rs. {product.price}</p>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="p-3 bg-mint-800 text-white rounded-xl hover:bg-mint-900 cursor-pointer shadow-sm active:scale-95 transition-all"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 border-t border-sage-200/50 pt-6">
              <button
                onClick={reset}
                className="flex-1 py-3 bg-white dark:bg-charcoal-900 border-2 border-sage-200 hover:border-charcoal-600 transition-colors rounded-xl font-bold text-charcoal-700 dark:text-warm-100 text-sm cursor-pointer"
              >
                Scan Another Leaf
              </button>
              <Link
                to="/shop"
                className="flex-1 py-3 bg-[#1F4D36] text-white hover:bg-mint-900 text-center rounded-xl font-bold text-sm cursor-pointer shadow-md flex items-center justify-center gap-2"
              >
                Browse Seed Catalog <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </motion.div>
        )}

      </AnimatePresence>

    </div>
  );
}

function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
