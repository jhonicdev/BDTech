import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, Radio, Space, Typography, Modal, Button, message, Tag, Input } from "antd";
import styles from "../ombt/banco_questoes/page.module.css";
import { FilePdfOutlined } from "@ant-design/icons";
import ImagemQ2 from "../embt/imgs/2025-2.png";
import ImagemQ7 from "../embt/imgs/2025-7.png";
import ImagemQ11 from "../embt/imgs/2025-11.png";
import ImagemQ13 from "../embt/imgs/2025-13.png";
import ImagemQ19_1 from "../embt/imgs/2025-19_1.png";
import ImagemQ19_2 from "../embt/imgs/2025-19_2.jpg";
import ImagemQ23 from "../embt/imgs/2025-23.png";
import ImagemQ26 from "../embt/imgs/2025-26.png";
import ImagemQ30 from "../embt/imgs/2025-30.png";
import ImagemQ36 from "../embt/imgs/2025-36.png";
import ImagemQ39_1 from "../embt/imgs/2025-39_1.png";
import ImagemQ39_2 from "../embt/imgs/2025-39_2.jpg";
import ImagemQ43 from "../embt/imgs/2025-43.png";
import ImagemQ48 from "../embt/imgs/2025-48.png";
import ImagemQ51 from "../embt/imgs/2025-51.png";
import ImagemQ54 from "../embt/imgs/2025-54.png";
import ImagemQ58 from "../embt/imgs/2025-58.png";
import ImagemQ60 from "../embt/imgs/2025-60.png";
import ImagemQ63 from "../embt/imgs/2025-63.png";
import ImagemQ67 from "../embt/imgs/2025-67.jpg";
import ImagemQ77 from "../embt/imgs/2025-77.png";



const { Text, Title } = Typography;

const TituloCard = {
  padding: "8px 16px",
  margin: 0,
};

//FRASES MOTIVADORAS
const frases = [
  "Coçadinha pitada de sal.",
  "a obmep dá muito medo.",
  "só sofremos porque criamos expectativa",
  "Quero gozar",
  "cadê meu couro?",
  "azaleia",
  "Se ninguém faz nada, todo mundo faz algo.",
  "só na punha",
  "ddd (decisões definem destinos)",
  "jonatas nao goza nao, ele mija",
  "Jp tá com volume russo",
]
const fraseMotivadora = frases[Math.floor(Math.random() * frases.length)];







