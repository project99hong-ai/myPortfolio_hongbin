// Edit this file to make the portfolio yours. Blank contacts show unlinked icons.
// Keep example: true until a card contains your own verified information.
const portfolio = {
  name: "hongbin",
  intro: "위홍빈 | 시공간(서울대 인액터스) AX 전략·기획",
  tagline: "끊임없이 본질을 꿰뚫고 문제를 해결하는\nProblem-Solving AI Builder",
  profile: {
    displayName: "위홍빈",
    englishName: "Hongbin Wee",
    avatar: "./images/hero-avatar.png",
    tags: [
      { label: "AI Builder", tone: "purple" },
      { label: "Product", tone: "blue" },
      { label: "AX", tone: "teal" }
    ],
    location: "Seoul, Korea"
  },
  techStack: [
    "Claude Code",
    "ChatGPT / Codex",
    "n8n",
    "Grok",
    "AI Agent / RAG",
    "Figma",
    "Notion",
    "Slack",
    "ClickUp",
    "Canva",
    "Excel & Google Sheets",
    "PowerPoint",
    "NVIDIA DLI (LLM · RAG · Diffusion)"
  ],
  email: "redbin_up@icloud.com",
  github: [
    { label: "project99hong-ai", note: "본계정", url: "https://github.com/project99hong-ai" },
    { label: "hongbinwee", note: "부계정", url: "https://github.com/hongbinwee" }
  ],
  linkedin: "https://www.linkedin.com/in/hongbin-wee-3660553bb",
  resume: "",
  cards: [
    {
      id: "sigonggan",
      title: "시공간 (서울대 인액터스 소속)",
      subtitle: "AX 전략 파트너",
      category: "impact",
      tags: ["AX Strategy", "BM Planning", "Internal AX", "Automation"],
      art: "mckinsey",
      cover: "images/sigonggan-cover.jpg",
      coverPosition: "50% 10%",
      example: false,
      summary: "AI 접근성 기술을 서비스·사업 기회로 연결하는 전략 기획과, 반복적인 내부 운영 업무를 구조화·자동화하는 AX 전환에 참여하고 있습니다.",
      sections: [
        ["개요", "서울대 인액터스 소속 시공간에서 AX 전략 파트너로 활동하며 사업·협업 기획과 사내 AI 업무 자동화 설계를 진행하고 있습니다."]
      ],
      caseStudy: {
        categoryLabel: "서울대학교 창업기업 · 디지털 접근성 소셜벤처",
        headline: "기술이 사람에게 닿을 수 있도록,\n서비스와 실행의 간격을 좁히다.",
        intro: "시공간은 AI 기술을 활용해 시각장애인의 디지털 정보 접근성을 개선하는 서울대학교 창업기업입니다.\n저는 시공간에서 픽포미(PickForMe)와 에이텍(AI Tag)의 가치가 더 많은 사용자와 협업 기업에 전달되도록 사업·운영 전략을 다듬고, 반복적인 내부 업무를 AI와 자동화 도구로 개선하는 AX 활동에 참여하고 있습니다.\n기술을 만드는 일만큼, 좋은 기술이 실제 사용자에게 닿고 팀 안에서 계속 운영될 수 있는 구조를 세우는 과정에 집중하고 있습니다.",
        meta: [
          { label: "소속 · 구분", value: "시공간 (서울대 인액터스)" },
          { label: "활동 영역", value: "AX 전략·기획 · 운영 협업 · 사내 AX" },
          { label: "주요 서비스", value: "픽포미(PickForMe) · 에이텍(AI Tag)" },
          { label: "활동 시기 · 상태", value: "2026.07 ~ 현재 (진행 중)" }
        ],
        blocks: [
          {
            type: "comparison",
            title: "Problem — 어떤 문제를 해결하는가?",
            columns: [
              {
                tag: "EXTERNAL SERVICE",
                title: "외부 사용자와 서비스의 문제",
                body: "시각장애인은 온라인 쇼핑에서 이미지 중심의 상품 정보와 접근성이 충분하지 않은 화면 구조 때문에 원하는 정보를 확인하고 비교하는 데 어려움을 겪습니다.",
                bullets: [
                  "시공간의 픽포미(PickForMe)와 에이텍(AI Tag)은 AI로 이러한 정보 접근성 격차를 줄이는 서비스",
                  "기술적 가치에 더해, 실제 구매 맥락과 파트너 브랜드의 참여를 연결하는 사업·커뮤니티 구조가 필요함"
                ]
              },
              {
                tag: "INTERNAL OPERATIONS",
                title: "내부 조직과 사업의 문제",
                body: "초기 창업팀에서는 사업 기획, 협업처 발굴, 제안서 작성, 컨택 정보 관리, 반복적인 운영·행정 업무에 제한된 인력이 많은 시간을 쓰게 됩니다.",
                bullets: [
                  "여러 도구에 자료가 흩어지고 유사한 조사·발송·정리 업무가 반복되기 쉬움",
                  "단순 도구 도입을 넘어 업무 흐름을 정리하고 AI 자동화를 결합하는 사내 AX가 필요함"
                ]
              }
            ],
            callout: "좋은 서비스가 시장과 사용자에게 닿게 만드는 바깥의 전략과, 제한된 팀이 핵심 일에 집중하도록 돕는 안쪽의 실행 시스템을 함께 다루고 있습니다."
          },
          {
            type: "chapters",
            title: "What I Do — 주요 활동 영역",
            chapters: [
              {
                num: "01",
                eyebrow: "Product & Business Strategy",
                title: "서비스의 가치를 실제 사업 기회로 연결하는 일",
                badge: "전략 · BM 방향 정리",
                bullets: [
                  "[브랜드 협업 확장 검토] 픽포미 내 기존 임팩트관 중심 구조에서 브랜드관으로 확장하기 위한 협업 모델과 브랜드 참여 동기를 검토하고 제안 방향을 정리했습니다.",
                  "[접근성·사업 접점 기획] AI 기반 디지털 접근성이 브랜드 가치 및 커머스 경험과 맞닿는 지점을 기준으로 맞춤형 협업 제안 논리를 구성했습니다.",
                  "[신규 BM 방향 탐색] 사내에서 축적한 AI 활용·자동화 경험을 바탕으로 AX 컨설팅·교육 등 신규 비즈니스 모델 확장 가능성을 검토하고 있습니다."
                ]
              },
              {
                num: "02",
                eyebrow: "Partnerships & Community",
                title: "사용자, 기업, 협업 파트너를 연결하는 일",
                badge: "진행 업무 · 검토 기획 구분",
                bullets: [
                  "[진행] 협업 대상 기업 조사와 컨택 정보 정리를 수행하고, 각 기업의 사업 분야와 사회공헌 활동을 고려해 맞춤형 제안 문안을 직접 기획했습니다.",
                  "[진행] 픽포미 서포터즈 기획·마케팅팀의 활동 방향 설정과 운영 매뉴얼 설계에 참여해 실제 운영 기준을 문서화했습니다.",
                  "[검토 중] 사용자 피드백 기반 서비스 개선, 참여형 프로젝트, 캠페인 등 커뮤니티 기반 활동 방안을 검토 단계에서 구체화하고 있습니다."
                ]
              },
              {
                num: "03",
                eyebrow: "Internal AX & Automation",
                title: "반복 업무를 더 효율적인 운영 시스템으로 바꾸는 일",
                badge: "프로세스 설계 · 로컬/격리 검증",
                bullets: [
                  "[분산 데이터 통합 설계] 여기저기 흩어져 있던 기업·연락처·협업 진행 데이터를 한 곳에서 추적할 수 있는 관리 구조부터 설계했습니다.",
                  "[도구 연결·이메일 흐름 검토] Notion, Google Sheets, Slack 등 기존 협업 도구 간 연동 구조와 이메일 제안·회신 관리 자동화 방안을 검토했습니다.",
                  "[회계 자동화·Slack Agent 연계] 반복적인 회계·행정 업무 효율화를 위해 핵심 API와 Slack 기반 AI Agent 연계 프로젝트를 진행하며 로컬 및 격리 DB 환경에서 검증을 수행했습니다."
                ],
                relatedCard: {
                  cardId: "ax-automation",
                  label: "사내 AX 업무 자동화 & Slack 회계봇 상세 보기 →"
                }
              }
            ]
          },
          {
            type: "pillars",
            title: "My Contribution — 나의 역할과 일하는 방식",
            emphasis: true,
            pillars: [
              {
                num: "01",
                title: "문제 구조화",
                summary: "도구보다 업무 흐름과 데이터를 먼저 정리합니다",
                bullets: [
                  "반복되는 운영 업무와 분산된 컨택·문서 정보를 먼저 관찰해 병목 구간 파악",
                  "개별 작업을 바로 자동화하기 전에 입력·참조·추적이 이어지는 데이터 관리 구조부터 설계"
                ]
              },
              {
                num: "02",
                title: "기획에서 실행으로 연결",
                summary: "논의를 팀이 바로 쓰는 산출물로 구체화합니다",
                bullets: [
                  "협업 논의를 기업 분석 항목, 맞춤형 제안 문안, 서포터즈 운영 매뉴얼 형태로 문서화",
                  "자동화 아이디어를 API·업무 도구·검증 시나리오 단위의 실행 가능한 요구사항으로 전환"
                ]
              },
              {
                num: "03",
                title: "AI Native 업무 접근",
                summary: "AI 도구와 워크플로우를 실무 검증으로 연결합니다",
                bullets: [
                  "Claude Code, Codex, n8n 등을 활용해 조사·문서 작성·업무 프로세스 연결 시도",
                  "모든 시도를 곧바로 운영 적용으로 치부하지 않고, 로컬 MVP 및 격리 환경 검증부터 단계적으로 확인"
                ]
              }
            ]
          },
          {
            type: "outcomes",
            title: "Outcomes & Learning — 확인된 결과와 배운 점",
            groups: [
              {
                label: "확인된 실행 · 산출물",
                bullets: [
                  "[협업·사업 자료] 서비스 브랜드관 확장 제안 방향 정리, 기업 조사 및 맞춤형 제안 문안 구체화",
                  "[운영 체계] 픽포미 서포터즈 기획·마케팅팀 활동 체계 및 운영 매뉴얼 설계 참여",
                  "[업무 구조] 기업·협업 컨택 데이터 통합 관리 구조 및 협업 도구 연계 프로세스 설계",
                  "[자동화 검증] 회계·행정 자동화 워크플로우의 로컬 MVP 구성 및 격리 DB 환경 검증 수행"
                ]
              },
              {
                label: "진행 중인 활동 및 사실 범위",
                bullets: [
                  "[현재 진행 중] 파트너십 제안, 신규 AX BM 검토 및 자동화 파이프라인 고도화는 계속 진행 중",
                  "[검증 기준 유지] 확인되지 않은 매출, 외부 협약 성과, 업무 시간 절감률, 사내 전면 배포 실적은 임의로 기재하지 않음"
                ]
              }
            ],
            takeaway: "AI 도입의 핵심은 도구 자체가 아니라, 조직이 해결해야 할 업무 문제를 정확히 정의하고 실행 가능한 구조로 바꾸는 것이라는 관점을 현장에서 체득하고 있습니다.",
            media: []
          }
        ],
        // 추후 시공간 발표자료/아키텍처 이미지 추가 시 아래 media 배열 또는 각 블록의 media 배열에 { src: "images/...", caption: "..." } 형태로 추가하세요.
        relatedLinks: [],
        relatedCards: [
          { cardId: "ax-automation", label: "연결 프로젝트: 사내 AX 업무 자동화 & Slack 회계봇 ↗" }
        ]
      },
      href: ""
    },
    {
      id: "codyssey-ai",
      title: "코디세이 AI 네이티브 과정 수료",
      subtitle: "과기부 이노베이션 아카데미 교육",
      category: "impact",
      tags: ["AI Agent", "Multi-Agent Workflow", "Agent Orchestration"],
      art: "codyssey",
      cover: "images/codyssey-cover.jpg",
      example: false,
      summary: "과학기술정보통신부 이노베이션 아카데미의 코디세이 AI 네이티브 과정을 수료하며 AI Agent 설계·멀티 에이전트 오케스트레이션과 동료학습 커뮤니티를 이끌었습니다.",
      sections: [
        ["개요", "과학기술정보통신부 이노베이션 아카데미에서 주관하는 코디세이 AI 네이티브 과정을 통해 AI 에이전트 설계와 워크플로우 오케스트레이션을 집중 학습·실습하고, 동료학습 커뮤니티를 주도했습니다."],
        ["핵심 내용 및 실행", [
          "[Agent Architecture] 단일 프롬프트를 넘어 AI Agent, Multi-Agent Workflow, Agent Orchestration 구조를 설계하고 실전 문제 해결에 적용",
          "[Peer Learning 리딩] 과정 내 동료들과 함께 AI 활용 인사이트와 시행착오를 공유하는 동료학습 기반 네트워크 모임을 직접 기획·진행"
        ]],
        ["주요 키워드", [
          "Core : AI Agent, Multi-Agent Workflow, Agent Orchestration",
          "Community : 동료학습(Peer Learning) 네트워크 기획 및 운영"
        ]]
      ],
      href: ""
    },
    {
      id: "nvidia-dli",
      title: "[KSTA] NIPA-NVIDIA GPU 가속 기반 AI Agent 엔지니어 과정",
      subtitle: "수도권 ICT이노베이션스퀘어 · 과기부 / NIPA / NVIDIA",
      category: "impact",
      tags: ["NIPA · KSTA", "NVIDIA DLI", "AI Agent", "RAG / LLM"],
      art: "nvidia",
      cover: "images/nvidia-cover.jpg",
      example: false,
      summary: "과학기술정보통신부·정보통신산업진흥원(NIPA) 주관 수도권 ICT이노베이션스퀘어에서 NIPA-NVIDIA GPU 가속 기반 AI Agent 엔지니어 과정(2단계)을 이수하고 NVIDIA DLI 5개 과정을 함께 수료했습니다.",
      sections: [
        ["개요", "과학기술정보통신부·정보통신산업진흥원(NIPA) 주관 수도권 ICT이노베이션스퀘어, NIPA-NVIDIA GPU 가속 기반 AI Agent 엔지니어 GPU 가속 환경 기반의 딥러닝·LLM·RAG 에이전트·생성형 AI 엔지니어링 교육 과정"],
        ["과정 및 수료 인증 (수료증 기준)", [
          "[과정명] NIPA-NVIDIA GPU 가속 기반 AI Agent 엔지니어 과정(2단계)",
          "[주관 · 발급] 과학기술정보통신부 · 정보통신산업진흥원(NIPA) · 수도권 ICT이노베이션스퀘어",
          "[교육 기간] 2026.08.03 ~ 2026.08.25",
          "[수료증 번호] 제2026-BT-02-0151호 (2026년 8월 25일 발급)"
        ]],
        ["NVIDIA DLI 세부 이수 과정 (5개 과정)", [
          "[RAG Agents] NVIDIA DLI : Building RAG Agents with LLMs",
          "[Prompt Engineering] NVIDIA DLI : Building LLM Applications With Prompt Engineering",
          "[LLM App Dev] NVIDIA DLI : Rapid Application Development with Large Language Models (LLMs)",
          "[Diffusion Models] NVIDIA DLI : Generative AI with Diffusion Models",
          "[Deep Learning] NVIDIA DLI : 딥러닝의 기초 (Fundamentals of Deep Learning)"
        ]]
      ],
      href: ""
    },
    {
      id: "repers",
      title: "(주)리퍼스 청주",
      subtitle: "사무·영업 & 업무 운영체계 구축",
      category: "impact",
      tags: ["Operations", "Excel VBA", "Workflow"],
      art: "google",
      example: false,
      summary: "리퍼스 청주점의 사무·영업 및 발주 실무를 담당하며, 엑셀 자동화와 구글 캘린더를 연동한 업무 운영체계를 직접 구축했습니다.",
      sections: [
        ["개요", "리퍼스 청주점의 사무·영업 실무와 일일 발주 처리를 수행하면서, 수기 반복 업무를 줄이기 위해 엑셀 자동화 및 구글 캘린더 연동 운영체계를 직접 도입했습니다."],
        ["주요 성과 및 임팩트", [
          "[사무·영업 및 발주 실무] 리퍼스 청주점의 사무·영업 실무 수행 및 일일 발주 입력·처리 프로세스 전담",
          "[엑셀 자동화 구축] 반복적인 수기 입력과 데이터 정리를 줄이기 위해 엑셀(매크로·VBA) 기반 자동화 프로그램 구축",
          "[캘린더 연동 운영체계] 엑셀 자동화 도구와 구글 캘린더를 연동해 업무 내역과 일정을 한눈에 관리하는 체계 구축"
        ]],
        ["활용 도구", [
          "Tools : Excel (VBA / 매크로), Google Sheets, Google Calendar"
        ]]
      ],
      href: ""
    },
    {
      id: "pizzamaru",
      title: "피자마루 유성온천점 창업·운영",
      subtitle: "프랜차이즈 개업 및 매장 총괄 사장",
      category: "impact",
      tags: ["Entrepreneurship", "Store Operations", "Team Management"],
      art: "community",
      example: false,
      summary: "프랜차이즈 매장 개업 준비부터 현장 운영, 직원 채용·관리, 고객 응대까지 매장 대표로 전 과정을 직접 이끌었습니다.",
      sections: [
        ["개요", "매장 인테리어와 가맹본사 협의 등 개업 준비 단계부터 매장 오픈 후 채용·인사·고객 응대·재고 및 매장 운영까지 전 과정을 대표로서 총괄했습니다."],
        ["핵심 역할 및 임팩트", [
          "[프랜차이즈 개업 총괄] 상권 검토, 매장 인테리어, 가맹본사 협의 등 개업 준비부터 오픈까지 직접 의사결정 및 실행",
          "[인사 및 매장 운영] 직원 채용·교육·스케줄 관리 및 현장 고객 응대, 매장 운영 전반 수행",
          "[현장 경영 인사이트] 고객과 직원을 직접 마주하며 문제를 끝까지 책임지는 실행력과 운영 프로세스 효율화의 중요성 체득"
        ]]
      ],
      href: ""
    },
    {
      // [내부 작업 메모 - Project Zero to One]
      // 보존된 모집·Discord 자료 기준 8/10 소모임 등록·모집 공지, 8/27 본인의 design.md·AI PPT 자료 공유, 9/02 다음 키워드 자료 공유 확인.
      // 모집일·실제 첫 모임일·마지막 활동일은 서로 다를 수 있으며 실제 운영 시작·종료일은 미확정(정식 종료로 표기하지 않음).
      // 강사 중심 완성 교육과정이 아닌 구성원 간 발표·질문·피드백 기반 동료학습 모임.
      id: "zero-to-one",
      title: "Project Zero to One",
      subtitle: "발표·질문·피드백으로 함께 성장하는 AI 동료학습 모임",
      category: "projects",
      tags: ["Peer Learning", "Community Building", "AI Study"],
      art: "experiment",
      cover: "images/zero-to-one-cover.jpg",
      example: false,
      summary: "혼자 AI를 공부할 때 느낀 한계를 해결하기 위해, 코디세이 동료들과 서로 멘토이자 멘티가 되어 지식을 나누도록 직접 기획·운영한 동료학습 커뮤니티입니다.",
      sections: [
        ["개요", "구성원이 서로 배우고 발표·질문·피드백으로 함께 성장하도록 직접 기획·운영한 AI 실전 동료학습 커뮤니티입니다."]
      ],
      caseStudy: {
        categoryLabel: "AI 실전 동료학습 커뮤니티 · 코디세이 AI 네이티브 과정",
        headline: "서로가 서로의 멘티 멘토가 되는\n동료 학습 모임.",
        intro: "AI를 처음 독학하면서 가장 어려웠던 점은 막혔을 때 바로 물어볼 사람이 없고, 배운 내용을 다른 사람에게 설명하며 스스로 점검할 기회가 부족하다는 것이었습니다.\n코디세이 AI 네이티브 과정에서 비슷한 고민을 가진 동료들을 만나면서, 모두가 때로는 멘토가 되고 때로는 멘티가 되는 동료학습 모임 'Project Zero to One'을 직접 기획하고 운영했습니다.\n특정 기술을 단독 구현한 결과물보다 학습 환경의 문제를 스스로 발견하고 커뮤니티 구조로 풀어낸 프로젝트입니다.",
        meta: [
          { label: "성격 · 환경", value: "AI 실전 동료학습 커뮤니티 · 코디세이" },
          { label: "역할", value: "직접 기획·모집·운영 · 자료 제작 및 발표" },
          { label: "운영 기간 (타임라인 기준)", value: "2026.08–11 (잠정 · 8–9월 모집/공유 기록)" },
          { label: "참여 규모", value: "초기 14명 → 이후 Discord 약 20명 (본인 포함)" }
        ],
        blocks: [
          {
            type: "comparison",
            title: "Why — 모임을 시작한 이유",
            columns: [
              {
                tag: "PROBLEM 01",
                title: "혼자 학습할 때의 한계",
                bullets: [
                  "학습 과정에서 막혔을 때 맥락을 짚어가며 질문하고 토론할 동료가 부족함",
                  "공부한 내용을 타인에게 설명하며 제대로 이해했는지 검증할 기회가 없음",
                  "내 관심 분야를 깊이 파더라도 다른 분야의 도구·사례를 자연스럽게 접하기 어려움"
                ]
              },
              {
                tag: "PROBLEM 02",
                title: "일방향 학습의 한계",
                bullets: [
                  "한 사람이 지식을 전달하고 나머지가 듣기만 하는 스터디보다 각자 공부하고 나누는 구조가 필요함",
                  "각자의 관심 분야를 직접 탐구해 동료에게 설명하면 발표자와 질문자 모두 시야가 넓어짐",
                  "질문과 피드백이 자연스럽게 오갈 수 있는 안전한 동료학습 환경이 필요했음"
                ]
              }
            ],
            callout: "\"서로가 서로의 멘토이자 멘티가 된다면,\n함께 더 빠르게 성장할 수 있지 않을까?\""
          },
          {
            type: "steps",
            title: "How It Works — 직접 설계한 5단계 학습 방식",
            intro: "단발성 특강 대신, 구성원 누구나 주제를 들고 와서 실행·공유·피드백을 순환할 수 있도록 5단계 동료학습 사이클을 설계했습니다.",
            steps: [
              {
                num: "01",
                code: "Explore",
                title: "관심 주제 선정",
                desc: "구성원이 자신이 관심 있거나 더 공부해 보고 싶은 AI 기술·도구·활용 주제를 직접 정합니다."
              },
              {
                num: "02",
                code: "Learn",
                title: "자기주도 학습",
                desc: "주제와 관련된 개념과 자료를 스스로 조사하고, 직접 실습하거나 작은 결과물을 만듭니다."
              },
              {
                num: "03",
                code: "Share",
                title: "발표와 공유",
                desc: "공부한 내용과 시행착오를 발표 자료나 아티클 형태로 정리해 동료에게 설명합니다."
              },
              {
                num: "04",
                code: "Discuss",
                title: "질문과 피드백",
                desc: "서로 질문하고 각자의 사용 경험을 공유하며 이해가 부족했던 부분과 빈틈을 보완합니다."
              },
              {
                num: "05",
                code: "Improve",
                title: "다음 시도",
                desc: "나눈 피드백을 바탕으로 새로운 시도를 이어가거나 다음 학습 키워드로 자연스럽게 확장합니다."
              }
            ]
          },
          {
            type: "chapters",
            title: "My Role — 기획자이자 운영자로 직접 한 일",
            chapters: [
              {
                num: "01",
                eyebrow: "Community Building",
                title: "소모임 직접 기획·모집 및 소통 공간 구축",
                bullets: [
                  "코디세이 소모임 플랫폼을 활용해 동료학습 모임을 직접 기획·등록하고 모집 안내와 활동 취지를 작성했습니다.",
                  "초기 참여자를 모집해 모임 운영 방식의 뼈대를 잡았습니다.",
                  "이후 지속적인 소통과 자료 공유가 끊기지 않도록 Discord 기반 커뮤니티 환경을 직접 마련했습니다."
                ]
              },
              {
                num: "02",
                eyebrow: "Learning Facilitation",
                title: "발표·질문·피드백 순환 및 온·오프라인 교류 조율",
                bullets: [
                  "구성원이 각자 관심 있는 기술과 주제를 부담 없이 공유하도록 발표·질문·피드백 중심의 동료학습 방식을 제안했습니다.",
                  "design.md 및 AI PPT 자료 공유(8/27), 다음 학습 키워드 공유(9/02) 등 후속 학습으로 이어지는 소통을 진행했습니다.",
                  "Discord 온라인 소통과 코디세이 클러스터 현장의 오프라인 교류를 함께 활용해 참여 흐름을 이어갔습니다."
                ]
              },
              {
                num: "03",
                eyebrow: "Knowledge Sharing",
                title: "직접 자료를 만들어 발표·공유한 주요 주제",
                badge: "4개 주제 발표 · 공유",
                subCards: [
                  {
                    tag: "TOPIC 01",
                    title: "바이브코딩 입문",
                    desc: "AI와 대화하며 아이디어를 실제 작동하는 결과물로 옮기는 입문 흐름과 접근 방식을 정리해 공유했습니다."
                  },
                  {
                    tag: "TOPIC 02",
                    title: "Codex 및 Claude Code 기초 활용",
                    desc: "에이전트형 코딩 도구의 기초 활용법과 직접 써보며 부딪힌 포인트들을 동료들과 나눴습니다."
                  },
                  {
                    tag: "TOPIC 03",
                    title: "AI를 활용한 PPT 제작 방법",
                    desc: "설계 문서(design.md)와 AI 도구를 연결해 발표 자료를 구조화하고 제작하는 실전 워크플로우를 공유했습니다."
                  },
                  {
                    tag: "TOPIC 04",
                    title: "Codybot Skill 설계 사례",
                    desc: "코디세이 미션 학습을 돕기 위해 개인 제작한 Skill 도구의 설계 과정과 활용 사례를 소개했습니다."
                  }
                ],
                relatedCard: {
                  cardId: "codybot",
                  label: "Codybot · 코디세이 미션 학습 지원 Skill 보기 →"
                }
              }
            ]
          },
          {
            type: "metrics",
            title: "Community Growth — 참여와 성장",
            stats: [
              {
                value: "14명",
                label: "초기 소모임 참여 규모",
                caption: "코디세이 소모임 플랫폼 초기 모집 기준"
              },
              {
                value: "약 20명",
                label: "이후 Discord 기준 참여 규모",
                caption: "커뮤니티 확장 후 Discord 참여 인원 (본인 포함)"
              }
            ],
            note: "이 수치는 학습 성과나 만족도를 단정하기 위한 지표가 아니라, 동료들이 자신의 학습 경험을 서로 공유할 수 있는 모임 구조가 실제로 형성·확장되었음을 보여줍니다. 정식 종료 여부 대신 확인된 모집(8월) 및 자료·키워드 공유(8–9월) 내역 기준으로 기록했습니다."
          },
          {
            type: "outcomes",
            title: "What I Learned — 배운 점과 회고",
            groups: [
              {
                label: "커뮤니티를 운영하며 얻은 인사이트",
                bullets: [
                  "[설명하며 완성되는 학습] 처음에는 혼자 AI를 빠르게 익히는 데 집중했지만, 배운 내용을 남에게 설명하고 정리하는 과정 자체가 중요한 학습 방법이라는 것을 경험했습니다.",
                  "[질문과 피드백의 힘] 혼자 오래 고민해도 풀리지 않던 문제도 다른 관점을 가진 동료의 질문과 피드백 속에서 새로운 접근으로 이어질 수 있음을 배웠습니다.",
                  "[환경을 설계하는 리더십] 리더십은 일방적으로 방향을 지시하는 일이 아니라, 구성원이 자발적으로 참여하고 의견을 낼 수 있는 구조와 환경을 설계하는 일이라는 관점을 갖게 됐습니다."
                ]
              }
            ],
            takeaway: "빠르게 성장하는 방법을 찾다가, 함께 성장할 수 있는 환경을 만들게 됐습니다.",
            media: []
          }
        ],
        // 추후 Zero to One 발표 현장 사진·아티클 이미지 추가 시 아래 media 배열 또는 각 블록의 media 배열에 { src: "images/...", caption: "..." } 형태로 추가하세요.
        relatedLinks: [],
        relatedCards: [
          { cardId: "codybot", label: "연결 프로젝트: Codybot · 코디세이 미션 학습 지원 Skill ↗" }
        ]
      },
      href: ""
    },
    {
      // [내부 작업 메모 - PIKKU]
      // 기존 인계: 10/30–11/01 기획·개발·제출 준비, 행사 10/30–11/02, 제출 마감 11/01 13:00.
      // GitHub main 커밋 기록: KST 10/31–11/01. 본인 정확 착수·종료일 및 실제 최종 제출 여부는 별도 확인 대상.
      id: "pikku",
      title: "코디세이 AI 해커톤 · PIKKU",
      subtitle: "계획·실행·재조정을 돕는 AI 일정 비서 팀 프로젝트",
      category: "projects",
      tags: ["AI Hackathon", "Schedule Agent", "Team Project"],
      art: "pikku",
      cover: "images/pikku-cover.jpg",
      example: false,
      summary: "계획 수립부터 실행, 일정 재조정까지의 흐름을 돕는 AI 일정 비서 팀 프로젝트입니다.",
      sections: [
        ["개요", "계획·실행·재조정을 돕는 AI 일정 비서 팀 프로젝트입니다. (활동 자료 시기: 2026.10–11)"]
      ],
      caseStudy: {
        categoryLabel: "코디세이 AI 해커톤 2026 · 팀 '시계는 워치' (5인)",
        headline: "계획을 추천하는 AI를 넘어,\n변하는 하루에 맞춰 다시 제안하다.",
        intro: "코디세이 AI 해커톤(주제: 'AI 기반 개인화 추천 서비스')에서 5인 팀 '시계는 워치'의 팀장으로 참여해 서비스 기획, PRD, UX/UI 설계, 핵심 사용자 흐름 정의, 통합 QA 및 시연을 담당했습니다.\nPIKKU는 '무엇을 추천할까?'보다 '지금 사용자의 상황에 맞는 실행 가능한 다음 행동을 어떻게 추천할까?'에 집중해, 일정·선호·현재 상황을 분석하고 계획이 어긋났을 때 재조정과 승인 기반 조율까지 돕는 개인화 AI 일정 비서입니다.",
        meta: [
          { label: "유형", value: "AI 기반 개인화 추천 서비스 해커톤" },
          { label: "기간", value: "2026.10–11 (팀 '시계는 워치' 5인)" },
          { label: "역할", value: "Team Lead / Product Planning / UX/UI / Integration QA" },
          { label: "핵심 기술", value: "React Native, Expo, TypeScript, Fastify, LangGraph, Tool Calling, PostgreSQL, pg-boss" },
          { label: "주요 연동", value: "Google Calendar, Gmail, Kakao 경로·장소, ClawOps 음성, Open-Meteo" },
          { label: "기준 모델", value: "gpt-6.1-terra (reasoning: high) · Responses Function Calling" }
        ],
        blocks: [
          {
            type: "comparison",
            title: "Problem Definition — 일정 관리가 아니라 판단의 부담을 줄이다",
            keyMessage: "\"일정을 기록하는 것은 쉬워졌지만, 그 일정을 실제로 실행하기 위한 판단은 여전히 사용자의 몫입니다.\"",
            intro: "내일 중요한 발표가 있는데 오늘 피곤하고 저녁 약속까지 있다면, 빈 시간만 표시하는 캘린더로는 무엇부터 조정해야 할지 결정하기 어렵습니다. PIKKU는 준비·이동시간, 고정 약속, 미완료 작업, 피로도를 함께 해석해 왜 지금 이 행동이 적절한지 설명하는 추천을 목표로 했습니다.",
            columns: [
              {
                tag: "EXISTING TOOLS",
                title: "기존 캘린더·알림 중심 서비스",
                body: "일정을 기록하고 정해진 시각에 알리는 데 집중해, 실제 실행 전후에 필요한 상황 판단 부담을 사용자에게 남깁니다.",
                bullets: [
                  "약속 전 준비·이동·도착 여유를 개인 기준으로 역산하지 않아 출발 시각을 매번 직접 계산",
                  "지연·피로가 생겨도 후속 일정 영향 범위를 따지지 못해 불필요한 전체 수정 또는 무대응 발생",
                  "공동 약속을 옮겨야 할 때 대안 탐색과 상대 조율, 응답 확인 후 반영 흐름이 분리됨"
                ]
              },
              {
                tag: "PIKKU APPROACH",
                title: "PIKKU가 해결하려 한 세 가지 질문",
                body: "해커톤의 'AI 기반 개인화 추천' 주제를 지금 이 사용자에게 실행 가능한 다음 행동 제안으로 해석해 세 가지 질문에 답했습니다.",
                bullets: [
                  "1) 같은 일정이라도 사용자별 준비시간·선호·현재 상황에 따라 다른 계획을 추천할 수 있는가?",
                  "2) 계획이 지연되거나 미완료되었을 때 영향 범위를 따져 필요한 부분만 다시 추천할 수 있는가?",
                  "3) AI의 추천을 실제 일정 변경이나 타인 조율로 연결하면서 사용자 통제권을 유지할 수 있는가?"
                ]
              }
            ],
            callout: "피로·지연 같은 일시적 상황과 준비·이동 선호를 함께 읽어, '어떻게 바꿀까요?'라는 질문에 머무르지 않고 이유와 선택지가 있는 실행 대안을 제안하도록 설계했습니다."
          },
          {
            type: "steps",
            title: "Personalized Experience — 개인화 추천과 Plan → Act → Recover",
            keyMessage: "\"같은 일정이라도, 사용자의 맥락이 다르면 추천도 달라져야 한다.\"",
            intro: "PIKKU는 ① 일정 데이터(고정 약속·유동 작업·기한·반복 루틴), ② 명시적 사용자 선호(준비시간·선호 시간대·이동수단), ③ 사용자가 전달한 일시적 상황(피로·지연·미완료), ④ 필요한 외부 조회 정보(캘린더·장소·이동시간)를 결합해 추천합니다. 입력되지 않은 정보를 임의로 추정하거나 행동 패턴을 자동 학습한 것처럼 다루지 않습니다.",
            steps: [
              {
                num: "01",
                code: "PLAN · 계획",
                title: "맥락 기반 시간·대안 추천",
                desc: "고정 일정, 유동 작업, 명시적 선호와 필요한 외부 정보를 조회해 실행 가능한 시간대와 이유를 제안합니다. 사용자가 선택하기 전에는 기존 일정을 변경하지 않습니다."
              },
              {
                num: "02",
                code: "ACT · 실행",
                title: "준비·출발 안내와 상태 기록",
                desc: "서버 계산 로직으로 역산한 준비·출발 시각과 다음 행동을 안내하고, 사용자가 수행·참석 여부를 직접 체크인하거나 직전 상태를 한 단계 취소할 수 있습니다."
              },
              {
                num: "03",
                code: "RECOVER · 재조정",
                title: "영향 범위 기반 부분 재추천",
                desc: "지연이나 미완료가 발생하면 후속 일정과의 충돌·기한·유효성을 검증해 영향받는 일정만 대안을 제시합니다. 이후 일정에 영향이 없으면 기존 계획을 유지합니다."
              }
            ],
            compare: [
              {
                tag: "TIME CALCULATION EXAMPLE",
                title: "동일한 오후 3시 약속의 개인별 준비 시각 비교",
                body: "오후 3시(15:00) 약속에 이동 30분·도착 여유 10분(출발 14:20)이 필요할 때, Memory의 준비시간에 따라 실행 계획이 달라집니다.",
                bullets: [
                  "준비시간 15분 사용자 → 오후 2시 5분(14:05) 준비 시작 안내",
                  "준비시간 45분 사용자 → 오후 1시 35분(13:35) 준비 시작 안내",
                  "시간 역산은 LLM이 임의로 추정하지 않고 서버 calculatePreparationTimes 계산 로직이 결정적으로 산출"
                ]
              },
              {
                tag: "USER SCENARIO",
                title: "시나리오: \"내일 발표인데 오늘 피곤하고 저녁 약속이 있어\"",
                body: "고정 약속과 유동 작업, 일시적 피로가 겹친 하루에서 PIKKU의 추천·승인·조율 흐름입니다.",
                bullets: [
                  "맥락 조회: 발표·저녁 고정 약속과 저장된 선호를 조회하고, 피로는 일시적 상황으로 구분해 반영",
                  "대안 추천: 가능한 빈 시간과 제약을 검증해 개인 준비 작업 이동 또는 저녁 약속 조정안과 근거를 제안",
                  "승인 경계: 수락한 개인 일정 변경만 반영하며, 공동 약속은 별도 연락 승인·응답 확인·재검증 뒤 적용"
                ]
              }
            ]
          },
          {
            type: "chapters",
            title: "Architecture & Technical Decisions — 개인화 추천의 기술 연결",
            keyMessage: "\"LLM은 맥락을 해석해 대안을 만들고, 서버 Schedule Engine이 계산·충돌·승인 경계를 검증합니다.\"",
            intro: "단일 백엔드(Node.js · Fastify)에서 LangGraph JS 기반 단일 S LLM('gpt-6.1-terra' / high)을 실행하면서, AI의 읽기·계산 도구 호출과 실제 DB 변경·외부 발신 권한을 분리해 개인화 추천과 서비스 안전성을 함께 확보했습니다.",
            chapters: [
              {
                num: "DECISION 01",
                eyebrow: "ORCHESTRATION",
                title: "LangGraph + Tool Calling 기반 선택적 맥락 조회",
                badge: "READ-ONLY TOOLS",
                bullets: [
                  "LangGraph JS StateGraph('reason' ↔ 'read_tool' → 'validate')로 대화 맥락에 따라 일정·Memory·외부 정보·계산 Tool만 선택 호출하도록 구성",
                  "모든 입력에 고정 답변이나 전체 재계획을 강제하지 않고, 단순 감사에는 바로 답하며 부족한 정보만 질문('question')하거나 초안·제안('proposal') 생성",
                  "모델에는 읽기·시간 계산 Tool만 노출하고 일정 쓰기·연락 발신 권한은 배제해 응답 추론과 상태 변경 책임을 분리"
                ]
              },
              {
                num: "DECISION 02",
                eyebrow: "PERSONALIZATION",
                title: "Context & Memory 기반 장기 선호·일시 상황 구분",
                badge: "DATA & CONTEXT",
                bullets: [
                  "PostgreSQL에 확정 일정, 명시적 선호('preference'), 만료 시각('validUntil')을 둔 일시적 상황('situation')을 출처·버전과 함께 분리 저장",
                  "'오늘 피곤함' 같은 일시적 컨디션을 영구 선호로 덮어쓰지 않고, 없는 정보는 임의로 만들어내지 않도록 설계",
                  "PlanningAgentRunner가 활성 키 인덱스(최대 30키)와 bounded 조회(최대 20건·16KiB)로 지금 판단에 필요한 개인화 근거만 제공"
                ]
              },
              {
                num: "DECISION 03",
                eyebrow: "CORE ARCHITECTURE",
                title: "LLM 판단과 Schedule Engine 검증의 완전한 분리",
                highlight: true,
                badge: "KEY DECISION",
                bullets: [
                  "LLM은 사용자 의도와 맥락을 해석해 변경안을 제안하고, 서버 Schedule Engine(assessChanges · calculatePreparationTimes · validateScheduleProposal)이 빈 시간·역산·충돌·고정/완료 일정 보호를 코드로 검증",
                  "AI 제안은 확정 일정과 분리된 'pending' 상태로 저장되며, 사용자가 수락하는 시점에도 제안 버전·만료 시각·최신 scheduleRevision과 맥락 버전을 다시 검사",
                  "AI 추천의 유연성을 유지하면서도 잘못된 시간 계산, 오래된 제안 반영, 승인 없는 일정 변경을 방지하는 핵심 안전장치로 설계"
                ]
              },
              {
                num: "DECISION 04",
                eyebrow: "EXTERNAL EXECUTION",
                title: "추천을 실행으로 연결하는 외부 연동 (구현 vs 검증 구분)",
                badge: "HUMAN IN THE LOOP",
                bullets: [
                  "Google Calendar, Gmail, Kakao 장소/이동시간, Open-Meteo, ClawOps 음성을 사용자별 인증 경계에서 연결",
                  "공동 약속 조정은 추천 → 대상·채널·허용 대안 별도 승인 → 연락 → 응답 검토 → 최신 상태 재검증 → 내부 일정 반영 단계로 분리",
                  "단순 발신 성공을 상대 합의 완료로 취급하지 않고, 상대 수락과 최신 일정 정합성이 확인되기 전에는 원래 약속을 보존"
                ],
                subCards: [
                  {
                    tag: "GMAIL · CALENDAR VERIFIED",
                    title: "이메일 회신·일정 가져오기 검수",
                    desc: "공개 웹 QA에서 테스트 계정 기준 Gmail 실제 발송·회신 조회 → 사용자 확인 → 격리 가상 일정 반영과 시간형 Google Calendar 선택 가져오기를 확인했습니다."
                  },
                  {
                    tag: "VOICE · SIMULATION BOUNDARY",
                    title: "음성 통화 구현과 검증 구분",
                    desc: "ClawOps 관리형 음성 1회 실제 발신·전사 저장(확인 전 불변)은 확인했으나 프롬프트·종료 보완 이후 재실통화는 모의 검증만 진행했고, VoiceML은 설정·모의 중심으로 확인했습니다."
                  }
                ]
              }
            ],
            diagram: {
              label: "PIKKU ARCHITECTURE FLOW · AI AGENT → SCHEDULE ENGINE → USER APPROVAL",
              steps: [
                {
                  role: "APP / WEB",
                  title: "사용자 앱 (Expo / React Native · TypeScript)",
                  detail: "일정·선호·현재 상황을 입력하고, 추천 카드의 변경 전후 비교를 확인해 수락·거절 선택"
                },
                {
                  role: "API SERVER",
                  title: "Fastify API & 인증·요청 검증 (Zod)",
                  detail: "회원 세션 격리, 120초 요청 제한 및 복구, 현재 scheduleRevision·contextRevision 스냅샷 캡처"
                },
                {
                  role: "AI AGENT",
                  title: "LangGraph JS Agent (gpt-6.1-terra / high)",
                  detail: "요청 의도와 맥락을 해석해 필요한 읽기·계산 Tool만 호출하고 개인화된 대안·이유를 구성",
                  branches: [
                    { code: "TOOL", label: "일정·Memory·시간역산 Tool", active: true },
                    { code: "DB", label: "PostgreSQL (일정·선호·승인)", active: true },
                    { code: "EXT", label: "Google·Kakao·날씨·연락 API" }
                  ]
                },
                {
                  role: "ENGINE",
                  title: "Schedule Engine 검증 (서버 결정 로직)",
                  detail: "빈 시간·준비/이동 역산·겹침 충돌·마감·고정/완료 일정 보호를 코드로 검증해 부적합한 제안 차단",
                  highlight: true
                },
                {
                  role: "APPROVAL GATE",
                  title: "사용자 승인 및 최신 상태 재검증",
                  detail: "수락 요청 시 제안 ID·버전·만료 시각·최신 일정 및 맥락 버전을 다시 대조해 유효한 변경만 통과"
                },
                {
                  role: "ACTION / QUEUE",
                  title: "일정 반영 · 승인된 외부 연락 · pg-boss 예약 검토",
                  detail: "내부 일정 DB 확정 저장, 별도 승인된 Gmail·ClawOps 실행, 사용자 설정 시각(예: 09:00/21:00) 정기 검토"
                }
              ],
              stores: [
                { name: "AI Agent", desc: "LangGraph JS · Tool Calling · 맥락 해석과 이유 구성" },
                { name: "개인화 Memory", desc: "PostgreSQL · 선호(장기)와 상황(만료) 출처 구분" },
                { name: "일정 검증", desc: "Schedule Engine · 버전·승인 게이트 · 충돌 방어" },
                { name: "외부 실행", desc: "Google · Kakao · ClawOps · pg-boss · 승인 기반 실행" }
              ],
              techLabel: "TECH STACK BY ROLE",
              techRows: [
                { group: "App / Web", stack: "Expo, React Native, TypeScript", role: "일정·추천·승인 사용자 경험" },
                { group: "Backend", stack: "Node.js, Fastify, Zod", role: "API 및 입력·실행 검증" },
                { group: "AI Agent", stack: "LangGraph JS, Tool Calling", role: "맥락 조회·추천 경로 제어" },
                { group: "Data & Memory", stack: "PostgreSQL", role: "일정·선호·상태 관리" },
                { group: "Scheduling", stack: "pg-boss", role: "예약 작업 실행" },
                { group: "External", stack: "Google Calendar, Gmail, 지도·이동정보, ClawOps", role: "외부 데이터 조회와 승인 기반 연락" },
                { group: "Infra", stack: "Vercel, NAVER Cloud VM", role: "웹·API 실행 환경" }
              ]
            }
          },
          {
            type: "evaluation",
            title: "Implementation & Verification — 실제 구현과 검증",
            keyMessage: "\"추천이 그럴듯한지를 넘어, 실제 일정과 사용자 승인 상태가 일치하는지 검증했습니다.\"",
            intro: "README 및 구현 기록을 기준으로 각 계층의 자동화 테스트 결과와 격리 PostgreSQL 검증, 공개 QA 환경 범위 및 미검증 한계를 엄격히 구분해 확인했습니다.",
            qa: {
              label: "VERIFICATION RECORDS BY SCOPE (NOT SUMMED)",
              badges: [
                { value: "548건 통과", label: "모바일 테스트 (main 통합 시점)" },
                { value: "44건 통과", label: "도메인 테스트 (@pikku/domain)" },
                { value: "56건 통과", label: "API 승인·저장·Calendar 집중 테스트" },
                { value: "2건 통과", label: "별도 임시 PostgreSQL (회원 분리·복구)" }
              ],
              scope: "각 테스트는 실행 시점과 검증 범위가 달라 합산한 단일 최종 지표로 표기하지 않았습니다(API 기본 실행 시 DB 미설정 5건 skip). 추가로 workspace typecheck, JS export, 격리 테스트 DB 기반 실모델·pg-boss 예약 E2E('verify-live-planning.ts --live' 8/8) 및 Vercel 웹과 NAVER Cloud VM API·PostgreSQL 공개 QA 환경 구성 기록이 있습니다.",
              cases: [
                {
                  tag: "VERIFICATION 01",
                  issue: "AI 제안 수락 전 불변 & 최신 상태 재검증",
                  fix: "validateScheduleProposal과 decideProposal이 수락 전 제안을 'pending'으로 분리해 원 일정을 유지하고, 수락 시점에는 scheduleRevision·contextRevision·만료 시각을 재검사해 오래된 제안을 'stale_proposal' / 'expired_proposal'로 차단함을 확인했습니다."
                },
                {
                  tag: "VERIFICATION 02",
                  issue: "사용자별 준비시간 역산 & 불필요한 재계획 방지",
                  fix: "calculatePreparationTimes가 15시 약속(이동 30분·여유 10분) 기준 준비 15분(14:05)과 45분(13:35)을 정확히 구분 산출하고, 지연이 후속 일정에 영향이 없을 때 기존 계획을 유지(no-op)하며 원 일정이 보존됨을 확인했습니다."
                }
              ],
              caveat: "구현·검증 경계: ① 설치형 실기기(iOS/Android) 푸시 알림 울림, HealthKit/Health Connect 실기기 동의·조회, 수정 후 음성 재실통화 전체 흐름은 미검증이며 웹 예약 알림은 미지원입니다. ② JS export는 설치형 바이너리와 구분됩니다. ③ 매시간 자동 재계획, 행동 자동 학습, 정량적 시간 절감·만족도·추천 정확도는 완성 또는 측정 범위가 아닙니다."
            }
          },
          {
            type: "pillars",
            title: "My Contribution — 팀장으로서의 기획과 실행",
            emphasis: true,
            keyMessage: "\"추상적인 개인화 추천 아이디어를 구현 가능한 사용자 경험과 개발 기준으로 구체화하다.\"",
            intro: "Team Lead / Product & UX / PRD / Integration QA / Demo & Presentation — 각 영역 팀원들이 전문 기술(App·Server, DB·Memory, AI Prompt, External·Voice)을 공통 계약 위에서 연결할 수 있도록 제품 경험과 검증 기준을 정리했습니다.",
            pillars: [
              {
                num: "01",
                title: "서비스 방향 및 핵심 경험 정의",
                summary: "AI 개인화 추천 주제를 실행 부담 해소 경험으로 구체화",
                bullets: [
                  "단순 일정 생성·알림을 넘어 Plan → Act → Recover 경험 중심으로 제품 목표 수립",
                  "추천 이유 설명과 사용자 승인 기반 통제권을 서비스 핵심 원칙으로 정의"
                ]
              },
              {
                num: "02",
                title: "PRD·UX/UI 및 핵심 사용자 흐름 설계",
                summary: "복잡한 AI 상태를 사용자가 이해할 수 있는 화면 흐름으로 설계",
                bullets: [
                  "개인화 선호·상황 입력, 부족 정보 추가 질문, 변경 전후 제안 카드, 수락/거절·수정 흐름 설계",
                  "공동 약속 조율 시 연락 승인·응답 대기·실패·재확인 등 예외 UX 상태 정리"
                ]
              },
              {
                num: "03",
                title: "구현 범위와 우선순위 조율",
                summary: "제한된 해커톤 일정 내 핵심 추천·검증·승인 E2E 정렬",
                bullets: [
                  "개인화 추천 → 서버 검증 → 사용자 승인으로 이어지는 핵심 경로를 우선 구현 범위로 확정",
                  "팀원별 산출물이 공통 데이터·API 계약을 기준으로 연결되도록 기능 범위 조율"
                ]
              },
              {
                num: "04",
                title: "통합 QA와 시연·발표 총괄",
                summary: "정상 흐름과 예외 시나리오 검수 및 2분 시연·발표 준비",
                bullets: [
                  "잘못된 일정 변경, 승인 누락, 정보 부족, 외부 연동 미설정/거절 등 예외 상황 집중 QA 수행",
                  "실제 작동 화면 중심의 2분 시연 흐름 구성 및 발표 진행 담당"
                ]
              }
            ],
            runtimeNotes: {
              label: "팀 협업 및 역할 경계",
              items: [
                "LangGraph·Fastify 핵심 실행 구조, PostgreSQL·pg-boss 저장/예약, Agent 프롬프트, Google·Kakao·ClawOps 외부 연동 구현은 각 영역 팀원의 전문 기여이며 본인 단독 구현으로 표기하지 않았습니다.",
                "본인은 팀장으로서 이 기술들이 사용자에게 일관된 개인화 추천 경험으로 이어지도록 PRD·UX 설계·범위 조율·통합 QA와 발표를 담당했습니다(팀원별 상세 역할표는 추후 발표 자료에서 제공 예정)."
              ]
            }
          },
          {
            type: "outcomes",
            title: "Reflection & Resources — 배운 점과 보완 방향",
            intro: "개인화 AI 서비스를 설계하고 팀을 이끌며 얻은 엔지니어링·제품 관점의 교훈입니다.",
            groups: [
              {
                label: "무엇을 배웠는가",
                bullets: [
                  "개인화 AI의 가치는 사용자를 많이 아는 것보다, 지금 판단에 필요한 맥락을 정확히 이해해 실행 가능한 선택을 제안하는 데 있다는 점",
                  "사용자 데이터와 외부 API를 LLM에 넘기는 것만으로는 신뢰를 담보할 수 없으며, 실제 제약을 검증하는 서버 로직과 사용자 최종 승인 구조가 필수적이라는 점",
                  "팀장으로서 AI·백엔드·데이터·UX·외부 연동을 하나의 서비스 목표와 검증 기준으로 연결한 협업 경험"
                ]
              },
              {
                label: "보완 및 확장 방향",
                bullets: [
                  "테스트 OAuth 허용 계정 제한을 벗어난 정식 Google 회원 로그인·서비스별 권한 동의 확장",
                  "임시 터널이 아닌 고정 API 도메인·호스팅 안정화 및 설치형 실기기 알림·건강 데이터 검증",
                  "다양한 맥락 시나리오에서 개인화 추천 품질과 응답 지연을 정량적으로 비교 평가하는 체계 보완"
                ]
              }
            ],
            takeaway: "개인화 AI의 가치는 사용자를 많이 아는 것보다, 지금 필요한 맥락을 정확히 이해해 실행 가능한 선택을 제안하는 데 있습니다."
          }
        ],
        relatedTitle: "관련 자료 및 링크",
        relatedNote: "발표 PPT 및 시연 영상은 추후 사용자가 직접 추가할 예정입니다. 웹앱 링크(Vercel)는 Welcome 화면 접속(HTTP 200)은 확인되나, Google 로그인은 테스트 OAuth 앱 허용 계정 제한이 있으며 웹 번들에 연결된 임시 Cloudflare API 터널이 비활성 상태일 경우 로그인 및 AI 추천 기능 동작이 제한될 수 있습니다.",
        relatedLinks: [
          { label: "GitHub 저장소 (codyssey-hackathon-bbikku) ↗", url: "https://github.com/codyssey-hackerton/codyssey-hackathon-bbikku" },
          { label: "PIKKU 웹 프리뷰 (Vercel) ↗", url: "https://pikku-bbikku-web-preview.vercel.app/" }
        ]
      },
      href: "https://github.com/codyssey-hackerton/codyssey-hackathon-bbikku"
    },
    {
      // [내부 작업 메모 - Shopping Brain]
      // 기존 인계: 10/03 주제 논의, 10/05 비전, 10/06 초기 구현, 10/22 QA.
      // 제출본 README·커밋: 10/20 패키징·검증·README 갱신 확인. 10/23 발표 완료·PASS는 사용자 진술(정확한 발표일 별도 확인 대상).
      // 기간을 10/03–10/23으로 확정하지 않으며, 토스 공식 서비스가 아닌 교육용 팀 프로젝트임.
      id: "shopping-brain",
      title: "코디세이 파이널 · Shopping Brain",
      subtitle: "사용자 조건·대화 맥락과 상품·리뷰 근거를 연결하는 AI 쇼핑 비서 팀 프로젝트",
      category: "projects",
      tags: ["Final Project", "LangGraph", "Hybrid RAG", "TypeScript", "PostgreSQL"],
      art: "shopping",
      cover: "images/shopping-brain-cover.png",
      example: false,
      summary: "5인 팀장으로 기획부터 프론트·백엔드·Brain 연동을 총괄하며, LangGraph와 Hybrid RAG로 찾은 추천 후보를 Commerce 서버 검증과 연결한 AI 쇼핑 비서 프로젝트입니다.",
      sections: [
        ["개요", "코디세이 AI 네이티브 파이널 프로젝트에서 5인 팀장으로 참여해 사용자 조건·대화 맥락을 상품·리뷰 근거와 연결하는 AI 쇼핑 비서를 개발했습니다."]
      ],
      caseStudy: {
        categoryLabel: "코디세이 AI 네이티브 Final Project · AI 쇼핑 비서",
        headline: "AI의 추천을,\n검증 가능한 쇼핑 경험으로 연결하다.",
        intro: "코디세이 AI 네이티브 파이널 프로젝트에서 5인 팀장으로 참여해, 사용자의 대화 맥락을 이해하고 실제 상품·리뷰 근거를 바탕으로 추천하는 AI 쇼핑 비서를 개발했습니다.\n프로젝트 기획 당시 참고한 토스 AI Engineer(Brain) 채용 요구 역량을 바탕으로, 단순 쇼핑몰 클론이 아니라 AI Agent·RAG·Commerce를 하나의 서비스 경험으로 연결하는 데 집중했습니다.\n(토스쇼핑 경험을 참고한 교육용 팀 프로젝트이며 토스의 공식 서비스가 아닙니다.)",
        meta: [
          { label: "프로젝트 · 기간", value: "Shopping Brain · 2026.10" },
          { label: "유형", value: "코디세이 AI 네이티브 Final Project (5인 팀)" },
          { label: "역할", value: "Team Lead / Product Planning / Frontend & Backend / Brain Integration" },
          { label: "핵심 기술", value: "LangGraph, Hybrid RAG, TypeScript, React 19, Node.js 24, PostgreSQL" }
        ],
        blocks: [
          {
            type: "comparison",
            title: "Problem Definition — 왜 이 문제를 선택했는가?",
            keyMessage: "\"사용자의 조건을 이해하면서도, 실제 데이터에 근거한 AI 추천을 만들 수 있을까?\"",
            intro: "프로젝트 기획 당시 AI Engineer 직무에서 요구하는 의도 파악·RAG·도구 연동·맥락 관리·평가 역량을 실제 작동하는 커머스 서비스 안에서 구현해보고자 했습니다.",
            columns: [
              {
                tag: "USER EXPERIENCE",
                title: "사용자 탐색 과정의 문제",
                body: "기존 온라인 쇼핑에서는 원하는 상품을 찾기 위해 검색 조건을 반복해 바꾸고, 상세·옵션과 수많은 리뷰를 직접 대조해야 합니다.",
                bullets: [
                  "조건을 추가하거나 바꿀 때마다 이전 맥락이 끊겨 다시 설명·검색해야 하는 피로가 큼",
                  "예산·용도·리뷰 성향처럼 복합적인 자연어 기준을 한 번에 비교하기 어려움"
                ]
              },
              {
                tag: "AI SYSTEM",
                title: "기존 대화형 AI 추천의 문제",
                body: "일반 대화형 AI는 자연스럽게 답할 수 있지만 실제 상품 가격·옵션·리뷰 근거와 연결되지 않으면 추천 결과를 신뢰하기 어렵습니다.",
                bullets: [
                  "존재하지 않는 상품·옵션이나 배송비가 빠진 가격을 말하면 실제 구매 경험으로 이어지지 않음",
                  "리뷰 기반 설명 역시 실제 해당 상품의 리뷰 근거와 대조되지 않으면 환각 위험이 큼"
                ]
              }
            ]
          },
          {
            type: "metrics",
            title: "Data & Constraints — 데이터와 제약",
            keyMessage: "\"AI가 추천하는 정보는 실제 Commerce 데이터와 일치해야 한다.\"",
            intro: "단순히 데이터가 크다는 점이 아니라, 아래 카탈로그 구조(test_items2 기준 · 현재 운영 실시간 수치 아님)에서 데이터 정합성과 근거 일치를 보장해야 했기 때문에 RAG 검색 뒤 서버 검증 계층이 필요했습니다.",
            stats: [
              { value: "1,500개", label: "상품 (Products)", caption: "beauty · fashion · food · living 4개 카테고리" },
              { value: "1,917개", label: "옵션 (Variants)", caption: "상품별 옵션·가격·식별자 관계 유지" },
              { value: "46,100개", label: "리뷰 (Reviews)", caption: "test_items2 카탈로그 연동 기준 규모" }
            ],
            constraints: [
              { num: "01", title: "상품·옵션·리뷰 ID 및 데이터 관계 유지", desc: "추천 카드가 실제 상세·장바구니 흐름으로 이어지려면 카탈로그 원본 ID와 옵션 식별자가 정확히 일치해야 합니다." },
              { num: "02", title: "실수집 리뷰와 합성 리뷰 출처 구분", desc: "검색된 리뷰의 REAL / SYNTHETIC 출처를 보존하고 표본을 전체 통계처럼 과장하지 않도록 제한해야 합니다." },
              { num: "03", title: "가격·배송비와 사용자 예산 조건 정합성", desc: "'2만원대' 같은 자연어 예산을 상품가와 확인된 배송비 합계 기준으로 엄격하게 필터링해야 합니다." },
              { num: "04", title: "검색 근거와 AI 설명 사이의 일치", desc: "RAG가 찾은 후보라도 Commerce 서버에서 가격·조건·리뷰 근거를 다시 검증한 범위 안에서만 설명해야 합니다." }
            ],
            callout: "이러한 제약 때문에 Hybrid RAG 검색 결과를 곧바로 사용자에게 노출하지 않고, Commerce 서버에서 가격·옵션·근거를 재검증하는 구조로 설계했습니다."
          },
          {
            type: "chapters",
            title: "Approach & Key Decisions — 핵심 기술과 설계 판단",
            chapters: [
              {
                num: "DECISION 01",
                eyebrow: "Agent & Retrieval Flow",
                title: "LangGraph Agent 분기 제어와 Hybrid RAG",
                badge: "대화 상태 · 검색 결합",
                bullets: [
                  "[LangGraph 분기 설계] prepare → route 진입 후 요청 성격에 따라 일반 대화(converse), 특정 상품 리뷰 요약(review-summary), 탐색 조건 갱신(plan → clarify | retrieve → respond)으로 분기했습니다.",
                  "[상태·중복 실행 제어] Shopping Plan으로 탐색 조건을 유지하고, Brain PostgreSQL Checkpointer·Turn Lock·Fencing을 통해 이전 실행 결과가 최신 상태를 덮어쓰지 않도록 구성했습니다.",
                  "[Hybrid RAG 검색] 외부 DGX RAG API(POST /v1/rag/search)에서 키워드 일치를 잡는 BM25와 의미 검색을 보완하는 Dense Vector 검색 결과를 RRF(k=60)로 결합해 후보와 리뷰 근거를 확보했습니다."
                ]
              },
              {
                num: "DECISION 02",
                eyebrow: "Core Architectural Choice",
                title: "Agent 판단과 Commerce 서버 검증의 책임 분리",
                badge: "핵심 설계 원칙",
                highlight: true,
                bullets: [
                  "[AI(Brain)의 책임] 사용자의 자연어 의도와 조건 변화를 해석하고, 필요한 경로/도구를 선택한 뒤, 검증된 후보 범위 안에서 이해하기 쉬운 추천 이유와 리뷰 요약을 생성합니다.",
                  "[Commerce 서버의 책임] 상품·옵션 ID 유효성, 배송비 포함 가격 합계 필터, 원본 리뷰 ID 기준 중복 제거 및 정렬, 세션·권한·CSRF 검증 등 정확성이 필요한 규칙을 결정론적으로 검증합니다.",
                  "[선택 이유] LLM의 강점인 자연어 문맥 해석을 최대한 살리면서도, 가격 오계산·없는 옵션 추천·근거 없는 장점 서술 같은 커머스 치명 오류를 코드로 차단하기 위한 선택입니다."
                ]
              }
            ],
            diagram: {
              label: "VERIFIED ARCHITECTURE & GRAPH FLOW (src/brain/graph.ts · README 기준)",
              steps: [
                { role: "ENTRY", title: "사용자 요청 및 대화 맥락", detail: "React 19 쇼핑·채팅 UI → Node.js API (세션·권한·CSRF 검증)" },
                {
                  role: "ORCHESTRATION",
                  title: "LangGraph Agent — 의도 판단 · 분기 선택",
                  detail: "prepare → route (BRAIN_ROUTE_MODE 기반 조건 분기 & Shopping Plan 유지)",
                  branches: [
                    { code: "converse", label: "일반 대화 · 안내" },
                    { code: "review-summary", label: "특정 상품 리뷰 요약" },
                    { code: "plan → clarify", label: "조건 부족 시 질문" },
                    { code: "plan → retrieve", label: "상품 검색 경로", active: true }
                  ]
                },
                { role: "RETRIEVAL", title: "Hybrid RAG — 상품·리뷰 근거 검색", detail: "외부 DGX RAG API (BM25 + Dense Vector → RRF 결합 · Tailscale/TLS 연동)" },
                { role: "VERIFICATION BOUNDARY", title: "Commerce API — 상품·옵션·가격·근거 검증", detail: "카탈로그 ID 확인 · 배송비 합계 필터 · 리뷰 ID 중복 제거 · Ranking · 소유권/Fencing", highlight: true },
                { role: "RESPONSE", title: "검증된 추천 및 근거 기반 설명", detail: "LLM(Claude 등)이 검증된 후보와 확인된 리뷰 근거 범위 안에서 추천 이유 설명" }
              ],
              stores: [
                { name: "Brain PostgreSQL", desc: "대화 · Long-term Memory · Checkpoint" },
                { name: "업무 PostgreSQL", desc: "사용자 · 찜 · 카트 · 주문" },
                { name: "DGX PostgreSQL (Read-Only)", desc: "상품 · 옵션 · 리뷰 (test_items2)" }
              ]
            }
          },
          {
            type: "evaluation",
            title: "Evaluation & Findings — 실험과 검증",
            keyMessage: "\"AI 추천의 품질은 모델의 답변뿐 아니라 검색 근거와 실제 서비스 동작까지 검증해야 한다.\"",
            experiments: {
              label: "A. 팀 RAG 임베딩 비교 실험 (오프라인 비교)",
              scope: "팀(RAG 담당)에서 test_items2 beauty 범주(상품 781개 · 리뷰 34,545개 · 청크 78,595개)에 대해 BM25 Top 20 + Dense Top 20 RRF(k=60) 조건으로 비교한 기록입니다. (작성자 단독 실험 성과가 아님)",
              metricLabel: "Hit@1 (긍정 질의 10개)",
              rows: [
                { name: "BM25 단독", dim: "Sparse", hit1: 60, count: "6/10", mrr: "0.767" },
                { name: "BM25 + MiniLM-L12-v2", dim: "384d", hit1: 40, count: "4/10", mrr: "0.595" },
                { name: "BM25 + multilingual-e5-large", dim: "1,024d", hit1: 80, count: "8/10", mrr: "0.883", top: true },
                { name: "BM25 + BGE-M3 dense", dim: "1,024d", hit1: 80, count: "8/10", mrr: "0.900", top: true },
                { name: "BM25 + Qwen3-Embedding-0.6B", dim: "1,024d", hit1: 80, count: "8/10", mrr: "0.883", top: true }
              ],
              caveat: "범주 내 긍정 질의 10개와 임시 규칙 라벨을 사용한 제한적 오프라인 실험이므로 전체 추천 정확도·만족도를 입증한 수치로 해석할 수 없습니다. 범위 밖(OOD) 질의 2건에서도 모두 상품을 반환해 별도 거절 기준이 필요하며, 기존 서비스 벡터(384d MiniLM)와 1,024d 모델은 인덱스·차원 정합 후 전환해야 함을 확인했습니다."
            },
            qa: {
              label: "B. 서비스 QA 및 회귀 테스트",
              badges: [
                { value: "58/58 PASS", label: "핵심 회귀 테스트 (2026-10-20 패키징)" },
                { value: "PASS", label: "Typecheck / Frontend Build" },
                { value: "5인 팀 내부 QA", label: "팀원 전원 사용자 관점 테스트" }
              ],
              scope: "단위·계약 회귀 테스트 통과와 개발 중 내부 QA 피드백 반영은 실제 Claude 응답·외부 DGX 전체 실시간 E2E 검증과 구분해 기록했습니다.",
              cases: [
                {
                  issue: "예산·배송비 범위 및 리뷰 정렬 불일치",
                  fix: "'2만원대', '1~3만원대' 요청 시 배송비 포함 합계 기준으로 필터링하고, 동일 리뷰의 여러 청크를 원본 리뷰 ID 기준으로 중복 제거해 집계하도록 개선했습니다."
                },
                {
                  issue: "특정 상품 리뷰 요청의 오분류 & 조건 반복 질문",
                  fix: "상품 리뷰 요청을 review-summary 전용 경로(productId·목록 번호·페이지 컨텍스트)로 분리하고, 명확한 조건은 Shopping Plan에 유지해 불필요한 재질문을 줄였습니다."
                }
              ]
            }
          },
          {
            type: "pillars",
            title: "Delivery & My Contribution — 서비스 통합과 나의 기여",
            keyMessage: "\"AI 기술을 사용자에게 실제로 작동하는 하나의 서비스 경험으로 연결하다.\"",
            emphasis: true,
            pillars: [
              {
                num: "01",
                title: "프로젝트 방향 설정",
                summary: "5인 팀장으로서 공통 목표 조율",
                bullets: [
                  "팀원들의 서로 다른 관심사와 강점을 조율해 직무 역량을 보여줄 수 있는 Shopping Brain 중심 목표 수립",
                  "단순 쇼핑몰 구현이나 모델 실험으로 흩어지지 않고 하나의 사용자 경험으로 모이도록 범위 관리"
                ]
              },
              {
                num: "02",
                title: "서비스 기획 · 풀스택 구현",
                summary: "탐색부터 AI 채팅까지 핵심 흐름 구현",
                bullets: [
                  "상품 탐색, 상세, 옵션, 장바구니, AI 채팅 등 서비스 요구사항과 사용자 흐름 정의",
                  "React 19 프론트엔드 화면과 Node.js/TypeScript 백엔드 API 연동 구현"
                ]
              },
              {
                num: "03",
                title: "Brain · Commerce 시스템 통합",
                summary: "AI 응답이 실제 쇼핑 화면과 이어지게 연결",
                bullets: [
                  "쇼핑 UI, Commerce API, LangGraph Brain 결과가 단일 서비스 흐름으로 이어지도록 통합",
                  "추천 상품 카드에서 실제 상세 정보와 개인화 선호 관리까지 끊김 없이 연결"
                ]
              },
              {
                num: "04",
                title: "QA 개선 · 외부 테스트 환경 조율",
                summary: "사용자 피드백을 시스템 개선으로 연결",
                bullets: [
                  "팀 내부 QA 피드백을 UI·의도 판단·검색·데이터 검증 원인별로 분류해 수정 요구사항 반영",
                  "제출용 회귀 검증과 외부 QA 접속 흐름에서 동작을 확인하며 완성도 보완"
                ]
              }
            ],
            runtimeNotes: {
              label: "구현된 시스템 구성 및 QA 접속 범위 (상용 24시간 운영과 구분)",
              items: [
                "[웹 · API] React 19 쇼핑몰·AI 채팅 UI와 Node.js 24 / TypeScript 백엔드 API (세션·권한·CSRF 검증)",
                "[AI · 상태 DB] LangGraph AI Brain과 Brain PostgreSQL(대화·Memory·Checkpoint) / 업무 PostgreSQL 분리",
                "[외부 RAG · QA 접속] Tailscale 기반 외부 DGX 카탈로그·RAG 연동 및 로컬 서버 + Cloudflare Tunnel 외부 QA 접속 구성 (상용 무중단 운영이나 전체 공개 E2E 완료로 확대 표기하지 않음)"
              ]
            }
          },
          {
            type: "outcomes",
            title: "Reflection — 배운 점",
            takeaway: "좋은 AI 서비스는 그럴듯한 답변을 생성하는 데서 끝나지 않고, 실제 데이터와 연결된 신뢰할 수 있는 결과를 제공해야 합니다.",
            groups: [
              {
                label: "설계와 리딩을 통해 얻은 핵심 인사이트",
                bullets: [
                  "[판단과 검증의 경계 설계] LLM에게 모든 결정을 맡기기보다, 자연어 해석·설명 역할과 서버의 결정론적 검증 역할을 분리할 때 서비스 신뢰도가 생긴다는 점을 체감했습니다.",
                  "[기술과 경험의 연결] 5인 팀장으로서 프론트엔드·백엔드·RAG·에이전트·DB가 각자 동작하는 데 그치지 않고 사용자가 체감하는 하나의 쇼핑 흐름으로 맞물리게 조율하는 경험을 쌓았습니다."
                ]
              }
            ]
          }
        ],
        relatedTitle: "Resources — 관련 자료",
        relatedNote: "발표 PPT 원본과 서비스 스크린샷·아키텍처 원본 이미지는 다음 단계에서 추가할 예정입니다.",
        relatedLinks: [
          { label: "GitHub 제출용 저장소 (소스 · README · 비교 보고서) ↗", url: "https://github.com/hongbinwee/codyssey-final-project-toss-shopping-ai-brain" }
        ],
        relatedCards: [],
        media: []
      },
      href: "https://github.com/hongbinwee/codyssey-final-project-toss-shopping-ai-brain"
    },
    {
      // [내부 작업 메모 - 자녀 맞춤형 AI 매니저]
      // 9/16 기능명세 기록, 9/17 디자인 기록(Figma 13개 화면), 9/18 제품 방향·설계 인계(실제 iPhone AI 통화 구현·실기기 검증 전 상태 구분).
      // 11/14 사용자 진술: 직접 개발하며 AI·Tool Calling 공부 중. '9월~현재 완성 서비스 운영'으로 표기하지 않음. 전체 개발 기간·종료일 미확정.
      // FRID.AI 및 SafeCert(Alnair)와 별개 아이템이며, 똑똑용돈의 '모두의창업_2' 폴더명과 혼동하지 않음.
      id: "child-ai-manager",
      title: "모두의창업 · 자녀 맞춤형 AI 매니저",
      subtitle: "학원 업무 관찰과 학부모 질문에서 출발한 자녀 돌봄 AI 구상·개발",
      category: "projects",
      tags: ["AI Care Manager", "Product Design", "Tool Calling"],
      art: "childcare",
      cover: "images/child-ai-manager-cover.jpg",
      example: false,
      summary: "학원 현장 업무 관찰과 학부모의 반복 질문에서 출발해 자녀 돌봄·일정·소통을 돕는 AI 매니저를 구상·개발하는 프로젝트입니다.",
      sections: [
        ["개요", "학원 업무 관찰과 학부모 질문에서 출발한 자녀 돌봄 AI 구상·개발 프로젝트입니다. (기능명세·설계 인계 자료 시기: 2026.09, 이후 직접 개발·Tool Calling 학습 진행)"]
      ],
      caseStudy: {
        categoryLabel: "모두의창업 · 개인 AI 서비스 기획 및 개발 (2026.09부터)",
        headline: "부모에겐 안심을, 자녀에겐 자신만의 AI 비서를\n부모가 직접 확인하기 어려운 순간, AI가 먼저 묻고 필요한 행동을 연결하는 자녀 전담 매니저.",
        intro: "학원 행정 업무를 경험하며 출결 시스템이 존재하는데도 자녀의 도착 여부와 일정을 확인하려는 학부모의 문의가 반복되는 문제를 발견했습니다.\n단순히 알림을 더 보내기보다는, 자녀의 상황을 직접 확인하고 그 결과와 필요한 다음 행동을 부모에게 전달하는 AI 매니저를 구상했습니다.\n이를 바탕으로 사용자 문제 조사, 경쟁 서비스 분석, PRD, 부모·자녀 UX/UI, Agent 실행 정책 및 기술 구조를 설계하고 개발·학습을 추진하고 있습니다.",
        meta: [
          { label: "유형", value: "개인 AI 서비스 기획·개발" },
          { label: "관련 활동 기록", value: "2026.09부터 (기획·설계 → 개인 개발 추진)" },
          { label: "주요 역할", value: "Product Owner / Problem Discovery / UX/UI / AI Service Design" },
          { label: "대상 사용자", value: "10대 자녀를 둔 맞벌이 부모와 자녀" },
          { label: "핵심 설계 영역", value: "Agentic AI · Tool Calling · Context · Workflow · Voice AI · iOS UX" },
          { label: "진행 상태", value: "기획·제품 설계 중심 (실서비스·실기기 통합 검증 전)" }
        ],
        blocks: [
          {
            type: "comparison",
            title: "Problem Discovery — 현장에서 발견한 문제",
            keyMessage: "\"정보가 없는 것이 아니라, 확인되지 않은 상황을 해석하고 해결할 사람이 필요했습니다.\"",
            intro: "학원 행정팀 근무 중 출결 시스템이 있는데도 학부모의 확인 문의가 반복됐습니다. 출결 누락이나 알림 오류, 부모·자녀 간 통화 가능 시간 불일치, 잦은 확인 연락을 간섭으로 느끼는 자녀의 반응 때문에 단순 정보 전송만으로는 안심이 되지 않았습니다.",
            columns: [
              {
                tag: "EXISTING ALERTS · 기존 방식",
                title: "기존 출결·위치 알림의 구조적 한계",
                body: "출결·위치 정보를 그대로 알리기만 할 뿐, 왜 확인되지 않는지 이유를 묻고 다음 행동을 연결하지 못합니다.",
                bullets: [
                  "흐름: 출결·위치 정보 → 일방향 알림 → 부모가 직접 연락해 확인",
                  "출결 기록이 없다는 사실만으로 자녀가 실제 결석했거나 위험 상태라고 단정할 수 없음",
                  "부모가 일하는 중이거나 통화 타이밍이 어긋나면 확인 자체가 지연됨"
                ]
              },
              {
                tag: "PROPOSED APPROACH · AI 매니저",
                title: "상황을 묻고 이유·다음 행동을 연결하는 접근",
                body: "부모가 직접 연락하기 어려운 순간, AI가 일정과 신호를 바탕으로 자녀에게 이유를 확인하고 부모에게 브리핑합니다.",
                bullets: [
                  "흐름: 일정·상황 신호 → AI 확인 → 자녀 응답·이유 파악 → 부모 브리핑 및 후속 조치",
                  "단순 알림 추가 대신 확인된 사실·관측 신호·아직 모르는 내용을 구분해 판단 부담 경감",
                  "※ 학원 현장 경험에서 출발한 문제의식이며, 문의량 등을 객관적 시장 통계로 일반화하지 않음"
                ]
              }
            ],
            callout: "핵심 질문: \"부모가 직접 연락하지 못하는 순간, AI가 상황을 확인하고 필요한 조치를 대신 연결할 수 있을까?\""
          },
          {
            type: "steps",
            title: "Product Concept — 알림을 넘어 AI가 확인하고 대응하다",
            keyMessage: "\"자녀를 감시하는 AI가 아니라, 필요한 순간 도와주는 AI 매니저.\"",
            intro: "맞벌이 부모의 안심을 돕되 자녀에게도 일정을 챙겨주는 개인 비서 경험을 함께 설계했습니다. 아래 6단계는 학원 도착 예정 시간이 지나고 출결 기록이 없을 때 제품이 목표로 하는 서비스 흐름입니다.",
            steps: [
              {
                num: "01",
                code: "COMPARE",
                title: "일정·신호 비교",
                desc: "부모가 설정한 학원·귀가 일정과 출결·위치 등 현재 관측 신호를 대조"
              },
              {
                num: "02",
                code: "POLICY",
                title: "확인 필요 판단",
                desc: "단일 신호로 위험을 단정하지 않고 정해진 정책상 확인이 필요한 상황인지 점검"
              },
              {
                num: "03",
                code: "CARE CHECK",
                title: "AI가 이유 설명·질문",
                desc: "앱 내 음성·채팅으로 자녀에게 연락 이유('18:00 도착 확인 없음' 등)를 밝히고 상황 확인"
              },
              {
                num: "04",
                code: "RESPONSE",
                title: "자녀 상황 전달",
                desc: "자녀가 보충 수업, 이동 지연, 일정 변경 요청 등 실제 사유를 음성 또는 채팅으로 회신"
              },
              {
                num: "05",
                code: "BRIEFING",
                title: "부모 브리핑·조치",
                desc: "확인된 사실·관측 신호·아직 모르는 내용을 구분해 부모에게 브리핑하고 승인 필요 시 요청"
              },
              {
                num: "06",
                code: "ESCALATE",
                title: "무응답·도움 예외 처리",
                desc: "무응답이거나 자녀의 명시적 도움 요청 시 별도 확인·에스컬레이션 정책 적용"
              }
            ],
            compare: [
              {
                tag: "PARENT UX · AI에게 케어 맡기기",
                title: "부모 경험 — 확인 요청과 사실 브리핑·승인",
                body: "일일이 전화하지 않고도 필요한 확인 기준만 맡기면, AI가 정리한 사실과 승인 요청을 받을 수 있도록 설계했습니다.",
                bullets: [
                  "일정·확인 사항 설정 및 AI에게 예약 케어 요청 (자연어 초안/직접 설정)",
                  "자녀의 상황 확인 결과(확인 사실·관측·미확인)와 필요한 다음 행동 안내",
                  "일정 변경·안전 규칙 수정 등 중요한 요청에 대한 최종 승인"
                ]
              },
              {
                tag: "CHILD UX · 나의 AI 매니저",
                title: "자녀 경험 — 일상 일정 도우미와 자율 소통",
                body: "부모의 감시 도구가 아니라, 자신의 일정을 함께 챙기고 필요할 때 도움을 요청하는 비서로 설계했습니다.",
                bullets: [
                  "오늘 일정과 다음 준비물 안내 확인",
                  "필요한 순간 AI의 앱 내 음성·채팅 확인에 응답 및 지연 사유·변경 요청 전달",
                  "도움이 필요할 때 직접 AI에게 요청하거나 텍스트 방식으로 전환 응답"
                ]
              }
            ],
            callout: "구현 구분: 위 사용자 시나리오는 제품이 목표로 하는 설계 흐름(기존 '신호 → 알림'과 대비되는 '확인 → 브리핑' 구조)이며, 전체 단계의 실제 운영 환경 검증 완료를 뜻하지 않습니다."
          },
          {
            type: "chapters",
            title: "Agent Architecture — AI가 어디까지 판단하고 행동해야 하는가?",
            keyMessage: "\"Agentic AI의 유연한 대화·조회 능력은 살리되, 안전 판정과 권한·승인은 결정론적 Care Engine이 통제합니다.\"",
            intro: "Agentic AI는 맥락에 맞춰 필요한 정보를 조회(Tool Calling)하고 행동을 연결하지만, 미성년자와 안전 관련 맥락에서는 AI의 무제한 자율을 허용하지 않도록 책임을 엄격히 분리했습니다.",
            chapters: [
              {
                num: "DECISION 01",
                eyebrow: "CORE ARCHITECTURE",
                title: "대화형 AI와 결정론적 Care Engine의 책임 분리",
                highlight: true,
                badge: "KEY DECISION",
                bullets: [
                  "AI Agent: 자연어 이해, 추가 질문, 앱 내 음성·텍스트 안내 및 부모 브리핑 생성 담당",
                  "Care Engine: 안전 상태 판단, 권한 확인, 부모 승인, 일정 변경 및 에스컬레이션 정책과 상태 전이 담당",
                  "선택 이유: 안전 정책은 동일 입력에 일관·검증 가능한 결과를 내야 하며, LLM이 자연어 답변만으로 위험 여부나 안전 규칙을 임의 확정하지 못하도록 차단"
                ]
              },
              {
                num: "DECISION 02",
                eyebrow: "FALSE ALARM GUARD",
                title: "복합 신호 평가와 관측 불확실성 기반 오탐 방지",
                badge: "SIGNAL POLICY",
                bullets: [
                  "출결 기록 누락, 위치 갱신 지연, 배터리·네트워크 장애는 실제 위험과 다르므로 단일 신호만으로 긴급 상황을 확정하지 않음",
                  "여러 신호의 관계·지속성을 평가하되, 자녀가 직접 도움을 요청한 경우는 일반 확인 절차보다 우선적으로 부모에게 전달",
                  "위치 정보가 오래되었거나 확인 불가일 때는 안전하다고 단정하지도, 위험하다고 단정하지도 않는 정책 유지 (AI 무단 추적·긴급기관 독자 신고 배제)"
                ]
              },
              {
                num: "DECISION 03",
                eyebrow: "CONSENT & CHOICE",
                title: "부모 승인 경계와 자녀의 응답 선택권 설계",
                badge: "CONTROL & PRIVACY",
                bullets: [
                  "자녀의 일상 사유 전달·숙제 기록 등 소통 영역과 귀가시간·안전 규칙 등 중요 변경을 구분",
                  "안전에 영향을 주는 일정·위치 규칙 변경은 반드시 부모 승인과 Care Engine 정책 검증을 거치도록 설계",
                  "자녀가 음성 통화가 곤란한 상황에서 채팅·텍스트로 답하거나 직접 AI에게 도움을 청할 수 있는 선택권 반영"
                ]
              },
              {
                num: "DECISION 04",
                eyebrow: "IN-APP VOICE DESIGN",
                title: "일반 통신 전화가 아닌 앱 내 AI 케어콜 구조 (미검증 구분)",
                badge: "DESIGN / UNVERIFIED",
                bullets: [
                  "초기 iPhone MVP 방향을 통신사 번호 발신 전화가 아니라, 앱 내 전화 수신 경험 기반 양방향 AI 음성 대화로 정의",
                  "관련 설계 문서에 APNs VoIP Push, PushKit, CallKit을 활용한 iOS 수신 흐름이 검토·정의되어 있음",
                  "구분 원칙: 2026년 9월 18일 설계 인계 시점 기준 실제 Voice SDK, 음성 모델, 서버 및 실기기 통합 검증은 미완료 상태이며 실통화 완료로 표기하지 않음"
                ]
              }
            ],
            diagram: {
              label: "CARE ENGINE + AI AGENT CONCEPT FLOW (POLICY & HANDOFF SUMMARY)",
              steps: [
                {
                  role: "SIGNALS",
                  title: "일정·상황 신호 입력",
                  detail: "부모가 설정한 학원·귀가 일정, 출결·위치 관측 상태 및 자녀 직접 요청 신호 수집"
                },
                {
                  role: "CARE ENGINE",
                  title: "Care Engine — 규칙·상태·개입 정책 판단",
                  detail: "단일 신호 오탐 방지, 관측 불확실성 유지, 확인 필요 여부와 개입 조건을 결정론적 정책으로 평가",
                  highlight: true
                },
                {
                  role: "AI AGENT",
                  title: "AI Agent — 필요한 질문·대화·정보 확인",
                  detail: "맥락에 맞춰 Tool·대화 전략을 선택하고, 연락 이유를 설명하며 앱 내 음성·채팅으로 자녀 상황 확인",
                  branches: [
                    { code: "VOICE/CHAT", label: "앱 내 확인 질문·안내", active: true },
                    { code: "CONTEXT", label: "일정·상태 맥락 조회", active: true },
                    { code: "LIMIT", label: "안전 규칙·위험 임의 확정 금지" }
                  ]
                },
                {
                  role: "CHILD",
                  title: "자녀 응답 및 사실 상태 기록",
                  detail: "음성·채팅으로 전달된 지연 사유나 변경 요청을 확인된 사실과 미확인 영역으로 분리 기록"
                },
                {
                  role: "PARENT",
                  title: "부모 브리핑 / 승인 요청 / 추가 확인",
                  detail: "확인된 사실·관측 신호·미확인 내용을 부모에게 브리핑하고, 중요 일정·규칙 변경 시 별도 승인 요청"
                }
              ],
              stores: [
                { name: "Care Engine vs AI", desc: "안전·승인은 규칙 엔진, 설명·질문은 AI 담당" },
                { name: "불확실성 보존", desc: "지연·누락만으로 안전/위험 성급 단정 방지" },
                { name: "문서 경계 명시", desc: "정책 요약 개념도(실서버·Voice SDK 검증 전)" }
              ]
            }
          },
          {
            type: "pillars",
            title: "Research & UX Design — 문제를 제품으로 구체화한 과정",
            keyMessage: "\"현장 경험에서 시작한 문제를 사용자 시나리오와 검증 가능한 서비스 정책으로 구체화했습니다.\"",
            intro: "경쟁 서비스 분석부터 예외 상태를 포함한 시나리오 PRD, 부모·자녀 양면 Figma 13개 화면 명세까지 직접 설계하며 문제의식을 검증 가능한 제품 구조로 발전시켰습니다.",
            pillars: [
              {
                num: "01",
                title: "경쟁 서비스와 대체 행동 조사",
                summary: "출결·위치 알림 앱과 '상황 확인·행동 연결' 경험의 차이 비교",
                bullets: [
                  "출결 알림, 가족 위치 확인, 부모 통제 앱, AI 안부 서비스 등 인접 대안 비교",
                  "단순 위치·알림 노출 vs 이유를 확인해 부모 브리핑·후속 조치로 연결하는 가치 구분"
                ]
              },
              {
                num: "02",
                title: "사용자 흐름과 PRD·상태 전이 작성",
                summary: "정상 흐름과 무응답·오류·권한 경계를 요구사항으로 명세",
                bullets: [
                  "예약 케어콜, 상황 확인콜, 자녀 도움 요청, 부모 브리핑, 일정 변경 승인 시나리오 정의",
                  "무응답, 알림 실패, 정보 부재, 위치 갱신 지연 등 예외 조건까지 상태 전이로 구체화"
                ]
              },
              {
                num: "03",
                title: "부모·자녀 Figma 13개 화면 설계",
                summary: "빈 상태·로딩·확인 불가를 반영한 UX 명세 (네이티브 완성 아님)",
                bullets: [
                  "역할 선택, 부모 홈·승인·브리핑, 자녀 일정·AI 대화·케어콜 수신 등 13개 화면 구성 기록",
                  "피드백 기반 레이아웃 개선 이력 존재 · 13개 화면의 실제 네이티브 앱 완성·배포는 미완료"
                ]
              }
            ],
            compare: [
              {
                tag: "DUAL UX PURPOSE",
                title: "부모와 자녀의 서로 다른 화면 및 사용 목적",
                body: "한 서비스 안에서 감시 갈등을 줄이고 양쪽 모두의 실질적 필요를 채우기 위해 화면 목적을 분리했습니다.",
                bullets: [
                  "부모 화면: '확인된 사실 · 관측 신호 · 아직 모르는 내용' 구분 브리핑 및 중요 변경 승인",
                  "자녀 화면: 오늘 일정·준비물 도우미 및 음성·채팅 선택 응답과 직접 도움 요청"
                ]
              },
              {
                tag: "POLICY MATURITY",
                title: "시나리오를 상태·권한·승인 정책으로 발전시킨 과정",
                body: "추상적 아이디어에서 출발해 예외와 윤리·안전 경계를 다루는 구체적인 제품 정책으로 정리했습니다.",
                bullets: [
                  "'출결 누락 ≠ 결석/위험', '일상 대화 vs 안전 규칙 변경 승인', '직접 도움 요청 최우선 전달' 규칙화",
                  "미성년자 동의·권한·관측 불확실성을 고려해 무단 추적이나 독자적 신고 기능을 배제"
                ]
              }
            ]
          },
          {
            type: "pillars",
            title: "Progress & My Contribution — 진행 범위와 향후 검증 과제",
            emphasis: true,
            keyMessage: "\"문제 발견에서 끝내지 않고, 제품 정책·UX 설계 및 AI Tool Calling 개인 개발로 확장하고 있습니다.\"",
            intro: "Product Owner / Problem Discovery / UX/UI / AI Service Design — 기획·설계 완료 산출물과 이후 직접 개발·학습 중인 범위, 아직 검증이 필요한 과제를 투명하게 구분합니다.",
            pillars: [
              {
                num: "01",
                title: "문제 발견 · 경쟁 조사 · PRD",
                summary: "현장 관찰에서 초기 고객·가치·핵심 시나리오 구체화",
                bullets: [
                  "학원 행정 업무 중 반복 문의 발견 및 초기 고객·문제 정의",
                  "경쟁 서비스·대체 행동 조사 및 제품 원칙·주요 시나리오 PRD 작성"
                ]
              },
              {
                num: "02",
                title: "부모·자녀 UX · Figma 설계",
                summary: "감시 갈등을 줄이고 예외 상태를 반영한 화면·정책 설계",
                bullets: [
                  "케어콜·브리핑·승인 기능명세(9/16 기록) 및 Figma 13개 화면 명세·검토(9/17 기록)",
                  "역할별 화면 목적 분리 및 무응답·오탐 방지 상태 전이 정리"
                ]
              },
              {
                num: "03",
                title: "Agent 설계 · 개인 개발 추진",
                summary: "책임 분리 아키텍처 검토 및 AI·Tool Calling 개발·학습",
                bullets: [
                  "AI Agent·Care Engine 분리 및 iPhone 수신형 음성 세션 설계 인계(9/18 기록)",
                  "이후 직접 개발하며 AI·Tool Calling 학습 진행 중 (완성 서비스 운영 단계 아님)"
                ]
              }
            ],
            compare: [
              {
                tag: "VERIFIED DESIGN ARTIFACTS · 확인된 설계 산출물",
                title: "기획·UX·아키텍처 설계 완료 범위",
                body: "시장조사·화면 수·기능명세 수는 연구와 설계 산출물이며 서비스 사용량이나 만족도 수치가 아닙니다.",
                bullets: [
                  "핵심 고객과 제품 가치 정의 및 케어콜·부모 브리핑·승인 기능 명세",
                  "13개 화면의 Figma UX 명세와 사용자 피드백 기반 수정 기록",
                  "AI·Care Engine 책임 분리 아키텍처 문서 및 iPhone 수신형 AI 음성 세션 설계·인계"
                ]
              },
              {
                tag: "NEXT VALIDATION · 앞으로 검증할 사항",
                title: "아직 검증·완료가 필요한 구현 범위",
                body: "미완료 기능을 완료 성과로 표기하지 않고, 실서비스 연결 전 확인이 필요한 영역을 분리했습니다.",
                bullets: [
                  "실제 iPhone 환경에서 AI 음성 케어콜(APNs VoIP Push·PushKit·CallKit·Voice SDK) End-to-End 동작",
                  "실제 GPS·일정 데이터와 Care Engine 연결, 부모·자녀 인증 및 가족 연결 구현 상태",
                  "예약 트리거·서버·DB·Tool Calling의 현재 구현 범위와 실사용자 테스트 효과 검증"
                ]
              }
            ]
          },
          {
            type: "outcomes",
            title: "Reflection & Resources — 배운 점과 자료 안내",
            intro: "현장의 작은 반복 질문에서 출발해 AI 개입의 한계와 안전 경계를 고민하며 배운 제품·시스템 설계 인사이트입니다.",
            groups: [
              {
                label: "무엇을 배웠는가",
                bullets: [
                  "AI가 먼저 행동하는 서비스일수록 모델 성능만큼 데이터 신뢰성, 권한, 오탐 방지, 사람의 승인, 실패 처리까지 함께 설계해야 한다는 점",
                  "부모의 걱정을 줄이면서도 자녀가 감시받는다고 느끼지 않도록 두 사용자의 경험과 선택권을 균형 있게 설계해야 한다는 점",
                  "현장의 막연한 불편을 상태 전이, 책임 분리 아키텍처, 구체적인 화면 명세로 번역해 나가는 기획·개발 연결 과정"
                ]
              },
              {
                label: "향후 업데이트 계획",
                bullets: [
                  "Figma 화면 설계 시안, 프로토타입 구현 코드 및 기술 아키텍처 상세·시연 자료 순차 반영 예정",
                  "실기기 iOS 음성 세션·Care Engine 연동 검증 결과가 확보되는 대로 검증 범위 기준에 맞춰 갱신"
                ]
              }
            ],
            takeaway: "AI가 먼저 행동하는 서비스일수록, 언제 행동하지 말아야 하는지까지 설계해야 합니다."
          }
        ],
        relatedTitle: "관련 자료",
        relatedNote: "Figma UX 시안, 프로토타입 구현 코드, 상세 기술 아키텍처 및 시연 자료는 추후 정리 후 추가할 예정입니다. 현재 공개 확인 가능한 저장소나 실서비스 배포 URL은 없어 임의 링크를 연결하지 않았습니다.",
        relatedLinks: []
      },
      href: ""
    },
    {
      // [내부 작업 메모 - 자동동 Home Assistant 자동화 추천]
      // GitHub main: 8/23–8/25 구현 기록, KST 9/11 02:05(UTC 9/10) 발표자료 추가 커밋.
      // 구현 상태 문서: 8/23 테스트 기록, 자료 지도: 9/09 제출 준비.
      // 실제 전체 개발 기간·제출일·대회일 미확정, 개인 담당 및 실기기 검증 범위 후속 확인 대상.
      id: "jadongdong",
      title: "자동동 · Home Assistant 자동화 추천",
      subtitle: "스마트홈 기기·습관을 바탕으로 자동화를 추천하고 승인받는 팀 프로젝트",
      category: "projects",
      tags: ["Smart Home", "Home Assistant", "AI Recommendation"],
      art: "smarthome",
      cover: "images/jadongdong-cover.jpg",
      example: true,
      summary: "사용자의 스마트홈 기기 구성과 생활 습관을 바탕으로 자동화 시나리오를 추천하고 승인받아 적용하는 팀 프로젝트입니다.",
      sections: [
        ["개요", "스마트홈 기기·습관을 바탕으로 자동화를 추천하고 승인받는 팀 프로젝트입니다. (구현·발표자료 기록 시기: 2026.08–09)"],
        ["상세 준비 중", "팀 내 본인 담당 역할, 추천 파이프라인 구조, 테스트·실기기 검증 범위 및 발표 자료는 다음 단계에서 확인 후 채울 예정입니다."]
      ],
      href: "https://github.com/Astrophotographer/HA_Automation_Maker"
    },
    {
      // [내부 작업 메모 - 코드게이트 해커톤 똑똑용돈]
      // 메인 기획 초안 v2 본문에 '2026-07-03 아이디어 회의 정리' 기준 명시(Drive 보존 시각 7/06은 종료일이 아님).
      // Codegate git 로컬 정본: 2026-07-21~22 기획·시장조사·명세·랜딩·발표자료 및 7/23 데모데이 무대 사진.
      // PM·조사·기획 참여 및 팀 본선 진출은 사용자 진술 및 데모데이 사진 근거(실제 FastAPI/PostgreSQL 백엔드 코드 미포함 -> 설계 범위로 구분).
      id: "ddokddok-allowance",
      title: "코드게이트 해커톤 · 똑똑용돈",
      subtitle: "자녀의 용돈 지원과 부모님 일상·안부를 잇는 가족 케어 기획",
      category: "projects",
      tags: ["Codegate Hackathon", "Family Care", "PM / Planning"],
      art: "ddokddok",
      cover: "images/ddokddok-cover.jpg",
      example: false,
      summary: "성인 자녀가 시니어 부모님께 드리는 용돈을 일상 미션·보상과 연결하고, AI 요약으로 가족의 소통과 안부 확인을 돕는 가족 케어 서비스 기획 프로젝트입니다.",
      sections: [
        ["개요", "CODEGATE 2026 AI 스타트업 해커톤 본선 진출작으로, 팀 '공간창조' PM으로서 문제 정의·시장조사·서비스 기획·초기 와이어프레임·피칭을 담당했습니다. (활동 자료 시기: 2026.07)"]
      ],
      caseStudy: {
        categoryLabel: "CODEGATE 2026 AI 스타트업 해커톤 · 팀 '공간창조'",
        headline: "용돈을 넘어,\n부모님의 일상과 가족의 마음을 연결하다.",
        intro: "똑똑용돈은 성인 자녀가 시니어 부모님께 드리는 용돈을 일상 미션과 보상으로 연결하고, 축적된 활동 데이터를 AI로 해석해 가족의 소통과 안부 확인을 돕는 서비스입니다.\nCODEGATE 2026 AI 스타트업 해커톤에서 팀 '공간창조'의 PM으로 참여해 문제 정의, 아이디어 구체화, 시장조사, 서비스 기획, 초기 와이어프레임과 피칭 자료 제작에 기여했으며 팀은 해커톤 본선(데모데이)에 진출했습니다.",
        meta: [
          { label: "유형", value: "AI 스타트업 해커톤" },
          { label: "프로젝트 · 시기", value: "똑똑용돈 · 2026.07 (팀 '공간창조')" },
          { label: "역할", value: "PM / Product Planning / Research / UX Wireframing / Pitch" },
          { label: "결과", value: "CODEGATE 2026 본선 진출" },
          { label: "핵심 키워드", value: "AI Family Care · Senior UX · Gamification" },
          { label: "구현 성격", value: "Data-driven Personalization · Non-diagnostic Care" }
        ],
        blocks: [
          {
            type: "comparison",
            title: "Problem Definition — 왜 이 문제를 해결하려 했는가?",
            keyMessage: "\"경제적 지원은 이어지지만, 부모님의 일상을 이해할 기회는 부족합니다.\"",
            intro: "성인 자녀는 부모님께 정기적으로 용돈을 드리지만 물리적 거리와 바쁜 일상 때문에 생활 변화를 지속 확인하기 어렵고, 시니어는 딱딱한 건강·인지 앱을 꾸준히 이용할 동기가 부족하다는 서로 연결된 두 문제에 주목했습니다.",
            columns: [
              {
                tag: "ADULT CHILD · 성인 자녀의 문제",
                title: "경제적 지원과 일상 인지의 단절",
                body: "부모님께 매달 경제적 지원은 이어가지만, 일상적인 변화와 활동 참여 상태를 알 수 있는 자연스러운 접점이 없습니다.",
                bullets: [
                  "안부 전화나 메시지로는 '잘 지낸다'는 자기 신고에 의존해 식사·활동 변화를 놓치기 쉬움",
                  "매일 연락하기 어려운 환경에서 부담 없이 대화를 열 자연스러운 안부 확인 수단 부족"
                ]
              },
              {
                tag: "SENIOR PARENT · 시니어 부모님의 문제",
                title: "의무감과 낙인이 만드는 지속 장벽",
                body: "건강관리나 인지 활동이 시험이나 의무처럼 느껴지면 지속 참여가 어렵고, '치매 예방' 같은 직접적 표현은 심리적 거부감을 줍니다.",
                bullets: [
                  "복잡한 화면 대신 간단하고 익숙한 동기를 통해 부담 없이 참여할 수 있는 경험 필요",
                  "평가받는 느낌이 아니라 일상에서 작은 성취감을 느끼며 가족과 이어지는 구조가 중요"
                ]
              }
            ],
            callout: "문제 정의: \"어떻게 하면 용돈이라는 익숙한 가족의 행동을, 지속적인 일상 참여와 소통으로 연결할 수 있을까?\"\n※ 이 프로젝트는 의료적 진단이나 치매 예방 효과를 입증하는 서비스가 아닙니다."
          },
          {
            type: "pillars",
            title: "Product Strategy — 왜 '용돈'을 선택했는가?",
            keyMessage: "\"새로운 습관을 강요하기보다, 이미 존재하는 행동에 새로운 가치를 연결했습니다.\"",
            intro: "용돈은 이미 가족 사이에서 반복되는 경제적 지원 행동입니다. 여기에 미션 참여와 보상 경험을 결합하면 시니어의 지속 참여 동기를 만들고, 자녀의 지원이 가족 돌봄과 소통으로 이어진다는 가설 아래 세 가지 전략을 세웠습니다.",
            pillars: [
              {
                num: "01",
                title: "참여 동기 · Allowance as a Trigger",
                summary: "용돈을 단순 송금이 아닌 일상 미션 참여 보상 구조로 재해석",
                bullets: [
                  "익숙한 가족 내 경제적 지원을 일상 참여를 여는 출발점으로 전환",
                  "해커톤 범위에서는 실제 금융 거래 대신 포인트·보상 시연 규칙으로 검증"
                ]
              },
              {
                num: "02",
                title: "사용자와 지불자 구분 · Two-sided",
                summary: "실사용 시니어와 비용·안부 니즈를 가진 자녀 경험을 분리 설계",
                bullets: [
                  "시니어 앱: 큰 버튼, 간단한 미션·체크인, 즉각적 보상 확인 중심의 쉬운 경험",
                  "자녀 대시보드: 용돈·보상 규칙 설정과 참여 현황·안부 타이밍 확인 중심"
                ]
              },
              {
                num: "03",
                title: "돌봄의 언어 · Non-diagnostic Care",
                summary: "상태 판정·감시보다 참여와 일상의 변화를 이해해 대화로 연결",
                bullets: [
                  "질병·인지 이상 판정 표현을 배제하고 가벼운 성취 중심 경험 설계",
                  "축적된 참여 변화를 자녀가 자연스럽게 안부를 묻는 대화 계기로 전환"
                ]
              }
            ],
            compare: [
              {
                tag: "SENIOR VALUE · 시니어 부모님",
                title: "쉬운 사용 경험 속 미션 참여와 보상",
                body: "시험처럼 느껴지는 인지 앱이 아니라, 부담 없는 일상 참여가 보상과 가족 응원 확인으로 이어집니다.",
                bullets: [
                  "미션 참여: 일상 체크인·간단한 활동 미션으로 즉각적인 성취감 형성",
                  "보상 확인: 용돈과 연결된 직관적 포인트 및 가족 응원 메시지 확인",
                  "쉬운 사용 경험: 복잡한 설정과 평가 부담을 덜어낸 시니어 친화 동선"
                ]
              },
              {
                tag: "CHILD VALUE · 성인 자녀",
                title: "용돈 지원이 참여 현황·안부 확인으로 연결",
                body: "이미 보내던 용돈 지원이 부모님의 참여 데이터·요약과 이어져 자연스러운 소통의 계기가 됩니다.",
                bullets: [
                  "용돈 지원: 정기 지원과 연계한 미션·보상 조건으로 가족 참여 접점 마련",
                  "참여 현황: 가족 대시보드에서 부모님의 참여 빈도와 일상 변화 파악",
                  "가족 안부 확인: 단순 '잘 지내요'를 넘어 구체적 변화에 맞춘 안부 연락"
                ]
              }
            ],
            callout: "단순 송금 앱도, 단순 인지 게임 앱도 아닌 — 성인 자녀의 용돈 지원과 시니어 부모님의 일상 참여를 연결하는 양면 경험을 차별점으로 잡았습니다."
          },
          {
            type: "steps",
            title: "Product Experience — 서비스는 어떻게 작동하는가?",
            keyMessage: "\"용돈이 활동으로 → 활동이 데이터로 → 데이터가 안부와 재참여로 순환하는 가치 구조\"",
            intro: "성인 자녀의 용돈 지원에서 시작해 시니어의 일상 미션·체크인 참여와 활동 데이터 축적을 거쳐 AI 기반 요약·개인화 제안, 가족 대시보드 소통, 지속 참여로 이어지는 흐름입니다.",
            steps: [
              {
                num: "01",
                code: "PARTICIPATION",
                title: "참여",
                desc: "자녀의 용돈·보상 조건에서 시작해 시니어가 일상 미션·간단한 게임·체크인에 부담 없이 참여"
              },
              {
                num: "02",
                code: "DATA",
                title: "활동 데이터",
                desc: "미션 참여 빈도·활동 종류·수행 변화·체크인 등 생활 기반 참여 이력 축적"
              },
              {
                num: "03",
                code: "AI INSIGHT",
                title: "AI 요약·제안",
                desc: "활동 기록을 가족이 이해할 수 있는 비진단 요약과 개인화된 다음 활동 제안으로 전환"
              },
              {
                num: "04",
                code: "CONNECTION",
                title: "가족 연결",
                desc: "자녀가 가족 대시보드에서 참여 현황과 변화를 확인하고 자연스럽게 안부와 응원 전달"
              },
              {
                num: "05",
                code: "RE-ENGAGE",
                title: "재참여 순환",
                desc: "가족의 관심·응원과 보상 성취감이 다시 다음 일상 미션의 지속 참여 동기로 연결"
              }
            ],
            compare: [
              {
                tag: "TWO-SIDED JOURNEY",
                title: "시니어 참여 경험과 자녀의 안부 대시보드",
                body: "시니어는 복잡한 건강관리 대신 가벼운 일상 미션·체크인으로 보상을 확인하고, 자녀는 대시보드에서 부모님의 참여 현황과 활동 변화를 살펴 자연스럽게 안부를 묻습니다.",
                bullets: [
                  "시니어 화면: 하루 1회 기분·수면 체크인, 짧은 미션과 보상함 확인 중심의 직관적 동선",
                  "성인 자녀 화면: 주간 참여 변화, 안부 요약 및 음성 응원 메시지 등 소통 계기 제공"
                ]
              },
              {
                tag: "SCOPE ALIGNMENT · 근거 대조",
                title: "기획·시연 범위와 후속 구현 범위 구분",
                body: "해커톤 당시 산출물은 기획안·시장조사(V2/V3)·기능/API/보안 명세·웹 랜딩 시안·발표 PPTX 및 초기 Xcode 템플릿으로 확인됩니다.",
                bullets: [
                  "시연·기획 범위: 실제 금융 송금이나 의료 진단 없이 데모 포인트와 시드 데이터 기반 루프로 가치 순환 검증",
                  "후속 기획·개발: 실제 결제 연동, 상시 수집·분석 배치, 실기기 푸시 및 장기 개인화는 후속 범위로 분리"
                ]
              }
            ]
          },
          {
            type: "chapters",
            title: "AI & System Design — AI는 어떤 문제를 해결하는가?",
            keyMessage: "\"단순한 활동 기록을 가족이 이해할 수 있는 정보와 개인화된 경험으로 전환하다.\"",
            intro: "똑똑용돈에서 AI는 건강을 판정하는 도구가 아니라 시니어의 지속 참여를 돕고 가족이 대화를 시작할 맥락을 번역해 주는 역할입니다. 아래 구조는 기획·명세 문서상 설계 원칙이며 실제 코드 구현 여부와 구분해 명시합니다.",
            chapters: [
              {
                num: "DESIGN A",
                eyebrow: "PERSONALIZATION",
                title: "활동 데이터 기반 개인화 추천 설계",
                badge: "DESIGN SPEC",
                bullets: [
                  "시니어의 미션 참여 빈도, 활동 종류, 수행 변화, 선호 콘텐츠를 활용해 개인에게 부담이 적은 다음 활동이나 참여 방식을 제안하는 구조 설계",
                  "실제 운영 환경에서 관측·수집한 데이터와 기획·시연 시나리오상 가정한 시드 데이터를 구분해 다룸"
                ]
              },
              {
                num: "DESIGN B",
                eyebrow: "FAMILY INSIGHT",
                title: "가족 대시보드와 비진단 AI 요약 설계",
                badge: "NON-DIAGNOSTIC",
                bullets: [
                  "활동 기록을 단순 숫자로 나열하는 대신, 가족이 이해하기 쉬운 참여 요약과 변화 정보로 전환해 안부 대화로 연결하는 구조 기획",
                  "정량적 추이 변화는 코드 기반 통계 로직이 계산하고 AI는 비진단 톤의 요약·추천 문장을 생성하도록 책임을 분리, 건강 이상·질병 판정은 배제"
                ]
              },
              {
                num: "DESIGN C",
                eyebrow: "DATA GOVERNANCE",
                title: "데이터·개인정보 보호 원칙과 설계 범위 구분",
                highlight: true,
                badge: "PRIVACY FIRST",
                bullets: [
                  "서비스에 필요한 최소 활동 정보만 수집하고, 직접 식별 정보와 활동 정보를 분리 저장하는 원칙 반영",
                  "가족 구성원별 접근 권한(시니어 동의·공유 범위) 고려 및 의료적 진단 vs 가족 돌봄 참고 정보 구분",
                  "실제 금융 거래와 해커톤용 포인트·보상 시연을 엄격히 구분해 과도한 민감정보 수집 배제"
                ],
                subCards: [
                  {
                    tag: "PLANNED ARCHITECTURE SPEC",
                    title: "기획·명세서 기록 기술 구성 (기술 설계)",
                    desc: "개발 스펙·API 명세 문서에는 iOS(Swift/SwiftUI · 기기 내 STT), Backend(Python/FastAPI · PostgreSQL), Firebase Auth, AWS 인프라 및 Gemini·Qwen 기반 요약/추천 구조가 설계로 기록되어 있습니다."
                  },
                  {
                    tag: "VERIFIED SOURCE BOUNDARY",
                    title: "실제 확인 산출물과의 구분 (구현 경계)",
                    desc: "확인된 로컬 자료(Codegate git)에는 기획·시장조사·명세 문서, 웹 랜딩 시안(HTML/CSS/JS), 발표 PPTX 및 초기 SwiftUI 템플릿만 포함되어 있어 백엔드·AI 모델 실행 코드는 미구현/별도 확인 대상으로 구분합니다."
                  }
                ]
              }
            ]
          },
          {
            type: "pillars",
            title: "My Contribution & Outcome — 나는 무엇을 기여했고 무엇을 얻었는가?",
            emphasis: true,
            keyMessage: "\"문제의식에서 출발한 아이디어를, 사용자 경험과 사업화 가능성을 갖춘 서비스로 구체화하다.\"",
            intro: "PM / Product Planning / Research / UX Wireframing / Pitch — 팀 '공간창조'의 PM으로서 문제 정의부터 시장 검증, 양면 UX 설계, 데모데이 발표 구조화까지 서비스 기획 전반을 이끌었습니다.",
            pillars: [
              {
                num: "01",
                title: "문제 정의와 서비스 아이디어",
                summary: "가족의 경제적 지원과 돌봄 단절 문제에서 '용돈' 출발점 도출",
                bullets: [
                  "정기 용돈과 부모님의 일상·안부 파악이 분리되어 있다는 페인포인트 정의",
                  "건강 감시 앱이 아닌 '용돈 → 미션 참여 → 가족 안부' 콘셉트로 구체화"
                ]
              },
              {
                num: "02",
                title: "시장조사와 서비스 구조화",
                summary: "AI 도구(Claude Code·Codex) 활용 시장조사 및 가설 검증 정리",
                bullets: [
                  "고령자 통계·스마트폰 보유율·부모 경제지원 참고 수치 등 근거 자료 검증",
                  "검증된 인구 통계와 MVP 검증용 사업 가설(가격·전환·참여 지표)을 구분해 정리"
                ]
              },
              {
                num: "03",
                title: "초기 UX 및 와이어프레임",
                summary: "시니어와 성인 자녀라는 서로 다른 두 사용자 흐름 설계",
                bullets: [
                  "시니어 참여·보상 확인 동선과 자녀 가족 대시보드 구조 설계",
                  "비진단·비감시 돌봄 톤을 유지하는 화면 흐름을 초기 와이어프레임으로 구체화"
                ]
              },
              {
                num: "04",
                title: "피칭 및 서비스 가치 전달",
                summary: "문제·솔루션·AI 역할·사업화 가능성을 담은 발표 자료 제작",
                bullets: [
                  "'용돈이 활동으로 → 데이터가 행복(안부)으로' 핵심 메시지 구조화",
                  "CODEGATE 2026 본선 데모데이 피칭 자료 제작 및 발표 서사 정렬"
                ]
              }
            ],
            runtimeNotes: {
              label: "주요 성과 및 역할 경계",
              items: [
                "주요 성과: CODEGATE 2026 AI 스타트업 해커톤 본선 진출 — AI 기반 가족 케어 문제 정의, 제품 콘셉트, 초기 UX 와이어프레임 및 피칭 자료 구체화 (본선 진출 외 별도 수상 성과는 표기하지 않음)",
                "역할 구분: 본인은 PM으로서 문제 정의·시장조사·기획·UX·피칭에 집중했으며, 명세서상의 백엔드·AI·앱 기술을 단독 개발·구현한 프로젝트로 과장하지 않았습니다."
              ]
            }
          },
          {
            type: "outcomes",
            title: "Reflection & Resources — 배운 점과 보완 과제",
            intro: "사용자의 익숙한 일상 행동에서 출발해 서비스 구조와 AI의 역할을 함께 설계했던 PM 경험의 기록입니다.",
            groups: [
              {
                label: "무엇을 배웠는가",
                bullets: [
                  "좋은 서비스는 새로운 기술에서만 시작되는 것이 아니라, 사람들이 이미 하고 있는 행동(용돈 지원) 속에서 해결할 문제를 발견하는 데서 시작된다는 점",
                  "사용자 문제 정의, 참여 동기, 데이터와 AI의 역할, 사업화 가설을 하나의 일관된 서비스 구조로 연결하는 PM의 관점",
                  "시니어 돌봄 영역에서는 AI 기능 추가 자체보다 비진단 언어, 프라이버시 경계, 사용자의 실제 행동 변화를 이끄는 UX가 중요하다는 점"
                ]
              },
              {
                label: "후속 검증 및 보완 방향",
                bullets: [
                  "기획·API/보안 명세에 정의한 포인트 원장, 미션 루프, AI 비진단 요약 기능을 실제 iOS·백엔드 코드로 구현하고 통합 검증",
                  "초기 부모-자녀 파일럿을 통해 24시간 내 첫 미션 완료율, 주 3회 재참여율, 감시 불편 응답 및 유료 멤버십 수용성 실측"
                ]
              }
            ],
            takeaway: "좋은 서비스는 새로운 기술에서만 시작되는 것이 아니라, 사람들이 이미 하고 있는 행동 속에서 해결할 문제를 발견하는 데서 시작될 수 있습니다."
          }
        ],
        relatedTitle: "관련 자료",
        relatedNote: "발표 PPT, 초기 와이어프레임 및 시연 영상은 사용자가 추후 별도로 첨부할 예정입니다. 현재 확인 가능한 공개 GitHub 저장소나 외부 영상 링크가 없어 임의 URL을 추가하지 않았으며, 확인된 기획·시장조사·발표 자료와 데모데이 기록 기준으로 작성했습니다.",
        relatedLinks: []
      },
      href: ""
    },
    {
      // [내부 작업 메모 - Codybot]
      // GitHub main: 6/17 최초 커밋·파일 업로드, 6/18 프롬프트·배포 파일, 6/23 README 갱신(조회된 16개 커밋 기준, 전체 개발 기간을 6/17–6/23으로 확정하지 않음).
      // Zero to One(동료학습 모임)과 별개의 독립 Skill 도구임.
      id: "codybot",
      title: "Codybot · 코디세이 미션 학습 지원 Skill",
      subtitle: "교육 미션 안내를 분석해 개념·학습 순서·제출 체크리스트·AI 결과 검토를 돕는 도구",
      category: "projects",
      tags: ["Agent Skill", "Learning Tool", "Prompt Design"],
      art: "codybot",
      example: true,
      summary: "코디세이 교육 미션 안내문을 분석해 핵심 개념, 권장 학습 순서, 제출 체크리스트, AI 결과물 검토를 돕는 학습 지원 Skill입니다.",
      sections: [
        ["개요", "교육 미션 안내를 분석해 개념·학습 순서·제출 체크리스트·AI 결과 검토를 돕는 개인 제작 Skill 도구입니다. (GitHub 기록 시기: 2026.06)"],
        ["상세 준비 중", "프롬프트·워크플로우 설계 구조와 실제 미션 활용 사례는 다음 단계에서 상세 자료와 함께 채울 예정입니다."]
      ],
      href: "https://github.com/hongbinwee/codybot"
    },
    {
      // [내부 작업 메모 - 모두의창업 FRID.AI]
      // 지원서 Markdown 본문 말미 '최종본 v1.0 · 2026년 5월' 및 상단 '마감 5월 15일 16:00' 기재 확인(5월 지원서 작성 맥락).
      // 다른 MHTML 보존본 9/17 저장일이나 Drive 7월 업로드일을 시작일로 쓰지 않으며, 실제 접수 완료·개발 기간은 미확정.
      // 자녀 맞춤형 AI 매니저와는 별개의 아이템임.
      id: "frid-ai",
      title: "모두의창업 · FRID.AI",
      subtitle: "흩어진 생활 정보와 사용자의 현재 맥락을 연결하는 AI 비서·웨어러블 구상",
      category: "projects",
      tags: ["AI Assistant", "Wearable Concept", "Startup Proposal"],
      art: "fridai",
      example: true,
      summary: "파편화된 생활 정보와 사용자의 현재 맥락을 연결해 능동적으로 돕는 개인 AI 비서·웨어러블 서비스 구상입니다.",
      sections: [
        ["개요", "흩어진 생활 정보와 사용자의 현재 맥락을 연결하는 AI 비서·웨어러블 구상 프로젝트입니다. (지원서 작성 자료 시기: 2026.05)"],
        ["상세 준비 중", "핵심 문제 정의, 컨셉 설계, 페르소나 시나리오 및 기획 상세는 다음 단계에서 자료 확인 후 채울 예정입니다."]
      ],
      href: ""
    },
    {
      // [내부 작업 메모 - 시공간·사내 AX 자동화 및 회계봇]
      // 회계봇 인계 본문 기준 8/02 핵심 API, 8/03 Slack·Agent 설계와 검증, 8/10 대시보드·운영 전환 준비, 8/13 로컬·격리 DB 검증 기록(자료 시기: 2026.08).
      // 8/13 인계 당시 VM 배포·실제 팀 Slack E2E는 다음 단계로 남아 있었으므로 조직 전체의 시작·종료 기간이나 확인된 실사용 성과로 확정 표기하지 않음.
      id: "ax-automation",
      title: "사내 AX 업무 자동화 & Slack 회계봇",
      subtitle: "회계 자동화 API · Slack Agent 설계 · 워크플로우 검증",
      category: "projects",
      tags: ["AX Automation", "Slack Bot", "Agent", "n8n"],
      art: "product",
      example: true,
      summary: "사내 반복 업무 효율화를 위한 AX 자동화 파이프라인과 회계 자동화·Slack 회계봇을 설계하고 로컬·격리 DB 환경에서 검증한 프로젝트입니다.",
      sections: [
        ["개요", "시공간 내 반복적인 회계·행정·리서치 업무의 병목을 줄이기 위해 핵심 API와 Slack·Agent 연동 구조를 설계하고 단계별 검증을 진행했습니다."],
        ["확인된 설계·검증 맥락 (2026.08 자료 기준)", [
          "[핵심 API 및 에이전트 설계] 핵심 API 구현(8/02) 및 Slack·Agent 연동 구조 설계·검증(8/03)",
          "[대시보드 및 격리 DB 검증] 대시보드·운영 전환 준비(8/10) 및 로컬·격리 DB 환경 검증(8/13)",
          "[상세 준비 중] 이후 VM 배포·팀 Slack E2E 연결 시점 구분 및 아키텍처 다이어그램·개인 기여 상세는 후속 자료 확인 후 반영 예정"
        ]]
      ],
      href: ""
    }
    // [1차 이후 추가 검토 후보 메모 — 교육 미션 및 개인 시도]
    // - B2-2 팀 AI 뉴스 자동화 (6/22–6/29 저장소 기록, 개인 오류 처리 설계 vs 팀 Make 통합 구분): https://github.com/woniri/codyssey-B2-2
    // - B1-3 Make·n8n 비교·뉴스 자동화 (6/24–7/04 기록): https://github.com/hongbinwee/codyssey_B1/tree/main/B1-3
    // - B1-2 AI 광고 제작 (6/24–6/25 기록): https://github.com/hongbinwee/codyssey_B1/tree/main/B1-2
    // - A1-3 AX Ground (9/24 제출 패키지·문서 기록): https://github.com/hongbinwee/codyssey-A1/tree/main/A1-3
    // - M1-1 서울 지하철 분석 (9/27–10/01 보고서 정리): https://github.com/hongbinwee/codyssey-m/tree/main/M1-1
    // - M1-2 MySchedule AI (10/26 앱 소스·검증·배포·증빙 기록, PIKKU와 별개): https://github.com/hongbinwee/codyssey-m/tree/main/M1-2
  ],
  // 정렬 기준: 종료 시점(끝난 날짜) 기준 최신순 — 현재 진행 중(`~ 현재`)이 최상단, 이후 종료 월(11월 → 10월 → 9월 → …) 역순 배치
  timeline: [
    {
      // 현재 진행 중 — 최상단 배치 (입사일·전체 운영 기간은 별도 확인 대상)
      side: "left",
      period: "2026.07 ~ 현재",
      title: "시공간 (서울대 인액터스 소속)",
      subtitle: "AX 전략 파트너",
      highlight: "AX 컨설팅 사업화 & 사내 AI 전환 리딩",
      cardId: "sigonggan",
      bullets: [
        "[AX Strategy] AX(AI Transformation) 컨설팅 사업 프로세스 체계화 및 신규 비즈니스 모델(BM) 기획",
        "[Internal AX] 사내 업무 효율화를 위한 AX 도입 전략 수립 및 전환 리딩"
      ]
    },
    {
      // [Zero to One] 8/10 모집 공지, 8/27 design.md·AI PPT 공유, 9/02 키워드 공유 확인. 실제 시작·종료일 미확정(잠정 11월 종료 기준으로 배치).
      side: "right",
      period: "2026.08–11 (잠정)",
      title: "Project Zero to One",
      subtitle: "AI 동료학습(Peer Learning) 모임",
      highlight: "발표·질문·피드백으로 함께 개선하는 동료학습",
      cardId: "zero-to-one",
      bullets: [
        "[Peer Learning] 구성원이 서로 배우고 발표·질문·피드백으로 개선하는 동료학습 모임",
        "[Activity] 8월 소모임 모집·설계 자료(design.md, AI PPT) 및 학습 키워드 공유 진행"
      ]
    },
    {
      // [P] 10/30–11/01 기획·개발·제출 준비 인계, KST 10/31–11/01 main 커밋 기록. 실제 착수·종료일 및 제출 여부는 별도 확인 대상.
      side: "right",
      period: "2026.10–11",
      title: "코디세이 AI 해커톤 · PIKKU",
      subtitle: "AI 일정 비서 팀 프로젝트",
      highlight: "계획·실행·재조정을 돕는 AI 일정 비서 (상세 준비 중)",
      cardId: "pikku",
      bullets: [
        "[Overview] 계획·실행·재조정을 돕는 AI 일정 비서 팀 프로젝트",
        "[Status] 상세 역할·구현 범위·결과 정리 준비 중"
      ]
    },
    {
      // 2026.10월 말 수료 완료 기준 배치
      side: "left",
      period: "2026.06 ~ 2026.10",
      title: "코디세이 AI 네이티브 과정 수료",
      subtitle: "과기부 이노베이션 아카데미 교육",
      highlight: "AI Agent · Multi-Agent Orchestration",
      cardId: "codyssey-ai",
      bullets: [
        "[AI Native] AI Agent, Multi-Agent Workflow, Agent Orchestration 설계 및 실전 프로젝트 수행",
        "[Peer Learning] 과정 내 동료학습 기반 네트워크 모임 직접 기획 및 진행"
      ]
    },
    {
      // [S] 10/03 주제 논의, 10/05 비전, 10/06 초기 구현, 10/20 패키징·README 갱신, 10/22 QA. 10/23 발표·PASS 진술 별도 확인 대상.
      side: "right",
      period: "2026.10",
      title: "코디세이 파이널 · Shopping Brain",
      subtitle: "교육용 AI 쇼핑 비서 팀 프로젝트",
      highlight: "사용자 조건·대화 맥락과 상품·리뷰 근거 연결 (상세 준비 중)",
      cardId: "shopping-brain",
      bullets: [
        "[Overview] 사용자 조건·대화 맥락과 상품·리뷰 근거를 연결하는 AI 쇼핑 비서 팀 프로젝트",
        "[Status] 본인 담당 파트·아키텍처·검증 상세 준비 중"
      ]
    },
    {
      // [C] 9/16 기능명세, 9/17 디자인 기록, 9/18 제품 방향·설계 인계, 11/14 직접 개발·Tool Calling 학습 진술. 전체 기간 미확정.
      side: "right",
      period: "2026.09",
      title: "모두의창업 · 자녀 맞춤형 AI 매니저",
      subtitle: "자녀 돌봄 AI 구상·개발",
      highlight: "학원 업무 관찰과 학부모 질문에서 출발한 돌봄 AI (상세 준비 중)",
      cardId: "child-ai-manager",
      bullets: [
        "[Overview] 학원 업무 관찰과 학부모 질문에서 출발한 자녀 돌봄 AI 구상·개발",
        "[Status] 설계 인계 및 이후 직접 개발·학습 단계 구분 정리 준비 중"
      ]
    },
    {
      // [A] 8/23–8/25 구현·테스트 기록, 9/09 제출 준비, KST 9/11 발표자료 커밋. 전체 기간·실기기 검증 범위 후속 확인 대상.
      side: "right",
      period: "2026.08–09",
      title: "자동동 · Home Assistant 자동화 추천",
      subtitle: "스마트홈 자동화 추천 팀 프로젝트",
      highlight: "스마트홈 기기·습관 기반 자동화 추천 및 승인 (상세 준비 중)",
      cardId: "jadongdong",
      bullets: [
        "[Overview] 스마트홈 기기·습관을 바탕으로 자동화를 추천하고 승인받는 팀 프로젝트",
        "[Status] 개인 담당 역할 및 검증 범위 상세 준비 중"
      ]
    },
    {
      // [KSTA / NIPA] 수료증 제2026-BT-02-0151호 기준 교육기간 2026.08.03 ~ 2026.08.25 — 8/25 종료일 기준 배치
      side: "left",
      period: "2026.08.03 ~ 2026.08.25",
      title: "[KSTA] NIPA-NVIDIA GPU 가속 기반 AI Agent 엔지니어 과정",
      subtitle: "수도권 ICT이노베이션스퀘어 · 정보통신산업진흥원(NIPA)",
      highlight: "NIPA 2단계 수료 · NVIDIA DLI 5개 과정 (LLM · RAG · Diffusion)",
      cardId: "nvidia-dli",
      bullets: [
        "[Certification] NIPA-NVIDIA GPU 가속 기반 AI Agent 엔지니어 과정(2단계) 이수 (2026.08.25 수료)",
        "[NVIDIA DLI] RAG Agents · Prompt Engineering · LLM App Dev · Diffusion Models · 딥러닝의 기초 5개 과정 수료"
      ]
    },
    {
      // [회계봇·AX 자동화] 8/02 핵심 API, 8/03 Slack·Agent 설계·검증, 8/10 대시보드 준비, 8/13 로컬·격리 DB 검증 기록.
      side: "right",
      period: "2026.08",
      title: "시공간 · 회계 자동화 & Slack 회계봇",
      subtitle: "사내 AX 업무 자동화 설계·검증",
      highlight: "핵심 API · Slack Agent 설계 · 로컬/격리 DB 검증",
      cardId: "ax-automation",
      bullets: [
        "[Accounting Bot] 핵심 API 및 Slack·Agent 설계, 대시보드·격리 DB 환경 검증 진행 (2026.08 기록)",
        "[Workflow] 사내 반복 업무 효율화를 위한 AX 자동화 파이프라인 설계"
      ]
    },
    {
      // [D] 7/03 아이디어 회의 기준 메인 기획 초안(7/06 Drive 보존). 본선 행사일·개인 참여 기간 별도 확인 대상.
      side: "right",
      period: "2026.07",
      title: "코드게이트 해커톤 · 똑똑용돈",
      subtitle: "가족 케어 팀 프로젝트",
      highlight: "부모 지원과 일상·안부 확인을 연결한 가족 케어 (상세 준비 중)",
      cardId: "ddokddok-allowance",
      bullets: [
        "[Overview] 부모 지원과 일상·안부 확인을 연결한 가족 케어 팀 프로젝트",
        "[Status] 기획·PM 참여 범위 및 본선 관련 상세 준비 중"
      ]
    },
    {
      // [Codybot] 6/17 최초 커밋, 6/18 프롬프트·배포 파일, 6/23 README 갱신. 전체 개발 기간 미확정.
      side: "right",
      period: "2026.06",
      title: "Codybot · 코디세이 미션 학습 지원 Skill",
      subtitle: "개인 제작 학습 지원 도구",
      highlight: "미션 안내 분석 · 학습 순서 · 체크리스트 · 결과 검토 (상세 준비 중)",
      cardId: "codybot",
      bullets: [
        "[Overview] 교육 미션 안내를 분석해 개념·학습 순서·제출 체크리스트·AI 결과 검토를 돕는 Skill",
        "[Status] 설계 구조 및 활용 사례 상세 준비 중"
      ]
    },
    {
      // [F] 지원서 본문 '최종본 v1.0 · 2026년 5월' 및 '마감 5월 15일 16:00' 기재 기준. 실제 접수일·개발 기간 미확정.
      side: "right",
      period: "2026.05",
      title: "모두의창업 · FRID.AI",
      subtitle: "AI 비서·웨어러블 서비스 구상",
      highlight: "흩어진 생활 정보와 현재 맥락을 연결하는 AI 비서 (상세 준비 중)",
      cardId: "frid-ai",
      bullets: [
        "[Overview] 흩어진 생활 정보와 사용자의 현재 맥락을 연결하는 AI 비서·웨어러블 구상",
        "[Status] 기획 배경 및 서비스 시나리오 상세 준비 중"
      ]
    },
    {
      // 종료일(2025.01) 기준 2024.09 해외봉사보다 상위 배치
      side: "left",
      period: "2023.11 ~ 2025.01",
      title: "(주)리퍼스 청주",
      subtitle: "사무 & 영업직 · 업무 운영체계 구축",
      highlight: "사무·영업 실무 및 엑셀 VBA · 구글 캘린더 자동화 구축",
      cardId: "repers",
      bullets: [
        "[Operations] 리퍼스 청주점 사무·영업 실무 수행 및 일일 발주 입력·처리 전담",
        "[Automation] 엑셀 매크로(VBA) 자동화 프로그램 및 구글 캘린더 연동 일정·업무 관리 체계 구축"
      ]
    },
    {
      side: "left",
      period: "2024.09",
      title: "키르기스스탄 해외 봉사활동",
      subtitle: "봉사활동단체 — 키르기스스탄 현지",
      highlight: "글로벌 현장 봉사 및 프로그램 운영",
      bullets: [
        "[Global Volunteering] 2024.09.14 ~ 09.22 키르기스스탄 현지 봉사활동 참여 및 현장 지원 수행"
      ]
    },
    {
      side: "left",
      period: "2021.04 ~ 2023.11",
      title: "피자마루 유성온천점",
      subtitle: "사장 — 프랜차이즈 매장 창업 및 총괄 운영",
      highlight: "개업 준비부터 인사·운영·고객 응대 총괄",
      cardId: "pizzamaru",
      bullets: [
        "[Store Launch] 인테리어·가맹본사 협의 등 개업 준비 전 과정 의사결정 및 오픈",
        "[Management] 약 2년 8개월간 직원 채용·관리, 고객 응대, 매장 운영 총괄"
      ]
    },
    {
      side: "left",
      period: "2019 ~ 2021",
      title: "군 전역",
      subtitle: "국군홍천병원 제131의무후송중대 · 육군 병장 만기전역",
      highlight: "제131의무후송중대 만기전역",
      bullets: [
        "[Military] 국군홍천병원 제131의무후송중대 복무 및 육군 병장 만기전역 (2019 ~ 2021)"
      ]
    },
    {
      side: "left",
      period: "2016",
      title: "학력",
      subtitle: "한남대학교",
      highlight: "한남대학교",
      bullets: [
        "[University] 한남대학교 중퇴 (2016)"
      ]
    }
  ]
};
