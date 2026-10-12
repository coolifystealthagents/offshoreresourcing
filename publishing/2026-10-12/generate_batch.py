from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import json, textwrap

ROOT = Path(__file__).resolve().parents[2]
DATE = "2026-10-12"
BLOGS = [
 ("offshore-role-service-boundary-map", "Map Service Boundaries Before an Offshore Role Goes Live"),
 ("offshore-queue-assumption-register", "Build an Assumption Register for an Offshore Work Queue"),
 ("offshore-coverage-overlap-decision-log", "Run a Coverage Overlap Decision Log Across Time Zones"),
 ("offshore-exception-rehearsal", "Rehearse Exceptions Before Expanding Offshore Work"),
 ("offshore-approval-latency-budget", "Set an Approval Latency Budget for Offshore Operations"),
 ("offshore-access-dependency-map", "Create an Access Dependency Map for Offshore Staff"),
 ("offshore-pilot-acceptance-rubric", "Use a Pilot Acceptance Rubric for Offshore Resourcing"),
 ("offshore-manager-capacity-checkpoint", "Add a Manager Capacity Checkpoint Before Offshore Expansion"),
 ("offshore-instruction-decay-review", "Review Instruction Decay in a Mature Offshore Workflow"),
 ("offshore-incident-handoff-across-time-zones", "Design an Incident Handoff Across Offshore Time Zones"),
 ("offshore-vendor-transition-evidence-pack", "Prepare an Evidence Pack for an Offshore Vendor Transition"),
 ("offshore-queue-recovery-playbook", "Build a Queue Recovery Playbook After an Offshore Disruption"),
]
RESEARCH = [
 {"slug":"manager-review-latency-distributed-service-reliability", "title":"Manager Review Latency and Distributed Service Reliability", "label":"manager review latency", "question":"How should a distributed team observe the effect of manager review delay without confusing waiting time with specialist performance?", "unit":"an eligible item requiring a documented manager decision", "finding":"Review delay becomes operationally meaningful when the queue records readiness, decision request, response, downstream acceptance, and any correction as separate events."},
 {"slug":"evidence-completeness-offshore-role-pilots", "title":"Evidence Completeness in Offshore Role Pilots", "label":"pilot evidence completeness", "question":"What evidence makes an offshore role pilot useful for a go, narrow, redesign, or stop decision?", "unit":"a preselected routine or adverse pilot case", "finding":"A pilot is decision-ready only when included cases, excluded cases, acceptance rules, reviewer changes, and unresolved exceptions remain visible beside the result."},
 {"slug":"least-privilege-decay-distributed-staffing", "title":"Least-Privilege Decay in Distributed Staffing", "label":"least-privilege decay", "question":"How can a team detect when permissions accumulated during distributed work no longer match current tasks?", "unit":"one identity-role-system-permission relationship observed at a stated date", "finding":"Permission reviews are more actionable when they compare current tasks, last use, approval basis, sensitive actions, recovery paths, and removal evidence rather than counting accounts alone."},
 {"slug":"queue-age-distribution-versus-average-response", "title":"Queue Age Distribution Versus Average Response Time", "label":"queue age distribution", "question":"When does an average response time hide operational risk in an offshore work queue?", "unit":"an eligible request from authoritative arrival to accepted next action", "finding":"Age bands, oldest-item review, waiting reasons, reopened work, and exclusions reveal stalled tails that a single average can hide."},
 {"slug":"backup-coverage-activation-reliability", "title":"Backup Coverage Activation Reliability in Offshore Operations", "label":"backup coverage activation", "question":"What evidence shows that backup coverage can safely resume an offshore operating lane?", "unit":"a planned or real activation from primary-owner unavailability through accepted continuation", "finding":"Coverage is reliable only when the backup can obtain current context, act within authority, preserve evidence, and return ownership without duplicate or abandoned work."},
]

SOURCES = [
 ("NIST Cybersecurity Framework 2.0", "https://www.nist.gov/cyberframework"),
 ("NIST Privacy Framework", "https://www.nist.gov/privacy-framework"),
 ("CISA Cybersecurity Performance Goals", "https://www.cisa.gov/cybersecurity-performance-goals"),
 ("Philippine National Privacy Commission", "https://privacy.gov.ph/data-privacy-act/"),
 ("U.S. GAO Assessing Data Reliability", "https://www.gao.gov/products/gao-20-283g"),
 ("ILO Working from Home report", "https://www.ilo.org/publications/working-home-estimating-worldwide-potential"),
 ("OECD Guidelines on Measuring Trust", "https://www.oecd.org/publications/oecd-guidelines-on-measuring-trust-9789264278219-en.htm"),
 ("UK NCSC access control guidance", "https://www.ncsc.gov.uk/collection/10-steps/access-control"),
 ("CISA Incident Response Playbook", "https://www.cisa.gov/news-events/news/federal-government-cybersecurity-incident-and-vulnerability-response-playbooks"),
 ("World Bank Enterprise Surveys", "https://www.enterprisesurveys.org/"),
]

