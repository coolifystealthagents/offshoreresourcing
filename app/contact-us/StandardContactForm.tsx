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
        .sa-form-card{box-sizing:border-box;width:100%;min-width:0;max-width:876px;margin:0 auto;background:#fff;border:1px solid var(--p-line,#e4e1da);border-radius:18px;padding:22px 24px 24px;box-shadow:0 2px 4px rgba(16,24,40,.04),0 24px 60px rgba(16,24,40,.10);color:var(--p-slate,#4e5766);text-align:left}
        h2{margin:0 0 14px;color:var(--p-ink,#101828);font-family:var(--p-font,'Manrope','Helvetica Neue',sans-serif);font-size:24px;line-height:1.2;font-weight:650;letter-spacing:-.03em}
        form{display:flex;min-width:0;flex-direction:column;gap:10px}.sa-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:12px}
        label{display:flex;min-width:0;flex-direction:column;gap:4px;font-size:12.5px;line-height:1.3;font-weight:600;color:var(--p-slate,#4e5766)}
        input,select,textarea{box-sizing:border-box;width:100%;min-width:0;max-width:100%;border:1px solid #d9d5cb;border-radius:9px;background:#fff;color:var(--p-ink,#101828);font:inherit;font-size:14px;padding:9px 11px;outline:none;min-height:42px}
        input::placeholder,textarea::placeholder{color:#8a92a0}input:focus,select:focus,textarea:focus{border-color:var(--p-cobalt,#2b4c7e);box-shadow:0 0 0 3px rgba(43,76,126,.14)}
        small{margin-top:-2px;color:var(--p-muted,#6b7280);font-size:11.5px;line-height:1.4;font-weight:400}.sa-phone{display:grid;grid-template-columns:92px 1fr;border:1px solid #d9d5cb;border-radius:9px;overflow:hidden}.sa-phone:focus-within{border-color:var(--p-cobalt,#2b4c7e);box-shadow:0 0 0 3px rgba(43,76,126,.14)}
        .sa-phone select,.sa-phone input{border:0;border-radius:0;box-shadow:none!important}.sa-phone select{border-right:1px solid #e4e1da;padding-right:8px}.sa-phone input{min-width:0}
        .sa-final-grid{align-items:start}.sa-final-fields{display:flex;min-width:0;flex-direction:column;gap:9px}textarea{resize:vertical;min-height:64px}button{width:100%;min-height:46px;border:1px solid var(--p-navy,#16233a);border-radius:10px;background:var(--p-navy,#16233a);color:#fff;padding:11px 18px;font-family:var(--p-font,'Manrope','Helvetica Neue',sans-serif);font-size:14px;font-weight:650;letter-spacing:0;text-transform:none;cursor:pointer;box-shadow:0 10px 22px rgba(16,24,40,.14)}
        button:hover{transform:translateY(-1px);background:var(--p-cobalt,#2b4c7e);border-color:var(--p-cobalt,#2b4c7e);box-shadow:0 14px 28px rgba(16,24,40,.18)}button:disabled{cursor:wait;opacity:.65}.sa-error{margin:0;color:#a32118;font-size:13px}.sa-hp{display:none!important}
        @media(max-width:700px){.sa-form-card{padding:22px 18px 26px;border-radius:16px}h2{margin-bottom:18px;font-size:24px;overflow-wrap:anywhere}form{gap:18px}.sa-grid{grid-template-columns:minmax(0,1fr);gap:18px}label{gap:7px;font-size:14px;font-weight:600}input,select,textarea{min-height:52px;border-radius:10px;padding:12px 14px;font-size:16px}.sa-phone{grid-template-columns:minmax(0,112px) minmax(0,1fr);border-radius:10px}.sa-final-fields{gap:18px}textarea{min-height:150px}button{min-height:56px;border-radius:10px;padding:16px 20px;font-size:16px}}
      `}</style>
    </div>
  );
}
