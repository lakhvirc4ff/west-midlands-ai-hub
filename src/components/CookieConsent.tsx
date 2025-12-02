import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-up">
      <div className="container mx-auto">
        <div className="bg-card border border-border rounded-xl shadow-card p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <h4 className="font-semibold text-foreground mb-1">
              Cookie Notice
            </h4>
            <p className="text-muted-foreground text-sm">
              We use cookies to enhance your experience. By continuing to visit
              this site you agree to our use of cookies.{" "}
              <a href="/privacy" className="text-primary hover:underline">
                Learn more
              </a>
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Button variant="outline" size="sm" onClick={declineCookies}>
              Decline
            </Button>
            <Button variant="default" size="sm" onClick={acceptCookies}>
              Accept All
            </Button>
          </div>
          <button
            onClick={declineCookies}
            className="absolute top-2 right-2 sm:relative sm:top-0 sm:right-0 text-muted-foreground hover:text-foreground"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
