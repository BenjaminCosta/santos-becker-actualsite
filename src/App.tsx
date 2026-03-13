import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Layout
import { PageLayout } from "@/components/layout/PageLayout";

// Pages
import { Home } from "@/pages/Home";
import { Nosotros } from "@/pages/Nosotros";
import { Servicios } from "@/pages/Servicios";
import { Tecnologia } from "@/pages/Tecnologia";
import { Inclusion } from "@/pages/Inclusion";
import { Equipo } from "@/pages/Equipo";
import { Contacto } from "@/pages/Contacto";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <PageLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/servicios" component={Servicios} />
        <Route path="/tecnologia" component={Tecnologia} />
        <Route path="/inclusion-laboral" component={Inclusion} />
        <Route path="/equipo" component={Equipo} />
        <Route path="/contacto" component={Contacto} />
        <Route component={NotFound} />
      </Switch>
    </PageLayout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
