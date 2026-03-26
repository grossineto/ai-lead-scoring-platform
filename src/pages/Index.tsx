import { Building2, Users, TrendingUp, Target, BarChart3, Settings, Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { LeadDistribution } from "@/components/LeadDistribution";
import { LeadScoreConfig } from "@/components/LeadScoreConfig";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { ConversionFunnel } from "@/components/ConversionFunnel";
import { useState } from "react";

const Index = () => {
  // Enhanced mock data with more leads
  const allLeads = [
    { id: 1, name: "João Silva", score: 85, interest: "Apartamento", budget: "R$ 500k", source: "Site", broker: "Ana Carolina", brokerClass: "A", region: "Vila Madalena", date: "2024-01-20", aiProfile: "Investidor", produto: "Cyrela" },
    { id: 2, name: "Maria Santos", score: 65, interest: "Casa", budget: "R$ 300k", source: "WhatsApp", broker: "Carlos Mendes", brokerClass: "B", region: "Tatuapé", date: "2024-01-19", aiProfile: "Primeira Casa", produto: "Living" },
    { id: 3, name: "Pedro Costa", score: 92, interest: "Cobertura", budget: "R$ 1.2M", source: "Facebook", broker: "Ana Carolina", brokerClass: "A", region: "Jardins", date: "2024-01-18", aiProfile: "Premium", produto: "Vivaz" },
    { id: 4, name: "Lucia Oliveira", score: 45, interest: "Kitnet", budget: "R$ 150k", source: "Google Ads", broker: "José Santos", brokerClass: "C", region: "Cidade Tiradentes", date: "2024-01-17", aiProfile: "Estudante", produto: "Cyrela" },
    { id: 5, name: "Carlos Eduardo", score: 78, interest: "Apartamento", budget: "R$ 400k", source: "Site", broker: "Roberto Silva", brokerClass: "A", region: "Pinheiros", date: "2024-01-16", aiProfile: "Família", produto: "Living" },
    { id: 6, name: "Fernanda Lima", score: 55, interest: "Casa", budget: "R$ 280k", source: "WhatsApp", broker: "Maria Fernanda", brokerClass: "B", region: "Santana", date: "2024-01-15", aiProfile: "Primeira Casa", produto: "Vivaz" },
    { id: 7, name: "Roberto Alves", score: 88, interest: "Cobertura", budget: "R$ 950k", source: "Facebook", broker: "Ana Carolina", brokerClass: "A", region: "Moema", date: "2024-01-14", aiProfile: "Investidor", produto: "Cyrela" },
    { id: 8, name: "Juliana Costa", score: 42, interest: "Kitnet", budget: "R$ 120k", source: "Google Ads", broker: "Lucia Pereira", brokerClass: "C", region: "Itaquera", date: "2024-01-13", aiProfile: "Jovem Profissional", produto: "Living" },
    { id: 9, name: "Anderson Silva", score: 71, interest: "Apartamento", budget: "R$ 350k", source: "Site", broker: "Carlos Mendes", brokerClass: "B", region: "Vila Prudente", date: "2024-01-12", aiProfile: "Família", produto: "Vivaz" },
    { id: 10, name: "Patricia Mendes", score: 95, interest: "Cobertura", budget: "R$ 1.5M", source: "Facebook", broker: "Roberto Silva", brokerClass: "A", region: "Higienópolis", date: "2024-01-11", aiProfile: "Premium", produto: "Cyrela" },
    { id: 11, name: "Ricardo Santos", score: 38, interest: "Kitnet", budget: "R$ 100k", source: "Google Ads", broker: "José Santos", brokerClass: "C", region: "Guaianases", date: "2024-01-10", aiProfile: "Estudante", produto: "Living" },
    { id: 12, name: "Beatriz Oliveira", score: 67, interest: "Casa", budget: "R$ 320k", source: "WhatsApp", broker: "Maria Fernanda", brokerClass: "B", region: "Penha", date: "2024-01-09", aiProfile: "Primeira Casa", produto: "Vivaz" },
  ];

  // State for filters and pagination
  const [filters, setFilters] = useState({
    period: "todos",
    score: "todos", 
    source: "todos",
    class: "todos",
    region: "todos",
    produto: "todos",
    broker: "todos"
  });
  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 5;
  
  // Get unique brokers for filter
  const uniqueBrokers = [...new Set(allLeads.map(lead => lead.broker))].sort();

  // Filter logic
  const filteredLeads = allLeads.filter(lead => {
    const now = new Date();
    const leadDate = new Date(lead.date);
    const daysDiff = Math.floor((now.getTime() - leadDate.getTime()) / (1000 * 3600 * 24));
    
    if (filters.period === "10dias" && daysDiff > 10) return false;
    if (filters.period === "20dias" && daysDiff > 20) return false;
    if (filters.score === "alto" && lead.score < 80) return false;
    if (filters.score === "medio" && (lead.score < 60 || lead.score >= 80)) return false;
    if (filters.score === "baixo" && lead.score >= 60) return false;
    if (filters.source !== "todos" && lead.source.toLowerCase() !== filters.source) return false;
    if (filters.class !== "todos" && lead.brokerClass !== filters.class.toUpperCase()) return false;
    if (filters.region !== "todos" && !lead.region.toLowerCase().includes(filters.region.toLowerCase())) return false;
    if (filters.produto !== "todos" && lead.produto.toLowerCase() !== filters.produto.toLowerCase()) return false;
    if (filters.broker !== "todos" && lead.broker.toLowerCase() !== filters.broker.toLowerCase()) return false;
    
    return true;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredLeads.length / leadsPerPage);
  const startIndex = (currentPage - 1) * leadsPerPage;
  const paginatedLeads = filteredLeads.slice(startIndex, startIndex + leadsPerPage);

  const getScoreBadgeVariant = (score: number) => {
    if (score >= 80) return "default"; // Success green
    if (score >= 60) return "secondary"; // Warning yellow  
    return "outline"; // Low priority
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary">
                <Building2 className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">LeadScore Pro</h1>
                <p className="text-sm text-muted-foreground">Distribuição Inteligente de Leads Imobiliários</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Settings className="mr-2 h-4 w-4" />
              Configurações
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="shadow-card transition-smooth hover:shadow-elevation">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Leads</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">1,247</div>
              <p className="text-xs text-success">+12% vs mês anterior</p>
            </CardContent>
          </Card>

          <Card className="shadow-card transition-smooth hover:shadow-elevation">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Score Médio</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">73</div>
              <p className="text-xs text-success">+5 pontos</p>
            </CardContent>
          </Card>

          <Card className="shadow-card transition-smooth hover:shadow-elevation">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taxa Conversão</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">34%</div>
              <p className="text-xs text-success">+8% vs mês anterior</p>
            </CardContent>
          </Card>

          <Card className="shadow-card transition-smooth hover:shadow-elevation">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Leads Ativos</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">89</div>
              <p className="text-xs text-muted-foreground">Em distribuição</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Leads with Filters */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Leads Recentes & Distribuição
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Filters */}
            <div className="space-y-4 mb-6 p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Filtros de Busca</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Período
                  </label>
                  <Select value={filters.period} onValueChange={(value) => setFilters({...filters, period: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione período" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos os períodos</SelectItem>
                      <SelectItem value="10dias">Últimos 10 dias</SelectItem>
                      <SelectItem value="20dias">Últimos 20 dias</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Score
                  </label>
                  <Select value={filters.score} onValueChange={(value) => setFilters({...filters, score: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione score" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos os scores</SelectItem>
                      <SelectItem value="alto">Alto (80+)</SelectItem>
                      <SelectItem value="medio">Médio (60-79)</SelectItem>
                      <SelectItem value="baixo">Baixo (&lt;60)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Origem
                  </label>
                  <Select value={filters.source} onValueChange={(value) => setFilters({...filters, source: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione origem" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todas as origens</SelectItem>
                      <SelectItem value="site">Site</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      <SelectItem value="facebook">Facebook</SelectItem>
                      <SelectItem value="google ads">Google Ads</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Classe
                  </label>
                  <Select value={filters.class} onValueChange={(value) => setFilters({...filters, class: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione classe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todas as classes</SelectItem>
                      <SelectItem value="a">Classe A</SelectItem>
                      <SelectItem value="b">Classe B</SelectItem>
                      <SelectItem value="c">Classe C</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Região SP
                  </label>
                  <Select value={filters.region} onValueChange={(value) => setFilters({...filters, region: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione região" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todas as regiões</SelectItem>
                      <SelectItem value="vila">Vila Madalena</SelectItem>
                      <SelectItem value="jardins">Jardins</SelectItem>
                      <SelectItem value="pinheiros">Pinheiros</SelectItem>
                      <SelectItem value="moema">Moema</SelectItem>
                      <SelectItem value="tatuape">Tatuapé</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Produto
                  </label>
                  <Select value={filters.produto} onValueChange={(value) => setFilters({...filters, produto: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione produto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos os produtos</SelectItem>
                      <SelectItem value="cyrela">Cyrela</SelectItem>
                      <SelectItem value="living">Living</SelectItem>
                      <SelectItem value="vivaz">Vivaz</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Corretor
                  </label>
                  <Select value={filters.broker} onValueChange={(value) => setFilters({...filters, broker: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Buscar corretor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos os corretores</SelectItem>
                      {uniqueBrokers.map((broker) => (
                        <SelectItem key={broker} value={broker.toLowerCase()}>
                          {broker}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Leads Table */}
            <div className="border rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Lead</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead>Interesse</TableHead>
                    <TableHead>Região</TableHead>
                    <TableHead>Corretor</TableHead>
                    <TableHead>Origem</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedLeads.map((lead) => (
                    <TableRow key={lead.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                            <Users className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{lead.name}</p>
                            <p className="text-xs text-muted-foreground">{lead.budget}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getScoreBadgeVariant(lead.score)}>
                          {lead.score}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm">{lead.interest}</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm text-muted-foreground">{lead.region}</span>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="text-sm font-medium">{lead.broker}</p>
                          <Badge variant="outline" className="text-xs">
                            Classe {lead.brokerClass}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm text-muted-foreground">{lead.source}</span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Mostrando {startIndex + 1} a {Math.min(startIndex + leadsPerPage, filteredLeads.length)} de {filteredLeads.length} leads
              </p>
              
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(Math.max(1, currentPage - 1));
                      }}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                  
                  {[...Array(totalPages)].map((_, i) => (
                    <PaginationItem key={i + 1}>
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(i + 1);
                        }}
                        isActive={currentPage === i + 1}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  <PaginationItem>
                    <PaginationNext 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(Math.min(totalPages, currentPage + 1));
                      }}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </CardContent>
        </Card>

        {/* Lead Distribution Component */}
        <LeadDistribution />

        {/* Conversion Funnel */}
        <ConversionFunnel />

        {/* Lead Score Configuration */}
        <LeadScoreConfig />

        {/* Architecture Diagram */}
        <ArchitectureDiagram />
      </main>
    </div>
  );
};

export default Index;