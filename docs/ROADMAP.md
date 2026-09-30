# NUCLEAR SURVIVAL — ROADMAP DO PROJETO

> **Objetivo:** criar uma plataforma de preparação e sobrevivência civil, com foco inicial em emergências nucleares/radiológicas, mas capaz de orientar o usuário em colapsos prolongados de infraestrutura.
>
> **Princípio:** o produto **não terá IA integrada**. IA será usada somente pelo desenvolvedor para pesquisar, organizar, escrever, revisar e programar o projeto.
>
> **Filosofia:** conhecimento verificável + instruções práticas + funcionamento offline + material imprimível + progressão de emergência imediata → semanas → meses → anos.

---

# 0. VISÃO DO PRODUTO

O Nuclear Survival não deve ser apenas um site sobre "guerra nuclear".

Ele será uma **biblioteca offline-first de sobrevivência civil e continuidade**, projetada para responder a três perguntas:

1. **O que eu faço agora?**
2. **Como mantenho água, abrigo, saúde, alimentação, energia e comunicação por semanas ou meses?**
3. **Como mantenho uma comunidade funcional quando serviços normais deixam de existir?**

O produto deve funcionar em três modos:

```text
┌─────────────────────────────────────────────┐
│              NUCLEAR SURVIVAL               │
├─────────────────────────────────────────────┤
│                                             │
│ 🚨 EMERGÊNCIA                               │
│ Ação imediata, passo a passo                │
│                                             │
│ 📚 APRENDER                                 │
│ Conhecimento aprofundado                    │
│                                             │
│ 🧰 PREPARAR                                 │
│ Kits, checklists, planejamento               │
│                                             │
└─────────────────────────────────────────────┘
```

Não depender de:

- internet;
- login;
- servidor;
- API;
- banco de dados remoto;
- IA;
- energia contínua.

---

# 1. PRINCÍPIOS FUNDAMENTAIS

## 1.1 Offline-first

O site deve funcionar normalmente **sem internet depois de instalado/baixado**.

Prioridade:

1. conteúdo HTML/CSS/JS local;
2. PWA instalável;
3. pacote ZIP/arquivo baixável;
4. PDF;
5. versão para impressão;
6. versão texto simples;
7. futuramente EPUB.

---

## 1.2 Informação antes de equipamento

O projeto não deve ensinar:

> "Compre 40 coisas."

Deve ensinar:

> "Entenda o problema e então escolha a ferramenta."

Exemplo:

```text
Problema: água segura
↓
Necessidades:
- armazenamento
- tratamento
- coleta
- teste
↓
Conhecimento:
- microbiológico
- químico
- radiológico
↓
Equipamentos adequados
```

---

## 1.3 Modularidade

Não criar um único "kit de sobrevivência".

Criar módulos independentes:

```text
Kit água
Kit alimentação
Kit abrigo
Kit médico
Kit higiene
Kit energia
Kit comunicação
Kit iluminação
Kit ferramentas
Kit documentos
Kit evacuação
```

O usuário pode combinar módulos.

---

## 1.4 Escala temporal

Todo conhecimento deverá, quando fizer sentido, ser dividido em:

```text
0–10 minutos
10 minutos–1 hora
1–24 horas
Dia 2–3
Dias 4–7
Semana 2
Semanas 3–4
Mês 2
Meses 3–6
6–12 meses
1–3 anos
Longo prazo
```

Não presumir que a infraestrutura voltará rapidamente.

---

## 1.5 Fonte e evidência

Toda orientação crítica deve ter:

- fonte;
- data da fonte;
- data da última revisão;
- nível de autoridade;
- contexto da recomendação;
- eventuais limitações.

Hierarquia:

```text
Nível 1 — autoridades governamentais / reguladores
Nível 2 — organismos internacionais
Nível 3 — universidades / literatura científica
Nível 4 — manuais técnicos de instituições reconhecidas
Nível 5 — material secundário
```

Material de nível inferior não deve substituir recomendação oficial aplicável.

---

## 1.6 Separar "evidência" de "opinião"

Cada página deve distinguir:

```text
O QUE SABEMOS
O QUE É RECOMENDADO
POR QUE FUNCIONA
O QUE É INCERTO
MITOS / ERROS COMUNS
```

---

# 2. OBJETIVOS DO MVP

A primeira versão não precisa possuir todo o conhecimento do mundo.

Precisa fazer muito bem:

### A. Emergência nuclear/radiológica

- explosão;
- abrigo;
- fallout;
- exposição;
- contaminação;
- descontaminação;
- água;
- alimentos;
- comunicação.

### B. Primeiros recursos

- água;
- comida;
- luz;
- energia;
- rádio;
- primeiros socorros;
- higiene;
- documentos.

### C. Offline

- instalação;
- download;
- impressão.

### D. Preparação

- kits;
- checklist;
- planejamento familiar;
- plano de comunicação;
- plano de evacuação.

---

# 3. ESTRUTURA PRINCIPAL DO SITE

```text
/
├── emergency/
├── learn/
├── prepare/
├── tools/
├── offline/
├── sources/
└── print/
```

---

# 4. /EMERGENCY

Esta é a seção de maior prioridade.

## Objetivo

Permitir que uma pessoa com medo, pressa, pouca bateria e pouca iluminação encontre a ação correta em segundos.

---

## 4.1 Tela inicial

```text
🚨 VOCÊ ESTÁ EM UMA EMERGÊNCIA?

[ SIM — MOSTRAR O QUE FAZER ]

[ NÃO — QUERO APRENDER ]
```

Não exigir cadastro.

Não exigir internet.

Não exigir localização.

---

## 4.2 Cenários

