window.QUESTOES = [
{
"id": 1,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Segundo Frederick Brooks, um dos pioneiros da Engenharia de Software, existem dois tipos de dificuldades em engenharia de software: dificuldades acidentais e dificuldades essenciais. As dificuldades essenciais listadas por ele são complexidade, conformidade, facilidade de mudanças e invisibilidade. Essas dificuldades são compartilhadas dentre as diferentes engenharias existentes, já que a própria engenharia de software é, de fato, uma engenharia.",
"resposta": false,
"justificativa": "A questão é falsa porque a única dificuldade compartilhada entre as engenharias é a complexidade, as demais citadas por Brooks são específicas da Engenharia de Software. \"As dificuldades (2), (3) e (4) são específicas de sistemas de software, isto é, elas não ocorrem em outros produtos de Engenharia, pelo menos na mesma intensidade.\" (Valente, Engenharia de Software Moderna, 2020, Capítulo 1.1)"
},
{
"id": 2,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "O SWEBOK (Guide to the Software Engineering Body of Knowledge) define 12 áreas de conhecimento para a engenharia de software, entre elas o teste de software. Os testes podem ser usados tanto para verificação quanto para validação do sistema. Então um sistema passa pela verificação quando se procura saber se o sistema está sendo implementado corretamente, isto é, de acordo com os requisitos. Quando se trata de validação, é verificado se o sistema implementado está correto, ou seja, se está do jeito que o cliente deseja.",
"resposta": true,
"justificativa": "“Segundo, testes podem ser usados tanto para verificação como para validação de sistemas. Verificação tem como o objetivo garantir que um sistema atende à sua especificação. Já com validação, o objetivo é garantir que um sistema atende às necessidades de seus clientes.” (Valente, Engenharia de Software Moderna, 2020, Capítulo 1.2.4)\n“Existem duas frases, muito usadas, que resumem as diferenças entre verificação e validação:\n    • Verificação: estamos implementando o sistema corretamente? Isto é, de acordo com seus requisitos.\n    • Validação: estamos implementando o sistema correto? Isto é, aquele que os clientes ou o mercado está querendo.” (Valente, Engenharia de Software Moderna, 2020, Capítulo 1.2.4)"
},
{
"id": 3,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "A engenharia de software tem como um de suas áreas de conhecimento a engenharia de requisitos, esses requisitos podem ser divididos em duas partes: os requisitos funcionais e os requisitos não funcionais. Os requisitos funcionais definem o que o sistema deve fazer, como por exemplo, num sistema de e-commerce, procurar um produto, adicionar no carrinho e finalizar a compra. Já os requisitos não funcionais definem como um sistema deve operar, como por exemplo, no mesmo caso, mostrar o produto pesquisado em até três segundos, integrar-se aos sistemas de pagamento de cartão de crédito e estar ao ar 99% do tempo.",
"resposta": true,
"justificativa": "“Requisitos funcionais definem o que um sistema deve fazer; isto é, quais funcionalidades ou serviços ele deve implementar. Já os requisitos não-funcionais definem como um sistema deve operar, sob quais restrições e com qual qualidade de serviço.”"
},
{
"id": 4,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "No livro Engenharia de Software Moderna, escrito por Marco Túlio Valente, são apresentados 5 tipos de manutenção que podem ser realizadas em sistemas de software: corretiva, preventiva, adaptativa, refactoring e evolutiva. Quando se trata de manutenção adaptativa, o autor se refere àquelas manutenções que tem como objetivo incluir uma nova funcionalidade ou introduzir aperfeiçoamentos em funcionalidades já existentes, de modo que elas se adaptem à nova funcionalidade.",
"resposta": false,
"justificativa": "Na verdade, a descrição se refere à manutenção evolutiva não à adaptativa.\n“Manutenção adaptativa tem como objetivo adaptar um sistema a uma mudança em seu ambiente, incluindo tecnologia, legislação, regras de integração com outros sistemas ou demandas de novos clientes.” (Valente, Engenharia de Software Moderna, 2020, Capítulo 1.2.5)\n“Manutenção evolutiva é aquela realizada para incluir uma nova funcionalidade ou introduzir\naperfeiçoamentos importantes em funcionalidades existentes.” (Valente, Engenharia de Software Moderna, 2020, Capítulo 1.2.5)"
},
{
"id": 5,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Bertrand Mayer propôs uma classificação que dividem os sistemas de software em 3: sistemas A, sistemas B e sistemas C. Os sistemas B são os sistemas que englobam as mais diversas aplicações corporativas e sistemas Web, dos pequenos aos grandes. Nos sistemas B, os princípios e práticas da Engenharia de Software podem propiciar a construção de sistemas B de maior qualidade, tanto interna quanto externa.",
"resposta": true,
"justificativa": "“Segundo essa classificação, existem três tipos principais de software:\n    • Sistemas A (Acute)\n    • Sistemas B (Business)\n    • Sistemas C (Casuais)” (Valente, Engenharia de Software Moderna, 2020, Capítulo 1.3)\n\n“Esses sistemas (B) incluem as mais variadas aplicações corporativas (financeiras, recursos humanos, logística, vendas, contabilidade, etc.), sistemas Web dos mais variados tipos, desde sistemas com poucas páginas até grandes redes sociais ou sistemas de busca. […] os princípios e práticas de Engenharia de Software estudados neste livro podem contribuir com dois benefícios principais: (1) eles podem tornar mais produtivo o desenvolvimento de Sistemas B; (2) eles podem propiciar a construção de Sistemas B com melhor qualidade, tanto interna (por exemplo, sistemas mais fáceis de serem mantidos) como externa (por exemplo, sistemas com menor quantidade de bugs em produção).” (Valente, Engenharia de Software Moderna, 2020, Capítulo 1.3)"
},
{
"id": 6,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Os modelos de software oferecem uma representação em mais alto nível de um sistema do que seu código fonte. Esses modelos são criados após a implementação do projeto, o que chamamos de Engenharia Reversa. Dessa forma, eles servem como uma forma de documentação do sistema.",
"resposta": false,
"justificativa": "A questão afirma que os modelos são criados após a implementação do projeto, porem eles também podem ser criados antes.\n“Modelos podem ser criados antes do código, por exemplo, ainda na fase de projeto. Nesse caso, eles são usados para apoiar Engenharia Avante (Forward Engineering); isto é, primeiro cria- se um modelo para ter um entendimento de mais alto nível de um sistema, antes de partir para a implementação do código. Por outro lado, eles podem ser criados para ajudar a entender uma base de código existente; nesse caso, eles são um instrumento de Engenharia Reversa (Reverse Engineering). Em ambos os casos, modelos são uma forma de documentar o código de um sistema.” (Valente, Engenharia de Software Moderna, 2020, Capítulo 1.2.9)"
},
{
"id": 7,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Com a evolução do mundo surgiu a necessidade de criar softwares mais complexos e maiores com produtividade e qualidade.",
"resposta": true,
"justificativa": "Segundo Marco Tulio Valente, em seu livro Engenharia de Software Moderna, os computadores nos primórdios eram primariamente utilizados para resolver problemas científicos e ,com o avanço do hardware, urgiu a necessidade de maiores demandas por software maiores,organizados e com qualidade."
},
{
"id": 8,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "A Engenharia de Software é igual as demais engenharias.",
"resposta": false,
"justificativa": "Segundo Marco Tulio Valente, em seu livro Engenharia de Software Moderna, a Engenharia de Software se difere das demais engenharias porque seus processos não precisam ser estritamente sequenciais, existindo algumas mudanças com relação a outras engenharias como o fato de nem sempre os engenheiros de software precisam implementar tudo do zero."
},
{
"id": 9,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "A complexidade de um software é uma dificuldade acidental deum software",
"resposta": false,
"justificativa": "Segundo Frederic Brooks, em seu livro Não existe bala de prata, as dificuldades acidentais são aquelas relacionadas a tecnologia do momento, mas a complexidade de um software é uma dificuldade inerente a um software sendo, portanto, uma dificuldade essencial."
},
{
"id": 10,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Um desenvolvedor enxergou a oportunidade de melhorar o código do software, mas acabou alterando levemente o comportamento do software. Após isso, enviou um email a seu chefe afirmando que realizou refactoring.",
"resposta": false,
"justificativa": "Segundo Marco Tulio Valente, em seu livro Engenharia de Software Moderna, refactoring é o ato de melhorar o código ou o projeto do software sem alterar o comportamento ou a funcionalidade do mesmo, portanto, como o desenvolvedor alterou levemente o comportamento, ele cometeu um erro e não realizou refactoring."
},
{
"id": 11,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Quanto mais adicionamos desenvolvedores a um projeto atrasado mais atrasamos ele.",
"resposta": true,
"justificativa": "Segundo Frederic Brooks, por meio da Lei de Brooks, contextualizada na obra Engenharia de Software Moderna de Marco Tulio Valente, quando um projeto está atrasado e se adiciona mais desenvolvedores, esses precisarão entender o projeto, sua arquitetura, seu código e será necessário uma maior comunicação entre os desenvolvedores, atrasando ainda mais o projeto."
},
{
"id": 12,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "A fácil utilização é uma qualidade externa de um software.",
"resposta": true,
"justificativa": "Segundo Marco Tulio Valente, em seu livro Engenharia de Software Moderna, qualidades externas a um software são aquelas em que o usuário percebe, portanto a fácil utilização de um software é uma qualidade externa."
},
{
"id": 13,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Processo existe em toda construção de software, mesmo se uma equipe disser que não está seguindo nenhum processo ela está ,com certeza, seguindo um conjunto de passos,tarefas e práticas.",
"resposta": true,
"justificativa": "Segundo Marco Tulio Valente, em sua obra Engenharia de Software Moderna, o processo de um desenvolvimento de um software é um conjunto de práticas,passos, tarefas e eventos, as quais é impossível uma equipe fugir de tal organização. Segundo ele, o método pode ser diferente, mas sempre terá processo."
},
{
"id": 14,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "O Manifesto Ágil diz que a documentação abrangente é mais importante do que o software rodando.",
"resposta": false,
"justificativa": "Segundo o Manifesto Ágil, software rodando deve ser priorizado do que uma documentação abrangente, salientando também que a documentação não é inútil, mas software rodando deve ser priorizado."
},
{
"id": 15,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "O Manifesto Ágil descarta a utilização de contratos, documentação e planejamento.",
"resposta": false,
"justificativa": "Segundo o Manifesto Ágil, apesar de não serem a prioridade com relação a software rodando e a colaboração com o cliente, contratos, documentação e planejamento devem permanecer no processo."
},
{
"id": 16,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "XP foca muito mais em práticas de programação do que o Scrum",
"resposta": true,
"justificativa": "Segundo Marco Tulio Valente, em sua obra Engenharia de Software Moderna, o método XP é focado em práticas de programação como a programação em pares, já o método Scrum foca em gerência, como a atividade de reuniões diárias."
},
{
"id": 17,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Scrum define práticas específicas de programação, como TDD e programação em pares, que obrigatoriamente devem ser utilizadas por toda equipe Scrum.",
"resposta": false,
"justificativa": "Segundo Marco Tulio Valente, em sua obra Engenharia de Software Moderna, o método XP que define práticas específicas de programação, como TDD e programação em pares, que obrigatoriamente devem ser utilizadas por toda equipe."
},
{
"id": 18,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Pela Lei de Little, se o throughput for de 4 tarefas por dia e o lead time for de 3 dias, o WIP será igual a 12 tarefas.",
"resposta": true,
"justificativa": "Segundo a Lei de Little, WIP = throughput x lead time e 12 = 4x3, portanto está correto."
},
{
"id": 19,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Segundo Frederick Brooks, no ensaio \"Não Existe Bala de Prata\", as dificuldades essenciais do desenvolvimento de software são causadas por ferramentas inadequadas, linguagens de programação difíceis e processos lentos, podendo ser totalmente resolvidas com o avanço tecnológico.",
"resposta": false,
"justificativa": "\"Brooks propõe que as dificuldades enfrentadas no desenvolvimento de sistemas podem ser divididas em dois grupos: Dificuldades acidentais: estão relacionadas com as ferramentas, linguagens e plataformas usadas na construção do software. (...) Dificuldades essenciais: são inerentes à própria natureza do software. (...) Por isso, Brooks argumenta que não existem balas de prata para as dificuldades essenciais.\".\n\nMarco Tulio Valente. Engenharia de Software Moderna: Princípios e Práticas para Desenvolvimento de Software com Produtividade. . Belo Horizonte: Independente. 2020"
},
{
"id": 20,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "A conformidade é classificada como uma dificuldade essencial do software. Ela reflete o fato de que os sistemas operam em um mundo real complexo e precisam constantemente se adaptar às suas regras arbitrárias, leis e regulamentações, que muitas vezes não possuem uma estrutura estritamente lógica.",
"resposta": true,
"justificativa": "Marco Tulio Valente. Engenharia de Software Moderna: Princípios e Práticas para Desenvolvimento de Software com Produtividade. . Belo Horizonte: Independente. 2020.\n\nConformidade: pela sua natureza software tem que se adaptar ao seu ambiente, que muda a todo momento no mundo moderno. Por exemplo, se as leis para recolhimento de impostos mudam, normalmente espera-se que os sistemas sejam rapidamente adaptados à nova legislação. Brooks comenta que isso não ocorre, por exemplo, na Física, pois as leis da natureza não mudam de acordo com os caprichos dos homens."
},
{
"id": 21,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "A Engenharia de Software trata da aplicação de abordagens sistemáticas, disciplinadas e quantificáveis para o desenvolvimento e manutenção de sistemas.",
"resposta": true,
"justificativa": "“Engenharia de Software é a aplicação de uma abordagem sistemática, disciplinada e quantificável ao desenvolvimento, operação e manutenção de software” (Engenharia de Software Moderna, Cap. 1.1)"
},
{
"id": 22,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "\"Não Existe Bala de Prata\" (No Silver Bullet), Frederick Brooks - Segundo o autor, as dificuldades da área dividem-se em essenciais (inerentes à própria natureza complexa do software) e acidentais (relacionadas com limitações de ferramentas ou tecnologia, as quais podem ser superadas com o avanço técnico).",
"resposta": true,
"justificativa": "\"Segundo Brooks, existem dois tipos de dificuldades em desenvolvimento de software: dificuldades essenciais e dificuldades acidentais. As essenciais são da natureza da área e dificilmente serão superadas por qualquer nova tecnologia ou método que se invente.\" Engenharia de Software Moderna, Cap. 1"
},
{
"id": 23,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Segundo a Lei de Brooks, adicionar novos desenvolvedores a um projeto de software que já se encontra atrasado reduz o tempo necessário para a sua conclusão devido ao aumento da força de trabalho disponível.",
"resposta": false,
"justificativa": "“A inclusão de novos desenvolvedores em um projeto que está atrasado contribui para torná-lo ainda mais atrasado.” Engenharia de Software Moderna, Cap. 1.2.7"
},
{
"id": 24,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "A principal crítica ao modelo de processos em cascata (Waterfall) refere-se à validação tardia do sistema junto aos usuários, decorrente da necessidade de concluir sequencialmente o levantamento completo de requisitos, o projeto detalhado e a implementação antes que o produto possa ser testado e avaliado.",
"resposta": true,
"justificativa": "“O principal problema é que Waterfall pressupõe um levantamento completo de requisitos, depois um projeto detalhado, depois uma implementação completa, etc. Para só então validar o sistema com os usuários, o que pode acontecer anos após o início do projeto.” Engenharia de Software Moderna, Cap. 1.2.8"
},
{
"id": 25,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Ao realizar a refatoração (refactoring) em um software, o objetivo principal do desenvolvedor é corrigir bugs e falhas funcionais reportados pelos usuários ou pela equipe de desenvolvimento.",
"resposta": false,
"justificativa": "“Refactorings são modificações realizadas em um software preservando seu comportamento e visando exclusivamente a melhoria de seu código ou projeto. São exemplos de refactorings operações como renomeação de um método ou variável” Engenharia de Software Moderna, Cap. 1.2.5"
},
{
"id": 26,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "No contexto dos aspectos econômicos aplicados à Engenharia de Software, o custo de oportunidade de uma decisão corresponde aos potenciais benefícios e vantagens que deixam de ser aproveitados quando se descarta uma opção alternativa para adotar outra.",
"resposta": true,
"justificativa": "\"Isto é, toda decisão possui um custo de oportunidade, que são as oportunidades preteridas quando se descartou uma das decisões alternativas.\" Engenharia de Software Moderna, Cap. 1.2.12"
},
{
"id": 27,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Os métodos ágeis surgiram como uma resposta direta aos problemas recorrentes enfrentados pelos processos tradicionais (como o modelo Waterfall), caracterizados por atrasos constantes em cronogramas, extrapolação de orçamentos e dificuldade em acomodar mudanças frequentes de requisitos.",
"resposta": true,
"justificativa": "“Por exemplo, os cronogramas e orçamentos desses projetos não eram obedecidos. Não raro, projetos inteiros eram cancelados, após anos de trabalho, sem entregar um sistema funcional para os clientes.” Engenharia de Software Moderna, Cap. 2.2"
},
{
"id": 28,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "O Scrum Master atua como o líder hierárquico do time, sendo a autoridade responsável por determinar de forma unilateral quais histórias de usuário serão implementadas em cada sprint.",
"resposta": false,
"justificativa": "“Por exemplo, ele não é o líder do time, pois todos em um time Scrum têm o mesmo nível hierárquico.” Engenharia de Software Moderna, Cap. 2.4.1"
},
{
"id": 29,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "No método XP (Extreme Programming), adota-se uma extensa fase inicial de análise e projeto detalhado, conhecida como Big Design Up Front (BDUF), a qual deve ser inteiramente concluída antes que a equipe inicie a etapa de implementação do sistema.",
"resposta": false,
"justificativa": "\"XP não há uma fase de design e análise detalhados, conhecida como Big Design Up Front (BDUF), a qual é uma das principais fases de processos do tipo Waterfall.\" Engenharia de Software Moderna, Cap. 2.3.4"
},
{
"id": 30,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "A manutenção corretiva de um software tem como objetivo principal a identificação e correção de bugs latentes no código, atuando antes que esses defeitos causem falhas ou impactos diretos aos usuários finais do sistema.",
"resposta": false,
"justificativa": "A afirmativa é falsa pois ela troca os conceitos. O texto descreve a manutenção preventiva, não a corretiva. De acordo com o livro:\n\"Manutenção corretiva tem como objetivo corrigir bugs reportados por usuários ou outros desenvolvedores.\"\n\"Por sua vez, manutenção preventiva tem como objetivo corrigir bugs latentes no código, que ainda não causaram falhas junto aos usuários do sistema.\"\nReferência Bibliográfica: VALENTE, Marco Tulio. Engenharia de Software Moderna. Capítulo 1: Introdução, Seção 1.2.5 (Manutenção e Evolução de Software)."
},
{
"id": 31,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "De acordo com a Lei de Brooks, a tentativa de acelerar um projeto que já se encontra atrasado por meio da adição de novos desenvolvedores resultará em ainda mais atrasos para a sua conclusão.",
"resposta": true,
"justificativa": "A afirmativa é verdadeira, pois, descreve exatamente o fenômeno cunhado por Frederick Brooks. De acordo com o texto:\n\"A inclusão de novos desenvolvedores em um projeto que está atrasado contribui para torná-lo ainda mais atrasado.\"\n\"Basicamente, esse efeito acontece porque os novos desenvolvedores terão primeiro que entender e compreender todo o sistema, sua arquitetura e seu projeto (design), antes de começarem a produzir código útil.\"\n\"Além disso, equipes maiores exigem um maior esforço de comunicação e coordenação para tomar e explicar decisões.\"\nReferência Bibliográfica: VALENTE, Marco Tulio. Engenharia de Software Moderna. Capítulo 1: Introdução, Seção 1.2.7 (Gerência de Projetos)."
},
{
"id": 32,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "A execução correta e abrangente de uma suíte de testes de software é capaz de revelar tanto a presença de falhas quanto provar a ausência total de bugs em um sistema.",
"resposta": false,
"justificativa": "A afirmativa é falsa pois contradiz um dos princípios fundamentais da área. Como o teste consiste na execução de um programa com um conjunto finito de casos, ele não cobre todas as possibilidades do mundo real. Conforme o livro-texto cita a famosa frase de Edsger W. Dijkstra:\n\"Testes de software mostram a presença de bugs, mas não a sua ausência.\"\nReferência Bibliográfica: VALENTE, Marco Tulio. Engenharia de Software Moderna. Capítulo 1: Introdução, Seção 1.2.4 (Testes de Software)."
},
{
"id": 33,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "A aplicação de técnicas e processos avançados de Engenharia de Software no desenvolvimento de Sistemas C pode ser prejudicial, resultando em algo chamado de over-engineering, uma vez que a natureza simples e não crítica desses sistemas não justifica o esforço, custo e complexidade de tais práticas.",
"resposta": true,
"justificativa": "\"Sistemas C (Casuais) não sofrem pressão para terem níveis altos de qualidade. São sistemas que podem ter alguns bugs, os quais não vão comprometer fundamentalmente o seu funcionamento.\"\n\"Por tudo isso, eles não se beneficiam tanto das práticas, técnicas e processos estudados neste livro. Pelo contrário, no caso de Sistemas C, o maior risco é over-engineering, ou seja, o uso de recursos mais sofisticados em um contexto que não demanda tanta preocupação. Como se diz coloquialmente, Engenharia de Software nesse contexto equivale a 'usar uma bala de canhão para matar formigas'.\"\nReferência Bibliográfica: VALENTE, Marco Tulio. Engenharia de Software Moderna. Capítulo 1: Introdução, Seção 1.3 (Classificação de Sistemas de Software)"
},
{
"id": 34,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "A prática de refactoring (refatoração) consiste em realizar modificações no código-fonte de um software com o objetivo principal de adicionar novas funcionalidades ao sistema e alterar o seu comportamento externo, garantindo assim que o produto acompanhe as novas demandas dos clientes.",
"resposta": false,
"justificativa": "\"Refactorings são modificações realizadas em um software preservando seu comportamento e visando exclusivamente a melhoria de seu código ou projeto.\"\n\"São exemplos de refactorings operações como renomeação de um método ou variável (para um nome mais intuitivo e fácil de lembrar), divisão de um método longo em dois métodos menores (para facilitar o entendimento) ou movimentação de um método para uma classe mais apropriada.\"\n\"Manutenção evolutiva é aquela realizada para incluir uma nova funcionalidade ou introduzir aperfeiçoamentos importantes em funcionalidades existentes.\"\nReferência Bibliográfica: VALENTE, Marco Tulio. Engenharia de Software Moderna. Capítulo 1: Introdução, Seção 1.2.5 (Manutenção e Evolução de Software)."
},
{
"id": 35,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Uma das principais críticas ao processo de desenvolvimento Waterfall é a sua rigidez, visto que ele pressupõe a conclusão de fases estritamente sequenciais antes que ocorra a validação do sistema com os usuários finais, o que pode resultar na entrega de um produto obsoleto ou desalinhado com as necessidades atuais do cliente caso ocorram mudanças no mercado durante o período de desenvolvimento.",
"resposta": true,
"justificativa": "\"Processos Waterfall — também chamados de processos dirigidos por planejamento (plan-driven) — propõem que a construção de um sistema deve ser feita em etapas sequenciais, como em uma cascata de água, na qual a água vai escorrendo de um nível para o outro.\"\n\"O principal problema é que Waterfall pressupõe um levantamento completo de requisitos, depois um projeto detalhado, depois uma implementação completa, etc. Para só então validar o sistema com os usuários, o que pode acontecer anos após o início do projeto.\"\n\"No entanto, nesse período, o mundo pode ter mudado, bem como as necessidades dos clientes, que podem não mais precisar do sistema que ajudaram a especificar anos antes.\"\nReferência Bibliográfica: VALENTE, Marco Tulio. Engenharia de Software Moderna. Capítulo 1: Introdução, Seção 1.2.8 (Processos de Desenvolvimento de Software)."
},
{
"id": 36,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "O processo waterfall busca seguir estritamente uma sequência de passos, começando pela especificação de requisitos até chegar às fases de implementação, teste e manutenção do sistema. Já o processo ágil adota ciclos curtos e iterativos de desenvolvimento, e é correto afirmar que cada uma dessas iterações é um “mini-waterfall”.",
"resposta": false,
"justificativa": "“No entanto, a figura anterior pode sugerir que, em desenvolvimento ágil, cada iteração é um mini waterfall, incluindo todas as fases de um processo Waterfall. Isso não é verdadeiro; em geral, as iterações em métodos ágeis não são um pipeline de tarefas, como em Waterfall” (Valente, Engenharia de Software Moderna, 2020, Capítulo 2.2)"
},
{
"id": 37,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "No método XP (Extreme Programming) existem as histórias, que são documentos resumidos nos quais o representante dos clientes define o que ele quer que o sistema faça. Essas histórias são implementadas em iterações, que por sua vez formam ciclos mais longos, chamados de releases. Então é sugerido que o representante dos clientes escreva histórias que levem no mínimo um release para serem implementadas.",
"resposta": true,
"justificativa": "“A implementação das histórias ocorre em iterações, as quais têm uma duração fixa e bem definida, variando de uma a três semanas, por exemplo. As iterações, por sua vez, formam ciclos mais longos, chamados de releases, de dois a três meses, por exemplo. […] Sugere-se que o representante dos clientes escreva histórias que requeiram pelo menos uma release para serem implementadas.” (Valente, Engenharia de Software Moderna, 2020, Capítulo 2.3.3)"
},
{
"id": 38,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Tanto XP quanto Scrum são métodos ágeis, sendo Scrum aquele que propõe um conjunto mais amplo e detalhado de práticas de programação, como testes de unidade e integração contínua, enquanto XP é um método mais genérico, voltado ao gerenciamento de projetos, sem prescrever esse tipo de prática técnica.",
"resposta": false,
"justificativa": "\"XP é um método ágil voltado exclusivamente para projetos de desenvolvimento de software. Para isso, XP inclui um conjunto de práticas de programação, como testes de unidade, programação em pares, integração contínua e design incremental [...] Scrum é um método ágil para gerenciamento de projetos, que não necessariamente precisam ser projetos de desenvolvimento de software. [...] Tendo um foco mais amplo que XP, Scrum não propõe nenhuma prática de programação.\" (Valente, Engenharia de Software Moderna, 2020, Capítulo 2.4)"
},
{
"id": 39,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "No método ágil Kanban o principal conceito a ser aplicado é o Quadro Kanban, nele devem conter todas as etapas necessárias para a empresa, desde o backlog à revisão. Uma etapa comum a ser incluída é a de Especificação, no qual ficam registradas as histórias a ser específicadas e as tarefas das histórias já especificadas. No caso do limite WIP (Work In Process) da coluna Especificação, é correto afirmar, que para verificar o WIP deve-se fazer a contagem de todas as tarefas que foram geradas da especificação de alguma história do backlog.",
"resposta": false,
"justificativa": "\"Para verificar o WIP desse passo, deve-se somar as histórias em especificação [...] e as histórias que já foram especificadas [...] T8 e T9 são tarefas que resultaram da especificação de uma mesma história. E as tarefas T10, T11 e T12 são resultado da especificação de uma segunda história. Portanto, para fins do cálculo de WIP, temos duas histórias no passo.\" (Valente, Engenharia de Software Moderna, 2020, Capítulo 2.5.1)"
},
{
"id": 40,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Scrum e Kanban são ambos métodos ágeis, ou seja, eles seguem o processo ágil de desenvolvimento. Sabendo disso, uma diferença entre eles é que no Scrum os papeis necessários para o desenvolvimento do projeto são bem definidos, algo que não acontece no Kanban, onde cabe ao time definir os papeis necessários para o processo de desenvolvimento.",
"resposta": true,
"justificativa": "“Quais são os papéis que existem em Kanban? Ao contrário de Scrum, Kanban não define uma lista fixa de papéis. Cabe ao time e à organização definir os papéis que existirão no processo de desenvolvimento, tais como Dono do Produto, Testadores, etc.” (Valente, Engenharia de Software Moderna, 2020, Capítulo 2.5.3)"
},
{
"id": 41,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "No Backlog do Produto também podem ser cadastrados bugs, principalmente aqueles mais complexos que consequentemente levarão mais dias para serem resolvidos, e também podem ser incluídas melhorias em histórias já implementadas.",
"resposta": true,
"justificativa": "“Além de histórias, quais outros itens podem fazer parte do Backlog do Produto? Também podem ser cadastrados no Backlog do Produto itens como bugs — principalmente aqueles mais complexos e que demandam dias para serem resolvidos — e também melhorias em histórias já implementadas.” (Valente, Engenharia de Software Moderna, 2020, Capítulo 2.4.5)"
},
{
"id": 42,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Os Requisitos funcionais definem o que um sistema deve fazer, ou seja, quais funcionalidades ou serviços ele deve implementar. Já os requisitos não-funcionais definem como um sistema deve operar, sob quais restrições e com qual qualidade de serviço.",
"resposta": true,
"justificativa": "1.2.1 Engenharia de Requisitos 🔗\n\nOs requisitos de um sistema definem o que ele deve fazer e como ele deve operar. Assim, a Engenharia de Requisitos inclui o conjunto de atividades realizadas com o objetivo de definir, analisar, documentar e validar os requisitos de um sistema. Em uma primeira classificação, os requisitos podem ser funcionais ou não-funcionais.\n\nRequisitos funcionais definem o que um sistema deve fazer; isto é, quais funcionalidades ou serviços ele deve implementar.\n\nJá os requisitos não-funcionais definem como um sistema deve operar, sob quais restrições e com qual qualidade de serviço. São exemplos de requisitos não-funcionais: desempenho, disponibilidade, tolerância a falhas, segurança, privacidade, interoperabilidade, capacidade, manutenibilidade e usabilidade."
},
{
"id": 43,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Em um sistema de Home-banking, ser tolerante a falhas é um requisito do tipo funcional na engenharia de requisito.",
"resposta": false,
"justificativa": "São exemplos de requisitos não-funcionais: desempenho, disponibilidade, tolerância a falhas, segurança, privacidade, interoperabilidade, capacidade, manutenibilidade e usabilidade. (1.2.1 Engenharia de requisitos)"
},
{
"id": 44,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Segundo Brooks, a complexidade é uma das dificuldades essenciais do desenvolvimento de software.",
"resposta": true,
"justificativa": "Segundo Brooks, as dificuldades essenciais são as seguintes:\n\nComplexidade: dentre as construções que o homem se propõe a realizar, software é uma das mais desafiadoras e mais complexas que existem. Na verdade, como dissemos antes, mesmo construções de engenharia tradicional, como um satélite, uma usina nuclear ou um foguete, são cada vez mais dependentes de software.\n\nConformidade: pela sua natureza software tem que se adaptar ao seu ambiente, que muda a todo momento no mundo moderno. Por exemplo, se as leis para recolhimento de impostos mudam, normalmente espera-se que os sistemas sejam rapidamente adaptados à nova legislação. Brooks comenta que isso não ocorre, por exemplo, na Física, pois as leis da natureza não mudam de acordo com os caprichos dos homens.\n\nFacilidade de mudanças: que consiste na necessidade de evoluir sempre, incorporando novas funcionalidades. Na verdade, quanto mais bem sucedido for um sistema de software, mais demanda por mudanças ele recebe.\n\nInvisibilidade: devido à sua natureza abstrata, é difícil visualizar o tamanho e consequentemente estimar o esforço de construir um sistema de software."
},
{
"id": 45,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Testes podem ser usados tanto para verificação como para validação de sistemas. Na verificação, eles tem como objetivo garantir que um sistema atende à sua especificação. Já na validação, o objetivo é garantir que um sistema atende às necessidades de seus clientes.",
"resposta": true,
"justificativa": "Segundo, testes podem ser usados tanto para verificação como para validação de sistemas. Verificação tem como o objetivo garantir que um sistema atende à sua especificação. Já com validação, o objetivo é garantir que um sistema atende às necessidades de seus clientes. A diferença entre os conceitos só faz sentido porque pode ocorrer de a especificação de um sistema não expressar as necessidades de seus clientes. Por exemplo, essa diferença pode ser causada por um erro na fase de levantamento de requisitos; isto é, os desenvolvedores não entenderam os requisitos do sistema ou o cliente não foi capaz de explicá-los precisamente.\n\nExistem duas frases, muito usadas, que resumem as diferenças entre verificação e validação:\n\nVerificação: estamos implementando o sistema corretamente? Isto é, de acordo com seus requisitos.\n\nValidação: estamos implementando o sistema correto? Isto é, aquele que os clientes ou o mercado está querendo. (1.2.4 Testes de Software )"
},
{
"id": 46,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "A migração de um sistema de Python 2.7 para Python 3.0 é um tipo de manutenção\npreventiva.",
"resposta": false,
"justificativa": "Por sua vez, manutenção preventiva tem como objetivo corrigir bugs latentes no código, que ainda não causaram falhas junto aos usuários do sistema.\n\nMundo Real: Um exemplo de manutenção preventiva foram as atividades de manutenção realizadas por diversas empresas antes da virada do último milênio, de 1999 para 2000. Nessa época, diversos sistemas armazenavam o ano de uma data com dois dígitos, isto é, as datas tinham o formato DD-MM-AA. As empresas ficaram receosas de que, em 2000 e nos anos seguintes, algumas operações envolvendo datas retornassem valores incorretos, pois uma subtração 00 - 99, por exemplo, poderia dar um resultado inesperado. As empresas montaram então grupos de trabalho para realizar manutenções em seus sistemas e converter todas as datas para o formato DD-MM-AAAA. Como essas atividades foram realizadas antes da virada do milênio, elas são um exemplo de manutenção preventiva.\n\nManutenção adaptativa tem como objetivo adaptar um sistema a uma mudança em seu ambiente, incluindo tecnologia, legislação, regras de integração com outros sistemas ou demandas de novos clientes. Como exemplos de manutenção adaptativa podemos citar:\n\nA migração de um sistema de Python 2.7 para Python 3.0.\n\nA customização de um sistema para atender a requisitos de um novo cliente — isto é, quando se instala um sistema em um cliente é comum ter que realizar algumas alterações, para atender a particularidades de seu negócio.\n\nA adaptação de um sistema para atender a uma mudança de legislação ou outra mudança contextual."
},
{
"id": 47,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "A inclusão de novos desenvolvedores em um projeto que está atrasado contribui para torná-lo ainda mais atrasado.",
"resposta": true,
"justificativa": "Existe uma frase muito conhecida, também de Frederick Brooks, que captura uma peculiaridade de projetos de software. Segundo Brooks:\n\nA inclusão de novos desenvolvedores em um projeto que está atrasado contribui para torná-lo ainda mais atrasado.\n\nEssa frase ficou tão famosa que ela é hoje conhecida como Lei de Brooks. Basicamente, esse efeito acontece porque os novos desenvolvedores terão primeiro que entender e compreender todo o sistema, sua arquitetura e seu projeto (design), antes de começarem a produzir código útil. Além disso, equipes maiores exigem um maior esforço de comunicação e coordenação para tomar e explicar decisões. Por exemplo, se um time tem 3 desenvolvedores (d1, d2, d3), existem 3 canais de comunicação possíveis (d1-d2, d1-d3 e d2-d3); se ele cresce para 4 desenvolvedores, o número de canais duplica, para 6 canais. Se ele cresce para 10 desenvolvedores, passam a existir 45 canais de comunicação. Por isso, modernamente, software é desenvolvido em times pequenos, com uma dezena de engenheiros, se tanto. (1.2.7 Gerência de Projetos)"
},
{
"id": 48,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "De acordo com as práticas de programação do Extreme Programming (XP), caso um desenvolvedor encontre um bug em um trecho do sistema implementado por outro colega, ele não deve alterá-lo diretamente; visando manter a organização do projeto, ele precisa primeiro relatar o problema ao líder do time ou solicitar a autorização do autor original do código antes de realizar a correção.",
"resposta": false,
"justificativa": "A afirmativa é falsa, pois inverte totalmente a filosofia da prática. O XP remove a burocracia de \"donos\" de módulos de código. Conforme o livro-texto:\n\"A ideia é que qualquer desenvolvedor — ou par de desenvolvedores trabalhando junto — pode modificar qualquer parte do código, seja para implementar uma nova feature, para corrigir um bug ou para aplicar um refactoring.\"\n\"Por exemplo, se você descobriu um bug em algum ponto do código, vá em frente e corrija-o. Para isso, você não precisa de autorização de quem implementou esse código ou de quem realizou a última manutenção nele.\"\nReferência Bibliográfica: VALENTE, Marco Tulio. Engenharia de Software Moderna. Capítulo 2: Processos, Seção 2.3.4 (Práticas de Programação)."
},
{
"id": 49,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Segundo as práticas de gerenciamento de projetos do Extreme Programming (XP), é mais vantajoso e seguro firmar contratos de desenvolvimento com escopo fechado, pois eles estabelecem uma visão concreta das entregas e definem com precisão os requisitos e prazos iniciais, evitando que novas demandas inesperadas desorganizem o andamento do projeto.",
"resposta": false,
"justificativa": "A afirmativa é falsa, pois a filosofia ágil do XP argumenta exatamente o oposto: prender-se a um escopo fechado inicial é altamente arriscado. Conforme o livro-texto:\n\"Em contratos com escopo fechado, a empresa contratante define, mesmo que de forma mínima, os requisitos do sistema e a empresa contratada define um preço e um prazo de entrega. XP advoga que esses contratos são arriscados, pois os requisitos mudam e nem mesmo o cliente sabe antecipadamente o que ele quer que o sistema faça, de modo preciso.\"\n\"Assim, contratos com escopo fixo podem fazer com que a contratada entregue um sistema com problemas de qualidade e mesmo com alguns requisitos implementados de modo parcial ou com bugs, apenas para não ter que pagar possíveis multas.\"\n\"Na verdade, contratos com escopo aberto são mais compatíveis com os princípios do Manifesto Ágil, que explicitamente valoriza 'colaboração com o cliente, mais do que negociação de contratos'.\"\nReferência Bibliográfica: VALENTE, Marco Tulio. Engenharia de Software Moderna. Capítulo 2: Processos, Seção 2.3.5 (Práticas de Gerenciamento de Projetos)."
},
{
"id": 50,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Embora a adoção da Programação em Pares (Pair Programming) no método Extreme Programming (XP) traga custos econômicos explícitos — visto que dois programadores são alocados para uma tarefa que, a princípio, poderia ser executada por apenas um —, essa prática se justifica pela premissa de que o trabalho conjunto produz um código e um design de maior qualidade, tornando o sistema consideravelmente menos suscetível a defeitos e bugs.",
"resposta": true,
"justificativa": "\"Com programação em pares espera-se melhorar a qualidade do código e do design, pois 'duas cabeças pensam melhor do que uma'.\"\n\"Por outro lado, existem também custos econômicos derivados da adoção de programação em pares, já que dois programadores estão sendo alocados para realizar uma tarefa que, a princípio, poderia ser realizada por apenas um.\"\nO livro cita ainda estudos reais onde os próprios desenvolvedores confirmam que os maiores benefícios são a \"redução no número de bugs (62%), [e a] produção de código de melhor qualidade (45%)\".\nReferência Bibliográfica: VALENTE, Marco Tulio. Engenharia de Software Moderna. Capítulo 2: Processos, Seção 2.3.4 (Práticas de Programação)."
},
{
"id": 51,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "No método Scrum, a reunião de Retrospectiva não é focada na inspeção técnica do código ou na demonstração das funcionalidades do produto construído, porém, ela é fundamental para a eficácia do desenvolvimento, pois tem o objetivo de refletir sobre o ciclo de trabalho recém-terminado e identificar oportunidades de melhoria contínua no processo, nos relacionamentos interpessoais e nas ferramentas utilizadas pela equipa.",
"resposta": true,
"justificativa": "\"A Retrospectiva é a última atividade de um sprint.\"\n\"Trata-se de uma reunião do time Scrum, com o objetivo de refletir sobre o sprint que está terminando e, se possível, identificar pontos de melhorias no processo, nas pessoas, nos relacionamentos e nas ferramentas usadas.\"\nReferência Bibliográfica: VALENTE, Marco Tulio. Engenharia de Software Moderna. Capítulo 2: Processos, Seção 2.4.3 (Outros Eventos)."
},
{
"id": 52,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "No Scrum, o Scrum Master exerce a função de líder técnico e gerente da equipe de desenvolvimento, sendo obrigatório que ele possua formação de nível superior na área de Computação para poder auxiliar a equipe na resolução direta de problemas complexos no código.",
"resposta": false,
"justificativa": "\"Por outro lado, ele não é um gerente de projeto tradicional. Por exemplo, ele não é o líder do time, pois todos em um time Scrum têm o mesmo nível hierárquico.\"\nO livro também é explícito quanto à necessidade de formação técnica:\n\"O Scrum Master precisa ter um diploma de nível superior em um curso da área de Computação? Não, pois sua função envolve remover impedimentos e assegurar que o time esteja seguindo os princípios de Scrum. Portanto, ele não é um resolvedor de problemas técnicos, tais como bugs, uso correto de frameworks, implementação de funcionalidades, etc.\"\nReferência Bibliográfica: VALENTE, Marco Tulio. Engenharia de Software Moderna. Capítulo 2: Processos, Seções 2.4.1 (Papéis) e 2.4.5 (Perguntas Frequentes)."
},
{
"id": 53,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "No framework Scrum, o papel de Dono do Produto (Product Owner) deve ser exercido obrigatoriamente por uma única pessoa, e nunca por um comitê. Essa restrição metodológica existe para garantir a centralização da visão do produto e a maximização do retorno sobre o investimento, evitando assim o \"design por comitê\", que frequentemente resulta em sistemas inflados com funcionalidades desnecessárias criadas apenas para satisfazer diferentes interesses de várias partes.",
"resposta": true,
"justificativa": "\"[O Dono do Produto] deve possuir a visão do produto que será construído, sendo responsável também por maximizar o retorno do investimento feito no projeto.\"\n\"O Dono do Produto pode ser um comitê? Em outras palavras, pode existir mais de um Dono de Produto em um time Scrum? A resposta é não. Apenas um membro do time exerce essa função.\"\n\"O objetivo é evitar decisões por comitê, que tendem a gerar produtos lotados de funcionalidades, mas que foram implementadas apenas para atender a determinados membros do comitê.\"\nReferência Bibliográfica: VALENTE, Marco Tulio. Engenharia de Software Moderna. Capítulo 2: Processos, Seções 2.4.1 (Papéis) e 2.4.5 (Perguntas Frequentes)."
},
{
"id": 54,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "No método Kanban, o Limite WIP (Work in Progress) atua como uma trava de segurança que estabelece o número máximo de tarefas permitidas simultaneamente em cada passo do quadro, tendo como objetivo direto evitar a sobrecarga da equipe e servindo como um instrumento metodológico legítimo para que os desenvolvedores recusem demandas extras \"empurradas\" de forma irrealista pela gerência da organização.",
"resposta": true,
"justificativa": "\"Para evitar a segunda situação — sobrecarga de trabalho — Kanban propõe um limite máximo de tarefas que podem estar em cada um dos passos de um Quadro Kanban. Esse limite é conhecido pelo nome Limite WIP...\"\n\"Kanban reconhece esse problema e, para que ele não ocorra, cria uma 'trava' automática para impedir que os times aceitem trabalhos além da sua capacidade de entrega.\"\n\"Essas 'travas', que são os limites WIP, servem para uso interno do time e, mais importante ainda, para uso externo. Ou seja, elas são o instrumento de que um time dispõe para recusar trabalho extra que está sendo 'empurrado' de cima para baixo por gerentes da organização, por exemplo.\"\nReferência Bibliográfica: VALENTE, Marco Tulio. Engenharia de Software Moderna. Capítulo 2: Processos, Seção 2.5 (Kanban)."
},
{
"id": 55,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "O fluxo de tarefas no Quadro Kanban opera sob um sistema de empurrar (push), o que significa que, assim que um desenvolvedor finaliza uma atividade em uma etapa (como \"Especificação\"), ele deve imediatamente empurrá-la para a coluna da próxima etapa (como \"Implementação\") e atribuí-la a outro colega, garantindo assim que a linha de produção do software nunca pare.",
"resposta": false,
"justificativa": "A afirmativa é falsa, pois inverte o princípio de fluxo do método, que é baseado em \"puxar\" o trabalho apenas quando há capacidade, e não em empurrá-lo. Conforme o livro-texto:\n\"Além disso, cada coluna é dividida em duas subcolunas: 'em execução' e 'concluídas'.\"\n\"As tarefas concluídas em um passo estão aguardando serem puxadas, por um membro do time, para o próximo passo. Por isso, Kanban é chamado de um sistema pull.\"\nReferência Bibliográfica: VALENTE, Marco Tulio. Engenharia de Software Moderna. Capítulo 2: Processos, Seção 2.5 (Kanban)."
},
{
"id": 56,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "O principal objetivo do Limite WIP (Work in Progress) no método Kanban é limitar a quantidade de tarefas realizadas simultaneamente em cada etapa do processo, evitando a sobrecarga dos desenvolvedores e promovendo um fluxo de trabalho contínuo e sustentável.",
"resposta": true,
"justificativa": "“Kanban propõe um limite máximo de tarefas que podem estar em cada um dos passos de um Quadro Kanban. Esse limite é conhecido pelo nome Limite WIP, isto é, trata-se do limite máximo de cartões presentes em cada passo” Engenharia de Software Moderna, Cap. 2.5."
},
{
"id": 57,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "XP é um método ágil voltado exclusivamente para projetos de desenvolvimento de software. Para isso, XP inclui um conjunto de práticas de programação, como testes de unidade, programação em pares, integração contínua e design incremental. Já Scrum é um método ágil para gerenciamento de projetos, que não necessariamente precisam ser projetos de desenvolvimento de software.",
"resposta": true,
"justificativa": "\"XP é um método ágil voltado exclusivamente para projetos de desenvolvimento de software. Para isso, XP inclui um conjunto de práticas de programação, como testes de unidade, programação em pares, integração contínua e design incremental\" Engenharia de Software Moderna, Cap. 2.4\n\n\"Scrum é um método ágil para gerenciamento de projetos, que não necessariamente precisam ser projetos de desenvolvimento de software. Por exemplo, a escrita deste livro — como comentaremos daqui a pouco — é um projeto que está sendo realizado usando conceitos de Scrum. Tendo um foco mais amplo que XP, Scrum não propõe nenhuma prática de programação.\" Engenharia de Software Moderna, Cap. 2.4"
},
{
"id": 58,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Um dos valores fundamentais do Manifesto Ágil estabelece que uma equipe de desenvolvimento deve valorizar mais o software em funcionamento do que uma documentação abrangente.",
"resposta": true,
"justificativa": "\"Software em funcionamento mais que documentação abrangente\" Engenharia de Software Moderna, Cap. 2.2"
},
{
"id": 59,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "A Engenharia de Requisitos consiste no conjunto de atividades sistemáticas relacionadas com a descoberta, análise, especificação e manutenção dos requisitos de um sistema ao longo do seu ciclo de vida.",
"resposta": true,
"justificativa": "“Engenharia de Requisitos é o nome que se dá ao conjunto de atividades relacionadas com a descoberta, análise, especificação e manutenção dos requisitos de um sistema.” Engenharia de Software Moderna, Cap. 3.2"
},
{
"id": 60,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Devido à alta volatilidade das necessidades dos clientes, especificações exaustivas de requisitos no início do projeto tornaram-se raras em sistemas comerciais. Para solucionar esse problema, difundiu-se o uso de Histórias de Usuários, uma técnica pragmática tradicionalmente dividida em três componentes: Conversas, Desenvolvimento e Confirmação.",
"resposta": false,
"justificativa": "\"História de Usuário = Cartão + Conversas + Confirmação\" Cap. 3.3"
},
{
"id": 61,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Casos de uso (use cases) são documentos textuais de especificação de requisitos elaborados pelos desenvolvedores, por exemplo, a partir de entrevistas com os usuários. Por serem documentos técnicos restritos à equipe de desenvolvimento para guiar a criação do produto, os usuários do sistema não devem ter acesso à leitura nem à validação desses casos de uso.",
"resposta": false,
"justificativa": "\"Apesar de escritos pelos desenvolvedores, casos de uso podem ser lidos, entendidos e validados pelos usuários, antes de as fases de design e implementação terem início.\" Engenharia de Software Moderna, Cap. 3.3"
},
{
"id": 62,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Os requisitos não funcionais de um software não possuem relação direta com as qualidades do produto final, pois dizem respeito exclusivamente às ferramentas e restrições do ambiente de desenvolvimento.",
"resposta": false,
"justificativa": "\"Já os requisitos não-funcionais estão relacionados com a qualidade do serviço prestado pelo sistema, incluindo características como desempenho, disponibilidade, níveis de segurança, portabilidade, privacidade, consumo de memória e disco, dentre outros.\" Engenharia de Software Moderna, Cap. 3.1"
},
{
"id": 63,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Os testes constituem a principal ferramenta para verificar se a implementação de um software atende de forma correta e precisa aos requisitos especificados.",
"resposta": true,
"justificativa": "\"Requisitos devem ser verificáveis, isto é, deve ser possível testar se os requisitos estão sendo atendidos. Um contra-exemplo é um requisito que apenas requer que o sistema seja amigável. Como os desenvolvedores vão saber se estão atendendo a essa expectativa dos clientes?\"Engenharia de Software Moderna, Cap. 3.2"
},
{
"id": 64,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Segundo o SWEBOK, Engenharia de Requisitos é uma das 12 áreas de\nconhecimento que compõem a Engenharia de Software.",
"resposta": true,
"justificativa": "ver a lista completa das \"12 áreas de\nconhecimento\" na Seção 1.2 (\"O que se Estuda em Engenharia de\nSoftware?\")."
},
{
"id": 65,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Os requisitos funcionais de um software definem o conjunto de recursos, serviços e comportamentos do sistema, especificando o que o produto deve fazer.",
"resposta": true,
"justificativa": "\" \"o que um sistema deve fazer\", ou seja, suas funcionalidades — são chamados de Requisitos Funcionais.\" Engenharia de Software Moderna, Cap. 3.1"
},
{
"id": 66,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "No livro Engenharia de Software Moderna, de Marco Tulio Valente,\no termo 'bug' é tratado como sinônimo de defeito.",
"resposta": true,
"justificativa": "\"defeito, erro, falta e bug são sinônimos\""
},
{
"id": 67,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Na classificação alternativa de Lientz & Swanson, citada por Valente, a manutenção perfectiva corresponde ao que o livro chama de refactoring.",
"resposta": false,
"justificativa": "(2) Perfectiva, refere-se à adição de novas funcionalidades; neste livro, optamos por chamá-la de manutenção evolutiva; [...] (4) Preventiva, refere-se a mudanças que visam incrementar a manutenibilidade de um sistema; neste livro, optamos pelo termo mais comum hoje em dia, que é refactoring. VALENTE, Marco Túlio. Engenharia de Software Moderna: Princípios e Práticas para Desenvolvimento de Software com Produtividade. 1. ed. Editora Independente, 2020. Cap. 1, Seção 1.2.5 (Manutenção e Evolução de Software)."
},
{
"id": 68,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "As correções feitas em sistemas antes do ano 2000 para evitar o chamado Bug do Milênio são um exemplo de manutenção corretiva, pois tratavam de bugs já reportados pelos usuários.",
"resposta": false,
"justificativa": "\"Por sua vez, manutenção preventiva tem como objetivo corrigir bugs latentes no código, que ainda não causaram falhas junto aos usuários do sistema.\" e \"Como essas atividades foram realizadas antes da virada do milênio, elas são um exemplo de manutenção preventiva.\"\nVALENTE, Marco Túlio. Engenharia de Software Moderna: Princípios e Práticas para Desenvolvimento de Software com Produtividade. 1. ed. Editora Independente, 2020. Cap. 1, Seção 1.2.5 (Manutenção e Evolução de Software)."
},
{
"id": 69,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Se todos os testes de uma suíte extensa passam com sucesso, ainda assim não é possível afirmar que o sistema está livre de bugs.",
"resposta": true,
"justificativa": "\"Testes de software mostram a presença de bugs, mas não a sua ausência.\" (Dijkstra apud Valente)\nVALENTE, Marco Túlio. Engenharia de Software Moderna: Princípios e Práticas para Desenvolvimento de Software com Produtividade. 1. ed. Editora Independente, 2020. Cap. 1, Seção 1.2.4 (Testes de Software)."
},
{
"id": 70,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Um sistema que implementa fielmente sua especificação, mas não resolve o problema real do cliente, seria aprovado na verificação e reprovado na validação.",
"resposta": true,
"justificativa": "\"Verificação tem como o objetivo garantir que um sistema atende à sua especificação. Já com validação, o objetivo é garantir que um sistema atende às necessidades de seus clientes.\"\nVALENTE, Marco Túlio. Engenharia de Software Moderna: Princípios e Práticas para Desenvolvimento de Software com Produtividade. 1. ed. Editora Independente, 2020. Cap. 1, Seção 1.2.4 (Testes de Software)."
},
{
"id": 71,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Um compilador que produz mensagens de erro obscuras é um exemplo de dificuldade acidental, segundo Frederick Brooks.",
"resposta": true,
"justificativa": "Ideia central (paráfrase): o livro cita, entre os exemplos de dificuldades acidentais, um compilador com mensagens de erro obscuras. Trecho a copiar: parágrafo sobre dificuldades acidentais na subseção \"Não existe bala de prata\". VALENTE (2020), Cap. 1, seção 1.1; BROOKS, F. O Mítico Homem-Mês. Alta Books, 2018."
},
{
"id": 72,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Por utilizarem tecnologias ultrapassadas, os sistemas legados são irrelevantes para as organizações e sua manutenção costuma ser simples e de baixo risco.",
"resposta": false,
"justificativa": "\"Por esse motivo, a manutenção desses sistemas costuma ser mais custosa e arriscada. Porém, é importante ressaltar que legado não significa irrelevante, pois muitas vezes esses sistemas realizam operações críticas para seus clientes.\"\nVALENTE, Marco Túlio. Engenharia de Software Moderna: Princípios e Práticas para Desenvolvimento de Software com Produtividade. 1. ed. Editora Independente, 2020. Cap. 1, Seção 1.2.5 (Manutenção e Evolução de Software)."
},
{
"id": 73,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Refactoring é uma modificação no software que altera o seu comportamento para incluir novas funcionalidades.",
"resposta": false,
"justificativa": "Definição de refactoring e de manutenção evolutiva na seção 1.2.5. VALENTE (2020), Cap. 1, seção 1.2.5."
},
{
"id": 74,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Na Reunião Diária do Scrum, cada membro do time responde o que fez no dia anterior, o que pretende fazer no dia e se está enfrentando algum impedimento.",
"resposta": true,
"justificativa": "primeiro parágrafo da seção 2.4.3. VALENTE (2020), Cap. 2, seção 2.4.3."
},
{
"id": 75,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Ao tratar de Prática Profissional, Valente menciona o Código de Ética da SBC, cujo primeiro artigo estabelece como dever do profissional contribuir para o bem-estar social e promover a inclusão de todos os setores da sociedade.",
"resposta": true,
"justificativa": "\"Art. 1º: Contribuir para o bem-estar social, promovendo, sempre que possível, a inclusão de todos os setores da sociedade.\"\nVALENTE, Marco Túlio. Engenharia de Software Moderna: Princípios e Práticas para Desenvolvimento de Software com Produtividade. 1. ed. Editora Independente, 2020. Cap. 1, Seção 1.2.11 (Prática Profissional)."
},
{
"id": 76,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Assim como em Scrum, em Kanban é obrigatório que o time tenha um Dono do Produto e um Scrum Master.",
"resposta": false,
"justificativa": "Kanban não define uma lista fixa de papéis\". VALENTE (2020), Cap. 2, seção 2.5.3."
},
{
"id": 77,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Em processos ágeis, o cliente só valida o sistema no final do projeto, depois que todas as funcionalidades foram implementadas.",
"resposta": false,
"justificativa": "parágrafo que descreve os ciclos curtos e iterativos, na seção 2.2. VALENTE (2020), Cap. 2, seção 2.2."
},
{
"id": 78,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Na programação em pares de XP, dois desenvolvedores trabalham juntos no mesmo teclado e monitor, um como líder (driver) e outro como navegador.",
"resposta": true,
"justificativa": "parágrafo de \"Programação em Pares\" na seção 2.3.4. VALENTE (2020), Cap. 2, seção 2.3.4; BECK, K.; ANDRES, C. Extreme Programming Explained. 2. ed. Addison-Wesley, 2004."
},
{
"id": 79,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Na prática de Propriedade Coletiva do Código do XP, um desenvolvedor precisa da autorização de quem escreveu um trecho de código antes de modificá-lo.",
"resposta": false,
"justificativa": "\"A ideia é que qualquer desenvolvedor — ou par de desenvolvedores trabalhando junto — pode modificar qualquer parte do código, seja para implementar uma nova feature, para corrigir um bug ou para aplicar um refactoring.\"\nVALENTE, Marco Túlio. Engenharia de Software Moderna: Princípios e Práticas para Desenvolvimento de Software com Produtividade. 1. ed. Editora Independente, 2020. Cap. 2, Seção 2.3.4 (Práticas de Programação)."
},
{
"id": 80,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "O objetivo de um Produto Mínimo Viável (MVP) é testar uma hipótese de negócio com o mínimo de funcionalidades necessárias.",
"resposta": true,
"justificativa": "\"o objetivo de um MVP é testar uma hipótese de negócio\". VALENTE (2020), Cap. 3, seção 3.5; RIES, E. The Lean Startup. Crown Business, 2011."
},
{
"id": 81,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Em XP, um projeto é organizado em releases de alguns meses, compostas por iterações de algumas semanas, que por sua vez se dividem em tarefas de alguns dias.",
"resposta": false,
"justificativa": "\"Resumindo, um projeto XP é organizado em: releases, que são conjunto de iterações, com duração total de alguns meses. Iterações [...] com duração total de algumas semanas. Tarefas, com duração de alguns dias.\"\nVALENTE, Marco Túlio. Engenharia de Software Moderna: Princípios e Práticas para Desenvolvimento de Software com Produtividade. 1. ed. Editora Independente, 2020. Cap. 2, Seção 2.3.3 (Extreme Programming)."
},
{
"id": 82,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "No Planning Poker, após ler a história para os desenvolvedores, o representante dos clientes é quem define a estimativa de tamanho em story points.",
"resposta": false,
"justificativa": "\"Feito isso, cada desenvolvedor faz sua estimativa para o tamanho da história, de forma independente. Depois disso, eles ao mesmo tempo levantam cartões com a estimativa que pensaram, em story points.\"\nVALENTE, Marco Tulio. Engenharia de Software Moderna: Princípios e Práticas para Desenvolvimento de Software com Produtividade. 1. ed. Editora Independente, 2020. Cap. 2, Seção 2.3.3."
},
{
"id": 83,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Em uma história de usuário, a Confirmação é um teste de unidade automatizado escrito pelos desenvolvedores.",
"resposta": false,
"justificativa": "item \"Confirmação\" na seção 3.3. VALENTE (2020), Cap. 3, seção 3.3; COHN, M. User Stories Applied. Addison-Wesley, 2004."
},
{
"id": 84,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Em um sistema de home-banking, \"o sistema deve ter 99,9% de disponibilidade\" é um exemplo de requisito não-funcional.",
"resposta": true,
"justificativa": "A disponibilidade de 99,9% funciona como restrição ao funcionamento do sistema.\nexemplo do home-banking na seção 3.1. VALENTE (2020), Cap. 3, seção 3.1."
},
{
"id": 85,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "O Kanban não define uma lista fixa de papéis e, embora não prescreva eventos como reuniões diárias e retrospectivas, também não os proíbe; cabe ao time decidir.",
"resposta": true,
"justificativa": "\"Ao contrário de Scrum, Kanban não define uma lista fixa de papéis. [...] apesar de Kanban não prescrever a realização desses eventos. Porém, também não há um veto explícito aos mesmos. Cabe ao time decidir.\"\nVALENTE, Marco Túlio. Engenharia de Software Moderna: Princípios e Práticas para Desenvolvimento de Software com Produtividade. 1. ed. Editora Independente, 2020. Cap. 2, Seção 2.5.3 (Perguntas Frequentes)."
},
{
"id": 86,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Por valorizarem software em funcionamento mais do que documentação abrangente, os métodos ágeis são a escolha mais indicada para sistemas médicos e de transporte que exigem certificação externa.",
"resposta": false,
"justificativa": "\"[...] sistemas cujas falhas podem causar a morte de seres humanos, como aqueles das áreas médicas e de transporte, costumam demandar certificação por uma entidade externa, que pode exigir uma documentação detalhada, além do código fonte.\"\nVALENTE, Marco Túlio. Engenharia de Software Moderna: Princípios e Práticas para Desenvolvimento de Software com Produtividade. 1. ed. Editora Independente, 2020. Cap. 2, Seção 2.6 (Quando Não Usar Métodos Ágeis)."
},
{
"id": 87,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "A Sprint Retrospective é a última reunião do sprint e tem como foco o processo de trabalho do time, buscando lições aprendidas e melhorias para o próximo sprint.",
"resposta": true,
"justificativa": "\"A Retrospectiva é a última atividade de um sprint. Trata-se de uma reunião do time Scrum, com o objetivo de refletir sobre o sprint que está terminando e, se possível, identificar pontos de melhorias no processo, nas pessoas, nos relacionamentos e nas ferramentas usadas.\"\nVALENTE, Marco Túlio. Engenharia de Software Moderna: Princípios e Práticas para Desenvolvimento de Software com Produtividade. 1. ed. Editora Independente, 2020. Cap. 2, Seção 2.4.3 ."
},
{
"id": 88,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Requisitos não funcionais definem restrições de qualidade que o sistema deve atender, como desempenho, disponibilidade, segurança e usabilidade.",
"resposta": true,
"justificativa": "Valente (2020, Cap. 3, Seção 3.1) diferencia requisitos funcionais, que dizem o que o sistema faz, de não funcionais, que dizem como ele deve operar em termos de qualidade."
},
{
"id": 89,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Histórias de usuário devem ser especificações completas e detalhadas, de modo a dispensar conversas entre desenvolvedores e o Product Owner.",
"resposta": false,
"justificativa": "Valente (2020, Cap. 3, Seção 3.3) apresenta os \"3Cs\" de Ron Jeffries (Cartão, Conversas e Confirmação). Neles, a história funciona como um lembrete para conversas futuras, e não como um documento completo."
},
{
"id": 90,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "A fronteira entre requisitos funcionais e não funcionais é absoluta e imutável. Um requisito de segurança (não funcional) refere-se estritamente à qualidade do sistema e, sob nenhuma hipótese, deve gerar novos requisitos funcionais específicos.",
"resposta": false,
"justificativa": "SOMMERVILLE, Ian. Engenharia de Software. 9ª ed. São Paulo: Pearson Prentice Hall, 2011:  \"Na realidade, a distinção entre requisitos funcionais e não funcionais não é tão clara quanto essas definições sugerem. Um requisito de usuário voltado à segurança, por exemplo, pode parecer ser não funcional, mas, quando detalhado, muitas vezes gera requisitos funcionais que exigem a inclusão de novas funcionalidades no sistema.\""
},
{
"id": 91,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "No acrônimo INVEST, usado para avaliar histórias de usuário, a letra \"T\" indica que uma história deve ser testável, ou seja, possuir testes de aceitação.",
"resposta": true,
"justificativa": "Valente (2020, Cap. 3, Seção 3.3) descreve o INVEST como Independente, Negociável, Valiosa, Estimável, Sucinta (Small) e Testável."
},
{
"id": 92,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "O Produto Mínimo Viável (MVP) é indicado principalmente quando os requisitos já são bem conhecidos e o mercado para o produto está garantido.",
"resposta": false,
"justificativa": "Valente (2020, Cap. 3, Seção 3.5) apresenta o MVP, conceito de Eric Ries (Lean Startup), como um meio de testar hipóteses de negócio com o menor esforço possível em cenários de incerteza."
},
{
"id": 93,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Testes A/B comparam duas versões de um sistema expostas a grupos distintos de usuários e exigem um número suficiente de usuários para que os resultados tenham significância estatística.",
"resposta": true,
"justificativa": "Valente (2020, Cap. 3, Seção 3.6) explica que testes A/B dividem os usuários entre a versão de controle (A) e a de tratamento (B) e dependem de uma amostra grande o bastante para conclusões confiáveis."
},
{
"id": 94,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Casos de uso devem descrever detalhes de implementação do sistema, como classes, tabelas do banco de dados e tecnologias utilizadas.",
"resposta": false,
"justificativa": "Valente (2020, Cap. 3, Seção 3.4) descreve casos de uso como a interação entre um ator e o sistema para atingir um objetivo, em linguagem do domínio e sem detalhes de implementação."
},
{
"id": 95,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "segundo Brooks em seu ensaio intitulado \"ão Existe Bala de Prata: Essência e Acidentes em Engenharia de Software\" ele argumenta sobre as dificuldades particulares da área de software: as dificuldades essenciais e as dificuldades acidentais. As essenciais, embora sejam particulares da área, podem ser superadas perante melhores tecnologias. E as dificuldades acidentais decorrem de problemas tecnológicos que podem ser resolvidos com bom treinamento e as tecnologias corretas.",
"resposta": false,
"justificativa": "Segundo Brooks, existem dois tipos de dificuldades em desenvolvimento de software: dificuldades essenciais e dificuldades acidentais. As essenciais são da natureza da área e dificilmente serão superadas por qualquer nova tecnologia ou método que se invente. Ainda segundo Brooks, desenvolvimento de software enfrenta também dificuldades acidentais. No entanto, elas estão associadas a problemas tecnológicos, que os Engenheiros de Software podem resolver, se devidamente treinados e caso tenham acesso às devidas tecnologias e recursos. Como exemplo, podemos citar as seguintes dificuldades: um compilador que produz mensagens de erro obscuras, uma IDE que possui muitos bugs e frequentemente sofre travamentos, um framework que não possui documentação, uma aplicação Web com uma interface pouco intuitiva, etc. Todas essas dificuldades dizem respeito à solução adotada e, portanto, não são uma característica inerente dos sistemas mencionados."
},
{
"id": 96,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "O Scrum propõe a realização de Reuniões Diárias (standup meetings). Se durante essa reunião dois desenvolvedores perceberem que vão começar a modificar o mesmo trecho de código, eles devem estender a duração da reunião e aproveitar a presença de todos para discutir e resolver detalhadamente como evitarão esse conflito de integração.",
"resposta": false,
"justificativa": "\"Por exemplo, dois desenvolvedores podem tomar ciência, durante a reunião diária, que eles vão começar a modificar o mesmo trecho de código. Portanto, seria recomendável que eles se reunissem, separadamente do resto do time, para discutir essas modificações. E, com isso, minimizar as chances de possíveis conflitos de integração.\" (VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020, Capítulo 2 - Processos)."
},
{
"id": 97,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "O software diferencia-se de produtos físicos de engenharia devido a características como a \"conformidade\" e a \"invisibilidade\", o que obriga o software a se adaptar continuamente a mudanças legais e ambientais, além de dificultar severamente a estimativa de esforço.",
"resposta": true,
"justificativa": "Marco Tulio Valente. Engenharia de Software Moderna: Princípios e Práticas para Desenvolvimento de Software com Produtividade. . Belo Horizonte: Independente. 2020 cap 1: \"Conformidade: pela sua natureza software tem que se adaptar ao seu ambiente, que muda a todo momento... Invisibilidade: devido à sua natureza abstrata, é difícil visualizar o tamanho e consequentemente estimar o esforço de construir um sistema.\""
},
{
"id": 98,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "O método Kanban utiliza limites de WIP (Work in Progress) para controlar a quantidade de tarefas em cada etapa do fluxo, o que previne a sobrecarga da equipe e ajuda a expor gargalos no processo de desenvolvimento.",
"resposta": true,
"justificativa": "Por fim, resta explicar o conceito de Limites WIP (Work in Progress). Via de regra, métodos de gerenciamento de projetos têm como objetivo garantir um ritmo sustentável de trabalho. Para isso, deve-se evitar duas situações extremas: (1) o time ficar ocioso boa parte do tempo, sem tarefa para realizar; ou (2) o time ficar sobrecarregado de trabalho e, por isso, não conseguir produzir software de qualidade. Para evitar a segunda situação — sobrecarga de trabalho — Kanban propõe um limite máximo de tarefas que podem estar em cada um dos passos de um Quadro Kanban. Esse limite é conhecido pelo nome Limite WIP, isto é, trata-se do limite máximo de cartões presentes em cada passo, contando aqueles na primeira coluna (em andamento) e aqueles na segunda coluna (concluídos) do passo. A exceção é o último passo, no qual o WIP aplica-se apenas à primeira subcoluna, já que não faz sentido aplicar um limite ao número de tarefas concluídas pelo time de desenvolvimento.\n\nApenas reforçando, o objetivo dos limites WIP é evitar que os times Kanban fiquem sobrecarregados de trabalho. Quando um desenvolvedor tem muitas tarefas para realizar — porque os limites WIP não estão sendo respeitados — a tendência é que ele não consiga concluir nenhuma dessas tarefas com qualidade. Como usual em qualquer atividade humana, quando assumimos muitos compromissos, a qualidade de nossas entregas cai muito. Kanban reconhece esse problema e, para que ele não ocorra, cria uma trava automática para impedir que os times aceitem trabalhos além da sua capacidade de entrega. Essas travas, que são os limites WIP, servem para uso interno do time e, mais importante ainda, para uso externo. Ou seja, elas são o instrumento de que um time dispõe para recusar trabalho extra que está sendo empurrado de cima para baixo por gerentes da organização, por exemplo."
},
{
"id": 99,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Falando sobre os processos do tipo waterfall, podemos afirmar que a característica principal desse processo é a adoção de ciclos curtos e iterativos de desenvolvimento, por meio dos quais um sistema é implementado de forma gradativa; começando por aquilo que é mais urgente para o cliente.",
"resposta": false,
"justificativa": "A característica principal de processos ágeis é a adoção de ciclos curtos e iterativos de desenvolvimento, por meio dos quais um sistema é implementado de forma gradativa; começando por aquilo que é mais urgente para o cliente. De início, implementa-se uma primeira versão do sistema, com as funcionalidades que segundo o cliente são para ontem, isto é, possuem prioridade máxima. Em seguida, essa versão é validada pelo cliente. Se ela for aprovada, um novo ciclo — ou iteração — inicia-se, com mais algumas funcionalidades, também priorizadas pelos clientes. Normalmente, esses ciclos são curtos, com duração de um mês, talvez até um pouco menos. Assim, o sistema vai sendo construído de forma incremental, sendo cada incremento devidamente aprovado pelos clientes. O desenvolvimento termina quando o cliente decide que todos os requisitos estão implementados. (2.2 Manifesto Ágil)"
},
{
"id": 100,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "O termo Engenharia de Software foi usado pela primeira vez em uma conferência da OTAN realizada na Alemanha, em 1968.",
"resposta": true,
"justificativa": "\"Conferência da OTAN (Alemanha, 1968) – 1a vez que o termo Engenharia de Software foi usado\" (Working Conference on Software Engineering).\nVALENTE, Marco Tulio. Engenharia de Software Moderna – Cap. 1: Introdução (slides de aula, slide 2). Disponível em: https://engsoftmoderna.info. Ver também: VALENTE, M. T. Engenharia de Software Moderna, 2020, Cap. 1."
},
{
"id": 101,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Segundo Frederick Brooks, no artigo \"No Silver Bullet\", as dificuldades essenciais que tornam a Engenharia de Software diferente de outras engenharias são: complexidade, conformidade, facilidade de mudanças e invisibilidade.",
"resposta": true,
"justificativa": "\"Não Existe Bala de Prata\" – Frederick Brooks. No Silver Bullet - Essence and Accidents of Software Engineering. IEEE Computer, 1987.\n\"Motivo: Dificuldades Essenciais – Complexidade, Conformidade, Facilidade de Mudanças, Invisibilidade – Tornam Engenharia de Software diferente de outras engenharias.\"\nVALENTE, Marco Tulio. Engenharia de Software Moderna – Cap. 1: Introdução (slides de aula, slides 6–7). Disponível em: https://engsoftmoderna.info. Ver também: VALENTE, M. T. Engenharia de Software Moderna, 2020, Cap. 1."
},
{
"id": 102,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Um requisito que estabelece que o saldo da conta de um cliente deve ser exibido em até 5 segundos é um exemplo de requisito funcional.",
"resposta": false,
"justificativa": "\"Funcionais: 'o que' um sistema deve fazer – Funcionalidades ou serviços. Não-funcionais: 'como' um sistema deve operar – Restrições e qualidade de serviço.\"\n\"Exemplos de Requisitos Não-Funcionais – Desempenho: saldo em 5 segundos.\"\nVALENTE, Marco Tulio. Engenharia de Software Moderna – Cap. 1: Introdução (slides de aula, slides 10–11). Disponível em: https://engsoftmoderna.info. Ver também: VALENTE, M. T. Engenharia de Software Moderna, 2020, Cap. 1."
},
{
"id": 103,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "A explosão do foguete Ariane 5, em 1996, foi causada por uma falha mecânica nos motores, sem relação com o software embarcado.",
"resposta": false,
"justificativa": "\"Investigação da Explosão – Foi causada por uma falha de software. Conversão: float de 64 bits → inteiro de 16-bits. Overflow: float não 'coube' em 16 bits. Essa conversão específica nunca tinha ocorrido antes!\"\nVALENTE, Marco Tulio. Engenharia de Software Moderna – Cap. 1: Introdução (slides de aula, slides 16–18). Disponível em: https://engsoftmoderna.info. Ver também: VALENTE, M. T. Engenharia de Software Moderna, 2020, Cap. 1."
},
{
"id": 104,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Sistemas legados são, por definição, sistemas irrelevantes para a organização, cuja manutenção é simples e de baixo risco.",
"resposta": false,
"justificativa": "\"Sistemas Legados – Sistemas antigos, usando linguagens, SOs, BDs antigos. Manutenção custosa e arriscada. Legado ≠ Irrelevante.\"\n\"Estima-se que existam ~200 bilhões de LOC em COBOL. Maioria são sistemas de bancos. 95% das transações em ATMs são em COBOL.\"\nVALENTE, Marco Tulio. Engenharia de Software Moderna – Cap. 1: Introdução (slides de aula, slides 24–25). Disponível em: https://engsoftmoderna.info. Ver também: VALENTE, M. T. Engenharia de Software Moderna, 2020, Cap. 1."
},
{
"id": 105,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Na classificação ABC proposta por Bertrand Meyer, sistemas do tipo C (casuais) são sistemas pequenos, que podem ter bugs e, às vezes, são descartáveis; para eles, um risco é o \"over-engineering\".",
"resposta": true,
"justificativa": "\"Sistemas C (Casuais) – Tipo muito comum de sistema. Sistemas pequenos, sem muita importância. Podem ter bugs; às vezes, são descartáveis. Desenvolvidos por 1-2 engenheiros. Não se beneficiam tanto do que vamos estudar. Risco: 'over-engineering'.\"\nVALENTE, Marco Tulio. Engenharia de Software Moderna – Cap. 1: Introdução (slides de aula, slides 33–34). Disponível em: https://engsoftmoderna.info. Ver também: VALENTE, M. T. Engenharia de Software Moderna, 2020, Cap. 1."
},
{
"id": 106,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "\"Baby steps\" e \"falhas acontecem\" estão entre os valores de Extreme Programming (XP).",
"resposta": false,
"justificativa": "\"Valores: Comunicação, Simplicidade, Feedback, Coragem, Respeito, Ambiente de Trabalho.\"\n\"Princípios: Viabilidade econômica, Melhorias Contínuas, Falhas Acontecem, Baby Steps, Responsabilidade.\"\nVALENTE, Marco Tulio. Engenharia de Software Moderna – Cap. 2: Processos (slides de aula, slides 21 e 24). Disponível em: https://engsoftmoderna.info. Ver também: VALENTE, M. T. Engenharia de Software Moderna, 2020, Cap. 2."
},
{
"id": 107,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Em Scrum, o Product Owner é o chefe dos desenvolvedores e pode obrigar o time a implementar, em um único sprint, todas as histórias que ele priorizou.",
"resposta": false,
"justificativa": "\"Em um time Scrum, todos têm o mesmo nível hierárquico. PO não é o chefe dos Devs. Devs têm autonomia para dizer que não vão conseguir implementar tudo que o PO quer em um único sprint.\"\n\"PO propõe histórias que gostaria de ver implementadas. Devs decidem se têm velocidade para implementá-las.\"\nVALENTE, Marco Tulio. Engenharia de Software Moderna – Cap. 2: Processos (slides de aula, slides 53–54). Disponível em: https://engsoftmoderna.info. Ver também: VALENTE, M. T. Engenharia de Software Moderna, 2020, Cap. 2."
},
{
"id": 108,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "O Scrum Master é um especialista em Scrum que atua como \"líder servidor\", removendo impedimentos não-técnicos do time, e pode pertencer a mais de um time.",
"resposta": true,
"justificativa": "\"Scrum Master – Especialista em Scrum: ajuda o time a adotar Scrum. Removedor de impedimentos não-técnicos (Exemplo: desenvolvedores não têm máquinas boas). Coletar métricas de processo. Não é o chefe do time, mas um 'líder servidor'. Pode pertencer a mais de um time.\"\nVALENTE, Marco Tulio. Engenharia de Software Moderna – Cap. 2: Processos (slides de aula, slide 64). Disponível em: https://engsoftmoderna.info. Ver também: VALENTE, M. T. Engenharia de Software Moderna, 2020, Cap. 2."
},
{
"id": 109,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Na Revisão do Sprint, histórias cuja implementação for aprovada parcialmente ou reprovada voltam para o backlog do produto.",
"resposta": true,
"justificativa": "\"Revisão do Sprint – Time mostra o resultado do sprint para PO e stakeholders. Implementação das histórias pode ser: Aprovada, Aprovada parcialmente, Reprovada. Nos dois últimos casos, história volta para o backlog do produto.\"\nVALENTE, Marco Tulio. Engenharia de Software Moderna – Cap. 2: Processos (slides de aula, slide 68). Disponível em: https://engsoftmoderna.info. Ver também: VALENTE, M. T. Engenharia de Software Moderna, 2020, Cap. 2."
},
{
"id": 110,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Assim como Scrum, Kanban organiza o trabalho em sprints de duração fixa e torna obrigatórios papéis e eventos como Scrum Master, daily e retrospectiva.",
"resposta": false,
"justificativa": "\"Kanban vs Scrum – Kanban é mais simples. Não existem sprints. Não é obrigatório usar papéis e eventos, incluindo: Scrum master; Daily Scrum, retrospectivas, revisões. Time define os papéis e eventos.\"\nVALENTE, Marco Tulio. Engenharia de Software Moderna – Cap. 2: Processos (slides de aula, slide 91). Disponível em: https://engsoftmoderna.info. Ver também: VALENTE, M. T. Engenharia de Software Moderna, 2020, Cap. 2."
},
{
"id": 111,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Em Kanban, o limite WIP (Work in Progress) de um passo é o número máximo de tarefas naquele passo, contando tanto as tarefas em andamento quanto as já concluídas.",
"resposta": true,
"justificativa": "\"Limites WIP (Work in Progress) – Número máximo de tarefas em um passo, contando tarefas em andamento e concluídas.\"\n\"Objetivos dos Limites WIP – Criar um fluxo de trabalho sustentável. Evitar que o time fique sobrecarregado de trabalho.\"\nVALENTE, Marco Tulio. Engenharia de Software Moderna – Cap. 2: Processos (slides de aula, slides 103–104). Disponível em: https://engsoftmoderna.info. Ver também: VALENTE, M. T. Engenharia de Software Moderna, 2020, Cap. 2."
},
{
"id": 112,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Histórias de usuários seguem os \"3 C's\": Cartão, Conversas e Confirmação, em que a Confirmação corresponde aos cenários usados pelo PO para aceitar a implementação da história.",
"resposta": true,
"justificativa": "\"Histórias de Usuários = 3C's – Não é só um cartão com 1-2 frases. Cartão + Conversas + Confirmação. Cartão: lembrete para conversas sobre o requisito durante sprint. Confirmação: cenários que serão usados pelo PO para aceitar a implementação da história; também chamados de testes ou critérios de aceitação.\"\nVALENTE, Marco Tulio. Engenharia de Software Moderna – Cap. 3: Requisitos (slides de aula, slide 9). Disponível em: https://engsoftmoderna.info. Ver também: VALENTE, M. T. Engenharia de Software Moderna, 2020, Cap. 3."
},
{
"id": 113,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Critérios de aceitação de uma história e done criteria (Definition of Done) são a mesma coisa: ambos são definidos individualmente para cada história e tratam apenas de requisitos funcionais.",
"resposta": false,
"justificativa": "\"Não confundir: Critérios de confirmação / Critérios de aceitação / Testes de aceitação – Cada história tem o seu; Requisitos Funcionais. ≠ Done criteria / Definition of Done (DoD) / Critérios para Conclusão de Histórias – Critérios internos do time; Valem para múltiplas histórias; Incluem Requisitos Não Funcionais.\"\nVALENTE, Marco Tulio. Engenharia de Software Moderna – Cap. 3: Requisitos (slides de aula, slides 21 e 24). Disponível em: https://engsoftmoderna.info. Ver também: VALENTE, M. T. Engenharia de Software Moderna, 2020, Cap. 3."
},
{
"id": 114,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Casos de uso devem detalhar elementos de interface com o usuário, como botões, listas e cores, pois seu foco é descrever como o sistema vai implementar cada funcionalidade.",
"resposta": false,
"justificativa": "\"Importante – Casos de uso não são algoritmos. Não tratam de interface com usuário (botões, listas, cores, etc). Foco: entender 'o que' o sistema deve fazer (ainda estamos levantando requisitos). Como ele vai fazer isso ainda não é uma preocupação...\"\nVALENTE, Marco Tulio. Engenharia de Software Moderna – Cap. 3: Requisitos (slides de aula, slide 47). Disponível em: https://engsoftmoderna.info. Ver também: VALENTE, M. T. Engenharia de Software Moderna, 2020, Cap. 3."
},
{
"id": 115,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Um MVP é um experimento e, por isso, pode falhar; quando o mercado é certo e o cliente sabe muito bem o que quer, não há risco e, portanto, não é necessário construir um MVP.",
"resposta": true,
"justificativa": "\"MVP é um experimento (logo, pode falhar). Ou seja: Se existe um mercado certo; Se o cliente já te contratou e vai te pagar; Se você tem competência para desenvolver; Se o cliente sabe muito bem o que quer; Logo, não existe risco e não precisamos de MVP. Se já sabemos que vai dar certo, não é um experimento.\"\nVALENTE, Marco Tulio. Engenharia de Software Moderna – Cap. 3: Requisitos (slides de aula, slide 73). Disponível em: https://engsoftmoderna.info. Ver também: VALENTE, M. T. Engenharia de Software Moderna, 2020, Cap. 3."
},
{
"id": 116,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "O Slack é citado como exemplo de pivô do tipo zoom-in, no qual uma funcionalidade específica de um produto passa a ser o próprio produto.",
"resposta": true,
"justificativa": "\"Tipos comuns de pivôs – Zoom-in (uma feature específica vira um produto); Segmento de clientes; Aplicação para Plataforma; Tecnologia.\"\n\"Zoom-in: Slack.\"\nVALENTE, Marco Tulio. Engenharia de Software Moderna – Cap. 3: Requisitos (slides de aula, slides 76–77). Disponível em: https://engsoftmoderna.info. Ver também: VALENTE, M. T. Engenharia de Software Moderna, 2020, Cap. 3."
},
{
"id": 117,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Testes A/B normalmente exigem amostras pequenas, o que os torna viáveis mesmo para sistemas com poucos usuários.",
"resposta": false,
"justificativa": "\"Calculadoras de tamanho de amostras – Informa-se: Taxa de conversão atual (1%); Ganho pretendido (10%). Calculadora informa: Tamanho da amostra necessário: 200K por versão.\"\n\"Comentários finais – Testes A/B requerem amostras grandes. São usados por todas as grandes empresas da Internet.\"\nVALENTE, Marco Tulio. Engenharia de Software Moderna – Cap. 3: Requisitos (slides de aula, slides 96 e 98). Disponível em: https://engsoftmoderna.info. Ver também: VALENTE, M. T. Engenharia de Software Moderna, 2020, Cap. 3."
},
{
"id": 118,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "O método de processo ágil XP defende que os times, durante uma iteração, programem algumas folgas (slacks), que são tarefas que podem ser adiadas, caso necessário.",
"resposta": true,
"justificativa": "XP defende ainda que os times, durante uma iteração, programem algumas folgas (slacks), que são tarefas que podem ser adiadas, caso necessário. Como exemplos, podemos citar o estudo de uma nova tecnologia, a realização de um curso online, preparar uma documentação ou manual ou mesmo desenvolver um projeto paralelo. Algumas empresas, como o Google, por exemplo, são famosas por permitir que seus desenvolvedores usem 20% de seu tempo para desenvolver um projeto pessoal (link). No caso de XP, folgas têm dois objetivos principais: (1) criar um buffer de segurança em uma iteração, que possa ser usado caso alguma tarefa demande mais tempo do que o previsto; (2) permitir que os desenvolvedores respirem um pouco, pois o ritmo de trabalho em projetos de desenvolvimento de software costuma ser intenso e desgastante. Logo, os desenvolvedores precisam de um tempo para realizarem algumas tarefas sem que exista uma cobrança imediata de resultados. (2.3.3 Práticas sobre o Processo de Desenvolvimento)"
},
{
"id": 119,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "O Manifesto Ágil dita que, para se obter \"software em funcionamento\", as equipes devem abolir a documentação e os diagramas arquiteturais, já que estes não geram valor direto ao usuário final.",
"resposta": false,
"justificativa": "Ambler, S., Agile Modeling: Effective Practices for Extreme Programming and the Unified Process, 2002, p. 12):\n\n \"Agilidade não significa eliminar a documentação, mas sim focar na documentação que agregue valor real. O objetivo é criar modelos que sejam apenas suficientes, não perfeitos ou exaustivos, garantindo a comunicação sem engessar a equipe.\""
},
{
"id": 120,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "os requisitos de um sistema definem o que ele deve fazer e como ele deve operar. Assim, a Engenharia de Requisitos inclui o conjunto de atividades realizadas com o objetivo de definir, analisar, documentar e validar os requisitos de um sistema. Os requisitos podem ser classificados em funcionais ou não-funcionais. Os requisitos funcionais definem as funcionalidades do sistema, ou seja, o que o sistema deve fazer. Já os requisitos não-funcionais dizem como o sistema deve operar, levando em conta restrições e qualidade de serviço.",
"resposta": true,
"justificativa": "Os requisitos de um sistema definem o que ele deve fazer e como ele deve operar. Assim, a Engenharia de Requisitos inclui o conjunto de atividades realizadas com o objetivo de definir, analisar, documentar e validar os requisitos de um sistema. Em uma primeira classificação, os requisitos podem ser funcionais ou não-funcionais. Requisitos funcionais definem o que um sistema deve fazer; isto é, quais funcionalidades ou serviços ele deve implementar. Já os requisitos não-funcionais definem como um sistema deve operar, sob quais restrições e com qual qualidade de serviço. São exemplos de requisitos não-funcionais: desempenho, disponibilidade, tolerância a falhas, segurança, privacidade, interoperabilidade, capacidade, manutenibilidade e usabilidade."
},
{
"id": 121,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "No contexto dos métodos ágeis, uma iteração (ou Sprint) funciona internamente como um processo Cascata comprimido (mini-waterfall), onde a primeira semana é destinada à especificação, a segunda à programação e a terceira aos testes de QA.",
"resposta": false,
"justificativa": "Larman, C., Agile and Iterative Development: A Manager's Guide, 2004, p.11):\n\n \"Um erro comum é tratar a iteração como um micro-waterfall. Em métodos iterativos verdadeiros, análise, design, codificação e testes não são fases separadas no tempo, mas atividades contínuas e entrelaçadas durante todo o ciclo diário.\""
},
{
"id": 122,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "testes de software podem ser usados para testar a verificação e validação do sistema. A verificação diz respeito a atender as necessidades do cliente, enquanto validação valida que o sistema atende à sua especificação.",
"resposta": false,
"justificativa": "Segundo, testes podem ser usados tanto para verificação como para validação de sistemas. Verificação tem como o objetivo garantir que um sistema atende à sua especificação. Já com validação, o objetivo é garantir que um sistema atende às necessidades de seus clientes."
},
{
"id": 123,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "if (condicao) area = pi * raio * raio * raio; o seguinte código pode vir a gerar uma falha, como o código está com defeito ao gerar a área como pi vezes raio ao cubo ao invés de ao quadrado, se a condição vir a ser verdadeira e o código entrar no if gerará um código incorreto, portanto, uma falha. A diferença entre bug/defeito e falha é que a falha é resultado de um código defeituoso, mas nem todo código defeituoso gerará uma falha sempre, no caso do código acima, se a condição não fosse verdadeira o código não entraria no if e não geraria uma falha, mas o código continuaria com bug.",
"resposta": true,
"justificativa": "Resumindo: código defeituoso é aquele que não está de acordo com a sua especificação. Se esse código for executado e de fato levar o programa a apresentar um resultado incorreto, dizemos que ocorreu uma falha."
},
{
"id": 124,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "No Scrum, o Scrum Master atua como o líder hierárquico da equipe de desenvolvimento. Entre suas atribuições está a de distribuir individualmente as tarefas aos desenvolvedores no início da Sprint e cobrar o relatório de progresso durante as reuniões diárias (Daily Scrum).",
"resposta": false,
"justificativa": "O Scrum Master é um papel característico e único de Scrum. Trata-se do especialista em Scrum do time, sendo responsável por garantir que as regras do método estão sendo seguidas. Para isso, ele deve continuamente treinar e explicar os princípios de Scrum para os demais membros do time. Ele também deve desempenhar funções de um facilitador dos trabalhos e removedor de impedimentos. Por exemplo, suponha que um time esteja enfrentando problemas com um dos servidores de bancos de dados, cujos discos estão apresentando problemas todos os dias. Cabe ao Scrum Master intervir junto aos níveis adequados da empresa para garantir que esse problema de hardware não atrapalhe o avanço do time. Por outro lado, ele não é um gerente de projeto tradicional. Por exemplo, ele não é o líder do time, pois todos em um time Scrum têm o mesmo nível hierárquico. (2.4.1 Papéis)"
},
{
"id": 125,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "De acordo com os fundamentos descritos por Marco Túlio Valente, os processos de desenvolvimento do tipo Waterfall (Cascata) revelam-se superiores e preferíveis em relação aos processos ágeis para a totalidade dos projetos de software.",
"resposta": false,
"justificativa": "VALENTE, Marco Túlio. Engenharia de Software Moderna: Princípios e Práticas para Desenvolvimento de Software com Produtividade. Cap. 1.2.8 e Cap. 1.3. Disponível em: https://engsoftmoderna.info/cap1.html"
},
{
"id": 126,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Histórias são documentos resumidos, com apenas duas ou três sentenças, com as quais o representante dos clientes define o que ele deseja que o sistema faça, usando sua própria linguagem.",
"resposta": true,
"justificativa": "2.3.3 Práticas sobre o Processo de Desenvolvimento 🔗\n\nXP — como outros métodos ágeis — recomenda o envolvimento dos clientes com o projeto. Ou seja, além de desenvolvedores, os times incluem pelo menos um representante dos clientes, que deve entender do domínio do sistema que será construído. Uma das funções desse representante é escrever as histórias de usuário (user stories), que é o nome que XP dá para os documentos que descrevem os requisitos do sistema a ser implementado. No entanto, histórias são documentos resumidos, com apenas duas ou três sentenças, com as quais o representante dos clientes define o que ele deseja que o sistema faça, usando sua própria linguagem.\n\nIremos aprofundar o estudo sobre histórias de usuários no Capítulo 3. Mas, por enquanto, gostaríamos de adiantar que as histórias são escritas em cartões de papel, normalmente a mão. Ou seja, em vez de documentos de requisitos detalhados, histórias são documentos simples, que focam nas funcionalidades do sistema, sempre na visão de seus usuários. Como exemplo, mostramos a seguir uma história de um sistema de perguntas e respostas — semelhante ao famoso Stack Overflow — que usaremos neste capítulo para explicar XP."
},
{
"id": 127,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Conforme detalhado no livro, o SWEBOK (Guide to the Software Engineering Body of Knowledge) cataloga o conhecimento essencial da Engenharia de Software dividindo-o em 12 áreas fundamentais, incluindo Engenharia de Requisitos, Projeto de Software, Construção de Software e Testes de Software.",
"resposta": true,
"justificativa": "VALENTE, Marco Túlio. Engenharia de Software Moderna, Cap. 1.2 (O que se Estuda em Engenharia de Software?). Disponível em: https://engsoftmoderna.info/cap1.html"
},
{
"id": 128,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Na taxonomia de sistemas de software apresentada por Bertrand Meyer no livro de Valente, os Sistemas C (Casuais) são categorizados como sistemas críticos onde uma simples falha pode acarretar grandes catástrofes ou perda de vidas humanas, como em softwares para usinas nucleares ou aviões.",
"resposta": false,
"justificativa": "VALENTE, Marco Túlio. Engenharia de Software Moderna, Cap. 1.3 (Classificação de Sistemas de Software). Disponível em: https://engsoftmoderna.info/cap1.html"
},
{
"id": 129,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Na divisão das 12 áreas de conhecimento do SWEBOK apresentada por Valente, a disciplina de \"Aspectos Econômicos\" não integra o escopo oficial da Engenharia de Software.",
"resposta": false,
"justificativa": "VALENTE, Marco Túlio. Engenharia de Software Moderna, Cap. 1.2 e Cap. 1.2.12 (Aspectos Econômicos). Disponível em: https://engsoftmoderna.info/cap1.html"
},
{
"id": 130,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Segundo o ensaio \"Não Existe Bala de Prata\" de Frederick Brooks citado por Valente, as chamadas \"dificuldades essenciais\" referem-se tão somente a problemas tecnológicos e operacionais temporários, a exemplo de bugs em ambientes de desenvolvimento (IDEs) ou frameworks desatualizados.",
"resposta": false,
"justificativa": "VALENTE, Marco Túlio. Engenharia de Software Moderna, Cap. 1.2.1 (Não Existe Bala de Prata). Disponível em: https://engsoftmoderna.info/cap1.html"
},
{
"id": 131,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Na classificação de sistemas de software abordada no Capítulo 1, os Sistemas A (de acute, ou de missão crítica) englobam aqueles cujas falhas operacionais podem resultar em prejuízos graves e irreversíveis, incluindo risco à vida humana.",
"resposta": true,
"justificativa": "Na classificação de sistemas de software abordada no Capítulo 1, os Sistemas A (de acute, ou de missão crítica) englobam aqueles cujas falhas operacionais podem resultar em prejuízos graves e irreversíveis, incluindo risco à vida humana."
},
{
"id": 132,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "A característica essencial dos processos ágeis de software reside no uso de iterações curtas e frequentes, permitindo a construção evolutiva do sistema a partir das prioridades e urgências do cliente.",
"resposta": true,
"justificativa": "VALENTE, Marco Túlio. Engenharia de Software Moderna, Cap. 2.2 (Processos Ágeis e Manifesto Ágil). Disponível em: https://engsoftmoderna.info/cap2.html"
},
{
"id": 133,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "O método Extreme Programming (XP) é categorizado como um modelo prescritivo rígido, focado prioritariamente em normatizar etapas formais passo a passo e descartando o uso de valores abstratos no time de desenvolvimento.",
"resposta": false,
"justificativa": "VALENTE, Marco Túlio. Engenharia de Software Moderna, Cap. 2.3 (Extreme Programming). Disponível em: https://engsoftmoderna.info/cap2.html"
},
{
"id": 134,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "No método Kanban, o recurso conhecido como limite WIP (Work in Progress) especifica a quantidade máxima de itens permitidos em cada coluna do quadro visual, tendo a função primária de impedir a sobrecarga de trabalho na equipe.",
"resposta": true,
"justificativa": "VALENTE, Marco Túlio. Engenharia de Software Moderna, Cap. 2.5 (Kanban). Disponível em: https://engsoftmoderna.info/cap2.html"
},
{
"id": 135,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Os artefatos Backlog do Produto e Backlog da Sprint possuem dinâmicas distintas: enquanto o Backlog do Produto pode ser continuamente modificado e reordenado pelo Product Owner, o objetivo e as histórias selecionadas para o Backlog da Sprint ficam blindados durante o timebox da Sprint, impedindo que novas histórias sejam adicionadas pelo PO no meio da iteração.",
"resposta": true,
"justificativa": "2.4.2 Principais Artefatos e Eventos\n\nO Backlog do Produto é uma lista de histórias (e outros itens de trabalho relevantes), ordenada por prioridades. Assim como em XP, as histórias são escritas e priorizadas pelo Dono do Produto e constituem uma descrição resumida das funcionalidades que devem ser implementadas no projeto. É importante mencionar ainda que o Backlog do Produto é um artefato dinâmico, isto é, ele deve ser continuamente atualizado, de forma a refletir mudanças nos requisitos e na visão do produto. Por exemplo, à medida que o desenvolvimento avança, ideias de novas funcionalidades podem surgir, enquanto outras podem perder importância. Todas essas atualizações devem ser realizadas pelo Dono do Produto. Na verdade, é o fato de ser o dono do Backlog do Produto que faz o Dono do Produto receber esse nome.\n\nO Backlog do Sprint é o artefato gerado ao final do Planejamento do Sprint. Ele é uma lista com as tarefas do sprint, bem como inclui a duração das mesmas. Como o Backlog do Produto, o Backlog do Sprint também é dinâmico. Por exemplo, tarefas podem se mostrar desnecessárias e outras podem surgir, ao longo do sprint. Pode-se também alterar a estimativa de horas previstas para uma tarefa. Porém, o que não pode ser alterado é o objetivo do sprint (sprint goal), isto é, a lista de histórias que o dono do produto selecionou para o sprint e que o time de desenvolvimento se comprometeu a implementar na duração do mesmo. Assim, Scrum é um método adaptável a mudanças, mas desde que elas ocorram entre sprints. Ou seja, no time-box de um sprint, a equipe de desenvolvimento deve ter tranquilidade e segurança para trabalhar com uma lista fechada de histórias."
},
{
"id": 136,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "O processo Waterfall (Cascata) organiza o desenvolvimento em fases puramente sequenciais e dependentes, de modo que a versão executável do produto só é disponibilizada ao cliente ao término de todas as etapas.",
"resposta": true,
"justificativa": "VALENTE, Marco Túlio. Engenharia de Software Moderna, Cap. 2.1 (Modelo Cascata). Disponível em: https://engsoftmoderna.info/cap2.html"
},
{
"id": 137,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "No desenvolvimento ágil de software, recomenda-se que a equipe evite liberações frequentes ao cliente, optando por trabalhar de forma isolada por prazos longos de um a dois anos antes de demonstrar qualquer parte do sistema.",
"resposta": false,
"justificativa": "VALENTE, Marco Túlio. Engenharia de Software Moderna, Cap. 2.2 (Processos Ágeis e Manifesto Ágil). Disponível em: https://engsoftmoderna.info/cap2.html"
},
{
"id": 138,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "No framework Scrum, as iterações de desenvolvimento possuem duração fixa (geralmente entre duas e quatro semanas) e são denominadas Sprints.",
"resposta": true,
"justificativa": "VALENTE, Marco Túlio. Engenharia de Software Moderna, Cap. 2.4.2 (Scrum - Eventos e Artefatos). Disponível em: https://engsoftmoderna.info/cap2.html"
},
{
"id": 139,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "De acordo com o livro de Valente, a principal diferença entre Casos de Uso e Histórias de Usuário reside no fato de que os Casos de Uso consistem em especificações de requisitos substancialmente mais detalhadas e estruturadas.",
"resposta": true,
"justificativa": "VALENTE, Marco Túlio. Engenharia de Software Moderna, Cap. 3.4 (Casos de Uso) e Cap. 3.3 (Histórias de Usuários). Disponível em: https://engsoftmoderna.info/cap3.html"
},
{
"id": 140,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Requisitos Não-Funcionais (RNFs) têm como função primária detalhar as funcionalidades e ações específicas do sistema, como \"permitir o cadastro de novos produtos\".",
"resposta": false,
"justificativa": "VALENTE, Marco Túlio. Engenharia de Software Moderna, Cap. 3.1 (Requisitos Funcionais e Não-Funcionais). Disponível em: https://engsoftmoderna.info/cap3.html"
},
{
"id": 141,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "No contexto de projetos ágeis, as Histórias de Usuário são elaboradas como documentos burocráticos extensos contendo a especificação detalhada de esquemas de banco de dados e telas.",
"resposta": false,
"justificativa": "VALENTE, Marco Túlio. Engenharia de Software Moderna, Cap. 3.3 (Histórias de Usuários). Disponível em: https://engsoftmoderna.info/cap3.html"
},
{
"id": 142,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Na utilização do acrônimo INVEST para validar a escrita de Histórias de Usuário, a letra \"I\" representa a propriedade Independent (Independente), orientando que uma história deve, tanto quanto possível, evitar dependências estritas com outras histórias.",
"resposta": true,
"justificativa": "VALENTE, Marco Túlio. Engenharia de Software Moderna, Cap. 3.3.1 (O Padrão INVEST). Disponível em: https://engsoftmoderna.info/cap3.html"
},
{
"id": 143,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "A atividade de Elicitação de Requisitos pressupõe um trabalho meramente passivo de cópia e digitação, uma vez que os usuários finais compreendem perfeitamente a tecnologia e expressam sem contradições tudo o que o sistema precisa conter.",
"resposta": false,
"justificativa": "VALENTE, Marco Túlio. Engenharia de Software Moderna, Cap. 3.2.1 (Técnicas de Elicitação de Requisitos). Disponível em: https://engsoftmoderna.info/cap3.html"
},
{
"id": 144,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "A Engenharia de Requisitos compreende um conjunto sistemático de atividades dedicadas à descoberta, análise, especificação, validação e manutenção dos requisitos ao longo do ciclo de vida do software.",
"resposta": true,
"justificativa": "VALENTE, Marco Túlio. Engenharia de Software Moderna, Cap. 3.2 (Engenharia de Requisitos). Disponível em: https://engsoftmoderna.info/cap3.html"
},
{
"id": 145,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "O relatório CHAOS Report da década de 1990 impulsionou metodologias ágeis ao expor estatisticamente que a maioria dos projetos baseados no ciclo Cascata ultrapassava drasticamente prazos e orçamentos originais.",
"resposta": true,
"justificativa": "The Standish Group, The CHAOS Report, 1994, p. 2:\n\n\"Um total de 52,7% dos projetos custará 189% de suas estimativas originais. O projeto de software médio ultrapassa seu cronograma estimado em 222%.\""
},
{
"id": 146,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "O método Kanban, adaptado da indústria automotiva para o software, foca na fluidez contínua do trabalho e utiliza o limite de \"Trabalho em Progresso\" (WIP) para evitar a sobrecarga cognitiva e prevenir a formação de gargalos operacionais.",
"resposta": true,
"justificativa": "Anderson, D. J., Kanban: Successful Evolutionary Change for Your Technology Business, 2010, p. 45: \"Ao limitar estritamente o Trabalho em Progresso (WIP), o sistema de empurrar tarefas cede lugar a um sistema pull (puxar), onde um novo item só é iniciado quando há capacidade, forçando a equipe a terminar o que começou.\""
},
{
"id": 147,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "A etnografia é uma técnica útil de elicitação de requisitos em cenários sociotécnicos, pois permite que o engenheiro compreenda fluxos de trabalho implícitos dos usuários mediante observação imersiva em seu ambiente real.",
"resposta": true,
"justificativa": "Viller, S. & Sommerville, I., Ethnographically informed analysis for software engineers, 1999, p. 169:\n\n \"A observação etnográfica revela práticas operacionais reais que os usuários frequentemente consideram tão mundanas ou habituais que esquecem de mencioná-las em entrevistas convencionais estruturadas.\""
},
{
"id": 148,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "A matriz de rastreabilidade é um mecanismo técnico criado para garantir que cada requisito abstraído na documentação seja correlacionado a um artefato arquitetural e a um trecho de código específico, acompanhando sua evolução e mudanças.",
"resposta": true,
"justificativa": "Pohl, K., Requirements Engineering: Fundamentals, Principles, and Techniques, 2010, p. 647:\n\n \"A rastreabilidade estabelece ligações bidirecionais documentadas entre o requisito original de negócio e seus refinamentos, códigos e casos de teste, permitindo a análise de impacto em caso de mudanças.\""
},
{
"id": 149,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "o método Waterfall, antes essencial na área, tornou-se obsoleto devido ás suas inadequações a área de software. Entra elas, podem ser citadas: uma frequente mudança dos seus requisitos; a indecisão e imprecisão dos clientes ao explicarem o que desejam; problemas nos documentos dos processos de cascata, que eram pesados e extensos; e a rápida mudança no mundo da tecnologia que torna software trabalhados por anos em obsoletos.",
"resposta": true,
"justificativa": "Por exemplo, os requisitos de um software mudam com frequência, mais do que os requisitos de um computador, de um avião ou de uma ponte. Além disso, os clientes frequentemente não têm uma ideia precisa do que querem. Ou seja, corre-se o risco de projetar por anos um produto que depois de pronto não será mais necessário, ou porque o mundo mudou ou porque os planos e as necessidades dos clientes mudaram. Eles diagnosticaram ainda problemas nos documentos prescritos por processos Waterfall, incluindo documentos de requisitos, fluxogramas, diagramas, etc. Esses documentos eram detalhados, pesados e extensos. Assim, rapidamente se tornavam obsoletos, pois quando os requisitos mudavam os desenvolvedores não propagavam as alterações para a documentação, mas apenas para o código."
},
{
"id": 150,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "O rigor e formalidade exigidos no documento de Especificação de Requisitos IEEE 830 baseia-se na premissa de que os requisitos assinalados na primeira fase não sofrerão nenhum tipo de alteração em fases subsequentes.",
"resposta": false,
"justificativa": "Leffingwell, D., Agile Software Requirements, 2011, p. 19:\n\n\"Nenhuma especificação, independentemente da densidade do padrão aplicado (como o IEEE 830), é imune a mudanças de mercado. Requisitos são inerentemente voláteis e devem ser continuamente refinados e atualizados conforme a realidade de negócios se desdobra.\""
},
{
"id": 151,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "a diferença de um método ágil para o Waterfall é a adoção de ciclos curtos e iterativos de desenvolvimento. De início são implementados os requisitos de maior prioridade ao cliente e, após a implementação ser aprovada, são requisitados novas implementações ao sistema. Ou seja, a cada nova iteraão ocorre um mini-waterfall com o pipeline de tarefas do método.",
"resposta": false,
"justificativa": "A característica principal de processos ágeis é a adoção de ciclos curtos e iterativos de desenvolvimento, por meio dos quais um sistema é implementado de forma gradativa; começando por aquilo que é mais urgente para o cliente. De início, implementa-se uma primeira versão do sistema, com as funcionalidades que segundo o cliente são para \"ontem\", isto é, possuem prioridade máxima. Em seguida, essa versão é validada pelo cliente. Se ela for aprovada, um novo ciclo — ou iteração — inicia-se, com mais algumas funcionalidades, também priorizadas pelos clientes. Normalmente, esses ciclos são curtos, com duração de um mês, talvez até um pouco menos. Assim, o sistema vai sendo construído de forma incremental, sendo cada incremento devidamente aprovado pelos clientes. O desenvolvimento termina quando o cliente decide que todos os requisitos estão implementados. Desenvolvimento usando um Processo Ágil. A cada iteração (representada pelos retângulos) gera-se um incremento no sistema (S++), que já pode ser validado e testado pelos usuários finais. No entanto, a figura anterior pode sugerir que, em desenvolvimento ágil, cada iteração é um mini-waterfall, incluindo todas as fases de um processo Waterfall. Isso não é verdadeiro; em geral, as iterações em métodos ágeis não são um pipeline de tarefas, como em Waterfall (mais sobre isso nas próximas seções). A figura também pode sugerir que ao final de cada iteração tem-se que colocar um sistema em produção, para uso pelos usuários finais. Isso também não é verdade. De fato, o objetivo é entregar um sistema funcional, isto é, que realize tarefas úteis. Porém, a decisão de colocá-lo em produção envolve outras variáveis, como riscos para o negócio da empresa, disponibilidade de servidores, campanhas de marketing, elaboração de manuais, treinamento de usuários, etc."
},
{
"id": 152,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Para facilitar o processo de auditoria por clientes sem conhecimento técnico, requisitos não funcionais ligados a desempenho devem ser especificados utilizando linguagem qualitativa abrangente, como \"o sistema deve ser rápido sob carga pesada\".",
"resposta": false,
"justificativa": "Wiegers, K. & Beatty, J., Software Requirements, 3ª ed., p. 248:\n\n \"Uma restrição não funcional deve ser quantificável e verificável. Frases subjetivas como 'rápido' ou 'amigável' são intestáveis. Em vez disso, deve-se usar métricas, como 'processar 95% das transações em menos de 1 segundo'.\""
},
{
"id": 153,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "a principal diferença entre o método XP e o Scrum é a aplicação de papéis (Product Owner, Scrum Master), eventos (planejamento do sprint, retrospectiva) e artefatos (gráfico de burndown, quadro scrum), tirando isso, os dois métodos podem ser aplicados no gerenciamento de qualquer projeto.",
"resposta": false,
"justificativa": "Existem diversas pequenas diferenças, mas a principal delas é a seguinte:\n\n    XP é um método ágil voltado exclusivamente para projetos de desenvolvimento de software. Para isso, XP inclui um conjunto de práticas de programação, como testes de unidade, programação em pares, integração contínua e design incremental, que foram estudadas na seção anterior, dedicada a XP.\n\n    Scrum é um método ágil para gerenciamento de projetos, que não necessariamente precisam ser projetos de desenvolvimento de software. Por exemplo, a escrita deste livro — como comentaremos daqui a pouco — é um projeto que está sendo realizado usando conceitos de Scrum. Tendo um foco mais amplo que XP, Scrum não propõe nenhuma prática de programação.\n\nDentre os métodos ágeis, Scrum é também aquele que é melhor definido. Essa definição inclui um conjunto preciso de papéis, artefatos e eventos."
},
{
"id": 154,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Engenharia de Software aplica abordagens sistemáticas, disciplinadas e quantificáveis ao desenvolvimento, operação, manutenção e evolução de software.",
"resposta": true,
"justificativa": "“Engenharia de Software trata da aplicação de abordagens sistemáticas, disciplinadas e quantificáveis para desenvolver, operar, manter e evoluir software.” (Valente, 2020, cap. 1, seção 1.1). VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. https://engsoftmoderna.info/cap1.html"
},
{
"id": 155,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Um teste de software executa um programa com um conjunto finito de casos para verificar se o comportamento observado é o esperado.",
"resposta": true,
"justificativa": "“Teste consiste na execução de um programa com um conjunto finito de casos, com o objetivo de verificar se ele possui o comportamento esperado.” (Valente, 2020, cap. 1, seção 1.2.4; slides do cap. 1, slide 14). VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. https://engsoftmoderna.info/cap1.html"
},
{
"id": 156,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Verificação avalia se o sistema atende às necessidades dos clientes, enquanto validação avalia se ele segue os requisitos especificados.",
"resposta": false,
"justificativa": "“Verificação: estamos implementando o sistema corretamente? Isto é, de acordo com seus requisitos. Validação: estamos implementando o sistema correto?” (Valente, 2020, cap. 1, seção 1.2.4). VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. https://engsoftmoderna.info/cap1.html"
},
{
"id": 157,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Um defeito no código pode existir sem causar uma falha observável quando o trecho defeituoso não é executado.",
"resposta": true,
"justificativa": "“Nem todo defeito ou bug ocasiona falhas, pois pode ser que o código defeituoso nunca seja executado.” (Valente, 2020, cap. 1, seção 1.2.4). VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. https://engsoftmoderna.info/cap1.html"
},
{
"id": 158,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "A codificação de um sistema pertence à atividade de projeto, e não à construção de software.",
"resposta": false,
"justificativa": "“Construção trata da implementação, isto é, codificação do sistema.” (Valente, 2020, cap. 1, seção 1.2.3). VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. https://engsoftmoderna.info/cap1.html"
},
{
"id": 159,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Um processo de desenvolvimento de software reúne passos, tarefas, eventos e práticas seguidos na produção de um sistema.",
"resposta": true,
"justificativa": "“Um processo de desenvolvimento de software define um conjunto de passos, tarefas, eventos e práticas que devem ser seguidos por desenvolvedores de software.” (Valente, 2020, cap. 2, seção 2.1). VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. https://engsoftmoderna.info/cap2.html"
},
{
"id": 160,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "O processo Waterfall organiza o desenvolvimento em fases sequenciais, partindo da especificação de requisitos e avançando para implementação, testes e manutenção.",
"resposta": true,
"justificativa": "“Os primeiros processos de desenvolvimento de software — do tipo Waterfall [...] eram estritamente sequenciais, começando com uma fase de especificação de requisitos até chegar às fases finais de implementação, testes e manutenção.” (Valente, 2020, cap. 2, seção 2.2). VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. https://engsoftmoderna.info/cap2.html"
},
{
"id": 161,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "O Manifesto Ágil dá maior valor à documentação abrangente do que ao software em funcionamento.",
"resposta": false,
"justificativa": "“Software em funcionamento, mais do que documentação abrangente.” (Valente, 2020, cap. 2, seção 2.2). VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. https://engsoftmoderna.info/cap2.html"
},
{
"id": 162,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Processos ágeis desenvolvem o sistema em ciclos curtos e iterativos, com incrementos que podem ser validados pelos clientes.",
"resposta": true,
"justificativa": "“A característica principal de processos ágeis é a adoção de ciclos curtos e iterativos de desenvolvimento, por meio dos quais um sistema é implementado de forma gradativa.” (Valente, 2020, cap. 2, seção 2.2). VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. https://engsoftmoderna.info/cap2.html"
},
{
"id": 163,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "A entrega de um incremento funcional é suficiente para colocá-lo em produção para os usuários finais.",
"resposta": false,
"justificativa": "“Isso também não é verdade. De fato, o objetivo é entregar um sistema funcional [...] Porém, a decisão de colocá-lo em produção envolve outras variáveis.” (Valente, 2020, cap. 2, seção 2.2). VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. https://engsoftmoderna.info/cap2.html"
},
{
"id": 164,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Em métodos ágeis, uma fase dedicada de design completo (big design up front) ocorre antes do início das iterações.",
"resposta": false,
"justificativa": "“Inexistência de uma fase dedicada a design (big design up front). Em vez disso, o design também é incremental.” (Valente, 2020, cap. 2, seção 2.2). VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. https://engsoftmoderna.info/cap2.html"
},
{
"id": 165,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Requisitos descrevem o que um sistema deve fazer e as restrições sob as quais ele deve operar.",
"resposta": true,
"justificativa": "“Requisitos definem o que um sistema deve fazer e sob quais restrições.” (Valente, 2020, cap. 3, seção 3.1; slides do cap. 3, slide 3). VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. https://engsoftmoderna.info/cap3.html"
},
{
"id": 166,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "A manutenção dos requisitos é uma atividade de Engenharia de Software separada da Engenharia de Requisitos.",
"resposta": false,
"justificativa": "“Engenharia de Requisitos é o nome que se dá ao conjunto de atividades relacionadas com a descoberta, análise, especificação e manutenção dos requisitos de um sistema.” (Valente, 2020, cap. 3, seção 3.2). VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. https://engsoftmoderna.info/cap3.html"
},
{
"id": 167,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Elicitação de requisitos envolve interações com stakeholders para descobrir e entender os requisitos do sistema.",
"resposta": true,
"justificativa": "“O termo designa as interações dos desenvolvedores de um sistema com os seus stakeholders, com o objetivo de [...] descobrir e entender os principais requisitos.” (Valente, 2020, cap. 3, seção 3.2). VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. https://engsoftmoderna.info/cap3.html"
},
{
"id": 168,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Requisitos de usuário costumam estar mais próximos da solução, enquanto requisitos de sistema ficam mais próximos do problema.",
"resposta": false,
"justificativa": "“Requisitos de usuário estão mais próximos do problema, enquanto que requisitos de sistema estão mais próximos da solução.” (Valente, 2020, cap. 3, seção 3.1). VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. https://engsoftmoderna.info/cap3.html"
},
{
"id": 169,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Requisitos não-funcionais podem ser especificados com métricas, como tempo de resposta e percentual de disponibilidade.",
"resposta": true,
"justificativa": "“Requisitos não-funcionais são especificados de forma quantitativa usando-se métricas.” (Valente, 2020, cap. 3, seção 3.1). VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. https://engsoftmoderna.info/cap3.html"
},
{
"id": 170,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "A frase “o sistema deve ser amigável” apresenta, por si só, um requisito verificável com clareza.",
"resposta": false,
"justificativa": "“Um contra-exemplo é um requisito que apenas requer que o sistema seja amigável. Como os desenvolvedores vão saber se estão atendendo a essa expectativa dos clientes?” (Valente, 2020, cap. 3, seção 3.2). VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. https://engsoftmoderna.info/cap3.html"
},
{
"id": 171,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Na lista principal do SWEBOK apresentada no capítulo 1, Fundamentos de Computação, Fundamentos de Matemática e Fundamentos de Engenharia aparecem entre as 12 áreas de conhecimento.",
"resposta": false,
"justificativa": "“Na verdade, o SWEBOK inclui mais três áreas de conhecimento: Fundamentos de Computação, Fundamentos de Matemática e Fundamentos de Engenharia.” (Valente, 2020, cap. 1, seção 1.2). VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. https://engsoftmoderna.info/cap1.html"
},
{
"id": 172,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "boas histórias para criação de requisitos devem ser: Independentes, abertas para Negociação, agregar Valor ao cliente, viável Estimar o tamanho da história, Sucintas e pequenas, ser Testáveis. Criando o acrônimo INVEST.",
"resposta": true,
"justificativa": "Boas histórias devem possuir as seguintes características (cujas iniciais em inglês dão origem ao acrônimo INVEST):\n\n    Histórias devem ser independentes: dadas duas histórias X e Y, deve ser possível implementá-las em qualquer ordem. Para isso, idealmente, não devem existir dependências entre elas.\n\n    Histórias devem ser abertas para negociação. Frequentemente, costuma-se dizer que histórias (o cartão) são convites para conversas entre clientes e desenvolvedores durante um sprint. Logo, ambos devem estar abertos a ceder em suas opiniões durante essas conversas. Os desenvolvedores devem estar abertos para implementar detalhes que não estão expressos ou que não cabem nos cartões da história. E os clientes devem aceitar argumentos técnicos vindos dos desenvolvedores, por exemplo sobre a inviabilidade de implementar algum detalhe da história conforme inicialmente vislumbrado.\n\n    Histórias devem agregar valor para o negócio dos clientes. Histórias são propostas, escritas e priorizadas pelos clientes e de acordo com o valor que elas agregam ao seu negócio. Por isso, não existe a figura de uma \"história técnica\", como a seguinte: \"o sistema deve ser implementado em JavaScript, usando React no front-end e Node.js no backend\".\n\n    Deve ser viável estimar o tamanho de uma história. Por exemplo, quantos dias serão necessários para implementá-la. Normalmente, isso requer que a história seja pequena, como veremos no próximo item, e que os desenvolvedores tenham experiência na área do sistema.\n\n    Histórias devem ser sucintas e pequenas. Na verdade, até se admite histórias complexas e grandes, as quais são chamadas de épicos. Porém, elas ficam posicionadas no fundo do backlog, o que significa que ainda não se tem previsão de quando elas serão implementadas. Por outro lado, as histórias do topo do backlog e que, portanto, serão implementadas em breve, devem ser curtas e pequenas, para facilitar o entendimento e estimativa das mesmas. Assumindo-se que um sprint tem duração máxima de um mês, deve ser possível implementar as histórias do topo do backlog em menos de uma semana.\n\n    Histórias devem ser testáveis, isto é, elas devem ter critérios de aceitação objetivos. Como exemplo, podemos citar: \"o cliente pode pagar com cartões de crédito\". Uma vez definidas as bandeiras de cartões de crédito que serão aceitas, essa história é testável. Por outro lado, a seguinte história é um contra-exemplo: \"um cliente não deve esperar muito para ter sua compra confirmada\". Essa é uma história vaga e, portanto, com um critério de aceitação também vago."
},
{
"id": 173,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "o MVP tem como objetivo entregar o produto final, com todas as funcionalidades requisitadas, para então validar a hipotése de negócio com o cliente.",
"resposta": false,
"justificativa": "Uma solução consiste em implementar um sistema simples, com um conjunto de requisitos mínimos, mas que sejam suficientes para testar a viabilidade de continuar investindo no seu desenvolvimento. Em Lean Startup, esse primeiro sistema é chamado de Produto Mínimo Viável (MVP). Costuma-se dizer também que o objetivo de um MVP é testar uma hipótese de negócio. Lean startup propõe um método sistemático e científico para construção e validação de MVPs. Esse método consiste em um ciclo com três passos: construir, medir e aprender (veja próxima figura). No primeiro passo (construir), tem-se uma ideia de produto e então implementa-se um MVP para testá-la. No segundo passo (medir), o MVP é disponibilizado para uso por clientes reais com o intuito de coletar dados sobre a sua viabilidade. No terceiro passo (aprender), as métricas coletadas são analisadas e geram o que se denomina de aprendizado validado (validated learning)."
},
{
"id": 174,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "no MVP, Mínimo Produto Viável, não há uma preocupação quanto uma boa qualidade técnica por ser um teste se o produto conseguirá alcançar uma quantidade de clientes.",
"resposta": true,
"justificativa": "Um MVP é um produto de baixa qualidade? Essa pergunta é mais complexa de ser respondida. Porém, é verdade que um MVP deve ter apenas a qualidade mínima necessária para avaliar um conjunto de hipóteses de negócio. Por exemplo, o código de um MVP não precisa ser de fácil manutenção e usar os mais modernos padrões de design e frameworks de desenvolvimento, pois pode ser que o produto se mostre inviável e seja descartado. Na verdade, em um MVP, qualquer nível de qualidade a mais do que o necessário para iniciar o laço construir-medir-aprender é considerado desperdício. Por outro lado, é importante que a qualidade de um MVP não seja tão ruim a ponto de impactar negativamente a experiência do usuário. Por exemplo, um MVP hospedado em um servidor Web com problemas de disponibilidade pode dar origem a resultados chamados de falsos negativos. Eles ocorrem quando a hipótese de negócio é falsamente invalidada. No nosso exemplo, o motivo do insucesso não estaria no MVP, mas sim no fato de os usuários não conseguirem acessar o sistema, pois o servidor frequentemente estava fora do ar."
},
{
"id": 175,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "os Testes A/B, ou split tests, são testes feitos com mais de 2 grupos de usuários a fim de estudar qual melhor MVP pode ser usado no produto final. Cada grupo terá um MVP com diferentes requisitos, comparando os grupos testes com um grupo de controle.",
"resposta": false,
"justificativa": "Testes A/B (ou split tests) são usados para escolher, dentre duas versões de um sistema, aquela que desperta maior interesse dos usuários. As duas versões são idênticas, exceto que uma implementa um requisito A e outra implementa um requisito B, sendo que A e B são mutuamente exclusivos. Ou seja, queremos decidir qual requisito vamos de fato adotar no sistema. Para isso, as versões A e B são liberadas para grupos distintos de usuários. Ao final do teste, decide-se qual versão despertou maior interesse desses usuários. Portanto, testes A/B constituem uma abordagem dirigida por dados para seleção de requisitos (ou funcionalidades) que serão oferecidos em um sistema. O requisito vencedor será mantido no sistema e a versão com o requisito perdedor será descartada. Testes A/B podem ser usados, por exemplo, quando se constrói um MVP (com requisitos A) e, depois de um ciclo construir-medir-aprender pretende-se testar um novo MVP (com requisitos B). Um outro cenário muito comum são testes A/B envolvendo componentes de interfaces com o usuário. Por exemplo, dados dois leiautes da página de entrada de um site, um teste A/B pode ser usado para decidir qual resulta em maior engajamento por parte dos usuários. Pode-se testar também a cor ou posição de um botão da interface, as mensagens usadas, a ordem de apresentação de uma lista, etc."
},
{
"id": 176,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Tratando-se de um software inteiramente novo e voltado para um mercado de grande incerteza, a abordagem recomendada é realizar extensas pesquisas de mercado teóricas antes de escrever qualquer código. Essa prática é preferível à criação antecipada de um Produto Mínimo Viável (MVP), uma vez que questionários e pesquisas tradicionais garantem dados precisos e confiáveis sobre a receptividade dos usuários sem a necessidade de expor uma versão simplificada do produto ao público.",
"resposta": false,
"justificativa": "\"Não faz muito sentido também realizar pesquisas de mercado, para aferir a receptividade do sistema antes de implementá-lo\". A obra justifica esta recomendação argumentando que \"Como ele é um sistema novo, com requisitos diferentes de quaisquer sistemas existentes, os resultados de uma pesquisa de mercado podem não ser confiáveis\". Em vez de planear teoricamente, a solução recomendada \"consiste em implementar um sistema simples, com um conjunto de requisitos mínimos, mas que sejam suficientes para testar a viabilidade de continuar investindo no seu desenvolvimento\".\nReferência Bibliográfica: VALENTE, Marco Tulio. Engenharia de Software Moderna. Capítulo 3: Requisitos, Secção 3.5 (Produto Mínimo Viável)."
},
{
"id": 177,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Na Engenharia de Requisitos, a prática conhecida como gold plating é uma abordagem amplamente recomendada em projetos ágeis, pois consiste na proatividade dos desenvolvedores em adicionar funcionalidades extras e sofisticar a implementação do sistema por conta própria, entregando mais do que foi especificado e, consequentemente, surpreendendo o cliente com um produto de maior valor agregado.",
"resposta": false,
"justificativa": "\"Testes de aceitação devem ser especificados pelo representante dos clientes. Com isso, procura-se evitar o que se denomina de gold plating.\"\n\"Em Engenharia de Requisitos, a expressão designa a situação na qual os desenvolvedores decidem, por conta própria, sofisticar a implementação de algumas histórias — ou requisitos, de forma mais genérica —, sem que isso tenha sido pedido pelos clientes.\"\n\"Em uma tradução literal, os desenvolvedores ficam cobrindo as histórias com camadas de ouro, quando isso não irá gerar valor para os usuários do sistema.\"\nReferência Bibliográfica: VALENTE, Marco Tulio. Engenharia de Software Moderna. Capítulo 3: Requisitos, Seção 3.3.1 (Exemplo: Sistema de Controle de Bibliotecas)."
},
{
"id": 178,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Num processo de Testes A/B para validar um novo requisito ou alteração de interface, se a versão de tratamento (versão B) atingir o ganho mínimo de conversão esperado logo nos primeiros dias de experimentação, a equipa deve encerrar o teste imediatamente. Esta prática é recomendada pois poupa recursos computacionais e permite lançar a funcionalidade vencedora o mais rapidamente possível para todos os utilizadores.",
"resposta": false,
"justificativa": "\"Posso terminar o teste A/B antes, se ele apresentar o ganho esperado? Não, esse é um erro frequente e grave.\"\n\"Se o tamanho da amostra for de 200 mil usuários, o teste de cada grupo somente pode ser encerrado quando alcançarmos exatamente esse número de usuários.\"\n\"Um possível erro de desenvolvedores quando começam a usar testes A/B consiste em encerrar o teste no primeiro dia em que o ganho mínimo esperado for alcançado, sem testar o resto da amostra.\"\nReferência Bibliográfica: VALENTE, Marco Tulio. Engenharia de Software Moderna. Capítulo 3: Requisitos, Secção 3.6.1 (Perguntas Frequentes)."
},
{
"id": 179,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "A Elicitação de Requisitos consiste na verificação final para garantir que o sistema atenda aos testes de aceitação do cliente; nessa fase, busca-se garantir apenas que os requisitos estejam livres de ambiguidades antes de enviar o documento para os desenvolvedores.",
"resposta": false,
"justificativa": "As atividades relacionadas com a descoberta e entendimento dos requisitos de um sistema são chamadas de Elicitação de Requisitos. Segundo o Dicionário Houaiss, elicitar (ou eliciar) significa fazer sair, expulsar, expelir. No nosso contexto, o termo designa as interações dos desenvolvedores de um sistema com os seus stakeholders, com o objetivo de fazer sair, isto é, descobrir e entender os principais requisitos do sistema que se pretende construir."
},
{
"id": 180,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Requisitos funcionais descrevem características como segurança, desempenho e disponibilidade, enquanto requisitos não funcionais descrevem as funcionalidades oferecidas pelo sistema.",
"resposta": false,
"justificativa": "Segundo Marco Tulio Valente, em seu livro Engenharia de Software Moderna, os requisitos funcionais tratam do que o sistema deve fazer e os requisitos não funcionais sobre quais restrições o sistema deve trabalhar, portanto, segurança,desempenho e disponibilidade são requisitos não funcionais"
},
{
"id": 181,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Na elicitação baseada em etnografia, o desenvolvedor deve interferir nas atividades dos stakeholders para testar imediatamente possíveis soluções.",
"resposta": false,
"justificativa": "Segundo Marco Tulio Valente, em seu livro Engenharia de Software Moderna, na elicitação por etnografia o desenvolvedor deve se integrar no ambiente de trabalho dos stakeholders sem interferir em absolutamente nada, sendo quase como um espião."
},
{
"id": 182,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Requisitos podem mudar ao longo do tempo porque o mundo, as regras do negócio e as necessidades dos usuários também podem mudar.",
"resposta": true,
"justificativa": "Segundo Marco Tulio Valente, em seu livro Engenharia de Software Moderna, requisitos não são imutáveis, pois o mundo está em constante mudança e progresso."
},
{
"id": 183,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Em sistemas cujos requisitos mudam frequentemente e que não são críticos, uma documentação extremamente detalhada produzida antes do desenvolvimento pode se tornar obsoleta.",
"resposta": true,
"justificativa": "Segundo Marco Tulio Valente, em seu livro Engenharia de Software Moderna, em processos ágeis uma documentação detalhada antes pode se tornar obsoleta pois os requisitos podem mudar, ou seja, a documentação não atende mais os requisitos"
},
{
"id": 184,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Requisitos são a ponte que liga um problema do mundo real a um sistema de software que o soluciona.",
"resposta": true,
"justificativa": "3.2.1 O que Vamos Estudar?\n\nA próxima figura resume um pouco o que foi estudado sobre requisitos até agora. Ela mostra que os requisitos são a ponte que liga um problema do mundo real a um sistema de software que o soluciona. Usaremos essa figura para motivar e apresentar os temas que estudaremos no restante deste capítulo."
},
{
"id": 185,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Uma História de Usuário deve necessariamente especificar em detalhes a arquitetura, o banco de dados e a implementação da funcionalidade solicitada.",
"resposta": false,
"justificativa": "Segundo Marco Tulio Valente, em seu livro Engenharia de Software Moderna, as Histórias de Usuário devem abordar muito mais sobre a necessidade do cliente do que como se deve programar o sistema."
},
{
"id": 186,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Construir um MVP significa desenvolver uma versão definitiva e completa do produto antes de colocá-lo em contato com os usuários",
"resposta": false,
"justificativa": "Segundo Marco Tulio Valente, em seu livro Engenharia de Software Moderna, um MVP é um sistema funcional que possui apenas o conjunto mínimo de funcionalidades para testar a viabilidade de um produto, ou seja, não é uma versão definitiva."
},
{
"id": 187,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Testes A/B (ou split tests) são usados para escolher, dentre duas versões de um sistema, aquela que desperta maior interesse dos usuários. As duas versões são idênticas, exceto que uma implementa um requisito A e outra implementa um requisito B, sendo que A e B são mutuamente exclusivos.",
"resposta": true,
"justificativa": "Testes A/B (ou split tests) são usados para escolher, dentre duas versões de um sistema, aquela que desperta maior interesse dos usuários. As duas versões são idênticas, exceto que uma implementa um requisito A e outra implementa um requisito B, sendo que A e B são mutuamente exclusivos. Ou seja, queremos decidir qual requisito vamos de fato adotar no sistema. Para isso, as versões A e B são liberadas para grupos distintos de usuários. Ao final do teste, decide-se qual versão despertou maior interesse desses usuários. Portanto, testes A/B constituem uma abordagem dirigida por dados para seleção de requisitos (ou funcionalidades) que serão oferecidos em um sistema. O requisito vencedor será mantido no sistema e a versão com o requisito perdedor será descartada.\n\nTestes A/B podem ser usados, por exemplo, quando se constrói um MVP (com requisitos A) e, depois de um ciclo construir-medir-aprender pretende-se testar um novo MVP (com requisitos B). Um outro cenário muito comum são testes A/B envolvendo componentes de interfaces com o usuário. Por exemplo, dados dois leiautes da página de entrada de um site, um teste A/B pode ser usado para decidir qual resulta em maior engajamento por parte dos usuários. Pode-se testar também a cor ou posição de um botão da interface, as mensagens usadas, a ordem de apresentação de uma lista, etc. (3.6 Testes A/B)"
},
{
"id": 188,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Métricas de vaidade (vanity metrics) são métricas superficiais que fazem bem para o ego dos desenvolvedores e gerentes de produto, mas que não ajudam a entender e aprimorar uma estratégia de mercado.",
"resposta": true,
"justificativa": "Ao tomar as decisões acima, um risco é usar apenas métricas de vaidade (vanity metrics). Essas são métricas superficiais que fazem bem para o ego dos desenvolvedores e gerentes de produto, mas que não ajudam a entender e aprimorar uma estratégia de mercado. O exemplo clássico é o número de pageviews em um site de comércio eletrônico. Pode fazer muito bem dizer que o site atrai milhões de clientes por mês, mas somente isso não vai ajudar a pagar as contas do empreendimento. Por outro lado, métricas que ajudam a tomar decisões sobre o futuro de um MVP são chamadas de métricas acionáveis (actionable metrics). No caso de um sistema de comércio eletrônico, essas métricas incluiriam o percentual de visitantes que fecham compras, o valor de cada ordem de compra, o número de itens comprados, o custo de captação de novos clientes, etc. Ao monitorar essas métricas, pode-se concluir, por exemplo, que a maioria dos clientes compra apenas um item ao fechar uma compra. Como resultado concreto — ou acionável — pode-se decidir incorporar um sistema de recomendação ao site ou, então, investigar o uso de um sistema de recomendação mais eficiente. Tais sistemas, dada uma compra em andamento, são capazes de sugerir novos itens para serem comprados. Assim, eles têm o potencial de incrementar o número de itens comprados em uma mesma transação."
},
{
"id": 189,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "No conceito de Lean Startup, um Produto Mínimo Viável (MVP) é construído para testar hipóteses de negócio no ciclo construir-medir-aprender. Em um MVP, qualquer esforço adicional em qualidade ou arquitetura além do estritamente necessário para iniciar esse ciclo é considerado desperdício.",
"resposta": true,
"justificativa": "3.5 Produto Mínimo Viável (MVP) 🔗\n\nO conceito de MVP foi popularizado no livro Lean Startup, de Eric Ries (link). Por sua vez, o conceito de Lean Startup é inspirado nos princípios de Manufatura Lean, desenvolvidos por fabricantes japoneses de automóveis, como a Toyota, desde o início dos anos 50. Já comentamos sobre Manufatura Lean no Capítulo 2, pois o processo de desenvolvimento Kanban também foi adaptado de princípios de gerenciamento de produção originados do que ficou conhecido depois como Manufatura Lean. Um dos princípios de Manufatura Lean recomenda eliminar desperdícios em uma linha de montagem ou cadeia de suprimentos. No caso de uma empresa de desenvolvimento de software, o maior desperdício que pode existir é passar anos levantando requisitos e implementando um sistema que depois não vai ser usado, pois ele resolve um problema que não interessa mais a seus usuários. Portanto, se é para um sistema falhar — por não ter sucesso, usuários ou mercado — é melhor falhar rapidamente, pois o desperdício de recursos será menor.\n\nEntão, para deixar claro o nosso cenário, suponha que pretendemos criar um sistema novo, mas não temos certeza de que ele terá usuários e fará sucesso. Como comentado acima, não vale a pena passar um ou dois anos levantando os requisitos desse sistema, para então concluir que ele será um fracasso. Por outro lado, não faz muito sentido também realizar pesquisas de mercado, para aferir a receptividade do sistema antes de implementá-lo. Como ele é um sistema novo, com requisitos diferentes de quaisquer sistemas existentes, os resultados de uma pesquisa de mercado podem não ser confiáveis.\n\nUma solução consiste em implementar um sistema simples, com um conjunto de requisitos mínimos, mas que sejam suficientes para testar a viabilidade de continuar investindo no seu desenvolvimento. Em Lean Startup, esse primeiro sistema é chamado de Produto Mínimo Viável (MVP). Costuma-se dizer também que o objetivo de um MVP é testar uma hipótese de negócio.\n\nLean startup propõe um método sistemático e científico para construção e validação de MVPs. Esse método consiste em um ciclo com três passos: construir, medir e aprender (veja próxima figura). No primeiro passo (construir), tem-se uma ideia de produto e então implementa-se um MVP para testá-la. No segundo passo (medir), o MVP é disponibilizado para uso por clientes reais com o intuito de coletar dados sobre a sua viabilidade. No terceiro passo (aprender), as métricas coletadas são analisadas e geram o que se denomina de aprendizado validado (validated learning)."
},
{
"id": 190,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Casos de uso são escritos na perspectiva de um ator que deseja usar o sistema com um objetivo. Tipicamente, esse ator é um usuário humano (embora possa ser um outro sistema de software ou hardware). Ou seja, normalmente, o ator é uma entidade externa ao sistema.",
"resposta": true,
"justificativa": "3.4 Casos de Uso\n\nCasos de uso (use cases) são documentos textuais de especificação de requisitos. Como veremos nesta seção, eles incluem descrições mais detalhadas do que histórias de usuários. Recomenda-se que casos de uso sejam escritos na fase de Especificação de Requisitos, considerando que estamos seguindo um processo de desenvolvimento do tipo Waterfall. Eles são escritos pelos próprios desenvolvedores do sistema — às vezes, chamados de Engenheiros de Requisitos durante essa fase do desenvolvimento. Para isso, os desenvolvedores podem se valer, por exemplo, de entrevistas com os usuários do sistema. Apesar de escritos pelos desenvolvedores, casos de uso podem ser lidos, entendidos e validados pelos usuários, antes de as fases de design e implementação terem início.\n\nCasos de uso são escritos na perspectiva de um ator que deseja usar o sistema com um objetivo. Tipicamente, esse ator é um usuário humano (embora possa ser um outro sistema de software ou hardware). Ou seja, normalmente, o ator é uma entidade externa ao sistema."
},
{
"id": 191,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Segundo Frederick Brooks, as dificuldades acidentais do desenvolvimento de software são da natureza da área e dificilmente serão superadas por qualquer nova tecnologia ou método.",
"resposta": false,
"justificativa": "VALENTE, Marco Tulio. Engenharia de Software Moderna. Cap. 1: Introdução. Disponível em: https://engsoftmoderna.info/cap1.html. Acesso em: 28 set. 2026.\n\nSeção 1.1, \"Não existe bala de prata\", p. 4: \"As essenciais são da natureza da área e dificilmente serão superadas por qualquer nova tecnologia ou método que se invente.\" A característica descrita no enunciado pertence às dificuldades essenciais.\nMesma seção, p. 5: as acidentais \"estão associadas a problemas tecnológicos, que os Engenheiros de Software podem resolver, se devidamente treinados e caso tenham acesso às devidas tecnologias e recursos.\""
},
{
"id": 192,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Verificação e validação são conceitos distintos: verificação busca garantir que o sistema atende à sua especificação, enquanto validação busca garantir que ele atende às necessidades dos clientes.",
"resposta": true,
"justificativa": "VALENTE, Marco Tulio. Engenharia de Software Moderna. Cap. 1: Introdução. Disponível em: https://engsoftmoderna.info/cap1.html. Acesso em: 28 set. 2026.\n\nSeção 1.2.4, p. 9: \"Verificação tem como o objetivo garantir que um sistema atende à sua especificação. Já com validação, o objetivo é garantir que um sistema atende às necessidades de seus clientes.\"\nMesma página: \"Verificação: estamos implementando o sistema corretamente? [...] Validação: estamos implementando o sistema correto?\""
},
{
"id": 193,
"topico": "Testes (Valente, 2020, Capítulo 8)",
"texto": "..........",
"resposta": false,
"justificativa": "."
},
{
"id": 194,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Todo defeito (bug) presente no código de um sistema ocasiona, obrigatoriamente, uma falha durante a sua execução.",
"resposta": false,
"justificativa": "\"Portanto, nem todo defeito ou bug ocasiona falhas, pois pode ser que o código defeituoso nunca seja executado.\"\n\n\"[...] uma falha ocorre quando um código com defeito for executado [...] e, com isso, levar o programa a apresentar um resultado incorreto.\" Seção 1.2.4, Testes de Software, p. 9"
},
{
"id": 195,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Refactoring é um tipo de manutenção realizada para incluir novas funcionalidades no sistema, alterando seu comportamento para melhor atender aos clientes.",
"resposta": false,
"justificativa": "\"Refactorings são modificações realizadas em um software preservando seu comportamento e visando exclusivamente a melhoria de seu código ou projeto.\"\n\n\"Manutenção evolutiva é aquela realizada para incluir uma nova funcionalidade ou introduzir aperfeiçoamentos importantes em funcionalidades existentes.\" Seção 1.2.5, Manutenção e Evolução de Software, p. 11"
},
{
"id": 196,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Os Sistemas A (de missão crítica, como o controle de um avião ou de uma usina nuclear) são o principal foco do livro, por serem os que mais se beneficiam dos princípios e práticas de Engenharia de Software apresentados.",
"resposta": false,
"justificativa": "\"[...] sistemas A (isto é, de missão crítica) não serão tratados neste livro.\"\n\n\"Sobram os sistemas B (Business), que são exatamente aqueles que vão se beneficiar dos conceitos estudados neste livro.\" Seção 1.3, Classificação de Sistemas de Software, pp. 22–23"
},
{
"id": 197,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "De acordo com a Lei de Brooks, incluir novos desenvolvedores em um projeto de software que já está atrasado contribui para torná-lo ainda mais atrasado, em parte porque o esforço de comunicação e coordenação cresce com o tamanho da equipe.",
"resposta": true,
"justificativa": "\"A inclusão de novos desenvolvedores em um projeto que está atrasado contribui para torná-lo ainda mais atrasado.\"\n\n\"[...] equipes maiores exigem um maior esforço de comunicação e coordenação para tomar e explicar decisões.\" (3 desenvolvedores: 3 canais; 4: 6 canais; 10: 45 canais) Seção 1.2.7, Gerência de Projetos, p. 13"
},
{
"id": 198,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Em XP, o design do sistema deve ser definido por completo no início do projeto, em uma fase de Big Design Up Front, antes de qualquer codificação.",
"resposta": false,
"justificativa": "\"[...] em XP não há uma fase de design e análise detalhados, conhecida como Big Design Up Front (BDUF) [...]\"\n\n\"[...] isso deve ser uma atividade contínua e incremental, em vez de estar concentrada no início do projeto, antes de qualquer codificação.\" Seção 2.3.4, Práticas de Programação (Design Incremental), pp. 17–18"
},
{
"id": 199,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Em Scrum, o Scrum Master é responsável por garantir que as regras do método estejam sendo seguidas e por remover impedimentos, mas não é o líder do time nem um gerente de projeto tradicional.",
"resposta": true,
"justificativa": "\"[...] sendo responsável por garantir que as regras do método estão sendo seguidas.\"\n\n\"Ele também deve desempenhar funções de um facilitador dos trabalhos e removedor de impedimentos.\"\n\n\"[...] ele não é um gerente de projeto tradicional. [...] ele não é o líder do time, pois todos em um time Scrum têm o mesmo nível hierárquico.\" Seção 2.4.1, Papéis, pp. 24–25"
},
{
"id": 200,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Em Scrum, o objetivo do sprint (sprint goal) pode ser alterado a qualquer momento durante o sprint, já que o Backlog do Sprint é um artefato dinâmico.",
"resposta": false,
"justificativa": "\"Porém, o que não pode ser alterado é o objetivo do sprint (sprint goal), isto é, a lista de histórias que o dono do produto selecionou para o sprint [...]\"\n\n\"Assim, Scrum é um método adaptável a mudanças, mas desde que elas ocorram entre sprints.\" Seção 2.4.2, Principais Artefatos e Eventos (Backlog do Sprint), p. 26"
},
{
"id": 201,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "De acordo com a Lei de Little (WIP = TP × LT), um passo de um Quadro Kanban com lead time médio de 10 dias e throughput de 0,5 tarefa/dia deve ter limite WIP igual a 5 tarefas.",
"resposta": true,
"justificativa": "\"Por fim, o WIP de cada passo é assim definido: WIP(passo) = TP * LT(passo).\" Seção 2.5.1, Calculando os Limites WIP, p. 36\n\n\"Ou seja, de acordo com a Lei de Little: WIP = TP * LT.\" Seção 2.5.2, Lei de Little, p. 37\n\nCálculo: 0,5 × 10 = 5."
},
{
"id": 202,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "O Manifesto Ágil, proposto em 2001, em Utah, afirma valorizar mais os processos e ferramentas do que os indivíduos e interações, e mais a documentação abrangente do que o software em funcionamento.",
"resposta": false,
"justificativa": "\"Por meio deste trabalho, passamos a valorizar: Indivíduos e interações, mais do que processos e ferramentas; Software em funcionamento, mais do que documentação abrangente; Colaboração com o cliente, mais do que negociação de contratos; Resposta a mudanças, mais do que seguir um plano.\" Seção 2.2, Manifesto Ágil, p. 4"
},
{
"id": 203,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "O Modelo em Espiral e o Processo Unificado (UP) são métodos iterativos, mas não são considerados ágeis, pois suas iterações duram alguns meses e eles preservam a ênfase em documentação e em uma fase inicial de requisitos e design.",
"resposta": true,
"justificativa": "\"[...] as iterações têm duração maior do que aquela usual em desenvolvimento ágil. Em vez de poucas semanas, elas duram alguns meses.\"\n\n\"Por outro lado, eles preservam características relevantes de Waterfall, como ênfase em documentação e em uma fase inicial de levantamento de requisitos e depois de design.\" Seção 2.7, Outros Métodos Iterativos, p. 40\n\n\"[...] cada iteração, somando-se as quatro fases, pode levar de 6 a 24 meses.\" Seção 2.7, p. 41"
},
{
"id": 204,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Em Engenharia de Requisitos, requisitos funcionais descrevem restrições de qualidade, como disponibilidade e desempenho, enquanto requisitos não-funcionais descrevem as funcionalidades que o sistema deve oferecer.",
"resposta": false,
"justificativa": "“Requisitos definem o que um sistema deve fazer e sob quais restrições.”\n\nOs requisitos funcionais correspondem ao que o sistema deve fazer; os não-funcionais impõem restrições, como desempenho, disponibilidade e segurança. Seção 3.1, pp. 1–2."
},
{
"id": 205,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Na elicitação de requisitos por etnografia, o desenvolvedor pode se integrar ao ambiente de trabalho dos stakeholders e observar como eles realizam suas atividades, sem interferir nas tarefas observadas.",
"resposta": true,
"justificativa": "A etnografia recomenda que o desenvolvedor se integre ao ambiente de trabalho dos stakeholders e observe como eles desenvolvem suas atividades.\n\nA observação é descrita como silenciosa, sem interferência ou opinião do desenvolvedor. Seção 3.2, pp. 3–4."
},
{
"id": 206,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Uma história de usuário é composta apenas pelo Cartão e pelas Conversas; a Confirmação é opcional e, quando existe, deve obrigatoriamente ser implementada como um teste automatizado de unidade.",
"resposta": false,
"justificativa": "“História de Usuário = Cartão + Conversas + Confirmação.”\n\nA confirmação é um teste de alto nível definido pelo cliente e não precisa ser um teste automatizado, como um teste de unidade. Seção 3.3, pp. 8–9."
},
{
"id": 207,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Em casos de uso, situações alternativas e erros podem ser descritos como extensões do fluxo normal; por isso, recomenda-se evitar decisões com “se” no fluxo normal e deslocá-las, quando apropriado, para extensões.",
"resposta": true,
"justificativa": "As extensões podem detalhar passos do fluxo normal e tratar erros, exceções e cancelamentos.\n\nO capítulo recomenda evitar comandos de decisão (“se”) no fluxo normal e representar decisões como extensões. Seção 3.4, pp. 15–16."
},
{
"id": 208,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "O objetivo de um Produto Mínimo Viável (MVP) é entregar desde o início um produto com o conjunto completo de funcionalidades planejadas, evitando expô-lo a clientes reais até que todos os requisitos estejam implementados.",
"resposta": false,
"justificativa": "Um MVP possui um conjunto mínimo de requisitos suficiente para testar a viabilidade de continuar investindo no produto.\n\nNo ciclo construir–medir–aprender, o MVP é disponibilizado a clientes reais para coletar dados e produzir aprendizado validado. Seção 3.5, pp. 20–21."
},
{
"id": 209,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Em um teste A/B, a versão original pode funcionar como grupo de controle e a nova versão como tratamento; os usuários devem ser distribuídos aleatoriamente entre as versões e uma taxa de conversão pode ser usada para comparar os resultados.",
"resposta": true,
"justificativa": "Testes A/B comparam uma versão de controle com uma versão de tratamento para escolher entre requisitos mutuamente exclusivos.\n\nO capítulo recomenda seleção aleatória dos usuários e o uso de uma métrica de ganho, chamada genericamente de taxa de conversão. Seção 3.6, pp. 25–26."
},
{
"id": 210,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "A Engenharia de Software envolve a aplicação de abordagens sistemáticas, disciplinadas e quantificáveis para desenvolver, operar, manter e evoluir software.",
"resposta": true,
"justificativa": "Citação textual:\nEngenharia de Software trata da aplicação de abordagens sistemáticas, disciplinadas e quantificáveis para desenvolver, operar, manter e evoluir software.\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Cap. 1, Seção 1.1."
},
{
"id": 211,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "A Conferência da OTAN realizada em 1968 é considerada um marco histórico da criação da área de Engenharia de Software.",
"resposta": true,
"justificativa": "Citação textual:\nPor isso, a Conferência da OTAN é considerada o marco histórico de criação da área de Engenharia de Software.\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Cap. 1, Seção 1.1."
},
{
"id": 212,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Engenharia de Software é a área da Computação que se preocupa em propor e aplicar princípios de engenharia na construção de software.",
"resposta": true,
"justificativa": "“Engenharia de Software é a área da Computação que se preocupa em propor e aplicar princípios de engenharia na construção de software.”\n\nReferência bibliográfica:\nVALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Capítulo 1 — Introdução, seção 1.1."
},
{
"id": 213,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Segundo Frederick Brooks, as dificuldades essenciais encontradas no desenvolvimento de software podem ser completamente eliminadas por meio de novas tecnologias ou métodos de desenvolvimento.",
"resposta": false,
"justificativa": "“As essenciais são da natureza da área e dificilmente serão superadas por qualquer nova tecnologia ou método que se invente.”\n\nReferência bibliográfica:\nVALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Capítulo 1 — Introdução, seção 1.1, subseção “Não existe bala de prata”."
},
{
"id": 214,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Segundo Frederick Brooks, as dificuldades acidentais são inerentes à natureza do software e dificilmente podem ser superadas por novas tecnologias ou métodos.",
"resposta": false,
"justificativa": "Citação textual:\nAinda segundo Brooks, desenvolvimento de software enfrenta também dificuldades acidentais. No entanto, elas estão associadas a problemas tecnológicos, que os Engenheiros de Software podem resolver, se devidamente treinados e caso tenham acesso às devidas tecnologias e recursos.\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Cap. 1, Seção 1.1."
},
{
"id": 215,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Segundo o SWEBOK, Engenharia de Requisitos, Projeto de Software, Construção de Software e Testes de Software estão entre as áreas de conhecimento da Engenharia de Software.",
"resposta": true,
"justificativa": "“O SWEBOK define 12 áreas de conhecimento em Engenharia de Software:”\n\nEntre elas, o capítulo apresenta Engenharia de Requisitos, Projeto de Software, Construção de Software e Testes de Software.\n\nReferência bibliográfica:\nVALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Capítulo 1 — Introdução, seção 1.2."
},
{
"id": 216,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Requisitos não-funcionais estão relacionados exclusivamente às funcionalidades que um sistema deve oferecer aos seus usuários.",
"resposta": false,
"justificativa": "“Já os requisitos não-funcionais, dentre outros, incluem:”\n\nO capítulo apresenta como exemplos de requisitos não-funcionais desempenho, disponibilidade, tolerância a falhas, segurança, privacidade, interoperabilidade, capacidade e usabilidade.\n\nReferência bibliográfica:\nVALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Capítulo 1 — Introdução, seção 1.2.1."
},
{
"id": 217,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "A realização de testes de software é suficiente para provar que um sistema não possui nenhum bug.",
"resposta": false,
"justificativa": "O próprio Capítulo 1 apresenta como exercício de fixação a seguinte questão:\n\n“Por que testes não conseguem provar a ausência de bugs?”\n\nAlém disso, o capítulo apresenta testes como uma das áreas de conhecimento da Engenharia de Software e discute a necessidade de atividades de qualidade durante o desenvolvimento.\n\nReferência bibliográfica:\nVALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Capítulo 1 — Introdução, seção 1.2 e Exercícios de Fixação."
},
{
"id": 218,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "A conformidade, segundo Brooks, está relacionada à necessidade de o software se adaptar ao ambiente em que está inserido, inclusive quando esse ambiente muda.",
"resposta": true,
"justificativa": "Citação textual:\nConformidade: pela sua natureza software tem que se adaptar ao seu ambiente, que muda a todo momento no mundo moderno.\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Cap. 1, Seção 1.1."
},
{
"id": 219,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Nos processos Waterfall, a construção do software é organizada em etapas sequenciais, incluindo levantamento de requisitos, análise, projeto, codificação e testes.",
"resposta": true,
"justificativa": "“Processos Waterfall [...] propõem que a construção de um sistema deve ser feita em etapas sequenciais.”\n\nO capítulo apresenta como etapas: levantamento de requisitos, análise, projeto detalhado, codificação e testes.\n\nReferência bibliográfica:\nVALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Capítulo 1 — Introdução, seção 1.2.8."
},
{
"id": 220,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Um processo de desenvolvimento de software define um conjunto de passos, tarefas, eventos e práticas que devem ser seguidos pelos desenvolvedores durante a produção de um sistema.",
"resposta": true,
"justificativa": "“Um processo de desenvolvimento de software define um conjunto de passos, tarefas, eventos e práticas que devem ser seguidos por desenvolvedores de software, na produção de um sistema.”\n\nReferência bibliográfica:\nVALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Capítulo 2 — Processos, seção 2.1."
},
{
"id": 221,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Durante o projeto de um sistema de software, são definidos os detalhes de implementação de cada unidade de código, como a implementação dos métodos de uma classe.",
"resposta": false,
"justificativa": "Citação textual:\nPortanto, durante o projeto de um sistema de software, não entramos em detalhes de implementação de cada unidade de código, tais como detalhes de implementação dos métodos de uma classe, caso o sistema seja implementado em uma linguagem orientada a objetos.\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Cap. 1, Seção 1.2.2."
},
{
"id": 222,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Segundo o capítulo, sistemas de software modernos podem ser desenvolvidos de maneira eficiente por uma única pessoa, tornando desnecessária a adoção de processos pelas equipes.",
"resposta": false,
"justificativa": "“Porém, os sistemas de software atuais são por demais complexos para serem desenvolvidos por uma única pessoa.”\n\nE ainda:\n\n“essas equipes, para produzir software com qualidade e produtividade, precisam de um ordenamento, mesmo que mínimo.”\n\nReferência bibliográfica:\nVALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Capítulo 2 — Processos, seção 2.1."
},
{
"id": 223,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "O Manifesto Ágil valoriza processos e ferramentas mais do que indivíduos e interações, pois a padronização do processo deve ser priorizada no desenvolvimento de software.",
"resposta": false,
"justificativa": "“Indivíduos e interações, mais do que processos e ferramentas”\n\nO capítulo apresenta essa frase como um dos quatro valores do Manifesto Ágil.\n\nReferência bibliográfica:\nVALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Capítulo 2 — Processos, seção 2.2."
},
{
"id": 224,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Nos processos ágeis, o desenvolvimento normalmente ocorre em ciclos curtos e iterativos, permitindo que o sistema seja construído gradualmente e receba feedback dos clientes ao longo do desenvolvimento.",
"resposta": true,
"justificativa": "“A característica principal de processos ágeis é a adoção de ciclos curtos e iterativos de desenvolvimento, por meio dos quais um sistema é implementado de forma gradativa.”\n\nO capítulo também explica que cada incremento pode ser validado pelo cliente antes do início de uma nova iteração.\n\nReferência bibliográfica:\nVALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Capítulo 2 — Processos, seção 2.2."
},
{
"id": 225,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "No Scrum, pode existir mais de um Dono do Produto no mesmo time, pois as decisões sobre o produto devem ser tomadas por um comitê formado por vários representantes.",
"resposta": false,
"justificativa": "“A resposta é não. Apenas um membro do time exerce essa função.”\n\nO capítulo explica que o objetivo é evitar decisões por comitê, que podem levar à criação de produtos com muitas funcionalidades implementadas para atender a diferentes membros do comitê.\n\nReferência bibliográfica:\nVALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Capítulo 2 — Processos, seção 2.4.5."
},
{
"id": 226,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Diferentemente do Scrum, o Kanban não define uma lista fixa de papéis que obrigatoriamente devem existir no time.",
"resposta": true,
"justificativa": "“Ao contrário de Scrum, Kanban não define uma lista fixa de papéis.”\n\nO capítulo explica que cabe ao time e à organização definir os papéis que existirão no processo de desenvolvimento.\n\nReferência bibliográfica:\nVALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Capítulo 2 — Processos, seção 2.5.3."
},
{
"id": 227,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Requisitos de software descrevem apenas as funcionalidades que um sistema deve oferecer, não incluindo restrições ou características relacionadas à qualidade do sistema.",
"resposta": false,
"justificativa": "“Os requisitos de um sistema definem o que ele deve fazer e como ele deve operar.”\n\nO livro também diferencia requisitos funcionais, que definem o que o sistema deve fazer, de requisitos não-funcionais, que definem como o sistema deve operar e sob quais restrições.\n\nReferência bibliográfica:\nVALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Capítulo 3 — Requisitos."
},
{
"id": 228,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "A manutenção corretiva tem como objetivo corrigir bugs latentes que ainda não causaram falhas aos usuários.",
"resposta": false,
"justificativa": "Citação textual:\nManutenção corretiva tem como objetivo corrigir bugs reportados por usuários ou outros desenvolvedores.\nPor sua vez, manutenção preventiva tem como objetivo corrigir bugs latentes no código, que ainda não causaram falhas junto aos usuários do sistema.\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Cap. 1, Seção 1.2.5."
},
{
"id": 229,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Uma história de usuário normalmente descreve uma funcionalidade do ponto de vista de um determinado tipo de usuário e utiliza uma linguagem próxima da linguagem desse usuário.",
"resposta": true,
"justificativa": "O capítulo apresenta histórias de usuário como uma técnica leve para especificação de requisitos, orientada à perspectiva dos usuários. Também destaca que elas são escritas utilizando a linguagem dos usuários.\n\nReferência bibliográfica:\nVALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Capítulo 3 — Requisitos."
},
{
"id": 230,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Em uma história de usuário, é recomendável que toda a especificação do requisito seja detalhada e documentada antes de qualquer conversa entre desenvolvedores e representantes dos usuários.",
"resposta": false,
"justificativa": "O capítulo apresenta histórias de usuário como uma técnica de especificação leve. Elas servem como um lembrete para que o requisito seja posteriormente detalhado por meio da comunicação entre os envolvidos.\n\nReferência bibliográfica:\nVALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Capítulo 3 — Requisitos."
},
{
"id": 231,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Casos de uso são uma técnica utilizada para especificar requisitos, descrevendo interações entre atores e um sistema para alcançar determinados objetivos.",
"resposta": true,
"justificativa": "O capítulo apresenta casos de uso como uma técnica tradicional de especificação de requisitos, utilizada para descrever as interações entre usuários ou outros atores e o sistema.\n\nReferência bibliográfica:\nVALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Capítulo 3 — Requisitos."
},
{
"id": 232,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Um Produto Mínimo Viável (MVP) deve necessariamente conter todas as funcionalidades planejadas para a versão final do produto, pois somente assim é possível avaliar sua aceitação pelos usuários.",
"resposta": false,
"justificativa": "O conceito de MVP apresentado no material está relacionado à criação de uma versão inicial de um produto com funcionalidades suficientes para possibilitar aprendizado e validação junto aos usuários.\n\nReferência bibliográfica:\nVALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Capítulo 3 — Requisitos."
},
{
"id": 233,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Testes A/B permitem comparar diferentes versões de uma funcionalidade ou produto, observando o comportamento dos usuários para avaliar qual alternativa apresenta melhores resultados segundo métricas definidas.",
"resposta": true,
"justificativa": "O Capítulo 3 apresenta os testes A/B como uma técnica para avaliar alternativas de um produto por meio de experimentos com usuários e métricas de comportamento.\n\nReferência bibliográfica:\nVALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Capítulo 3 — Requisitos."
},
{
"id": 234,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Um processo de desenvolvimento de software define um conjunto de passos, tarefas, eventos e práticas que devem ser seguidos na produção de um sistema.",
"resposta": true,
"justificativa": "Citação textual:\nUm processo de desenvolvimento de software define um conjunto de passos, tarefas, eventos e práticas que devem ser seguidos por desenvolvedores de software, na produção de um sistema.\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Cap. 2, Seção 2.1."
},
{
"id": 235,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "O Manifesto Ágil estabelece que a documentação abrangente deve ser mais valorizada do que software em funcionamento.",
"resposta": false,
"justificativa": "Citação textual:\nSoftware em funcionamento, mais do que documentação abrangente\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Cap. 2, Seção 2.2."
},
{
"id": 236,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Uma característica principal dos processos ágeis é o uso de ciclos curtos e iterativos, nos quais o sistema é construído gradativamente.",
"resposta": true,
"justificativa": "Citação textual:\nA característica principal de processos ágeis é a adoção de ciclos curtos e iterativos de desenvolvimento, por meio dos quais um sistema é implementado de forma gradativa; começando por aquilo que é mais urgente para o cliente.\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Cap. 2, Seção 2.2."
},
{
"id": 237,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Scrum é um método voltado exclusivamente ao desenvolvimento de software e prescreve práticas de programação, como programação em pares e testes de unidade.",
"resposta": false,
"justificativa": "Citações textuais:\nTrecho 1: Scrum é um método ágil para gerenciamento de projetos, que não necessariamente precisam ser projetos de desenvolvimento de software.\nTrecho 2: Tendo um foco mais amplo que XP, Scrum não propõe nenhuma prática de programação.\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Cap. 2, Seção 2.4."
},
{
"id": 238,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Um time Scrum é formado por Dono do Produto, Scrum Master e desenvolvedores.",
"resposta": true,
"justificativa": "Citação textual:\nTimes Scrum são formados por um Dono de Produto (Product Owner ou apenas PO), um Scrum Master e de três a nove desenvolvedores.\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Cap. 2, Seção 2.4.1."
},
{
"id": 239,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Em Kanban, os limites WIP ajudam a evitar que o time fique sobrecarregado de tarefas.",
"resposta": true,
"justificativa": "Citação textual:\nPara evitar a segunda situação — sobrecarga de trabalho — Kanban propõe um limite máximo de tarefas que podem estar em cada um dos passos de um Quadro Kanban.\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Cap. 2, Seção 2.5."
},
{
"id": 240,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Requisitos de usuário são normalmente de mais alto nível e escritos em linguagem natural, enquanto requisitos de sistema são mais técnicos e precisos.",
"resposta": true,
"justificativa": "Citação textual:\nRequisitos de usuários são requisitos de mais alto nível, escritos por usuários, normalmente em linguagem natural e sem entrar em detalhes técnicos. Já requisitos de sistema são técnicos, precisos e escritos pelos próprios desenvolvedores.\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Cap. 3, Seção 3.1."
},
{
"id": 241,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Depois de elicitados, os requisitos devem ser documentados, verificados e validados, além de priorizados.",
"resposta": true,
"justificativa": "Citação textual:\nApós elicitados, os requisitos devem ser: (1) documentados, (2) verificados e validados e (3) priorizados.\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Cap. 3, Seção 3.2."
},
{
"id": 242,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Um requisito que apenas determina que ‘o sistema deve ser amigável’ é considerado verificável pelo autor.",
"resposta": false,
"justificativa": "Citação textual:\nRequisitos devem ser verificáveis, isto é, deve ser possível testar se os requisitos estão sendo atendidos. Um contra-exemplo é um requisito que apenas requer que o sistema seja amigável.\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Cap. 3, Seção 3.2."
},
{
"id": 243,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "De acordo com as características INVEST, boas histórias de usuários devem, idealmente, ser independentes umas das outras e abertas para negociação.",
"resposta": true,
"justificativa": "Citação textual:\nHistórias devem ser independentes: dadas duas histórias X e Y, deve ser possível implementá-las em qualquer ordem. Para isso, idealmente, não devem existir dependências entre elas.\nHistórias devem ser abertas para negociação.\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Cap. 3, Seção 3.3."
},
{
"id": 244,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "O conceito de MVP recomenda investir vários anos no levantamento e implementação completa dos requisitos antes de verificar se o sistema desperta interesse dos usuários.",
"resposta": false,
"justificativa": "Citações textuais:\nTrecho 1: Um dos princípios de Manufatura Lean recomenda eliminar desperdícios em uma linha de montagem ou cadeia de suprimentos. No caso de uma empresa de desenvolvimento de software, o maior desperdício que pode existir é passar anos levantando requisitos e implementando um sistema que depois não vai ser usado, pois ele resolve um problema que não interessa mais a seus usuários. Portanto, se é para um sistema falhar — por não ter sucesso, usuários ou mercado — é melhor falhar rapidamente, pois o desperdício de recursos será menor.\nTrecho 2: Uma solução consiste em implementar um sistema simples, com um conjunto de requisitos mínimos, mas que sejam suficientes para testar a viabilidade de continuar investindo no seu desenvolvimento. Em Lean Startup, esse primeiro sistema é chamado de Produto Mínimo Viável (MVP).\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Cap. 3, Seção 3.5."
},
{
"id": 245,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Um caso de uso é escrito na perspectiva de um ator que pretende utilizar o sistema para alcançar um determinado objetivo.",
"resposta": true,
"justificativa": "Citação textual:\nCasos de uso são escritos na perspectiva de um ator que deseja usar o sistema com um objetivo.\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020. Cap. 3, Seção 3.4."
},
{
"id": 246,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Segundo Brooks, as dificuldades acidentais são inerentes à natureza do software. Um compilador com mensagens de erro obscuras ou um framework sem documentação são exemplos de problemas que nenhuma nova tecnologia consegue superar.",
"resposta": false,
"justificativa": "Ainda segundo Brooks, desenvolvimento de software enfrenta também dificuldades acidentais. No entanto, elas estão associadas a problemas tecnológicos, que os Engenheiros de Software podem resolver, se devidamente treinados e caso tenham acesso às devidas tecnologias e recursos. Como exemplo, podemos citar as seguintes dificuldades: um compilador que produz mensagens de erro obscuras, uma IDE que possui muitos bugs e frequentemente sofre travamentos, um framework que não possui documentação, uma aplicação Web com uma interface pouco intuitiva, etc. Todas essas dificuldades dizem respeito à solução adotada e, portanto, não são uma característica inerente dos sistemas mencionados."
},
{
"id": 247,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Testar se um método retorna o resultado especificado é uma atividade de verificação. Fazer um teste de aceitação com o cliente, mostrando as funcionalidades do sistema, é uma atividade de validação.",
"resposta": true,
"justificativa": "Assim, quando se realiza um teste de um método, para verificar se ele retorna o resultado especificado, estamos realizando uma atividade de verificação. Por outro lado, quando realizamos um teste funcional e de aceitação, ao lado do cliente, isto é, mostrando para ele os resultados e funcionalidades do sistema, estamos realizando uma atividade de validação."
},
{
"id": 248,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Migrar um sistema de Python 2.7 para Python 3.0 é um exemplo de manutenção evolutiva, porque o sistema passa a usar uma versão mais nova da linguagem.",
"resposta": false,
"justificativa": "Manutenção adaptativa tem como objetivo adaptar um sistema a uma mudança em seu ambiente, incluindo tecnologia, legislação, regras de integração com outros sistemas ou demandas de novos clientes. Como exemplos de manutenção adaptativa podemos citar:\n\n    A migração de um sistema de Python 2.7 para Python 3.0"
},
{
"id": 249,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Ian Sommerville classifica os requisitos em requisitos de usuário e requisitos de sistema. Requisitos de sistema são requisitos de mais alto nível, escritos pelos próprios usuários, em linguagem natural e sem entrar em detalhes técnicos. Já os requisitos de usuário são técnicos, precisos e escritos pelos desenvolvedores, estando mais próximos da solução do que do problema.",
"resposta": false,
"justificativa": "“Alguns autores, como Ian Sommerville (link), também classificam requisitos em requisitos de usuário e requisitos de sistema. Requisitos de usuários são requisitos de mais alto nível, escritos por usuários, normalmente em linguagem natural e sem entrar em detalhes técnicos. Já requisitos de sistema são técnicos, precisos e escritos pelos próprios desenvolvedores.” (Valente, Engenharia de Software Moderna, 2020, Capítulo 3.1)"
},
{
"id": 250,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "O Padrão IEEE 830 foi criado no contexto de processos ágeis de desenvolvimento, servindo como um complemento técnico e detalhado às histórias de usuário, de forma a documentar os requisitos não-funcionais que não cabem nos cartões dessas histórias.",
"resposta": false,
"justificativa": "“Na década de 90, chegou-se a propor um padrão para Documentos de Especificação de Requisitos, denominado Padrão IEEE 830. Ele foi proposto no contexto de Processos Waterfall, isto é, processos que possuem uma longa fase inicial de levantamento de requisitos.” (Valente, Engenharia de Software Moderna, 2020, Capítulo 3.2)"
},
{
"id": 251,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Boas histórias do usuário devem possuir algumas características, elas devem ser: independentes, negociáveis, devem agregar valor, estimáveis, sucintas e testáveis. Tais características formam o acrônimo INVEST, em inglês.",
"resposta": true,
"justificativa": "“Boas histórias devem possuir as seguintes características (cujas iniciais em inglês dão origem ao\nacrônimo INVEST): Histórias devem ser independentes […] Histórias devem ser abertas para negociação. […] Histórias devem agregar valor para o negócio dos clientes. […] Deve ser viável estimar o tamanho de uma história. […] Histórias devem ser sucintas e pequenas. […] Histórias devem ser testáveis [...]” (Valente, Engenharia de Software Moderna, 2020, Capítulo 3.3)"
},
{
"id": 252,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Os casos de uso também tratam de aspectos tecnológicos ou de design. Então é necessário informar a interface que o ator principal usará para se comunicar com o sistema. Dessa forma, melhorando a especificação de requisitos do sistema.",
"resposta": false,
"justificativa": "“Casos de uso não devem tratar de aspectos tecnológicos ou de design. Além disso, eles não precisam mencionar a interface que o ator principal usará para se comunicar com o sistema. Por exemplo, não se deve escrever algo como: “o cliente pressiona o botão verde para confirmar a transferência”.” (Valente, Engenharia de Software Moderna, 2020, Capítulo 3.4)"
},
{
"id": 253,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "O livro Lean Startup sugere um método para construção e validação de startups, esse método consiste em três passos: construir, medir e aprender. Em “construir” o MVP é implementado, em “medir” ele é disponibilizado para o público a fim de coletar dados sobre sua viabilidade e em “aprender” as métricas extraídas são analisadas e geram o aprendizado validado.",
"resposta": true,
"justificativa": "“Lean startup propõe um método sistemático e científico para construção e validação de MVPs. Esse método consiste em um ciclo com três passos: construir, medir e aprender (veja próxima figura). No primeiro passo (construir), tem-se uma ideia de produto e então implementa-se um MVP para testá-la. No segundo passo (medir), o MVP é disponibilizado para uso por clientes reais com o intuito de coletar dados sobre a sua viabilidade. No terceiro passo (aprender), as métricas coletadas são analisadas e geram o que se denomina de aprendizado validado (validated learning).” (Valente, Engenharia de Software Moderna, 2020, Capítulo 3.5)"
},
{
"id": 254,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Uma das explicações da Lei de Brooks é o aumento dos canais de comunicação: equipes maiores exigem um maior esforço de comunicação e coordenação para tomar e explicar decisões.",
"resposta": true,
"justificativa": "\"A inclusão de novos desenvolvedores em um projeto que está atrasado contribui para torná-lo ainda mais atrasado.\"\n\nEssa frase ficou tão famosa que ela é hoje conhecida como Lei de Brooks. Basicamente, esse efeito acontece porque os novos desenvolvedores terão primeiro que entender e compreender todo o sistema, sua arquitetura e seu projeto (design), antes de começarem a produzir código útil. Além disso, equipes maiores exigem um maior esforço de comunicação e coordenação para tomar e explicar decisões. Por exemplo, se um time tem 3 desenvolvedores (d1, d2, d3), existem 3 canais de comunicação possíveis (d1-d2, d1-d3 e d2-d3); se ele cresce para 4 desenvolvedores, o número de canais duplica, para 6 canais. Se ele cresce para 10 desenvolvedores, passam a existir 45 canais de comunicação. Por isso, modernamente, software é desenvolvido em times pequenos, com uma dezena de engenheiros, se tanto."
},
{
"id": 255,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Quando se trata de testes A/B também de fala de testes A/A que, basicamente, executam a mesma versão do sistema e se espera que falhem, porque o sistema A não pode ser melhor que ele mesmo. Então se os testes A/A não falham, deve-se depurar o sistema até encontrar a causa que faz o sistema A ser melhor que ele mesmo.",
"resposta": true,
"justificativa": "“O que é um teste A/A? É um teste no qual os dois grupos, controle e tratamento, executam a mesma versão do sistema. Logo, assumindo-se uma confiança estatística de 95%, eles deveriam quase sempre falhar, pois a versão A não pode ser melhor do que ela mesma. Testes A/A são recomendados para testar e validar os procedimentos e decisões metodológicas que foram tomados em um teste A/B. Alguns autores chegam a recomendar que não se deve iniciar testes A/B antes de realizar alguns testes A/A (link). Caso os testes A/A não falhem, deve-se depurar o sistema de experimentação até descobrir a causa raiz (root cause) que está fazendo com que uma versão A seja considerada melhor do que ela mesmo.” (Valente, Engenharia de Software Moderna, 2020, Capítulo 3.6.1)"
},
{
"id": 256,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Modularidade, legibilidade e testabilidade são fatores de qualidade externa, que usuários comuns podem avaliar sem conhecer o código.",
"resposta": false,
"justificativa": "qualidade interna considera propriedades e características relacionadas com a implementação de um sistema. Portanto, a qualidade interna de um sistema somente pode ser avaliada por um especialista em Engenharia de Software e não por usuários leigos. São exemplos de fatores (ou atributos) de qualidade interna: modularidade, legibilidade do código, manutenibilidade e testabilidade."
},
{
"id": 257,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Nos Sistemas C (casuais), como scripts de uso único, o maior risco ao aplicar Engenharia de Software é o over-engineering.",
"resposta": true,
"justificativa": "no caso de Sistemas C, o maior risco é over-engineering, ou seja, o uso de recursos mais sofisticados em um contexto que não demanda tanta preocupação. Como se diz coloquialmente, Engenharia de Software nesse contexto equivale a \"usar uma bala de canhão para matar formigas\"."
},
{
"id": 258,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Em XP, os desenvolvedores definem a ordem de implementação das histórias, porque conhecem melhor as dependências técnicas entre elas.",
"resposta": false,
"justificativa": "os desenvolvedores não opinam sobre a ordem de implementação das histórias; isso é decidido pelo representante dos clientes, que deve ser alguém capacitado e com autoridade para definir o que é mais urgente e importante para a empresa que está contratando o desenvolvimento do sistema."
},
{
"id": 259,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Em XP, o design incremental só é viável quando adotado junto com as outras práticas do método, principalmente o refactoring contínuo.",
"resposta": true,
"justificativa": "Por fim, design incremental somente é possível caso seja adotado em conjunto com as demais práticas de XP, principalmente refactoring. XP defende que refactoring deve ser continuamente aplicado para melhorar a qualidade do design. Por isso, toda oportunidade de refatoração, visando facilitar o entendimento e a evolução do código, não pode ser deixada para depois."
},
{
"id": 260,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Em Scrum, as tarefas do Backlog do Sprint e suas estimativas podem mudar durante o sprint, mas o objetivo do sprint (sprint goal) não pode ser alterado.",
"resposta": true,
"justificativa": "Como o Backlog do Produto, o Backlog do Sprint também é dinâmico. Por exemplo, tarefas podem se mostrar desnecessárias e outras podem surgir, ao longo do sprint. Pode-se também alterar a estimativa de horas previstas para uma tarefa. Porém, o que não pode ser alterado é o objetivo do sprint (sprint goal), isto é, a lista de histórias que o dono do produto selecionou para o sprint e que o time de desenvolvimento se comprometeu a implementar na duração do mesmo."
},
{
"id": 261,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "O Scrum Master é o líder do time e funciona como um gerente de projeto tradicional, com autoridade hierárquica sobre os desenvolvedores.",
"resposta": false,
"justificativa": "Por exemplo, suponha que um time esteja enfrentando problemas com um dos servidores de bancos de dados, cujos discos estão apresentando problemas todos os dias. Cabe ao Scrum Master intervir junto aos níveis adequados da empresa para garantir que esse problema de hardware não atrapalhe o avanço do time. Por outro lado, ele não é um gerente de projeto tradicional. Por exemplo, ele não é o líder do time, pois todos em um time Scrum têm o mesmo nível hierárquico."
},
{
"id": 262,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "No Quadro Kanban, o limite WIP de todos os passos, inclusive o último, conta os cartões em andamento e os concluídos.",
"resposta": false,
"justificativa": "Esse limite é conhecido pelo nome Limite WIP, isto é, trata-se do limite máximo de cartões presentes em cada passo, contando aqueles na primeira coluna (em andamento) e aqueles na segunda coluna (concluídos) do passo. A exceção é o último passo, no qual o WIP aplica-se apenas à primeira subcoluna, já que não faz sentido aplicar um limite ao número de tarefas concluídas pelo time de desenvolvimento."
},
{
"id": 263,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Se os requisitos forem estáveis e bem conhecidos pelo time, como no desenvolvimento de um compilador para uma linguagem consolidada, não faz sentido ter um Representante dos Clientes (ou Dono do Produto) integrado ao time.",
"resposta": true,
"justificativa": "Envolvimento do Cliente. Se os requisitos do sistema são estáveis e de pleno conhecimento do time de desenvolvedores, não faz sentido ter um Representante dos Clientes ou Dono do Produto integrado ao time. Por exemplo, esse papel não é importante no desenvolvimento de um compilador para uma linguagem conhecida, com uma gramática e semântica consolidadas."
},
{
"id": 264,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Nas décadas anteriores ao surgimento da Engenharia de Software, o\nsoftware já era a principal preocupação da Computação e os computadores\neram amplamente usados para aplicações comerciais.",
"resposta": false,
"justificativa": "Citação textual:\nNas duas décadas anteriores, os primeiros computadores modernos foram\nprojetados e começaram a ser usados principalmente para resolução de\nproblemas científicos. Ou seja, nessa época software não era uma\npreocupação central, mas sim construir máquinas que pudessem executar\nalguns poucos programas. Em resumo, computadores eram usados por\npoucos e para resolver apenas problemas científicos.\n\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020.\nCap. 1, Seção 1.1."
},
{
"id": 265,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "A invisibilidade do software dificulta visualizar seu tamanho e,\nconsequentemente, estimar o esforço necessário para construí-lo.",
"resposta": true,
"justificativa": "Citação textual:\nInvisibilidade: devido à sua natureza abstrata, é difícil visualizar o tamanho e\nconsequentemente estimar o esforço de construir um sistema de software.\n\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020.\nCap. 1, Seção 1.1."
},
{
"id": 266,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Segundo Brooks, quanto mais bem-sucedido for um sistema de software,\nmaior tende a ser a demanda por mudanças nele.",
"resposta": true,
"justificativa": "Citação textual:\nFacilidade de mudanças: que consiste na necessidade de evoluir sempre,\nincorporando novas funcionalidades. Na verdade, quanto mais bem\nsucedido for um sistema de software, mais demanda por mudanças ele\nrecebe.\n\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020.\nCap. 1, Seção 1.1."
},
{
"id": 267,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Qualidade de Software e Aspectos Econômicos aparecem entre as áreas de\nconhecimento definidas pelo SWEBOK.",
"resposta": true,
"justificativa": "Citações textuais:\nTrecho 1: O SWEBOK define 12 áreas de conhecimento em Engenharia de\nSoftware:\nTrecho 2: 10. Qualidade de Software\nTrecho 3: 12. Aspectos Econômicos\n\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020.\nCap. 1, Seção 1.2."
},
{
"id": 268,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "A manutenção adaptativa pode ser realizada para adequar um sistema a\nmudanças de tecnologia, legislação ou regras de integração com outros\nsistemas.",
"resposta": true,
"justificativa": "Citação textual:\nManutenção adaptativa tem como objetivo adaptar um sistema a uma\nmudança em seu ambiente, incluindo tecnologia, legislação, regras de\nintegração com outros sistemas ou demandas de novos clientes.\n\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020.\nCap. 1, Seção 1.2.5."
},
{
"id": 269,
"topico": "Introdução (Valente, 2020, Capítulo 1)",
"texto": "Na classificação apresentada no capítulo, Sistemas C são sistemas de\nmissão crítica nos quais uma falha pode provocar grandes prejuízos ou\nperda de vidas humanas.",
"resposta": false,
"justificativa": "Citações textuais:\nTrecho 1: Sistemas C (Casuais) não sofrem pressão para terem níveis altos\nde qualidade. São sistemas que podem ter alguns bugs, os quais não vão\ncomprometer fundamentalmente o seu funcionamento.\nTrecho 2: Em geral, são desenvolvidos por 1-2 programadores; ou seja, são\nsistemas pequenos e não críticos.\nTrecho 3: No outro extremo, temos os Sistemas A (de acute, ou de missão\ncrítica). São sistemas nos quais qualquer falha pode causar um imenso\nprejuízo, incluindo a perda de vidas humanas.\n\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020.\nCap. 1, Seção 1.3."
},
{
"id": 270,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "XP é apresentado como um método leve recomendado para desenvolver\nsoftware com requisitos vagos ou sujeitos a mudanças.",
"resposta": true,
"justificativa": "Citação textual:\nSegundo seu autor, XP é um método leve recomendado para desenvolver\nsoftware com requisitos vagos ou sujeitos a mudanças; isto é, basicamente\nsistemas comerciais, na classificação que adotamos no Capítulo 1.\n\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020.\nCap. 2, Seção 2.3."
},
{
"id": 271,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Na programação em pares de XP, dois desenvolvedores trabalham juntos,\nsendo um deles o driver e o outro o navegador.",
"resposta": true,
"justificativa": "Citação textual:\nApesar de polêmica, a ideia é simples: toda tarefa de codificação —\nincluindo implementação de uma nova história, de um teste, ou a correção\nde um bug — deve ser realizada por dois desenvolvedores trabalhando\njuntos, compartilhando o mesmo teclado e monitor. Um dos\ndesenvolvedores é o líder (ou driver) da sessão, ficando com o teclado e o\nmouse. Ao segundo desenvolvedor cabe a função de revisor e questionador,\nno bom sentido, do trabalho do líder. Esse segundo desenvolvedor é\nchamado de navegador.\n\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020.\nCap. 2, Seção 2.3.4."
},
{
"id": 272,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "No Scrum, o Scrum Master atua como um gerente de projeto tradicional e é\no líder hierárquico dos demais membros do time.",
"resposta": false,
"justificativa": "Citações textuais:\nTrecho 1: Ele também deve desempenhar funções de um facilitador dos\ntrabalhos e removedor de impedimentos.\nTrecho 2: Por outro lado, ele não é um gerente de projeto tradicional. Por\nexemplo, ele não é o líder do time, pois todos em um time Scrum têm o\nmesmo nível hierárquico.\n\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020.\nCap. 2, Seção 2.4.1."
},
{
"id": 273,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "A Retrospectiva do Scrum tem como objetivo refletir sobre o sprint que está\nterminando e identificar possíveis pontos de melhoria.",
"resposta": true,
"justificativa": "Citação textual:\nA Retrospectiva é a última atividade de um sprint. Trata-se de uma reunião\ndo time Scrum, com o objetivo de refletir sobre o sprint que está terminando\ne, se possível, identificar pontos de melhorias no processo, nas pessoas,\nnos relacionamentos e nas ferramentas usadas.\n\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020.\nCap. 2, Seção 2.4.3."
},
{
"id": 274,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Kanban surgiu originalmente como um método de desenvolvimento de\nsoftware criado na Microsoft em 2004.",
"resposta": false,
"justificativa": "Citações textuais:\nTrecho 1: A palavra japonesa kanban significa “cartão visual” ou “cartão de\nsinalização”. Desde a década de 50, o nome também é usado para denotar\no processo de produção just-in-time usado em fábricas japonesas,\nprincipalmente naquelas da Toyota, onde ele foi usado pela primeira vez.\nTrecho 2: No caso de desenvolvimento de software, Kanban foi usado pela\nprimeira vez na Microsoft, em 2004, como parte de um esforço liderado por\nDavid Anderson, então um funcionário da empresa.\n\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020.\nCap. 2, Seção 2.5."
},
{
"id": 275,
"topico": "Processos (Valente, 2020, Capítulo 2)",
"texto": "Segundo o capítulo, é possível estabelecer uma regra simples segundo a\nqual determinados tipos de sistemas nunca podem se beneficiar de\nnenhuma prática ágil.",
"resposta": false,
"justificativa": "Citação textual:\nNo entanto, a pergunta que abre essa seção não admite uma resposta\nsimples, como, por exemplo, sistemas das áreas X, Y e Z não devem usar\nmétodos ágeis; e os demais devem usar. Em outras palavras, sistemas de\nqualquer área podem se beneficiar de pelo menos algumas das práticas\npropostas por métodos ágeis.\n\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020.\nCap. 2, Seção 2.6."
},
{
"id": 276,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Requisitos funcionais definem o que o sistema deve fazer, enquanto\nrequisitos não-funcionais estão associados às restrições sob as quais o\nsistema deve operar.",
"resposta": true,
"justificativa": "Citação textual:\nRequisitos definem o que um sistema deve fazer e sob quais restrições.\nRequisitos relacionados com a primeira parte dessa definição — “o que um\nsistema deve fazer”, ou seja, suas funcionalidades — são chamados de\nRequisitos Funcionais. Já os requisitos relacionados com a segunda parte —\n“sob que restrições” — são chamados de Requisitos Não-Funcionais.\n\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020.\nCap. 3, Seção 3.1."
},
{
"id": 277,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Requisitos não-funcionais podem ser especificados quantitativamente por\nmeio de métricas.",
"resposta": true,
"justificativa": "Citação textual:\nRequisitos funcionais, na maioria das vezes, são especificados em\nlinguagem natural. Por outro lado, requisitos não-funcionais são\nespecificados de forma quantitativa usando-se métricas, como aquelas\ndescritas na próxima tabela.\n\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020.\nCap. 3, Seção 3.1."
},
{
"id": 278,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Engenharia de Requisitos compreende atividades relacionadas à\ndescoberta, análise, especificação e manutenção dos requisitos de um\nsistema.",
"resposta": true,
"justificativa": "Citação textual:\nEngenharia de Requisitos é o nome que se dá ao conjunto de atividades\nrelacionadas com a descoberta, análise, especificação e manutenção dos\nrequisitos de um sistema.\n\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020.\nCap. 3, Seção 3.2."
},
{
"id": 279,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Entrevistas com stakeholders são a única técnica apresentada no capítulo\npara elicitação de requisitos.",
"resposta": false,
"justificativa": "Citação textual:\nDiversas técnicas podem ser usadas para elicitação de requisitos, incluindo\nentrevistas com stakeholders, aplicação de questionários, leitura de\ndocumentos e formulários da organização que está contratando o sistema,\nrealização de workshops com os usuários, implementação de protótipos e\nanálise de cenários de uso.\n\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020.\nCap. 3, Seção 3.2."
},
{
"id": 280,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Casos de uso apresentam descrições menos detalhadas dos requisitos do\nque histórias de usuários.",
"resposta": false,
"justificativa": "Citação textual:\nCasos de uso (use cases) são documentos textuais de especificação de\nrequisitos. Como veremos nesta seção, eles incluem descrições mais\ndetalhadas do que histórias de usuários.\n\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020.\nCap. 3, Seção 3.4."
},
{
"id": 281,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Testes A/B podem ser usados para escolher entre duas versões de um\nsistema com base no interesse demonstrado pelos usuários.",
"resposta": true,
"justificativa": "Citação textual:\nTestes A/B (ou split tests) são usados para escolher, dentre duas versões de\num sistema, aquela que desperta maior interesse dos usuários.\n\nReferência: VALENTE, Marco Tulio. Engenharia de Software Moderna. 2020.\nCap. 3, Seção 3.6."
},
{
"id": 282,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Na elicitação por etnografia, o desenvolvedor se integra ao ambiente dos stakeholders e intervém nas tarefas observadas, sugerindo melhorias enquanto elas acontecem.",
"resposta": false,
"justificativa": "De forma análoga, em Engenharia de Requisitos, etnografia designa a técnica de elicitação de requisitos que recomenda que o desenvolvedor se integre ao ambiente de trabalho dos stakeholders e observe — normalmente, por alguns dias — como ele desenvolve suas atividades. Veja que essa observação é silenciosa, isto é, o desenvolvedor não interfere e opina sobre as tarefas e eventos que estão sendo observados."
},
{
"id": 283,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Rastreabilidade é a capacidade de identificar, a partir de um trecho de código, os requisitos que ele implementa e, a partir de um requisito, os trechos de código que o implementam.",
"resposta": true,
"justificativa": "Chama-se de rastreabilidade (traceability) a capacidade de dado um trecho de código identificar os requisitos implementados por ele e vice-versa (isto é, dado um requisito, identificar os trechos de código que o implementam)."
},
{
"id": 284,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Histórias sobre requisitos não-funcionais, como \"tempo de resposta máximo de 1 segundo\", devem entrar no Backlog do Produto e ser alocadas a um sprint específico.",
"resposta": false,
"justificativa": "não faz sentido alocar essa história a uma iteração, pois ela deve ser uma preocupação durante todas as iterações do projeto. Por isso, a melhor solução é pedir ao dono do produto para escrever histórias sobre requisitos não-funcionais, mas usá-las principalmente para reforçar os critérios de conclusão de histórias (done criteria). Por exemplo, para considerar que uma história esteja concluída ela deverá passar por uma revisão de código que tenha como objetivo detectar problemas de desempenho. Antes de disponibilizar para produção qualquer release do sistema, pode-se também realizar um teste de desempenho, para garantir que o requisito não-funcional especificado na história esteja sendo atendido. Em resumo, pode-se — e deve-se — escrever histórias sobre requisitos não-funcionais, mas elas não vão para o backlog do produto. Em vez disso, elas são usadas para refinar os critérios de conclusão de histórias."
},
{
"id": 285,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Os desenvolvedores podem criar uma história do usuário só para estudar uma nova tecnologia, e essas histórias são chamadas de spikes.",
"resposta": false,
"justificativa": "É possível criar histórias para estudo de uma nova tecnologia? Conceitualmente, a resposta é que não se deve criar histórias exclusivamente para aquisição de conhecimento, pois histórias devem sempre ser escritas e priorizadas pelos clientes. E elas devem ter valor para o negócio. Logo, não vale a pena violar esse princípio e permitir que os desenvolvedores criem uma história como estudar o emprego do framework X na implementação da interface Web. Por outro lado, esse estudo pode ser uma tarefa, necessária para implementar uma determinada história. Tarefas para aquisição de conhecimento são chamadas de spikes."
},
{
"id": 286,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Em casos de uso, recomenda-se evitar comandos de decisão (\"se\") no fluxo normal. Quando for preciso escolher entre dois comportamentos, o ideal é modelar isso como uma extensão.",
"resposta": true,
"justificativa": "evido à existência de fluxos de extensão, recomenda-se evitar comandos de decisão (se) no fluxo normal de casos de uso. Quando uma decisão entre dois comportamentos normais for necessária, pense em defini-la como uma extensão. Esse é um dos motivos pelos quais os fluxos de extensão, em casos de uso reais, frequentemente possuem mais passos do que o fluxo normal."
},
{
"id": 287,
"topico": "Requisitos (Valente, 2020, Capítulo 3)",
"texto": "Em um teste A/B, se a versão de tratamento atingir o ganho mínimo esperado antes de completar a amostra, o teste pode ser encerrado mais cedo para economizar tempo.",
"resposta": false,
"justificativa": "Posso terminar o teste A/B antes, se ele apresentar o ganho esperado? Não, esse é um erro frequente e grave. Se o tamanho da amostra for de 200 mil usuários, o teste — de cada grupo — somente pode ser encerrado quando alcançarmos exatamente esse número de usuários. Sendo mais preciso, ele não deve terminar antes, com menos usuários, nem depois, com mais usuários. Um possível erro de desenvolvedores quando começam a usar testes A/B consiste em encerrar o teste no primeiro dia em que o ganho mínimo esperado for alcançado, sem testar o resto da amostra."
}
];
