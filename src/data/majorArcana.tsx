export type TarotCard = {
  id: number;
  number: string;
  key: string;
  nameKo: string;
  nameEn: string;
  image: string;
  element?: string;
  planet?: string;
  yesNo: "yes" | "no" | "maybe";
  keywordsUpright: string[];
  keywordsReversed: string[];
  descUpright: string;
  descReversed: string;
  fortuneUpright: string;
  fortuneReversed: string;
};

export const majorArcana: TarotCard[] = [
  {
    id: 0,
    number: "0",
    key: "the-fool",
    nameKo: "바보",
    nameEn: "The Fool",
    image: "/assets/cards/major/00.png",
    element: "Air",
    yesNo: "maybe",
    keywordsUpright: ["새출발", "순수", "자유", "모험"],
    keywordsReversed: ["경솔", "방향 상실", "무계획"],
    descUpright:
      "새로운 여정의 시작, 열린 가능성. 직감에 따라 움직여도 좋은 때.",
    descReversed: "충동적 선택 경계. 기초가 부족하면 발목 잡힐 수 있음.",
    fortuneUpright:
      "오늘은 새로운 여정과 가능성이 열리는 하루로, 아직 모든 것이 완벽하지 않더라도 열린 마음으로 첫발을 내딛는 것이 중요합니다. 당신의 순수한 열정과 자유로운 태도가 좋은 인연과 기회를 끌어들이며, 예상치 못한 즐거움과 성장을 가져다줄 수 있습니다. 과거의 틀을 벗어나 직관과 본능을 따라 움직일 때이니 작은 모험이라도 주저하지 말고 시도해 보세요. 주변의 시선이 다소 걱정스럽더라도, 오늘의 경험은 분명 배움과 확신을 남길 것입니다.",
    fortuneReversed:
      "오늘은 충동적이거나 무계획한 선택이 문제를 일으킬 수 있는 하루이니, 서두르지 말고 신중하게 움직여야 합니다. 준비되지 않은 상태에서 행동하면 방향을 잃거나 발목을 잡히는 상황이 생길 수 있으니, 우선 기초와 안전장치를 점검하는 것이 필요합니다. 특히 중요한 결정이나 금전적인 문제에서는 직감보다 현실적인 계산과 계획을 우선해 실수를 예방하세요. 작은 일부터 차근차근 정리하면 불안이 가라앉고 리듬이 회복될 것입니다.",
  },
  {
    id: 1,
    number: "I",
    key: "the-magician",
    nameKo: "마법사",
    nameEn: "The Magician",
    image: "/assets/cards/major/01.png",
    element: "Air",
    planet: "Mercury",
    yesNo: "yes",
    keywordsUpright: ["의지", "집중", "실행력", "자원활용"],
    keywordsReversed: ["속임수", "분산", "자기회의"],
    descUpright: "의지와 기술을 합쳐 원하는 결과를 만들어낼 힘.",
    descReversed: "동기 부족/산만함. 실행보다 말이 앞설 수 있음.",
    fortuneUpright:
      "의지와 집중이 빛나는 하루로, 당신이 가진 재능과 자원을 정확히 배치하면 원하는 결과에 빠르게 다가갈 수 있습니다. 말보다 실행이 앞서고, 작은 시연이라도 직접 보여주는 태도가 신뢰를 얻어 기회를 확장시킵니다. 협업에서는 당신이 조율자의 역할을 맡으면 흐름이 매끄러워지고, 혼자서도 충분히 성과를 낼 수 있을 만큼 도구와 정보가 손에 들어옵니다. 오늘의 키포인트는 ‘지금 가능한 것을 당장 시작하기’입니다.",
    fortuneReversed:
      "아이디어는 많지만 에너지가 분산되기 쉬운 하루이니, 과장된 약속이나 과신은 피하고 핵심 한 가지에만 힘을 모으세요. 자기회의가 커지면 시작조차 늦어지니, 검증 가능한 작은 실행으로 자신감을 회복하는 편이 좋습니다. 누군가의 말에 휘둘리거나 정보가 과장되어 보일 수 있으니 사실 확인과 범위 축소가 필요합니다. 오늘은 ‘덜 말하고 더 작게 실행하기’가 해답입니다.",
  },
  {
    id: 2,
    number: "II",
    key: "the-high-priestess",
    nameKo: "여사제",
    nameEn: "The High Priestess",
    image: "/assets/cards/major/02.png",
    element: "Water",
    yesNo: "maybe",
    keywordsUpright: ["직관", "비밀", "내면지혜"],
    keywordsReversed: ["억눌린 직감", "혼란", "표면적 판단"],
    descUpright: "겉보다 속을 보라. 직관이 답을 알고 있다.",
    descReversed: "잡음이 직관을 가린다. 혼자만 알지 말고 기록/정리 필요.",
    fortuneUpright:
      "겉으로 드러난 정보보다 내면의 신호가 더 정확한 하루입니다. 조급히 결론을 내리기보다 조용히 관찰하고 기록하면 자연스럽게 핵심이 떠오릅니다. 사적인 이야기나 민감한 사안은 과시하지 말고 신뢰할 수 있는 경로로만 다루세요. 혼자만의 시간에서 떠오르는 통찰이 의외의 해법을 제시할 것입니다.",
    fortuneReversed:
      "정보가 많아도 본질이 흐려지기 쉬운 하루로, 남의 의견이나 소문이 직관을 덮어 혼란을 키울 수 있습니다. 판단을 서두르지 말고 생각을 글로 정리하며, 필요하다면 제3자의 객관적인 피드백을 받으세요. 비밀에 집착하거나 모든 것을 혼자 짊어지면 소통이 막힐 수 있으니, 안전한 범위에서 투명성을 확보하는 것이 좋습니다. 정리를 통한 명확화가 답입니다.",
  },
  {
    id: 3,
    number: "III",
    key: "the-empress",
    nameKo: "여제",
    nameEn: "The Empress",
    image: "/assets/cards/major/03",
    element: "Earth",
    planet: "Venus",
    yesNo: "yes",
    keywordsUpright: ["풍요", "양육", "창조성"],
    keywordsReversed: ["과보호", "정체", "과소비"],
    descUpright: "풍성한 결실, 창조적 아이디어의 성장.",
    descReversed: "과한 집착/지출 주의. 균형 회복이 필요.",
    fortuneUpright:
      "돌봄과 풍요의 에너지가 흐르는 하루로, 당신의 배려와 감각이 사람과 작업을 부드럽게 성장시킵니다. 창조적 아이디어를 현실로 옮기기에 좋은 타이밍이며, 작은 씨앗을 정성껏 키우면 곧 눈에 보이는 결실이 이어집니다. 몸과 마음의 편안함을 챙길수록 생산성이 올라가니, 환경을 따뜻하게 가꾸는 것도 도움이 됩니다. 주는 만큼 돌아오는 순환을 믿어보세요.",
    fortuneReversed:
      "사랑과 보호가 지나쳐 상대나 일의 성장을 막을 수 있는 하루입니다. 과한 간섭이나 지출은 잠시 멈추고, 스스로 설 수 있도록 한 발 물러서 균형을 회복하세요. 창조적 막힘이 느껴진다면 휴식과 리듬 정비가 우선이며, 감정적 소비 대신 필요한 곳에만 에너지를 쓰는 것이 좋습니다. 마음의 풍요를 되찾으면 흐름도 자연스레 풀립니다.",
  },
  {
    id: 4,
    number: "IV",
    key: "the-emperor",
    nameKo: "황제",
    nameEn: "The Emperor",
    image: "/assets/cards/major/04.png",
    element: "Fire",
    yesNo: "yes",
    keywordsUpright: ["질서", "권위", "구조화"],
    keywordsReversed: ["고집", "경직", "통제집착"],
    descUpright: "규칙과 구조로 성과를 만든다. 리더십 발휘.",
    descReversed: "융통성 부족 경계. 권위보다 설득이 필요.",
    fortuneUpright:
      "질서와 구조가 성과를 부르는 하루로, 명확한 기준과 계획을 세우면 팀과 일이 안정적으로 굴러갑니다. 책임을 회피하지 않고 중심을 잡으면 신뢰가 따라오며, 필요한 규칙을 세우고 지키는 태도가 목표에 가까워지게 합니다. 오늘의 리더십은 강요보다 모범으로, 통제보다 방향 제시로 드러날 때 더욱 빛납니다.",
    fortuneReversed:
      "원칙을 지키는 것은 좋지만 지나친 고집과 통제는 오히려 흐름을 막을 수 있습니다. 상대의 입장을 듣고 유연성을 발휘하면 긴장이 풀리고 더 나은 해법이 보입니다. 권위를 앞세우기보다 설득과 협상을 통해 합의를 이끌어내세요. ‘틀’이 아닌 ‘목적’에 집중할 때 문제는 의외로 쉽게 풀립니다.",
  },
  {
    id: 5,
    number: "V",
    key: "the-hierophant",
    nameKo: "교황",
    nameEn: "The Hierophant",
    image: "/assets/cards/major/05.png",
    element: "Earth",
    yesNo: "maybe",
    keywordsUpright: ["전통", "멘토", "규범"],
    keywordsReversed: ["독창성 부족", "형식주의"],
    descUpright: "전통적 방식/멘토의 조언이 도움.",
    descReversed: "틀을 깨야 성장. 스스로의 원칙 재정의.",
    fortuneUpright:
      "검증된 방식과 선배의 조언이 힘이 되는 하루입니다. 새로움을 억지로 만들기보다 기본을 충실히 따르고, 제도와 규범 안에서 해법을 찾으면 시간이 절약됩니다. 배우고 전수하는 흐름에 올라타면 당신의 경험도 다음 사람에게 도움이 됩니다. 스승을 만나거나 스승의 마음으로 누군가를 돕기에 좋은 날입니다.",
    fortuneReversed:
      "형식에 갇혀 창의가 막히기 쉬운 하루로, 남이 정한 정답을 그대로 따르기보다 당신만의 원칙을 재정의해야 할 때입니다. 관성적으로 유지해 온 절차를 점검하고 불필요한 틀을 과감히 덜어내세요. 남과 다른 선택이 불안하더라도, 솔직한 신념이 길을 엽니다. ‘왜’에 대한 답을 스스로에게 먼저 주세요.",
  },
  {
    id: 6,
    number: "VI",
    key: "the-lovers",
    nameKo: "연인",
    nameEn: "The Lovers",
    image: "/assets/cards/major/06.png",
    element: "Air",
    yesNo: "yes",
    keywordsUpright: ["사랑", "가치선택", "조화"],
    keywordsReversed: ["갈등", "유혹", "우유부단"],
    descUpright: "가치에 맞는 선택이 관계와 일에 힘을 준다.",
    descReversed: "가치 충돌. 감정보다 기준을 먼저 세워라.",
    fortuneUpright:
      "마음과 이성이 조화를 이루며 관계와 선택이 자연스럽게 정렬되는 하루입니다. 당신의 가치에 맞는 결정을 내릴수록 관계는 깊어지고, 일의 방향도 또렷해집니다. 솔직한 대화와 상호 존중이 사랑과 협업 모두에 따뜻한 온기를 더할 것입니다. ‘무엇을 원하나’보다 ‘왜 원하는가’를 확인하세요.",
    fortuneReversed:
      "감정과 이해관계가 뒤섞여 우유부단해지기 쉬운 하루입니다. 달콤한 유혹이나 타협이 일시적 안정을 줄 수 있지만, 장기적으로는 가치의 균열을 낳을 수 있습니다. 기준을 먼저 세우고 그다음에 선택을 좁혀가세요. 혼자 내리기 어렵다면 신뢰할 수 있는 사람의 객관적 조언이 도움이 됩니다.",
  },
  {
    id: 7,
    number: "VII",
    key: "the-chariot",
    nameKo: "전차",
    nameEn: "The Chariot",
    image: "/assets/cards/major/07.png",
    element: "Water",
    yesNo: "yes",
    keywordsUpright: ["전진", "의지", "승리"],
    keywordsReversed: ["폭주", "불균형", "동기약화"],
    descUpright: "집중과 추진력으로 난관 돌파.",
    descReversed: "방향 재점검. 급할수록 속도를 낮춰라.",
    fortuneUpright:
      "집중과 추진력이 강하게 작동하는 하루로, 명확한 목표만 있다면 당신은 장애물을 밀고 나갈 힘이 있습니다. 과감한 전진과 빠른 의사결정이 성과를 앞당기며, 경쟁 상황에서도 흔들리지 않는 태도가 승리를 부릅니다. 오늘은 핸들을 단단히 쥐고 속도를 유지하세요. 다만 방향을 수시로 확인하는 습관이 안전벨트가 됩니다.",
    fortuneReversed:
      "의욕은 있으나 속도와 방향이 어긋나 폭주하기 쉬운 하루입니다. 추진보다 정렬이 먼저이며, 동기가 흐릿하다면 잠시 속도를 줄이고 목적을 재정의하세요. 욕심을 줄이고 핵심 경로로 정리하면 에너지가 한곳에 모입니다. 오늘의 승리는 ‘빠름’보다 ‘정확함’에 있습니다.",
  },
  {
    id: 8,
    number: "VIII",
    key: "strength",
    nameKo: "힘",
    nameEn: "Strength",
    image: "/assets/cards/major/08.png",
    element: "Fire",
    yesNo: "yes",
    keywordsUpright: ["용기", "자제", "따뜻한 힘"],
    keywordsReversed: ["불안", "자기비판", "의욕저하"],
    descUpright: "부드러운 인내가 진짜 힘. 스스로를 신뢰하라.",
    descReversed: "자책에서 벗어나 회복 루틴 만들기.",
    fortuneUpright:
      "큰소리 대신 따뜻한 단호함이 통하는 하루입니다. 스스로를 신뢰하고 감정을 다정하게 조율하면 관계와 일이 부드럽게 풀립니다. 급히 밀어붙이기보다 한 번 더 어루만지는 태도가 오히려 빠른 결과를 가져옵니다. 내적 용기가 외적 성과로 이어지는 시간을 믿으세요.",
    fortuneReversed:
      "자기비판이 과해지기 쉬운 하루로, 완벽하지 않은 자신을 탓하기보다 회복 루틴을 만들 때입니다. 쉬고 먹고 움직이는 기본을 챙기면 마음이 단단해지고 의욕이 돌아옵니다. 문제를 강하게 밀어붙이기보다 도움을 청하고 나누면 부담이 가벼워집니다. 친절을 자신에게 먼저 적용하세요.",
  },
  {
    id: 9,
    number: "IX",
    key: "the-hermit",
    nameKo: "은자",
    nameEn: "The Hermit",
    image: "/assets/cards/major/09.png",
    element: "Earth",
    yesNo: "maybe",
    keywordsUpright: ["고독", "탐구", "내면성찰"],
    keywordsReversed: ["고립", "미루기", "소통단절"],
    descUpright: "혼자만의 시간에서 해답이 나온다.",
    descReversed: "고립 주의. 필요한 도움을 요청하라.",
    fortuneUpright:
      "바쁜 흐름에서 한 걸음 물러서면 보이지 않던 해답이 또렷해지는 하루입니다. 혼자만의 집중 시간이 사고를 깊게 만들고, 핵심을 간결하게 정리하는 데 도움이 됩니다. 소음에서 멀어질수록 다음에 말해야 할 단 한 문장이 선명해집니다. 오늘의 고독은 내일의 등불이 됩니다.",
    fortuneReversed:
      "생각이 많아지며 고립으로 기울기 쉬운 하루입니다. 혼자만의 시간이 길어지면 관성이 되어 미루기가 습관화될 수 있으니, 적절한 시점에 도움을 청하고 피드백을 받으세요. 소통을 끊지 말고 최소한의 연결을 유지하면 마음이 밝아집니다. 균형 잡힌 고독이 필요합니다.",
  },
  {
    id: 10,
    number: "X",
    key: "wheel-of-fortune",
    nameKo: "운명의 수레바퀴",
    nameEn: "Wheel of Fortune",
    image: "/assets/cards/major/10.png",
    element: "Fire",
    yesNo: "yes",
    keywordsUpright: ["전환점", "우연", "순환"],
    keywordsReversed: ["지연", "통제불가", "타이밍아님"],
    descUpright: "바람이 바뀐다. 흐름을 타라.",
    descReversed: "무리한 개입은 역효과. 때를 기다리자.",
    fortuneUpright:
      "흐름이 바뀌며 우연처럼 보이는 기회가 닿는 하루입니다. 바퀴가 돌아가듯 상황이 새 국면으로 넘어가니, 변화를 거스르기보다 타고 넘어가세요. 계획을 유연하게 조정하면 작은 운이 큰 성과로 이어질 수 있습니다. 타이밍을 읽는 감각이 무엇보다 중요합니다.",
    fortuneReversed:
      "뜻대로 잡아당길 수 없는 일들이 지연을 만들기 쉬운 하루입니다. 조급함은 상황을 더 꼬이게 하니, 통제하려 들기보다 변수가 잦아드는 순간을 기다리세요. 할 수 있는 범위 안에서 준비를 다지면 기회가 올 때 더 멀리 나아갈 수 있습니다. 오늘의 미세한 조정이 내일의 행운을 부릅니다.",
  },
  {
    id: 11,
    number: "XI",
    key: "justice",
    nameKo: "정의",
    nameEn: "Justice",
    image: "/assets/cards/major/11.png",
    element: "Air",
    yesNo: "maybe",
    keywordsUpright: ["균형", "공정", "책임"],
    keywordsReversed: ["불균형", "편견", "회피"],
    descUpright: "사실과 원칙에 근거한 판단이 길.",
    descReversed: "감정/사심 점검. 책임을 미루지 말 것.",
    fortuneUpright:
      "사실과 원칙에 근거해 판단하면 상황이 놀라울 만큼 명료해지는 하루입니다. 감정보다 균형을, 이익보다 책임을 우선하면 장기적으로 신뢰가 쌓입니다. 작은 불공정도 그냥 넘기지 말고 바로잡으려는 태도가 오늘의 무게추를 안정시킵니다. 당신의 공정함이 길을 냅니다.",
    fortuneReversed:
      "선입견과 감정이 판단을 흐릴 수 있는 하루입니다. 불편한 진실을 외면하거나 책임을 미루면 문제는 커집니다. 한쪽 이야기에만 기울지 말고 증거와 절차를 점검하세요. 균형을 되찾는 용기가 결국 당신을 가볍게 합니다.",
  },
  {
    id: 12,
    number: "XII",
    key: "the-hanged-man",
    nameKo: "매달린 남자",
    nameEn: "The Hanged Man",
    image: "/assets/cards/major/12.png",
    element: "Water",
    yesNo: "maybe",
    keywordsUpright: ["관점전환", "일시정지", "희생"],
    keywordsReversed: ["지체", "집착", "손절필요"],
    descUpright: "잠시 멈춤 속에서 새로운 관점이 열린다.",
    descReversed: "붙잡고 있는 것을 내려놓을 때 움직인다.",
    fortuneUpright:
      "일부러 속도를 늦추면 보이지 않던 길이 보이는 하루입니다. 일시정지는 후퇴가 아니라 재정렬이며, 다른 각도에서 보면 문제의 구조가 단순해집니다. 지금의 작은 희생이 내일의 큰 진전을 위한 투자임을 기억하세요. 멈춤은 곧 도약의 예비 동작입니다.",
    fortuneReversed:
      "집착이 발목을 잡아 정체가 길어질 수 있는 하루입니다. 이미 효과가 없는 방법은 과감히 내려놓고, ‘왜 고집하는가’를 스스로에게 물어보세요. 손을 놓아야 들어올 것이 있습니다. 바뀌지 않는 것을 붙들기보다 바꿀 수 있는 것을 움직이세요.",
  },
  {
    id: 13,
    number: "XIII",
    key: "death",
    nameKo: "죽음",
    nameEn: "Death",
    image: "/assets/cards/major/13.png",
    element: "Water",
    yesNo: "no",
    keywordsUpright: ["종결", "정리", "재탄생"],
    keywordsReversed: ["변화회피", "미련", "정체"],
    descUpright: "끝이 있어야 새 것이 온다. 담담히 정리하자.",
    descReversed: "미루는 변화가 더 고통을 키운다.",
    fortuneUpright:
      "무언가를 담담히 마무리할 때 새로운 여백이 생기는 하루입니다. 끝내야 할 것을 끝내면 마음이 가벼워지고, 다음 장을 시작할 힘이 돌아옵니다. 정리는 상실이 아니라 재탄생을 위한 준비임을 기억하세요. 놓아야 들어옵니다.",
    fortuneReversed:
      "변화를 미루다 보니 더 많은 에너지가 소모되는 하루일 수 있습니다. 미련이 남는 부분을 솔직히 인정하고, 작은 단위부터 정리해 나가세요. 끝을 두려워하기보다, 끝난 뒤의 회복과 성장에 시선을 두면 움직이기 쉬워집니다. 변화는 이미 문 앞에 와 있습니다.",
  },
  {
    id: 14,
    number: "XIV",
    key: "temperance",
    nameKo: "절제",
    nameEn: "Temperance",
    image: "/assets/cards/major/14.png",
    element: "Fire",
    yesNo: "yes",
    keywordsUpright: ["균형", "조화", "힐링"],
    keywordsReversed: ["극단", "불균형", "조급"],
    descUpright: "적절한 배합이 성과를 만든다. 페이스 유지.",
    descReversed: "극단 피하고 리듬부터 회복.",
    fortuneUpright:
      "서두르지 않고 균형을 지키는 태도가 최고의 결과를 만드는 하루입니다. 서로 다른 요소를 적절히 섞어 조화를 이루면 과정이 편안해지고 성과가 오래갑니다. 몸과 마음의 리듬을 챙기며 페이스를 유지하세요. 오늘의 힐링이 내일의 지속력을 만듭니다.",
    fortuneReversed:
      "극단이 유혹하는 하루로, 급한 마음이 실수를 부를 수 있습니다. 우선순위를 줄이고 호흡을 고르면 불균형이 서서히 바로잡힙니다. 조합과 속도를 재조정해 리듬을 회복하세요. 회복이 곧 진전입니다.",
  },
  {
    id: 15,
    number: "XV",
    key: "the-devil",
    nameKo: "악마",
    nameEn: "The Devil",
    image: "/assets/cards/major/15.png",
    element: "Earth",
    yesNo: "no",
    keywordsUpright: ["유혹", "의존", "물질집착"],
    keywordsReversed: ["해방", "끊어내기", "회복"],
    descUpright: "달콤한 유혹 뒤의 대가를 보라.",
    descReversed: "끊어낼 힘이 생긴다. 작은 승리부터.",
    fortuneUpright:
      "짧은 쾌락이나 편의가 달콤하게 다가오는 하루지만, 그 뒤의 대가를 함께 보아야 합니다. 의존을 강화하는 선택은 잠시 달콤해도 길게 보면 발목을 잡습니다. 스스로를 속이지 말고 경계선을 분명히 하세요. 진짜 자유는 선택의 책임을 인정할 때 시작됩니다.",
    fortuneReversed:
      "묶였던 습관이나 집착에서 벗어날 용기가 생기는 하루입니다. 모든 것을 한 번에 끊으려 하기보다 작은 승리를 쌓아가면 자존감이 회복됩니다. 도움을 청하고 도구를 활용해 환경을 바꾸세요. 당신은 이미 해방의 문을 열 수 있는 위치에 있습니다.",
  },
  {
    id: 16,
    number: "XVI",
    key: "the-tower",
    nameKo: "탑",
    nameEn: "The Tower",
    image: "/assets/cards/major/16.png",
    element: "Fire",
    yesNo: "no",
    keywordsUpright: ["충격", "붕괴", "각성"],
    keywordsReversed: ["피해완화", "학습", "후처리"],
    descUpright: "불편한 진실이 드러난다. 재건의 기회.",
    descReversed: "피해를 줄이고 배우는 국면.",
    fortuneUpright:
      "예상치 못한 소식이나 깨달음이 기존의 전제를 흔들 수 있는 하루입니다. 불편하지만 진실을 마주할 때 재건의 방향이 분명해집니다. 무너진 틀을 붙잡기보다, 더 단단한 기초 위에 새로 쌓을 방법을 찾으세요. 위기는 각성으로 전환될 수 있습니다.",
    fortuneReversed:
      "이미 벌어진 일의 충격은 줄어들고, 후처리와 학습이 중요한 국면입니다. 손실을 최소화하고 교훈을 체계화하면 같은 문제를 반복하지 않게 됩니다. 감정보다 프로세스를 우선해 정리하면 안정이 빠르게 돌아옵니다. 회복의 기술을 익히는 시간입니다.",
  },
  {
    id: 17,
    number: "XVII",
    key: "the-star",
    nameKo: "별",
    nameEn: "The Star",
    image: "/assets/cards/major/17.png",
    element: "Air",
    yesNo: "yes",
    keywordsUpright: ["희망", "회복", "영감"],
    keywordsReversed: ["의심", "건조", "영감저하"],
    descUpright: "회복의 길. 영감이 다시 흐른다.",
    descReversed: "스스로를 의심하지 말 것. 작은 성취부터.",
    fortuneUpright:
      "긴 터널 끝의 빛처럼 마음에 희망이 스며드는 하루입니다. 상처가 아물고 에너지가 고르게 돌아, 영감과 친절이 자연스레 흘러나옵니다. 멀리 보며 차분히 걸으면 별이 길을 안내할 것입니다. 오늘의 온기는 당신과 주변을 함께 치유합니다.",
    fortuneReversed:
      "스스로를 의심해 마음이 건조해지기 쉬운 하루입니다. 큰 비전을 강요하기보다 작은 성취와 감사에 초점을 두세요. 휴식과 물, 빛, 자연 같은 기본적 회복 요소가 영감을 다시 흐르게 합니다. 희망은 떠난 적이 없었습니다—잠시 흐릿했을 뿐입니다.",
  },
  {
    id: 18,
    number: "XVIII",
    key: "the-moon",
    nameKo: "달",
    nameEn: "The Moon",
    image: "/assets/cards/major/18.png",
    element: "Water",
    yesNo: "maybe",
    keywordsUpright: ["불안", "환상", "잠재의식"],
    keywordsReversed: ["명료화", "진실", "해소"],
    descUpright: "정보가 흐릿하다. 서두르지 말 것.",
    descReversed: "안개가 걷힌다. 사실 확인 후 판단.",
    fortuneUpright:
      "정보가 흐릿하고 감정의 파도가 높아질 수 있는 하루입니다. 상상과 현실을 혼동하지 않도록 결론을 미루고, 사실 확인을 반복하세요. 꿈과 직관의 메시지를 기록하되, 중요한 결정은 해 뜬 뒤에 해도 늦지 않습니다. 달이 기울면 길이 또렷해집니다.",
    fortuneReversed:
      "안개가 서서히 걷히며 상황이 명료해지는 하루입니다. 진실을 확인하고 오해를 풀면 마음의 파고도 잦아듭니다. 감정의 파도를 타지 말고 사실의 땅을 밟으세요. 이제 필요한 결정과 대화가 가능해집니다.",
  },
  {
    id: 19,
    number: "XIX",
    key: "the-sun",
    nameKo: "태양",
    nameEn: "The Sun",
    image: "/assets/cards/major/19.png",
    element: "Fire",
    yesNo: "yes",
    keywordsUpright: ["성공", "행복", "명료"],
    keywordsReversed: ["지연", "과신", "소진"],
    descUpright: "명확한 성취와 기쁨. 자신감이 통한다.",
    descReversed: "과신 주의. 페이스 관리가 필요.",
    fortuneUpright:
      "명확한 성취와 따뜻한 기쁨이 찾아오는 하루입니다. 당신의 밝은 에너지가 주변을 비추고, 자신감 있는 태도가 문을 엽니다. 솔직하고 간단한 표현이 가장 효과적이며, 함께 웃을수록 성과는 더 커집니다. 햇빛을 충분히 쬐세요—마음이 가벼워집니다.",
    fortuneReversed:
      "기본적으로 운은 좋지만, 과신이나 과로가 기쁨을 희미하게 만들 수 있는 하루입니다. 페이스를 조절하고 휴식을 계획하세요. 보여주기보다 실질을 챙길 때 만족감이 오래갑니다. 태양은 여전히 뜨지만, 그늘도 필요합니다.",
  },
  {
    id: 20,
    number: "XX",
    key: "judgement",
    nameKo: "심판",
    nameEn: "Judgement",
    image: "/assets/cards/major/20.png",
    element: "Fire",
    yesNo: "yes",
    keywordsUpright: ["각성", "부름", "결단"],
    keywordsReversed: ["회피", "미련", "자책"],
    descUpright: "부름을 따른 결단의 순간.",
    descReversed: "결정을 미루지 말 것. 배운 걸 적용.",
    fortuneUpright:
      "부름을 듣는 순간이 찾아오는 하루입니다. 과거의 경험이 하나로 연결되며, 지금 내릴 결단이 다음 장을 여는 열쇠가 됩니다. 스스로의 목소리에 정직해지면 망설임이 줄고 길이 열립니다. 배운 것을 적용할 때입니다.",
    fortuneReversed:
      "중요한 결정을 미루거나 스스로를 과하게 심판하기 쉬운 하루입니다. 미련은 정리를, 자책은 책임과 계획으로 바꾸세요. 완벽을 기다리기보다 가능한 최선으로 움직이면 흐름이 살아납니다. 답은 이미 당신 안에 있습니다.",
  },
  {
    id: 21,
    number: "XXI",
    key: "the-world",
    nameKo: "세계",
    nameEn: "The World",
    image: "/assets/cards/major/21.png",
    element: "Earth",
    yesNo: "yes",
    keywordsUpright: ["완성", "통합", "여행"],
    keywordsReversed: ["미완", "막바지 지연", "루프"],
    descUpright: "한 사이클의 완성. 다음 단계로의 초대.",
    descReversed: "마무리 디테일 점검. 루프 끊기.",
    fortuneUpright:
      "한 사이클이 우아하게 마무리되는 하루로, 그간의 노력과 배움이 하나로 통합됩니다. 성취의 기쁨을 충분히 맛보고, 다음 여정을 위한 가벼운 준비를 시작하세요. 당신의 경험은 이미 세계와 연결되어 있으며, 새로운 무대가 손짓하고 있습니다. 축하와 감사가 에너지를 순환시킵니다.",
    fortuneReversed:
      "마무리 직전의 디테일이 흐름을 늦출 수 있는 하루입니다. 마지막 점검과 정리를 통해 루프를 끊어내면 문은 곧 열립니다. 성급히 새 일을 벌이기보다 닫을 것을 먼저 닫으세요. 완성은 디테일에서 결정됩니다.",
  },
];
