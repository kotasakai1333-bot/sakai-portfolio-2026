export default function VisionPage() {
  return (
    <div className="flex min-h-screen flex-1 justify-center px-4 py-6 text-sm text-zinc-100 sm:px-6 sm:py-10 lg:px-8">
      <main className="glass-panel relative mx-auto flex w-full max-w-4xl flex-col gap-8 border border-white/10 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <header className="border-b border-white/5 pb-5">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-sky-300">
            2026 VISION
          </p>
          <h1 className="mt-2 break-words whitespace-normal text-balance text-2xl font-semibold text-zinc-50 sm:text-3xl">
            2026：分析・提言から「実務の実装」までを
            一気通貫する伴走者へ
          </h1>
          <p className="mt-2 break-words whitespace-normal text-[13px] leading-relaxed text-zinc-300">
            IT事業による経済的自立（年間収益250万円）と、
            コンサル×ITを一人で完結させる専門性の統合を目指します。
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <article className="space-y-4 text-[13px] leading-relaxed text-zinc-200">
            <p>
              2026年、IT事業を通じた年間収益<span className="text-sky-300">250万円</span>
              の達成を掲げると同時に、起業家の挑戦を全方位から支える
              「専門性の統合」を実現します。
            </p>
            <p>
              現在、経営コンサルティングの国家資格である
              中小企業診断士、および労務管理のスペシャリストである
              社会保険労務士の取得に向けて邁進中です。
              2026年中に両資格を手にし、法律・労務・経営戦略の確かな知識に
              基づく精度の高い事業分析と提言を行います。
            </p>
            <p>
              私のビジョンは、分析して終わりではありません。理学部で培った
              論理的思考力と、自らWebサイトやアプリを構築できるITスキルを
              組み合わせ、戦略に基づいたシステムやプロダクトをその場で形にします。
            </p>
          </article>

          <aside className="space-y-3 rounded-2xl border border-sky-500/40 bg-black/50 p-4 text-[12px] text-zinc-100 shadow-[0_18px_45px_rgba(8,47,73,0.75)]">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-sky-300">
              2026年の行動指針
            </p>
            <ul className="space-y-2 text-[12px] leading-relaxed">
              <li>
                ・毎月1件以上の制作・改善プロジェクトに関わる
              </li>
              <li>
                ・週に1回、学びや成果をSNSで発信し続ける
              </li>
              <li>
                ・四半期ごとに目標・実績を振り返り、軌道修正する
              </li>
            </ul>
            <p className="pt-1 text-[11px] text-zinc-400">
              伴走者として「効果が出るまでやりきる」運用と検証を徹底します。
            </p>
          </aside>
        </section>

        <section className="mt-2 space-y-3 rounded-2xl border border-violet-500/30 bg-gradient-to-r from-violet-900/40 via-black/70 to-sky-900/30 p-4 text-[13px] leading-relaxed text-zinc-100 sm:p-5">
          <h2 className="text-[12px] font-semibold tracking-[0.16em] text-violet-200">
            提言だけで終わらない「実装力」との融合
          </h2>
          <p>
            労務管理や年金の相談に応じながら、同時に業務効率化のための
            Webシステムを構築する。「経営の頭脳」と「開発の手」を併せ持つ
            ことで、現場で使える形に落とし込みます。
          </p>
          <p>
            地元九州の教育とイノベーションを軸に、地方創生へ貢献する伴走者として、
            分析・提言から実装までを一気通貫で提供していきます。
          </p>
        </section>
      </main>
    </div>
  );
}