SECTIONS = [
 ("Research question and decision boundary", "Begin by stating the decision this evidence can inform and the decisions it cannot. The observation must stay attached to a named owner, a defined population, and a fixed period. Geography is not a proxy for capability, and a queue outcome is jointly produced by instructions, systems, permissions, demand, reviewer availability, and external dependencies. The record should distinguish observed facts from interpretations and recommendations."),
 ("Unit of analysis", "Use the smallest unit that still carries the operating outcome. Declare when the clock begins, which events pause it, what proves an accepted finish, and how reopened or duplicated items are treated. Preserve unavailable values as unavailable instead of silently converting them to zero. A unit that changes during the study prevents a fair comparison and should trigger a separate series or explicit restatement."),
 ("Sampling plan", "Select cases before looking at their outcomes. Include routine work, missing inputs, time-zone boundaries, reviewer absence, system failure, corrected work, and a consequential exception. Record the eligible population and every exclusion with a reason. Convenience samples can teach a workflow, but they cannot support an unqualified rate. A second reviewer should be able to reproduce why each case was included."),
 ("Event record", "Capture authoritative arrival, readiness, assignment, action, review request, approval or return, destination receipt, acceptance, reopening, and correction as distinct events. Link each event to its source instead of copying an untraceable timestamp into a summary sheet. Store personal or confidential data in the approved system and use a restricted reference in the analysis record. Later completion must not overwrite the state visible at an earlier decision."),
 ("Authority and access", "Separate the contributor who prepares evidence from the owner who interprets policy, accepts risk, changes access, commits money, or makes an employment or customer-impacting decision. Test one permitted and one prohibited action. Record temporary privileges, expiry, and removal evidence. The research result should never imply that good preparation transfers consequential authority or that a successful login establishes appropriate access."),
 ("Measurement design", "Report counts with denominators, periods, exclusions, missing values, and uncertainty. Show the distribution and difficult cases beside an average. Separate active handling, provider review, client wait, external wait, outage time, rework, and correction. Use a stable rubric with behavioral anchors. If the definition or reviewer changes, mark the break rather than combining unlike observations into a precise-looking trend."),
 ("Counterexamples and adverse cases", "Actively retain evidence that challenges the leading explanation. A fast result can still be wrong, a slow item can reflect a correct stop, and a clean average can conceal an aged tail. Compare at least one ordinary case with one adverse case. Ask what alternative condition could produce the same pattern. This discipline prevents a staffing conclusion from absorbing defects in intake, policy, tools, or review capacity."),
 ("Interpretation", "Translate the observed pattern into a bounded process decision: clarify an input, narrow a task, reserve review time, change a permission, add an example, or run another test. Do not rank people whose work, case mix, or support conditions differ. A recommendation should name the evidence that would reverse it. The accountable owner decides whether the residual risk and operational benefit justify any expansion."),
 ("Implementation test", "Apply one reversible change to a small eligible population, preserve the baseline, and observe the next interval with the same unit. Define success and stop conditions before the test begins. Record unintended effects such as additional owner work, displaced waiting, more sensitive access, or a new correction path. Expansion should follow repeated accepted outcomes, not merely the absence of visible complaints."),
 ("Limitations", "Institutional guidance supplies methods and governance context; it does not establish a universal benchmark for one company. Records may omit informal help, reviewers may disagree, and short periods may miss seasonality or rare consequential cases. System timestamps can reflect automation rather than human readiness. State these limitations close to the finding so a reader does not mistake a carefully bounded observation for a guarantee."),
 ("Governance and retention", "Keep the protocol, source list, field definitions, observation dates, reviewer identities or roles, changes, exceptions, and approvals under version control. Set a retention period appropriate to the sensitivity of the underlying records. Revoke temporary research access after verification. A future reviewer should be able to reconstruct the conclusion without recovering private conversations or relying on the original analyst's memory."),
 ("Decision checklist", "Before using the result, confirm that the eligible population is known, dates and definitions are fixed, difficult cases are represented, authority remained explicit, source links resolve to the intended evidence, and the proposed action has an owner and review date. If one of those conditions is missing, narrow the claim and collect the missing evidence rather than compensating with stronger language."),
]

