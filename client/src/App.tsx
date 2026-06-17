import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Rescue from "./pages/Rescue";
import Rehabilitation from "./pages/Rehabilitation";
import Adoption from "./pages/Adoption";
import Foster from "./pages/Foster";
import VolunteerHub from "./pages/VolunteerHub";
import Donate from "./pages/Donate";
import Patron from "./pages/Patron";
import Events from "./pages/Events";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Centers from "./pages/Centers";
import DonorDashboard from "./pages/DonorDashboard";
import Layout from "./components/Layout";
import NewsletterPopup from "./components/NewsletterPopup";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/rescue" component={Rescue} />
        <Route path="/rehabilitation" component={Rehabilitation} />
        <Route path="/adoption" component={Adoption} />
        <Route path="/foster" component={Foster} />
        <Route path="/volunteer" component={VolunteerHub} />
        <Route path="/donate" component={Donate} />
        <Route path="/patron" component={Patron} />
        <Route path="/events" component={Events} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/centers" component={Centers} />
        <Route path="/donor-dashboard" component={DonorDashboard} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <NewsletterPopup />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
