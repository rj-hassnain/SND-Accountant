import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { SiteLayout } from './components/site-layout';
import HomePage from './pages/home';
import ServicesPage from './pages/services';
import ContactPage from './pages/contact';

const queryClient = new QueryClient();

function Router() {
  return (
    <RoutedErrorBoundary>
      <SiteLayout>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={NotFound} />
        </Switch>
      </SiteLayout>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;