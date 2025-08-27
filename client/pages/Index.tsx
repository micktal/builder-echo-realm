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
  const [midQuizAnswers, setMidQuizAnswers] = useState<Record<number, string>>({});
  const [showMidQuizResults, setShowMidQuizResults] = useState(false);

  const handleScenarioChoice = (choice: string) => {
    setCurrentScenario(choice);
  };

  const handleQuizAnswer = (questionId: number, answer: string) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const submitQuiz = () => {
    setShowQuizResults(true);
  };

  const handleMidQuizAnswer = (questionId: number, answer: string) => {
    setMidQuizAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const submitMidQuiz = () => {
    setShowMidQuizResults(true);
  };

  const downloadChecklist = () => {
    const checklistContent = `
CHECKLIST D'ACCOMPAGNEMENT - GESTION DU STRESS
==============================================
Module 5 - Formation Fiducial

📋 AVANT L'ACCOMPAGNEMENT
========================

🎯 PRÉPARATION PERSONNELLE
• ✅ J'ai vérifié mon propre état émotionnel
• ✅ Je me sens disponible et serein(e)
• ✅ J'ai prévu suffisamment de temps (pas de rush)
• ✅ J'ai identifié un lieu calme et confidentiel
• ✅ J'ai mis mon téléphone en silencieux
• ✅ Je me suis rappelé mes limites de rôle (ne pas jouer au thérapeute)

📚 CONNAISSANCES REQUISES
• ✅ Je connais les ressources internes Fiducial disponibles
• ✅ Je maîtrise les principes de l'écoute active
• ✅ Je connais les signaux d'alerte de stress chronique
• ✅ Je sais différencier urgence/non-urgence
• ✅ J'ai en tête les coordonnées des professionnels (médecine du travail, RH)

⚖️ RAPPEL CADRE LÉGAL ET ÉTHIQUE
• ✅ Je respecterai la confidentialité absolue
• ✅ Je ne forcerai pas la personne à parler
• ✅ Je demanderai l'autorisation avant tout signalement
��� ✅ Je ne poserai pas de questions trop personnelles
• ✅ Je respecterai le rythme de la personne

🔍 OBSERVATION PRÉALABLE
• ✅ J'ai repéré des changements de comportement
• ✅ J'ai noté la fréquence et l'intensité des signaux
• ✅ J'ai observé sans juger ni interpréter
• ✅ Je distingue les faits de mes impressions

🌟 PENDANT L'ACCOMPAGNEMENT
===========================

🗣️ AMORCE DU DIALOGUE
• ✅ "J'ai remarqué que tu sembles préoccupé(e), est-ce que ça va ?"
• ✅ Ton bienveillant et non accusateur
• ✅ Cadre posé : "Je suis là pour t'écouter si tu en as besoin"
• ✅ Respect immédiat si la personne refuse de parler

👂 ÉCOUTE ACTIVE - ATTITUDE
• ✅ Position d'écoute (regard, posture ouverte)
• ✅ Bienveillance sans jugement
• ✅ Neutralité (pas de conseil personnel)
• ✅ Patience (je laisse des silences)
• ✅ Empathie sans se substituer à un professionnel

🎯 TECHNIQUES D'ÉCOUTE
• ✅ Questions ouvertes : "Comment te sens-tu ?" "Peux-tu m'en dire plus ?"
• ✅ Reformulations : "Si je comprends bien, tu ressens..."
• ✅ Validation des émotions : "C'est compréhensible de se sentir ainsi"
• ✅ Pas de minimisation : éviter "ce n'est pas grave"
• ✅ Relances douces : "Et ensuite ?" "Comment ça se passe pour toi ?"

🚨 SIGNAUX D'ALERTE À REPÉRER
• ✅ Fatigue chronique, troubles du sommeil
• ✅ Changements d'apparence, négligence inhabituelle
• ✅ Isolement social, évitement des collègues
• ✅ Erreurs inhabituelles, baisse de performance
• ✅ Irritabilité, réactions disproportionnées
• ✅ Expressions de dévalorisation
• ✅ Propos inquiétants ("ça ne sert à rien", "personne ne remarque")

⚠️ SIGNAUX D'ALARME MAJEURS
• 🚨 Propos suicidaires ou de désespoir profond
• 🚨 Désinvestissement total ("plus rien n'a d'importance")
• 🚨 Idées de fuite ("je vais tout plaquer")
• 🚨 Comportements à risque (alcool, substances)
• ➡️ ORIENTATION URGENTE vers professionnels

💬 COMMUNICATION ADAPTÉE
À l'entreprise :
• ✅ "Nous avons des ressources pour t'aider"
�� ✅ "La médecine du travail peut te recevoir"
• ✅ "Les RH sont là pour t'accompagner"
• ✅ Information claire sur les dispositifs
• ✅ Respect de la procédure interne

À la personne :
• ✅ "Tu n'es pas seul(e) dans cette situation"
• ✅ "Il est normal de demander de l'aide"
• ✅ "Tu as fait le bon choix en parlant"
• ✅ Rassurance sans fausse promesse
• ✅ Respect de ses choix et de son rythme

🔄 ORIENTATION ET RESSOURCES
• ✅ Médecine du travail (santé physique et mentale)
• ✅ Service RH (accompagnement social et administratif)
• ✅ Réseau HSE (prévention des risques)
• ✅ Formation continue (gestion du stress)
• ✅ Médecin généraliste (suivi médical)
• ✅ Psychologue (accompagnement spécialisé)
• ✅ Associations spécialisées selon le besoin

📝 APRÈS L'ACCOMPAGNEMENT
=========================

🤝 SUIVI IMMÉDIAT
• ✅ J'ai résumé ce qui a été dit et convenu
• ✅ J'ai clarifié les prochaines étapes
• ✅ J'ai donné les coordonnées des ressources mentionnées
• ✅ J'ai fixé un point de suivi si approprié
• ✅ J'ai remercié la personne pour sa confiance

📋 TRAÇABILITÉ (CONFIDENTIELLE)
• ✅ Note personnelle des éléments factuels principaux
• ✅ Actions convenues et engagements pris
• ✅ Ressources proposées et orientations données
• ✅ Date et contexte de l'échange
• ✅ AUCUNE diffusion sans accord explicite

🔒 CONFIDENTIALITÉ
• ✅ Information gardée strictement confidentielle
• ✅ Aucune discussion avec d'autres collègues
• ✅ Signalement uniquement aux personnes autorisées
• ✅ Autorisation demandée avant tout partage d'information
• ✅ Respect absolu de la vie privée

🧠 AUTO-ÉVALUATION DE L'ACCOMPAGNANT
• ✅ Comment je me sens après cet échange ?
• ✅ Ai-je respecté mes limites de rôle ?
• ✅ Ai-je été bienveillant(e) et professionnel(le) ?
• ✅ Quels points améliorer pour la prochaine fois ?
• ✅ Ai-je besoin de soutien ou de supervision ?

💡 PREVENTION DU STRESS SECONDAIRE
• ✅ Je prends du recul émotionnel
• ✅ Je ne porte pas la responsabilité de résoudre le problème
• ✅ Je reconnais mes propres limites
• ✅ Je cherche du soutien si nécessaire
• ✅ Je prends soin de mon propre bien-être

⏰ SUIVI À PRÉVOIR
• ✅ Point de situation dans [délai approprié]
• ✅ Vérification que les ressources ont été contactées
• ✅ Maintien d'une attitude bienveillante au quotidien
• ✅ Respect du rythme de la personne
• ✅ Disponibilité continue sans insistance

�� PASSATION DU RELAIS SI NÉCESSAIRE
• ✅ Evaluation du besoin de transmission aux professionnels
• ✅ Accord de la personne pour la passation
• ✅ Transmission des éléments essentiels uniquement
• ✅ Maintien du lien de confiance
• ✅ Information de la personne sur la suite du processus

📞 CONTACTS UTILES - RESSOURCES FIDUCIAL
==========================================

INTERNES :
• Médecine du travail : [coordonnées locale]
• Service RH : [coordonnées locale]
• Référent HSE : [coordonnées locale]
• Manager de proximité : [coordonnées]

EXTERNES :
• Médecin traitant de la personne
• Psychologues libéraux locaux
• Associations d'aide locales
• Services sociaux municipaux

⚠️ URGENCES :
• SAMU : 15
• Pompiers : 18
• Police/Gendarmerie : 17
• Numéro d'urgence européen : 112
• SOS Amitié : 09 72 39 40 50

RAPPELS IMPORTANTS :
===================
✅ L'accompagnement n'est pas de la thérapie
✅ La confidentialité est un pilier essentiel
✅ Chaque personne a son rythme et ses choix
✅ L'orientation vers les professionnels est souvent nécessaire
✅ Prendre soin de soi est indispensable pour bien accompagner

Cette checklist est un guide, chaque situation est unique.
Adaptez votre approche tout en respectant ces principes fondamentaux.

© 2024 Fiducial - Module 5 : Gestion du stress et accompagnement
Document confidentiel - Usage interne uniquement
`;

    // Créer le fichier et déclencher le téléchargement
    const blob = new Blob([checklistContent], { type: 'text/plain;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Checklist-Accompagnement-Stress-Fiducial.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const download7StepsGuide = () => {
    const guideContent = `
GUIDE D'ACCOMPAGNEMENT EN 7 ÉTAPES
==================================
Module 5 - Formation Fiducial

🎯 ÉTAPE 1 : OBSERVER
=====================
• Repérer les changements de comportement
• Noter les signaux d'alerte (fatigue, isolement, erreurs)
• Distinguer les faits de vos impressions
• Respecter la confidentialité dès l'observation

📞 ÉTAPE 2 : APPROCHER
======================
• Choisir un moment et lieu appropriés
• Utiliser une phrase bienveillante : "J'ai remarqué que..."
• Ton non accusateur et empathique
• Respecter immédiatement un éventuel refus

👂 ÉTAPE 3 : ÉCOUTER
====================
• Appliquer l'écoute active (bienveillance, neutralité, non-jugement)
• Poser des questions ouvertes
• Reformuler pour montrer la compréhension
• Laisser du temps et des silences

⚠️ ÉTAPE 4 : ÉVALUER
====================
• Identifier le niveau d'urgence
• Repérer les signaux d'alarme majeurs
• Distinguer accompagnement de proximité vs orientation professionnelle
• Ne pas diagnostiquer, rester dans son rôle

🤝 ÉTAPE 5 : ORIENTER
=====================
• Proposer les ressources adaptées :
  - Médecine du travail
  - Service RH
  - Psychologues
• Expliquer les dispositifs disponibles
• Accompagner dans la démarche sans forcer

📋 ÉTAPE 6 : SUIVRE
===================
• Prévoir un point de situation
• Maintenir une attitude bienveillante
• Vérifier que les ressources ont été contactées
• Respecter le rythme de la personne

🛡️ ÉTAPE 7 : SE PROTÉGER
=========================
• Prendre du recul émotionnel
• Reconnaître ses limites
• Chercher du soutien si nécessaire
• Maintenir la confidentialité absolue

RAPPELS ESSENTIELS :
===================
✅ Confidentialité absolue
✅ Pas de diagnostic, pas de thérapie
✅ Respect du choix de la personne
✅ Orientation vers les professionnels
✅ Prendre soin de soi

© 2024 Fiducial - Module 5 : Gestion du stress
`;

    const blob = new Blob([guideContent], { type: 'text/plain;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Guide-7-Etapes-Accompagnement-Fiducial.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
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
      duration: "Variable selon le trauma, généralement 6 �� 12 séances",
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
              Formation complète
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Accompagnement et gestion du stress en entreprise
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
                <span>Objectifs de la formation</span>
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
              <CardTitle className="text-xl">Les approches thérapeutiques validées</CardTitle>
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
            <CardContent className="pt-6 space-y-8">

              {/* Facteurs déclencheurs détaillés */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Facteurs déclencheurs de stress</h3>
                <div className="grid md:grid-cols-2 gap-6">

                  <div className="bg-red-50 border border-red-200 rounded-lg p-5">
                    <h4 className="font-semibold text-red-900 mb-3 flex items-center">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                      Professionnels
                    </h4>
                    <div className="space-y-2 text-sm text-red-800">
                      <div>• <strong>Surcharge de travail :</strong> Plus de 60h/semaine, délais impossibles</div>
                      <div>• <strong>Conflits relationnels :</strong> Harcèlement, tensions équipe</div>
                      <div>• <strong>Insécurité professionnelle :</strong> Restructuration, licenciements</div>
                      <div>• <strong>Manque de reconnaissance :</strong> Efforts non valorisés</div>
                      <div>• <strong>��volutions n��gatives :</strong> Rétrogradation, mutation forcée</div>
                      <div>• <strong>Inadéquation poste :</strong> Compétences vs exigences</div>
                    </div>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
                    <h4 className="font-semibold text-orange-900 mb-3 flex items-center">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                      Personnels
                    </h4>
                    <div className="space-y-2 text-sm text-orange-800">
                      <div>• <strong>Événements familiaux :</strong> Décès, divorce, maladie proche</div>
                      <div>• <strong>Problèmes financiers :</strong> Endettement, perte de revenus</div>
                      <div>• <strong>Santé :</strong> Maladie chronique, accident, diagnostic</div>
                      <div>• <strong>Déménagement :</strong> Changement d'environnement</div>
                      <div>• <strong>Isolement social :</strong> Rupture relationnelle</div>
                      <div>• <strong>Transitions de vie :</strong> Retraite, parentalité</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Signaux d'alerte détaillés avec exemples */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Signaux d'alerte à reconnaître</h3>

                <Accordion type="single" collapsible className="w-full">

                  <AccordionItem value="physiques">
                    <AccordionTrigger className="text-left">
                      <span className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <span className="font-medium">Signaux physiques</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid md:grid-cols-2 gap-4 pt-2">
                        <div className="space-y-3">
                          <div className="bg-white border rounded p-3">
                            <h5 className="font-medium text-gray-900 mb-2">Fatigue anormale</h5>
                            <div className="text-sm text-gray-600 space-y-1">
                              <div>• "Je n'arrive plus à récupérer le week-end"</div>
                              <div>• Endormissement au bureau</div>
                              <div>• Épuisement dès le matin</div>
                            </div>
                          </div>
                          <div className="bg-white border rounded p-3">
                            <h5 className="font-medium text-gray-900 mb-2">Troubles du sommeil</h5>
                            <div className="text-sm text-gray-600 space-y-1">
                              <div>• Réveils à 3h du matin avec pensées négatives</div>
                              <div>• Difficultés d'endormissement (plus d'1h)</div>
                              <div>• Cauchemars récurrents liés au travail</div>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="bg-white border rounded p-3">
                            <h5 className="font-medium text-gray-900 mb-2">Symptômes physiques</h5>
                            <div className="text-sm text-gray-600 space-y-1">
                              <div>• Maux de tête fréquents sans cause médicale</div>
                              <div>• Tensions musculaires (nuque, épaules)</div>
                              <div>• Troubles digestifs persistants</div>
                              <div>• Palpitations, oppression thoracique</div>
                            </div>
                          </div>
                          <div className="bg-white border rounded p-3">
                            <h5 className="font-medium text-gray-900 mb-2">Changements d'apparence</h5>
                            <div className="text-sm text-gray-600 space-y-1">
                              <div>• Perte ou prise de poids rapide</div>
                              <div>• Négligence vestimentaire inhabituelle</div>
                              <div>• Cernes marqués, teint terne</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="comportementaux">
                    <AccordionTrigger className="text-left">
                      <span className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <span className="font-medium">Signaux comportementaux</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid md:grid-cols-2 gap-4 pt-2">
                        <div className="space-y-3">
                          <div className="bg-white border rounded p-3">
                            <h5 className="font-medium text-gray-900 mb-2">Au travail</h5>
                            <div className="text-sm text-gray-600 space-y-1">
                              <div>• <strong>Erreurs inhabituelles :</strong> Marie, comptable rigoureuse, fait 3 erreurs de calcul en une semaine</div>
                              <div>• <strong>Retards fréquents :</strong> Pierre, toujours ponctuel, arrive en retard 4 fois ce mois</div>
                              <div>• <strong>Procrastination :</strong> Sophie reporte constamment ses tâches importantes</div>
                              <div>• <strong>Perfectionnisme excessif :</strong> Luc refait 5 fois la même présentation</div>
                            </div>
                          </div>
                          <div className="bg-white border rounded p-3">
                            <h5 className="font-medium text-gray-900 mb-2">Relations sociales</h5>
                            <div className="text-sm text-gray-600 space-y-1">
                              <div>• <strong>Isolement :</strong> "Je préfère déjeuner seul maintenant"</div>
                              <div>• <strong>Évitement :</strong> Ne participe plus aux réunions informelles</div>
                              <div>• <strong>Irritabilité :</strong> Réactions disproportionnées pour des détails</div>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="bg-white border rounded p-3">
                            <h5 className="font-medium text-gray-900 mb-2">Habitudes personnelles</h5>
                            <div className="text-sm text-gray-600 space-y-1">
                              <div>• <strong>Consommation :</strong> Augmentation alcool, tabac, médicaments</div>
                              <div>• <strong>Alimentation :</strong> Saute des repas ou mange de façon compulsive</div>
                              <div>• <strong>Activités :</strong> Abandon des loisirs habituels</div>
                            </div>
                          </div>
                          <div className="bg-white border rounded p-3">
                            <h5 className="font-medium text-gray-900 mb-2">Performance</h5>
                            <div className="text-sm text-gray-600 space-y-1">
                              <div>• <strong>Concentration :</strong> "Je n'arrive plus à me concentrer plus de 10 minutes"</div>
                              <div>• <strong>Mémoire :</strong> Oublie des informations importantes</div>
                              <div>• <strong>Décisions :</strong> Évite de prendre des décisions simples</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="emotionnels">
                    <AccordionTrigger className="text-left">
                      <span className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                        <span className="font-medium">Signaux émotionnels</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid md:grid-cols-2 gap-4 pt-2">
                        <div className="space-y-3">
                          <div className="bg-white border rounded p-3">
                            <h5 className="font-medium text-gray-900 mb-2">Expressions verbales inquiétantes</h5>
                            <div className="text-sm text-gray-600 space-y-1">
                              <div>• <strong>Dévalorisation :</strong> "Je suis nul(le), je n'y arrive plus"</div>
                              <div>• <strong>Désespoir :</strong> "À quoi bon, rien ne changera"</div>
                              <div>• <strong>Catastrophisme :</strong> "C'est la catastrophe, tout va s'écrouler"</div>
                              <div>• <strong>Épuisement :</strong> "Je n'en peux plus, je suis au bout"</div>
                            </div>
                          </div>
                          <div className="bg-white border rounded p-3">
                            <h5 className="font-medium text-gray-900 mb-2">Changements émotionnels</h5>
                            <div className="text-sm text-gray-600 space-y-1">
                              <div>• <strong>Pleurs fréquents :</strong> Sans raison apparente</div>
                              <div>• <strong>Colères :</strong> Explosions pour des détails mineurs</div>
                              <div>• <strong>Anxiété :</strong> "J'ai tout le temps peur qu'il arrive quelque chose"</div>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="bg-white border rounded p-3">
                            <h5 className="font-medium text-gray-900 mb-2">Signaux d'alarme majeurs</h5>
                            <div className="text-sm text-gray-600 space-y-1 bg-red-50 p-2 rounded">
                              <div><strong>Propos suicidaires :</strong> "La vie ne vaut plus la peine"</div>
                              <div><strong>Désinvestissement total :</strong> "Plus rien n'a d'importance"</div>
                              <div><strong>Idées de fuite :</strong> "Je vais tout plaquer"</div>
                              <div className="text-red-600 font-medium mt-2">Orientation urgente nécessaire</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Cas pratiques détaillés */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Cas pratiques et situations concrètes</h3>

                <div className="space-y-4">
                  {[
                    {
                      id: "cas1",
                      title: "Cas n°1 : Sarah, 35 ans, manager",
                      situation: "Depuis la réorganisation il y a 2 mois, Sarah mange à son bureau, ne sourit plus, fait des erreurs dans ses rapports. Elle dit : 'Je n'y arrive plus, j'ai l'impression de décevoir tout le monde.'",
                      signaux: ["Changement alimentaire", "Modification comportement social", "Erreurs inhabituelles", "Dévalorisation"],
                      action: "Entretien bienveillant pour explorer les difficultés et proposer un soutien RH"
                    },
                    {
                      id: "cas2",
                      title: "Cas n°2 : Marc, 45 ans, technicien",
                      situation: "Apr��s un accident de travail sans gravité, Marc évite certaines tâches, a des sueurs, dit : 'Je n'ai plus confiance, et si ça recommence ?' Il boit plus qu'avant.",
                      signaux: ["Évitement", "Symptômes anxieux", "Perte de confiance", "Consommation d'alcool"],
                      action: "Orientation vers médecine du travail et éventuellement vers un spécialiste trauma"
                    },
                    {
                      id: "cas3",
                      title: "Cas n°3 : Julie, 28 ans, assistante",
                      situation: "Depuis son divorce, Julie arrive en retard, pleure parfois au bureau, dit : 'Je ne sais plus où j'en suis, tout se mélange.' Performance en baisse notable.",
                      signaux: ["Événement personnel", "Pleurs au travail", "Confusion", "Baisse performance"],
                      action: "Soutien empathique, aménagement temporaire, orientation cellule d'aide"
                    }
                  ].map((cas) => (
                    <div key={cas.id} className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                      <h4 className="font-semibold text-gray-900 mb-3">{cas.title}</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium text-gray-700 mb-2">Situation :</h5>
                          <p className="text-sm text-gray-600 mb-3">{cas.situation}</p>
                          <h5 className="font-medium text-gray-700 mb-2">Signaux identifiés :</h5>
                          <div className="flex flex-wrap gap-1">
                            {cas.signaux.map((signal, idx) => (
                              <span key={idx} className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">
                                {signal}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="bg-white rounded p-3">
                          <h5 className="font-medium text-green-700 mb-2">Action recommandée :</h5>
                          <p className="text-sm text-green-800">{cas.action}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phrases d'approche bienveillantes */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-blue-900 mb-4">Exemples de phrases d'approche bienveillantes</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="bg-white rounded p-3">
                      <p className="text-sm text-blue-800 italic">"J'ai remarqué que tu sembles préoccupé ces derniers temps, est-ce que ça va ?"</p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <p className="text-sm text-blue-800 italic">"Tu n'as pas l'air dans ton assiette, veux-tu qu'on en parle ?"</p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <p className="text-sm text-blue-800 italic">"Je sens que quelque chose te tracasse, je suis là si tu as besoin"</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white rounded p-3">
                      <p className="text-sm text-blue-800 italic">"Ce n'est pas ton style habituel, y a-t-il quelque chose qui te préoccupe ?"</p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <p className="text-sm text-blue-800 italic">"J'ai l'impression que tu traverses une période difficile, comment puis-je t'aider ?"</p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <p className="text-sm text-blue-800 italic">"Prendre soin de toi, c'est important. On peut en parler si tu veux"</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scénarios interactifs enrichis */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Scénarios interactifs</h4>
                <div className="space-y-4">
                  <div className="bg-gray-50 border rounded-lg p-4">
                    <p className="text-gray-700 mb-4">
                      <strong>Situation :</strong> Votre collègue Thomas, habituellement jovial, est devenu silencieux.
                      Il évite les pauses café, semble fatigué et a fait 2 erreurs importantes cette semaine.
                      Hier, il a dit : "De toute façon, personne ne remarque ce que je fais."
                    </p>
                    <p className="text-gray-600 mb-4 text-sm">Que faites-vous ?</p>
                    <div className="grid gap-2">
                      {[
                        {
                          id: "ignore",
                          text: "J'attends que ça passe, c'est peut-être temporaire",
                          feedback: "Réponse inadaptée : L'attentisme peut laisser la situation se dégrader. Les signaux sont multiples et préoccupants."
                        },
                        {
                          id: "manager",
                          text: "J'en parle immédiatement à son manager pour signaler ses erreurs",
                          feedback: "Attention : Approche possible mais qui peut créer de la méfiance. Mieux vaut d'abord essayer le contact direct."
                        },
                        {
                          id: "bienveillant",
                          text: "Je l'approche en privé avec bienveillance pour lui proposer d'échanger",
                          feedback: "Correct : Excellente approche ! Vous montrez de l'empathie tout en respectant sa dignité. C'est le premier pas vers l'aide."
                        },
                        {
                          id: "direct",
                          text: "Je lui dis directement qu'il fait des erreurs et qu'il doit se ressaisir",
                          feedback: "Inadapté : Approche contre-productive qui risque d'augmenter son stress et sa dévalorisation."
                        },
                        {
                          id: "collectif",
                          text: "J'en parle avec d'autres collègues pour avoir leur avis",
                          feedback: "Inadapté : Violation de la confidentialité. Cela peut créer des rumeurs et aggraver l'isolement de Thomas."
                        }
                      ].map((choice) => (
                        <div key={choice.id}>
                          <Button
                            variant={currentScenario === choice.id ? "default" : "outline"}
                            className="w-full text-left justify-start text-sm"
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

        {/* Bloc nouveau - Cas spécifiques modernes */}
        <section>
          <Card className="border-purple-200">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50">
              <CardTitle className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-purple-600" />
                <span>Cas spécifiques modernes</span>
              </CardTitle>
              <p className="text-gray-600">
                Adapter l'accompagnement aux nouvelles réalités du travail contemporain et aux défis générationnels.
              </p>
            </CardHeader>
            <CardContent className="pt-6 space-y-8">

              {/* Introduction */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">Pourquoi ces nouveaux défis ?</h3>
                <p className="text-purple-800 leading-relaxed">
                  L'évolution du monde professionnel a créé de nouveaux facteurs de stress spécifiques.
                  Il est essentiel d'adapter notre approche d'accompagnement à ces réalités contemporaines
                  pour une intervention efficace et pertinente.
                </p>
              </div>

              {/* Stress du télétravail */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">1. Stress du télétravail et management à distance</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="font-semibold text-blue-900 mb-4 flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                      Nouveaux facteurs de stress
                    </h4>
                    <div className="space-y-3 text-sm text-blue-800">
                      <div>• <strong>Isolement professionnel :</strong> Manque d'interactions spontanées</div>
                      <div>• <strong>Frontières floues :</strong> Vie privée / vie professionnelle</div>
                      <div>• <strong>Hyperconnexion :</strong> Disponibilit�� permanente attendue</div>
                      <div>• <strong>Difficultés techniques :</strong> Problèmes de connexion, équipement</div>
                      <div>• <strong>Manque de reconnaissance :</strong> Travail moins visible</div>
                      <div>• <strong>Surcharge cognitive :</strong> Multiplication des outils numériques</div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h4 className="font-semibold text-green-900 mb-4 flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      Signaux spécifiques à repérer
                    </h4>
                    <div className="space-y-3 text-sm text-green-800">
                      <div>• <strong>Présence excessive :</strong> "Toujours en ligne" pour prouver qu'il travaille</div>
                      <div>• <strong>Difficultés de communication :</strong> Malentendus fréquents en visio</div>
                      <div>• <strong>Procrastination numérique :</strong> Reports constants des tâches</div>
                      <div>• <strong>Fatigue des écrans :</strong> Maux de tête, troubles visuels</div>
                      <div>• <strong>Désorganisation :</strong> Perte de routine de travail</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-white border border-gray-200 rounded-lg p-5">
                  <h4 className="font-medium text-gray-900 mb-3">Phrases d'approche adaptées :</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="bg-blue-50 p-3 rounded italic text-blue-800">
                        "Comment ça se passe pour toi, ce télétravail ?"
                      </div>
                      <div className="bg-blue-50 p-3 rounded italic text-blue-800">
                        "Tu arrives à déconnecter le soir ?"
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-blue-50 p-3 rounded italic text-blue-800">
                        "As-tu l'impression d'être bien accompagné(e) à distance ?"
                      </div>
                      <div className="bg-blue-50 p-3 rounded italic text-blue-800">
                        "Comment tu gères l'isolement ?"
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Burn-out digital */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">2. Burn-out digital et hyperconnexion</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h4 className="font-semibold text-red-900 mb-4 flex items-center">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                      Manifestations du burn-out digital
                    </h4>
                    <div className="space-y-3 text-sm text-red-800">
                      <div>• <strong>Épuisement des notifications :</strong> Stress permanent des alertes</div>
                      <div>• <strong>FOMO professionnel :</strong> Peur de rater une information importante</div>
                      <div>• <strong>Multitâche forcé :</strong> Jonglage constant entre applications</div>
                      <div>• <strong>Infobésité :</strong> Surcharge d'informations à traiter</div>
                      <div>• <strong>Nomophobie :</strong> Angoisse d'être séparé de son smartphone</div>
                    </div>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <h4 className="font-semibold text-orange-900 mb-4 flex items-center">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                      Signaux comportementaux
                    </h4>
                    <div className="space-y-3 text-sm text-orange-800">
                      <div>• Vérification compulsive des emails/messages</div>
                      <div>• Réponses immédiates attendues et données</div>
                      <div>• Difficultés de concentration sur une tâche unique</div>
                      <div>• Agacement quand la technologie ne fonctionne pas</div>
                      <div>• Travail pendant les temps de pause/congés</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-white border border-gray-200 rounded-lg p-5">
                  <h4 className="font-medium text-gray-900 mb-3">Solutions d'accompagnement :</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>Encourager la définition de plages de déconnexion</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>Proposer des techniques de gestion des notifications</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>Orienter vers des formations sur l'organisation numérique</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stress générationnel */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">3. Stress générationnel et différences intergénérationnelles</h3>

                <div className="grid md:grid-cols-3 gap-6">

                  {/* Génération Z */}
                  <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-5">
                    <h4 className="font-semibold text-cyan-900 mb-3 flex items-center">
                      <div className="w-3 h-3 bg-cyan-500 rounded-full mr-2"></div>
                      Génération Z (nés après 1995)
                    </h4>
                    <div className="space-y-3 text-sm text-cyan-800">
                      <div><strong>Attentes :</strong></div>
                      <div>• Équilibre vie pro/perso immédiat</div>
                      <div>• Sens et impact du travail</div>
                      <div>• Feedback fréquent et instantané</div>
                      <div>• Flexibilité maximale</div>

                      <div className="pt-2"><strong>Sources de stress :</strong></div>
                      <div>• Pression de performance constante</div>
                      <div>• Comparaison sociale (réseaux sociaux)</div>
                      <div>• Incertitude économique</div>
                    </div>
                  </div>

                  {/* Millennials */}
                  <div className="bg-teal-50 border border-teal-200 rounded-lg p-5">
                    <h4 className="font-semibold text-teal-900 mb-3 flex items-center">
                      <div className="w-3 h-3 bg-teal-500 rounded-full mr-2"></div>
                      Millennials (1980-1995)
                    </h4>
                    <div className="space-y-3 text-sm text-teal-800">
                      <div><strong>Attentes :</strong></div>
                      <div>• Évolution de carrière rapide</div>
                      <div>• Reconnaissance et autonomie</div>
                      <div>• Intégration technologique</div>
                      <div>• Développement personnel</div>

                      <div className="pt-2"><strong>Sources de stress :</strong></div>
                      <div>• Conciliation famille/carrière</div>
                      <div>• Pression financière (logement)</div>
                      <div>• Syndrome de l'imposteur</div>
                    </div>
                  </div>

                  {/* Baby-boomers */}
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
                    <h4 className="font-semibold text-amber-900 mb-3 flex items-center">
                      <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
                      Baby-boomers (1946-1964)
                    </h4>
                    <div className="space-y-3 text-sm text-amber-800">
                      <div><strong>Attentes :</strong></div>
                      <div>• Stabilité et sécurité</div>
                      <div>• Respect de l'expérience</div>
                      <div>• Communication directe</div>
                      <div>• Transmission du savoir</div>

                      <div className="pt-2"><strong>Sources de stress :</strong></div>
                      <div>• Adaptation technologique</div>
                      <div>• Changements organisationnels</div>
                      <div>• Préparation de la retraite</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-white border border-gray-200 rounded-lg p-5">
                  <h4 className="font-medium text-gray-900 mb-4">Stratégies d'accompagnement intergénérationnel :</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-green-700 mb-2">Approches adaptées :</h5>
                      <div className="space-y-2 text-sm text-green-800">
                        <div>• <strong>Gen Z :</strong> Communication digitale, objectifs court terme</div>
                        <div>• <strong>Millennials :</strong> Coaching personnalisé, défis stimulants</div>
                        <div>• <strong>Boomers :</strong> Dialogue en face-à-face, valorisation de l'expertise</div>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium text-blue-700 mb-2">Points de vigilance :</h5>
                      <div className="space-y-2 text-sm text-blue-800">
                        <div>• Éviter les stéréotypes générationnels</div>
                        <div>• Adapter le rythme de communication</div>
                        <div>• Respecter les préférences individuelles</div>
                        <div>• Favoriser l'entraide intergénérationnelle</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">Points clés à retenir</h3>
                <div className="space-y-2 text-purple-800">
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Les nouveaux modes de travail créent des stress spécifiques nécessitant une adaptation de l'accompagnement</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Chaque génération a ses propres codes et sources de stress qu'il faut comprendre</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>L'empathie et l'adaptation sont essentielles pour un accompagnement efficace</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Les ressources d'aide doivent évoluer avec ces nouvelles réalités</span>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>
        </section>

        {/* Bloc nouveau - Cadre légal et obligations de l'entreprise */}
        <section>
          <Card className="border-indigo-200">
            <CardHeader className="bg-gradient-to-r from-slate-50 to-gray-50">
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-slate-600" />
                <span>Cadre légal et obligations de l'entreprise</span>
              </CardTitle>
              <p className="text-gray-600">
                En France, la gestion du stress et des risques psychosociaux (RPS) ne relève pas seulement d'un choix organisationnel.
                Elle s'inscrit dans un cadre légal précis qui engage la responsabilité de l'employeur.
              </p>
            </CardHeader>
            <CardContent className="pt-6 space-y-8">

              {/* Bloc 2 - Les obligations clés */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Les obligations clés</h3>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-gray-800">
                          <strong>Obligation générale de sécurité</strong> (Code du travail, art. L4121-1) :
                          l'employeur doit protéger la santé physique et mentale des salariés.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-gray-800">
                          <strong>DUERP</strong> (Document Unique d'Évaluation des Risques Professionnels) :
                          doit intégrer le stress et les RPS au même titre que les autres risques.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-gray-800 mb-2"><strong>Conséquences en cas de manquement :</strong></p>
                        <div className="ml-4 space-y-2 text-sm text-gray-700">
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                            <span>Accident du travail reconnu.</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                            <span>Maladie professionnelle déclarée.</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                            <span>Responsabilité civile et pénale de l'entreprise.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bloc 3 - Schéma de responsabilité */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Schéma de responsabilité</h3>
                <p className="text-gray-600 mb-6">
                  La prévention des RPS repose sur une chaîne claire de responsabilités.
                </p>

                <div className="bg-white border border-gray-200 rounded-lg p-8">
                  <div className="flex flex-col items-center space-y-6">

                    {/* Employeur */}
                    <div className="text-center">
                      <div className="bg-red-100 border-2 border-red-300 rounded-lg p-6 max-w-sm">
                        <div className="flex items-center justify-center mb-3">
                          <Users className="h-8 w-8 text-red-600" />
                        </div>
                        <h4 className="font-semibold text-red-900 mb-2">Employeur</h4>
                        <p className="text-sm text-red-800">Obligation légale de sécurité</p>
                      </div>
                    </div>

                    {/* Flèche vers le bas */}
                    <div className="flex flex-col items-center">
                      <div className="w-0.5 h-8 bg-gray-400"></div>
                      <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gray-400"></div>
                    </div>

                    {/* Managers */}
                    <div className="text-center">
                      <div className="bg-orange-100 border-2 border-orange-300 rounded-lg p-6 max-w-sm">
                        <div className="flex items-center justify-center mb-3">
                          <Users className="h-8 w-8 text-orange-600" />
                        </div>
                        <h4 className="font-semibold text-orange-900 mb-2">Managers</h4>
                        <p className="text-sm text-orange-800">Mettre en œuvre les mesures, repérer et alerter</p>
                      </div>
                    </div>

                    {/* Flèche vers le bas */}
                    <div className="flex flex-col items-center">
                      <div className="w-0.5 h-8 bg-gray-400"></div>
                      <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gray-400"></div>
                    </div>

                    {/* Collaborateurs */}
                    <div className="text-center">
                      <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-6 max-w-sm">
                        <div className="flex items-center justify-center mb-3">
                          <Users className="h-8 w-8 text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-blue-900 mb-2">Collaborateurs</h4>
                        <p className="text-sm text-blue-800">Appliquer les règles, signaler les situations à risque</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Bloc 4 - Conclusion pédagogique */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Conclusion</h3>
                <p className="text-amber-800 leading-relaxed">
                  L'obligation de prévention du stress et des RPS ne peut être déléguée ni ignorée.
                  Chaque acteur de l'entreprise a un rôle, mais c'est l'employeur qui porte la responsabilité finale devant la loi.
                </p>
              </div>

            </CardContent>
          </Card>
        </section>

        {/* Quiz d'évaluation intermédiaire */}
        <section>
          <Card className="border-violet-200">
            <CardHeader className="bg-gradient-to-r from-violet-50 to-purple-50">
              <CardTitle className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-violet-600" />
                <span>Évaluation des acquis</span>
              </CardTitle>
              <p className="text-gray-600">
                Évaluez vos connaissances sur les contenus vus jusqu'à présent : approches thérapeutiques,
                repérage et orientation, cadre légal.
              </p>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-8">

                {/* Questions à choix multiples */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Questions à choix multiples</h3>

                  {/* Question 1 */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                    <h4 className="font-medium text-gray-900 mb-4">Question 1 : Laquelle de ces approches utilise des mouvements oculaires pour traiter les traumatismes ?</h4>
                    <div className="space-y-2">
                      {[
                        { id: "tcc", text: "Thérapies cognitivo-comportementales (TCC)", correct: false },
                        { id: "emdr", text: "EMDR (Eye Movement Desensitization and Reprocessing)", correct: true },
                        { id: "mindfulness", text: "Pleine conscience (Mindfulness)", correct: false },
                        { id: "medicament", text: "Soutien médicamenteux", correct: false }
                      ].map((option) => (
                        <Button
                          key={option.id}
                          variant={midQuizAnswers[1] === option.id ? "default" : "outline"}
                          className="w-full text-left justify-start"
                          onClick={() => handleMidQuizAnswer(1, option.id)}
                        >
                          {option.text}
                        </Button>
                      ))}
                    </div>
                    {showMidQuizResults && midQuizAnswers[1] && (
                      <div className={`mt-4 p-3 rounded text-sm ${
                        midQuizAnswers[1] === "emdr"
                          ? "bg-green-50 text-green-800 border border-green-200"
                          : "bg-red-50 text-red-800 border border-red-200"
                      }`}>
                        {midQuizAnswers[1] === "emdr" ? "Correct ! L'EMDR utilise effectivement les mouvements oculaires." : "Incorrect. La bonne réponse est EMDR."}
                      </div>
                    )}
                  </div>

                  {/* Question 2 */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                    <h4 className="font-medium text-gray-900 mb-4">Question 2 : Selon le Code du travail (art. L4121-1), l'employeur doit :</h4>
                    <div className="space-y-2">
                      {[
                        { id: "physique", text: "Protéger uniquement la santé physique des salariés", correct: false },
                        { id: "mentale", text: "Protéger uniquement la santé mentale des salari��s", correct: false },
                        { id: "physique_mentale", text: "Protéger la santé physique et mentale des salariés", correct: true },
                        { id: "aucune", text: "Aucune obligation spécifique", correct: false }
                      ].map((option) => (
                        <Button
                          key={option.id}
                          variant={midQuizAnswers[2] === option.id ? "default" : "outline"}
                          className="w-full text-left justify-start"
                          onClick={() => handleMidQuizAnswer(2, option.id)}
                        >
                          {option.text}
                        </Button>
                      ))}
                    </div>
                    {showMidQuizResults && midQuizAnswers[2] && (
                      <div className={`mt-4 p-3 rounded text-sm ${
                        midQuizAnswers[2] === "physique_mentale"
                          ? "bg-green-50 text-green-800 border border-green-200"
                          : "bg-red-50 text-red-800 border border-red-200"
                      }`}>
                        {midQuizAnswers[2] === "physique_mentale" ? "Correct ! L'obligation générale couvre les deux aspects." : "Incorrect. L'employeur doit protéger la santé physique ET mentale."}
                      </div>
                    )}
                  </div>

                  {/* Question 3 */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                    <h4 className="font-medium text-gray-900 mb-4">Question 3 : Parmi ces signaux, lesquels sont des indicateurs d'alerte de stress chronique ?</h4>
                    <div className="space-y-2">
                      {[
                        { id: "fatigue", text: "Fatigue chronique et troubles du sommeil", correct: true },
                        { id: "energie", text: "Regain d'énergie et optimisme", correct: false },
                        { id: "social", text: "Augmentation des interactions sociales", correct: false },
                        { id: "performance", text: "Amélioration des performances", correct: false }
                      ].map((option) => (
                        <Button
                          key={option.id}
                          variant={midQuizAnswers[3] === option.id ? "default" : "outline"}
                          className="w-full text-left justify-start"
                          onClick={() => handleMidQuizAnswer(3, option.id)}
                        >
                          {option.text}
                        </Button>
                      ))}
                    </div>
                    {showMidQuizResults && midQuizAnswers[3] && (
                      <div className={`mt-4 p-3 rounded text-sm ${
                        midQuizAnswers[3] === "fatigue"
                          ? "bg-green-50 text-green-800 border border-green-200"
                          : "bg-red-50 text-red-800 border border-red-200"
                      }`}>
                        {midQuizAnswers[3] === "fatigue" ? "Correct ! Ce sont des signaux d'alerte classiques." : "Incorrect. La fatigue chronique et les troubles du sommeil sont des indicateurs clés."}
                      </div>
                    )}
                  </div>
                </div>

                {/* Questions Vrai/Faux */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Questions Vrai/Faux</h3>

                  {/* Question 4 */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
                    <h4 className="font-medium text-gray-900 mb-4">Question 4 : Le MBSR (Mindfulness-Based Stress Reduction) est un programme de 8 semaines.</h4>
                    <div className="flex space-x-4">
                      <Button
                        variant={midQuizAnswers[4] === "true" ? "default" : "outline"}
                        onClick={() => handleMidQuizAnswer(4, "true")}
                      >
                        Vrai
                      </Button>
                      <Button
                        variant={midQuizAnswers[4] === "false" ? "default" : "outline"}
                        onClick={() => handleMidQuizAnswer(4, "false")}
                      >
                        Faux
                      </Button>
                    </div>
                    {showMidQuizResults && midQuizAnswers[4] && (
                      <div className={`mt-4 p-3 rounded text-sm ${
                        midQuizAnswers[4] === "true"
                          ? "bg-green-50 text-green-800 border border-green-200"
                          : "bg-red-50 text-red-800 border border-red-200"
                      }`}>
                        {midQuizAnswers[4] === "true" ? "Correct ! Le MBSR est effectivement un programme de 8 semaines." : "Incorrect. Le MBSR est bien un programme de 8 semaines."}
                      </div>
                    )}
                  </div>

                  {/* Question 5 */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
                    <h4 className="font-medium text-gray-900 mb-4">Question 5 : Le DUERP doit intégrer les risques psychosociaux au même titre que les autres risques.</h4>
                    <div className="flex space-x-4">
                      <Button
                        variant={midQuizAnswers[5] === "true" ? "default" : "outline"}
                        onClick={() => handleMidQuizAnswer(5, "true")}
                      >
                        Vrai
                      </Button>
                      <Button
                        variant={midQuizAnswers[5] === "false" ? "default" : "outline"}
                        onClick={() => handleMidQuizAnswer(5, "false")}
                      >
                        Faux
                      </Button>
                    </div>
                    {showMidQuizResults && midQuizAnswers[5] && (
                      <div className={`mt-4 p-3 rounded text-sm ${
                        midQuizAnswers[5] === "true"
                          ? "bg-green-50 text-green-800 border border-green-200"
                          : "bg-red-50 text-red-800 border border-red-200"
                      }`}>
                        {midQuizAnswers[5] === "true" ? "Correct ! C'est une obligation légale." : "Incorrect. Le DUERP doit effectivement intégrer les RPS."}
                      </div>
                    )}
                  </div>
                </div>

                {/* Cas pratique */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Cas pratique</h3>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                    <h4 className="font-medium text-blue-900 mb-4">Question 6 : Situation</h4>
                    <p className="text-blue-800 mb-4">
                      Marie, responsable comptable, arrive systématiquement en retard depuis 3 semaines.
                      Elle qui était toujours impeccable néglige son apparence. Hier, elle a dit :
                      "De toute façon, personne ne fait attention à mon travail, je pourrais disparaître, ça ne changerait rien."
                    </p>
                    <h5 className="font-medium text-blue-900 mb-3">Quelle est la meilleure approche ?</h5>
                    <div className="space-y-2">
                      {[
                        { id: "ignorer", text: "Ignorer ces comportements, elle va se reprendre", correct: false },
                        { id: "recadrer", text: "La recadrer immédiatement sur ses retards", correct: false },
                        { id: "bienveillant", text: "L'approcher en privé avec bienveillance pour proposer d'échanger", correct: true },
                        { id: "collegues", text: "En parler avec d'autres collègues pour avoir leur avis", correct: false }
                      ].map((option) => (
                        <Button
                          key={option.id}
                          variant={midQuizAnswers[6] === option.id ? "default" : "outline"}
                          className="w-full text-left justify-start text-sm"
                          onClick={() => handleMidQuizAnswer(6, option.id)}
                        >
                          {option.text}
                        </Button>
                      ))}
                    </div>
                    {showMidQuizResults && midQuizAnswers[6] && (
                      <div className={`mt-4 p-3 rounded text-sm ${
                        midQuizAnswers[6] === "bienveillant"
                          ? "bg-green-50 text-green-800 border border-green-200"
                          : "bg-red-50 text-red-800 border border-red-200"
                      }`}>
                        {midQuizAnswers[6] === "bienveillant" ? "Correct ! L'approche bienveillante est la plus appropriée face aux signaux multiples." : "Incorrect. Face à ces signaux multiples, une approche bienveillante est nécessaire."}
                      </div>
                    )}
                  </div>
                </div>

                {/* Question ouverte */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Question de réflexion</h3>

                  <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                    <h4 className="font-medium text-gray-900 mb-4">Question 7 : Citez trois facteurs déclencheurs de stress professionnel</h4>
                    <div className="bg-gray-50 border border-gray-200 rounded p-4">
                      <p className="text-sm text-gray-700 mb-2">Exemples de réponses attendues :</p>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div>• Surcharge de travail (plus de 60h/semaine)</div>
                        <div>• Conflits relationnels (harcèlement, tensions)</div>
                        <div>• Insécurité professionnelle (restructuration, licenciements)</div>
                        <div>• Manque de reconnaissance</div>
                        <div>• Inadéquation entre compétences et exigences du poste</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Résultats et validation */}
                <div className="border-t pt-6">
                  {!showMidQuizResults ? (
                    <div className="text-center">
                      <Button
                        onClick={submitMidQuiz}
                        disabled={Object.keys(midQuizAnswers).length < 6}
                        className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3"
                      >
                        Valider mes réponses ({Object.keys(midQuizAnswers).length}/6)
                      </Button>
                      <p className="text-sm text-gray-600 mt-2">
                        Répondez à toutes les questions pour voir les résultats
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="bg-violet-50 border border-violet-200 rounded-lg p-6 text-center">
                        <h4 className="font-semibold text-violet-900 mb-3">Résultats du quiz</h4>
                        {(() => {
                          const correctAnswers = [
                            midQuizAnswers[1] === "emdr",
                            midQuizAnswers[2] === "physique_mentale",
                            midQuizAnswers[3] === "fatigue",
                            midQuizAnswers[4] === "true",
                            midQuizAnswers[5] === "true",
                            midQuizAnswers[6] === "bienveillant"
                          ].filter(Boolean).length;
                          const score = Math.round((correctAnswers / 6) * 100);

                          return (
                            <div>
                              <div className="text-3xl font-bold text-violet-800 mb-2">{score}%</div>
                              <p className="text-violet-700 mb-4">
                                {correctAnswers}/6 réponses correctes
                              </p>
                              <div className={`p-4 rounded-lg ${
                                score >= 80 ? "bg-green-100 text-green-800" :
                                score >= 60 ? "bg-orange-100 text-orange-800" :
                                "bg-red-100 text-red-800"
                              }`}>
                                {score >= 80 ? "Excellent ! Vous maîtrisez bien les concepts abordés." :
                                 score >= 60 ? "Bien ! Quelques points à revoir mais vous êtes sur la bonne voie." :
                                 "Il serait bénéfique de revoir les contenus avant de continuer."}
                              </div>
                            </div>
                          );
                        })()}
                      </div>

                      <div className="text-center">
                        <p className="text-gray-600 mb-4">
                          Vous pouvez maintenant continuer vers les séquences suivantes.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </CardContent>
          </Card>
        </section>

        {/* Bloc - Éthique et confidentialité */}
        <section>
          <Card className="border-teal-200">
            <CardHeader className="bg-gradient-to-r from-teal-50 to-emerald-50">
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-teal-600" />
                <span>Éthique et confidentialité</span>
              </CardTitle>
              <p className="text-gray-600">
                Savoir accompagner sans violer la vie privée : respecter les limites et maintenir la confidentialité.
              </p>
            </CardHeader>
            <CardContent className="pt-6 space-y-8">

              {/* Principes clés */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Principes éthiques fondamentaux</h3>
                <div className="grid md:grid-cols-3 gap-6">

                  <div className="bg-teal-50 border border-teal-200 rounded-lg p-5">
                    <div className="flex items-center mb-3">
                      <div className="w-3 h-3 bg-teal-500 rounded-full mr-2"></div>
                      <h4 className="font-semibold text-teal-900">Non-contrainte</h4>
                    </div>
                    <p className="text-teal-800 text-sm">
                      Ne jamais forcer une personne à parler. Le dialogue doit rester volontaire et respectueux.
                    </p>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5">
                    <div className="flex items-center mb-3">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                      <h4 className="font-semibold text-emerald-900">Confidentialité</h4>
                    </div>
                    <p className="text-emerald-800 text-sm">
                      Pas de diffusion hors des circuits officiels. Les informations reçues sont protégées.
                    </p>
                  </div>

                  <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-5">
                    <div className="flex items-center mb-3">
                      <div className="w-3 h-3 bg-cyan-500 rounded-full mr-2"></div>
                      <h4 className="font-semibold text-cyan-900">Juste mesure</h4>
                    </div>
                    <p className="text-cyan-800 text-sm">
                      Trouver l'équilibre entre vigilance bienveillante et intrusion dans la vie privée.
                    </p>
                  </div>
                </div>
              </div>

              {/* Études de cas comparatives */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Études de cas : Manager insistant vs Manager respectueux</h3>

                {/* Cas 1 */}
                <div className="mb-8">
                  <h4 className="font-medium text-gray-900 mb-4">Situation : Paul semble stressé et s'isole depuis quelques jours</h4>

                  <div className="grid md:grid-cols-2 gap-6">

                    {/* Manager trop insistant */}
                    <div className="bg-red-50 border border-red-200 rounded-lg p-5">
                      <div className="flex items-center mb-3">
                        <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                        <h5 className="font-semibold text-red-900">Approche inadaptée</h5>
                      </div>
                      <div className="space-y-3 text-sm text-red-800">
                        <div className="bg-white p-3 rounded border">
                          <p className="font-medium mb-1">Actions du manager :</p>
                          <div className="space-y-1">
                            <div>• Convoque Paul dans son bureau</div>
                            <div>• "Il faut qu'on parle, je vois que ça ne va pas"</div>
                            <div>• Insiste quand Paul dit que tout va bien</div>
                            <div>• "Tu ne sortiras pas d'ici sans m'avoir dit ce qui ne va pas"</div>
                            <div>• En parle avec d'autres collègues</div>
                          </div>
                        </div>
                        <div className="bg-red-100 p-3 rounded">
                          <p className="font-medium mb-1">Conséquences :</p>
                          <div>• Paul se sent agressé et se ferme</div>
                          <div>• Violation de la confidentialité</div>
                          <div>• Perte de confiance</div>
                          <div>• Stress supplémentaire</div>
                        </div>
                      </div>
                    </div>

                    {/* Manager respectueux */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-5">
                      <div className="flex items-center mb-3">
                        <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                        <h5 className="font-semibold text-green-900">Approche adaptée</h5>
                      </div>
                      <div className="space-y-3 text-sm text-green-800">
                        <div className="bg-white p-3 rounded border">
                          <p className="font-medium mb-1">Actions du manager :</p>
                          <div className="space-y-1">
                            <div>• Crée un moment informel (pause café)</div>
                            <div>• "Paul, j'ai remarqué que tu sembles préoccupé"</div>
                            <div>• "Je suis là si tu as besoin d'en parler"</div>
                            <div>• Respecte son refus initial</div>
                            <div>• Garde les informations confidentielles</div>
                            <div>• Propose des ressources sans forcer</div>
                          </div>
                        </div>
                        <div className="bg-green-100 p-3 rounded">
                          <p className="font-medium mb-1">Résultats :</p>
                          <div>• Paul se sent respecté</div>
                          <div>• Maintien de la confiance</div>
                          <div>• Ouverture progressive possible</div>
                          <div>• Cadre sécurisant</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cas 2 */}
                <div className="mb-8">
                  <h4 className="font-medium text-gray-900 mb-4">Situation : Sophie confie avoir des difficultés personnelles</h4>

                  <div className="grid md:grid-cols-2 gap-6">

                    {/* Manager trop insistant */}
                    <div className="bg-red-50 border border-red-200 rounded-lg p-5">
                      <div className="flex items-center mb-3">
                        <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                        <h5 className="font-semibold text-red-900">Violation de la confidentialité</h5>
                      </div>
                      <div className="space-y-3 text-sm text-red-800">
                        <div className="bg-white p-3 rounded border">
                          <p className="font-medium mb-1">Actions problématiques :</p>
                          <div className="space-y-1">
                            <div>• Pose des questions trop personnelles</div>
                            <div>• "Raconte-moi tout en détail"</div>
                            <div>• En parle aux RH sans autorisation</div>
                            <div>• Évoque la situation en réunion équipe</div>
                            <div>• Donne des conseils personnels non sollicités</div>
                          </div>
                        </div>
                        <div className="bg-red-100 p-3 rounded">
                          <p className="font-medium mb-1">Violations :</p>
                          <div>• Curiosité déplacée</div>
                          <div>• Rupture de confidentialité</div>
                          <div>• Dépassement de rôle</div>
                          <div>• Atteinte à la vie privée</div>
                        </div>
                      </div>
                    </div>

                    {/* Manager respectueux */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-5">
                      <div className="flex items-center mb-3">
                        <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                        <h5 className="font-semibold text-green-900">Respect de l'éthique</h5>
                      </div>
                      <div className="space-y-3 text-sm text-green-800">
                        <div className="bg-white p-3 rounded border">
                          <p className="font-medium mb-1">Actions respectueuses :</p>
                          <div className="space-y-1">
                            <div>• Écoute sans poser de questions indiscrètes</div>
                            <div>• "Merci de ta confiance"</div>
                            <div>• Garde l'information confidentielle</div>
                            <div>• Propose des ressources appropriées</div>
                            <div>• Demande l'autorisation avant tout signalement</div>
                            <div>• Respecte les limites de Sophie</div>
                          </div>
                        </div>
                        <div className="bg-green-100 p-3 rounded">
                          <p className="font-medium mb-1">Bénéfices :</p>
                          <div>• Confiance préservée</div>
                          <div>• Accompagnement adapté</div>
                          <div>• Respect de la dignité</div>
                          <div>• Cadre professionnel maintenu</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bonnes pratiques résum��es */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Bonnes pratiques à retenir</h3>
                <div className="grid md:grid-cols-2 gap-6">

                  <div>
                    <h4 className="font-medium text-green-700 mb-3">À faire :</h4>
                    <div className="space-y-2 text-sm text-green-800">
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Créer un cadre bienveillant et non jugeant</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Respecter le rythme et les choix de la personne</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Maintenir la confidentialité absolue</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Orienter vers les ressources appropriées</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Demander l'autorisation avant tout signalement</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-red-700 mb-3">À éviter :</h4>
                    <div className="space-y-2 text-sm text-red-800">
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Forcer le dialogue ou insister lourdement</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Poser des questions trop personnelles</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Divulguer les informations reçues</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Jouer le rôle du thérapeute</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Agir sans l'accord de la personne concernée</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message clé */}
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 text-center">
                <h4 className="font-semibold text-teal-900 mb-3">Message clé</h4>
                <p className="text-teal-800 text-lg italic">
                  "L'accompagnement éthique repose sur le respect, la confidentialit�� et la non-intrusion.
                  C'est en respectant ces principes que nous créons un environnement de confiance propice à l'aide."
                </p>
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
                <h4 className="font-medium text-yellow-900 mb-2">Limite essentielle :</h4>
                <p className="text-yellow-800">
                  Ne jamais se substituer aux professionnels de santé. Le rôle de chacun est d'accompagner, 
                  pas de diagnostiquer ou soigner.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Bloc 6 - Séquences 4 et 5: Ressources et Communication */}
        <section>
          <Card className="border-indigo-200">
            <CardHeader className="bg-gradient-to-r from-green-50 to-teal-50">
              <CardTitle className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-green-600" />
                <span>Ressources et techniques de communication</span>
              </CardTitle>
              <p className="text-gray-600">
                Identifier les ressources disponibles et maîtriser les techniques de communication pour un accompagnement efficace.
              </p>
            </CardHeader>
            <CardContent className="pt-6 space-y-8">

              {/* Partie Ressources */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Ressources disponibles</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-blue-900 mb-4 flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span>Ressources internes Fiducial</span>
                    </h4>
                    <div className="space-y-3">
                      {[
                        "Médecine du travail",
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
                    <h4 className="text-lg font-semibold text-green-900 mb-4 flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>Ressources externes</span>
                    </h4>
                    <div className="space-y-3">
                      {[
                        "Médecins généralistes",
                        "Psychologues",
                        "Associations spécialisées"
                      ].map((resource, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-green-800">{resource}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Partie Communication */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Communication et relation d'aide</h3>

                <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mb-6">
                  <h4 className="font-medium text-teal-900 mb-4">Principes de l'écoute active</h4>
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
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h4 className="font-medium text-gray-900 mb-3">Communication à l'entreprise</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Informer sur les dispositifs disponibles</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Orienter vers les ressources appropriées</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Maintenir la confidentialité</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h4 className="font-medium text-gray-900 mb-3">Communication à la personne</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Rassurer et apporter du soutien</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Accompagner sans porter de jugement</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Respecter son rythme et ses choix</span>
                      </li>
                    </ul>
                  </div>
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
                <span>Se protéger et transmettre efficacement</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h4 className="font-medium text-amber-900 mb-2">Attention au stress secondaire</h4>
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
                <Button
                  onClick={downloadChecklist}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger la checklist "Avant-Pendant-Après"
                </Button>
                <p className="text-sm text-gray-600 mt-2">
                  Guide complet avec toutes les étapes d'accompagnement
                </p>
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
                <span>Validation des compétences</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                {[
                  {
                    id: 1,
                    question: "Le burn-out digital est uniquement lié à l'utilisation excessive des réseaux sociaux.",
                    type: "boolean",
                    correct: "false"
                  },
                  {
                    id: 2,
                    question: "L'accompagnement doit être adapté selon les générations (Z, Millennials, Baby-boomers).",
                    type: "boolean",
                    correct: "true"
                  },
                  {
                    id: 3,
                    question: "La confidentialité absolue est un principe fondamental de l'accompagnement.",
                    type: "boolean",
                    correct: "true"
                  },
                  {
                    id: 4,
                    question: "L'EMDR est recommandée par l'OMS pour le traitement du stress post-traumatique.",
                    type: "boolean",
                    correct: "true"
                  },
                  {
                    id: 5,
                    question: "L'employeur a une obligation légale de protéger la santé mentale des salariés.",
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
                        {quizAnswers[q.id] === q.correct ? "Correct !" : "Incorrect"}
                      </div>
                    )}
                  </div>
                ))}

                <div className="text-center space-y-4">
                  {!showQuizResults ? (
                    <Button 
                      onClick={submitQuiz}
                      disabled={Object.keys(quizAnswers).length < 5}
                      className="bg-violet-600 hover:bg-violet-700 text-white"
                    >
                      Valider mes réponses
                    </Button>
                  ) : (
                    <div className="space-y-4">
                      <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
                        <h4 className="font-medium text-violet-900 mb-2">Compétences validées !</h4>
                        <p className="text-violet-800">Vous maîtrisez maintenant l'accompagnement et la gestion du stress en entreprise.</p>
                      </div>
                      <div className="flex flex-col space-y-3">
                        <Button
                          onClick={downloadChecklist}
                          className="bg-violet-600 hover:bg-violet-700 text-white"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Télécharger la checklist complète "Avant-Pendant-Après"
                        </Button>
                        <Button
                          onClick={download7StepsGuide}
                          variant="outline"
                          className="border-violet-300 text-violet-700 hover:bg-violet-50"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Télécharger le guide "L'accompagnement en 7 étapes"
                        </Button>
                      </div>
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
