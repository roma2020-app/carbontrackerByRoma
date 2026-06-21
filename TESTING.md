# Testing

## Carbon Calculator
✓ Transportation emissions
✓ Electricity usage
✓ Food consumption

## Edge Cases
✓ Empty inputs
✓ Negative values blocked
✓ Large values handled

## Automated Test Execution
To run the automated suite locally:
```powershell
npm test
```

The test framework evaluates:
- **Transit Mode Speed Limit Classification:** Stationary, Walking, Cycling, and Driving limits.
- **Transit Carbon Intensity Factors:** Formulas for vehicle commutes vs clean active transit modes.
- **Grocery AI Alternative Carbon Savings:** Deductions from high carbon beef/dairy alternatives.
- **Predictive Energy Forecast Projections:** Forecasting trajectory changes when eco-savings are applied.
- **Plaid Transaction Ledgers:** Aggregated carbon totals calculated from credit card items.
- **A11y Tablist Navigation:** Structural and semantic aria-binding checks.
- **Input Validation Rules:** Mime-type format constraints and 5MB uploader size limits.
