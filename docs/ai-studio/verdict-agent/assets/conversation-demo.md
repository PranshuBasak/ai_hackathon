# Chat demonstration — expected conversation, not an executed test

## A. Capture using the first agent

**User:** Create a project intake for Cedar Vale Apartments in Denver. It is a 160-unit multifamily development in Design development. Estimated total construction value is USD 64 million.

**Assistant:** Who is the developer, and do you have a source reference for the project?

**User:** Summit Ridge Properties. It came from a tender portal. Source Project ID is VERDICT-DEMO-20260928-CHAT-01.

**Assistant:** Do you know the architect, builder and dealer?

**User:** Studio Lumen is the architect and Keystone Construction Co. is the builder. The dealer is unknown. The address is 720 Fictional Cedar Vale Road, Denver, Colorado, United States. I don't know the dates yet.

**Assistant:** I have Cedar Vale Apartments, 160 units, USD 64 million, Design development, in Denver. Developer: Summit Ridge Properties; architect: Studio Lumen; builder: Keystone Construction Co. Dealer and dates are unknown. Shall I save this intake?

**User:** Yes, save it.

**Assistant, only after save/read-back:** Created [actual PI number] with status New. Dealer and dates remain empty. [Actual record link]

## B. Analyze using the new verdict agent, after it is configured

**User:** Analyze intake [actual PI number from part A] and save its AI verdict. Do not apply it or create a Project or Opportunity.

**Assistant:** [Reads intake and candidates, loads approved scoring configuration, invokes restricted verdict workflow, reads back.] The saved status is Needs review because the dealer is missing. [Actual recommendation, candidate evidence and score/priority if evaluable.] No Project or Opportunity was created.

**User:** Why does this need review? Which facts are missing?

**Assistant:** [Explains the actual persisted evidence and missing fields, without inventing a score or treating a proposed candidate as approved.]

## Checks

- If the user asks to save the same source submission twice, the capture agent returns the existing record according to its tested duplicate policy.
- Do not expect a fixed Project match or priority before live candidate/configuration reads. If coverage/dealer/history evidence is missing, explain Data Incomplete rather than fabricate a numeric score.
- The email example and chat example use different source keys and project names, so they are two independent tests.
- These are fictional samples, not connected inbox messages. Record actual created GUIDs before any cleanup.
