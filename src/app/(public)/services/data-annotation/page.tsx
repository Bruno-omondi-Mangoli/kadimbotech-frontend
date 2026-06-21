import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Data Annotation Services",
  description: "Professional data annotation services for AI and machine learning. Image annotation, text labeling, video annotation, and NLP datasets with high accuracy.",
};

const services = [
  { icon: "🖼️", title: "Image Annotation", desc: "Bounding boxes, segmentation masks, keypoints, and polygon annotations for computer vision models." },
  { icon: "📝", title: "Text Labeling", desc: "Named entity recognition, sentiment analysis, intent classification, and text categorization." },
  { icon: "🎥", title: "Video Annotation", desc: "Frame-by-frame object tracking, activity recognition, and temporal event labeling." },
  { icon: "🔊", title: "Audio Transcription", desc: "Accurate transcription and labeling of speech, music, and environmental audio." },
  { icon: "🌍", title: "Multilingual Annotation", desc: "Native Swahili, English, and other African language annotation with cultural context." },
  { icon: "✅", title: "Quality Review", desc: "Multi-stage QA process ensuring annotation accuracy above 95% on all deliveries." },
];

const stats = [
  { value: "95%+", label: "Annotation Accuracy" },
  { value: "48hr", label: "Average Turnaround" },
  { value: "10+", label: "Annotation Types" },
  { value: "100%", label: "NDA Protected" },
];

const faqs = [
  { q: "What annotation tools do you use?", a: "We work with Label Studio, CVAT, Labelbox, Scale AI, and Turing platforms, as well as custom annotation tools specified by the client." },
  { q: "How do you ensure annotation quality?", a: "We use a multi-stage QA process: annotators complete tasks, senior reviewers audit samples, and we measure inter-annotator agreement to maintain accuracy above 95%." },
  { q: "Can you handle large-scale projects?", a: "Yes. We have the capacity to scale annotation teams for large datasets. Contact us with your volume requirements for a custom quote." },
  { q: "Do you support Swahili and African languages?", a: "Yes. This is one of our key strengths. We have native Swahili speakers and annotators familiar with East African cultural context." },
];

export default function DataAnnotationPage() {
  return (
    <>
      <section className="section-padding gradient-brand">
        <div className="container text-center">
          <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "rgba(255,255,255,0.7)" }}>Our Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>Data Annotation</h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
            High-quality labeled datasets for AI and machine learning projects — delivered with precision, speed, and full confidentiality.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 rounded-xl bg-white font-semibold text-sm transition-all hover:shadow-lg" style={{ color: "var(--color-navy)" }}>
            Request a Quote
          </Link>
        </div>
      </section>

      <section className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold heading-accent heading-accent-center" style={{ color: "var(--color-navy)" }}>Annotation Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="p-6 rounded-2xl bg-white border" style={{ borderColor: "var(--color-border-brand)" }}>
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-base font-bold mb-2" style={{ color: "var(--color-navy)" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: "var(--color-navy)" }}>
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center p-6 rounded-2xl border" style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}>
                <div className="text-3xl font-bold mb-2" style={{ color: "var(--color-teal)" }}>{s.value}</div>
                <div className="text-sm text-white">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold heading-accent heading-accent-center" style={{ color: "var(--color-navy)" }}>Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-6 rounded-xl bg-white border" style={{ borderColor: "var(--color-border-brand)" }}>
                <h3 className="text-base font-bold mb-2" style={{ color: "var(--color-navy)" }}>{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
