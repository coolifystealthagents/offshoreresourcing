"use client";

import { useEffect, useState, type FormEvent } from "react";

type Props = { endpoint?: string; encoding?: "json" | "form" };
type TrackerWindow = Window & { acrTracker?: { trackLead?: (payload: Record<string, unknown>) => void } };

const companySizes = ["1-5", "5-10", "11-50", "51-250", "251-1k", "1k+"];
const positions = ["Just 1 Position", "2-5 Positions", "6-10 Positions", "11-50 Positions", "51-100 Positions", "101-500 Positions", "501-1,000 Positions", "Over 1,000 Positions"];
const referrals = ["Google", "Email", "LinkedIn", "Reddit", "X / Twitter", "Referral", "ChatGPT / AI", "Outbound Outreach", "Other"];
const countryCodes = [
  ["🇺🇸", "+1"], ["🇨🇦", "+1"], ["🇮🇩", "+62"], ["🇵🇭", "+63"], ["🇬🇧", "+44"],
  ["🇦🇺", "+61"], ["🇳🇿", "+64"], ["🇸🇬", "+65"], ["🇮🇳", "+91"], ["🇦🇪", "+971"],
  ["🇲🇽", "+52"], ["🇧🇷", "+55"], ["🇿🇦", "+27"], ["🇩🇪", "+49"], ["🇫🇷", "+33"],
];

