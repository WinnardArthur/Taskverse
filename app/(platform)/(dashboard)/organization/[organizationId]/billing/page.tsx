import React from "react";

import { checkSubscription } from "@/lib/subscription";
import { Separator } from "@/components/ui/separator";

import { Info } from "../_components/info";
import SubscriptionButton from "./_components/subscription-button";

const BillingPage = async () => {
  const isPro = await checkSubscription();

  return (
    <div className="w-full">
      <Info isPro={isPro} />
      <Separator />

      <SubscriptionButton isPro={isPro} />
    </div>
  );
};

export default BillingPage;