//QUESTOES DA PROVA --------------------------------------------------------------------------------------------------------------------
const questoesLinguagens = [
  {
    texto: (
      <>
        <Text>
          <b>Imagine</b><br />
          Imagine no possessions<br />
          I wonder if you can<br />
          No need for greed or hunger<br />
          A brotherhood of man<br />
          Imagine all the people<br />
          Sharing all the world<br />
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          LENNON, J.&nbsp;<b>Imagine</b>. Disponível em: https://www.letras.mus.br. Acesso em 24 mar. 2024 (fragmento).
        </Text>
        <Text>
          O trecho da música “<i>Imagine</i>”, de John Lennon, revela, por meio da construção de um mundo idealizado, uma crítica à(ao)
        </Text>
      </>
    ),
    alternativas: {
      A: "imaginação humana.",
      B: "passividade sociopolítica.",
      C: "compartilhamento de posses.",
      D: "inexistência de plenitude social.",
      E: "representação utópica da realidade.",
    },
  },
  {
    texto: (
      <>
        <Text style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Image
            src={ImagemQ2}
            alt="Tirinha"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "800px",
              display: "block",
            }}
          />
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          WATTERSON, B. Disponível em: https://www.maisbolsas.com.br. Acesso em 24 mar. 2024.
        </Text>
        <Text>
          Na tirinha acima, a fala de um dos personagens revela uma postura crítica, que problematiza a prática do(a)
        </Text>
      </>
    ),
    alternativas: {
      A: "extinção de espécies.",
      B: "combate aos cativeiros.",
      C: "aprisionamento de animais.",
      D: "culto à diversidade biológica.",
      E: "valorização do habitat natural.",
    },
  },
  {
    texto: (
      <>
        <Text>
          <b>The Legend of Ochi</b><br />
          Much has been written about the lack of originality in family entertainment, with even giants like Pixar resorting to sequels instead of new properties. “The Legend of Ochi” reminded me of how wonderful it can be to see an artist distilling the fiction that changed him into a new vision for another generation, passing down the inspiration from a sort of cinematic parent to child.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          Disponível em: https://www.rogerebert.com/reviews/the-legend-of-ochi-movie-review-2025. Acesso em 09 abr. 2025.
        </Text>
        <Text>
          O autor da resenha tem uma percepção sobre a obra que
        </Text>
      </>
    ),
    alternativas: {
      A: "celebra a continuidade de tendências vanguardistas do cinema moderno.",
      B: "valoriza a nova interpretação cinematográfica de um gênero já conhecido.",
      C: "critica a falta de recursos tecnológicos de filmes voltados para a família.",
      D: "aponta a importância da adaptação de uma história já conhecida pelo público.",
      E: "enfatiza a originalidade da história, rompendo a tradição dos filmes infantis.",
    },
  },
  {
    texto: (
      <>
        <Text>
          <b>Die with a smile</b><br />
          I just woke up from a dream<br />
          Where you and I had to say goodbye<br />
          And I don't know what it all means<br />
          But since I survived, I realized<br />
          Wherever you go, that's where I'll follow<br />
          Nobody's promised tomorrow<br />
          So I'ma love you every night like it's the last night<br />
          Like it's the last night<br />
          If the world was ending, I'd wanna be next to you<br />
          If the party was over and our time on Earth was through<br />
          I'd wanna hold you just for a while<br />
          And die with a smile<br />
          If the world was ending, I'd wanna be next to you<br />
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          GAGA, L; FAUNTLEROY, J; D’MILE; MARS, B.&nbsp;<b>Die with a smile</b>. Disponível em: https://www.letras.mus.br. Acesso em 04 nov. 2024 (fragmento).
        </Text>
        <Text>
          No fragmento retirado da música <i>Die with a smile</i>, sucesso dos célebres cantores Lady Gaga e Bruno Mars, a expressão “<i>like it’s the last night</i>” revela, na intensidade das convicções transmitidas, a intenção do eu lírico em
        </Text>
      </>
    ),
    alternativas: {
      A: "manifestar o fascínio pelo anoitecer.",
      B: "evidenciar a existência de uma dúvida.",
      C: "valorizar a busca por paixões efêmeras.",
      D: "demonstrar o desejo pela plena realização.",
      E: "resignar a despedida como um gesto de amor.",
    },
  },
  {
    texto: (
      <>
        <Text>
          [Woman’s] sensibility had been educated for centuries by the influences of the common sitting room. People’s feelings were impressed on her; personal relations were always before her eyes. Therefore, when the middle-class woman took to writing, she naturally wrote novels.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          WOOLF, V. A.&nbsp;<b>A Room of One's Ownr</b>. Disponível em: http://seas3.elte.hu. Acesso em 09 abr. 2025.
        </Text>
        <Text>
          Na argumentação apresentada sobre mulheres escritoras, Virginia Woolf demonstra o(a)
        </Text>
      </>
    ),
    alternativas: {
      A: "naturalidade inata da mulher para escrever romances.",
      B: "inadequação da sensibilidade feminina na prática da escrita.",
      C: "influência de fatores socioeconômicos na escrita feminina.",
      D: "desenvolvimento histórico da sensibilidade entre mulheres.",
      E: "dificuldade imposta às mulheres para escrever romances.",
    },
  },
  {
    texto: (
      <>
        <Text>
          <b>Unnoticed details</b><br />
          In the midst of a fast-paced world, where people are often too absorbed in their routines to notice those around them, a simple gesture can make a difference. A young woman, lost in thought, drops her notebook while hurrying to catch a bus. Before she even realizes it, a stranger picks it up and hands it back with a kind smile. Surprised and grateful, she thanks him, and for the rest of the day, she carries a newfound warmth in her heart. Such small moments of consideration, though fleeting, have the power to restore faith in humanity and remind us that, despite life’s challenges, empathy still thrives in the world.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          ChatGPT.&nbsp;<b>Open AI</b>. Acesso em 20 mar. 2025 (adaptado).
        </Text>
        <Text>Ao relatar uma situação cotidiana, o texto busca</Text>
      </>
    ),
    alternativas: {
      A: "destacar o desafio de ser sempre empático.",
      B: "enfatizar o impacto causado por atos de bondade.",
      C: "discutir as consequências de estar mal informado.",
      D: "criticar a falta de compaixão na sociedade moderna.",
      E: "encorajar as pessoas a prestarem apoio a grupos socialmente vulneráveis.",
    },
  },
  {
    texto: (
      <>
        <Text style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Image
            src={ImagemQ7}
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "500px",
              display: "block",
            }}
          />
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          Disponível em: https://openverse.org. Acesso em 09 abr. 2025.
        </Text>
        <Text>
          O texto estabelece uma relação entre a preservação do ambiente natural e a ocupação humana para
        </Text>
      </>
    ),
    alternativas: {
      A: "apontar desvantagens de frequentar a natureza às pessoas.",
      B: "destacar a necessidade do turismo na preservação do ambiente.",
      C: "demonstrar o impacto da ação humana no equilíbrio ambiental.",
      D: "criticar os benefícios de uma convivência perfeita com a natureza.",
      E: "reforçar a ideia de que a natureza pode se regenerar rapidamente.",
    },
  },
  {
    texto: (
      <>
        <Text>
          In 1973, a trailblazing nutritionist named Jean Mayer warned the U.S. Senate Select Committee on Nutrition and Human Needs that the increasingly ubiquitous category of junk foods could be described as empty calories. He questioned why it was legal to apply the term “cereals” to products that were more than fifty-per-cent sugar. “I think they perhaps might more properly be called candy”, he said. Children’s-food advertisements, he claimed, were “nothing short of nutritional disasters”.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          TARLOVSKY, K.&nbsp;<b>Is social media more like cigarettes or junk food?</b>&nbsp;The New Yorker. Disponível em: https://www.newyorker.com. Acesso em 09 abr. 2025.
        </Text>
        <Text>
          Considerando o consumo de alimentos na sociedade norte-americana, o texto objetiva
        </Text>
      </>
    ),
    alternativas: {
      A: "apoiar propagandas alimentares infantis sancionadas pelo governo.",
      B: "criticar a produção em larga escala de alimentos para o público infantil.",
      C: "sugerir o uso do termo correto para alimentos com alto teor de açúcar.",
      D: "enfatizar a regulamentação de propagandas alimentares nos EUA.",
      E: (
        <Text>
          condenar o uso dos termos "<i>cereals</i>" e "<i>candy</i>" para indicar alto valor nutricional.
        </Text>
      ),
    },
  },
  {
    texto: (
      <>
        <Text>
          <b>A home on the range</b><br />
          Oh, give me a home where the buffalo roam,<br />
          Where the deer and the antelope play,<br />
          Where seldom is heard a discouraging word<br />
          And the skies are not cloudy all day.<br />
          Home, home on the range,<br />
          Where the deer and the antelope play;<br />
          Where seldom is heard a discouraging word<br />
          And the skies are not cloudy all day.<br />

        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          A Home on the Range. LOMAX, John A. (org.).&nbsp;<b>Cowboy songs and other frontier ballads</b>. 1910. Disponível em: https://hdl.handle.net. Acesso em 09 abr. 2025.
        </Text>
        <Text>
          Nessa letra, de uma canção folclórica norte-americana, o trecho “<i>Where seldom is heard a discouraging word</i>” introduz a ideia de
        </Text>
      </>
    ),
    alternativas: {
      A: "superação das dificuldades por meio da comunicação.",
      B: "beleza e a harmonia do ambiente onde a canção se passa.",
      C: "tranquilidade e a ausência de críticas no local descrito.",
      D: "frustração causada por uma vida sem palavras de incentivo.",
      E: "presença constante de palavras negativas no cotidiano.",
    },
  },
  {
    texto: (
      <>
        <Text>
          <b>TEXTO I</b><br /><br />
          <b>Naquela mesa</b><br />
          Naquela mesa, ele sentava sempre<br />
          E me dizia sempre o que é viver melhor<br />
          Naquela mesa, ele contava histórias<br />
          Que hoje na memória eu guardo e sei de cor<br />
          Naquela mesa, ele juntava a gente<br />
          E contava contente o que fez de manhã<br />
          E nos seus olhos era tanto brilho<br />
          Que mais que seu filho, eu fiquei seu fã<br />
          Eu não sabia que doía tanto<br />
          Uma mesa num canto, uma casa e um jardim<br />
          Se eu soubesse quanto dói a vida<br />
          Essa dor tão doída não doía assim<br />
          Agora resta uma mesa na sala<br />
          E hoje ninguém mais fala no seu bandolim<br />
          Naquela mesa, tá faltando ele<br />
          E a saudade dele tá doendo em mim<br />
          Naquela mesa, tá faltando ele<br />
          E a saudade dele tá doendo em mim<br /><br />
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          BITTENCOURT, S.&nbsp;<b>Naquela mesa</b>. Brasil: EMI-Odeon, 1972.
        </Text>
        <Text>
          <b>TEXTO II</b><br /><br />
          Consta que esta música foi composta pelo filho no dia da morte do pai, escrita num guardanapo. Apenas isso seria suficiente para que Naquela mesa tivesse uma história. Mais ainda quando o seu compositor, Sérgio Bittencourt, é filho de Jacob do Bandolim, um verdadeiro ícone da música brasileira de todos os tempos. Está relatado no site digital do próprio Jacob que, no dia em que Jacob estaria completando 60 anos (que completaria em 14 de fevereiro de 1978, se vivo fosse), o jornalista Jésus Rocha, à época editor do “Segundo Caderno”, pediu ao filho, Sérgio, um depoimento sobre o pai. É inevitável: ao ouvir essa música, lembramos do pai, do avô, de alguém querido que se foi. A música materializa a saudade numa mesa. Na mesa onde o pai sentava e, dono da verdade, dava conselhos sobre a vida e contava histórias. O pai que reunia as pessoas em volta de si e carregava consigo a admiração do filho. E a mesa é uma metáfora, uma personificação, uma metonímia, ou quantas figuras de linguagem quisermos, da saudade. A mesa vazia traz as lembranças e a dor do pai que se foi.<br />
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          SEBASTIANBAM.&nbsp;<b>Música em prosa</b>, 2017. Disponível em: https://musicaemprosa.com. Acesso em 23 mar. 2025 (adaptado).
        </Text>
        <Text>
          Considerando os aspectos descritos no Texto II, a função da linguagem predominante na letra da canção é
        </Text>
      </>
    ),
    alternativas: {
      A: "conativa, pois busca influenciar o comportamento do ouvinte ao incentivar a superação do luto.",
      B: "referencial, pois transmite informações objetivas sobre a perda do pai sem envolvimento emocional.",
      C: "metalinguística, pois concebe a música como uma forma de recriar o diálogo perdido com o pai.",
      D: "emotiva, pois expressa a dor da ausência paterna e os sentimentos do eu lírico de maneira nostálgica.",
      E: "fática, pois reforça a interação entre emissor e receptor por meio de lamentos e chamadas diretas ao ouvinte.",
    },
  },
  {
    texto: (
      <>
        <Text>
          <b>TEXTO I</b><br /><br />
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src={ImagemQ11}
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "500px",
                display: "block",
              }}
            />
          </span>
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          <b>Espetáculo “O Auto da Compadecida” é o grande destaque do festival Amazônia Encena Na Rua, em São Luís</b>. 2023. Disponível em: https://oimparcial.com.br/. Acesso em 14 abr. 2025.
        </Text>
        <Text>
          <b>TEXTO II</b><br /><br />
          No ano em que o filme <i>O Auto da Compadecida</i>, adaptação da obra literária de Ariano Suassuna, completa 20 anos, o Festival Amazônia Encena na Rua presenteia o público de São Luís com uma apresentação gratuita de releitura consagrada. A peça <i>O Auto da Compadecida</i> mistura elementos do teatro popular nordestino com influências religiosas, cômicas e críticas sociais. Aproximando expressões literárias e cênicas, a apresentação ganha formas que valorizam o humor, a religiosidade e a malandragem das personagens, sem perder a essência da história.<br />
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          <b>Espetáculo “O Auto da Compadecida” é o grande destaque do festival Amazônia Encena Na Rua, em São Luís</b>. 2023. Disponível em: https://oimparcial.com.br/. Acesso em 14 abr. 2025.
        </Text>
        <Text>
          Ao remontar um clássico literário em uma interpretação cenográfica, a apresentação mostrada possibilita a
        </Text>
      </>
    ),
    alternativas: {
      A: "reinserção dos artistas no espaço teatral.",
      B: "supressão das narrativas textuais eruditas.",
      C: "integração de linguagens artísticas distintas.",
      D: "adequação da obra à cultura contemporânea.",
      E: "sobreposição entre cenografia e texto literário.",
    },
  },
  {
    texto: (
      <>
        <Text>
          Um movimento geral de virtualização afeta hoje não  apenas a informação e a comunicação, mas também os corpos, o funcionamento econômico, os quadros coletivos da sensibilidade ou o exercício da inteligência. A virtualização atinge mesmo as modalidades do estar junto, a constituição do “nós”: comunidades virtuais, empresas virtuais, democracia virtual... Embora a digitalização das mensagens e a extensão do ciberespaço desempenhem um papel capital na mutação em curso, trata-se de uma onda de fundo que ultrapassa amplamente a informatização.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          LÉVY, P.&nbsp;<b>O que é virtual?</b>&nbsp;São Paulo, Ed. 34, 1996.
        </Text>
        <Text>
          No contexto das novas tecnologias de informação e comunicação, a virtualização
        </Text>
      </>
    ),
    alternativas: {
      A: "permite que empresas tenham maior lucratividade.",
      B: "desenvolve formas de dependência em seus usuários.",
      C: "gera consequências para a sensibilidade e reduz a inteligência da população.",
      D: "afeta a maneira como as sociedades se desenvolvem e produzem conhecimento.",
      E: "prejudica as eleições de diferentes sociedades, ferindo princípios democráticos.",
    },
  },
  {
    texto: (
      <>
        <Text style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px", }}>
          <Image
            src={ImagemQ13}
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "500px",
              display: "block",
            }}
          />
        </Text>
        <Text>
          Considerando os recursos verbais e não verbais empregados no texto, pode-se afirmar que o objetivo central dessa campanha publicitária é
        </Text>
      </>
    ),
    alternativas: {
      A: "divulgar o canal telefônico de instituições voltadas a causas sociais.",
      B: "responsabilizar o leitor pelo cenário mundial de poluição do meio ambiente.",
      C: "fiscalizar os locais de utilização exagerada de materiais não biodegradáveis.",
      D: "delegar às autoridades competentes a função de garantia do equilíbrio ambiental.",
      E: "conscientizar os indivíduos sobre a importância da adoção de práticas sustentáveis.",
    },
  },
  {
    texto: (
      <>
        <Text>
          <b>Quando você corrige alguém, a pessoa geralmente se sente mais constrangida do que ajudada</b><br />
          Eu imagino que alguns vão generalizar e achar que estou fazendo uma apologia ao erro de Português, quando na verdade estou apenas propondo uma reflexão sobre os efeitos causados por quem tripudia ou alardeia em público o erro alheio. Sempre que eu vejo gente corrigindo alguém na frente dos outros, ou postando terrorismos em relação aos erros de linguagem no “Facebook”, só consigo enxergar uma pessoa tentando se autoafirmar e diminuir o outro, apenas para ostentar uma suposta superioridade linguística. Isso acaba mostrando apenas um cidadão tentando provar que sabe mais, para talvez alimentar as carências do próprio ego, dentro daquela medíocre lógica comparativa que fortalece uma autoinsegurança em cima de uma insuficiência alheia.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          BENESI, E. Disponível em: www.eoh.com.br. Acesso em 27 mar. 2025 (adaptado).
        </Text>
        <Text>
          Na situação descrita, o uso da norma-padrão revela
        </Text>
      </>
    ),
    alternativas: {
      A: "nível intelectual.",
      B: "falsa superioridade.",
      C: "ínfima escolaridade.",
      D: "carência econômica.",
      E: "impulsividade emocional.",
    },
  },
  {
    texto: (
      <>
        <Text>
          &nbsp;&nbsp;&nbsp;&nbsp;Terça-feira, dia 23 de abril<br />
          &nbsp;&nbsp;&nbsp;&nbsp;Eu e Luisinha estivemos conversando que foi preciso mamãe adoecer para reconhecermos a maldade nossa com Siá Ritinha. Todos nós tínhamos uma birra dela tão grande, que quando a víamos chegar já corríamos para a cozinha para pôr a vassoura virada atrás da porta, e púnhamos também sal no fogo para ela não demorar. A nossa raiva toda era por ela vir sempre mexericar e dizer a mamãe que não nos deixasse brincar de correr com as nossas colegas pretas. Pois se nós sentamos na aula com as pretas, por que não podíamos correr na rua? Foi bem bom mamãe ter sido boa para ela. Agora ela tem sido tão boa para mamãe, que eu a olho e fico mesmo admirada de como eu a achava tão horrorosa.

        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          MORLEY, H.&nbsp;<b>Minha vida de menina</b>. São Paulo: Companhia de Bolso, 2017.
        </Text>
        <Text>
          O excerto compõe a obra <i>Minha vida de menina</i>, publicação do diário íntimo de uma adolescente que viveu em Diamantina, Minas Gerais, no fim do século XIX, pouco tempo depois da abolição da escravatura e da Proclamação da República. Traços da personalidade da adolescente ficam claros ao longo do texto, entre eles, a
        </Text>
      </>
    ),
    alternativas: {
      A: "antipatia por pessoas que haviam tratado mal sua mãe.",
      B: "adesão a ideias vastamente disseminadas em seu meio.",
      C: "natureza questionadora acerca da mentalidade da época.",
      D: "falta de confiança em elementos da sabedoria popular.",
      E: "reprodução de discursos que lhe eram contemporâneos.",
    },
  },
  {
    texto: (
      <>
        <Text>
          &nbsp;&nbsp;&nbsp;&nbsp;Recapitulemos os caracteres da língua:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;Ela é um objeto bem definido no conjunto heteróclito dos fatos da linguagem. Pode-se localizá-la na porção determinada do circuito em que uma imagem auditiva (significante) vem associar-se a um conceito (significado). Ela é a parte social da linguagem, exterior ao indivíduo, que, por si só, não pode nem criá-la, nem modificá-la; ela não existe senão em virtude duma espécie de contrato estabelecido entre os membros da comunidade. Por outro lado, o indivíduo tem necessidade de uma aprendizagem para conhecer-lhe o funcionamento; somente pouco a pouco a criança assimila. A língua é uma coisa de tal modo distinta que um homem, mesmo privado do uso da fala, conserva a língua.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          SAUSSURE, F.&nbsp;<b>Curso de Linguística Geral</b>. Cultrix, São Paulo: 2006 (adaptado).
        </Text>
        <Text>
          Na composição de textos técnicos, é essencial o uso de elementos coesivos que retomem e que anunciem estruturas frasais. O anúncio de uma determinada informação se exemplifica em
        </Text>
      </>
    ),
    alternativas: {
      A: "“em que”.",
      B: "“localizá-la”.",
      C: "“associar-se”.",
      D: "“conhecer-lhe”.",
      E: "“Por outro lado”.",
    },
  },
  {
    texto: (
      <>
        <Text>
          A nação é como o pilar de toda uma democracia que está enjaulada no ser…<br />
          Jaz no ser, jaz no amor, jaz na paz, jaz em tu…<br />
          O que dissestes tu?<br />
          O que dissestes tu? — Disse a mim, disse a ti.<br />
          [...]<br />
          A andorinha não faz nada…<br />
          Voa, voa, andorinha! Voa e vai buscar teu ser!<br />
          Pega desse alpiste<br />
          Dá à vida um pouco de migalha e joga em ti!<br />
          Planta-te! Semeia-te! Se goste na vida…<br />
          [...]<br />
          Já dizia Fernando Pessoa na poesia:<br />
          — Ei, onde estás tu?<br />
          — Estou comigo, e ti?<br />
          — Também estou.<br />
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          WERNECK et. al.&nbsp;<b>Patrícia Poeta</b>. Comédia MTV, 2011 (adaptado).
        </Text>
        <Text>
          Nessa espécie de solilóquio, a interlocutora, ao adotar uma linguagem expressiva e reflexiva, faz uso da metáfora da "andorinha" para remeter à(ao)
        </Text>
      </>
    ),
    alternativas: {
      A: "almejo pela autonomia e pelo autoconhecimento.",
      B: "irrelevância do indivíduo dentro da estrutura social.",
      C: "aceitação fatalista das condições preexistentes da vida.",
      D: "invisibilidade resultante da inação coletiva diante da repressão estrutural.",
      E: "impotência do ser humano perante as forças que moldam a sua existência.",
    },
  },
  {
    texto: (
      <>
        <Text>
          <b>Implementação de um currículo dos futebóis para a Educação Física nos anos finais do ensino fundamental</b><br />
          &nbsp;&nbsp;&nbsp;&nbsp;A proposta do presente estudo partiu da inquietação quanto ao ensino do futebol na Educação Física escolar, sobretudo à possibilidade de desvincular este processo de uma perspectiva tecnicista, pautada apenas no saber fazer. Com essa problematização, elaboramos um currículo para o ensino dos futebóis para os anos finais do Ensino Fundamental. Futebóis estes entendidos como um fenômeno plural, que tem espaço para a diversidade, superando a ideia de que o futebol espetacularizado é o único futebol possível. <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Consideramos que o currículo dos futebóis possibilitou aos(às) alunos(as) experiências positivas e inclusivas, e uma aprendizagem pautada pelos saberes corporais, conceituais e atitudinais, tendo os(as) alunos(as) acesso à dimensão sociocultural do futebol, através da lógica externa do jogo.

        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          BARRETO, M. Mestrado Profissional em Educação Física, Universidade Federal de São Carlos, São Carlos, 2023 (adaptado).
        </Text>
        <Text>
          Ao fazer uso do vocábulo “futebóis”, o texto propõe que
        </Text>
      </>
    ),
    alternativas: {
      A: "o futebol oportunize aprendizados interdisciplinares.",
      B: "o futebol seja praticado juntamente a outros esportes.",
      C: "sejam apresentadas diferentes formas de jogar futebol.",
      D: "a espetacularização do futebol seja melhor compreendida.",
      E: "a escola se torne um espaço de preparo de futuros jogadores de futebol.",
    },
  },
  {
    texto: (
      <>
        <Text>
          <b>TEXTO I</b><br /><br />
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src={ImagemQ19_1}
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "500px",
                display: "block",
              }}
            />
          </span>
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          DALI, S.&nbsp;<b>A persistência da memória</b>, 1931. Óleo sobre tela.
        </Text>
        <Text>
          <b>TEXTO II</b><br /><br />
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src={ImagemQ19_2}
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "300px",
                display: "block",
              }}
            />
          </span>
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          MAGRITTE, R.&nbsp;<b>A casa de banho de vidro</b>. Óleo sobre tela.
        </Text>
        <Text>
          As obras <i>A persistência da memória</i> e <i>A casa de banho de vidro</i> demonstram grande relação com as escolas europeias. Nessas obras, há elementos que remetem com maior precisão à estética denominada
        </Text>
      </>
    ),
    alternativas: {
      A: "cubista, haja vista a geometrização das formas.",
      B: "realista, visto que há enfoque na verossimilhança.",
      C: "expressionista, pela utilização de figuras que despertam emoções intensas.",
      D: "surrealista, em razão dos cenários que revelam uma manifestação onírica do inconsciente.",
      E: "impressionista, através do uso de traços fluidos que transmitem uma impressão natural do momento.",
    },
  },
  {
    texto: (
      <>
        <Text>
          <b>Interferência</b><br />
          Esse ecoar da memória me treme nas carnes…<br />
          Essa tua razão promíscua me sepulta friamente nessa dor cruel…<br />
          Que descompasso maçante tão injusto tal que corrói esse meu coração domado…<br />
          A ressonância dessa paixão me faz questionar, tediosamente,<br />
          se todo esse sacrifício incerto, feito em seu nome,<br />
          é apenas alucinação.<br />
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          NICOLAU, J.&nbsp;<b>Quando a palavra liberta</b>. Indisponível. Acesso em 18 mar. 2025.
        </Text>
        <Text>
          Perante o outro, a indecisão do eu lírico se expressa na
        </Text>
      </>
    ),
    alternativas: {
      A: "vergonha das marcas provocadas pelos seus erros.",
      B: "frustração sedimentada pela ânsia de reviver o passado.",
      C: "angústia ocasionada pela persistência de vivências insatisfatórias.",
      D: "serenidade em face das múltiplas possibilidades afetivas do presente.",
      E: "aceitação da desconexão da dor resultante de um amor não correspondido.",
    },
  },
  {
    texto: (
      <>
        <Text>
          &nbsp;&nbsp;&nbsp;&nbsp;Em 1826, o pintor francês <u style={{ color: "blue" }}>Jean-Baptiste Debret</u>, em uma das mais expressivas obras que pintou no <u style={{ color: "orange" }}>Rio de Janeiro</u>, <u style={{ color: "red" }}><i>O escravo do naturalista</i></u>, registrou a participação dos escravos e auxiliares locais no trabalho de campo dos naturalistas estrangeiros que, a partir do <u style={{ color: "#30503a" }}>início do século 19</u>, percorreram várias partes do Brasil. <br />
          &nbsp;&nbsp;&nbsp;&nbsp;A contribuição das culturas nativas para o conhecimento científico adquirido ou construído pelos <u style={{ color: "gray" }}>naturalistas</u> quase sempre tem sido desconsiderada pelos historiadores da ciência. A atenção destes é dirigida para as observações e teorias <u style={{ color: "#006973" }}>daqueles</u>, seus instrumentos e métodos de trabalho e para as influências políticas, filosóficas e econômicas em suas obras, com frequência, <u style={{ color: "brown" }}>eles</u> descrevem as populações locais como iletradas e ignorantes; porém, delas dependia, em boa medida, o êxito das expedições dos naturalistas. <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Em muitos trechos de seus relatos, cientistas como Alfred Wallace, Henry Bates e Louis Agassiz descrevem como <u style={{ color: "#9e366d" }}>os habitantes locais</u> contribuíram com conhecimentos para o seu trabalho. Havia, é claro, o previsível apoio logístico e de infraestrutura, tais como o fornecimento de alimentos, meios de transporte e outros recursos materiais, bem como sua presença como guias, carregadores, intérpretes e companhia pessoal, Muitas vezes, porém — e é esse ponto que nos interessa — verifica-se também, por parte de <u style={{ color: "green" }}>indivíduos</u> e comunicantes locais, a transmissão de conhecimentos obtidos com a longa experiência na floresta. Esses conteúdos viriam a ser sistematizados pelos <u style={{ color: "#e65729" }}>naturalistas</u>, deputados dentro da visão científica predominante e incorporados ao cabedal científico universal.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          MOREIRA, I.&nbsp;<b>O escravo do naturalista</b>. Ciência Hoje, v. 31, n. 184, jul.2002 (adaptado).
        </Text>
        <Text>
          Considerando-se as operações de retomada de informações do texto, há interdependência entre as expressões
        </Text>
      </>
    ),
    alternativas: {
      A: (
        <Text>
          “<span style={{ color: "gray" }}>naturalistas</span>” e “<span style={{ color: "#006973" }}>daqueles</span>”.
        </Text>
      ),
      B: (
        <Text>
          “<span style={{ color: "green" }}>indivíduos</span>” e “<span style={{ color: "#e65729" }}>naturalistas</span>”.
        </Text>
      ),
      C: (
        <Text>
          “<span style={{ color: "brown" }}>eles</span>” e “<span style={{ color: "#9e366d" }}>os habitantes locais</span>”.
        </Text>
      ),
      D: (
        <Text>
          “<span style={{ color: "orange" }}>Rio de Janeiro</span>” e “<span style={{ color: "#30503a" }}>início do século 19</span>”.
        </Text>
      ),
      E: (
        <Text>
          “<span style={{ color: "blue" }}>Jean-Baptiste Debret</span>” e “<i style={{ color: "red" }}>O escravo do naturalista</i>”.
        </Text>
      ),
    },
  },
  {
    texto: (
      <>
        <Text>
          <b><i>Divertida Mente 2</i> amadurece emoções e dá um novo sentido para franquias da Pixar</b><br />
          &nbsp;&nbsp;&nbsp;&nbsp;As animações são o jeito mais imediato de dialogar não apenas com crianças, como também com adultos, principalmente na forma como elas parecem entender como acessar nossas vulnerabilidades. Em 2015, <i>Divertida Mente</i> transformou esse aspecto psicologizante dos filmes da Pixar em uma premissa de fato, apresentando de forma lúdica como emoções se comunicam entre si nos nossos anos de formação, e ajudam a nos tornar o que somos, mas é com <i>Divertida Mente 2</i> que o estúdio parece lidar mais de frente com as questões do amadurecimento.<br />
          &nbsp;&nbsp;&nbsp;&nbsp;Desta vez, acompanhamos a jovem Riley, agora com 13 anos e prestes a entrar na puberdade, finalmente se adaptando à sua vida em San Francisco. A garotinha está crescendo, tem novos amigos, desejos e sonhos, e precisa conciliar tudo isso com o turbilhão intenso que vem de suas emoções — enfim, nada que Alegria já não esteja habituada a encarar. O problema é que, com a chegada da adolescência, Riley traz para a sua mente novos colegas de controle para suas emoções mais antigas: Ansiedade, Tédio, Inveja e Vergonha.<br />
          &nbsp;&nbsp;&nbsp;&nbsp;Apesar de repetir em grande parte a fórmula do primeiro filme, e para além desse elenco mais complexo de afetos cartunescos, <i>Divertida Mente 2</i> assume que está amadurecendo, assim como Riley. Adicionar uma personagem como a Ansiedade almeja retratar de forma fiel como os transtornos mentais começam a se manifestar. Na continuação, as emoções já conhecidas também ganham mais camadas, que mostram que não lidamos com elas da mesma forma conforme crescemos. Enquanto esse aprofundamento das emoções serve para justificar a sequência, <i>Divertida Mente</i> continua transformando esses sentimentos em cores e texturas para apelo visual.<br />
          &nbsp;&nbsp;&nbsp;&nbsp;O filme parece interessado em manter, portanto, um olho nas tendências enquanto preserva o que funciona; o trabalho da dublagem segue excelente, uma constante nas produções da Pixar.

        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          MELGUISO, J.&nbsp;<b>Omelete</b>. Disponível em: https://www.omelete.com.br. Acesso em 20 mar. 2025 (adaptado).
        </Text>
        <Text>
          A leitura do texto sobre <i>Divertida Mente 2</i> permite categorizá-lo como um(a)
        </Text>
      </>
    ),
    alternativas: {
      A: "resenha, por tecer uma visão analítica sobre a obra ao apontar opiniões e críticas.",
      B: "poema, já que é construído a partir do emprego de uma linguagem conotativa e expressiva.",
      C: "notícia, por possuir caráter informativo e impessoal ao trazer fatos sobre o lançamento do filme.",
      D: "relatório, pela apresentação de uma descrição direta e detalhada sobre aspectos técnicos da produção.",
      E: "crônica, ao apresentar a narração de uma experiência pessoal e reflexões sobre o filme de maneira subjetiva.",
    },
  },
  {
    texto: (
      <>
        <Text style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Image
            src={ImagemQ23}
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "400px",
              display: "block",
            }}
          />
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          <b>DIA DE BEAUTÉ</b>. Instagram: @diadebeaute. 2024. Disponível em: https://www.instagram.com/diadebeaute. Acesso em 03 abr. 2025.
        </Text>
        <Text>
          O anúncio busca construir uma imagem do produto associada à
        </Text>
      </>
    ),
    alternativas: {
      A: "valorização da simbologia social.",
      B: "padronização do consumo feminino.",
      C: "função estética da linguagem visual.",
      D: "objetividade das informações técnicas.",
      E: "neutralidade em relação ao público-alvo.",
    },
  },
  {
    texto: (
      <>
        <Text>
          <b>Linotipos</b><br />
          O Museu da Imprensa exibe duas linotipos. Trata-se de um tipo de máquina de composição de tipos de chumbo, inventada em 1884 em Baltimore, nos Estados Unidos, pelo alemão Ottmar Mergenthaler. O invento foi de grande importância por ter significado um novo e fundamental avanço na história das artes gráficas. A linotipia provocou, na verdade, uma revolução porque venceu a lentidão da composição dos textos executada na tipografia tradicional, em que o texto era composto à mão, juntando tipos móveis um por um. Constituía-se, assim, no principal meio de composição tipográfica até 1950. A linotipo, a partir do final do século XIX, passou a produzir impressos a baixo custo, o que levou informação às massas, democratizou a informação. Promoveu uma revolução na educação. Antes da linotipo, os jornais e revistas eram escassos, com poucas páginas e caros. Os livros didáticos eram também caros, pouco acessíveis.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          Disponível em: http://portal.in.gov.br. Acesso em: 27 mar. 2025 (adaptado).
        </Text>
        <Text>
          O texto traz uma cronologia da linotipo, uma máquina tipográfica inventada no século XIX responsável pela dinamização da imprensa. Do ponto de vista social, a contribuição da linotipo teve impacto direto na
        </Text>
      </>
    ),
    alternativas: {
      A: "criação aprimorada de tipos de chumbo.",
      B: "produção vagarosa de materiais didáticos.",
      C: "impressão dinamizada de imagens em revistas.",
      D: "montagem acelerada de textos para impressão.",
      E: "produção acessível de objetos de teor informacional.",
    },
  },
  {
    texto: (
      <>
        <Text>
          Naquela mulata estava o grande mistério, a síntese das impressões que ele recebeu chegando aqui: ela era a luz ardente do meio-dia; ela era o calor vermelho das sestas da fazenda; era o aroma quente dos trevos e das baunilhas, que o atordoara nas matas brasileiras; era a palmeira virginal e esquiva que se não torce a nenhuma outra planta; era o veneno e era o açúcar gostoso; era o sapoti mais doce que o mel e era a castanha do caju, que abre feridas com o seu azeite de fogo; ela era a cobra verde e traiçoeira, a lagarta viscosa, a muriçoca doida, que esvoaçava havia muito tempo em torno do corpo dele, assanhando-lhe os desejos, acordando-lhe as fibras embambecidas pela saudade da terra, picando-lhe as artérias, para lhe cuspir dentro do sangue uma centelha daquele amor setentrional, uma nota daquela música feita de gemidos de prazer, uma larva daquela nuvem de cantáridas que zumbiam em torno da Rita Baiana e espalhavam-se pelo ar numa fosforescência afrodisíaca.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          AZEVEDO, A.&nbsp;<b>O Cortiço</b>. Acesso em 12 nov. 2024 (fragmento).
        </Text>
        <Text>
          No fragmento de <i>O Cortiço</i>, de Aluísio Azevedo, apresentam-se elementos de atração e sedução, caracterizados através de uma linguagem naturalista, aqui revelada na
        </Text>
      </>
    ),
    alternativas: {
      A: "noção religiosa do universo.",
      B: "visão sentimental da natureza.",
      C: "percepção biológica do mundo.",
      D: "concepção idealista da existência.",
      E: "representação obsoleta da ciência.",
    },
  },
  {
    texto: (
      <>
        <Text style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Image
            src={ImagemQ26}
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "450px",
              display: "block",
            }}
          />
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          <b>Prefeitura Municipal de Algodão de Jandaíra</b>. Instagram: @prefeituradealgodao. 2025. Disponível em: https://www.instagram.com. Acesso em 30 mar. 2025.
        </Text>
        <Text>
          A principal finalidade dessa campanha publicitária é
        </Text>
      </>
    ),
    alternativas: {
      A: "influenciar o leitor a falar sobre suas emoções.",
      B: "incentivar a população a valorizar a saúde mental.",
      C: "persuadir os indivíduos a praticar atividades físicas.",
      D: "informar a existência de um mês dedicado aos cuidados com a mente.",
      E: "reforçar que os cuidados com a mente são mais essenciais do que os com o corpo.",
    },
  },
  {
    texto: (
      <>
        <Text>
          <b>Mais antiga que Ouro Preto, cidade mineira é pepita que merece ser descoberta</b><br />
          &nbsp;&nbsp;&nbsp;&nbsp;Ao completar 321 anos, antigo Arraial de São José da Lagoa, hoje conhecido como Nova Era, faz um resgate do passado ao apresentar aos visitantes o quanto a cidade é rica em história e tradição.<br />
          &nbsp;&nbsp;&nbsp;&nbsp;Quem hoje passa pela BR-381 a caminho do Vale do Aço não imagina que na cidade às margens da rodovia e, separada ao meio pelo Rio Piracicaba que serpenteia o município, encontram-se tesouros barrocos em monumentos na localidade que completou este ano 321 anos de história.

        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          Disponível em: https://www.em.com.br. Acesso em 10 abr. 2025.
        </Text>
        <Text>
          No trecho, a riqueza histórica e cultural de Nova Era é  ressaltada por meio de escolhas linguísticas que atribuem  características simbólicas à cidade. Um desses recursos é  o uso de um termo que a compara metaforicamente a um  tesouro. Esse efeito é alcançado pelo emprego de um(a)
        </Text>
      </>
    ),
    alternativas: {
      A: "verbo que descreve uma ação histórica da cidade.",
      B: "pronome que estabelece proximidade com o leitor.",
      C: "substantivo que reforça a ideia de valor e descoberta.",
      D: "preposição que indica a relação da cidade com o passado.",
      E: "advérbio que enfatiza a localização geográfica do município.",
    },
  },
  {
    texto: (
      <>
        <Text>
          Fatalidade atroz que a mente esmaga! <br />
          Extingue nesta hora o brigue imundo <br />
          O trilho que Colombo abriu nas vagas, <br />
          Como um íris no pélago profundo!…<br />
          […] Mas é infâmia demais... Da etérea plaga <br />
          Levantai-vos, heróis do Novo Mundo…<br />
          Andrada! arranca esse pendão dos ares! <br />
          Colombo! fecha a porta dos teus mares!<br />

        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          ALVES, C.&nbsp;<b>Navio Negreiro</b>. Disponível em: http://www.dominiopublico.gov.br/download/texto/bv000068.pdf. Acesso em 10 abr. 2025.
        </Text>
        <Text>
          O texto de Castro Alves tematiza o tráfico humano de forma crítica e em caráter abolicionista. Com base no trecho, a denúncia feita pelo autor
        </Text>
      </>
    ),
    alternativas: {
      A: "exalta a figura de Colombo como um herói para o Novo Mundo.",
      B: "justifica o sofrimento imposto aos escravizados como predestinação.",
      C: "aponta a necessidade de nova rota para o comércio de escravizados.",
      D: "condena a brutalidade das condições do escravizado imposta nas colônias.",
      E: "defende a superioridade do Brasil em relação a Colombo e seus feitos.",
    },
  },
  {
    texto: (
      <>
        <Text>
          Entre todas essas elegantes e agradáveis moças, que com aturado empenho se esforçam por ver qual delas vence em graça, encantos e donaires, certo que sobrepuja a travessa Moreninha, princesa daquela festa. Hábil menina é ela! nunca seu amor-próprio produziu com tanto estudo seu toucador e, contudo,dir-se-ia que o gênio da simplicidade a penteara e vestira.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          MACEDO, J. M.&nbsp;<b>A Moreninha</b>. Ministério da Cultura, Fundação Biblioteca Nacional, Departamento Nacional do Livro, 1844, p. 62.
        </Text>
        <Text>
          Ao abordar a figura feminina, esse fragmento romântico do século XIX reproduz uma concepção evidenciada na
        </Text>
      </>
    ),
    alternativas: {
      A: "idealização da mulher como símbolo de delicadeza e graça.",
      B: "exaltação da racionalidade feminina na dinâmica social.",
      C: "representação realista da feminilidade na percepção do autor.",
      D: "afirmação do protagonismo feminino na narrativa romântica.",
      E: "dicotomia entre a honradez e o desejo carnal masculino.",
    },
  },
  {
    texto: (
      <>
        <Text style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Image
            src={ImagemQ30}
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "350px",
              display: "block",
            }}
          />
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          FRIEDRICH, C. D.&nbsp;<b>Caminhante sobre o mar de névoa</b>. 1818. Óleo sobre tela, 98,4 × 74,8 cm. Hamburger Kunsthalle, Hamburgo.
        </Text>
        <Text>
          A obra <i>Caminhante sobre o mar de névoa</i> é exemplo da influência do movimento Romântico, por apresentar a
        </Text>
      </>
    ),
    alternativas: {
      A: "vitória da racionalidade humana frente a reflexões idílicas.",
      B: "busca pela perfeição por meio da padronização técnica.",
      C: "ênfase na estética pura e na simetria em cenas artísticas.",
      D: "valorização do cotidiano às classes europeias abastadas.",
      E: "relação com a natureza enquanto ilustração da subjetividade.",
    },
  },
  {
    texto: (
      <>
        <Text>
          Ê laroiê, mojubá<br />
          Abram os caminhos para a negra voz<br />
          Coroada em cada um de nós<br />
          Soberana África<br />
          A passarela é o terreiro<br />
          E meu pavilhão o manto ancestral<br />
          Reluz no ventre da vida a pele retinta em ritual<br />
          No céu de estrelas, um legado sagrado e de fé<br />
          Pra exaltar o continente, axé<br />
          <br />
          Ô, África<br />
          África de mama, ê-ô<br />
          Iluaiê, ô, África<br />
          De reis e rainhas e grandes reinados<br />
          Que a História nunca quis contar<br />
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          DRAGÕES DA REAL.&nbsp;<b>África, Uma Constelação de Reis e Rainhas</b>. Samba-enredo 2024. Intérpretes: Igor Federal, Vaguinho.
        </Text>
        <Text>
          O samba-enredo, por meio da ideia de alusões históricas, enfatiza uma valorização da
        </Text>
      </>
    ),
    alternativas: {
      A: "memória colonial como símbolo de resistência na periferia.",
      B: "religiosidade afro-brasileira como eixo central da narrativa.",
      C: "exaltação mitológica como referência estética na composição.",
      D: "ancestralidade africana como identidade cultural da comunidade.",
      E: "influência ocidental como matriz do samba contemporâneo.",
    },
  },
  {
    texto: (
      <>
        <Text>
          É chato chegar a um objetivo num instante<br />
          Eu quero viver nessa metamorfose ambulante<br />
          Do que ter aquela velha opinião formada sobre tudo<br />
          Do que ter aquela velha opinião formada sobre tudo<br />
          Sobre o que é o amor<br />
          Sobre o que eu nem sei quem sou<br />
          Se hoje eu sou estrela amanhã já se apagou<br />
          Se hoje eu te odeio amanhã lhe tenho amor<br />
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          SEIXAS, R. Metamorfose ambulante.&nbsp;<b>Ouro de Tolo</b>, 1977. Disponível em: https://genius.com/Raul-seixas-metamorfose-ambulante-lyrics. Acesso em 10 abr. 2025.
        </Text>
        <Text>
          Nessa canção, o recurso coesivo usado estilisticamente para promover a progressão temática é o(a)
        </Text>
      </>
    ),
    alternativas: {
      A: "pronome relativo, conectando ideias sobre identidade e incerteza.",
      B: "elipse do sujeito, sugerindo mudanças de perspectiva e indefinição.",
      C: "conjunção adversativa, reforçando a contradição entre presente e futuro.",
      D: "substituição sinonímica, variando as expressões para ressaltar contrastes.",
      E: "repetição lexical, enfatizando a oposição entre mudança e opiniões fixas.",
    },
  },
  {
    texto: (
      <>
        <Text>
          <b>TEXTO I</b><br /><br />
          O Inventário Nacional da Diversidade Linguística (INDL) é uma política voltada para o reconhecimento da diversidade linguística como patrimônio cultural, por meio da identificação, documentação e ações de apoio e fomento. Por ser um instrumento com a dupla finalidade de pesquisar as línguas e reconhecê-las como patrimônio cultural, o INDL visa ao mapeamento, a caracterização e o diagnóstico das diferentes situações relacionadas à pluralidade linguística brasileira.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          Disponível em: http://portal.iphan.gov.br. Acesso em 10 abr. 2025.
        </Text>
        <Text>
          <b>TEXTO II</b><br /><br />
          Ainda não se fez um levantamento completo das contribuições das línguas indígenas ao português falado no Brasil. Mais raros ainda são os dicionários que registram as centenas de línguas indígenas existentes em território nacional, o que expressa a gravidade da situação do ponto de vista da preservação da memória e da cultura de centenas de etnias. Segundo o Instituto Socioambiental, “apenas 11 línguas têm acima de cinco mil falantes: Baniwa, Guajajara, Kaingang, Kayapó, Makuxi, Sateré-Mawé, Terena, Tikuna, Xavante, Yanomami e Guarani”. Em contrapartida, correm risco de extinção cerca de 110 línguas que contam com menos de 400 falantes.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          Disponível em: https://museudasculturasindigenas.org.br. Acesso em 10 abr. 2025.
        </Text>
        <Text>
          Pela leitura desses textos, fica demonstrado que a preservação do patrimônio linguístico requer a promoção
        </Text>
      </>
    ),
    alternativas: {
      A: "de restrições legais para impedir a extinção de línguas indígenas.",
      B: "da substituição gradual de línguas minoritárias pelo português.",
      C: "da exclusividade cultural das línguas indígenas como patrimônio.",
      D: "de políticas públicas para documentar e valorizar a diversidade.",
      E: "da padronização linguística para unificar a comunicação nacional.",
    },
  },
  {
    texto: (
      <>
        <Text>
          Bruno Castro, especialista em cibersegurança, traz explicações sobre o modelo que pode vir a ser a maior ferramenta de Inteligência Artificial do mundo, o <i>Qwen 2.5</i>, modelo de linguagem criado pelo grupo Alibaba e que pode superar o <i>ChatGPT</i> e o <i>DeepSeek</i>. De acordo com o especialista, o código aberto do modelo vem para abrir o jogo da Inteligência Artificial para o mercado.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          Disponível em: https://www.terra.com.br. Acesso em 10 abr. 2025.
        </Text>
        <Text>
          No trecho, a expressão "abrir o jogo" é empregada de forma figurada para demonstrar que o <i>Qwen 2.5</i> traz
        </Text>
      </>
    ),
    alternativas: {
      A: "transparência no acesso à tecnologia, promovendo inovação no setor.",
      B: "redução de barreiras regulatórias, facilitando a adoção de novas tecnologias.",
      C: "expansão da Inteligência Artificial, assegurando domínio sobre o mercado.",
      D: "simplificação do funcionamento do modelo, garantindo usabilidade para o público.",
      E: "inovação em estratégias comerciais, estimulando a concorrência entre empresas.",
    },
  },
  {
    texto: (
      <>
        <Text>
          Às vezes o senhor me chamava para seu secretário, e isso me enchia de orgulho. Eu pequeno, o senhor tão grande — maior que um homem comum aos olhos de qualquer menino. Tudo no lugar era pequeno e doméstico, e o senhor, sim, era grande — começa que me acostumei a vê-lo montado a cavalo, no ritmo do galope ou do trote de animais tão de estimação que eram considerados jóias de família, e homem montado, para o menino que mal chegava à crina do cavalo, tinha dimensão de estátua.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          ANDRADE, C. D.&nbsp;<b>O essencial em duas palavras</b>. Carta para Carlos de Paula Andrade.&nbsp;<i>[s.l.]</i>, 1964. Disponível em: https://correio.ims.com.br. Acesso em 10 abr. 2025 (adaptado).
        </Text>
        <Text>
          As metáforas utilizadas no texto referem-se a uma concepção própria fundamentada na
        </Text>
      </>
    ),
    alternativas: {
      A: "idealização mitológica do destinatário como figura heroica.",
      B: "valorização da montaria como símbolo de nobreza e tradição.",
      C: "representação literária do cavalo como um ser de majestade.",
      D: "relação entre o cavaleiro e seu animal como forma de dominação.",
      E: "percepção pueril do autor sobre a grandiosidade do destinatário.",
    },
  },
  {
    texto: (
      <>
        <Text>
          <b>TEXTO I</b><br /><br />
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src={ImagemQ36}
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "500px",
                display: "block",
              }}
            />
          </span>
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          SANCHEZ, R. Disponível em: https://www.matinaljornalismo.com.br. Acesso em 11 abr. 2025.
        </Text>
        <Text>
          <b>TEXTO II</b><br /><br />
          A Cambada realiza espetáculos de rua e palco, performances, intervenções urbanas e oficinas, sempre buscando o envolvimento do público. “Nossas montagens sempre se comprometeram com a participação ativa da espectadora, alimentando uma participação mais ativa no próprio cotidiano, fazendo da arte teatral um meio de expressão e reflexão”, ressalta Pâmela.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          Disponível em: https://www.matinaljornalismo.com.br. Acesso em 11 abr. 2025.
        </Text>
        <Text>
          Pela leitura desses textos, infere-se que a atuação teatral de rua gera sentidos conectados à
        </Text>
      </>
    ),
    alternativas: {
      A: "elitização do teatro como prática cultural para públicos restritos.",
      B: "mobilização social por meio da arte e da participação do público.",
      C: "dissociação política na representação das questões sociais urbanas.",
      D: "valorização de tradições clássicas do teatro e sua adaptação moderna.",
      E: "separação das artes cênicas como forma de puro entretenimento popular.",
    },
  },
  {
    texto: (
      <>
        <Text>
          Só os burros pareciam não sentir a chuva. Mastigavam o capim que crescia em frente ao armazém. Apesar do temporal os homens continuavam o trabalho. Colodino perguntou:<br />
          — Quantas arrobas você já desceu?<br />
          — Vinte mil.<br />
          Antônio Barriguinha, o tropeiro, pegou do último saco:<br />
          — Esse ano o home colhe oitenta mil.<br />
          — Cacau como diabo!<br />
          — Dinheiro pra burro…
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          AMADO, J.&nbsp;<b>Cacau</b>. São Paulo: Companhia das Letras, 2010. p. 11.
        </Text>
        <Text>
          No trecho de <i>Cacau</i>, de Jorge Amado, observa-se o uso do pretérito imperfeito. Essa escolha contribui para a estrutura narrativa ao
        </Text>
      </>
    ),
    alternativas: {
      A: "reforçar a continuidade das ações e a ambientação do cenário descrito.",
      B: "enfatizar a simultaneidade de ações pontuais e concluídas no passado.",
      C: "criar um efeito de retrospectiva, destacando eventos anteriores ao momento narrado.",
      D: "indicar uma mudança repentina no fluxo narrativo, promovendo um avanço na história.",
      E: "estabelecer um contraste entre ações pontuais e expectativas futuras dos personagens.",
    },
  },
  {
    texto: (
      <>
        <Text>
          <b>Admirável chip novo</b><br />
          Pane no sistema, alguém me desconfigurou<br />
          Aonde estão meus olhos de robô?<br />
          Eu não sabia, eu não tinha percebido<br />
          Eu sempre achei que era vivo<br />
          Parafuso e fluido em lugar de articulação<br />
          Até achava que aqui batia um coração<br />
          Nada é orgânico, é tudo programado<br />
          E eu achando que tinha me libertado<br />
          Mas lá vêm eles novamente<br />
          Eu sei o que vão fazer<br />
          Reinstalar o sistema<br />
          Pense, fale, compre, beba<br />
          Leia, vote, não se esqueça<br />
          Use, seja, ouça, diga<br />
          Tenha, more, gaste, viva<br />
          Pense, fale, compre, beba<br />
          Leia, vote, não se esqueça<br />
          Use, seja, ouça, diga<br />
          Não, senhor, sim, senhor<br />
          Não, senhor, sim, senhor<br />
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          PITTY.&nbsp;<b>Admirável chip novo</b>. Disponível em: https://www.letras.mus.br. Acesso em 03 abr. 2025 (fragmento).
        </Text>
        <Text>
          Toda sequência textual apresenta elementos estruturais que orientam sua organização e definem sua finalidade comunicativa. No trecho, a utilização da sequência textual injuntiva se revela na medida em que a autora
        </Text>
      </>
    ),
    alternativas: {
      A: "discorre acerca de um determinado tema.",
      B: "narra o processo de robotização das pessoas.",
      C: "apresenta opiniões e posicionamentos implícitos.",
      D: "incita o interlocutor a realizar uma cadeia de ações.",
      E: "compara características de robôs e seres humanos.",
    },
  },
  {
    texto: (
      <>
        <Text>
          <b>TEXTO I</b><br /><br />
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src={ImagemQ39_1}
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "500px",
                display: "block",
              }}
            />
          </span>
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          <b>Vênus de Willendorf</b>. c. 28.000-22.000 a.C. Pedra calcária com ocre vermelho, 11 cm. Museu de História Natural de Viena, Áustria.
        </Text>
        <Text>
          <b>TEXTO II</b><br /><br />
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src={ImagemQ39_2}
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "500px",
                display: "block",
              }}
            />
          </span>
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          <b>Vênus de Laussel</b>. c. 25.000 a.C. Baixo-relevo em calcário, 46 cm. Museu de Aquitânia, Bordeaux, França.
        </Text>
        <Text>
          Essas esculturas, produzidas no Período Paleolítico, revelam
        </Text>
      </>
    ),
    alternativas: {
      A: "uniformidade estilística entre as expressões artísticas.",
      B: "predomínio do imaginário coletivo nos referenciais estéticos.",
      C: "escassez de representações femininas nas esculturas.",
      D: "ausência de relevância figurativa nas obras produzidas.",
      E: "negação de visões estereotipadas de gênero através da arte escultórica.",
    },
  },
  {
    texto: (
      <>
        <Text>
          &nbsp;&nbsp;&nbsp;&nbsp;E, agora, já se sabia: baixado o caixão na cova, à queima-bucha o matavam; no expirar de um credo. A chuvinha já abrandava. Não se ia passar na igreja? Não, no lugar não havia padre.<br />
          &nbsp;&nbsp;&nbsp;&nbsp;Prosseguia-se.<br />
          &nbsp;&nbsp;&nbsp;&nbsp;E entravam no cemitério. “Aqui, todos vêm dormir” — era, no portão, o letreiro. Fez-se o airado ajuntamento, no barro, em beira do buraco; muitos, porém, mais para trás, preparando o foge-foge. A forte circunspectância. O nenhum despedimento: ao uma-vez Dagobé, Damastor. Depositado fundo, em forma, por meio de rijas cordas. Terra em cima: pá e pá; assustava a gente, aquele som. E agora?<br />
          &nbsp;&nbsp;&nbsp;&nbsp;O rapaz Liojorge esperava, ele se escorregou em si. Via só sete palmos de terra, dele diante do nariz? Teve um olhar árduo. À pandilha dos irmãos. O silêncio se torcia. Os dois, Dismundo e Derval, esperavam o Doricão. Súbito, sim: o homem desenvolveu os ombros; só agora via o outro, em meio àquilo?<br />
          &nbsp;&nbsp;&nbsp;&nbsp;Olhou-o curtamente. Levou a mão ao cinturão? Não. A gente, era que assim previa, a falsa noção do gesto. Só disse, subitamente ouviu-se: — “Moço, o senhor vá, se recolha. Sucede que o meu saudoso Irmão é que era um diabo de danado...”<br />
          &nbsp;&nbsp;&nbsp;&nbsp;Disse isso, baixo e mau-som. Mas se virou para os presentes. Seus dois outros manos, também. A todos, agradeciam. Se não é que não sorriam, apressurados. Sacudiam dos pés a lama, limpavam as caras do respingado. Doricão, já fugaz, disse, completou: — “A gente, vamos’embora, morar em cidade grande...” O enterro estava acabado. E outra chuva começava.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          ROSA, G.&nbsp;<b>Primeiras Estórias</b>, 1962.
        </Text>
        <Text>
          A situação narrada revela uma tensão lastreada na perspectiva da
        </Text>
      </>
    ),
    alternativas: {
      A: "temática fúnebre presente na passagem do conto.",
      B: "correspondência da meteorologia e a emoção da cena.",
      C: "possibilidade de um assassinato ser perpetrado no enterro.",
      D: "presença de cangaceiros armados em um ambiente familiar.",
      E: "assiduidade de marcas regionais na fala dos personagens.",
    },
  },
];












