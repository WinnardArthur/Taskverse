import { auth } from "@clerk/nextjs/server";

import { db } from "@/lib/db";

const DAY_IN_MS = 86_400_400;

export const checkSubscription = async () => {
  const { orgId } = auth();

  if (!orgId) {
    return false;
  }

  const orgSubscription = await db.orgSubscription.findUnique({
    where: {
      orgId,
    },
    select: {
      stripeCustomerId: true,
      stripeSubscriptionId: true,
      stripeCurrentPeriodEnd: true,
      stripePriceId: true,
    },
  });

  if (!orgSubscription) return false;

  const isValid =
    orgSubscription.stripePriceId &&
    orgSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now();

  return !!isValid;
};
