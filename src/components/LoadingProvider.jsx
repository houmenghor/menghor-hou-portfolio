import { createContext, useContext, useState, useEffect } from "react";
import { Loading } from "./Loading";

const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  // Persist loading state on page load (via sessionStorage)
  useEffect(() => {
    const savedLoadingState = sessionStorage.getItem("isLoading");

    if (savedLoadingState === "true") {
      setIsLoading(true); // Show loading if it was previously set
    } else {
      setIsLoading(false); // Hide loading if it's not in the session storage
    }

    // Set loading state and persist it
    sessionStorage.setItem("isLoading", "true");
    setTimeout(() => {
      sessionStorage.setItem("isLoading", "false");
      setIsLoading(false); // Stop loading after 2 seconds (you can modify this)
    }, 1000); // Change this timeout based on your needs

  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading && <Loading />}
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}
