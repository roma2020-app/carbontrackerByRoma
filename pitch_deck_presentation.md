# Hackathon Pitch Deck: Eco-Companion

This document outlines the slide-by-slide content for pitching **Eco-Companion** to hackathon judges.

---

## Slide 1: Title & Hook
### "Eco-Companion: The Zero-Friction Carbon Agent"
*   **Sub-headline:** Transforming personal climate action through automated tracking, local action nudges, and spatial AR visualization.
*   **Presenter Note:** Start by highlighting that while 70% of individuals want to reduce their carbon footprint, less than 1% track it. Introduce Eco-Companion as the first autonomous agent that solves this.

---

## Slide 2: The Problem
### "The Tracking Trap: Why Climate Action Stalls"
*   **Key Pain Points:**
    *   **Manual Entry Fatigue:** People abandon trackers because logging every commute, flight, and meal is exhausting.
    *   **The Action Gap:** Users receive general statistics (e.g., "reduce energy") instead of highly localized, actionable swaps.
    *   **Invisible Consequences:** A metric like "10kg of CO₂" is too abstract to motivate behavior change.
*   **Visual Element:** A graphic showing high churn rates of traditional logging apps.

---

## Slide 3: Why It Matters
### "The Invisible Climate Cost"
*   **The Insight:** Personal consumption contributes to over **60% of global greenhouse gas emissions**.
*   **The Challenge:** Carbon footprint databases are fragmented, regional grid values fluctuate hourly, and food transportation distances are opaque to the average consumer.
*   **The Opportunity:** By empowering individuals to make tiny, automated daily micro-swaps, we can collectively cut gigatons of emissions.

---

## Slide 4: Target Audience
### "Meet the Eco-Citizens"
*   **Roma (The Eco-Novice):** Cares about the environment but is easily overwhelmed by data complexity. Needs simple, automated, and rewarding swaps.
*   **Alex (The Tech Optimizer):** Wants smart utility integrations, grid-mix tracking, and detailed analytical forecasts.
*   **Marcus (The Busy Parent):** Needs cost-saving, family-friendly habits with zero administrative overhead.

---

## Slide 5: The Solution
### "Autonomous Carbon Accounting"
*   **Three Pillars of Automation:**
    1.  **Passive Geofenced Commute Tracking:** Motion sensor classification captures walking, cycling, and driving automatically when speed exceeds 5 km/h.
    2.  **Transaction-Linked Estimations:** Secure Plaid banking connection automatically monitors utility bills, gasoline consumption, and flights.
    3.  **AI OCR Receipt Swapper:** A single photo scan categorizes grocery items, looks up supply-chain metrics, and suggests local, lower-carbon swaps.

---

## Slide 6: System Architecture
### "Unified Ingestion & Calculation Engine"
*   **Technical Pipeline:**
    *   **Mobile Clients:** Built with React Native & Expo to access native location/sensor hardware.
    *   **Data Ingestion Hub:** Serverless Node.js handles incoming Plaid webhooks, geofence coordinates, and OCR files.
    *   **Methodology Layer:** Integrates with the **Climatiq API** to pull verified emission factors mapped to user ZIP codes.
    *   **Database:** PostgreSQL with PostGIS for spatial mapping and Redis for queue caching.
*   **Visual Element:** A high-level system block diagram showing telemetry flowing from the device to local databases.

---

## Slide 7: Innovation & Differentiators
### "Bringing Carbon to Life"
*   **AR Smoke Visualizer:** Projects volumetric smoke density inside the user's room to represent daily emissions (red smoke) and green habits (green smoke), turning abstract metrics into spatial physical volumes.
*   **Local Inventory Swapping API:** Instead of generic swaps, the app redirects users to the exact store shelf and aisle (e.g., *Kroger, Aisle 4, Shelf B*) where recommended green alternatives are in stock.
*   **Predictive Forecasts:** Machine Learning models forecast future footprint trends based on current spend histories, offering proactive nudges before carbon is spent.

---

## Slide 8: Social Impact & Gamification
### "The Power of Private Leagues"
*   **Peer Accountability:** Private challenges allow friends, families, or corporate teams to compete on weekly carbon-reduction leaderboards.
*   **Green Reward System:** Earn "Eco-Points" for validated carbon savings.
*   **Social Amplification:** Users share invite links, triggering viral adoption. When friends join, they collectively scale carbon reductions.

---

## Slide 9: The 30-Second Demo Flow
### "Interactive Live Demonstration"
1.  **Bank Sync:** Click "Demo Mode" to link Plaid Sandbox, instantly populating energy and utility transaction logs.
2.  **Background Commute:** Simulate driving above 5 km/h to show automatic transit mode classification and geofence tracking.
3.  **Grocery Scan:** Run AI receipt scanning to extract carbon ratings and alternative suggestions.
4.  **Local Locator:** Click a swap to show the exact store aisle highlighting the product.
5.  **Predictive Forecasts:** View the dynamic forecast graph contract as active recommendations are enabled.
6.  **AR Clearing:** Switch to the AR canvas to watch green actions neutralize floating volumetric smoke.

---

## Slide 10: Business Potential
### "The Green Economy Marketplace"
*   **Revenue Models:**
    *   **B2B Corporate ESG Portal:** Sells customized employee engagement challenges to corporations seeking to meet Scope 3 emissions goals.
    *   **Offset Transaction Fee:** Takes a small margin on fractional carbon offsets purchased directly through the app.
    *   **Affiliate Sustainability Swaps:** Partners with local green merchants to suggest sponsored eco-friendly alternatives.

---

## Slide 11: Future Roadmap
### "Scaling Local Action Globally"
*   **Phase 1 (Months 1–4):** Launch Core Mobile App with background geofence, receipt parser, and Plaid integrations.
*   **Phase 2 (Months 5–9):** Expand Smart Home integrations (automated grid EV charging schedules) and launch browser checkout extension.
*   **Phase 3 (Months 10–14):** Build city-wide green incentive partnerships to convert Eco-Points into municipal tax offsets or public transit credits.
