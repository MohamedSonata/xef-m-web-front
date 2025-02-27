'use client';

import { Button } from "../ui/Button";
import { appHandler } from "@/utils/appHandler";

export function GetStartedButton() {
  const handleGetStarted = async () => {
    await appHandler.handleGetStarted();
  };

  return (
    <Button 
      variant="primary" 
      size="lg"
      onClick={handleGetStarted}
    >
      Get Started
    </Button>
  );
} 