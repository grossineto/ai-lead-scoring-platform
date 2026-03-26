import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Crown, Star, User } from "lucide-react";

export const LeadDistribution = () => {
  const brokers = [
    { name: "Ana Carolina", level: "Classe A", leads: 12, capacity: 15, conversion: 45, icon: Crown },
    { name: "Roberto Silva", level: "Classe A", leads: 10, capacity: 15, conversion: 42, icon: Crown },
    { name: "Carlos Mendes", level: "Classe B", leads: 18, capacity: 20, conversion: 35, icon: Star },
    { name: "Maria Fernanda", level: "Classe B", leads: 15, capacity: 20, conversion: 38, icon: Star },
    { name: "José Santos", level: "Classe C", leads: 25, capacity: 30, conversion: 28, icon: User },
    { name: "Lucia Pereira", level: "Classe C", leads: 22, capacity: 30, conversion: 31, icon: User },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Classe A": return "bg-primary text-primary-foreground";
      case "Classe B": return "bg-accent text-accent-foreground";  
      case "Classe C": return "bg-secondary text-secondary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ArrowRight className="h-5 w-5" />
          Distribuição Inteligente de Corretores
        </CardTitle>
        <p className="text-muted-foreground">
          Sistema automatizado que distribui leads baseado no score e nível do corretor
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {brokers.map((broker, index) => {
            const Icon = broker.icon;
            const capacityPercentage = (broker.leads / broker.capacity) * 100;
            
            return (
              <div key={index} className="flex items-center gap-4 p-4 border rounded-lg transition-smooth hover:bg-muted/30">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-foreground">{broker.name}</span>
                    <Badge className={getLevelColor(broker.level)} variant="secondary">
                      {broker.level}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Leads: {broker.leads}/{broker.capacity}
                      </span>
                      <span className="text-success">
                        Conv: {broker.conversion}%
                      </span>
                    </div>
                    <Progress 
                      value={capacityPercentage} 
                      className="h-2"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <h4 className="font-semibold mb-2 text-foreground">Como Funciona a Distribuição:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• <strong>Score 80+:</strong> Direcionado para Corretores Classe A (leads premium)</li>
            <li>• <strong>Score 60-79:</strong> Direcionado para Corretores Classe B (leads qualificados)</li>
            <li>• <strong>Score &lt;60:</strong> Direcionado para Corretores Classe C (leads iniciantes)</li>
            <li>• <strong>Balanceamento:</strong> Considera capacidade atual e performance histórica</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};