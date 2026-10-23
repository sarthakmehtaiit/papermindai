export const PLANS = [
  {
    name: 'Free',
    slug: 'free',
    quota: 10,
    pagesPerPdf: 5,
    price: {
      amount: 0,
      priceIds: {
        test: '',
        production: '',
      },
    },
  },
  {
    name: 'Pro',
    slug: 'pro',
    quota: 50,
    pagesPerPdf: 25,
    price: {
      amount: 1200,
      priceIds: {
        test: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID ?? '',
        production: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID ?? '',
      },
    },
  },
]
// Razorpay is optional: leave this unset to run the app on the Free plan only.
export const PAYMENTS_ENABLED = process.env.NEXT_PUBLIC_PAYMENTS_ENABLED === 'true'
