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
      cover: "images/sigonggan-cover.png",
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
      example: true,
      summary: "계획 수립부터 실행, 일정 재조정까지의 흐름을 돕는 AI 일정 비서 팀 프로젝트입니다.",
      sections: [
        ["개요", "계획·실행·재조정을 돕는 AI 일정 비서 팀 프로젝트입니다. (활동 자료 시기: 2026.10–11)"],
        ["상세 준비 중", "문제 정의, 본인 담당 역할, 핵심 기술 결정, 팀 결과 및 시연 자료는 다음 단계에서 검증된 자료에 맞춰 채울 예정입니다."]
      ],
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
      tags: ["Final Project", "AI Shopping Assistant", "RAG / Agent"],
      art: "shopping",
      cover: "images/shopping-brain-cover.png",
      example: true,
      summary: "사용자 조건과 대화 맥락을 상품 데이터·리뷰 근거와 연결해 탐색을 돕는 교육용 AI 쇼핑 비서 팀 프로젝트입니다.",
      sections: [
        ["개요", "사용자 조건·대화 맥락과 상품·리뷰 근거를 연결하는 AI 쇼핑 비서 팀 프로젝트입니다. (코디세이 파이널 교육용 프로젝트 · 활동 자료 시기: 2026.10)"],
        ["상세 준비 중", "문제 정의, 본인 담당 파트, 아키텍처, QA·검증 내용 및 발표 결과는 다음 단계에서 자료 대조 후 채울 예정입니다."]
      ],
      href: "https://github.com/hongbinwee/codyssey-final-project-toss-shopping-ai-brain"
    },
    {
      // [내부 작업 메모 - 자녀 맞춤형 AI 매니저]
      // 9/16 기능명세 기록, 9/17 디자인 기록, 9/18 제품 방향·설계 인계(실제 iPhone AI 통화 구현·실기기 검증 전 상태 구분).
      // 11/14 사용자 진술: 직접 개발하며 AI·Tool Calling 공부 중. '9월~현재 완성 서비스 운영'으로 표기하지 않음. 전체 개발 기간·종료일 미확정.
      // FRID.AI와는 별개의 아이템이며, 똑똑용돈의 '모두의창업_2' 폴더명과 혼동하지 않음.
      id: "child-ai-manager",
      title: "모두의창업 · 자녀 맞춤형 AI 매니저",
      subtitle: "학원 업무 관찰과 학부모 질문에서 출발한 자녀 돌봄 AI 구상·개발",
      category: "projects",
      tags: ["AI Care Manager", "Product Design", "Tool Calling"],
      art: "childcare",
      example: true,
      summary: "학원 현장 업무 관찰과 학부모의 반복 질문에서 출발해 자녀 돌봄·일정·소통을 돕는 AI 매니저를 구상·개발하는 프로젝트입니다.",
      sections: [
        ["개요", "학원 업무 관찰과 학부모 질문에서 출발한 자녀 돌봄 AI 구상·개발 프로젝트입니다. (기능명세·설계 인계 자료 시기: 2026.09, 이후 직접 개발·Tool Calling 학습 진행)"],
        ["상세 준비 중", "지원서·설계 인계 단계와 이후 직접 구현 중인 범위를 구분하여, 문제 맥락·설계 결정·개발 진행 내용을 다음 단계에서 채울 예정입니다."]
      ],
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
    },
    {
      // [내부 작업 메모 - 코드게이트 해커톤 똑똑용돈]
      // 메인 기획 초안 v2 본문에 '2026-07-03 아이디어 회의 정리' 기준 명시(Drive 보존 시각 7/06은 종료일이 아님).
      // PM·조사·기획 참여 및 팀 본선 진출은 사용자 진술이며 본선 행사일·개인 참여 기간·정확한 제출일은 별도 확인 대상.
      id: "ddokddok-allowance",
      title: "코드게이트 해커톤 · 똑똑용돈",
      subtitle: "부모 지원과 일상·안부 확인을 연결한 가족 케어 팀 프로젝트",
      category: "projects",
      tags: ["Codegate Hackathon", "Family Care", "PM / Planning"],
      art: "ddokddok",
      example: true,
      summary: "부모의 경제적 지원(용돈)과 자녀의 일상 공유·안부 확인을 자연스럽게 연결한 가족 케어 팀 프로젝트입니다.",
      sections: [
        ["개요", "부모 지원과 일상·안부 확인을 연결한 가족 케어 팀 프로젝트입니다. (아이디어 회의·기획 초안 자료 시기: 2026.07)"],
        ["상세 준비 중", "기획·PM 참여 범위, 서비스 흐름도, 본선 진출 관련 세부 일정 및 증빙 자료는 다음 단계에서 확인 후 채울 예정입니다."]
      ],
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