export default function StandardContactForm({ endpoint = "/api/contact", encoding = "form" }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [referral, setReferral] = useState("");

  useEffect(() => {
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const zones: Record<string, string> = {
      "Asia/Jakarta": "+62", "Asia/Makassar": "+62", "Asia/Jayapura": "+62", "Asia/Manila": "+63",
      "Europe/London": "+44", "Australia/Sydney": "+61", "Australia/Melbourne": "+61",
      "Pacific/Auckland": "+64", "Asia/Singapore": "+65", "Asia/Kolkata": "+91", "Asia/Dubai": "+971",
    };
    if (zones[zone]) setCountryCode(zones[zone]);
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("website_url") || "").trim()) return;
    const firstName = String(data.get("firstName") || "").trim();
    const lastName = String(data.get("lastName") || "").trim();
    const phone = `${countryCode} ${String(data.get("phoneLocal") || "").trim()}`.trim();
    const payload: Record<string, string> = {
      firstName, lastName, name: `${firstName} ${lastName}`.trim(), fullName: `${firstName} ${lastName}`.trim(),
      email: String(data.get("email") || ""), businessEmail: String(data.get("email") || ""), phone,
      companyName: String(data.get("companyName") || ""), company: String(data.get("companyName") || ""),
      website: String(data.get("website") || ""), companySize: String(data.get("companySize") || ""),
      positions: String(data.get("positions") || ""), positionsToFill: String(data.get("positions") || ""),
      referral: String(data.get("referral") || ""), howTheyHeard: String(data.get("referral") || ""),
      referralSpecify: String(data.get("referralSpecify") || ""), message: String(data.get("message") || ""),
      source: "contact-form", formId: "contactPageForm",
    };
    setSubmitting(true);
    setError("");
    try {
      const request: RequestInit = encoding === "form"
        ? { method: "POST", headers: { Accept: "application/json" }, body: new URLSearchParams(payload) }
        : { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) };
      const response = await fetch(endpoint, request);
      if (!response.ok) throw new Error("Lead endpoint rejected the request");
      try {
        (window as TrackerWindow).acrTracker?.trackLead?.({
          ...payload,
          source: "contact-form",
          formId: "contactPageForm",
        });
      } catch {}
      window.location.assign("/thank-you");
    } catch {
      setError("We could not submit your request. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <div className="sa-form-card">
      <h2>Tell us about the role</h2>
      <form action={endpoint} method="post" onSubmit={submit} id="contactPageForm">
        <input className="sa-hp" name="website_url" type="hidden" tabIndex={-1} autoComplete="off" aria-label="Leave this field empty" />
        <div className="sa-grid">
          <label>First Name *<input name="firstName" required autoComplete="given-name" /></label>
          <label>Last Name *<input name="lastName" required autoComplete="family-name" /></label>
        </div>
        <div className="sa-grid">
          <label>Business Email *<input name="email" type="email" required autoComplete="email" /></label>
          <label>Phone Number *<span className="sa-phone"><select name="countryCode" aria-label="Country code" value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>{countryCodes.map(([flag, code], i) => <option value={code} key={`${code}-${i}`}>{flag} {code}</option>)}</select><input name="phoneLocal" type="tel" required autoComplete="tel-national" placeholder="Phone number" /></span></label>
        </div>
        <div className="sa-grid">
          <label>Company Name *<input name="companyName" required autoComplete="organization" /></label>
          <label>Website / URL<input name="website" placeholder="example.com" autoComplete="url" /></label>
        </div>
        <div className="sa-grid">
          <label>Company Size *<select name="companySize" required defaultValue=""><option value="" disabled>Select...</option>{companySizes.map((x) => <option key={x}>{x}</option>)}</select></label>
          <label>How Many Positions to Fill *<select name="positions" required defaultValue=""><option value="" disabled>Select...</option>{positions.map((x) => <option key={x}>{x}</option>)}</select></label>
        </div>
        <div className="sa-grid sa-final-grid">
          <div className="sa-final-fields">
            <label>How Did You Hear About Us? *<select name="referral" required value={referral} onChange={(e) => setReferral(e.target.value)}><option value="" disabled>Select...</option>{referrals.map((x) => <option key={x}>{x}</option>)}</select></label>
            {referral === "Other" ? <label>Please Specify *<input name="referralSpecify" required /></label> : null}
          </div>
          <label>Message<textarea name="message" rows={4} /></label>
        </div>
        {error ? <p className="sa-error" role="alert">{error}</p> : null}
        <button type="submit" disabled={submitting}>{submitting ? "Submitting..." : "Book a Free Consultation"}</button>
      </form>
      <style jsx>{`
        .sa-form-card{box-sizing:border-box;width:100%;min-width:0;max-width:876px;margin:0 auto;background:#fff;border:1px solid var(--bp-ink,#0c1226);border-radius:0;padding:16px 20px 18px;box-shadow:none;color:var(--bp-slate,#39425c);text-align:left}
        h2{margin:0 0 10px;color:var(--bp-ink,#0c1226);font-family:var(--bp-display,'Trebuchet MS',sans-serif);font-size:20px;line-height:1.15;font-weight:700;letter-spacing:-.03em}
        form{display:flex;min-width:0;flex-direction:column;gap:8px}.sa-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:12px}
        label{display:flex;min-width:0;flex-direction:column;gap:3px;font-size:12px;line-height:1.25;font-weight:600;color:var(--bp-slate,#39425c)}
        input,select,textarea{box-sizing:border-box;width:100%;min-width:0;max-width:100%;border:1px solid #c7cfdf;border-radius:0;background:#fff;color:var(--bp-ink,#0c1226);font:inherit;font-size:13px;padding:7px 10px;outline:none;min-height:37px}
        input::placeholder,textarea::placeholder{color:#6b7488}input:focus,select:focus,textarea:focus{border-color:var(--bp-blue,#2b3bff);box-shadow:0 0 0 2px rgba(43,59,255,.18)}
        small{margin-top:-2px;color:var(--bp-muted,#5b6478);font-size:10.5px;line-height:1.35;font-weight:400}.sa-phone{display:grid;grid-template-columns:88px 1fr;border:1px solid #c7cfdf;border-radius:0;overflow:hidden}.sa-phone:focus-within{border-color:var(--bp-blue,#2b3bff);box-shadow:0 0 0 2px rgba(43,59,255,.18)}
        .sa-phone select,.sa-phone input{border:0;border-radius:0;box-shadow:none!important}.sa-phone select{border-right:1px solid #c7cfdf;padding-right:7px}.sa-phone input{min-width:0}
        .sa-final-grid{align-items:start}.sa-final-fields{display:flex;min-width:0;flex-direction:column;gap:8px}textarea{resize:vertical;min-height:64px}button{width:100%;min-height:44px;border:1px solid var(--bp-ink,#0c1226);border-radius:0;background:var(--bp-blue,#2b3bff);color:#fff;padding:10px 16px;font-family:var(--bp-mono,monospace);font-size:10px;font-weight:500;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;box-shadow:none}
        button:hover{transform:none;background:var(--bp-lime,#dcff4f);color:var(--bp-ink,#0c1226);box-shadow:none}button:disabled{cursor:wait;opacity:.65}.sa-error{margin:0;color:#a32118;font-size:12.5px}.sa-hp{display:none!important}
        @media(max-width:700px){.sa-form-card{padding:20px 16px 24px;border-radius:0}h2{margin-bottom:18px;font-size:24px;overflow-wrap:anywhere}form{gap:22px}.sa-grid{grid-template-columns:minmax(0,1fr);gap:22px}label{gap:8px;font-size:16px;font-weight:550}input,select,textarea{min-height:52px;border-radius:0;padding:12px 14px;font-size:16px}.sa-phone{grid-template-columns:minmax(0,112px) minmax(0,1fr);border-radius:0}.sa-final-fields{gap:22px}textarea{min-height:150px}button{min-height:56px;border-radius:0;padding:16px 20px;font-size:12px}}
      `}</style>
    </div>
  );
}
