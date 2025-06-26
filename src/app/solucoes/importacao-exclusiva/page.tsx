import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { AlertTriangle, CheckCircle, Target, TrendingUp, Shield, Globe } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ImportacaoExclusiva = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    telefone: '',
    mensagem: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lead capturado:', formData);
    toast({
      title: 'Diagnóstico Solicitado!',
      description: 'Nossa equipe entrará em contato em até 24 horas.'
    });
    // Reset form
    setFormData({ nome: '', email: '', empresa: '', telefone: '', mensagem: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Domine Sua Rota de Importação
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Pare de importar junto com seus concorrentes. Comece a importar para vencê-los.
              Transforme sua PME de dependente para dominante com inteligência e exclusividade.
            </p>
          </div>

          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-2xl p-8 mb-12">
            <AlertTriangle className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              Você compartilha sua importação... ou domina sua rota?
            </h2>
            <p className="text-lg text-gray-300">
              Na OLV Internacional, ajudamos PMEs a sair da dependência de operadores logísticos
              compartilhados para criar operações exclusivas e blindadas.
            </p>
          </div>

          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-lg rounded-full"
            onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            🚀 Quero Meu Diagnóstico Gratuito
          </Button>
        </div>
      </section>

      {/* Case Real Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400">
            Caso Real: A Virada de Jogo de uma PME
          </h2>

          <Card className="bg-slate-900/80 border-yellow-500/20">
            <CardContent className="p-8">
              <blockquote className="text-lg md:text-xl italic text-gray-300 leading-relaxed mb-6">
                "Toda vez que meu contêiner chegava, os chineses já tinham espalhado o produto.
                Me copiaram, me queimaram, me derrubaram. Eu virei o jogo."
              </blockquote>

              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-green-400 mb-3">A Solução Estratégica:</h3>
                <blockquote className="text-lg text-gray-300 italic">
                  "Montei minha própria estrutura, cortei os intermediários e hoje sou eu quem desenvolve
                  diretamente na origem. Agora vendo para atacadistas e conquistei controle completo da cadeia."
                </blockquote>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <Shield className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                  <h4 className="font-bold text-yellow-400">Proteção Total</h4>
                  <p className="text-gray-400">Operação blindada na origem</p>
                </div>
                <div className="text-center">
                  <Target className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                  <h4 className="font-bold text-yellow-400">Exclusividade</h4>
                  <p className="text-gray-400">Produtos que só ele tem</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                  <h4 className="font-bold text-yellow-400">Controle de Preços</h4>
                  <p className="text-gray-400">Margem protegida e lucrativa</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Problemas da Importação Compartilhada */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-400">
            Por Que PMEs Perdem Mercado na Importação Compartilhada?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-red-900/20 border-red-500/30">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6" />
                  Vazamento de Inteligência
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li>• Seu produto é conhecido antes mesmo de chegar</li>
                  <li>• Fornecedor chinês replica e vende para outros</li>
                  <li>• Você vira cobaia de mercado para os outros ganharem</li>
                  <li>• Sua operação vazada compromete sua exclusividade</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-red-900/20 border-red-500/30">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 rotate-180" />
                  Destruição de Margem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li>• Sua margem é destruída pela guerra de preços</li>
                  <li>• "Cadeia dividida" facilita guerra de preços</li>
                  <li>• Contribui para rivalidade direta de players maiores</li>
                  <li>• Importar sem exclusividade é investir para o concorrente crescer</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solução OLV */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400">
            A Solução da OLV Internacional
          </h2>

          <div className="text-center mb-12">
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Criamos com você uma rota protegida, com controle, blindagem e autonomia.
              Oferecemos apoio tático-operacional, planejamento de margem e visão de longo prazo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card items */}
            {[{
              icon: Globe,
              title: 'Curadoria Inteligente',
              desc: 'Curadoria de produtos e fornecedores. Negociação direta com agentes na origem (sem atravessadores).'
            }, {
              icon: Shield,
              title: 'Operação Blindada',
              desc: 'Embarque sob identidade exclusiva. Blindagem da carga e documentação protegida.'
            }, {
              icon: CheckCircle,
              title: 'Nacionalização Estratégica',
              desc: 'Nacionalização com estrutura fiscal sob medida – SC, SP ou CE conforme mercado-alvo.'
            }, {
              icon: Target,
              title: 'Estratégia de Distribuição',
              desc: 'Distribuição: marketplaces, atacado e canal próprio com canais B2B.'
            }, {
              icon: TrendingUp,
              title: 'Aceleração Comercial',
              desc: 'Venda B2B, marketplaces e marketing digital integrado para escala.'
            }, {
              icon: Shield,
              title: 'Suporte Tático',
              desc: 'Acompanhamento estratégico e operacional contínuo para domínio do mercado.'
            }].map((card, idx) => (
              <Card key={idx} className="bg-slate-900/80 border-yellow-500/20 hover:border-yellow-400/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-yellow-400 flex items-center gap-3">
                    <card.icon className="w-6 h-6" />
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    {card.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Metodologia OLV */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400">
            Etapas do Modelo OLV: Importação com Exclusividade
          </h2>

          <div className="space-y-8">
            {[{
              step: '01',
              title: 'Diagnóstico Estratégico',
              description: 'Análise de viabilidade e oportunidade comercial do seu segmento'
            }, {
              step: '02',
              title: 'Modelagem da Cadeia Logística',
              description: 'Definição de agente, base, modais e cobertura fiscal otimizada'
            }, {
              step: '03',
              title: 'Abertura de Canal na Origem',
              description: 'Interação com parceiros locais via OLV Connecta'
            }, {
              step: '04',
              title: 'Execução e Proteção da Carga',
              description: 'Embarque protegido, documentação blindada e controle total'
            }, {
              step: '05',
              title: 'Recepção e Distribuição no Brasil',
              description: 'SC, SP ou CE conforme mercado-alvo com estrutura fiscal otimizada'
            }, {
              step: '06',
              title: 'Aceleração Comercial',
              description: 'Venda B2B, marketplaces e marketing digital para escala'
            }].map((item, index) => (
              <div key={index} className="flex items-start gap-6 p-6 bg-slate-800/50 rounded-xl border border-yellow-500/20">
                <div className="bg-yellow-500 text-black font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  {item.step}
                </div>
                <div>
                   <h3 className="text-xl font-bold text-yellow-400 mb-2">{item.title}</h3>
                   <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet Form */}
      <section id="lead-form" className="py-20 px-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400">
              🚀 Diagnóstico Gratuito e Personalizado
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transforme sua PME hoje. Identifique gargalos, crie vantagens exclusivas no mercado,
              proteja suas margens e monte um plano sob medida para sua operação exclusiva.
            </p>

            <div className="bg-slate-900/80 border border-yellow-500/30 rounded-xl p-8 mb-8">
              <h3 className="text-lg font-bold text-yellow-400 mb-4">O que você receberá:</h3>
              <ul className="text-left space-y-2 text-gray-300">
                <li>✅ Análise do potencial do seu produto/segmento</li>
                <li>✅ Mapeamento de fornecedores estratégicos</li>
                <li>✅ Projeção de margem e viabilidade</li>
                <li>✅ Roteiro personalizado para implementação</li>
                <li>✅ Sessão de consultoria de 60 minutos</li>
              </ul>
            </div>
          </div>

          <Card className="bg-slate-900/80 border-yellow-500/30">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input type="text" name="nome" placeholder="Seu nome completo" value={formData.nome} onChange={handleInputChange} required className="bg-slate-800 border-slate-600 text-white placeholder-gray-400" />
                  <Input type="email" name="email" placeholder="Seu melhor email" value={formData.email} onChange={handleInputChange} required className="bg-slate-800 border-slate-600 text-white placeholder-gray-400" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input type="text" name="empresa" placeholder="Nome da sua empresa" value={formData.empresa} onChange={handleInputChange} required className="bg-slate-800 border-slate-600 text-white placeholder-gray-400" />
                  <Input type="tel" name="telefone" placeholder="WhatsApp para contato" value={formData.telefone} onChange={handleInputChange} required className="bg-slate-800 border-slate-600 text-white placeholder-gray-400" />
                </div>

                <Textarea name="mensagem" placeholder="Conte-nos sobre seu produto/segmento e principais desafios na importação" value={formData.mensagem} onChange={handleInputChange} rows={4} className="bg-slate-800 border-slate-600 text-white placeholder-gray-400" />

                <Button type="submit" size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 text-lg">
                  📞 Quero Meu Diagnóstico Gratuito Agora
                </Button>
              </form>

              <p className="text-sm text-gray-400 text-center mt-6">* Diagnóstico 100% gratuito • Sem compromisso • Resposta em até 24h</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Credibilidade Final */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">
            Sim, é desafiador. Mas é totalmente possível.
          </h3>
          <p className="text-lg text-gray-300 mb-8">
            Com experiência, método e apoio sólido, você pode criar uma operação de importação
            tática, lucrativa e independente. Esse é o diferencial entre os dominantes e os sobreviventes.
          </p>

          <div className="text-center">
            <p className="text-sm text-gray-400 mb-4"><strong>OLV Internacional</strong> • Especialistas em conectar Estratégia, Operação e Resultado no Comércio Exterior</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImportacaoExclusiva; 