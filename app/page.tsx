export default function Home() {
  return (
    <div className="flex min-h-screen flex-1 justify-center px-4 py-6 text-sm text-zinc-100 sm:px-6 sm:py-10 lg:px-8">
      <main className="glass-panel relative mx-auto flex w-full max-w-5xl flex-col gap-10 border border-white/10 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <header className="flex flex-col gap-3 border-b border-white/5 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] text-sky-300">
              HOME / ACHIEVEMENTS
            </p>
            <h1 className="mt-2 break-words whitespace-normal text-balance text-2xl font-semibold text-zinc-50 sm:text-3xl lg:text-4xl">
              理学的な分析力で磨いた
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                {" "}
                成長と再現性ある実績
              </span>
            </h1>
          </div>
          <p className="break-words whitespace-normal text-[11px] leading-relaxed text-zinc-400 sm:max-w-[22rem]">
            多変数の相関を読み解き、事業に効く示唆を「数字」で示します。
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-2">
          {/* SNS achievements */}
          <article className="relative overflow-hidden rounded-2xl border border-sky-500/25 bg-gradient-to-br from-sky-900/30 via-black/80 to-violet-900/20 p-5 shadow-[0_18px_45px_rgba(8,47,73,0.7)] sm:p-6">
            <div className="pointer-events-none absolute -right-28 -top-24 h-56 w-56 rounded-full bg-sky-500/30 blur-3xl" />
            <header className="relative flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.18em] text-sky-300">
                  SNS 運用実績
                </p>
                <p className="mt-1 break-words whitespace-normal text-sm text-zinc-300">
                  Threads アカウントの成長をデータドリブンに加速。
                </p>
              </div>
              <span className="rounded-full border border-sky-400/60 bg-sky-500/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-100">
                Social
              </span>
            </header>

            <div className="relative mt-4 space-y-3 text-xs text-zinc-200">
              <div className="rounded-xl bg-black/40 px-3 py-3">
                <p className="text-[11px] text-zinc-400">
                  Threads 成長率 152.6%（2ヶ月）
                </p>
                <p className="mt-1 text-sm font-semibold text-sky-100">
                  950 → 1,450 フォロワーに増加
                </p>
                <p className="mt-1 text-[11px] text-zinc-300">
                  Typefully・nanobanana を用いた分析駆動型運用で、
                  エンゲージメント率 平均10%弱を維持。
                </p>
              </div>

              <div className="rounded-xl bg-black/30 px-3 py-3">
                <p className="text-[11px] text-zinc-400">
                  再現性のあるコンテンツ投下
                </p>
                <p className="mt-1 text-[12px] leading-relaxed text-zinc-200">
                  複数変数の規則性を読み解き、ヒット条件をパターン化。
                  分析→仮説→投稿→検証のループで持続的成長を実現。
                </p>
              </div>

              <p className="pt-1 text-[11px] text-zinc-400">
                指標の推移と因果を結びつけ、次の一手をロジカルに設計します。
              </p>
            </div>
          </article>

          {/* Web & app achievements */}
          <article className="relative overflow-hidden rounded-2xl border border-violet-500/25 bg-gradient-to-br from-violet-900/25 via-black/85 to-sky-900/20 p-5 shadow-[0_18px_45px_rgba(46,16,101,0.7)] sm:p-6">
            <div className="pointer-events-none absolute -left-24 -bottom-28 h-60 w-60 rounded-full bg-violet-500/30 blur-3xl" />
            <header className="relative flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.18em] text-violet-300">
                  Web・アプリ制作実績
                </p>
                <p className="mt-1 break-words whitespace-normal text-sm text-zinc-300">
                  ピッチ優勝を獲得した飲食店レコメンドサービスほか。
                </p>
              </div>
              <span className="rounded-full border border-violet-400/60 bg-violet-500/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-100">
                Web & App
              </span>
            </header>

            <div className="relative mt-4 space-y-3 text-xs text-zinc-200">
              <div className="rounded-xl bg-black/40 px-3 py-3">
                <p className="text-[11px] text-zinc-400">
                  訪日客向け飲食店レコメンドサービス「LocalEyes」
                </p>
                <p className="mt-1 text-sm font-semibold text-violet-100">
                  QUSIS「ゼロイチ」ピッチ優勝
                </p>
                <p className="mt-1 text-[11px] text-zinc-300">
                  訪日客ニーズと地元飲食店を最適マッチングする
                  アルゴリズムを設計し、プロダクトを実装。
                </p>
              </div>

              <div className="rounded-xl bg-black/30 px-3 py-3">
                <p className="text-[11px] text-zinc-400">
                  業務自動化 / 一気通貫ログインRPA
                </p>
                <p className="mt-1 text-[12px] leading-relaxed text-zinc-200">
                  煩雑なログイン・データ取得を自動化し、作業時間を大幅圧縮。
                  ボトルネックを特定し、処理の安定性と再現性を確保。
                </p>
              </div>

              <p className="pt-1 text-[11px] text-zinc-400">
                課題定義 → 解法設計 → 実装 → 検証までを一気通貫で行います。
              </p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
