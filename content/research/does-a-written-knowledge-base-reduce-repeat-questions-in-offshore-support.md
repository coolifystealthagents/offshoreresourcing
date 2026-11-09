---
title: "Does a Written Knowledge Base Reduce Repeat Questions in Offshore Support?"
description: "A practical evaluation design for testing whether a knowledge base actually reduces repeated questions in an offshore queue."
category: "offshore resourcing operations"
publishedAt: 2026-11-09
verifiedAt: 2026-11-09
image: "/daily09/offshoreresourcing/does-a-written-knowledge-base-reduce-repeat-questions-in-offshore-support.webp"
sourceCount: 10
---

A knowledge base is often launched with the assumption that better documentation will reduce the number of repeated questions. That assumption is reasonable but not automatically true. Workers may not find the article, may not trust it, or may prefer to ask a colleague because the answer arrives faster. Evaluating the effect requires a definition of a repeat question, a baseline, and a comparison that separates the knowledge base from other changes. This report describes a practical design for that evaluation.

## Research question and decision supported

The question is whether making a written knowledge base available reduces the rate of repeated questions in an offshore support queue. The decision supported is whether to invest further in articles, search, training, or a different channel for answers. A second decision is which topics should be documented first, based on the questions that actually recur. The evaluation does not assume that every question is a documentation failure. Some repeat questions reflect a new client, a system outage, or a legitimate need for confirmation on a high-risk item.

## Define a repeat question

A repeat question is a request for information that has already been answered in an approved source and is asked again by a different worker or in a different week. Exclude questions about a specific item that requires a fresh decision, and exclude questions that arrive because the source changed. Record the topic, the channel, the asker, the answer source, and whether the asker had access to the knowledge base. Use a topic code rather than the exact wording, because two workers may phrase the same question differently. Define the window, such as thirty days, so the same question is not counted repeatedly within one conversation.

Record whether the asker searched before asking, because the reason for the repeat matters. A question asked because the article was not found is a navigation problem, while one asked because the article was not trusted is a credibility problem. Add a short field for the answer source. That single field turns a raw count into a diagnostic.

## Establish a baseline

Measure repeat questions for four to six weeks before the knowledge base launch. Count the total questions, the repeat subset, and the topics. Record how answers were found during the baseline, including asking a colleague, searching old messages, or using a personal note. This baseline is essential because a team with a low repeat rate has less room for improvement than a team with a high one. Keep the baseline period free of major system or client changes if possible. If a change is unavoidable, record it and adjust the interpretation rather than pretending the baseline is clean.

Keep the baseline definition in the same document as the follow-up rules. If a new client enters during the period, show the rate with and without that client. A baseline that includes a training week may overstate the repeat rate. Note the unusual weeks so a later reader does not compare them with a normal month.

## Describe the knowledge base exposure

Record what was actually available, not only what was published. Count the number of articles, the topics covered, the search terms that return a result, and the workers who received training. Check whether the articles are linked from the queue and whether the team can edit or comment. A library that exists on a separate site with no links from the workflow is a weak intervention. State the launch date, the article count, and the access method. The evaluation should distinguish a knowledge base that is available from one that is actually used.

Measure whether the queue links to the article, whether the search returns it on the first page, and whether a worker can open it without leaving the task. A library that requires five clicks may as well be closed for a busy worker. Record the access path for a sample of articles. Usability is part of the intervention, not an implementation detail.

## Choose a comparison

A simple before-and-after comparison is vulnerable to seasonal volume, new clients, and team changes. If the site has two comparable queues, consider making the knowledge base available to one first and comparing the change in repeat questions. If that is not possible, use a interrupted time-series view with several baseline and follow-up periods. Record concurrent changes such as a new intake form, a training session, or a staffing change. The comparison should make the alternative explanation visible rather than hiding it. A small team may not support a formal experiment, and the report should say so.

## Control for the obvious confounders

Volume, question mix, worker tenure, client changes, and answer-channel speed can all affect the repeat rate. Record the total queue volume and the proportion of new workers during each period. A rise in new hires can increase repeat questions even when the knowledge base is working. A faster chat channel can reduce the incentive to search. If the knowledge base is launched at the same time as a new onboarding program, the effects cannot be separated.

Choose the simplest design that rules out the most obvious alternative. A staggered launch by queue is usually stronger than a single before-and-after comparison. If a staggered launch is impossible, add a second baseline period and a follow-up period long enough to include a normal cycle. Describe the design as a comparison, not as an experiment, when assignment was not random. Report the confounders beside the result and avoid claiming more than the design supports.

## Measure use as well as questions

A repeat-question count alone cannot show whether the knowledge base is being used. Add measures such as article views from the queue, searches that led to a link, and the number of questions answered with a link. Ask a sample of workers whether they searched before asking and why they stopped. A decline in repeat questions with no increase in use may mean the team is asking fewer questions overall, which could be a different problem. A rise in use with no change in repeat questions may mean the articles are being read but do not answer the question.

## Report the result honestly

Report the baseline rate, the follow-up rate, the absolute change, and the number of questions behind each rate. Show the topic mix and the most common repeat questions. Add the concurrent changes and the limitations. If the result is mixed, say which topics improved and which did not.

Use the topic mix to set the next documentation priority. A topic with many repeats and low article use needs a better article or a better link, while a topic with many repeats and high use needs a clearer answer. Do not rewrite the whole library at once. Pick the two topics with the highest volume and the clearest evidence, then measure again.

Keep the review short and written, with the topic, the owner, the change, and the date. If a topic does not improve after two cycles, stop rewriting the article and examine the workflow that produces the question. The answer may belong in a form field, an approval, or a training example rather than in another paragraph. A knowledge base is one part of the answer system, not the whole system. A knowledge base may reduce questions about access and formatting while having no effect on client-specific exceptions. That pattern is more useful than a single average because it tells the team where to invest next.

## Limitations

The method depends on consistent logging and a stable definition of a repeat question. Workers may not record questions asked in chat, and a colleague may answer without creating a record. The knowledge base may improve answer quality without reducing the number of questions. A small sample and a short follow-up period limit confidence. The evaluation cannot prove causation without a stronger design. Use the result to guide the next improvement and state the uncertainty plainly. Do not present a promising trend as proof that documentation solved the problem.

## Sources

1. [U.S. Bureau of Labor Statistics, Occupational Employment and Wage Statistics](https://www.bls.gov/oes/)
2. [U.S. Department of Labor, Fact Sheet 22: Hours Worked](https://www.dol.gov/agencies/whd/fact-sheets/22-flsa-hours-worked)
3. [U.S. Small Business Administration, Hire and Manage Employees](https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees)
4. [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework)
5. [NIST SP 800-53 Security and Privacy Controls](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final)
6. [CISA Cyber Essentials](https://www.cisa.gov/cyber-essentials)
7. [APQC Process Classification Framework](https://www.apqc.org/process-frameworks)
8. [ISO 9001 Quality Management Principles](https://www.iso.org/iso-9001-quality-management.html)
9. [NIST Privacy Framework](https://www.nist.gov/privacy-framework)
10. [FTC Data Security Guidance](https://www.ftc.gov/business-guidance/privacy-security/data-security)
