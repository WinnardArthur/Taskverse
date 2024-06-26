import React from "react";
import { OrganizationProfile } from "@clerk/nextjs";

const SettingsPage = () => {
  return (
    <div className="w-full">
      <OrganizationProfile
        routing="hash"
        appearance={{
          elements: {
            rootBox: {
              boxShadow: "none",
              width: "100%",
            },
            card: {
              border: "1px solid #e5e5e5",
              boxShadow: "none",
              width: "100%",
            },
            cardBox: {
              boxShadow: "none",
              border: '1px solid lavender'
            },
            navbar: {
              background: 'white'
            }
          },
        }}
      />
    </div>
  );
};

export default SettingsPage;
