import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, Users, Eye, Home, CheckCircle } from "lucide-react";
import { ResponsiveContainer, FunnelChart, Funnel, Cell, LabelList, Tooltip } from "recharts";

export const ConversionFunnel = () => {
  const funnelData = [
    {
      name: "Leads Recebidos",
      value: 1247,
      icon: Users,
      color: "hsl(var(--primary))",
      description: "Total de leads captados"
    },
    {
      name: "Primeiro Contato",
      value: 956,
      icon: Eye,
      color: "hsl(var(--accent))",
      description: "Leads que responderam ao corretor"
    },
    {
      name: "Visitaram Imóvel",
      value: 423,
      icon: Home,
      color: "hsl(var(--secondary))",
      description: "Agendaram e visitaram propriedades"
    },
    {
      name: "Fecharam Negócio",
      value: 144,
      icon: CheckCircle,
      color: "hsl(var(--success))",
      description: "Conversão final em vendas"
    }
  ];

  const bounceRate = ((1247 - 956) / 1247 * 100).toFixed(1);
  const conversionRate = (144 / 1247 * 100).toFixed(1);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-card p-3 border rounded-lg shadow-card">
          <p className="font-semibold text-foreground">{data.name}</p>
          <p className="text-muted-foreground">{data.description}</p>
          <p className="text-lg font-bold text-primary">{data.value.toLocaleString()} leads</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingDown className="h-5 w-5" />
          Funil de Conversão & Bounce Rate
        </CardTitle>
        <p className="text-muted-foreground">
          Análise do comportamento dos leads desde o primeiro contato até a venda
        </p>
      </CardHeader>
      <CardContent>
        {/* Métricas Detalhadas */}
        <div className="space-y-4">
          <h4 className="font-semibold text-foreground">Métricas do Funil</h4>
          <div className="space-y-4">
              {funnelData.map((stage, index) => {
                const Icon = stage.icon;
                const previousValue = index > 0 ? funnelData[index - 1].value : stage.value;
                const conversionFromPrevious = ((stage.value / previousValue) * 100).toFixed(1);
                
                return (
                  <div key={stage.name} className="flex items-center gap-4 p-4 border rounded-lg transition-smooth hover:bg-muted/30">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: `${stage.color}20` }}>
                      <Icon className="h-6 w-6" style={{ color: stage.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-foreground">{stage.name}</span>
                        {index > 0 && (
                          <Badge variant="outline" className="text-xs">
                            {conversionFromPrevious}% do anterior
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{stage.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-foreground">
                          {stage.value.toLocaleString()}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {((stage.value / funnelData[0].value) * 100).toFixed(1)}% do total
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Resumo de Métricas */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-muted/50 rounded-lg text-center">
            <div className="text-2xl font-bold text-destructive">{bounceRate}%</div>
            <div className="text-sm text-muted-foreground">Bounce Rate</div>
            <div className="text-xs text-muted-foreground">Não tiveram primeiro contato</div>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg text-center">
            <div className="text-2xl font-bold text-warning">44.3%</div>
            <div className="text-sm text-muted-foreground">Taxa de Visitação</div>
            <div className="text-xs text-muted-foreground">Dos que tiveram contato</div>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg text-center">
            <div className="text-2xl font-bold text-success">{conversionRate}%</div>
            <div className="text-sm text-muted-foreground">Conversão Final</div>
            <div className="text-xs text-muted-foreground">Leads para vendas</div>
          </div>
        </div>

        <div className="mt-4 p-4 bg-muted/50 rounded-lg">
          <h4 className="font-semibold mb-2 text-foreground">Insights da Análise:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• <strong>Bounce Rate de {bounceRate}%:</strong> Oportunidade de melhorar primeiro contato</li>
            <li>• <strong>34% visitam:</strong> Leads que passam do primeiro contato são bem qualificados</li>
            <li>• <strong>Conversão {conversionRate}%:</strong> Taxa acima da média do mercado imobiliário (8-12%)</li>
            <li>• <strong>Foco:</strong> Reduzir bounce rate com distribuição mais inteligente</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};