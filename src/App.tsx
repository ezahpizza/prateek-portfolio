import React, { useState } from 'react';
import StarWarsLoader from './components/starwars-loader/StarWarsLoader';
import StarWarsFanPrompt from './components/StarWarsFanPrompt';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showPrompt, setShowPrompt] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleYes = () => {
    setShowPrompt(false);
    setShowLoader(true);
  };

  const handleNo = () => {
    setShowPrompt(false);
    setShowContent(true);
  };

  const handleMaybe = () => {
    setShowPrompt(false);
    setShowLoader(true);
  };

  const handleLoaderFinish = () => {
    setShowLoader(false);
    setShowContent(true);
  };

  return (
    <>
      {showPrompt && (
        <StarWarsFanPrompt 
          onYes={handleYes}
          onNo={handleNo}
          onMaybe={handleMaybe}
        />
      )}
      
      {showLoader && (
        <StarWarsLoader onFinish={handleLoaderFinish} name="Prateek" />
      )}
      
      {showContent && (
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index showContent={showContent} />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      )}
    </>
  );
};

export default App;