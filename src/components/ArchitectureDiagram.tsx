import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Database, Globe, Zap, Settings, Users, BarChart3, Network, GitBranch, Workflow, ArrowDown, Code, Cloud, Cpu } from "lucide-react";

export const ArchitectureDiagram = () => {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Network className="h-5 w-5" />
          Engenharia de Software - Arquitetura Visual
        </CardTitle>
        <p className="text-muted-foreground">
          Diagramas técnicos da arquitetura, fluxos de dados e integração do LeadScore Pro
        </p>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="architecture" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="architecture" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              Arquitetura
            </TabsTrigger>
            <TabsTrigger value="dataflow" className="flex items-center gap-2">
              <GitBranch className="h-4 w-4" />
              Fluxo de Dados
            </TabsTrigger>
            <TabsTrigger value="sequence" className="flex items-center gap-2">
              <Workflow className="h-4 w-4" />
              Lead Scoring
            </TabsTrigger>
            <TabsTrigger value="deployment" className="flex items-center gap-2">
              <Cloud className="h-4 w-4" />
              Deploy
            </TabsTrigger>
          </TabsList>

          {/* Arquitetura Geral */}
          <TabsContent value="architecture" className="mt-6">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Cpu className="h-5 w-5" />
                Arquitetura do Sistema
              </h3>
              
              {/* Frontend Layer */}
              <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                <h4 className="font-semibold text-primary mb-3">Frontend Layer</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-3 bg-card rounded border text-center">
                    <Code className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <p className="font-medium">React Dashboard</p>
                    <p className="text-sm text-muted-foreground">TypeScript + Tailwind</p>
                  </div>
                  <div className="p-3 bg-card rounded border text-center">
                    <Settings className="h-6 w-6 mx-auto mb-2 text-accent" />
                    <p className="font-medium">Admin Panel</p>
                    <p className="text-sm text-muted-foreground">Configurações</p>
                  </div>
                  <div className="p-3 bg-card rounded border text-center">
                    <Users className="h-6 w-6 mx-auto mb-2 text-success" />
                    <p className="font-medium">Broker Interface</p>
                    <p className="text-sm text-muted-foreground">Dashboard Corretor</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowDown className="h-6 w-6 text-muted-foreground" />
              </div>

              {/* Backend Layer */}
              <div className="p-4 bg-accent/5 rounded-lg border-l-4 border-accent">
                <h4 className="font-semibold text-accent mb-3">Backend Services</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-3 bg-card rounded border text-center">
                    <Zap className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <p className="font-medium">Python FastAPI</p>
                    <p className="text-sm text-muted-foreground">Lead Scoring Engine</p>
                  </div>
                  <div className="p-3 bg-card rounded border text-center">
                    <GitBranch className="h-6 w-6 mx-auto mb-2 text-accent" />
                    <p className="font-medium">Webhook Handler</p>
                    <p className="text-sm text-muted-foreground">RD Station Events</p>
                  </div>
                  <div className="p-3 bg-card rounded border text-center">
                    <BarChart3 className="h-6 w-6 mx-auto mb-2 text-success" />
                    <p className="font-medium">Analytics Engine</p>
                    <p className="text-sm text-muted-foreground">Métricas & Reports</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowDown className="h-6 w-6 text-muted-foreground" />
              </div>

              {/* External Services */}
              <div className="p-4 bg-success/5 rounded-lg border-l-4 border-success">
                <h4 className="font-semibold text-success mb-3">Serviços Externos (Obrigatórios)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-3 bg-card rounded border text-center">
                    <Database className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <p className="font-medium">RD Station CRM</p>
                    <Badge variant="default" className="mt-1">Obrigatório</Badge>
                  </div>
                  <div className="p-3 bg-card rounded border text-center">
                    <Globe className="h-6 w-6 mx-auto mb-2 text-accent" />
                    <p className="font-medium">Drupal CMS</p>
                    <Badge variant="default" className="mt-1">Obrigatório</Badge>
                  </div>
                  <div className="p-3 bg-card rounded border text-center">
                    <Cloud className="h-6 w-6 mx-auto mb-2 text-success" />
                    <p className="font-medium">Vercel Deploy</p>
                    <Badge variant="default" className="mt-1">Obrigatório</Badge>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Fluxo de Dados */}
          <TabsContent value="dataflow" className="mt-6">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Fluxo de Dados do Lead</h3>
              
              {/* Step 1: Captação */}
              <div className="relative">
                <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">1</div>
                    <div>
                      <h4 className="font-semibold">Captação de Leads</h4>
                      <p className="text-sm text-muted-foreground">Múltiplos canais de entrada</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline">Site Drupal</Badge>
                    <Badge variant="outline">WhatsApp</Badge>
                    <Badge variant="outline">Ads</Badge>
                  </div>
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                  <ArrowDown className="h-6 w-6 text-primary" />
                </div>
              </div>

              {/* Step 2: Ingestão */}
              <div className="relative">
                <div className="flex items-center justify-between p-4 bg-accent/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">2</div>
                    <div>
                      <h4 className="font-semibold">Ingestão & Normalização</h4>
                      <p className="text-sm text-muted-foreground">RD Station Webhook + API</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Webhook</Badge>
                    <Badge variant="secondary">Validação</Badge>
                  </div>
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                  <ArrowDown className="h-6 w-6 text-accent" />
                </div>
              </div>

              {/* Step 3: Processamento */}
              <div className="relative">
                <div className="flex items-center justify-between p-4 bg-success/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-success text-success-foreground rounded-full flex items-center justify-center font-bold">3</div>
                    <div>
                      <h4 className="font-semibold">Lead Scoring & Classificação</h4>
                      <p className="text-sm text-muted-foreground">Algoritmo de pontuação inteligente</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="default">Score 0-100</Badge>
                    <Badge variant="default">Classe A/B/C</Badge>
                  </div>
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                  <ArrowDown className="h-6 w-6 text-success" />
                </div>
              </div>

              {/* Step 4: Distribuição */}
              <div className="flex items-center justify-between p-4 bg-warning/10 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-warning text-warning-foreground rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-semibold">Distribuição Inteligente</h4>
                    <p className="text-sm text-muted-foreground">Atribuição automática para corretor qualificado</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline">Balanceamento</Badge>
                  <Badge variant="outline">Notificação</Badge>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Lead Scoring Process */}
          <TabsContent value="sequence" className="mt-6">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Processo de Lead Scoring</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Scoring Factors */}
                <div className="space-y-4">
                  <h4 className="font-semibold">Fatores de Pontuação</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded">
                      <span className="font-medium">Orçamento</span>
                      <Badge className="bg-primary text-primary-foreground">25%</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <span className="font-medium">Urgência</span>
                      <Badge className="bg-accent text-accent-foreground">20%</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <span className="font-medium">Localização SP</span>
                      <Badge className="bg-success text-success-foreground">20%</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <span className="font-medium">Perfil IA</span>
                      <Badge variant="secondary">15%</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <span className="font-medium">Qualidade Contato</span>
                      <Badge variant="outline">12%</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <span className="font-medium">Histórico</span>
                      <Badge variant="outline">8%</Badge>
                    </div>
                  </div>
                </div>

                {/* Distribution Logic */}
                <div className="space-y-4">
                  <h4 className="font-semibold">Lógica de Distribuição</h4>
                  <div className="space-y-3">
                    <div className="p-4 bg-primary/10 rounded border-l-4 border-primary">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Classe A</span>
                        <Badge className="bg-primary text-primary-foreground">Score 80-100</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Corretores experientes para leads premium</p>
                    </div>
                    
                    <div className="p-4 bg-accent/10 rounded border-l-4 border-accent">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Classe B</span>
                        <Badge className="bg-accent text-accent-foreground">Score 60-79</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Corretores intermediários para leads qualificados</p>
                    </div>
                    
                    <div className="p-4 bg-secondary/20 rounded border-l-4 border-secondary">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Classe C</span>
                        <Badge variant="secondary">Score 0-59</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Corretores iniciantes para leads de baixa prioridade</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Deployment Architecture */}
          <TabsContent value="deployment" className="mt-6">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Arquitetura de Deploy</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Frontend Deployment */}
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Cloud className="h-8 w-8 text-primary" />
                    <div>
                      <h4 className="font-semibold">Frontend - Vercel</h4>
                      <Badge variant="default">Obrigatório</Badge>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      React App buildado estaticamente
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      CDN global para performance
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      Deploy automático via Git
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      Edge Functions para APIs
                    </li>
                  </ul>
                </div>

                {/* Backend Deployment */}
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Cpu className="h-8 w-8 text-accent" />
                    <div>
                      <h4 className="font-semibold">Backend - Python</h4>
                      <Badge variant="secondary">FastAPI + Vercel</Badge>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      FastAPI como Vercel Function
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      Serverless auto-scaling
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      Integração nativa com RD Station
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      Webhook endpoints configurados
                    </li>
                  </ul>
                </div>
              </div>

              {/* Integration Requirements */}
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-3">Requisitos de Integração</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <Database className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="font-medium">RD Station API</p>
                    <p className="text-sm text-muted-foreground">CRM obrigatório para leads</p>
                  </div>
                  <div className="text-center">
                    <Globe className="h-8 w-8 mx-auto mb-2 text-accent" />
                    <p className="font-medium">Drupal CMS</p>
                    <p className="text-sm text-muted-foreground">CMS obrigatório para conteúdo</p>
                  </div>
                  <div className="text-center">
                    <Cloud className="h-8 w-8 mx-auto mb-2 text-success" />
                    <p className="font-medium">Vercel Platform</p>
                    <p className="text-sm text-muted-foreground">Deploy obrigatório</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Tech Stack Summary */}
        <div className="mt-8 p-4 bg-muted/50 rounded-lg">
          <h4 className="font-semibold mb-3 text-foreground">Stack Tecnológica & Requisitos de Arquitetura:</h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
            <div className="text-center">
              <Badge variant="default" className="mb-1">Frontend</Badge>
              <p className="text-sm text-muted-foreground">React + TypeScript</p>
            </div>
            <div className="text-center">
              <Badge variant="default" className="mb-1">Backend</Badge>
              <p className="text-sm text-muted-foreground">Python FastAPI</p>
            </div>
            <div className="text-center">
              <Badge variant="default" className="mb-1">CRM</Badge>
              <p className="text-sm text-muted-foreground">RD Station (Obrigatório)</p>
            </div>
            <div className="text-center">
              <Badge variant="default" className="mb-1">CMS</Badge>
              <p className="text-sm text-muted-foreground">Drupal (Obrigatório)</p>
            </div>
            <div className="text-center">
              <Badge variant="default" className="mb-1">Deploy</Badge>
              <p className="text-sm text-muted-foreground">Vercel (Obrigatório)</p>
            </div>
          </div>
          
          <div className="p-3 bg-success-light rounded border border-success/20">
            <p className="text-sm text-success-foreground">
              <strong>Arquitetura Escalável:</strong> Microserviços com serverless functions, integração nativa 
              com RD Station via API, Drupal CMS para captação de leads, e deploy automatizado no Vercel 
              para performance global e manutenibilidade simplificada.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};