```text
☢️ Explosão nuclear
☢️ Emergência radiológica
☢️ Acidente nuclear
☢️ Fallout / contaminação
🔥 Incêndio
🌪️ Desastre natural
⚡ Colapso de energia
💧 Falha no abastecimento de água
📡 Perda de comunicação
🏥 Colapso do atendimento
```

O núcleo inicial deve ser nuclear/radiológico.

Os demais podem ser desenvolvidos depois.

---

## 4.3 Fluxo "Explosão nuclear"

Estrutura:

```text
ANTES
↓
DURANTE A EXPLOSÃO
↓
PRIMEIROS MINUTOS
↓
PRIMEIRA HORA
↓
PRIMEIRAS 24 HORAS
↓
DIAS SEGUINTES
```

O conteúdo de emergência deve ser muito curto.

Exemplo de formato:

```text
AGORA

1. ENTRE EM UM EDIFÍCIO.
2. VÁ PARA O PORÃO OU PARTE CENTRAL.
3. AFASTE-SE DE JANELAS, PAREDES EXTERNAS E TETO.
4. FIQUE DENTRO.
5. ACOMPANHE AS INSTRUÇÕES OFICIAIS.
```

As orientações oficiais do CDC para emergências radiológicas enfatizam entrar, permanecer dentro e acompanhar as instruções; o CDC também recomenda, quando apropriado, a região central do edifício ou o porão e a remoção da camada externa das roupas após exposição externa. [CDC — Radiation Emergencies](https://www.cdc.gov/radiation-emergencies/safety/index.html)

---

# 5. /LEARN — BASE DE CONHECIMENTO

## 5.1 Radiação

### Fundamentos

- o que é radiação;
- radiação ionizante;
- alfa;
- beta;
- gama;
- nêutrons;
- raios X;
- dose;
- taxa de dose;
- Gy;
- Sv;
- Bq;
- meia-vida;
- atividade;
- exposição;
- contaminação.

### Proteção

- tempo;
- distância;
- blindagem;
- abrigo;
- fallout.

### Instrumentação

- contador Geiger;
- dosímetro;
- survey meter;
- limites;
- limitações de instrumentos;
- erros de interpretação.

---

# 6. Explosão nuclear

Ensinar separadamente:

## 6.1 Clarão

## 6.2 Calor

## 6.3 Onda de choque

## 6.4 Fragmentos

## 6.5 Incêndios

## 6.6 Radiação inicial

## 6.7 Fallout

## 6.8 Efeitos sobre infraestrutura

Nunca misturar os fenômenos.

---

# 7. Fallout

Criar uma seção inteira:

- o que é;
- como se deposita;
- por que é perigoso;
- exposição externa;
- contaminação;
- contaminação de superfícies;
- alimentos;
- água;
- roupas;
- veículos;
- animais;
- limpeza;
- abrigo;
- tempo;
- monitoramento;
- evacuação.

O conteúdo deve evitar a ideia de que "ferver remove radioatividade". O tratamento da água depende do contaminante; água com contaminantes químicos, por exemplo, não se torna segura simplesmente por tratamento genérico. [CDC — Emergency Water Supply](https://www.cdc.gov/water-emergency/about/how-to-create-and-store-an-emergency-water-supply.html)

---

# 8. Descontaminação

Criar:

## Para pessoas

- remover roupas externas;
- acondicionamento;
- lavagem;
- cabelo;
- feridas;
- olhos;
- troca de roupa;
- prevenção da disseminação.

O CDC informa que remover a camada externa da roupa pode remover até cerca de 90% do material radioativo presente nela. [CDC](https://www.cdc.gov/radiation-emergencies/safety/index.html)

## Para objetos

- roupas;
- calçados;
- superfícies;
- ferramentas;
- veículos;
- equipamentos.

## Para animais

- como trazer animais para dentro;
- evitar espalhamento;
- higiene;
- limites do que o tutor consegue fazer com segurança.

---

# 9. Água

Este módulo deve ser tratado como um dos pilares do projeto.

## 9.1 Antes da emergência

- armazenamento;
- recipientes;
- rotação;
- localização;
- proteção contra calor;
- proteção contra contaminação.

## 9.2 Durante a emergência

- água engarrafada;
- água armazenada;
- caixa-d'água;
- água de emergência;
- fontes externas;
- riscos.

## 9.3 Tratamento microbiológico

- filtração;
- fervura;
- desinfecção;
- armazenamento seguro.

## 9.4 Tratamento químico

Ensinar por contaminante.

Não apresentar "um método universal".

## 9.5 Contaminação radiológica

Explicar:

- que tipo de risco está sendo considerado;
- diferença entre contaminantes;
- que processos domésticos não devem ser apresentados como capazes de "remover radiação" genericamente;
- quando esperar orientação oficial/testes.

## 9.6 Longo prazo

- captação;
- armazenamento;
- poço;
- cisterna;
- bombeamento;
- manutenção;
- testes;
- desinfecção;
- proteção da fonte.

O CDC atualmente recomenda pelo menos 1 galão (~3,8 L) por pessoa por dia durante 3 dias como referência de reserva de emergência e observa que uma reserva de duas semanas pode ser considerada quando possível. Isso deve ser apresentado como referência de preparação, não como uma regra universal para todas as situações climáticas e médicas. [CDC](https://cdc.gov/water-emergency/about/how-to-create-and-store-an-emergency-water-supply.html)

---

# 10. Saneamento

O site precisa assumir que:

> água disponível + esgoto inexistente = risco enorme.

Conteúdo:

- banheiro sem água;
- descarte de fezes;
- urina;
- resíduos;
- lixo;
- higiene das mãos;
- limpeza;
- desinfecção;
- superfícies;
- vetores;
- moscas;
- mosquitos;
- roedores;
- cadáveres;
- animais mortos;
- controle de odores;
- segurança alimentar.

A OMS considera água, saneamento e higiene componentes centrais da prevenção de doenças em emergências, e destaca o aumento do risco de doenças diarreicas quando as condições de WASH se deterioram. [WHO — Environmental health in emergencies](https://www.who.int/teams/environment-climate-change-and-health/water-sanitation-and-health/environmental-health-in-emergencies)

---

# 11. Infecções e doenças

Esse módulo ganha enorme importância no cenário de semanas/meses/anos.

## 11.1 Infecção: fundamentos

- bactéria;
- vírus;
- fungo;
- parasita;
- transmissão;
- incubação;
- sintomas;
- sinais de gravidade.

## 11.2 Prevenção

- mãos;
- água segura;
- alimentos;
- saneamento;
- ventilação;
- isolamento de pessoas com sintomas;
- limpeza;
- instrumentos;
- feridas.

## 11.3 Ferimentos

- limpeza;
- curativos;
- observação;
- sinais de infecção;
- necessidade de atendimento.

## 11.4 Doenças transmitidas pela água

- diarreia;
- desidratação;
- surtos;
- segurança da água;
- higiene.

## 11.5 Doenças transmitidas por vetores

- mosquitos;
- carrapatos;
- roedores;
- animais.

## 11.6 Infecção respiratória

- ventilação;
- isolamento;
- máscara quando indicada;
- higiene;
- redução de transmissão.

A OMS destaca que IPC (prevenção e controle de infecções) e WASH são fundamentais em emergências de saúde e em ambientes comunitários onde infraestrutura pode estar comprometida. [WHO](https://www.who.int/emergencies/operations/ipc-wash)

---

# 12. Medicina

O projeto não deve prometer transformar alguém em médico.

A proposta é:

> aumentar a capacidade de reconhecimento, prevenção e primeiros cuidados enquanto atendimento profissional for limitado ou indisponível.

## Conteúdo

- primeiros socorros;
- hemorragias;
- queimaduras;
- fraturas;
- entorses;
- traumas;
- choque;
- desidratação;
- insolação;
- hipotermia;
- feridas;
- infecções;
- alergias;
- intoxicações;
- engasgo;
- RCP;
- transporte de feridos;
- triagem básica;
- sinais de gravidade.

---

# 13. Medicina de longo prazo

Este é um dos maiores diferenciais do projeto.

Criar uma seção:

# "E se o hospital não existir?"

Conteúdo:

- higiene;
- prevenção;
- observação de sintomas;
- isolamento;
- cuidados de feridas;
- hidratação;
- nutrição;
- armazenamento correto de medicamentos;
- leitura de rótulos;
- registros médicos pessoais;
- histórico de doenças/alergias;
- vacinação e registros;
- saúde dental;
- saúde da pele;
- saúde dos olhos;
- cuidados com idosos;
- crianças;
- pessoas com deficiência;
- gestação;
- saúde mental;
- cuidados paliativos e fim de vida;
- controle de dor somente dentro de orientação médica/segura;
- identificação de situações que ainda exigem busca de atendimento.

Não criar receitas perigosas ou incentivar automedicação indiscriminada.

---

# 14. Saúde dental

Um módulo separado:

- higiene;
- prevenção de cáries;
- armazenamento de escovas;
- pasta;
- limpeza;
- trauma dental;
- dor;
- sinais de infecção;
- quando buscar profissional;
- materiais de emergência;
- prevenção de problemas que podem se tornar graves.

Em cenários longos, evitar doenças é muito mais importante do que tentar improvisar tratamentos.

---

# 15. Alimentação

## 15.1 72 horas

Comidas simples e prontas.

## 15.2 2 semanas

Alimentos estáveis e rotacionáveis.

## 15.3 1–3 meses

- estoque;
- rotação;
- preparo;
- combustível;
- nutrição.

## 15.4 3–12 meses

- produção;
- armazenamento;
- conservação;
- sementes;
- hortas.

## 15.5 Longo prazo

- agricultura;
- cultivo de raízes;
- leguminosas;
- grãos conforme região;
- produção de proteína;
- conservação;
- fermentação segura;
- secagem;
- armazenamento;
- controle de pragas.

---

# 16. Segurança alimentar

Criar conteúdo sobre:

- deterioração;
- bolores;
- temperatura;
- contaminação cruzada;
- água de lavagem;
- carne;
- ovos;
- leite;
- alimentos enlatados;
- conservação sem geladeira;
- animais doentes;
- produtos potencialmente contaminados.

---

# 17. Energia

## Fundamentos

- tensão;
- corrente;
- potência;
- energia;
- Wh;
- kWh;
- DC;
- AC;
- baterias;
- inversores;
- carregadores.

## Curto prazo

- lanternas;
- pilhas;
- power banks;
- rádio;
- carregamento de telefone.

## Médio prazo

- estação de energia;
- bateria;
- painel solar;
- gerador;
- consumo mínimo.

## Longo prazo

- geração;
- armazenamento;
- manutenção;
- peças;
- segurança elétrica;
- distribuição de energia em pequena escala.

---

# 18. Fogo e calor

Ensinar:

- fogo para cozinhar;
- fogo para aquecimento;
- ventilação;
- risco de monóxido de carbono;
- combustíveis;
- armazenamento seguro;
- extintores;
- prevenção de incêndios.

O conteúdo deve ser altamente conservador em segurança.

---

# 19. Abrigo

## Curto prazo

- casa;
- apartamento;
- escola;
- trabalho;
- veículo;
- edifícios.

## Proteção radiológica

- distância;
- blindagem;
- posição no prédio;
- porão;
- centro da estrutura;
- portas/janelas;
- entrada de ar.

## Longo prazo

- reparos;
- chuva;
- calor;
- frio;
- umidade;
- mofo;
- ventilação;
- isolamento;
- manutenção estrutural.

---

# 20. Ferramentas e manutenção

Criar "Alfabetização mecânica".

## Ferramentas básicas

- alicate;
- chave;
- martelo;
- serrote;
- ferramentas de medição;
- fita;
- cordas;
- parafusos;
- abraçadeiras;
- materiais de reparo.

## Conhecimentos

- madeira;
- metal;
- plástico;
- vedação;
- hidráulica;
- elétrica;
- manutenção de equipamentos.

## Longo prazo

- fabricar peças simples;
- reaproveitar materiais;
- manutenção preventiva;
- inventário de peças.

---

# 21. Comunicação

## Antes

- contatos;
- papéis;
- endereços;
- pontos de encontro;
- contatos de emergência.

## Durante

- rádio;
- celular;
- SMS;
- rádio local;
- mensagens curtas;
- conservação de bateria.

## Sem internet

- rádio;
- mapas;
- documentos;
- sinalização;
- comunicação local.

## Longo prazo

- rádio amador dentro da legislação aplicável;
- redes comunitárias;
- manutenção de equipamentos.

---

# 22. Navegação

- mapas impressos;
- mapas offline;
- bússola;
- orientação;
- planejamento de rotas;
- pontos de encontro;
- rotas alternativas;
- identificação de água;
- identificação de abrigo.

---

# 23. Documentos

Criar uma checklist para manter cópias offline e impressas de:

- documentos pessoais;
- contatos;
- dados médicos;
- alergias;
- medicamentos;
- vacinas;
- tipo sanguíneo quando oficialmente conhecido;
- endereços;
- informações de seguros;
- documentos de propriedade;
- informações importantes para família.

Não armazenar cópias digitais sensíveis no servidor do projeto por padrão.

---

# 24. Kits

A regra do projeto:

> **Não existe um kit único. Existem camadas.**

---

## KIT 0 — No bolso

Objetivo:

> sobreviver e alcançar um local seguro.

- celular;
- documento;
- pequena lanterna;
- chave;
- dinheiro;
- carregamento básico;
- contato de emergência.

---

## KIT 1 — 10 MINUTOS

Objetivo:

> sair de casa/abrigo rapidamente.

- celular;
- documentos;
- medicamentos essenciais;
- água;
- lanterna;
- calçado;
- máscara quando apropriado;
- chaves;
- contatos;
- pequeno rádio, se disponível.

---

## KIT 2 — 72 HORAS

Objetivo:

> sobreviver sem serviços básicos por alguns dias.

### Água
### Comida
### Luz
### Comunicação
### Higiene
### Primeiros socorros
### Medicamentos pessoais
### Ferramentas
### Energia
### Documentos

---

## KIT 3 — 14 DIAS

Objetivo:

> atravessar uma interrupção prolongada.

Adicionar:

- maior reserva de água;
- alimentos;
- combustível apropriado;
- higiene;
- saneamento;
- material médico;
- baterias;
- carregamento;
- ferramentas;
- produtos de limpeza.

---

## KIT 4 — 30 DIAS

Objetivo:

> viver com abastecimento irregular.

Adicionar:

- estoque alimentar organizado;
- sistema de água;
- geração de energia;
- peças;
- ferramentas;
- iluminação;
- comunicação;
- materiais de reparo;
- higiene;
- sementes e ferramentas de cultivo.

---

## KIT 5 — 90 DIAS

Objetivo:

> começar a deixar de depender da cadeia de abastecimento.

Adicionar:

- produção de alimentos;
- fontes de água;
- armazenamento;
- energia;
- oficina;
- manutenção;
- saneamento;
- planejamento comunitário.

---

## KIT 6 — LONGO PRAZO

Objetivo:

> continuidade.

Não é uma mochila.

É uma infraestrutura:

```text
Água
+
Comida
+
Abrigo
+
Energia
+
Saúde
+
Saneamento
+
Produção
+
Manutenção
+
Conhecimento
+
Comunidade
```

---

# 25. KIT DE CONHECIMENTO

Esta é uma ideia central.

Uma pessoa pode possuir equipamentos e ainda assim morrer por não saber utilizá-los.

Criar uma coleção:

## Conhecimento essencial

- primeiros socorros;
- tratamento de água;
- higiene;
- saneamento;
- nutrição;
- agricultura;
- eletricidade;
- mecânica;
- construção;
- conservação de alimentos;
- comunicação;
- navegação;
- identificação de doenças;
- prevenção de incêndios.

O site deve incluir:

> **"Leia antes da emergência."**

---

# 26. FASES DE SOBREVIVÊNCIA

Cada módulo deve indicar sua utilidade temporal.

```text
FASE 0
0–10 minutos

FASE 1
10 min–1 h

FASE 2
1–24 h

FASE 3
1–3 dias

FASE 4
4–7 dias

FASE 5
2 semanas

FASE 6
1 mês

FASE 7
2–3 meses

FASE 8
3–12 meses

FASE 9
1+ ano
```

---

# 27. "COLAPSO LONGO"

Criar uma seção específica.

Premissa:

> Energia não voltou.
> Água encanada não voltou.
> Internet não voltou.
> Hospitais estão sobrecarregados ou indisponíveis.
> A cadeia de abastecimento está quebrada.

A pergunta muda de:

> "Como sobrevivo 3 dias?"

para:

> "Como continuo vivendo?"

---

# 28. LONGO PRAZO — PRIORIDADES

Ordem conceitual:

```text
1. Água
2. Abrigo
3. Saneamento
4. Saúde
5. Alimentação
6. Energia
7. Comunicação
8. Produção
9. Manutenção
10. Organização comunitária
```

Não tratar isso como ranking universal; o projeto deve permitir que o contexto altere as prioridades.

---

# 29. PRODUÇÃO DE ALIMENTOS

Criar subseções:

- horta;
- sementes;
- solo;
- compostagem;
- irrigação;
- armazenamento;
- pragas;
- doenças de plantas;
- culturas adequadas ao clima;
- calendário agrícola;
- produção de alimentos de alta utilidade;
- preservação.

Para o Brasil, criar posteriormente uma camada regional:

```text
Norte
Nordeste
Centro-Oeste
Sudeste
Sul
```

e, futuramente, por clima/bioma.

---

# 30. ANIMAIS

Conteúdo:

- água;
- alimentação;
- higiene;
- zoonoses;
- abrigo;
- descarte seguro de animais mortos;
- cuidados veterinários básicos;
- produção responsável.

---

# 31. VETORES E PRAGAS

Longo prazo:

- mosquitos;
- moscas;
- ratos;
- baratas;
- carrapatos;
- armazenamento de comida;
- lixo;
- água parada;
- abrigo.

Isso deve ser tratado como saúde pública, não apenas como "incômodo".

---

# 32. SAÚDE MENTAL E ORGANIZAÇÃO

Sem psicologizar toda reação normal.

Conteúdo:

- estresse;
- privação de sono;
- fadiga;
- tomada de decisão;
- conflitos;
- rotina;
- descanso;
- comunicação;
- cuidado de crianças;
- apoio social.

---

# 33. COMUNIDADE

Longo prazo não deve ser pensado apenas como:

> "Eu sozinho."

Criar conteúdos sobre:

- divisão de tarefas;
- inventário;
- água;
- alimentação;
- higiene;
- assistência a vulneráveis;
- comunicação;
- tomada de decisão;
- resolução de conflitos;
- proteção de crianças;
- registros;
- cooperação.

O projeto não deve ensinar exploração, violência ou práticas ofensivas.

---

# 34. REPARO E AUTOSSUFICIÊNCIA

Criar uma biblioteca prática:

```text
Elétrica
Hidráulica
Mecânica
Construção
Costura
Cozinha
Agricultura
Conservação
Ferramentas
```

Cada tema deve ter:

```text
conceito
↓
ferramentas
↓
procedimento
↓
erros comuns
↓
segurança
↓
manutenção
```

---

# 35. "APRENDA ANTES DE PRECISAR"

Criar uma trilha:

## Nível 1

- água;
- primeiros socorros;
- abrigo;
- alimentação;
- comunicação.

## Nível 2

- energia;
- saneamento;
- ferramentas;
- conservação de alimentos.

## Nível 3

- agricultura;
- mecânica;
- elétrica;
- hidráulica.

## Nível 4

- produção;
- manutenção;
- saúde comunitária;
- infraestrutura.

---

# 36. SIMULADORES

Não usar IA.

Ferramentas determinísticas.

## Água

Entrada:

- pessoas;
- animais;
- clima;
- dias.

Saída:

- volume necessário;
- volume armazenado;
- autonomia.

---

## Energia

Entrada:

- capacidade da bateria;
- equipamentos;
- consumo;
- horas de uso.

Saída:

- consumo diário;
- autonomia;
- margem.

---

## Alimentação

Entrada:

- pessoas;
- calorias;
- estoque.

Saída:

- duração estimada;
- déficit;
- necessidade de reposição.

---

## Kit

Entrada:

- pessoas;
- idade;
- necessidades;
- clima;
- duração.

Saída:

- checklist personalizada.

---

# 37. MODO IMPRESSÃO

Criar uma área:

# 🖨️ IMPRIMIR

Opções:

```text
[ ] Guia de emergência
[ ] Primeiros 10 minutos
[ ] Primeiras 24 horas
[ ] 72 horas
[ ] Água
[ ] Saneamento
[ ] Primeiros socorros
[ ] Alimentação
[ ] Energia
[ ] Comunicação
[ ] Agricultura
[ ] Manual completo
```

Gerar PDFs limpos.

---

# 38. MANUAL DE BOLSO

Criar um PDF específico:

> **NUCLEAR SURVIVAL — EMERGÊNCIA**

Poucas páginas.

Conteúdo:

- ações imediatas;
- abrigo;
- fallout;
- descontaminação;
- água;
- comunicação;
- primeiros socorros;
- sinais críticos;
- checklist.

Objetivo:

> caber em uma pasta física.

---

# 39. MANUAL COMPLETO

Versão longa:

```text
Parte 1 — Emergência nuclear
Parte 2 — Radiação
Parte 3 — Abrigo
Parte 4 — Água
Parte 5 — Saneamento
Parte 6 — Alimentação
Parte 7 — Medicina
Parte 8 — Energia
Parte 9 — Comunicação
Parte 10 — Ferramentas
Parte 11 — Agricultura
Parte 12 — Longo prazo
```

---

# 40. DOWNLOAD OFFLINE

O usuário deve ter um botão permanente:

# ⬇️ BAIXAR PARA USAR OFFLINE

Opções:

```text
HTML offline
PDF compacto
PDF completo
ZIP completo
Versão impressão
Versão texto
```

O ZIP deve conter:

```text
nuclear-survival/
├── index.html
├── css/
├── js/
├── images/
├── content/
├── pdf/
├── checklists/
└── sources/
```

---

# 41. PWA

Implementar:

- manifest;
- service worker;
- cache local;
- instalação;
- funcionamento offline;
- atualização de conteúdo quando houver internet;
- fallback offline.

Regra:

> **Nunca depender de chamada externa para abrir uma página que já foi baixada.**

---

# 42. "BATERIA ACABANDO"

Criar um modo:

# 🔋 BAIXA ENERGIA

Características:

- sem imagens;
- sem animações;
- fonte simples;
- fundo econômico conforme contexto;
- páginas pequenas;
- sem vídeos;
- texto apenas;
- navegação rápida.

Também oferecer:

> **"Baixar somente o essencial"**

Pacote muito pequeno.

---

# 43. "SEM TELA"

Como a bateria também pode morrer:

Criar:

- PDF;
- impressão;
- fichas;
- cartões;
- pôsteres;
- checklist;
- manual de bolso.

---

# 44. FONTES

A seção `/sources` deve ser pública.

Primeiras fontes prioritárias:

## CDC

Radiation Emergencies:
https://www.cdc.gov/radiation-emergencies/

## IAEA

Emergency Preparedness and Response:
https://www.iaea.org/topics/emergency-preparedness-and-response

## WHO

Environmental Health in Emergencies:
https://www.who.int/teams/environment-climate-change-and-health/water-sanitation-and-health/environmental-health-in-emergencies

IPC/WASH in emergencies:
https://www.who.int/emergencies/operations/ipc-wash

## Brasil

SIPRON:
https://www.gov.br/gsi/pt-br/assuntos/programa-nuclear-brasileiro/sipron-sistema-de-protecao-ao-programa-nuclear-brasileiro

Normas/estrutura regulatória nuclear:
https://www.gov.br/cnen/pt-br/acesso-rapido/normas

Defesa Civil:
https://www.gov.br/mdr/pt-br/assuntos/protecao-e-defesa-civil

---

# 45. SISTEMA DE REVISÃO

Cada artigo deve possuir:

```text
ID
Título
Versão
Autor
Revisor
Fontes
Data de criação
Última revisão
Próxima revisão
Status
```

Status:

```text
draft
review
verified
published
needs-review
deprecated
```

---

# 46. REVISÃO POR NÍVEL DE RISCO

### Crítico

Revisar com frequência máxima.

Exemplos:

- radiação;
- medicamentos;
- água;
- primeiros socorros.

### Alto

- saneamento;
- alimentação;
- energia.

### Médio

- agricultura;
- ferramentas;
- manutenção.

---

# 47. SISTEMA DE ALERTA DE CONTEÚDO DESATUALIZADO

Mostrar:

```text
✓ VERIFICADO

Última revisão:
30/09/2026

Fontes:
CDC
IAEA
WHO
```

Ou:

```text
⚠ NECESSITA REVISÃO

Esta página possui material
que pode ter sido alterado.
```

---

# 48. TESTE DE QUALIDADE EDITORIAL

Antes de publicar qualquer página:

### Fonte

- Existe fonte?
- É a melhor fonte disponível?
- Está atualizada?

### Segurança

- O procedimento pode ser interpretado de maneira perigosa?
- Existe uma ressalva necessária?
- O usuário pode confundir exposição e contaminação?
- O usuário pode confundir tratamento microbiológico com radiológico?

### Clareza

- O usuário sabe o que fazer?
- O primeiro passo aparece primeiro?
- O conteúdo é legível no celular?
- Funciona impresso?

### Offline

- Funciona sem JavaScript?
- As imagens são essenciais?
- A página tem versão de texto?

---

# 49. ESTRUTURA DE DADOS

Mesmo sem IA, manter estrutura organizada.

Entidades:

```text
Article
Category
Topic
Scenario
EmergencyStep
Checklist
ChecklistItem
Kit
KitItem
Source
SourceDocument
SourceVersion
Simulator
SimulatorParameter
Country
Region
Language
PrintDocument
OfflinePackage
```

---

# 50. TECNOLOGIA

Stack sugerida:

```text
Frontend:
Next.js
TypeScript
Tailwind CSS

Conteúdo:
Markdown / MDX

Busca:
Full-text search local / index pré-gerado

Banco:
PostgreSQL, caso seja necessário para administração

Offline:
PWA
Service Worker

Documentos:
HTML
PDF
EPUB (futuro)

Deploy:
Docker
```

O MVP pode ser ainda mais simples:

```text
Next.js
+
Markdown
+
PWA
+
PDF
```

Sem banco, caso o conteúdo inicial seja estático.

---

# 51. ESTRUTURA DE ARQUIVOS

```text
nuclear-survival/
│
├── app/
│   ├── emergency/
│   ├── learn/
│   ├── prepare/
│   ├── tools/
│   ├── offline/
│   ├── sources/
│   └── print/
│
├── content/
│   ├── emergency/
│   ├── radiation/
│   ├── water/
│   ├── sanitation/
│   ├── medicine/
│   ├── food/
│   ├── energy/
│   ├── shelter/
│   ├── communication/
│   ├── agriculture/
│   └── long-term/
│
├── public/
│   ├── offline/
│   ├── print/
│   └── assets/
│
├── lib/
│   ├── search/
│   ├── calculators/
│   ├── offline/
│   └── printing/
│
└── docs/
    ├── ROADMAP.md
    ├── SOURCES.md
    ├── CONTENT_POLICY.md
    └── ARCHITECTURE.md
```

---

# 52. ROADMAP DE IMPLEMENTAÇÃO

## FASE 0 — Pesquisa e escopo

### Objetivo

Criar a base confiável.

### Tarefas

- [ ] levantar fontes;
- [ ] classificar fontes;
- [ ] criar metodologia;
- [ ] definir categorias;
- [ ] definir níveis de prioridade;
- [ ] criar padrão editorial;
- [ ] definir formato de citações;
- [ ] criar estrutura Markdown;
- [ ] definir idiomas.

### Entregável

```text
docs/
├── SOURCES.md
├── CONTENT_POLICY.md
├── INFORMATION_MODEL.md
└── ROADMAP.md
```

---

# 53. FASE 1 — Núcleo de emergência

### Conteúdo

- [ ] primeiros minutos;
- [ ] explosão;
- [ ] abrigo;
- [ ] fallout;
- [ ] descontaminação;
- [ ] água;
- [ ] alimentos;
- [ ] comunicação.

### Produto

- [ ] `/emergency`;
- [ ] interface de alta legibilidade;
- [ ] navegação sem login;
- [ ] funcionamento sem internet após download.

### Entregável

> Site capaz de orientar uma pessoa durante uma emergência radiológica.

---

# 54. FASE 2 — Offline

- [ ] PWA;
- [ ] service worker;
- [ ] cache;
- [ ] pacote essencial;
- [ ] pacote completo;
- [ ] ZIP;
- [ ] versão texto;
- [ ] PDF;
- [ ] impressão;
- [ ] modo baixa energia.

### Teste obrigatório

Desligar Wi-Fi.

Desligar dados móveis.

Abrir o site.

Tudo essencial precisa continuar funcionando.

---

# 55. FASE 3 — Kits

Criar:

- [ ] kit bolso;
- [ ] kit 10 minutos;
- [ ] kit 72h;
- [ ] kit 14 dias;
- [ ] kit 30 dias;
- [ ] kit 90 dias;
- [ ] kit longo prazo.

Adicionar:

- [ ] checklist;
- [ ] imprimir;
- [ ] marcar itens;
- [ ] quantidade;
- [ ] validade;
- [ ] data de revisão.

---

# 56. FASE 4 — Água + saneamento

Prioridade máxima.

- [ ] armazenamento;
- [ ] tratamento;
- [ ] fontes;
- [ ] teste;
- [ ] higiene;
- [ ] banheiro sem água;
- [ ] resíduos;
- [ ] vetores;
- [ ] prevenção de surtos.

---

# 57. FASE 5 — Medicina

- [ ] primeiros socorros;
- [ ] feridas;
- [ ] queimaduras;
- [ ] trauma;
- [ ] desidratação;
- [ ] infecção;
- [ ] higiene;
- [ ] isolamento;
- [ ] saúde dental;
- [ ] grupos vulneráveis;
- [ ] triagem;
- [ ] documentação médica.

---

# 58. FASE 6 — Alimentação

- [ ] armazenamento;
- [ ] rotação;
- [ ] planejamento;
- [ ] cozinha sem rede elétrica;
- [ ] conservação;
- [ ] nutrição;
- [ ] segurança alimentar;
- [ ] produção;
- [ ] agricultura.

---

# 59. FASE 7 — Energia

- [ ] fundamentos;
- [ ] consumo;
- [ ] calculadora;
- [ ] baterias;
- [ ] solar;
- [ ] geradores;
- [ ] manutenção;
- [ ] segurança.

---

# 60. FASE 8 — Ferramentas e reparos

- [ ] oficina básica;
- [ ] elétrica;
- [ ] hidráulica;
- [ ] mecânica;
- [ ] construção;
- [ ] costura;
- [ ] manutenção.

---

# 61. FASE 9 — Longo prazo

Criar o maior módulo:

# "CONTINUIDADE"

Abranger:

- [ ] semanas;
- [ ] meses;
- [ ] anos;
- [ ] água permanente;
- [ ] saneamento;
- [ ] alimentação;
- [ ] agricultura;
- [ ] energia;
- [ ] saúde;
- [ ] higiene;
- [ ] educação;
- [ ] manutenção;
- [ ] comunidade;
- [ ] comunicação;
- [ ] produção;
- [ ] reparos.

---

# 62. FASE 10 — Brasil

Criar camada específica:

- [ ] órgãos federais;
- [ ] Defesa Civil;
- [ ] SIPRON;
- [ ] reguladores;
- [ ] emergência;
- [ ] fontes estaduais;
- [ ] fontes municipais;
- [ ] características climáticas;
- [ ] água;
- [ ] agricultura;
- [ ] alimentos;
- [ ] infraestrutura.

---

# 63. FASE 11 — Ferramentas

Criar:

```text
Calculadora de água
Calculadora de energia
Calculadora de autonomia
Calculadora de estoque
Gerador de checklist
Planejador de kit
Gerador de PDF
Gerador de manual personalizado
```

Nada depende de IA.

Todos os cálculos são determinísticos e testáveis.

---

# 64. FASE 12 — Impressão avançada

Criar:

### Pocket Guide

### Home Binder

### Family Manual

### Medical Binder

### Water Manual

### Food Manual

### Long-Term Manual

### Quick Cards

### Wall Posters

---

# 65. FASE 13 — TESTES REAIS

Testar em:

### Celular

- Android;
- iPhone.

### Computador

- Windows;
- Linux;
- macOS.

### Impressão

- A4;
- A5;
- preto e branco;
- escala de cinza;
- impressão econômica.

### Offline

- Wi-Fi desligado;
- internet desligada;
- servidor indisponível.

### Bateria baixa

- pacote pequeno;
- sem imagens;
- sem vídeos.

---

# 66. FASE 14 — TESTE DE USABILIDADE

Dar para uma pessoa que nunca viu o projeto.

Perguntar:

> "Imagine que aconteceu uma emergência. Encontre o que fazer."

Medir:

- tempo até primeira ação;
- erros;
- páginas visitadas;
- confusão;
- leitura;
- entendimento.

O site deve ser compreensível sem treinamento.

---

# 67. FASE 15 — MANUAL COMPLETO V1

Somente depois de:

- conteúdo;
- revisão;
- offline;
- impressão;
- kits;
- ferramentas.

Gerar:

# NUCLEAR SURVIVAL — MANUAL CIVIL DE EMERGÊNCIA E CONTINUIDADE

---

# 68. ESTRUTURA DO MANUAL FINAL

```text
01 — Como usar este manual
02 — Emergências
03 — Explosão nuclear
04 — Radiação
05 — Fallout
06 — Abrigo
07 — Água
08 — Saneamento
09 — Alimentação
10 — Primeiros socorros
11 — Infecções
12 — Medicamentos
13 — Saúde dental
14 — Energia
15 — Fogo
16 — Comunicação
17 — Navegação
18 — Ferramentas
19 — Manutenção
20 — Agricultura
21 — Conservação de alimentos
22 — Animais
23 — Pragas e vetores
24 — Comunidade
25 — Longo prazo
26 — Checklists
27 — Fontes
```

---

# 69. PRIORIDADE ABSOLUTA DE DESENVOLVIMENTO

Não construir por "o que é mais interessante programar".

Construir por utilidade.

```text
PRIORIDADE 1
Emergência nuclear
↓
PRIORIDADE 2
Offline + impressão
↓
PRIORIDADE 3
Água
↓
PRIORIDADE 4
Saneamento
↓
PRIORIDADE 5
Primeiros socorros / infecções
↓
PRIORIDADE 6
Alimentação
↓
PRIORIDADE 7
Energia
↓
PRIORIDADE 8
Comunicação
↓
PRIORIDADE 9
Kits
↓
PRIORIDADE 10
Longo prazo
↓
PRIORIDADE 11
Agricultura / produção
↓
PRIORIDADE 12
Ferramentas avançadas
```

---

# 70. DEFINIÇÃO DE "PRONTO"

O projeto só pode ser considerado realmente funcional quando:

- [ ] funciona sem login;
- [ ] funciona sem internet após download;
- [ ] possui pacote offline;
- [ ] possui PDF;
- [ ] possui versão imprimível;
- [ ] possui modo baixa energia;
- [ ] primeiros procedimentos estão claramente visíveis;
- [ ] fontes são identificadas;
- [ ] conteúdo crítico possui revisão;
- [ ] água possui módulo completo;
- [ ] saneamento possui módulo completo;
- [ ] primeiros socorros possuem módulo completo;
- [ ] infecções possuem módulo completo;
- [ ] alimentação possui módulo completo;
- [ ] energia possui módulo completo;
- [ ] comunicação possui módulo completo;
- [ ] kits possuem checklists;
- [ ] existe conteúdo de médio e longo prazo;
- [ ] existe mecanismo de atualização;
- [ ] o usuário consegue imprimir o conteúdo sem internet;
- [ ] o usuário consegue guardar o manual localmente.

---

# 71. O QUE NÃO CONSTRUIR NO COMEÇO

Não gastar tempo inicialmente com:

- [ ] login;
- [ ] rede social;
- [ ] comentários;
- [ ] fórum;
- [ ] gamificação;
- [ ] IA integrada;
- [ ] aplicativo nativo;
- [ ] marketplace;
- [ ] anúncios;
- [ ] sistema de pagamentos;
- [ ] mapa mundial sofisticado;
- [ ] microserviços.

Primeiro:

> **conhecimento + emergência + offline + impressão.**

---

# 72. PRINCÍPIO FINAL DO PROJETO

O objetivo não é ensinar uma pessoa a "viver no apocalipse".

É ensinar a pessoa a:

```text
PROTEGER-SE
↓
MANTER ÁGUA
↓
MANTER ABRIGO
↓
MANTER HIGIENE
↓
MANTER SAÚDE
↓
MANTER ALIMENTO
↓
MANTER ENERGIA
↓
MANTER COMUNICAÇÃO
↓
MANTER PRODUÇÃO
↓
MANTER CONHECIMENTO
↓
MANTER A COMUNIDADE
```

Quanto mais tempo passa, mais o projeto deixa de ser um manual de emergência e passa a ser uma **biblioteca de continuidade humana**.

---

# 73. PRIMEIRA VERSÃO RECOMENDADA

Começar somente com:

```text
NUCLEAR SURVIVAL v0.1

01. Home
02. Modo Emergência
03. Explosão nuclear
04. Abrigo
05. Fallout
06. Descontaminação
07. Água
08. Comunicação
09. Kit 72h
10. Fontes
11. Download Offline
12. Impressão
```

Depois:

```text
v0.2
Saneamento
Primeiros socorros
Infecções
Alimentação

v0.3
Energia
Ferramentas
Kits 14/30/90 dias

v0.4
Agricultura
Produção
Longo prazo

v0.5
Brasil
Fontes locais
Personalização

v1.0
Manual completo + pacote offline completo
```

---

# 74. REGRA DE OURO

> **A primeira versão deve ser útil mesmo se o mundo acabar amanhã e o usuário nunca mais tiver internet.**

Essa é a métrica principal do projeto.

E a segunda:

> **O conteúdo mais importante deve existir em papel.**

---

## FIM DO ROADMAP

Versão inicial: `0.1`  
Data-base: `2026-09-30`  
Produto: `Nuclear Survival`  
IA no produto: **não**  
IA utilizada no desenvolvimento: **sim**  
Prioridade: **offline + impressão + conhecimento verificável + continuidade**