const questoesHumanas = [
  {
    texto: (
      <>
        <Text>
          <b>João Pessoa é mesmo a cidade onde o sol nasce primeiro nas Américas?</b><br />
          Lindas praias, belezas naturais incontáveis e a fama de ser a cidade onde o sol nasce primeiro em todo o continente americano, João Pessoa completa 437 anos nesta sexta-feira (5), com muita história a ser contada. No entanto, realmente há base científica para dizer que o sol nasce primeiro em João Pessoa? [...] Felipe Sérvulo, professor de física, mestre em cosmologia e astrônomo, explicou como funciona o nascer do sol, entendimento que é necessário para compreender o motivo pelo qual a capital paraibana é a cidade que primeiro recebe os raios solares.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          Disponível em: https://g1.globo.com. Acesso em 13 abr. 2025.
        </Text>
        <Text>
          O evento experimentado por João Pessoa quanto ao nascer do sol ocorre pois a cidade é o(a)
        </Text>
      </>
    ),
    alternativas: {
      A: "capital que recebe menos interferência atmosférica.",
      B: "território de maior altitude em relação ao nível do mar.",
      C: "lugar mais distante do Meridiano de Greenwich no país.",
      D: "espaço mais a leste no território brasileiro em relação aos demais.",
      E: "local mais perfeitamente alinhado ao Trópico de Capricórnio no país.",
    },
  },
  {
    texto: (
      <>
        <Text>
          Uma operação do 6º Pelotão de Meio Ambiente da Polícia Militar desarticulou, nesta quinta-feira (9), um esquema de garimpo ilegal de quartzo na região de Gorduras, no município de Arcos (MG). A ação resultou na prisão em flagrante de dez pessoas, acusadas de crimes contra a União e o meio ambiente. O grupo extraía ilegalmente gemas de quartzo destinadas ao mercado internacional, além de ameaçar produtores rurais locais e invadir propriedades privadas.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          Disponível em: https://portalgerais.com. Acesso em 13 abr. 2025.
        </Text>
        <Text>
          O tipo de exploração descrito no texto depende de quais processos geomorfológicos?
        </Text>
      </>
    ),
    alternativas: {
      A: "Movimentos tectônicos recentes e vulcanismo ativo.",
      B: "Formação de aquíferos e dissolução cárstica de calcários.",
      C: "Deposição eólica e formação de dunas móveis em planícies costeiras.",
      D: "Intemperismo químico e erosão diferencial em terrenos cristalinos.",
      E: "Sedimentação fluvial e transporte de detritos em bacias sedimentares.",
    },
  },
  {
    texto: (
      <>
        <Text>
          <b>TEXTO I</b><br /><br />
          Sabemos agora que a Idade das Trevas não foi de trevas. Ignorância, letargia, desordem, existiram então como hoje, e longe estiveram de predominar numa época ansiosa de conhecimentos, vigorosa em seu modo de viver e de se expressar, e idealista na suas construções. Talvez não seja demais dizer que a sociedade da Alta Idade Média tinha formas funcionais com que a Idade Antiga nem sonhara, formas essas que levaram a fins jamais imaginados em épocas anteriores.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          BARK, W. C.&nbsp;<b>Origens da Idade Média</b>. São Paulo: Zahar, 1966. p. 100.
        </Text>
        <Text>
          <b>TEXTO II</b><br /><br />
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src={ImagemQ43}
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "300px",
                display: "block",
              }}
            />
          </span>
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          <b>Capela do palácio de Carlos Magno em Aachen</b>, Alemanha, construída em 881 d.C.
        </Text>
        <Text>
          Considerando a realidade da medievo arcaico, os textos se aproximam ao suscitarem uma reflexão sobre o(a)
        </Text>
      </>
    ),
    alternativas: {
      A: "fragilidade militar da nobreza.",
      B: "dinamismo cultural do período.",
      C: "retração comercial das cidades.",
      D: "paralisação tecnológica da sociedade.",
      E: "homogeneidade política da cristandade.",
    },
  },
  {
    texto: (
      <>
        <Text>
          <b>TEXTO I</b><br /><br />
          A proposta do IBGE ao calcular o índice de contribuição relativa para a pobreza no Brasil é contribuir com dados estatísticos para uma melhor alocação de recursos no combate à pobreza. Os resultados dos estudos realizados pelo IBGE mostram a capacidade do índice de identificar as pessoas mais pobres e dar um peso mais adequado para elas no total da pobreza estimada. Os números são alarmantes, levando em consideração que a Região Nordeste possui menos de um terço da população nacional (27,3%) e contribui com quase a metade (47,9%) de toda a pobreza estimada do país.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          CÉSAR, D. Disponível em: https://www.fecop.seplag.ce.gov.br. Acesso em 15 out. 2024 (adaptado).
        </Text>
        <Text>
          <b>TEXTO II</b><br /><br />
          <b>Que país é este</b><br />
          Nas favelas, no Senado<br />
          Sujeira pra todo lado<br />
          Ninguém respeita a Constituição<br />
          Mas todos acreditam no futuro da nação<br />
          Que país é esse?<br />
          No Amazonas, no Araguaia-ia-ia<br />
          Na Baixada Fluminense<br />
          Mato Grosso, Minas Gerais<br />
          E no Nordeste tudo em paz<br />
          Na morte, eu descanso<br />
          Mas o sangue anda solto<br />
          Manchando os papéis<br />
          Documentos fiéis<br />
          Ao descanso do patrão<br />
          Que país é esse?<br />

        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          RUSSO, R.&nbsp;<b>Que país é este</b>. Disponível em: https://www.letras.mus.br. Acesso em 15 out. 2024 (adaptado).
        </Text>
        <Text>
          O trecho retirado da música de Renato Russo encontra respaldo no Texto I na medida em que
        </Text>
      </>
    ),
    alternativas: {
      A: "denuncia a existência de mazelas entre as diferentes regiões brasileiras.",
      B: "demonstra a inexistência de políticas públicas de combate à miséria.",
      C: "restringe determinados problemas sociais a uma localidade específica.",
      D: "critica a relação de causalidade entre a pobreza e a população nordestina.",
      E: "comprova a disparidade socioeconômica entre classes sociais distintas.",
    },
  },
  {
    texto: (
      <>
        <Text>
          Rejeitar o sofrimento animal por conveniência humana é uma forma de discriminação arbitrária. Se não consideramos aceitável infligir dor a seres humanos vulneráveis, por que seria diferente com animais que também sentem?
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          SINGER, P.&nbsp;<b>Libertação animal</b>. Traduzido por Laura Teixeira Motta. São Paulo: Martins Fontes, 2004.
        </Text>
        <Text>
          A crítica de Peter Singer ao especismo fundamenta-se na
        </Text>
      </>
    ),
    alternativas: {
      A: "senciência como base moral.",
      B: "racionalidade como fim em si.",
      C: "autonomia como critério ético.",
      D: "dignidade como valor absoluto.",
      E: "utilidade como fator secundário.",
    },
  },
  {
    texto: (
      <>
        <Text>
          A agricultura familiar encolheu no país. Dados do Censo Agropecuário de 2017 apontam uma redução de 9,5% no número de estabelecimentos classificados como de agricultura familiar, em relação ao último Censo, de 2006. O segmento também foi o único a perder mão de obra. Enquanto na agricultura não familiar houve a criação de 702 mil postos de trabalho, a agricultura familiar perdeu um contingente de 2,2 milhões de trabalhadores.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          NERY, C.&nbsp;<b>Estatísticas Econômicas</b>. 2019. Disponível em: https://agenciadenoticias.ibge.gov.br/. Acesso em 12 nov. 2024 (adaptado).
        </Text>
        <Text>
          O texto aborda a dinâmica do espaço agrário brasileiro, que possui consequências diretas na estrutura do campo, das quais pode-se destacar o(a)
        </Text>
      </>
    ),
    alternativas: {
      A: "maior concentração de terras.",
      B: "aumento da expectativa de vida.",
      C: "dinamização do mercado agrícola.",
      D: "ampliação da agricultura itinerante.",
      E: "queda na produção de commodities.",
    },
  },
  {
    texto: (
      <>
        <Text>
          Continue… Não deixe que o medo de errar o impeça de continuar a viver e tentar. O fracasso não existe; sempre é possível aprender com o que aconteceu e, a partir disso, tentar novamente. Tudo se resume a construir uma base sólida, com pequenas vitórias e aprendizados constantes. Cada experiência é uma oportunidade de crescimento e ela pode nos moldar a cada dia. Nada é perfeito.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          PAULO, J.&nbsp;<b>Bonde do Tigrão</b>. WhatsApp, 2024 (adaptado).
        </Text>
        <Text>
          Ao incorporar uma filosofia de teor otimista e pragmático, o posicionamento adotado pelo autor na colocação apresentada manifesta uma relação veemente entre
        </Text>
      </>
    ),
    alternativas: {
      A: "ataraxia e imutabilidade do saber.",
      B: "ignorância ética e ideia de vivência.",
      C: "sabedoria humana e liberdade do ser.",
      D: "livre-arbítrio e aceitação do sofrimento.",
      E: "racionalismo moderno e injustiça moral.",
    },
  },
  {
    texto: (
      <>
        <Text>
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src={ImagemQ48}
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "500px",
                display: "block",
              }}
            />
          </span>
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          BECK, A.&nbsp;<b>Tumblr</b>. Disponível em: https://tirasarmandinho.tumblr.com/. Acesso em 23 mar. 2025.
        </Text>
        <Text>
          A tirinha exalta qual traço característico da coletividade?
        </Text>
      </>
    ),
    alternativas: {
      A: "Inclusão social.",
      B: "Pluralidade cultural.",
      C: "Miscigenação racial.",
      D: "Igualdade de gênero.",
      E: "Diversidade ambiental.",
    },
  },
  {
    texto: (
      <>
        <Text>
          Ao longo das regiões costeiras, é comum observar imponentes paredões que se erguem abruptamente a partir do encontro entre a terra e o mar. Essas formações são moldadas pela ação incessante das ondas, que, ao colidirem contra as rochas, promovem um desgaste contínuo. As ondas são formadas a partir da influência eólica, que sopra sobre a superfície das águas oceânicas, forçando o movimento. No momento em que as ondas se aproximam do litoral, a profundidade tende a diminuir, desse modo, elas se dobram e quebram em áreas de praias ou rochedos. Com o passar do tempo, esse processo escava a base dessas formações, levando ao desmoronamento das camadas superiores e resultando em estruturas íngremes que caracterizam a paisagem litorânea.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          FREITAS, E.&nbsp;<b>Os movimentos das águas dos mares e oceanos</b>. Brasil Escola. Disponível em: https://brasilescola.uol.com.br. Acesso em 25 mar. 2025.
        </Text>
        <Text>
          Esse fenômeno geomorfológico de erosão das regiões costeiras favorece o processo de
        </Text>
      </>
    ),
    alternativas: {
      A: "formação de vulcões.",
      B: "surgimento de falésias.",
      C: "nivelamento de penhascos.",
      D: "devastação da região restinga.",
      E: "redução da salinidade oceânica.",
    },
  },
  {
    texto: (
      <>
        <Text>
          &nbsp;&nbsp;&nbsp;&nbsp;A Princesa Imperial Regente, em nome de Sua Majestade, o Imperador e Senhor D. Pedro II, faz saber a todos os súditos do Império que a Assembleia Geral Decretou, e ela Sancionou a Lei seguinte:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;Art. 1º	Os filhos de mulher escrava que nascerem no Império desde a data desta lei serão considerados de condição livre.<br />
          &nbsp;&nbsp;&nbsp;&nbsp;$ 1° Os ditos filhos menores ficarão sob a autoridade dos senhores de suas mães, os quais terão obrigação de criá-los e tratá-los até a idade de oito anos completos. Chegando o filho da escrava a esta idade, o senhor da mãe terá a opção, ou de receber do Estado indenização de 600 mil réis, ou de utilizar-se dos serviços do menor até a idade de 21 anos completos.<br />
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          Disponível em: http://www.planalto.gov.br (adaptado).
        </Text>
        <Text>
          Sobre o contexto das leis abolicionistas no Brasil do século XIX, havia
        </Text>
      </>
    ),
    alternativas: {
      A: "divergência entre os latifundiários e os barões do café.",
      B: "divergência entre os senhores de escravizados e a elite agrária.",
      C: "convergência entre o pensamento escravocrata e o abolicionista.",
      D: "contradição histórica entre o passado colonial e o presente imperial.",
      E: "contradição entre os interesses da elite agrária e os dos escravizados.",
    },
  },
  {
    texto: (
      <>
        <Text>
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src={ImagemQ51}
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "600px",
                display: "block",
              }}
            />
          </span>
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          <b>População por idade e sexo</b>. Instituto Brasileiro de Geografia e Estatística, 2022.
        </Text>
        <Text>
          A dinâmica da pirâmide etária brasileira entre os censos de 2010 e 2022 revela o(a)
        </Text>
      </>
    ),
    alternativas: {
      A: "aumento da taxa de natalidade.",
      B: "diminuição da taxa de fecundidade.",
      C: "redução dos gastos previdenciários.",
      D: "aumento do crescimento vegetativo.",
      E: "estabilização do crescimento populacional.",
    },
  },
  {
    texto: (
      <>
        <Text>
          A avaliação moral, portanto, deve ser focada no impacto total de uma ação sobre a coletividade, sendo que a justiça e a moralidade são determinadas pela capacidade de maximizar os benefícios sociais. Isso implica que, ao se tomar uma decisão, deve-se considerar se ela trará mais bem-estar para o maior número possível de pessoas, ainda que, em alguns casos, isso signifique que uma minoria sofra as consequências dessa escolha.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          Jornal Eletrônico FIVJ. Disponível em: https://www.jornaleletronicofivj.com.br. Acesso em: 20 mar. 2025. (adaptado).
        </Text>
        <Text>
          Esse texto reforça uma teoria ética ao remeter a um(a)
        </Text>
      </>
    ),
    alternativas: {
      A: "ideia dicotômica.",
      B: "tese contratualista.",
      C: "pressuposto lógico.",
      D: "pensamento cético.",
      E: "raciocínio utilitarista.",
    },
  },
  {
    texto: (
      <>
        <Text>
          Nos últimos anos, uma série de mudanças tem sido observada em diversos bairros da cidade. Antigas áreas com casas simples e comércio popular estão sendo substituídas por novos empreendimentos imobiliários. No local, é possível ver a construção de apartamentos de luxo e centros comerciais voltados a uma classe média mais alta. Essas transformações aumentaram significativamente os preços das propriedades e, com isso, muitos moradores originais, de classe baixa, estão sendo forçados a se mudar devido à incapacidade de arcar com os custos. O aumento do custo de vida e a chegada de novos moradores com maior poder aquisitivo alteram profundamente o perfil social da região, ocasionando uma segregação socioespacial.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          <b>CRECI RJ</b>, 2023. Disponível em: https://creci-rj.gov.br. Acesso em: 18 nov. 2024. (adaptado).
        </Text>
        <Text>
          Qual conceito sociológico melhor embasa o fenômeno descrito no texto?
        </Text>
      </>
    ),
    alternativas: {
      A: "Conurbação.",
      B: "Urbanização.",
      C: "Gentrificação.",
      D: "Desindustrialização.",
      E: "Movimento pendular.",
    },
  },
  {
    texto: (
      <>
        <Text>
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src={ImagemQ54}
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "400px",
                display: "block",
              }}
            />
          </span>
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          <b>Fonte</b>: Centro de Hidrografia da Marinha do Brasil.
        </Text>
        <Text>
          Os dados da dinâmica das marés apresentados na tabela resultam da
        </Text>
      </>
    ),
    alternativas: {
      A: "estruturação do relevo oceânico.",
      B: "alteração da pressão atmosférica.",
      C: "variação sazonal dos ventos alísios.",
      D: "interação gravitacional do Sol e da Lua.",
      E: "oscilação da brisa marítima e da terrestre.",
    },
  },
  {
    texto: (
      <>
        <Text>
          <b>TEXTO I</b><br /><br />
          A Palestina, desde 2012, detém o status de “Estado observador não membro” nas Nações Unidas, concedido pela Assembleia Geral com 138 votos a favor, 9 contra e 41 abstenções. Este reconhecimento permite à Palestina participar de debates e atividades da ONU, mas sem direito a voto em resoluções ou eleições.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          <b>Assembleia Geral da ONU concede status de Estado Observador não membro à Palestina</b>. Nações Unidas Brasil, 2012. Disponível em: https://brasil.un.org/. Acesso em 28 mar. 2025.
        </Text>
        <Text>
          <b>TEXTO II</b><br /><br />
          Em 2024, Israel intensificou sua presença militar na Faixa de Gaza, estabelecendo o Corredor de Netzarim, uma zona militar com bases, estradas pavimentadas e infraestrutura como abrigos móveis e torres de comunicação. Essa ocupação permite o controle dos movimentos dentro de Gaza e a realização de operações militares. Desde a Guerra dos Seis Dias de 1967, Israel iniciou a construção de assentamentos na Cisjordânia, estabelecendo colônias judaicas com apoio do governo israelense. Embora a ONU considere esses assentamentos ilegais, Israel os expande, alegando razões históricas e de segurança.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          <b>Al menos dos muertos en un bombardeo israelí contra el hospital Nasser, el más grande del sur de Gaza</b>. El HuffPost. Tradução de ChatGPT. Disponível em: https://www.huffingtonpost.es. Acesso em: 28 mar. 2025 (adaptado).
        </Text>
        <Text>
          Um dos elementos constitutivos de um estado-nação, cujo reconhecimento é dificultado pela ocupação militar de Israel na Faixa de Gaza e pelos assentamentos israelenses na Cisjordânia, existentes desde a Guerra dos Seis Dias, é a
        </Text>
      </>
    ),
    alternativas: {
      A: "identidade nacional.",
      B: "estabilidade econômica.",
      C: "soberania sobre o território.",
      D: "representatividade internacional.",
      E: "organização política governamental.",
    },
  },
  {
    texto: (
      <>
        <Text>
          A escravidão das populações indígenas e negras no Brasil produziu a desintegração dos seus diversos universos religiosos de origem e, ao longo do processo de formação social brasileiro, ocorreu a assimilação de elementos fraturados das crenças ameríndias e africanas pelas tradições cristã e católica. E, por outro lado, houve também processos de assimilação ou sincretismo na criação de novas religiões produzidas a partir de crenças remanescentes indígenas e africanas misturadas com elementos do cristianismo. O que ocorreu foi uma cristianização daquelas antigas religiões fraturadas em algumas crenças cultivadas por índios e negros escravizados e que resultaram, por exemplo, na Umbanda e no Candomblé.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          ORTIZ, R.&nbsp;<b>A morte branca do feiticeiro negro: umbanda e sociedade brasileira</b>. São Paulo: Brasiliense, 1999.
        </Text>
        <Text>
          No cenário do Brasil do século XIX, a Umbanda e o Candomblé representam
        </Text>
      </>
    ),
    alternativas: {
      A: "rompimento total de tradições medievais.",
      B: "pacificação de conflitos no âmbito religioso.",
      C: "afastamento absoluto de religiões abraâmicas.",
      D: "assimilação de práticas cristãs em sua forma tradicional.",
      E: "resistência das populações de negros e indígenas em relação à tradição cristã.",
    },
  },
  {
    texto: (
      <>
        <Text>
          Não é possível um compromisso autêntico se, àquele que se julga comprometido, a realidade se apresenta como algo dado, estático e imutável. Se este olha e percebe a realidade enclausurada em departamentos estanques. Se não a vê e não a capta como uma totalidade, cujas partes se encontram em permanente interação. Daí sua ação não poder incidir sobre as partes isoladas, pensando que assim transforma a realidade, mas sobre a totalidade. É transformando a totalidade que se transformam as partes e não o contrário. No primeiro caso, sua ação, que estaria baseada numa visão ingênua, meramente “focalista” da realidade, não poderia constituir um compromisso.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          FREIRE, P.&nbsp;<b>Educação e Mudança</b>. Paz & Terra, RJ/SP, 2018, 38ª ed.
        </Text>
        <Text>
          Ao sustentar a importância do engajamento na transformação social, o autor compõe uma crítica à(ao)
        </Text>
      </>
    ),
    alternativas: {
      A: "participação em ações decisórias.",
      B: "manutenção de práticas pedagógicas.",
      C: "interpretação objetiva dos fatos sociais.",
      D: "aceitação da complexidade da realidade.",
      E: "visão conformista e fragmentada do mundo.",
    },
  },
  {
    texto: (
      <>
        <Text>
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src={ImagemQ58}
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "400px",
                display: "block",
              }}
            />
          </span>
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          <b>Folha de São Paulo</b>, São Paulo, 15 ago. 2010, p. 2.
        </Text>
        <Text>
          Qual dos entraves a seguir sustenta a problemática educacional elucidada na charge?
        </Text>
      </>
    ),
    alternativas: {
      A: "Evasão escolar, ocasionada pela inexistência de políticas sociais de assistencialismo.",
      B: "Mercantilização educacional, ocasionada pela criação de programas neoliberais de reforço.",
      C: "Negligência estudantil, ocasionada pela acomodação às benesses instituídas pelo poder público.",
      D: "Desvalorização científica, ocasionada pelo desprezo aos benefícios sociais dirigidos à educação.",
      E: "Depreciação do assalariado, ocasionada pela ineficácia de políticas direcionadas ao bem-estar.",
    },
  },
  {
    texto: (
      <>
        <Text>
          <b>TEXTO I</b><br /><br />
          A força da alienação vem dessa fragilidade dos indivíduos, quando apenas conseguem identificar o que os separa e não o que os une.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          SANTOS, M.&nbsp;<b>Educação e Mudança</b>. Paz & Terra, RJ/SP, 2018, 38ª ed.
        </Text>
        <Text>
          <b>TEXTO II</b><br /><br />
          A pluralidade é a condição básica da ação humana, mas só se torna visível quando os indivíduos são capazes de ver o mundo a partir da perspectiva do outro.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          ARENDT, H.&nbsp;<b>A condição humana</b>. 10. ed. Rio de Janeiro: Forense Universitária, 2007 (adaptado).
        </Text>
        <Text>
          Com base nos textos, a alienação e a incompreensão entre as pessoas derivam de uma limitação centrada na
        </Text>
      </>
    ),
    alternativas: {
      A: "linguagem objetiva da ciência.",
      B: "ação conjunta da coletividade.",
      C: "percepção individual da realidade.",
      D: "falta de representatividade política.",
      E: "ausência de valores morais universais.",
    },
  },
  {
    texto: (
      <>
        <Text>
          <b>TEXTO I</b><br /><br />
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src={ImagemQ60}
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "400px",
                display: "block",
              }}
            />
          </span>
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          THEVET, F. A.&nbsp;<b>Les singularitez de la France antarctique</b>. Paris: Chez les Heritiers de Maurice de la Porte, 1558, p. 82.

        </Text>
        <Text>
          <b>TEXTO II</b><br /><br />
          Perguntaram-me então os dois irmãos como ia o primo deles, Hieronymus; disse-lhes que fora ele assado ao fogo e que tinha visto já comerem um pedaço do filho de Ferrero. Choraram então. Consolei-os e disse que, decerto, sabiam que eu aqui estava havia cerca de 8 meses e que Deus me tinha conservado. “Fará ele o mesmo convosco também; confiem nele”, disse eu. “Sinto isso mais do que vós, porque sou de uma terra estranha e não estou acostumado aos horrores desta gente; mas vós nascestes aqui e aqui fostes criados.” Responderam que eu tinha coração endurecido por causa da minha própria desgraça e por isso os não estranhava mais.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          STADEN, H.&nbsp;<b>Viagem ao Brasil</b>. Rio de Janeiro: Fundação Darcy Ribeiro, 2013, p. 115.
        </Text>
        <Text>
          Acerca das populações nativas, habitantes do que viria a ser chamado de “América”, as posturas colonizadoras apresentadas aproximam-se, uma vez que
        </Text>
      </>
    ),
    alternativas: {
      A: "apresentam uma visão idealizada das populações nativas.",
      B: "retratam os indígenas como bárbaros e cruéis incultos.",
      C: "criticam a indiferença no trato dos indígenas com os europeus.",
      D: "apontam o distanciamento cultural entre indígenas e europeus.",
      E: "enfatizam o caráter religioso das práticas antropofágicas.",
    },
  },
  {
    texto: (
      <>
        <Text>
          É evidente que uma mudança no sistema de um governo demanda muita discussão e maturidade nas relações dos Poderes e também da sociedade, mas alguém no Brasil precisa levantar a bandeira de mudança no sistema de governo, como fez John Locke. [...] Em uma célebre frase, Locke desenha nossa política atual no Brasil: “Os pais se perguntam por que as águas do rio são amargas quando eles mesmos envenenam a fonte”.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          Disponível em: https://www.gazetadopovo.com.br. Acesso em 13 abr. 2025.
        </Text>
        <Text>
          Com base na discussão proposta sobre sistemas de governo, os cidadãos tornam-se responsáveis pela
        </Text>
      </>
    ),
    alternativas: {
      A: "limitação do poder estatal por meio do contrato social.",
      B: "supremacia do soberano como fundamento da ordem.",
      C: "subordinação ao Estado em nome da estabilidade política.",
      D: "adoção da democracia direta como único modelo legítimo.",
      E: "imposição da vontade popular, sem restrições institucionais.",
    },
  },
  {
    texto: (
      <>
        <Text>
          <b>TEXTO I</b><br /><br />
          <b>Mais um tijolo no muro (pt. 2)</b><br />
          Nós não precisamos de nenhuma educação<br />
          Nós não precisamos de nenhuma lavagem cerebral<br />
          De nenhum sarcasmo velado na sala de aula<br />
          [...] Ei! Professor! Deixe as crianças em paz!<br />
          Em suma, você é apenas mais um tijolo no muro<br />
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          Disponível em: https://www.letras.mus.br. Acesso em 13 abr. 2025 (fragmento).
        </Text>
        <Text>
          <b>TEXTO II</b><br /><br />
          O professor governa. Ele governa, pois não cessa de dar sentido justificado às conduções possíveis para aquilo que se pode saber, fazer e ser no contexto escolar. O professor é um gestor dos focos de experiências possíveis no cotidiano escolar. Por conseguinte, ele sistematiza as relações entre a arte de governar e saber da verdade, ou ainda entre exercícios de poder e manifestação da verdade.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          FOUCAULT, M.&nbsp;<b>O governo de si e dos outros</b>: curso no Collège de France (1982- 1983). São Paulo: Martins Fontes, 2011, p. 17.
        </Text>
        <Text>
          Ambos os textos apresentam visões sobre a docência enquanto
        </Text>
      </>
    ),
    alternativas: {
      A: "prática emancipatória voltada à autonomia individual.",
      B: "ferramenta de transmissão neutra de conhecimento objetivo.",
      C: "dispositivo econômico de reprodução da divisão do trabalho.",
      D: "instrumento disciplinador que regula saberes e condutas.",
      E: "instância moralizadora que sustenta valores universais.",
    },
  },
  {
    texto: (
      <>
        <Text>
          <b>TEXTO I</b><br /><br />
          A caverna de Lascaux, no vale da Vézère, a dois quilômetros da pequena cidade de Montignac, não é só a mais bela, a mais rica das cavernas pré-históricas com pinturas; mas desde logo o primeiro sinal sensível que nos chegou do homem e da arte.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          BATAILLE, G.&nbsp;<b>O nascimento da arte</b>. Trad. e apresent. Aníbal Fernandes. Lisboa: Sistema Solar, 2015. p. 15.
        </Text>
        <Text>
          <b>TEXTO II</b><br /><br />
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src={ImagemQ63}
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "500px",
                display: "block",
              }}
            />
          </span>
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          Disponível em: https://unesco.sorbonneonu.fr. Acesso em 13 abr. 2025.
        </Text>
        <Text>
          A visão das pinturas de Lascaux como “arte” pelo texto conjuga uma função desses registros na
        </Text>
      </>
    ),
    alternativas: {
      A: "reprodução realista do cotidiano de caça e coleta.",
      B: "catalogação precisa de espécies e hábitos animais.",
      C: "diferenciação individual por meio da autoria e estilo.",
      D: "expressão simbólica de crenças e rituais comunitários.",
      E: "transmissão de informações escritas às gerações futuras.",
    },
  },
  {
    texto: (
      <>
        <Text>
          Vivemos numa sociedade que não mais reprime. Em vez disso, ela estimula. Estimula à produção, à performance, à superexposição. Ninguém precisa mais de um senhor para mandar: agora nós mesmos nos cobramos resultados, metas, métricas, likes. A violência já não vem de fora, mas de dentro. A autoexploração é mais eficiente do que a exploração alheia — e infinitamente mais cruel.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          HAN, B.-C.&nbsp;<b>A Socedade do Cansaço</b>. Petrópolis: Vozes, 2017.
        </Text>
        <Text>
          De acordo com o pensamento expresso por Byung-Chul Han, a lógica contemporânea de dominação
        </Text>
      </>
    ),
    alternativas: {
      A: "se funda na interdição da liberdade individual.",
      B: "é dissolvida pela cultura do bem-estar e da autoajuda.",
      C: "opera por meio da autonomia ilusória do sujeito sobre si.",
      D: "reforça o controle social através da vigilância panóptica.",
      E: "retoma os mecanismos repressivos da sociedade disciplinar.",
    },
  },
  {
    texto: (
      <>
        <Text>
          <b>TEXTO I</b><br /><br />
          Chamamos de sabedoria o conhecimento das realidades divinas e de ciência o conhecimento das realidades humanas e criadas. O conhecimento de Deus a partir das criaturas pertence, por sua forma, à ordem da ciência; esta pertence à ordem da sabedoria por ser somente seu objeto. Quando julgamos as realidades criadas em função das realidades divinas, trata-se então mais de sabedoria que de ciência.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          TOMÁS DE AQUINO.&nbsp;<b>Suma teológica</b>. São Paulo: Loyola, 2003, p. 89.
        </Text>
        <Text>
          <b>TEXTO II</b><br /><br />
          Sem dúvida, o método escolástico de ensino revelou-se de grande eficiência para o  desenvolvimento do trabalho intelectual dos preclaros e estudiosos em geral. A pesquisa e a leitura de obras clássicas fomentam a formação das ciências medievais, seja sob o empoderamento da Igreja Romana, seja sob os auspícios da filosofia pagã.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          NUNES, C. P.&nbsp;<b>Relações de Trabalho na Doutrina de Tomás de Aquino</b>: refrações Contemporâneas. Curitiba: Juruá, 2022, p. 174.
        </Text>
        <Text>
          No contexto da filosofia medieval ocidental, os textos defendem o papel da Escolástica na formalização do ensino enquanto
        </Text>
      </>
    ),
    alternativas: {
      A: "subordinação da razão à autoridade eclesial.",
      B: "adoção do empirismo como fundamento da fé.",
      C: "método racional de conciliação entre fé e razão.",
      D: "defesa da tradição clássica contra a influência cristã.",
      E: "afastamento da ciência racionalista em favor da teológica.",
    },
  },
  {
    texto: (
      <>
        <Text>
          A Arábia Saudita e outros países árabes condenaram ontem os comentários do primeiro-ministro de Israel, que pareciam sugerir em uma entrevista que um estado palestino poderia ser estabelecido no território saudita. As observações de Benjamin Netanyahu, que algumas mídias israelenses caracterizaram como uma piada, vieram com a região já no limite depois que o presidente dos EUA, Donald Trump, propôs assumir o território e deslocar os Gazans no exterior.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          Disponível em: https://www.regionalpaulista.com.br. Acesso em 13 abr. 2025.
        </Text>
        <Text>
          Considerando o texto, o território, além de existir como forma concreta, apresenta uma dimensão
        </Text>
      </>
    ),
    alternativas: {
      A: "cultural, já que se relaciona à identidade dos grupos étnicos locais.",
      B: "política, por envolver disputas pela soberania e pelo reconhecimento.",
      C: "social, porque se baseia na interação entre a população e o meio.",
      D: "econômica, pois define áreas de exploração de recursos estratégicos.",
      E: "diplomática, uma vez que delimita regiões de preservação ecológica.",
    },
  },
  {
    texto: (
      <>
        <Text>
          <b>TEXTO I</b><br /><br />
          Passando pela data simbólica dos 500 anos, que evidencia uma série de questionamentos sobre quem é o indígena e como ele é visto pela sociedade, atravessamos demandas concretas que estão presentes no cenário atual: entre elas, a busca por saúde, educação e demarcação de terras. Participam ativamente desses processos as instâncias do Governo, as organizações indígenas, organizações não governamentais e o cenário internacional. E deixam vislumbrar recortes de uma história muito mais ampla e complexa.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          Disponível em: https://fundacaofhc.org.br/exposicoesvirtuais/indigenas/. Acesso em: 04 fev. 2025.
        </Text>
        <Text>
          <b>TEXTO II</b><br /><br />
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src={ImagemQ67}
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "400px",
                display: "block",
              }}
            />
          </span>
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          Disponível em: https://www.flickr.com/photos/agenciasenado/53678674691. Acesso em 13 abr. 2025.
        </Text>
        <Text>
          A partir da leitura dos textos, infere-se que o preconceito acerca das formas de interação indígena com o mundo contemporâneo reflete o(a)
        </Text>
      </>
    ),
    alternativas: {
      A: "visão etnocêntrica que nega a adaptação cultural dos povos indígenas.",
      B: "imposição cultural de valores externos que silencia práticas indígenas.",
      C: "universalidade das culturas que elimina distinções entre os grupos sociais.",
      D: "resistência indígena à modernidade em defesa de suas tradições originárias.",
      E: "impacto das tecnologias na completa descaracterização da cultura indígena.",
    },
  },
  {
    texto: (
      <>
        <Text>
          A moralidade não deve depender de interesses pessoais, sentimentos ou resultados esperados, pois esses são variáveis e subjetivos. O que torna uma ação moralmente válida é a vontade de agir por dever, guiando-se por princípios que possam ser aceitos por todos os seres racionais. Assim, antes de agir, o indivíduo deve perguntar a si mesmo se a máxima de sua ação poderia ser transformada em uma lei universal. Essa forma de pensar estabelece uma ética fundamentada na razão e na universalidade, e não nas consequências.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          KANT, I.&nbsp;<b>Fundamentação da metafísica dos costumes</b>. Trad. Paulo Quintela. Lisboa: Edições 70, 2003 (adaptado).
        </Text>
        <Text>
          A orientação moral apresentada no texto fundamenta-se na noção de
        </Text>
      </>
    ),
    alternativas: {
      A: "dever religioso.",
      B: "relativismo cultural.",
      C: "imperativo categórico.",
      D: "contratualismo político.",
      E: "ética consequencialista.",
    },
  },
  {
    texto: (
      <>
        <Text>
          Maquiavel, depois de observar inúmeras experiências emergentes na Europa (na condição de representante diplomático de Florença), asseverou a necessidade da existência de um “Príncipe” com “Virtú”, com ampla capacidade do exercício da razão (racionalidade), para o estabelecimento de objetivos comuns. Um Príncipe que considerasse a Política como prática humana concreta, realista, focado no desenvolvimento de cálculo para ação política militar que, combinado à astúcia e à força, no momento correto, agraciado pela “Fortuna”, fosse capaz de desencadear uma ação rápida, fulminante e pelo uso da força, contra os adversários estrangeiros, para estabelecer um Estado moderno, laico, livre de especulações filosóficas, apartado das ideias tradicionais de virtude e moralidade. Um Estado moderno baseado nos preceitos realistas da Política.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          OLIVEIRA, M. F.; GERALDELLO, C. S. Maquiavel, os Realistas e a Política Internacional.&nbsp;<b>Brazilian Journal of International Relations</b>, Marília, SP, v. 2, n. 1, p. 163, 2013.
        </Text>
        <Text>
          O texto aborda a inovação do pensamento político de Maquiavel a partir da noção do realismo político, que expressa a
        </Text>
      </>
    ),
    alternativas: {
      A: "necessidade de um governo ideal baseado na justiça.",
      B: "primazia da ética cristã como fundamento do governo.",
      C: "separação entre moral e política na condução do Estado.",
      D: "inviabilidade de ação política sem valores morais sólidos.",
      E: "submissão da autoridade política às tradições clássicas.",
    },
  },
  {
    texto: (
      <>
        <Text>
          Após os Ataques de 11 de setembro de 2001, os Estados Unidos iniciaram uma campanha militar de guerra ao terrorismo. Nesse contexto, os conceitos de “choque de civilizações”, cunhado pelo cientista político Samuel Huntington, e o de “cruzadas” se tornaram muito frequentes nos debates políticos e na imprensa. Essas ideias foram apropriadas para definir a natureza dos conflitos entre as nações e o terrorismo.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          RODRIGUES, E. C. As Cruzadas e as apropriações contemporâneas da Idade Média (2001 - 2020).&nbsp;<b>Epígrafe</b>, v. 10, n. 2, p. 296–329, 13 jul. 2021.
        </Text>
        <Text>
          A noção de “Cruzadas” promovida pelo governo norte-americano ressalta um elemento desse período, o(a)
        </Text>
      </>
    ),
    alternativas: {
      A: "caráter religioso e ideológico como justificativa para a guerra.",
      B: "domínio pleno das forças cristãs sobre as tropas islâmicas.",
      C: "objetivo exclusivamente econômico na conquista de territórios.",
      D: "consenso político europeu sobre a legitimidade das expedições.",
      E: "aliança permanente entre os reinos cristãos para defesa da fé.",
    },
  },
  {
    texto: (
      <>
        <Text>
          A incapacidade do aparato estatal de se financiar e garantir a defesa das áreas sob seu domínio, o que levou, em termos mais gerais, à perda de territórios, mas, em termos locais, ao desaparecimento de estruturas políticas e de governo imperiais. Como resultado, as autoridades eclesiásticas vieram a ocupar um papel de liderança cada vez mais marcado, desempenhando funções anteriormente associadas aos conselhos municipais e ao governo.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          MACHADO, C. A. R. A antiguidade tardia, a queda do Império romano e o debate sobre o “fim do mundo antigo”.&nbsp;<b>Revista de História</b>, n. 173, p. 81, 17 dez. 2015, p.107-8.

        </Text>
        <Text>
          Tratando da queda do Império Romano, percebe-se que a argumentação do autor associa esse evento à
        </Text>
      </>
    ),
    alternativas: {
      A: "unificação da Igreja e do Estado.",
      B: "invasão dos normandos e do islã.",
      C: "crise fiscal e descentralização política.",
      D: "industrialização e crescimento comercial.",
      E: "expansão territorial e fortalecimento militar.",
    },
  },
  {
    texto: (
      <>
        <Text>
          Por conseguinte, a arte de imitar está bem longe da verdade, se executa tudo, ao que parece, é pelo facto de atingir apenas uma pequena porção de cada coisa. Por isso, não passa de uma aparição. Por exemplo, dizemos que o pintor nos pintará um sapateiro, um carpinteiro e os demais artífices sem nada conhecer dos respectivos ofícios. Mas nem por isso deixará de ludibriar as crianças e os homens ignorantes, se for bom pintor, desenhando um carpinteiro e mostrando-o de longe com a semelhança, que lhe imprimiu, de um autêntico carpinteiro.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          PLATÃO.&nbsp;<b>A República</b>. 9 ed. Lisboa: Fundação Calouste Gulbenkian, s/d. p. 454.

        </Text>
        <Text>
          Para Platão, a noção de verdade em relação às representações artísticas se mostra alinhada à
        </Text>
      </>
    ),
    alternativas: {
      A: "defesa da fruição para alcançar o mundo das ideias.",
      B: "valorização da experiência sensível para alcance do real.",
      C: "aceitação como instrumento deturpado do acesso à realidade.",
      D: "crítica como forma impossível de conhecimento verdadeiro.",
      E: "identificação da essência concreta dos objetos representados.",
    },
  },
  {
    texto: (
      <>
        <Text>
          <b>O que é o <i>Big One</i>, terremoto devastador que pode atingir a Califórnia a qualquer momento</b><br />
          Um forte terremoto de magnitude 7,0 atingiu na quinta-feira (5/12) a costa norte da Califórnia, de acordo com o Serviço Geológico dos EUA. [...] O episódio lembra aos moradores do Estado americano que, em algum momento do futuro, o temido tremor conhecido como <i>Big One</i> (O Grande) chegará. Trata-se do esperado megaterremoto potencialmente devastador que, em algum momento, pode atingir o oeste americano a partir de uma gigantesca e famosa rachadura chamada falha de San Andreas.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          Disponível em: https://www.bbc.com/portuguese/articles/cj30m4pz3l8o. Acesso em 13 abr. 2025.
        </Text>
        <Text>
          A origem da falha mencionada na notícia está ligada à(ao)
        </Text>
      </>
    ),
    alternativas: {
      A: "colisão entre as placas tectônicas oceânicas.",
      B: "movimento convergente de cadeias montanhosas.",
      C: "subducção entre estruturas rochosas subterrâneas.",
      D: "deslizamento lateral de placas tectônicas adjacentes.",
      E: "emergência de uma dorsal oceânica ao nível do solo.",
    },
  },
  {
    texto: (
      <>
        <Text>
          <b>TEXTO I</b><br /><br />
          Tomando o final do século XVIII como ponto de partida aproximado, o Orientalismo pode ser discutido e analisado como a instituição autorizada a lidar com o Oriente — fazendo e corroborando afirmações a seu respeito, descrevendo-o, ensinando-o, colonizando-o, governando-o: em suma, o Orientalismo como um estilo ocidental para dominar, reestruturar e ter autoridade sobre o Oriente.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          SAID, E.&nbsp;<b>Orientalismo</b>: o Oriente como invenção do Ocidente. Trad. Rosaura Eichenberg. São Paulo: Companhia das Letras, 2007, p. 29.
        </Text>
        <Text>
          <b>TEXTO II</b><br /><br />
          — As culturas indígenas brasileiras ainda são olhadas pelos brancos como exóticas?<br />
          — Krenak — Não tenho dúvidas. A invenção do oriente coincide com a invenção dos índios. Os chamados povos indígenas são uma invenção do ocidente, produto do ciclo de colonização. Assim como um certo oriente vive na cabeça das pessoas, existe também certo mundo selvagem, dos povos indígenas. Encaixar-se nessa perspectiva é, de certa maneira, engajar-se numa perspectiva colonialista do mundo.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          Disponível em: https://www.correiodopovo.com.br/blogs/juremirmachado/entrevista-com-ailton-krenak-1.524763. Acesso em: 06 fev. 2025.
        </Text>
        <Text>
          A análise dos textos destaca como os efeitos do Orientalismo engendram a
        </Text>
      </>
    ),
    alternativas: {
      A: "homogeneização dos discursos culturais em escala global.",
      B: "valorização da diversidade cultural e do respeito às diferenças.",
      C: "neutralidade científica na representação de culturas não ocidentais.",
      D: "construção de imagens estereotipadas que sustentam relações de poder.",
      E: "superação do etnocentrismo por meio do conhecimento acadêmico.",
    },
  },
  {
    texto: (
      <>
        <Text>
          <b>Quando o imperador Calígula nomeou seu cavalo cônsul</b><br />
          Até as crianças conhecem a curiosa e emblemática história do amor que o Imperador Calígula nutria por seu cavalo preferido, chamado Incitatus (Impetuoso). Chegou a se apaixonar a tal ponto por ele que até o nomeou Cônsul da Bitínia. Seu cavalo era de corrida e na noite anterior a sua competição exigia um silêncio absoluto da cidade de Roma para que não incomodassem o sono do animal, com quem o imperador dormia. O castigo a quem ousasse interromper o silêncio era a pena de morte. O cavalo era na realidade o verdadeiro imperador com poderes absolutos. Verdade ou não, é interessante conhecer a História Antiga que foi forjando a Moderna através dos séculos para ver o que Humanidade conquistou em matéria de liberdade e como as possíveis loucuras de nossos governantes são brincadeira ao lado das loucuras dos imperadores e reis despóticos e absolutistas do passado.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          Disponível em: https://brasil.elpais.com/brasil. Acesso em 13 abr. 2025.
        </Text>
        <Text>
          O texto retrata um aspecto político do Império Romano, associado à(ao)
        </Text>
      </>
    ),
    alternativas: {
      A: "concentração de poder na figura imperial.",
      B: "fortalecimento da democracia republicana.",
      C: "imposição de uma monarquia constitucional.",
      D: "ampliação da participação política senatorial.",
      E: "descentralização do governo e das províncias.",
    },
  },
  {
    texto: (
      <>
        <Text>
          <b>TEXTO I</b><br /><br />
          Mas imediatamente notei que, enquanto assim queria pensar que tudo era falso, era necessário que eu, que o pensava, fosse alguma coisa. E notando que esta verdade — penso, logo existo — era tão firme e segura que todas as mais extravagantes suposições dos céticos não seriam capazes de abalá-la, julguei que podia aceitá-la sem escrúpulo como o primeiro princípio da filosofia que eu buscava.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          DESCARTES, R.&nbsp;<b>Discurso do Método</b>. São Paulo: Martins Fontes, 2001, p. 75.
        </Text>
        <Text>
          <b>TEXTO II</b><br /><br />
          O cético, ao duvidar de tudo, faz uma escolha. Ele assume que sua dúvida é real, o que, ironicamente, já é um ponto de partida para o conhecimento. Talvez ele nunca alcance a certeza absoluta, mas a própria dúvida já o compromete com um princípio: o de que há algo a ser investigado.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          POPKIN, R.&nbsp;<b>History of Scepticism from Erasmus to Spinoza</b>. Los Angeles: University of California Press, 1979 (adaptado).
        </Text>
        <Text>
          A partir dos textos, a concepção cartesiana de conhecimento se distingue da posição cética porque
        </Text>
      </>
    ),
    alternativas: {
      A: "recusa a necessidade de um princípio inabalável para construir o saber filosófico.",
      B: "assume que o conhecimento verdadeiro é impossível, como defendem os céticos.",
      C: "fundamenta-se na experiência sensorial como fonte de conhecimento verdadeiro.",
      D: "supera o ceticismo ao estabelecer um primeiro princípio indubitável da razão.",
      E: "defende que o conhecimento depende da fé e da revelação divina para ser legítimo.",
    },
  },
  {
    texto: (
      <>
        <Text>
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src={ImagemQ77}
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "500px",
                display: "block",
              }}
            />
          </span>
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          BECK, A.&nbsp;<b>Tumblr</b>. Disponível em: https://tirasarmandinho.tumblr.com/. Acesso em 23 mar. 2025.
        </Text>
        <Text>
          Ao satirizar uma contradição presente na sociedade contemporânea, a charge expõe um paradoxo entre
        </Text>
      </>
    ),
    alternativas: {
      A: "valorização da paz e apologia à indústria bélica.",
      B: "igualdade de gênero e situação de revolta individual.",
      C: "construção da democracia e permanência em inação social.",
      D: "busca pelo bem-estar coletivo e condenação da violência.",
      E: "participação em ações decisórias e equidade socioeconômica.",
    },
  },
  {
    texto: (
      <>
        <Text>
          &nbsp;&nbsp;&nbsp;&nbsp;Agora, ao Chico Bento, como único recurso, só restava arribar. Sem legume, sem serviço, sem meio de nenhuma espécie, não havia de ficar morrendo de fome, enquanto a seca durasse. Depois, o mundo é grande e no Amazonas sempre há borracha… Alta noite, na camarinha fechada que uma lamparina moribunda alumiava mal, combinou com a mulher o plano de partida. Ela ouvia chorando, enxugando na varanda encarnada da rede, os olhos cegos de lágrimas. Chico Bento, na confiança do seu sonho, procurou animá-la, contando-lhe os mil casos de retirantes enriquecidos no Norte.<br />
          &nbsp;&nbsp;&nbsp;&nbsp;[...]<br />
          &nbsp;&nbsp;&nbsp;&nbsp;Cordulina ouvia, e abria o coração àquela esperança; mas correndo os olhos pelas paredes de taipa, pelo canto onde na redinha remendada o filho pequenino dormia, novamente sentiu um aperto de saudade, e lastimou-se:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;— Mas, Chico, eu tenho tanta pena da minha barraquinha! Onde é que a gente vai viver, por esse mundão de meu Deus?<br />
          &nbsp;&nbsp;&nbsp;&nbsp;A voz dolente do vaqueiro novamente se ergueu em consolações e promessas:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;— Em todo pé de pau há um galho mode a gente armar a tipoia... E com umas noites assim limpas até dá vontade de se dormir no tempo... Se chovesse, quer de noite, quer de dia, tinha carecido se ganhar o mundo atrás de um gancho?<br />
          &nbsp;&nbsp;&nbsp;&nbsp;Cordulina baixava a cabeça. Chico Bento continuou a falar.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          QUEIROZ, R.&nbsp;<b>O Quinze</b>. 58. ed. São Paulo: Siciliano, 1993.
        </Text>
        <Text>
          Em meio ao tema da seca, o trecho retirado da obra de Rachel de Queiroz encapsula o drama do retirante nordestino, construindo um tipo de interação dos personagens com o seu lar. No texto, Chico Bento tenta convencer Cordulina, enquanto ela demonstra resistência à ideia de partir, o que evidencia um processo de
        </Text>
      </>
    ),
    alternativas: {
      A: "mobilidade espontânea.",
      B: "pertencimento ao espaço.",
      C: "desapropriação identitária.",
      D: "autossegregação espacial.",
      E: "ruptura das raízes culturais.",
    },
  },
  {
    texto: (
      <>
        <Text>
          No campo, durante a Alta Idade Média, a propriedade rural, mesmo que comportasse certa especialização técnica artesanal, concentrava todas as funções da produção. Uma etapa intermediária encontra-se talvez nos países eslavos – notadamente na Polônia e na Boêmia – onde se vê entre os servos certa especialização, mas é nos séculos 10º a 13º que os grandes proprietários distribuírem em suas aldeias particulares diversos especialistas: palafreneiros, ferreiros, ceramistas, carpinteiros. [...] Com as cidades esta especialização foi levada ao extremo. O artesão deixou de ser antes um camponês, e o “burguês” de ser antes um proprietário.
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          LE GOFF, J.; RUAS, M.&nbsp;<b>A civilização do ocidente medieval</b>. Lisboa: Estampa, 1995, p. 68.
        </Text>
        <Text>
          De acordo com o texto, infere-se que o chamado “Renascimento Urbano” teve como consequência o(a)
        </Text>
      </>
    ),
    alternativas: {
      A: "estagnação do comércio marítimo.",
      B: "expansão do feudalismo na Europa.",
      C: "declínio das atividades manufatureiras.",
      D: "crescimento das corporações de ofício.",
      E: "concentração de trabalhadores no campo.",
    },
  },
  {
    texto: (
      <>
        <Text>
          O Homem é a única criatura que consome sem produzir. Não dá leite, não põe ovos, é fraco demais para puxar o arado, não corre o que dê para pegar uma lebre. Mesmo assim, é o senhor de todos os animais. Põe-nos a mourejar, dá-nos de volta o mínimo para evitar a inanição e fica com o restante. Nosso trabalho amanha o solo, nosso estrume o fertiliza, e, no entanto, nenhum de nós possui mais que a própria pele. As vacas, que aqui vejo à minha frente, quantos litros de leite terão produzido neste ano? E que aconteceu a esse leite, que poderia estar alimentando robustos bezerrinhos? Desceu pela garganta dos nossos inimigos. E as galinhas, quantos ovos puseram neste ano, e quantos se transformaram em pintinhos? Os restantes foram para o mercado, fazer dinheiro para Jones e seus homens. E você, Quitéria, diga-me onde estão os quatro potrinhos que deveriam ser o apoio e o prazer da sua velhice. Foram vendidos com a idade de um ano — nunca mais você os verá. Como paga por seus quatro partos e por todo o seu trabalho no campo, que recebeu você, além de ração e baia?
        </Text>
        <Text
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "10px",
          }}
        >
          ORWELL, G.&nbsp;<b>A Revolução dos Bichos</b>. Tradução de Heitor Aquino Ferreira. 1. ed. São Paulo: Companhia das Letras, 2016.
        </Text>
        <Text>
          O discurso construído por Major no trecho de <i>A Revolução dos Bichos</i>, de George Orwell, melhor se associa a qual faceta da sociedade hodierna?
        </Text>
      </>
    ),
    alternativas: {
      A: "Exclusão social.",
      B: "Luta de classes.",
      C: "Hegemonia cultural.",
      D: "Flexibilização de leis.",
      E: "Dominação ideológica.",
    },
  },
];












