const screenshot = (folder, name, alt, width, height) => ({
  src: `/photos/projects/lumina/${folder}/${name}.png`,
  alt,
  width,
  height,
});

export const overviewSummary =
  "A multi-tenant e-commerce SaaS platform connecting customer shopping, merchant operations, and platform administration. Built with Next.js, TypeScript, and Supabase, with separate access and data boundaries for each store.";

export const roleBoundarySummary =
  "Customers shop within a store. Merchants manage their own catalogue and orders. Platform administrators review merchant applications and manage subscription access across stores.";

export const luminaSections = [
  {
    id: "storefront",
    eyebrow: "01 / Customer experience",
    title: "From discovery to delivery",
    description:
      "A store-specific shopping journey connects product discovery, cart review, checkout, and order tracking across mobile screens.",
    steps: ["Browse", "Product details", "Cart & checkout", "Track"],
    features: [
      {
        title: "Explore the storefront",
        description:
          "Each merchant has a dedicated storefront. Customers can explore the catalogue, inspect product details, and choose items to add to their cart.",
        image: screenshot(
          "storefront",
          "homepage",
          "Lumina mobile storefront homepage with product collections and shopping navigation",
          493,
          1050,
        ),
        caption: "Each store has its own entry point into the product catalogue.",
      },
      {
        title: "Inspect product details",
        description:
          "Product pages bring images, descriptions, and pricing together so customers can inspect an item before adding it to their cart.",
        image: screenshot(
          "storefront",
          "product_detail",
          "Lumina mobile product page with product information and an add-to-cart action",
          482,
          1056,
        ),
        caption: "Product details connect browsing with the next step in the shopping journey.",
      },
      {
        title: "Cart & checkout",
        description:
          "Customers review their cart before entering delivery details and choosing a store-supported payment method. Checkout supports guests and signed-in customers.",
        image: screenshot(
          "storefront",
          "cart",
          "Lumina mobile shopping cart with selected products and an order summary",
          479,
          1058,
        ),
        caption: "Cart review leads into checkout and the merchant's order workflow.",
      },
      {
        title: "Track an order",
        description:
          "Customers can follow order progress after checkout. Guest tracking uses a store, order number, and tracking token to retrieve the relevant order.",
        image: screenshot(
          "storefront",
          "order_detail1",
          "Lumina mobile order detail screen showing a demo order and its progress",
          471,
          1056,
        ),
        caption: "Order progress remains accessible after the customer leaves checkout.",
      },
    ],
  },
  {
    id: "merchant",
    eyebrow: "02 / Merchant operations",
    title: "Run the store from one workspace",
    description:
      "The merchant portal brings catalogue management, order processing, and customer records together within the merchant's store.",
    features: [
      {
        title: "Dashboard",
        description:
          "A store overview brings sales and order information into one starting point, helping merchants move from a summary to daily operational work.",
        image: screenshot(
          "admin",
          "admin_dashboard",
          "Lumina merchant dashboard with store performance and order summaries",
          489,
          1068,
        ),
        caption: "A shared starting point for the merchant's daily store operations.",
      },
      {
        title: "Products",
        description:
          "Merchants manage product details, images, categories, pricing, and stock, with active and archived states controlling catalogue availability.",
        image: screenshot(
          "admin",
          "admin_product1",
          "Lumina merchant product management screen with catalogue entries and inventory information",
          477,
          1073,
        ),
        caption: "Product management keeps the storefront catalogue connected to merchant inventory.",
      },
      {
        title: "Orders",
        description:
          "The order workspace brings payment and fulfilment status into the same view, with individual order details available for follow-up.",
        image: screenshot(
          "admin",
          "admin_order1",
          "Lumina merchant order management screen showing order records and status summaries",
          489,
          1069,
        ),
        caption: "Payment and fulfilment remain distinct parts of the order workflow.",
      },
      {
        title: "Fulfilment",
        description:
          "Staff confirm payment before advancing fulfilment. Shipment updates record carrier and tracking details, while order events preserve the progress history.",
        image: screenshot(
          "admin",
          "admin_order2",
          "Lumina merchant order list showing payment and fulfilment status for individual orders",
          482,
          1071,
        ),
        caption: "Order actions follow an explicit sequence from payment confirmation to shipment.",
      },
      {
        title: "Customers",
        description:
          "Customer records combine order history, paid spending, and recent activity. Both guest and registered customers appear in the merchant's reporting.",
        image: screenshot(
          "admin",
          "admin_customer",
          "Lumina merchant customer screen with customer records and activity summaries",
          482,
          1069,
        ),
        caption: "Customer reporting gives order activity a customer-level view.",
      },
    ],
  },
  {
    id: "analytics",
    eyebrow: "03 / Reporting",
    title: "Turn order activity into useful context",
    description:
      "Store reporting connects revenue, order value, product performance, and category contribution using a consistent set of order data.",
    features: [
      {
        title: "Sales overview",
        description:
          "Revenue and average order value are calculated from paid, non-cancelled orders. Daily reporting groups sales using the Malaysia time zone.",
        image: screenshot(
          "admin",
          "admin_analytics1",
          "Lumina merchant analytics overview with sales metrics and reporting charts",
          479,
          1058,
        ),
        caption: "Sales metrics use a shared definition of eligible revenue orders.",
      },
      {
        title: "Retention & fulfilment",
        description:
          "Customer retention separates first-time and returning buyers, while fulfilment distribution shows how many orders are waiting, processing, shipped, delivered, or cancelled.",
        image: screenshot(
          "admin",
          "admin_analytics3",
          "Lumina merchant analytics screen showing customer retention and order fulfilment distribution",
          477,
          1064,
        ),
        caption: "Retention and fulfilment views connect customer behaviour with operational progress.",
      },
    ],
  },
  {
    id: "platform",
    eyebrow: "04 / Platform administration",
    title: "Manage the merchants behind the stores",
    description:
      "A separate platform workspace handles merchant onboarding and subscription access, with review decisions reserved for platform administrators.",
    features: [
      {
        title: "Platform overview",
        description:
          "Administrators see pending applications, active merchants, and trials ending soon, providing a starting point for platform-level follow-up.",
        image: screenshot(
          "platform",
          "platform_overview",
          "Lumina platform overview with merchant application and subscription summaries",
          477,
          1071,
        ),
        caption: "Platform oversight is separate from the operations of an individual store.",
      },
      {
        title: "Merchant reviews",
        description:
          "Merchant applications move through an administrator review. Approval and requests for changes are explicit decisions, with review notes supporting follow-up.",
        image: screenshot(
          "platform",
          "platform_review",
          "Lumina platform merchant application review screen",
          470,
          1058,
        ),
        caption: "A review workflow controls the transition from merchant application to store access.",
      },
      {
        title: "Subscriptions",
        description:
          "Administrators manage trial, paid, past-due, suspended, and complimentary access. Subscription payments use a manual TNG submission and approval workflow.",
        image: screenshot(
          "platform",
          "platform_subscription",
          "Lumina platform subscription screen with merchant plans and access statuses",
          459,
          1052,
        ),
        caption: "Subscription state and payment review determine each merchant's access period.",
      },
    ],
  },
];

export const technicalHighlights = [
  {
    title: "Store-scoped access",
    description:
      "Store-specific routes and queries work with Supabase authentication, membership checks, and PostgreSQL Row Level Security to separate customer, merchant, and platform access.",
  },
  {
    title: "Database-enforced order workflows",
    description:
      "Server actions call protected database functions for checkout, payment confirmation, and fulfilment. Inventory reservations expire after 24 hours, with guarded stock release on cancellation or expiry.",
  },
  {
    title: "Explicit subscription states",
    description:
      "Merchant applications and subscription entitlements are modelled separately. Scheduled database reconciliation moves expired access through a payment grace period and into suspension.",
  },
  {
    title: "Consistent reporting rules",
    description:
      "Shared reporting functions derive revenue from paid, non-cancelled orders. Category snapshots on order items preserve the sales context when the product catalogue changes.",
  },
];
