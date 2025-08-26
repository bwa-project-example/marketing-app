"use client";

import { useEffect } from "react";
import FacebookPixel from "@/components/FacebookPixel";

const CHECKOUT_LINK = "http://tribel.io/checkout-framework-ninja";
const TOTAL_QUOTA = 100;
const SEED_CLAIMED = 85;

export default function Page() {
  useEffect(() => {
    // === Countdown 48 jam (persist di localStorage) ===
    const KEY = "ninja_eb_deadline";
    const now = Date.now();
    let deadline = localStorage.getItem(KEY);
    if (!deadline) {
      deadline = String(now + 48 * 60 * 60 * 1000);
      localStorage.setItem(KEY, deadline);
    }

    const countdown = document.getElementById("countdown");
    const countdownMini = document.getElementById("countdownMini");

    const fmt = (n: number) => String(n).padStart(2, "0");
    const tick = () => {
      const end = Number(localStorage.getItem(KEY));
      const t = Math.max(0, end - Date.now());
      const h = Math.floor(t / 3600000);
      const m = Math.floor((t % 3600000) / 60000);
      const s = Math.floor((t % 60000) / 1000);
      const text = `${fmt(h)}:${fmt(m)}:${fmt(s)}`;
      if (countdown) countdown.textContent = text;
      if (countdownMini) countdownMini.textContent = text;
    };

    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    // === Kuota bar ===
    const claimed = Math.min(TOTAL_QUOTA, SEED_CLAIMED);
    const pct = Math.round((claimed / TOTAL_QUOTA) * 100);
    const bar = document.getElementById("quotaBar");
    const txt = document.getElementById("quotaText");
    if (bar) (bar as HTMLDivElement).style.width = `${pct}%`;
    if (txt) txt.textContent = `Kuota ${TOTAL_QUOTA} pembeli pertama • ${claimed}/${TOTAL_QUOTA} telah klaim`;
    const year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
  }, []);

  const handleClickCTA = () => {
    console.log("CTA clicked");
  };

  return (
    <main>
      <FacebookPixel />
      <div className="lp-panel">
        <div className="lp-body">
          {/* HERO */}
          <section className="text-center">
            <span className="eyebrow">Raih Penjualan Pertama</span>
            <h1 className="headline mt-2">
              Produk Digital dalam <span className="text-warning">14 Hari</span> Cukup 1–2 Jam/Hari
            </h1>
            <p className="subhead mx-auto mt-3">
              Buat kamu yang gajinya mentok dan capek rutinitas kerja kantoran kini ada jalur 14 hari praktis
              untuk dapat penjualan pertama produk digital, cukup 1–2 jam per hari dibantu AI.
            </p>

            <div className="book-card mt-4 p-4">
              <img
                className="book-img"
                src="https://storage.googleapis.com/lp-my-assets/cover%20ebook1.webp"
                alt="Cover Ebook Framework NINJA – Jual Produk Digital dalam 14 Hari"
                width={280}
                height={350}
              />
              <p className="author mt-3 mb-2">
                Ditulis oleh <strong>Faisal Ilhami Akbar</strong>
              </p>
              <div className="d-flex flex-column flex-md-row align-items-center gap-3 justify-content-center mt-2">
                <a href="#harga" className="btn btn-cta btn-lg" onClick={handleClickCTA}>
                  <i className="bi bi-lightning-charge-fill me-1" /> Ambil Early-Bird Rp79.000
                </a>
                <div className="text-start micro">
                  <div><i className="bi bi-shield-check me-1" />Akses seumur hidup</div>
                  <div><i className="bi bi-headset me-1" />Support selamanya</div>
                  <div><i className="bi bi-arrow-repeat me-1" />Free update versi</div>
                </div>
              </div>
            </div>
          </section>

          {/* QUICK BENEFITS */}
          <section className="mt-5">
            <div className="row g-3">
              <div className="col-md-4">
                <div className="card-lite p-3 h-100">
                  <div className="d-flex align-items-center mb-2">
                    <span className="feature-icon"><i className="bi bi-clock-history" /></span>
                    <h6 className="m-0 short-benefit-title">Langkah Praktis</h6>
                  </div>
                  <p className="mb-0 micro">Step-by-step jelas dari <strong>pilih niche sampai ke jualan.</strong></p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-lite p-3 h-100">
                  <div className="d-flex align-items-center mb-2">
                    <span className="feature-icon"><i className="bi bi-cpu" /></span>
                    <h6 className="m-0 short-benefit-title">Dibantu AI</h6>
                  </div>
                  <p className="mb-0 micro">Mulai Riset, cari ide, nulis, dan promosi <strong>jadi ebih cepat</strong>.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-lite p-3 h-100">
                  <div className="d-flex align-items-center mb-2">
                    <span className="feature-icon"><i className="bi bi-flag" /></span>
                    <h6 className="m-0 short-benefit-title">Target Jelas</h6>
                  </div>
                  <p className="mb-0 micro">Fokus ke <strong>penjualan pertama</strong> (model tripwire).</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-5">
            <div className="kicker mb-2">Apa yang Bikin Beda?</div>
            <div className="card-lite p-4">
              <ul className="list-check micro mb-0">
                <li><strong>NINJA:</strong> 14 hari, 5 fase, tugas & output jelas — nggak bingung mulai.</li>
                <li><strong>Mindset anti-perfeksionis:</strong> rilis cepat, iterasi belakangan.</li>
                <li><strong>Toolset minimum:</strong> ditambah Prompt AI siap pakai untuk percepatan.</li>
                <li><strong>Value ladder praktis:</strong> bangun trust dulu, baru jual — tanpa maksa.</li>
              </ul>
            </div>
          </section>

          {/* YES-YET + PAIN/PLEASURE */}
          <section className="mt-5">
            <div className="kicker mb-2">Kenapa framework ini relevan?</div>
            <div className="card-lite p-4">
              <p className="mb-3">
                <strong>Framework ini relevan karena dibuat khusus untuk pekerja kantoran yang gajinya mentok, waktunya terbatas, dan sering bingung mulai. </strong>
                Masalahnya bukan kurang kerja keras, tapi karena <em>salah peta alias gatau arah</em>. Framework NINJA memberikan jalur 14 hari yang realistis dan ringan untuk dikerjakan setelah jam kantor.
              </p>
              <div className="row g-4 mt-1">
                <div className="col-md-6">
                  <h6 className="text-danger mb-2"><i className="bi bi-emoji-frown me-1" /> Masalah yang sering kamu rasakan</h6>
                  <ul className="pain-pleasure micro mb-0">
                    <li className="pain-pleasure">Gaji stagnan, biaya hidup naik, <em>stuck</em> dengan 1 sumber penghasilan.</li>
                    <li className="pain-pleasure">Pulang kerja capek, waktu terbatas, <em>overthinking</em> mulai dari mana.</li>
                    <li className="pain-pleasure">Takut jualan & bingung copywriting/landing page.</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h6 className="text-success mb-2"><i className="bi bi-emoji-smile me-1" /> Hasil yang kamu incar</h6>
                  <ul className="micro mb-0">
                    <li className="pain-pleasure">Penjualan pertama dalam ≤14 hari (tripwire Rp15k–149k).</li>
                    <li className="pain-pleasure">Rencana harian 1–2 jam: jelas, ringan, terukur.</li>
                    <li className="pain-pleasure">Kepercayaan diri naik punya “mesin uang otomatis” pemasukan dari rumah.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* PAIN REMINDER */}
          <section className="mt-4" id="risk">
            <div className="card-lite p-4" style={{ background:"#1b0f12", border:"1px solid rgba(255,99,99,.18)" }}>
              <div className="d-flex align-items-start gap-3">
                <i className="bi bi-exclamation-octagon-fill" style={{ color:"#dc3545" }} />
                <div>
                  <h6 className="mb-1 text-danger">Realita yang sering kita rasakan</h6>
                  <p className="micro mb-0">
                    <strong>Jangan cuma mengandalkan gaji sebagai satu-satunya income.</strong> Kalau ada masalah di kantor, kamu bisa kelabakan tanpa sumber <em>income</em> lain.
                    Risiko nyata: <b>kebijakan efisiensi</b>, <b>perusahaan bangkrut</b>, atau yang paling parah <b>PHK mendadak</b>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="card-lite p-3 mb-4 mt-4" style={{ background:"#0f172a", border:"1px solid #38bdf8", color:"#e0f2fe" }}>
            <span className="small">
              Agar gak kelabakan saat kondisi kantor berubah, mulailah bangun sumber income kedua sekarang.
              <strong> Inilah isi, manfaat, dan bonus eksklusif yang langsung kamu dapatkan dari Framework NINJA:</strong>
            </span>
          </div>

          {/* WHAT INSIDE / DETAIL BENEFIT */}
          <section className="mt-5">
            <div className="kicker mb-2">Apa yang kamu dapat?</div>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="card-lite p-4 h-100">
                  <h5 className="mb-3 short-benefit-title">Materi Super Lengkap</h5>
                  <ul className="list-check micro mb-0">
                    <li><strong>Pilih niche tanpa drama</strong> → langsung tahu siapa targetmu, masalah mereka, dan hasil yang mereka cari.</li>
                    <li><strong>Validasi simpel</strong> → cukup polling mini atau smoke test (20–50 visit) untuk pastikan ide laku, bukan sekadar feeling.</li>
                    <li><strong>Bikin produk v1.0 cepat</strong> → tinggal pakai template siap pakai + bantuan AI, nggak perlu mulai dari nol.</li>
                    <li><strong>Atur harga psikologis</strong> → tampilkan harga normal sebagai <em>anchor</em>, lalu kasih <em>early-bird 48 jam</em> biar calon pembeli merasa hemat & takut ketinggalan.</li>
                    <li><strong>Launch kecil, iterasi cepat</strong> → rilis ke circle kecil, dapetin feedback nyata, langsung upgrade ke versi selanjutnya.</li>
                    <li>Dan masih banyak lagi.</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-lite p-4 h-100">
                  <h5 className="mb-3 short-benefit-title">Bonus Spesial</h5>
                  <ul className="list-check micro mb-0">
                    <li><strong>Goal Mapping Sheet</strong> → kunci tujuan & alasan pribadi biar konsisten.</li>
                    <li><strong>Niche Selector Matrix</strong> → pilih niche tanpa bingung.</li>
                    <li><strong>Market Validation Checklist</strong> → panduan validasi ide sebelum rilis.</li>
                    <li><strong>Product Creation Planner</strong> → rencana praktis bikin produk dari nol.</li>
                    <li><strong>Prompt ChatGPT siap pakai</strong> → percepat riset, copy, & promosi.</li>
                    <li><strong>Ebook: 20+ Niche Profitable</strong> → ide niche terbukti cuan.</li>
                    <li><strong>Ebook: 15 Ide Produk Digital Cuan Tinggi</strong> → inspirasi ide produk digital siap jual.</li>
                    <li><strong>Group Whatsapp Eksklusif</strong> → tempat diskusi, sharing & tanya jawab bersama member lainnya agar tetap terhubung.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* USP / ALASAN HARUS BELI */}
          <section className="mt-5">
            <div className="kicker mb-2">Kenapa harus framework NINJA?</div>
            <div className="card-lite p-4">
              <div className="row g-4 align-items-center">
                <div className="col-md-6">
                  <ul className="list-check micro mb-0">
                    <li>Dirancang khusus pekerja 9–5: semua langkah 1–2 jam/hari.</li>
                    <li>Dibantu AI: hemat energi pada riset, nulis, dan promosi.</li>
                    <li>Time-to-value cepat: target ≥1 penjualan dalam 14 hari.</li>
                    <li>Delivery simpel: PDF/Link siap kirim tanpa sistem ribet.</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <div className="p-3 rounded-3" style={{ background:"#0c1730", border:"1px dashed rgba(255,255,255,.15)" }}>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-patch-check-fill text-success fs-3 me-3" />
                      <div className="micro">
                        <div><strong>Dukungan selamanya</strong> via group whatsapp.</div>
                        <div className="mt-1"><strong>Free update versi selanjutnya</strong> otomatis saat rilis berikutnya.</div>
                      </div>
                    </div>
                  </div>
                  <div className="small mt-2" style={{ color:"#E5E7EB" }}>
                    Tidak ada refund, tapi <strong>tenang</strong> kamu tetap aman karena dapat <strong>akses seumur hidup</strong> + <strong>update gratis</strong>.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PRICING / CTA */}
          <section id="harga" className="mt-5">
            <div className="card-lite p-4">
              <div className="d-flex flex-column flex-md-row align-items-center gap-3 text-center text-md-start justify-content-md-between">
                {/* Teks harga */}
                <div className="w-100">
                  <div className="micro text-uppercase text-info fw-bold">Early-Bird 48 Jam</div>
                  <div className="price mt-1">
                    <span className="strike">Rp149.000</span> <span>Rp79.000</span>
                  </div>
                  <div className="micro mt-1">
                    Berakhir dalam <span id="countdown" className="fw-bold text-warning">—:—:—</span> • <span id="quotaText">Kuota 100 pembeli pertama</span>
                  </div>
                </div>
                {/* Tombol */}
                <div className="text-center text-md-end w-100 w-md-auto">
                  <a id="ctaTop" target="_blank" href={CHECKOUT_LINK} className="btn btn-cta btn-lg px-4" onClick={handleClickCTA}>
                    <i className="bi bi-cart-check me-1" /> Dapatkan Sekarang
                  </a>
                  <div className="micro mt-2"><i className="bi bi-shield-lock me-1" />Pembayaran aman via tribelio</div>
                </div>
              </div>

              {/* Progress */}
              <div className="mt-3">
                <div className="progress" role="progressbar" aria-label="Progress kuota" aria-valuemin={0} aria-valuemax={100}>
                  <div id="quotaBar" className="progress-bar" style={{ width: "0%" }} />
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-5">
            <div className="kicker mb-2">FAQ singkat</div>
            <div className="accordion" id="faq">
              <div className="accordion-item bg-transparent text-light border-secondary">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#q1">
                    Saya sibuk kerja gak ada waktu?
                  </button>
                </h2>
                <div id="q1" className="accordion-collapse collapse" data-bs-parent="#faq">
                  <div className="accordion-body micro">Cukup 1–2 jam/hari, step-by-step. Bisa dikerjakan malam hari. Fokus ke penjualan pertama (tripwire Rp15k–149k) dulu, lalu upgrade ke produk utama.</div>
                </div>
              </div>
              <div className="accordion-item bg-transparent text-light border-secondary">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#q2">
                    Perlu skill desain/coding?
                  </button>
                </h2>
                <div id="q2" className="accordion-collapse collapse" data-bs-parent="#faq">
                  <div className="accordion-body micro">Tidak. Kita pakai alat sederhana + AI (untuk riset, nulis, desain ringan). Fokusnya eksekusi cepat & rapi.</div>
                </div>
              </div>
              <div className="accordion-item bg-transparent text-light border-secondary">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#q3">
                    Ada jaminan?
                  </button>
                </h2>
                <div id="q3" className="accordion-collapse collapse" data-bs-parent="#faq">
                  <div className="accordion-body micro">Tidak ada jaminan. kecuali kamu konsisten dan fokus serta mau meluangkan waktu untuk sukses.</div>
                </div>
              </div>
              <div className="accordion-item bg-transparent text-light border-secondary">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#q4">
                    Kapan saya bisa mulai jualan?
                  </button>
                </h2>
                <div id="q4" className="accordion-collapse collapse" data-bs-parent="#faq">
                  <div className="accordion-body micro">Targetnya ≤14 hari untuk penjualan pertama (model tripwire). Kamu akan menyiapkan landing 1 halaman, pricing early-bird, dan soft-launch kecil.</div>
                </div>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="mt-5">
            <div className="text-center p-4 card-lite">
              <h4 className="mb-2 short-benefit-title">Siap Gaspol Abis Jam Kantor?</h4>
              <p className="micro mb-3">Ambil harga early-bird sebelum waktu/kuota habis. Beli sekali, akses seumur hidup.</p>
              <a href="#harga" className="btn btn-cta btn-lg" onClick={handleClickCTA}>
                <i className="bi bi-lightning-charge-fill me-1" /> Ambil Early-Bird Rp79.000
              </a>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="text-center micro mt-4">
            <div>© <span id="year"></span> Faisal Ilhami Akbar • Framework NINJA</div>
          </footer>
        </div>
      </div>

      {/* Sticky CTA mobile */}
      <div className="sticky-cta d-md-none p-2">
        <div className="d-flex align-items-center justify-content-between gap-2">
          <div className="micro ps-2">
            <div className="fw-bold">Early-Bird <span className="text-warning">Rp79.000</span></div>
            <div style={{ color: '#E5E7EB' }}>Sisa waktu: <span id="countdownMini">—:—:—</span></div>
          </div>
          <a href={CHECKOUT_LINK} target="_blank" className="btn btn-cta btn-lg" onClick={handleClickCTA}>
            <i className="bi bi-cart" /> Beli
          </a>
        </div>
      </div>
    </main>
  );
}

function PixelMount() {
  const FacebookPixel = require("../../../components/FacebookPixel").default;
  return <FacebookPixel />;
}
