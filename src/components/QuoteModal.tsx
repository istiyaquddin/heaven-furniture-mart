'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle2, ArrowRight, X } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    room: 'Living Room',
    timeline: 'Within 30 Days',
    notes: ''
  });

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `Hello Heaven Furniture Mart!\nI would like to request a bespoke furniture quotation:\n\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Space/Room: ${formData.room}\n• Delivery Timeline: ${formData.timeline}\n• Specifications: ${formData.notes || 'None provided'}`;
    const url = `https://wa.me/8801960481983?text=${encodeURIComponent(message)}`;
    setTimeout(() => {
      window.open(url, '_blank');
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-teal-deep/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl bg-ivory border border-gold shadow-2xl p-6 sm:p-10 z-10 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-teal-deep text-ivory hover:bg-gold hover:text-teal-deep flex items-center justify-center transition-colors shadow-md cursor-pointer"
          aria-label="Close Quote Modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="mb-6">
          <span className="text-[10px] uppercase tracking-[0.25em] text-gold-dark font-bold block mb-1">
            Private Consultation Request
          </span>
          <h3 className="font-display text-2xl text-teal-deep font-medium">
            Commission a Bespoke Work
          </h3>
          <p className="font-sans text-xs text-brown-soft mt-1">
            Share your space requirements. Our Agrabad design studio will contact you within 2 hours.
          </p>
        </div>

        {submitted ? (
          <div className="bg-teal-deep text-ivory p-6 border border-gold text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-gold mx-auto" />
            <h4 className="font-display text-lg text-gold-light font-medium">Thank You for Inquiring</h4>
            <p className="font-sans text-xs text-ivory-muted leading-relaxed">
              Your consultation request has been logged. Redirecting to WhatsApp concierge for priority scheduling...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="font-sans text-xs uppercase tracking-wider text-teal-deep font-semibold block mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Mahfuzur Rahman"
                className="w-full bg-white border border-gold-hairline p-3 text-xs sm:text-sm text-teal-deep focus:border-gold focus:outline-none"
              />
            </div>

            <div>
              <label className="font-sans text-xs uppercase tracking-wider text-teal-deep font-semibold block mb-1.5">
                Phone Number (WhatsApp preferred) *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+880 1XXXXXXXXX"
                className="w-full bg-white border border-gold-hairline p-3 text-xs sm:text-sm text-teal-deep focus:border-gold focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-sans text-xs uppercase tracking-wider text-teal-deep font-semibold block mb-1.5">
                  Space Type
                </label>
                <select
                  value={formData.room}
                  onChange={(e) => setFormData({ ...formData, room: e.target.value })}
                  className="w-full bg-white border border-gold-hairline p-3 text-xs text-teal-deep focus:border-gold focus:outline-none"
                >
                  <option value="Living Room">Living Suite</option>
                  <option value="Master Bedroom">Master Bedroom</option>
                  <option value="Dining Room">Dining Banquet</option>
                  <option value="Corporate Office">Corporate Office</option>
                  <option value="Complete Home Interior">Full Residence</option>
                </select>
              </div>
              <div>
                <label className="font-sans text-xs uppercase tracking-wider text-teal-deep font-semibold block mb-1.5">
                  Timeline
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full bg-white border border-gold-hairline p-3 text-xs text-teal-deep focus:border-gold focus:outline-none"
                >
                  <option value="Within 15 Days">Within 15 Days</option>
                  <option value="Within 30 Days">Within 30 Days</option>
                  <option value="2-3 Months">2 – 3 Months</option>
                  <option value="Planning Phase">Planning Phase</option>
                </select>
              </div>
            </div>

            <div>
              <label className="font-sans text-xs uppercase tracking-wider text-teal-deep font-semibold block mb-1.5">
                Design Preferences / Notes
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Mention desired wood (Burma Teak, Gamari), dimensions, color palettes..."
                className="w-full bg-white border border-gold-hairline p-3 text-xs sm:text-sm text-teal-deep focus:border-gold focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="btn-luxury-shimmer w-full bg-teal-deep hover:bg-gold text-ivory hover:text-teal-deep py-4 font-semibold uppercase tracking-[0.2em] text-xs transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Submit & Open WhatsApp Concierge</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
