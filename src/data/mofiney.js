const screenshot = (file, alt) => ({
  src: `/photos/mofiney/${file}.jpg`,
  alt,
  width: 1080,
  height: 2400,
});

export const mofineySections = [
  {
    id: 'daily',
    label: 'Daily overview',
    eyebrow: '01 / Know where you stand',
    title: 'A clear starting point for everyday finances.',
    description: 'Bring balances, spending and individual accounts together before looking at the details.',
    features: [
      {
        title: 'Home dashboard',
        description: 'A daily overview connects total balance, monthly spending, remaining budget and income. Quick actions lead into expenses, income, transfers and receipt scanning.',
        caption: 'The home screen connects the daily summary with the next action.',
        image: screenshot('mofiney_home', 'Mofiney home dashboard showing balance, monthly budget and quick transaction actions'),
      },
      {
        title: 'Accounts & balances',
        description: 'A net-position summary sits above individual bank accounts, e-wallets and cash wallets. Each account keeps its own balance and currency context.',
        caption: 'Individual account balances sit alongside the overall financial position.',
        image: screenshot('mofiney_account', 'Mofiney accounts screen with net position, assets, liabilities and wallet balances'),
      },
    ],
  },
  {
    id: 'capture',
    label: 'Transactions & receipts',
    eyebrow: '02 / Capture the details',
    title: 'From a receipt to a searchable record.',
    description: 'Review transaction history or turn a scanned receipt into an expense with a review step before saving.',
    features: [
      {
        title: 'Transaction history',
        description: 'Search by merchant, category or account, then narrow the history by date and transaction type. The cash-flow summary keeps income, expenses and net balance in view.',
        caption: 'Search and filters make a growing transaction history easier to explore.',
        image: screenshot('mofiney_transaction', 'Mofiney transaction history with search, filters, cash-flow totals and dated expenses'),
      },
      {
        title: 'Receipt review',
        description: 'The receipt review screen presents OCR-extracted merchant, date and amount fields alongside the original receipt. Users can correct the details and choose a category and account before saving.',
        caption: 'Extracted receipt details remain editable before becoming an expense.',
        image: screenshot('mofiney_ocr', 'Mofiney OCR receipt review with original receipt, editable merchant, date, amount and expense fields'),
      },
    ],
  },
  {
    id: 'planning',
    label: 'Budgets & recurring',
    eyebrow: '03 / Plan the month',
    title: 'Keep spending limits and regular payments in view.',
    description: 'Monthly targets and scheduled transactions give day-to-day decisions a longer view.',
    features: [
      {
        title: 'Monthly budgets',
        description: 'Track the overall monthly cap, spending to date and the amount remaining. Category budgets show how individual areas of spending contribute to the monthly plan.',
        caption: 'Overall and category-level progress make the remaining budget visible.',
        image: screenshot('mofiney_monthlytargetbudget', 'Mofiney monthly target budget showing budget used, remaining balance and category progress'),
      },
      {
        title: 'Recurring transactions',
        description: 'Review expected monthly inflows and outflows alongside scheduled items. Each recurring entry shows its account, frequency, next date and controls to pause or edit it.',
        caption: 'Regular payments are organised around their next scheduled date.',
        image: screenshot('mofiney_recurring', 'Mofiney recurring transactions with monthly totals, scheduled payments and pause, edit and delete controls'),
      },
    ],
  },
  {
    id: 'insights',
    label: 'Analytics & forecast',
    eyebrow: '04 / Understand the pattern',
    title: 'Turn the transaction history into useful context.',
    description: 'Compare spending across periods, follow cash flow and explore the forecast interface.',
    features: [
      {
        title: 'Spending analytics',
        description: 'Period controls bring expenditure, daily pace and cash flow into one report. A weekly trajectory compares current spending with the previous period.',
        caption: 'Spending trends connect the current period with earlier activity.',
        image: screenshot('mofiney_spendinganalysis', 'Mofiney spending analytics showing period filters, cash flow and current versus previous spending trends'),
      },
      {
        title: 'Forecast preview',
        description: 'The forecast interface presents a projected amount, an expected range and a comparison with recorded spending. The next-month prediction currently uses preview data; production prediction-model integration is pending.',
        caption: 'Forecast UI preview: the prediction model is not connected yet.',
        status: 'Preview data · Model integration pending',
        image: screenshot('mofiney_forecast', 'Mofiney forecast preview with a projected amount, expected range and a notice that production prediction is not connected'),
      },
    ],
  },
];
