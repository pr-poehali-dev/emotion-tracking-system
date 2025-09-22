import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedEmotion, setSelectedEmotion] = useState("all");
  const [timeRange, setTimeRange] = useState([0, 24]);
  const [selectedZone, setSelectedZone] = useState("all");

  // Mock data for emotions
  const emotions = [
    { name: "Радость", value: 45, color: "#7C3AED", change: "+12%" },
    { name: "Грусть", value: 23, color: "#2563EB", change: "-5%" },
    { name: "Удивление", value: 18, color: "#009619", change: "+8%" },
    { name: "Гнев", value: 14, color: "#D52626", change: "-3%" }
  ];

  const zones = [
    { name: "Центр города", intensity: 89, coordinates: "55.7558°N 37.6176°E" },
    { name: "Торговый центр", intensity: 76, coordinates: "55.7520°N 37.6212°E" },
    { name: "Офисный район", intensity: 45, coordinates: "55.7505°N 37.6195°E" },
    { name: "Парк", intensity: 67, coordinates: "55.7542°N 37.6198°E" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Icon name="Brain" size={18} className="text-primary-foreground" />
            </div>
            <h1 className="text-xl font-semibold text-foreground">Emotional Analytics Platform</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="text-sm">
              <Icon name="Activity" size={14} className="mr-1" />
              Live Data
            </Badge>
            <Button size="sm">
              <Icon name="Settings" size={16} className="mr-2" />
              Настройки
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar with Filters */}
        <aside className="w-80 border-r border-border bg-card p-6">
          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-sm font-medium text-foreground">Фильтры анализа</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm text-muted-foreground">Тип эмоций</label>
                  <Select value={selectedEmotion} onValueChange={setSelectedEmotion}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все эмоции</SelectItem>
                      <SelectItem value="joy">Радость</SelectItem>
                      <SelectItem value="sadness">Грусть</SelectItem>
                      <SelectItem value="surprise">Удивление</SelectItem>
                      <SelectItem value="anger">Гнев</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-muted-foreground">Временной диапазон (часы)</label>
                  <div className="px-2">
                    <Slider
                      value={timeRange}
                      onValueChange={setTimeRange}
                      min={0}
                      max={24}
                      step={1}
                      className="w-full"
                    />
                    <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                      <span>{timeRange[0]}:00</span>
                      <span>{timeRange[1]}:00</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-muted-foreground">Зона анализа</label>
                  <Select value={selectedZone} onValueChange={setSelectedZone}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все зоны</SelectItem>
                      <SelectItem value="center">Центр города</SelectItem>
                      <SelectItem value="mall">Торговый центр</SelectItem>
                      <SelectItem value="office">Офисный район</SelectItem>
                      <SelectItem value="park">Парк</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-foreground">Сводка</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Активных датчиков</span>
                  <span className="font-medium">247</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Обработано событий</span>
                  <span className="font-medium">15,429</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Точность модели</span>
                  <span className="font-medium text-accent">94.2%</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Dashboard */}
        <main className="flex-1 p-6">
          <Tabs defaultValue="maps" className="space-y-6">
            <TabsList className="grid w-fit grid-cols-2">
              <TabsTrigger value="maps" className="flex items-center space-x-2">
                <Icon name="Map" size={16} />
                <span>Карты</span>
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center space-x-2">
                <Icon name="BarChart3" size={16} />
                <span>Аналитика</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="maps" className="space-y-6">
              {/* Heat Map */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Thermometer" size={20} />
                    <span>Тепловая карта эмоций</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative aspect-video rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 p-6">
                    {/* Simulated heat map visualization */}
                    <div className="absolute inset-4 rounded-lg bg-gradient-to-br from-primary/20 to-accent/30">
                      {zones.map((zone, index) => (
                        <div
                          key={zone.name}
                          className="absolute h-16 w-16 rounded-full animate-pulse"
                          style={{
                            left: `${20 + index * 20}%`,
                            top: `${30 + (index % 2) * 30}%`,
                            backgroundColor: `hsl(${220 - zone.intensity}, 70%, ${50 + zone.intensity / 4}%)`,
                            opacity: zone.intensity / 100,
                          }}
                        >
                          <div className="flex h-full w-full items-center justify-center text-xs font-medium text-white">
                            {zone.intensity}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Legend */}
                    <div className="absolute bottom-4 right-4 rounded-lg bg-white/90 p-3 backdrop-blur-sm">
                      <div className="text-xs font-medium mb-2">Интенсивность эмоций</div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs">Низкая</span>
                        <div className="h-2 w-16 rounded bg-gradient-to-r from-blue-200 to-purple-600"></div>
                        <span className="text-xs">Высокая</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Zone Details */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {zones.map((zone) => (
                  <Card key={zone.name} className="transition-all hover:shadow-md">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-sm">{zone.name}</h4>
                        <Badge variant={zone.intensity > 70 ? "default" : "secondary"}>
                          {zone.intensity}%
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">{zone.coordinates}</p>
                      <div className="h-2 rounded-full bg-muted">
                        <div
                          className="h-2 rounded-full bg-primary transition-all"
                          style={{ width: `${zone.intensity}%` }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              {/* Emotion Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="PieChart" size={20} />
                    <span>Распределение эмоций</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      {emotions.map((emotion) => (
                        <div key={emotion.name} className="flex items-center space-x-3">
                          <div
                            className="h-4 w-4 rounded-full"
                            style={{ backgroundColor: emotion.color }}
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium">{emotion.name}</span>
                              <div className="flex items-center space-x-2">
                                <span className="text-sm font-bold">{emotion.value}%</span>
                                <Badge variant={emotion.change.startsWith('+') ? "default" : "secondary"} className="text-xs">
                                  {emotion.change}
                                </Badge>
                              </div>
                            </div>
                            <div className="h-2 rounded-full bg-muted">
                              <div
                                className="h-2 rounded-full transition-all"
                                style={{
                                  width: `${emotion.value}%`,
                                  backgroundColor: emotion.color,
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Mock chart visualization */}
                    <div className="flex items-center justify-center">
                      <div className="relative h-48 w-48">
                        <div className="absolute inset-0 rounded-full border-8 border-muted"></div>
                        <div className="absolute inset-0 rounded-full border-8 border-t-primary border-r-blue-500 border-b-accent border-l-destructive transform rotate-45"></div>
                        <div className="absolute inset-4 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-2xl font-bold">100%</div>
                            <div className="text-sm text-muted-foreground">Охват</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Temporal Analysis */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="TrendingUp" size={20} />
                    <span>Временная динамика</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 rounded-lg bg-gradient-to-r from-card to-muted/50 p-4 flex items-end space-x-2">
                    {Array.from({ length: 24 }, (_, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-primary rounded-t opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                        style={{
                          height: `${Math.random() * 80 + 20}%`,
                        }}
                        title={`${i}:00 - Активность: ${Math.floor(Math.random() * 100)}%`}
                      />
                    ))}
                  </div>
                  <div className="mt-4 flex justify-between text-xs text-muted-foreground">
                    <span>00:00</span>
                    <span>06:00</span>
                    <span>12:00</span>
                    <span>18:00</span>
                    <span>24:00</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Index;