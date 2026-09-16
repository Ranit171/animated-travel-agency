import React, { useState } from 'react';
import { X, Sparkles, CheckCircle, Calendar, Users, Compass, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DESTINATIONS, PLAN_MODAL_DATA } from '../data/travelData';

interface PlanTripModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDestination?: string;
}

export const PlanTripModal: React.FC<PlanTripModalProps> = ({
  isOpen,
  onClose,
  initialDestination = '',
}) => {
  const [destination, setDestination] = useState(initialDestination || `${DESTINATIONS[0].name}, ${DESTINATIONS[0].country}`);
  const [style, setStyle] = useState(PLAN_MODAL_DATA.travelStyleOptions[0]);
  const [month, setMonth] = useState(PLAN_MODAL_DATA.monthOptions[1]);
  const [travelers, setTravelers] = useState(PLAN_MODAL_DATA.travelerOptions[1]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Sync initial destination when modal opens
  React.useEffect(() => {
    if (initialDestination) {
      setDestination(initialDestination);
    }
  }, [initialDestination]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setSubmitted(true);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleResetAndClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-2xl bg-[#111716] border border-white/20 rounded-3xl p-6 sm:p-10 shadow-2xl z-10 my-8 overflow-hidden text-white"
        >
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D9C7A2]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={handleResetAndClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-[#B8BFBB] hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="py-12 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#D9C7A2]/20 border border-[#D9C7A2] flex items-center justify-center mx-auto text-[#D9C7A2]">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-3xl font-serif font-normal text-white">
                  {PLAN_MODAL_DATA.successTitle}
                </h3>
                <p className="text-sm text-[#B8BFBB] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{name}</strong>. {PLAN_MODAL_DATA.successMessage} We will contact you at <strong className="text-white">{email}</strong> regarding your bespoke voyage to <strong className="text-white">{destination}</strong>.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-panel text-left max-w-md mx-auto text-xs space-y-1 text-[#B8BFBB]">
                <p><span className="text-white font-medium">Destination:</span> {destination}</p>
                <p><span className="text-white font-medium">Timing:</span> {month} ({travelers})</p>
                <p><span className="text-white font-medium">Travel Atmosphere:</span> {style}</p>
              </div>

              <button
                onClick={handleResetAndClose}
                className="px-6 py-3 rounded-full bg-[#D9C7A2] text-[#0B0F0E] text-xs font-semibold hover:bg-[#EFE6D2] transition-colors"
              >
                Return to Wanderly
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-1.5 pr-8">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#D9C7A2]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{PLAN_MODAL_DATA.badge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal">
                  {PLAN_MODAL_DATA.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#B8BFBB] font-light">
                  {PLAN_MODAL_DATA.subtitle}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Destination & Style */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#B8BFBB] flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-[#D9C7A2]" />
                      <span>Destination</span>
                    </label>
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D9C7A2]"
                    >
                      {DESTINATIONS.map((d) => (
                        <option key={d.id} value={`${d.name}, ${d.country}`} className="bg-[#111716] text-white">
                          {d.name}, {d.country}
                        </option>
                      ))}
                      <option value="Custom Bespoke Itinerary" className="bg-[#111716] text-white">
                        Custom Unlisted Destination
                      </option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#B8BFBB]">
                      Travel Atmosphere
                    </label>
                    <select
                      value={style}
                      onChange={(e) => setStyle(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D9C7A2]"
                    >
                      {PLAN_MODAL_DATA.travelStyleOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#111716]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Timing & Party Size */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#B8BFBB] flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#D9C7A2]" />
                      <span>Estimated Departure</span>
                    </label>
                    <select
                      value={month}
                      onChange={(e) => setMonth(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D9C7A2]"
                    >
                      {PLAN_MODAL_DATA.monthOptions.map((m) => (
                        <option key={m} value={m} className="bg-[#111716]">
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#B8BFBB] flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#D9C7A2]" />
                      <span>Number of Travelers</span>
                    </label>
                    <select
                      value={travelers}
                      onChange={(e) => setTravelers(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D9C7A2]"
                    >
                      {PLAN_MODAL_DATA.travelerOptions.map((t) => (
                        <option key={t} value={t} className="bg-[#111716]">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#B8BFBB]">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Julian Montgomery"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs sm:text-sm text-white placeholder:text-[#B8BFBB]/40 focus:outline-none focus:border-[#D9C7A2]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#B8BFBB]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. julian@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs sm:text-sm text-white placeholder:text-[#B8BFBB]/40 focus:outline-none focus:border-[#D9C7A2]"
                    />
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#B8BFBB]">
                    Preferences & Wishes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about special occasions, dietary preferences, or must-have experiences..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs sm:text-sm text-white placeholder:text-[#B8BFBB]/40 focus:outline-none focus:border-[#D9C7A2] resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#D9C7A2] hover:bg-[#EFE6D2] text-[#0B0F0E] text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-lg shadow-[#D9C7A2]/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{PLAN_MODAL_DATA.submitButtonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