def research_markdown(t):
    parts = ["---", f"title: {t['title']}", f"description: Source-backed research on {t['label']} with a bounded unit, explicit limitations, and implementation checks for distributed operations.", "category: Workflow Design", f"publishedAt: {DATE}", f"verifiedAt: {DATE}", f"image: /images/october-12/{t['slug']}.webp", "sourceCount: 10", "---", "", "## Research question", "", t['question'], "", "## Finding", "", t['finding'], ""]
    for heading, base in SECTIONS:
        parts += [f"## {heading}", "", f"For {t['label']}, {base} The defined unit for this report is {t['unit']}. This keeps the analysis specific to {t['title']} and makes its evidence, uncertainty, and decision use independently reviewable.", ""]
    parts += ["## Sources", ""] + [f"{i}. [{name}]({url})" for i,(name,url) in enumerate(SOURCES,1)]
    parts += ["", "## Related research", "", "- [Remote queue aging observation framework](/research/remote-queue-aging-observation-framework)", "- [Offshore request readiness and rework](/research/offshore-request-readiness-and-rework)", "- [Offshore resourcing backup coverage reliability](/research/offshore-resourcing-backup-coverage-reliability)", "", "## FAQ", "", f"### What does this research establish about {t['label']}?", "", f"It establishes a bounded observation method for {t['unit']}; it does not promise a universal staffing outcome.", "", "### Who makes the operating decision?", "", "The named client owner makes consequential decisions. Distributed staff may prepare evidence and recommendations within written authority.", ""]
    return "\n".join(parts)

def font(size, bold=False):
    candidates = ["/System/Library/Fonts/Supplemental/Arial Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Arial.ttf", "/System/Library/Fonts/Supplemental/Verdana Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Verdana.ttf"]
    for candidate in candidates:
        try: return ImageFont.truetype(candidate, size)
        except OSError: pass
    return ImageFont.load_default()

def make_image(slug, title, section, index):
    colors = [(15,23,42),(17,94,89),(30,64,175),(88,28,135),(124,45,18)]
    im = Image.new("RGB", (1200,630), colors[index % len(colors)])
    d = ImageDraw.Draw(im)
    d.rounded_rectangle((55,55,1145,575), radius=32, fill=(255,255,255), outline=(20,184,166), width=8)
    d.text((105,105), f"OFFSHORE RESOURCING  /  {section.upper()}", font=font(25,True), fill=(13,148,136))
    words = title.split(); lines=[]; line=""
    for w in words:
        candidate=(line+" "+w).strip()
        if d.textlength(candidate,font=font(52,True)) > 950 and line:
            lines.append(line); line=w
        else: line=candidate
    lines.append(line)
    y=190
    for text in lines:
        d.text((105,y), text, font=font(52,True), fill=(15,23,42)); y += 66
    d.line((105,500,1095,500), fill=(20,184,166), width=5)
    d.text((105,525), "PUBLISHED OCTOBER 12, 2026", font=font(23,True), fill=(71,85,105))
    out=ROOT / "public/images/october-12" / f"{slug}.webp"; out.parent.mkdir(parents=True,exist_ok=True)
    im.save(out,"WEBP",quality=88,method=6)

def main():
    research_dir=ROOT / "content/research"; research_dir.mkdir(parents=True,exist_ok=True)
    for t in RESEARCH: (research_dir/f"{t['slug']}.md").write_text(research_markdown(t),encoding="utf8")
    articles=[]
    for i,(slug,title) in enumerate(BLOGS):
        make_image(slug,title,"Blog",i)
        articles.append({"section":"Blog","title":title,"slug":slug,"sourcePath":"app/daily-blog-2026-10-12.ts","recordSlug":slug,"thumbnailPath":f"public/images/october-12/{slug}.webp","registryPath":"app/data.ts"})
    for i,t in enumerate(RESEARCH):
        make_image(t['slug'],t['title'],"Research",i+len(BLOGS))
        articles.append({"section":"Research","title":t['title'],"slug":t['slug'],"sourcePath":f"content/research/{t['slug']}.md","recordSlug":t['slug'],"thumbnailPath":f"public/images/october-12/{t['slug']}.webp","registryPath":"content/research"})
    manifest={"site":"OffshoreResourcing.com","repository":"coolifystealthagents/offshoreresourcing","branch":"main","baseSha":"bf4d272240cb9784553ac83ceac3f775c8511fba","publicationDate":DATE,"counts":{"blog":12,"research":5,"thumbnails":17},"registryPaths":["app/data.ts","content/research"],"routePaths":["app/blog/[slug]/page.tsx","app/research/[slug]/page.tsx"],"indexPaths":["app/blog/page.tsx","app/research/page.tsx"],"articles":articles}
    (ROOT/"publishing/2026-10-12/manifest.json").write_text(json.dumps(manifest,indent=2)+"\n",encoding="utf8")

if __name__ == "__main__": main()
