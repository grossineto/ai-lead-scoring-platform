import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Settings, Zap, Phone, MapPin, DollarSign, Brain, BarChart3 } from "lucide-react";

export const LeadScoreConfig = () => {
  const scoreFactors = [
    {
      name: "Orçamento Disponível",
      icon: DollarSign,
      weight: 25,
      description: "Valor do imóvel de interesse vs capacidade financeira",
      rules: [
        "Acima de R$ 1M: +25 pontos",
        "R$ 500k - R$ 1M: +20 pontos", 
        "R$ 200k - R$ 500k: +15 pontos",
        "Abaixo de R$ 200k: +5 pontos"
      ]
    },
    {
      name: "Urgência de Compra",
      icon: Zap,
      weight: 20,
      description: "Tempo desejado para decisão de compra",
      rules: [
        "Até 30 dias: +20 pontos",
        "30-60 dias: +15 pontos",
        "60-90 dias: +10 pontos",
        "Mais de 90 dias: +5 pontos"
      ]
    },
    {
      name: "Localização SP",
      icon: MapPin,
      weight: 20,
      description: "Região de São Paulo de interesse",
      rules: [
        "Zona Sul Premium (Itaim, Vila Nova): +20 pontos",
        "Zona Oeste Nobre (Pinheiros, Vila Madalena): +18 pontos",
        "Centro Expandido: +15 pontos",
        "Zona Norte/Leste: +12 pontos",
        "Grande SP/ABC: +8 pontos"
      ]
    },
    {
      name: "Perfil IA (Tom da Conversa)",
      icon: Brain,
      weight: 15,
      description: "Análise comportamental por IA do perfil do cliente",
      rules: [
        "Executivo/Decidido: +15 pontos",
        "Profissional/Analítico: +12 pontos",
        "Família/Cauteloso: +10 pontos",
        "Jovem/Exploratório: +8 pontos",
        "Indeciso/Superficial: +5 pontos"
      ]
    },
    {
      name: "Qualidade do Contato",
      icon: Phone,
      weight: 12,
      description: "Forma de contato e engajamento inicial",
      rules: [
        "Ligação direta: +12 pontos",
        "WhatsApp com áudio: +9 pontos",
        "WhatsApp texto: +6 pontos",
        "Formulário completo: +8 pontos"
      ]
    },
    {
      name: "Histórico de Interações",
      icon: BarChart3,
      weight: 8,
      description: "Engajamento com conteúdos e materiais",
      rules: [
        "Múltiplas visitas ao site: +8 pontos",
        "Download de materiais: +6 pontos",
        "Interação redes sociais: +4 pontos",
        "Primeiro contato: +2 pontos"
      ]
    }
  ];

  const getWeightColor = (weight: number) => {
    if (weight >= 25) return "bg-primary text-primary-foreground";
    if (weight >= 20) return "bg-accent text-accent-foreground";
    return "bg-secondary text-secondary-foreground";
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          Configuração do Lead Score
        </CardTitle>
        <p className="text-muted-foreground">
          Defina os critérios e pesos para qualificação automática dos leads
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {scoreFactors.map((factor, index) => {
            const Icon = factor.icon;
            
            return (
              <div key={index} className="p-4 border rounded-lg space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{factor.name}</h4>
                      <p className="text-sm text-muted-foreground">{factor.description}</p>
                    </div>
                  </div>
                  <Badge className={getWeightColor(factor.weight)}>
                    {factor.weight}% peso
                  </Badge>
                </div>
                
                <div className="pl-13">
                  <div className="mb-3">
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Peso do Fator: {factor.weight}%
                    </label>
                    <Slider
                      value={[factor.weight]}
                      max={50}
                      step={5}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Regras de Pontuação:
                    </label>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {factor.rules.map((rule, ruleIndex) => (
                        <li key={ruleIndex} className="flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 p-4 bg-success-light rounded-lg border border-success/20">
          <h4 className="font-semibold mb-2 text-success-foreground">Resultado do Lead Score:</h4>
          <p className="text-sm text-success-foreground/80 mb-3">
            O score final é calculado somando todos os fatores ponderados pelos seus pesos.
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-3 bg-card rounded border">
              <div className="text-lg font-bold text-primary">80-100</div>
              <div className="text-xs text-muted-foreground">Classe A</div>
            </div>
            <div className="p-3 bg-card rounded border">
              <div className="text-lg font-bold text-accent">60-79</div>
              <div className="text-xs text-muted-foreground">Classe B</div>
            </div>
            <div className="p-3 bg-card rounded border">
              <div className="text-lg font-bold text-secondary-foreground">0-59</div>
              <div className="text-xs text-muted-foreground">Classe C</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};