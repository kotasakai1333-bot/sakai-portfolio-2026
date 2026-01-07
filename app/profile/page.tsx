export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-1 justify-center px-4 py-6 text-sm text-zinc-100 sm:px-6 sm:py-10 md:px-8">
      <main className="glass-panel relative mx-auto flex w-full max-w-4xl flex-col gap-8 border border-white/10 px-5 py-6 sm:px-6 sm:py-8 md:px-8">
        <header className="border-b border-white/5 pb-5">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-violet-300">
            PROFILE
          </p>
          <h1 className="mt-2 break-words whitespace-normal text-balance text-3xl font-semibold leading-tight text-zinc-50 sm:text-4xl md:text-5xl">
            坂井 洸太 (Kota Sakai) ― 九州発、
            <span className="text-sky-300">多変数の動向分析</span>を武器にする理学部生。
          </h1>
        </header>

        <section className="space-y-6">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
            <div className="space-y-4 text-[13px] leading-relaxed text-zinc-200">
              <p>
                九州大学 理学部 物理学科 国際理学コース在籍。
                鹿児島県出身。西大和学園高校から高卒認定を経て九州大学へ。
                QUSIS（九大起業部）では渉外担当として活動し、
                Giving Campaign 2025 では統括として6つの賞受賞に貢献。
              </p>
              <p>
                強みは、理学的な
                <span className="text-sky-300">多変数の動向分析</span>
                と、そろばん県2位に裏打ちされた圧倒的な数値感覚。
                日本数学オリンピック・日本言語学オリンピックでも受賞歴があり、
                パターン認識と仮説検証を高速で回します。
              </p>
              <p>
                投資会社、ふるさと納税自治体委託業者でのインターンを通じ、
                ファイナンス視点と実務オペレーションの両面から事業を理解。
                データで示し、プロダクトで具現化する事業家を志向しています。
              </p>
            </div>

            <div className="space-y-3 rounded-2xl border border-white/10 bg-black/40 p-4 text-[12px] text-zinc-200">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-zinc-400">
                BASIC INFO
              </p>
              <dl className="space-y-2">
                <div className="flex justify-between gap-3">
                  <dt className="text-zinc-400">年齢</dt>
                  <dd className="text-zinc-100">19歳</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-zinc-400">所属</dt>
                  <dd className="text-zinc-100">
                    九州大学 理学部 物理学科 国際理学コース
                  </dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-zinc-400">興味・専門</dt>
                  <dd className="text-right text-zinc-100">
                    多変数分析 / Web・アプリ開発 / 事業デザイン
                  </dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-zinc-400">強み</dt>
                  <dd className="text-right text-zinc-100">
                    数値感覚 / パターン認識 / 仮説検証の高速サイクル
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <section className="rounded-2xl border border-zinc-800 bg-black/50 p-4 sm:p-5">
            <h2 className="text-[12px] font-semibold tracking-[0.16em] text-zinc-300">
              理学の分析力を、事業の推進力へ
            </h2>
            <p className="mt-3 text-[13px] leading-relaxed text-zinc-300">
              そろばんと理学で培った「数字を瞬時に捉える感覚」と、
              多変量データのパターンを抽出する分析力を、事業文脈に転用します。
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-zinc-300">
              仮説を立て、検証し、改善するサイクルを「数字で語れる形」で回し、
              Web・アプリという具体的なプロダクトに落とし込むことで、
              事業の成長を伴走します。
            </p>
          </section>
        </section>
      </main>
    </div>
  );
}

