# carbontracker-by-roma
Carbon Tracker  is an intelligent sustainability platform designed to increase carbon footprint awareness and encourage eco-friendly behavior. By analyzing everyday activities and providing data-driven recommendations, the platform helps users understand their environmental impact and take meaningful steps toward reducing carbon emissions. 

# Eco-Companion: Personal Carbon Footprint Tracker MVP

An automated, zero-friction carbon footprint awareness platform designed for hackathons. It helps individuals understand, track, and reduce their daily emissions through passive tracking, smart AI integrations, and spatial augmented reality (AR) visualizations.

---

## 1. Chosen Vertical
**Climate Tech & Personal Carbon Accounting**
Eco-Companion addresses the "Action Gap" in individual sustainability. By focusing on automating data entry, the platform targets the primary source of user churn in environmental tracking apps—manual logging fatigue.

---

## 2. Approach & Logic
Eco-Companion employs an **Automation-First** strategy to record personal carbon footprints across three main daily categories:
*   **Transit Geofencing:** Captures transit distance and classifies transport modes automatically in the background, eliminating the need to log commutes.
*   **Transaction Ingestion:** Direct linkage to credit cards and utilities via financial ledger APIs (simulated Plaid integration) to estimate footprint values from recurring monthly electricity bills, gas fill-ups, and flights.
*   **Receipt AI & Voice Parsing:** Uses multi-modal Large Language Models to parse unstructured receipt data or voice notes, matching ingredients with supply-chain emission factors.

---

## 3. How the Solution Works
The platform is organized into six highly integrated, glassmorphic views:
1.  **Dashboard:** High-level metrics showing weekly savings, tree absorption equivalents, active geofencing states, and a circular chart showing carbon distribution.
2.  **Transit Geofence:** An interactive simulator representing geofence speed triggers. Moving above 5 km/h automatically transitions tracking from *Stationary* to *Moving*, logging distance and carbon values in real time to the ledger.
3.  **Transactions:** Simulated Plaid connection portal displaying transaction categories (utilities, gas, shared rides) and converting dollar spending into carbon equivalents.
4.  **Receipt AI & Voice Logger:** A multi-modal portal. Snap a receipt photo or speak to list items (e.g., *"I bought two steaks and organic milk"*). The AI extracts food items, displays lifecycle emissions, recommends low-carbon replacements, and provides store aisle maps to locate alternatives.
5.  **AI & Forecasts:** Integrates sustainability scoring models (Eco-Score) and next-month predictive graphs comparing current trajectories with optimized green paths.
6.  **AR Smoke Viewer:** An interactive spatial canvas overlay drawing floating volumetric colored gas clouds. Red smoke particles accumulate from emissions, while green particles from eco-actions collide to neutralize and clear the atmosphere.

---

## 4. Assumptions Made
*   **Transit Carbon Factors:** Standard gasoline driving emissions are estimated at **0.18 kg CO₂ per kilometer** (180g/km). Walking and cycling are calculated at **0.0 kg CO₂**.
*   **Plaid Categorization:** Utility transactions (e.g., Duke Energy, gas stations) are parsed using standard industry categories mapped to national averages.
*   **Food Lifecycle Factors:** Food emissions calculations are based on average agricultural lifecycle metrics (e.g., beef steak estimated at **31 kg CO₂ per kg**, plant alternatives estimated at less than **2.5 kg CO₂ per kg**).
*   **Smart Grid Optimization:** Duke Energy carbon calculations assume nuclear/renewables grid hours occur during late-night hours (e.g., 2 AM to 5 AM).

---

## 5. How to Run Locally
Open `index.html` directly in any web browser, or launch a local development server using Python:

```bash
# Start Python HTTP Server
python -m http.server 8080
```
Open **[http://localhost:8080](http://localhost:8080)** to launch.

### 🚀 Try Demo Mode
For a quick hackathon demonstration, click the **"Demo Mode"** button in the top action bar. The platform runs a scripted, automated 30-second walkthrough showing bank synchronization, transit logging, receipt OCR parsing, predictive forecasts, and volumetric AR smoke clearing.
