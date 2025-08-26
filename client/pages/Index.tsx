import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Users, Brain, Shield, Phone, Download, Award, Clock, Target, AlertTriangle } from "lucide-react";

export default function Index() {
  const [currentScenario, setCurrentScenario] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const handleScenarioChoice = (choice: string) => {
    setCurrentScenario(choice);
  };

  const handleQuizAnswer = (questionId: number, answer: string) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const submitQuiz = () => {
    setShowQuizResults(true);
  };

  const therapeuticApproaches = [
    {
      title: "Thérapies cognitivo-comportementales (TCC)",
      description: "Approche psychothérapeutique structurée qui se concentre sur les liens entre pensées, émotions et comportements.",
      whatItIs: "Les TCC sont basées sur le principe que nos pensées influencent nos émotions et nos comportements. Le thérapeute aide la personne à identifier les schémas de pensée négatifs ou irrationnels (les 'cognitions') et les comportements problématiques pour les remplacer par des alternatives plus adaptées.",
      whyItWorks: "Cette approche fonctionne car elle s'attaque aux causes profondes du stress en modifiant les patterns de pensée dysfonctionnels. En apprenant à reconnaître et changer les pensées automatiques négatives, la personne développe de nouveaux mécanismes d'adaptation plus sains.",
      reasoning: "Le stress est souvent alimenté par des pensées catastrophiques, des généralisations excessives ou des interprétations erronées. En restructurant ces cognitions, on réduit l'intensité des réactions de stress et on améliore la capacité de gestion des situations difficiles.",
      usage: "Troubles anxieux, dépression, phobies, stress post-traumatique, troubles obsessionnels compulsifs",
      efficacy: "Efficacité prouvée scientifiquement avec plus de 500 études. Résultats durables observés à long terme.",
      duration: "12 à 20 séances en moyenne",
      techniques: ["Restructuration cognitive", "Exposition graduelle", "Relaxation", "Résolution de problèmes"]
    },
    {
      title: "Pleine conscience (Mindfulness, MBSR)",
      description: "Programme structuré de méditation et d'attention consciente développé par Jon Kabat-Zinn.",
      whatItIs: "La pleine conscience est un état de conscience qui résulte du fait de porter son attention, intentionnellement, au moment présent, sans jugement. Le MBSR (Mindfulness-Based Stress Reduction) est un programme de 8 semaines qui enseigne diverses techniques de méditation et de yoga doux.",
      whyItWorks: "Cette approche agit sur le système nerveux en activant la réponse de relaxation et en réduisant l'activité de l'amygdale (centre de la peur). Elle développe la capacité à observer ses pensées et émotions sans s'y identifier, créant un espace de recul face au stress.",
      reasoning: "Le stress est souvent amplifié par notre tendance à ruminer le passé ou anticiper l'avenir. En ramenant l'attention au présent, on interrompt ces cycles de pensées stressantes et on cultive un état de calme intérieur. La pratique régulière modifie littéralement la structure du cerveau.",
      usage: "Stress chronique, burnout, anxiété généralisée, douleurs chroniques, insomnie, dépression récurrente",
      efficacy: "Réduction de 70% des symptômes anxieux, diminution de 40% des rechutes dépressives",
      duration: "Programme de 8 semaines, 2h30 par semaine + pratique quotidienne",
      techniques: ["Méditation assise", "Scan corporel", "Yoga mindful", "Méditation marchée", "Respiration consciente"]
    },
    {
      title: "EMDR (Eye Movement Desensitization and Reprocessing)",
      description: "Psychothérapie intégrative qui traite les traumatismes par stimulation bilatérale du cerveau.",
      whatItIs: "L'EMDR utilise des mouvements oculaires (ou d'autres stimulations bilatérales) pendant que la personne se concentre sur le souvenir traumatisant. Cette technique permet au cerveau de retraiter l'information traumatique et de l'intégrer de manière adaptative.",
      whyItWorks: "Les mouvements oculaires reproduisent naturellement ce qui se passe pendant le sommeil paradoxal, phase cruciale pour l'intégration des souvenirs. Cette stimulation bilatérale permet au cerveau de 'digérer' le trauma et de réduire son impact émotionnel.",
      reasoning: "Les traumatismes créent des 'blocages' dans le traitement de l'information par le cerveau, maintenant la personne dans un état de stress post-traumatique. L'EMDR 'débloque' ces souvenirs figés et permet leur intégration naturelle, réduisant drastiquement les symptômes de stress.",
      usage: "Stress post-traumatique, traumatismes complexes, phobies, attaques de panique, deuils compliqués",
      efficacy: "84-90% d'efficacité pour le PTSD selon les études. Recommandée par l'OMS et l'HAS",
      duration: "Variable selon le trauma, généralement 6 à 12 séances",
      techniques: ["Mouvements oculaires", "Stimulation tactile bilatérale", "Stimulation auditive", "Protocole en 8 phases"]
    },
    {
      title: "Soutien médicamenteux",
      description: "Traitement pharmacologique ciblé pour réguler les neurotransmetteurs impliqués dans la réponse au stress.",
      whatItIs: "Les médicaments psychotropes (anxiolytiques, antidépresseurs, régulateurs d'humeur) agissent sur les systèmes de neurotransmetteurs (sérotonine, dopamine, GABA) pour réguler l'humeur et réduire l'anxiété. Ils sont prescrits par un médecin psychiatre ou généraliste.",
      whyItWorks: "Le stress chronique peut créer des déséquilibres chimiques dans le cerveau. Les médicaments aident à rétablir un équilibre neurochimique, créant une 'fenêtre thérapeutique' qui permet aux autres approches d'être plus efficaces.",
      reasoning: "Dans certains cas, le niveau de stress est si élevé qu'il empêche la personne de bénéficier d'une psychothérapie. Le médicament peut être nécessaire pour stabiliser l'état émotionnel et permettre un travail psychologique approfondi.",
      usage: "Troubles anxieux sévères, dépression majeure, troubles bipolaires, troubles du sommeil sévères",
      efficacy: "Efficace à court terme, meilleurs résultats en combinaison avec la psychothérapie",
      duration: "Variable, généralement 6 mois à 2 ans avec diminution progressive",
      techniques: ["Anxiolytiques (courte durée)", "Antidépresseurs ISRS", "Régulateurs d'humeur", "Somnifères (usage ponctuel)"]
    },
    {
      title: "Groupes de parole et coaching",
      description: "Accompagnement collectif ou individuel axé sur le soutien social et le développement des ressources personnelles.",
      whatItIs: "Les groupes de parole rassemblent des personnes vivant des difficultés similaires dans un cadre bienveillant et confidentiel. Le coaching se concentre sur l'identification et le développement des ressources personnelles pour atteindre des objectifs spécifiques.",
      whyItWorks: "L'effet de groupe crée un sentiment d'appartenance et réduit l'isolement. Partager son expérience et entendre celle des autres normalise les difficultés et ouvre de nouvelles perspectives. Le coaching renforce l'estime de soi et la confiance en ses capacités.",
      reasoning: "L'être humain est fondamentalement social. Le stress s'amplifie dans l'isolement et diminue quand on se sent compris et soutenu. Ces approches mobilisent les ressources naturelles de résilience et créent un réseau de soutien durable.",
      usage: "Stress lié au travail, transitions de vie, deuil, burn-out, développement personnel, reconversion professionnelle",
      efficacy: "Amélioration de 60% de la résilience, réduction significative de l'isolement social",
      duration: "Groupes : 8 à 12 séances. Coaching : 5 à 10 séances",
      techniques: ["Cercles de parole", "Techniques narratives", "Coaching systémique", "Analyse transactionnelle", "PNL"]
    }
  ];

  const roles = [
    {
      id: "manager",
      title: "Manager",
      role: "Vigilance, soutien, orientation",
      limits: "Ne pas diagnostiquer, ne pas faire de thérapie",
      actions: ["Observer les changements", "Écouter sans juger", "Orienter vers les ressources"]
    },
    {
      id: "rh",
      title: "RH", 
      role: "Relais administratif et accompagnement social",
      limits: "Confidentialité, respect de la vie privée",
      actions: ["Informer sur les dispositifs", "Accompagner les démarches", "Assurer le suivi administratif"]
    },
    {
      id: "hse",
      title: "HSE",
      role: "Prévention des risques psychosociaux",
      limits: "Action collective, pas individuelle",
      actions: ["Évaluer les risques", "Mettre en place des actions préventives", "Former les équipes"]
    },
    {
      id: "collegues",
      title: "Collègues",
      role: "Soutien humain, écoute bienveillante",
      limits: "Pas de diagnostic, pas de conseil médical",
      actions: ["Écouter", "Alerter si nécessaire", "Maintenir le lien social"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-indigo-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-3">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Formation Fiducial</h1>
              <p className="text-sm text-gray-600">Gestion du stress et accompagnement</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        
        {/* Bloc 1 - Introduction */}
        <section className="text-center space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-indigo-200">
            <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 mb-4">
              Module 5
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              L'accompagnement possible sur la gestion du stress
            </h1>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600 mb-6">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Durée : 40 min</span>
              </div>
              <Separator orientation="vertical" className="h-4" />
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Public : managers, RH, HSE, collaborateurs</span>
              </div>
            </div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Ce module vous permet de comprendre comment accompagner efficacement une personne en 
              situation de stress, tout en connaissant vos propres limites et les ressources disponibles.
            </p>
          </div>
        </section>

        {/* Bloc 2 - Objectifs pédagogiques */}
        <section>
          <Card className="border-indigo-200">
            <CardHeader className="bg-indigo-50">
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-indigo-600" />
                <span>Objectifs pédagogiques</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid gap-4">
                {[
                  "Découvrir les approches thérapeutiques validées pour la gestion du stress.",
                  "Savoir repérer les signaux inquiétants et orienter vers une prise en charge adaptée.",
                  "Identifier les rôles et limites des acteurs de l'entreprise.",
                  "Connaître les dispositifs internes et externes, avec un focus sur Fiducial.",
                  "Maîtriser les bases de la communication d'aide.",
                  "Prévenir son propre stress en situation d'accompagnement.",
                  "Savoir passer le relais aux professionnels compétents."
                ].map((objective, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{objective}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Bloc 3 - Séquence 1: Les approches thérapeutiques */}
        <section>
          <Card className="border-indigo-200">
            <CardHeader className="bg-gradient-to-r from-indigo-50 to-blue-50">
              <CardTitle className="text-xl">Séquence 1 : Les approches thérapeutiques</CardTitle>
              <p className="text-gray-600">
                Plusieurs approches validées existent pour accompagner la gestion du stress :
              </p>
            </CardHeader>
            <CardContent className="pt-6">
              <Accordion type="single" collapsible className="w-full">
                {therapeuticApproaches.map((approach, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      <span className="font-medium">{approach.title}</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-6 pt-2">
                        <p className="text-gray-700 text-base leading-relaxed">{approach.description}</p>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                            Qu'est-ce que c'est ?
                          </h4>
                          <p className="text-blue-800 text-sm leading-relaxed">{approach.whatItIs}</p>
                        </div>

                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            Pourquoi ça marche ?
                          </h4>
                          <p className="text-green-800 text-sm leading-relaxed">{approach.whyItWorks}</p>
                        </div>

                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                          <h4 className="font-semibold text-purple-900 mb-3 flex items-center">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                            La raison d'être
                          </h4>
                          <p className="text-purple-800 text-sm leading-relaxed">{approach.reasoning}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-white border border-gray-200 rounded-lg p-4">
                            <h4 className="font-medium text-gray-900 mb-3">📋 Indications :</h4>
                            <p className="text-sm text-gray-700">{approach.usage}</p>
                          </div>
                          <div className="bg-white border border-gray-200 rounded-lg p-4">
                            <h4 className="font-medium text-gray-900 mb-3">⏱️ Durée :</h4>
                            <p className="text-sm text-gray-700">{approach.duration}</p>
                          </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-900 mb-3">🎯 Techniques principales :</h4>
                          <div className="flex flex-wrap gap-2">
                            {approach.techniques.map((technique, idx) => (
                              <span key={idx} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium">
                                {technique}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                          <h4 className="font-medium text-amber-900 mb-2">✅ Efficacité prouvée :</h4>
                          <p className="text-amber-800 text-sm">{approach.efficacy}</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Bloc 4 - Séquence 2: Repérage et orientation */}
        <section>
          <Card className="border-indigo-200">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                <span>S��quence 2 : Repérage et orientation</span>
              </CardTitle>
              <p className="text-gray-600">
                Il est essentiel d'identifier les signaux précoces et d'agir avant qu'ils ne s'aggravent.
              </p>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-medium text-orange-900 mb-3">Signaux d'alerte :</h4>
                <div className="grid md:grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span>Fatigue chronique</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span>Isolement social</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span>Erreurs fréquentes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span>Propos inquiétants</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">Exemple de phrase bienveillante :</h4>
                <p className="text-blue-800 italic">
                  "J'ai remarqué que tu sembles plus fatigué, veux-tu en parler ?"
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-4">Scénario interactif :</h4>
                <div className="space-y-4">
                  <div className="bg-gray-50 border rounded-lg p-4">
                    <p className="text-gray-700 mb-4">
                      Un collègue semble épuisé et a fait plusieurs erreurs récemment. 
                      Quelle approche choisissez-vous ?
                    </p>
                    <div className="grid gap-2">
                      {[
                        { id: "ignore", text: "Ignorer, ce n'est pas mon problème", feedback: "❌ Réponse inadaptée. L'indifférence peut aggraver la situation." },
                        { id: "direct", text: "Lui dire directement qu'il fait trop d'erreurs", feedback: "❌ Approche trop directe qui peut créer de la défensive." },
                        { id: "bienveillant", text: "L'approcher avec bienveillance et proposer d'échanger", feedback: "✅ Excellente approche ! L'empathie et l'ouverture au dialogue sont essentielles." },
                        { id: "manager", text: "En parler immédiatement au manager", feedback: "⚠️ Peut être approprié, mais mieux vaut d'abord essayer le contact direct." }
                      ].map((choice) => (
                        <div key={choice.id}>
                          <Button
                            variant={currentScenario === choice.id ? "default" : "outline"}
                            className="w-full text-left justify-start"
                            onClick={() => handleScenarioChoice(choice.id)}
                          >
                            {choice.text}
                          </Button>
                          {currentScenario === choice.id && (
                            <div className="mt-2 p-3 bg-white border rounded text-sm">
                              {choice.feedback}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Bloc 5 - Séquence 3: Rôles et limites */}
        <section>
          <Card className="border-indigo-200">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50">
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-purple-600" />
                <span>Séquence 3 : Rôles et limites des acteurs</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {roles.map((role) => (
                  <Button
                    key={role.id}
                    variant={selectedRole === role.id ? "default" : "outline"}
                    className="h-auto p-4 flex flex-col items-center space-y-2"
                    onClick={() => setSelectedRole(selectedRole === role.id ? null : role.id)}
                  >
                    <Users className="h-6 w-6" />
                    <span className="font-medium">{role.title}</span>
                  </Button>
                ))}
              </div>

              {selectedRole && (
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  {(() => {
                    const role = roles.find(r => r.id === selectedRole);
                    return role ? (
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">{role.title}</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium text-green-700 mb-2">Rôle :</h4>
                            <p className="text-gray-700">{role.role}</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-red-700 mb-2">Limites :</h4>
                            <p className="text-gray-700">{role.limits}</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-blue-700 mb-2">Actions concrètes :</h4>
                          <ul className="space-y-1">
                            {role.actions.map((action, index) => (
                              <li key={index} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                <span className="text-gray-700">{action}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : null;
                  })()}
                </div>
              )}

              <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-medium text-yellow-900 mb-2">⚠️ Limite essentielle :</h4>
                <p className="text-yellow-800">
                  Ne jamais se substituer aux professionnels de santé. Le rôle de chacun est d'accompagner, 
                  pas de diagnostiquer ou soigner.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Bloc 6 - Séquence 4: Ressources */}
        <section>
          <Card className="border-indigo-200">
            <CardHeader className="bg-gradient-to-r from-green-50 to-teal-50">
              <CardTitle className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-green-600" />
                <span>Séquence 4 : Ressources internes et externes</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span>Ressources internes Fiducial</span>
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Médecine du travail",
                      "Cellule d'écoute psychologique", 
                      "Formation continue sur la gestion du stress",
                      "Réseau HSE et référents RPS"
                    ].map((resource, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span className="text-blue-800">{resource}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Ressources externes</span>
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Médecins généralistes",
                      "Psychologues",
                      "Associations spécialisées",
                      "Numéros nationaux : 3114 (prévention suicide)"
                    ].map((resource, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-green-800">{resource}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Bloc 7 - Séquence 5: Communication */}
        <section>
          <Card className="border-indigo-200">
            <CardHeader className="bg-gradient-to-r from-teal-50 to-cyan-50">
              <CardTitle>Séquence 5 : Communiquer et instaurer une relation d'aide</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                <h4 className="font-medium text-teal-900 mb-3">Principes de l'écoute active :</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Shield className="h-6 w-6 text-teal-600" />
                    </div>
                    <span className="text-teal-800 font-medium">Bienveillance</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Users className="h-6 w-6 text-teal-600" />
                    </div>
                    <span className="text-teal-800 font-medium">Neutralité</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <CheckCircle className="h-6 w-6 text-teal-600" />
                    </div>
                    <span className="text-teal-800 font-medium">Non-jugement</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">À l'entreprise :</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Informer sur les dispositifs</li>
                    <li>• Orienter vers les ressources</li>
                    <li>• Maintenir la confidentialité</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">À la personne :</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Rassurer et soutenir</li>
                    <li>• Accompagner sans juger</li>
                    <li>• Respecter son rythme</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Bloc 8 - Séquence 6: Se protéger */}
        <section>
          <Card className="border-indigo-200">
            <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-amber-600" />
                <span>Séquence 6 : Se protéger et passer le relais</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h4 className="font-medium text-amber-900 mb-2">⚠️ Attention au stress secondaire</h4>
                <p className="text-amber-800 text-sm">
                  L'accompagnant peut lui-même subir du stress en aidant les autres. 
                  Il est essentiel de reconnaître ses limites et de se préserver.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-gray-900 mb-2">Reconnaître</h4>
                  <p className="text-sm text-gray-600">Identifier ses propres signaux de stress</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-gray-900 mb-2">Se préserver</h4>
                  <p className="text-sm text-gray-600">Prendre des pauses, chercher du soutien</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-gray-900 mb-2">Passer le relais</h4>
                  <p className="text-sm text-gray-600">Orienter vers les professionnels</p>
                </div>
              </div>

              <div className="text-center">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger la checklist "Avant-Pendant-Après"
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Bloc 9 - Évaluation finale */}
        <section>
          <Card className="border-indigo-200">
            <CardHeader className="bg-gradient-to-r from-violet-50 to-purple-50">
              <CardTitle className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-violet-600" />
                <span>Évaluation finale</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                {[
                  {
                    id: 1,
                    question: "Le rôle d'un manager est de diagnostiquer un stress post-traumatique.",
                    type: "boolean",
                    correct: "false"
                  },
                  {
                    id: 2, 
                    question: "L'écoute active repose sur la neutralité et le non-jugement.",
                    type: "boolean",
                    correct: "true"
                  },
                  {
                    id: 3,
                    question: "Le relais vers un professionnel est une limite essentielle du rôle d'un collègue.",
                    type: "boolean", 
                    correct: "true"
                  }
                ].map((q) => (
                  <div key={q.id} className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-3">Question {q.id}:</h4>
                    <p className="text-gray-700 mb-4">{q.question}</p>
                    <div className="flex space-x-4">
                      <Button
                        variant={quizAnswers[q.id] === "true" ? "default" : "outline"}
                        onClick={() => handleQuizAnswer(q.id, "true")}
                      >
                        Vrai
                      </Button>
                      <Button
                        variant={quizAnswers[q.id] === "false" ? "default" : "outline"}
                        onClick={() => handleQuizAnswer(q.id, "false")}
                      >
                        Faux
                      </Button>
                    </div>
                    {showQuizResults && quizAnswers[q.id] && (
                      <div className={`mt-3 p-3 rounded text-sm ${
                        quizAnswers[q.id] === q.correct 
                          ? "bg-green-50 text-green-800 border border-green-200" 
                          : "bg-red-50 text-red-800 border border-red-200"
                      }`}>
                        {quizAnswers[q.id] === q.correct ? "✅ Correct !" : "❌ Incorrect"}
                      </div>
                    )}
                  </div>
                ))}

                <div className="text-center space-y-4">
                  {!showQuizResults ? (
                    <Button 
                      onClick={submitQuiz}
                      disabled={Object.keys(quizAnswers).length < 3}
                      className="bg-violet-600 hover:bg-violet-700 text-white"
                    >
                      Valider mes réponses
                    </Button>
                  ) : (
                    <div className="space-y-4">
                      <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
                        <h4 className="font-medium text-violet-900 mb-2">Félicitations !</h4>
                        <p className="text-violet-800">Vous avez terminé le module de formation.</p>
                      </div>
                      <Button className="bg-violet-600 hover:bg-violet-700 text-white">
                        <Download className="h-4 w-4 mr-2" />
                        Télécharger le guide "L'accompagnement en 7 étapes"
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-indigo-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>© 2024 Fiducial - Formation continue | Module 5 : Gestion du stress</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