const BolinhaLetra = ({ letra, selecionada, onSelect }) => (
  <label
    style={{
      width: "22px",
      height: "22px",
      minWidth: "22px",
      minHeight: "22px",
      maxWidth: "22px",
      maxHeight: "22px",
      borderRadius: "50%", // 50% é o ideal para um círculo perfeito
      border: selecionada ? "1px solid orange" : "1px solid #000",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
      cursor: "pointer",
      backgroundColor: selecionada ? "orange" : "black",
      color: "#fff",
      fontSize: "14px",
      transition: "0.3s",
      userSelect: "none",
      boxSizing: "border-box", // Garante que padding/border não aumentem o tamanho
      overflow: "hidden", // Impede que conteúdo extra transborde
    }}
    onClick={onSelect}
  >
    {letra}
  </label>
);






export default function Embt2025({ idUsuario, nomeUsuario, respostas1dia }) {
  const [fazendoProva, setFazendoProva] = useState(false);
  const final = new Date("2025-04-27T18:30:01");

  const [riscar, setRiscar] = useState({});
  const [answers, setAnswers] = useState(respostas1dia);

  const toggleRiscar = (questao, alternativa) => {
    setRiscar((prev) => ({
      ...prev,
      [`${questao}-${alternativa}`]: !prev[`${questao}-${alternativa}`],
    }));
  };

  const calcularTempoRestante = () => {
    const agora = new Date();

    // HORÁRIO DINÂMICO --> const final = new Date(Date.now() + 60 * 60 * 1000);
    const diff = Math.floor((final.getTime() - agora.getTime()) / 1000);
    return diff > 0 ? diff : 0;
  };

  const [tempoRestante, setTempoRestante] = useState(calcularTempoRestante());

  const formatarTempo = (segundos) => {
    const h = String(Math.floor(segundos / 3600)).padStart(2, "0");
    const m = String(Math.floor((segundos % 3600) / 60)).padStart(2, "0");
    const s = String(segundos % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  useEffect(() => {
    if (Date.now() <= final) setFazendoProva(true);

    const timer = setInterval(() => {
      setTempoRestante((prev) => {
        const novoTempo = prev - 1;
        if (novoTempo <= 0) {
          clearInterval(timer);

          if (fazendoProva) {
            setFazendoProva(false);

            Modal.warning({
              title: "⏰ Tempo esgotado!",
              content: "A prova foi finalizada e suas respostas tiveram que ser enviadas automaticamente.",
              okText: "Ok",
            });
          }

          return 0;
        }
        return novoTempo;
      });
    }, 1000);

    salvarRespostas();

    return () => clearInterval(timer);
  }, [fazendoProva, answers]);




  const salvarRespostas = () => {
    if (!idUsuario) {
      console.error("idUsuario não definido.");
      return;
    }

    const respostasUsuario = Object.entries(answers)
      .sort(([a], [b]) => parseInt(a) - parseInt(b))
      .map(([_, resp]) => resp || "X")
      .join("");

    const dados = {
      respostas1dia: respostasUsuario,
    };

    console.log("Respostas (string):", respostasUsuario);

    fetch(`/api/salvar_respostas/${idUsuario}`, {
      method: "PUT",
      body: JSON.stringify(dados),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        message.success("Respostas salvas com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao salvar respostas:", error);
        message.error("Erro ao salvar respostas.");
      });
  };


  return (
    <>
      {fazendoProva ? (
        <Space direction="vertical" size="middle" style={{ display: "flex" }}>

          <div className={styles.Cronometro}>
            <Text strong style={{ color: tempoRestante < 3600 ? "red" : "white" }}>
              ⏰ {formatarTempo(tempoRestante)}
            </Text>
          </div>


          <div style={{ width: "100%", display: "flex", marginBottom: "20px" }}>
            <b>NOME DO PARTICIPANTE:&nbsp;</b>{nomeUsuario.toUpperCase()}
          </div>

          <div style={{
            border: "2px solid orange", fontWeight: "bold", width: "100%", padding: "15px", display: "flex", alignItems: "center",
            justifyContent: "center", verticalAlign: "middle"
          }}>
            {fraseMotivadora}
          </div>



          <Text>
            <b>LEIA ATENTAMENTE AS INSTRUÇÕES SEGUINTES:</b><br />
            1. Esta prova contém 80 questões numeradas de 01 a 80 e a Proposta de Redação, dispostas da seguinte maneira:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;a. questões de número 01 a 40, relativas à área de Linguagens, Códigos e suas Tecnologias;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;b. Proposta de Redação;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;c. questões de número 41 a 80, relativas à área de Ciências Humanas e suas Tecnologias. <br />
            2. Para cada uma das questões objetivas, são apresentadas 5 opções. Apenas uma responde corretamente à questão.<br />
            3. Os rascunhos e as marcações assinaladas no CADERNO DE QUESTÕES não serão considerados na avaliação.<br />
            4. Somente serão corrigidas as redações transcritas na FOLHA DE REDAÇÃO.<br />
            5. Preencha o seu gabarito a seguir à caneta, assinalando apenas uma alternativa para cada questão. Questões com nenhuma ou mais de uma alternativa assinalada serão consideradas incorretas.<br />
            6. O tempo recomendado para simular esta aplicação é de <b>cinco horas</b>. Você poderá simular a prova ou realizá-la a longo prazo, desde que a envie antes das 17h30 do dia 26/04/2025. Fique atento ao cronômetro no canto inferior direito da sua tela. <b>Quando ele zerar, não será mais possível continuar a fazer a prova!</b><br />
            7. Mesmo que você imprima a prova e a obtenha fisicamente, as respostas devem ser enviadas, OBRIGATORIAMENTE, nesse formulário.<br />
            8. Dica.: Na modalidade ON-LINE, ao clicar no texto de uma alternativa, você irá "riscá-la", para que, visualmente, seja uma alternativa que você descartou. Para reverter a ação, basta clicar no texto da alternativa novamente.<br />
            9. Caso tenha alguma dúvida, sinta-se livre para enviá-la no grupo do BDT ou no contato da comissão elaboradora.<br />
            <i>Boa prova!</i>
          </Text>


          <Button style={{
            backgroundColor: "orange", color: "white", fontWeight: "bold", border: "1px solid orange"
          }}
            onClick={() => window.open("https://drive.google.com/file/d/1xFvnMluCt-wiW_WCF881gtmbN538-LmA/view?usp=sharing", "_blank")}
          >
            <FilePdfOutlined /> Acessar prova em PDF
          </Button>




          

          <Card title="📝 Preenchimento rápido do Gabarito" style={{ border: "2px solid orange", marginTop: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <Button
                danger
                onClick={() => {
                  const confirmar = window.confirm('Tem certeza que deseja limpar o gabarito? Essa ação apagará TODAS as respostas preenchidas. Clique em "OK" para apagar.');
                  if (confirmar) {
                    const reset = Array(80).fill("");
                    setAnswers(reset);
                  }
                }}
              >
                Limpar Gabarito
              </Button>

              <Button type="primary" onClick={() => {
                const input = prompt("Cole seu gabarito (ex: ABCDXABCDE...):");
                if (!input) return;
                const letras = input.toUpperCase().replace(/[^ABCDEX]/g, "").split("");
                const preenchido = Array(80).fill("");
                letras.forEach((l, i) => {
                  if (i < 80) preenchido[i] = l;
                });
                setAnswers(preenchido);
              }}>
                Colar Gabarito
              </Button>
            </div>

            <Title level={5}>Linguagens, Códigos e suas Tecnologias (Questões de 01 a 40)</Title>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "25px" }}>
              {[...Array(40)].map((_, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ fontSize: "12px" }}>{String(i + 1).padStart(2, "0")}</span>
                  <Input
                    maxLength={1}
                    style={{
                      width: 40,
                      textAlign: "center",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                    value={answers[i] || ""}
                    onChange={(e) => {
                      const letra = e.target.value.toUpperCase();
                      if (!"ABCDEX".includes(letra) && letra !== "") return;
                      const newAnswers = [...answers];
                      newAnswers[i] = letra;
                      setAnswers(newAnswers);
                    }}
                  />
                </div>
              ))}
            </div>

            <Title level={5}>Ciências Humanas e suas Tecnologias (Questões de 41 a 80)</Title>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {[...Array(40)].map((_, i) => (
                <div key={i + 40} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ fontSize: "12px" }}>{String(i + 41).padStart(2, "0")}</span>
                  <Input
                    maxLength={1}
                    style={{
                      width: 40,
                      textAlign: "center",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                    value={answers[i + 40] || ""}
                    onChange={(e) => {
                      const letra = e.target.value.toUpperCase();
                      if (!"ABCDEX".includes(letra) && letra !== "") return;
                      const newAnswers = [...answers];
                      newAnswers[i + 40] = letra;
                      setAnswers(newAnswers);
                    }}
                  />
                </div>
              ))}
            </div>
          </Card>













          <Title level={3} style={{ marginTop: "40px" }}>
            LINGUAGENS, CÓDIGOS E SUAS TECNOLOGIAS
            <Title level={5}>Questões de 01 a 40</Title>
          </Title>

          {questoesLinguagens.map((questao, index) => (
            <Card
              key={`ling-${index}`}
              title={
                <div style={{ ...TituloCard, width: "100%", display: "block" }}>
                  QUESTÃO {String(index + 1).padStart(2, "0")} &nbsp; {(index + 1) <= 9 ? <Tag>INGLÊS</Tag> : ""}
                </div>
              }
              size="default"
              styles={{
                header: {
                  padding: 0,
                },
              }}
            >
              {questao.texto}

              <Radio.Group
                value={answers[index]}
                className={styles.Alternativas}
                style={{ marginTop: "20px" }}
              >
                {Object.entries(questao.alternativas).map(([letra, texto]) => (
                  <div
                    key={letra}
                    className={styles.Alternativa}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "8px",
                    }}
                  >
                    <BolinhaLetra
                      letra={letra}
                      selecionada={answers[index] === letra}
                      onSelect={() => {
                        const newAnswers = [...answers];
                        newAnswers[index] = letra;
                        setAnswers(newAnswers);
                        console.log(newAnswers);
                      }}
                    />
                    <Text
                      style={{
                        textDecoration: riscar[`${index + 1}-${letra}`]
                          ? "line-through"
                          : "none",
                        cursor: "pointer",
                      }}
                      onClick={() => toggleRiscar(index + 1, letra)}
                    >
                      {texto}
                    </Text>
                  </div>
                ))}
              </Radio.Group>
            </Card>
          ))}


          <Title level={3} style={{ marginTop: "40px" }}>
            PROPOSTA DE REDAÇÃO
            <Title level={5}>A partir da leitura dos textos motivadores e com base nos conhecimentos construídos ao longo de sua formação, redija um texto dissertativo-argumentativo em modalidade escrita formal da língua portuguesa sobre o tema “Desafios para o enfrentamento da intolerância contra pessoas trans na busca por uma sociedade mais justa e inclusiva”, apresentando proposta de intervenção que respeite os direitos humanos. Selecione, organize e relacione, de forma coerente e coesa, argumentos e fatos para a defesa de seu ponto de vista.</Title>
          </Title>
          <Card title="INSTRUÇÕES PARA A REDAÇÃO">
            <Text>
              1. A Redação deverá ser escrita na folha oficial da prova, em uma folha de caderno escolar ou em uma folha de papel A4 com 30 linhas horizontais.<br />
              2. O rascunho da redação deve ser feito no espaço apropriado.<br />
              3. O texto definitivo deve ser escrito à tinta preta, na folha própria, em até 30 (trinta) linhas.<br />
              4. A redação que apresentar cópia dos textos da Proposta de Redação ou do Caderno de Questões terá o número de linhas copiadas desconsiderado para a contagem de linhas.<br />
              <b>5. Receberá nota zero, em qualquer das situações expressas a seguir, a redação que:</b><br />
              &nbsp;&nbsp;&nbsp;&nbsp;5.1. tiver até 7 (sete) linhas escritas, sendo considerada “texto insuficiente”;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;5.2. fugir ao tema ou não atender ao tipo dissertativo-argumentativo;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;5.3. apresentar parte do texto deliberadamente desconectada do tema proposto;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;5.4. apresentar nome, assinatura, rubrica ou outras formas de identificação no espaço destinado ao texto.<br />
              <b>6. A Redação deverá ser enviada para o contato da comissão organizadora. Serão desprezíveis as Redações enviadas após o prazo estipulado.</b><br />
            </Text>
            <br></br>
            <Button style={{
              backgroundColor: "orange", color: "white", fontWeight: "bold", border: "1px solid orange"
            }}
              onClick={() => window.open("https://drive.google.com/file/d/1FBFufpORvXJ9FLPV8CPz2sU--_C3Vzy1/view?usp=sharing", "_blank")}
            >
              <FilePdfOutlined /> Textos motivadores
          </Button>
          </Card>
          

          <Title level={3} style={{ marginTop: "40px" }}>
            CIÊNCIAS HUMANAS E SUAS TECNOLOGIAS
            <Title level={5}>Questões de 41 a 80</Title>
          </Title>

          {questoesHumanas.map((questao, index) => (
            <Card
              key={`hum-${index + 40}`}
              title={
                <div style={{ ...TituloCard, width: "100%", display: "block" }}>
                  QUESTÃO {String(index + 41).padStart(2, "0")} &nbsp;
                </div>
              }
              size="default"
              styles={{
                header: {
                  padding: 0,
                },
              }}
            >
              {questao.texto}

              <Radio.Group
                value={answers[index + 40]}
                className={styles.Alternativas}
                style={{ marginTop: "20px" }}
              >
                {Object.entries(questao.alternativas).map(([letra, texto]) => (
                  <div
                    key={letra}
                    className={styles.Alternativa}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "8px",
                    }}
                  >
                    <BolinhaLetra
                      letra={letra}
                      selecionada={answers[index + 40] === letra}
                      onSelect={() => {
                        const newAnswers = [...answers];
                        newAnswers[index + 40] = letra;
                        setAnswers(newAnswers);
                        console.log(newAnswers);
                      }}
                    />
                    <Text
                      style={{
                        textDecoration: riscar[`${index + 41}-${letra}`]
                          ? "line-through"
                          : "none",
                        cursor: "pointer",
                      }}
                      onClick={() => toggleRiscar(index + 41, letra)}
                    >
                      {texto}
                    </Text>
                  </div>
                ))}
              </Radio.Group>
            </Card>
          ))}


          <Title level={4} style={{ marginTop: "40px" }}>
            PARABÉNS! VOCÊ FINALIZOU A PROVA! (monstrão vc) 💪<br/>
            Suas respostas foram enviadas automaticamente.
          </Title>
        </Space>
      ) : (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Title level={3}>⏳ Tempo encerrado!</Title>
          <Text>A aplicação da prova terminou. Se você não terminou de respondê-la a tempo, suas respostas foram enviadas automaticamente.</Text>
        </div>
      )
      }
    </>
  );
}