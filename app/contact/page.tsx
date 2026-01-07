"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "2394f534-d6e8-4b63-b144-cae086c8274a",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("送信に失敗しました。再度お試しください。");
      }
    } catch (error) {
      alert("エラーが発生しました。再度お試しください。");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-6 text-sm text-zinc-100 sm:py-10 sm:text-base md:px-8">
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="glass-panel relative mx-auto flex w-full max-w-3xl flex-col gap-8 border border-white/10 px-5 py-6 sm:gap-10 sm:px-6 sm:py-8 md:px-10 md:py-10"
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <div className="tag-pill inline-flex items-center gap-2 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-200 sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_8px_rgba(41,179,255,0.9)]" />
            Contact Form
          </div>
          <span className="hidden text-[11px] text-zinc-400 sm:inline">
            お問い合わせ / 2026
          </span>
        </div>

        {/* Title */}
        <section className="space-y-4">
          <h1 className="break-words whitespace-normal text-balance text-3xl font-semibold leading-tight text-zinc-50 sm:text-4xl md:text-5xl">
            お問い合わせ
          </h1>
          <p className="max-w-2xl break-words whitespace-normal text-balance text-[13px] leading-relaxed text-zinc-300 sm:text-[15px]">
            小さな案件でも構いません。SNS運用相談、Web・アプリ制作依頼、経営・労務相談など、
            お気軽にご連絡ください。「一緒に成長していける相手」とのご縁を大切にします。
          </p>
        </section>

        {/* Success message */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl border border-[var(--accent-soft)] bg-black/40 p-6 accent-ring"
          >
            <p className="text-[15px] font-semibold text-zinc-100">
              お問い合わせありがとうございます。
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-zinc-300">
              坂井洸太が内容を確認し、24時間以内に返信いたします。
            </p>
          </motion.div>
        )}

        {/* Form */}
        {!submitted && (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-[12px] font-medium uppercase tracking-[0.18em] text-zinc-300"
              >
                お名前 <span className="text-[var(--accent)]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-[13px] text-zinc-100 placeholder-zinc-500 transition focus:border-[var(--accent-soft)] focus:bg-white/[0.04] focus:outline-none focus:ring-2 focus:ring-[var(--accent-soft)] sm:text-[14px]"
                placeholder="坂井 洸太"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-[12px] font-medium uppercase tracking-[0.18em] text-zinc-300"
              >
                メールアドレス <span className="text-[var(--accent)]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-[13px] text-zinc-100 placeholder-zinc-500 transition focus:border-[var(--accent-soft)] focus:bg-white/[0.04] focus:outline-none focus:ring-2 focus:ring-[var(--accent-soft)] sm:text-[14px]"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="block text-[12px] font-medium uppercase tracking-[0.18em] text-zinc-300"
              >
                ご用件 <span className="text-[var(--accent)]">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-[13px] text-zinc-100 transition focus:border-[var(--accent-soft)] focus:bg-white/[0.04] focus:outline-none focus:ring-2 focus:ring-[var(--accent-soft)] sm:text-[14px]"
                style={{ color: formData.subject ? '#f4f4f5' : '#f4f4f5' }}
              >
                <option value="" disabled style={{ color: '#000' }}>
                  ご用件を選択してください
                </option>
                <option value="SNS運用相談" style={{ color: '#000' }}>
                  SNS運用相談
                </option>
                <option value="Web・アプリ制作依頼" style={{ color: '#000' }}>
                  Web・アプリ制作依頼
                </option>
                <option value="経営・労務相談" style={{ color: '#000' }}>
                  経営・労務相談
                </option>
                <option value="その他" style={{ color: '#000' }}>
                  その他
                </option>
              </select>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-[12px] font-medium uppercase tracking-[0.18em] text-zinc-300"
              >
                メッセージ <span className="text-[var(--accent)]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-[13px] text-zinc-100 placeholder-zinc-500 transition focus:border-[var(--accent-soft)] focus:bg-white/[0.04] focus:outline-none focus:ring-2 focus:ring-[var(--accent-soft)] sm:text-[14px]"
                placeholder="お問い合わせ内容をご記入ください..."
              />
            </div>

            {/* Submit button */}
            <div className="pt-4">
              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full overflow-hidden rounded-full bg-[var(--accent)] px-6 py-3.5 text-[13px] font-semibold text-zinc-950 shadow-[0_0_25px_rgba(41,179,255,0.65)] transition hover:bg-[#4bc4ff] hover:shadow-[0_0_40px_rgba(41,179,255,0.85)] disabled:cursor-not-allowed disabled:opacity-50 sm:text-[14px]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {submitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-950 border-t-transparent" />
                      送信中...
                    </>
                  ) : (
                    "2026年の挑戦を支えるパートナーとして送信する"
                  )}
                </span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.button>
            </div>
          </form>
        )}

        {/* Footer */}
        <footer className="mt-4 flex flex-col justify-between gap-2 border-t border-white/[0.06] pt-4 text-[11px] text-zinc-500 sm:flex-row sm:items-center">
          <p>© 2026 坂井 洸太. All Rights Reserved.</p>
          <p className="text-[10px] text-zinc-600">
            お問い合わせフォーム — Web3Forms を使用
          </p>
        </footer>
      </motion.main>
    </div>
  );
}
