'use strict';

(() => {

// Korean source text maps to the matching English copy.
const english = {
  "김지열의 개발 포트폴리오. RGB·IR 3D 차량 검출·추적, 눈 인식, rPPG, Android 및 임베디드 개발 경험을 소개합니다.": "Jiyeol Kim's engineering portfolio: RGB/IR 3D vehicle detection and tracking, eye detection, rPPG, Android, and embedded development.",
  "김지열 | AI · 비전 개발 포트폴리오": "Jiyeol Kim | AI & Computer Vision Portfolio",
  "영상 AI부터 모바일과 기기까지. RGB·IR 차량 검출·추적, 눈 인식, rPPG와 앱·펌웨어 개발 경험을 소개합니다.": "From vision AI to apps and devices. RGB/IR vehicle tracking, eye detection, rPPG, Android apps, and firmware development.",
  "JIYEOL KIM — AI, Vision, Mobile, Embedded 개발 포트폴리오": "JIYEOL KIM — AI, Vision, Mobile, and Embedded Engineering Portfolio",
  "영상 AI부터 모바일과 기기까지, 직접 구현한 개발 경험입니다.": "Hands-on engineering from vision AI to mobile apps and connected devices.",
  "프로젝트로 바로가기": "Skip to projects",
  "김지열 포트폴리오 처음으로": "Jiyeol Kim portfolio home",
  "메뉴 열기": "Open menu",
  "주 메뉴": "Main navigation",
  "소개": "About",
  "프로젝트": "Projects",
  "개발 경험": "Experience",
  "기술 스택": "Skills",
  "연락하기": "Contact",
  "영상 AI부터": "From vision AI",
  "모바일과": "to apps",
  "기기까지": "and devices",
  "AI·비전 개발자": "AI & Computer Vision Engineer",
  "김지열": "Jiyeol Kim",
  "입니다.": "",
  "영상 모델을 학습하고,": "I train vision models",
  "앱과 기기에서 실제로 동작하게 만듭니다.": "and bring them to life in apps and devices.",
  "대표 프로젝트 보기": "Explore projects",
  "약 6년": "~6 years",
  "개발 경력": "Software development",
  "3개": "3",
  "대표 AI·비전 프로젝트": "Featured AI projects",
  "앱 출시 경험": "Published Android app",
  "RGB와 IR 입력, 3D 차량 검출과 추적을 표현한 개념 시각화. 실제 실행 결과가 아닙니다.": "Concept illustration of RGB and IR inputs, 3D vehicle detection, and tracking. This is not an actual system output.",
  "RGB·IR 차량 검출·추적": "RGB/IR vehicle detection & tracking",
  "시스템 개념도": "System concept",
  "모델을 사용하는": "I build the systems",
  "환경까지 만듭니다.": "that put models to work.",
  "약 6년간 소프트웨어를 개발하며 영상 AI의 데이터 구축·모델 학습부터 Android 앱, 임베디드 펌웨어까지 직접 구현했습니다. 클라우드 서버 관리·마이그레이션과 회사 홈페이지 제작도 담당했습니다.": "Over approximately six years in software development, I have worked on vision datasets and model training, Android apps, and embedded firmware. I have also managed cloud servers, migrated server environments, and built a company website.",
  "IR 카메라용 차량 검출·추적 시스템에서는 검출 모델 교체와 학습, 추적 모듈 연동까지 전체 구성을 단독으로 맡았습니다. 모델을 실제 환경에 적용할 때 생기는 입력·실행·기기 연동 문제를 함께 다룹니다.": "For an IR-camera vehicle detection and tracking system, I independently handled detector replacement, model training, and tracking integration. My work addresses the input, runtime, and device integration challenges of applying models in real environments.",
  "AI·Computer Vision 개발 기회를 찾고 있습니다.": "Open to AI and computer vision engineering opportunities.",
  "경력의 흐름": "Career",
  "비전 AI에서 앱·기기·서버 개발로 경험을 넓혔습니다.": "From computer vision to apps, devices, and server operations.",
  "2022.09 — 현재": "2022.09 — Present",
  "메디아이오티": "MEDI-IOT",
  "연구원 · 기술지원팀": "Researcher · Technical Support Team",
  "영상 AI 모델 학습·검증, Android 앱과 BLE 기기 연동, 펌웨어 개발, 웹·클라우드 운영": "Vision model training and evaluation, Android and BLE integration, firmware development, and web and cloud operations",
  "스마트비전글로벌": "Smart Vision Global",
  "연구원 · 개발팀": "Researcher · Development Team",
  "RGB·IR 영상 기반 3D 차량 검출·추적 시스템 설계, 모델 학습과 통합 개발": "System design, model training, and integration for RGB/IR 3D vehicle detection and tracking",
  "한국수력원자력㈜": "Korea Hydro & Nuclear Power",
  "인턴 · 자동제어파트": "Intern · Automatic Control Team",
  "펌웨어 개발 인턴 경험": "Firmware development internship",
  "대표 프로젝트": "Selected projects",
  "데이터와 모델부터 실제 실행 환경까지,": "From data and models to deployment,",
  "직접 구현한 과정과 확인한 결과를 정리했습니다.": "the work I implemented and the results I verified.",
  "RGB·IR 영상 기반": "RGB/IR-based",
  "3D 차량 검출·추적": "3D vehicle detection & tracking",
  "스마트비전글로벌 · 6개월 · 단독 설계·개발": "Smart Vision Global · 6 months · Sole system developer",
  "문제": "Problem",
  "IR 차량 검출·추적 시스템의 검출 단계 처리 시간을 줄여야 했습니다.": "Reduce detection-stage processing time in an IR vehicle detection and tracking system.",
  "접근": "Approach",
  "검출·3D 추정을 SMOKE로 교체하고 데이터 형식을 변환해 기존 추적 모듈과 연결했습니다. RGB·IR 학습도 직접 진행했습니다.": "Replaced detection and 3D estimation with SMOKE, adapted the data formats, and integrated the existing tracker. I also trained the model on RGB and IR data.",
  "결과": "Result",
  "평균 처리 시간 0.48초 → 0.11초. IR 영상에서 3D 검출·추적 동작을 확인했습니다.": "Average processing time: 0.48 s → 0.11 s. Verified 3D detection and tracking on IR video.",
  "전체 시스템 구성·개발 단독 담당": "Sole responsibility for system design and implementation",
  "개발 과정 자세히 보기": "View project details",
  "실행 결과 이미지 원본 크게 보기": "View the full-size system output image",
  "IR 도로 영상에 차량의 3D 검출 박스가 표시된 실행 화면": "System output showing 3D vehicle bounding boxes on IR road footage",
  "크게 보기 ↗": "View larger ↗",
  "실행 결과": "System output",
  "IR 카메라 입력에서 실행한 3D 차량 검출·추적 시스템 화면입니다.": "The 3D vehicle detection and tracking system running on IR camera input.",
  "약 77%": "~77%",
  "처리 시간 단축": "less processing time",
  "GTX 1660 · 960×480 입력 · 100개 평균": "GTX 1660 · 960×480 input · Average over 100 inputs",
  "기존 QD-3DT 0.48초 → 통합 구성 0.11초": "Original QD-3DT: 0.48 s → Integrated system: 0.11 s",
  "모델 비교 시연 이미지 원본 크게 보기": "View the full-size model comparison demo",
  "같은 얼굴 영상 입력에 대한 PhysNet, RhythmFormer, RhythmMamba의 BPM과 파형을 비교하는 화면": "BPM estimates and waveforms from PhysNet, RhythmFormer, and RhythmMamba using the same face video",
  "모델 비교 시연": "Model comparison demo",
  "모델 3종의 BPM·파형을 비교하는 시연 화면입니다. 기준 심박계 미연결 상태로, 정확도 평가 결과는 아닙니다.": "A demo comparing BPM estimates and waveforms from three models. No reference heart-rate monitor was connected; this is not an accuracy evaluation.",
  "rPPG 기반 심박 추정": "Video-based heart-rate estimation",
  "메디아이오티 · 4개월 · 모델 비교·모바일 추론": "MEDI-IOT · 4 months · Model comparison & mobile inference",
  "얼굴 영상으로 심박을 추정하고, 짧은 촬영 구간과 모바일 환경에서의 실행 가능성을 검토해야 했습니다.": "Evaluate heart-rate estimation from face video using short clips and a mobile runtime.",
  "세 모델의 학습 조건, 5초·10초 입력의 오차와 연산량을 비교해 모바일 적용 모델을 검토했습니다.": "Compared three models across training conditions, 5- and 10-second inputs, estimation error, and computational cost.",
  "모바일 실행 조건을 고려해 RhythmMamba를 선택하고, ONNX 변환과 Android 추론 연동을 구현했습니다.": "Selected RhythmMamba with mobile execution in mind, converted it to ONNX, and integrated inference into Android.",
  "학습 배치 이미지 원본 크게 보기": "View the full-size training batch image",
  "눈 영역과 라벨 박스가 표시된 YOLO 학습 배치 시각화": "YOLO training batch visualization with eye regions and annotation boxes",
  "학습 배치": "Training batch",
  "YOLO 학습 배치 시각화입니다. 최종 검출 결과나 정확도 지표를 나타내는 이미지는 아닙니다.": "A YOLO training batch visualization showing inputs and annotations, rather than final predictions or accuracy metrics.",
  "눈 인식 및 트래킹": "Eye detection & tracking",
  "메디아이오티 · 5개월 · 데이터부터 앱 적용까지": "MEDI-IOT · 5 months · From data to Android integration",
  "앱에서 영상 속 눈 영역을 찾고 움직임을 따라 추적하는 기능이 필요했습니다.": "Locate eye regions in video and track their movement within an app.",
  "눈 영상 데이터를 직접 수집·라벨링하고 YOLO를 학습한 뒤, 검출 결과를 트래킹 기능과 연결했습니다.": "Collected and annotated eye images, trained YOLO, and connected the detections to the tracking component.",
  "직접 학습한 모델의 눈 영역 검출·트래킹을 앱에 적용하고 동작을 확인했습니다.": "Integrated the trained eye detection and tracking model into the app and verified its operation.",
  "데이터 구축": "Dataset development",
  "앱 연동": "App integration",
  "앱과 기기부터 웹과 서버까지": "Apps, devices, web & cloud",
  "직접 맡았던 앱·펌웨어 연계 개발과": "Hands-on app and firmware integration,",
  "웹 제작, 서버 운영 경험을 정리했습니다.": "website development, and server operations.",
  "Android 앱 개발": "Android app development",
  "AgingLoc Google Play 등록 · MEDI-EYE 기기 조작 앱": "AgingLoc on Google Play · MEDI-EYE device-control app",
  "에이징락": "Senior wellness",
  "시니어 대상 디지털 웰니스 Android 앱을 개발하고 Google Play에 등록했습니다. 운동 가이드와 운동 콘텐츠를 제공하는 앱입니다.": "Developed and published AgingLoc, an Android wellness app for older adults with exercise guidance and video content.",
  "제공 기능": "Features",
  "운동 시작 안내와 운동 가이드, 운동 영상 콘텐츠를 모바일 앱으로 제공했습니다.": "Exercise onboarding, guided instructions, and workout videos in a mobile app.",
  "개발 범위": "My role",
  "Android 앱 기능 개발과 실제 기기 테스트, Google Play 등록까지 맡았습니다.": "Implemented Android features, tested on physical devices, and handled the Google Play release.",
  "AgingLoc을 Google Play에 출시했습니다. 아래 공식 등록 이미지에서 앱 화면을 확인할 수 있습니다.": "Published AgingLoc on Google Play. The screenshots below come from its official store listing.",
  "운동 준비·가이드 원본 크게 보기": "View the full-size exercise guidance screen",
  "AgingLoc의 운동 시작 안내와 운동 가이드 화면": "AgingLoc exercise onboarding and guidance screens",
  "운동 준비·가이드": "Exercise onboarding & guidance",
  "운동 콘텐츠 화면 원본 크게 보기": "View the full-size exercise video screen",
  "AgingLoc에서 운동 영상을 안내하는 화면": "AgingLoc screen presenting a guided exercise video",
  "운동 콘텐츠 화면": "Exercise video content",
  "공식 Google Play 등록 이미지": "Screenshots from the official Google Play listing",
  "Google Play에서 보기 ↗": "View on Google Play ↗",
  "기기 조작용 Android 앱을 개발했습니다. BLE 기기 연결과 조사 조작, 로그·옵션 메뉴를 통해 앱과 기기를 연결했습니다.": "Developed an Android device-control app with BLE connectivity, light-delivery controls, logs, and settings.",
  "BLE 기기 연결과 조사 조작, 로그·옵션 메뉴를 구성했습니다. 로그인과 오프라인 진입 화면도 함께 제공했습니다.": "Implemented BLE connection and light-delivery controls, log and settings menus, and sign-in and offline entry screens.",
  "Android 앱 기능 개발, BLE를 통한 기기 연동과 실제 동작 테스트를 맡았습니다.": "Developed Android features, integrated BLE device control, and tested the app with physical hardware.",
  "앱 화면에서 기기를 연결하고 조작하는 기능을 구현했습니다. 아래 화면에서 조작 메뉴와 진입 흐름을 확인할 수 있습니다.": "Implemented device connection and control from the app. The screens below show the control menu and entry flow.",
  "기기 조작 메인 화면 원본 크게 보기": "View the full-size device-control screen",
  "MEDI-EYE 앱의 조사하기, 블루투스 기기 연결, 환자관리, 조사 로그 및 옵션 메뉴": "MEDI-EYE menus for light delivery, Bluetooth connection, patient management, logs, and settings",
  "기기 조작 메인 화면": "Device-control home screen",
  "로그인·오프라인 진입 원본 크게 보기": "View the full-size sign-in and offline entry screen",
  "MEDI-EYE 앱의 로그인, 회원가입 및 오프라인 진입 화면": "MEDI-EYE sign-in, registration, and offline entry screen",
  "로그인·오프라인 진입": "Sign-in & offline entry",
  "직접 개발한 기기 조작 앱의 화면입니다.": "Screens from the device-control app I developed.",
  "펌웨어 · BLE · Android 연계 개발": "Firmware, BLE & Android integration",
  "BLE 기기 제어 · 카메라 전원 문제 해결 · 절전": "BLE device control · Camera power fix · Power management",
  "nRF52840 웨어러블 펌웨어와 Android 앱을 함께 개발해 BLE 명령을 실제 기기 동작으로 연결했습니다. ESP32 카메라 보드에서는 입력 전원 불안정에 따른 멈춤 문제를 분석하고 해결했습니다.": "Developed nRF52840 wearable firmware alongside the Android app to turn BLE commands into device actions. On an ESP32 camera board, I investigated and resolved freezing caused by an unstable input power supply.",
  "BLE 명령과 LED 점등·PWM 제어를 연결해 앱에서 기기 조작": "Connected BLE commands to LED and PWM control from the app",
  "동작 종료·절전·재기동 흐름과 watchdog 처리 구현": "Implemented session completion, sleep, restart, and watchdog handling",
  "ESP32 카메라 입력 전원 안정화로 구동 중 멈춤 문제 해결": "Resolved ESP32 camera freezing by stabilizing its input power",
  "대기전류 측정과 GPIO 상태 조정으로 불필요한 전력 소모 감소": "Reduced unnecessary power use through standby-current measurements and GPIO adjustments",
  "nRF52840 제어 구성": "nRF52840 control architecture",
  "개발 범위를 요약한 개념도": "Concept diagram of my development scope",
  "입력": "Input",
  "BLE 명령 · 버튼": "BLE commands · Buttons",
  "nRF52840 펌웨어": "nRF52840 firmware",
  "동작 상태 · 타이머 관리": "State & timer management",
  "기기 제어": "Device control",
  "LED·PWM / 종료·절전": "LED / PWM · Stop / Sleep",
  "LED·PWM 제어, 버튼 입력, 2분 동작 종료, 절전·재기동과 watchdog를 구현했습니다.": "Implemented LED and PWM control, button input, a two-minute session timer, sleep, restart, and watchdog handling.",
  "앱 명령을 기기 동작으로 연결": "From app commands to device actions",
  "BLE 명령과 버튼 입력을 받아 LED 점등·PWM 제어, 동작 종료와 절전·재기동을 처리했습니다. 앱과 펌웨어를 함께 개발해 화면의 조작이 실제 기기 동작으로 이어지도록 연결했습니다.": "Handled BLE commands and button inputs for LED and PWM control, session completion, sleep, and restart. Developing both the app and firmware let me connect on-screen controls to physical device behavior.",
  "카메라 멈춤의 원인 분석과 해결": "Diagnosing and resolving camera freezes",
  "ESP32 카메라 구동 중 발생하는 멈춤 현상의 원인을 입력 전원 불안정으로 확인했습니다. 전원을 일정하게 유지하는 회로를 추가해 문제를 해결했습니다.": "Traced freezes during ESP32 camera operation to an unstable input power supply. Adding a power-stabilization circuit resolved the issue.",
  "대기 전력 점검": "Standby power investigation",
  "대기전류를 측정하면서 각 GPIO의 상태를 점검·조정해 불필요하게 소모되는 전력을 줄였습니다. 기기의 절전과 재기동 흐름도 함께 구현했습니다.": "Measured standby current and inspected and adjusted GPIO states to reduce unnecessary power consumption. I also implemented the device's sleep and restart flows.",
  "클라우드 서버 관리 및 마이그레이션": "Cloud server operations & migration",
  "NAVER Cloud Platform에서 회사 업무용 서버를 구축·운영하고 서버 환경 마이그레이션을 수행했습니다. Docker와 MongoDB를 사용하는 운영 환경을 관리하며, 애플리케이션 개발과 서버 운영 업무를 함께 맡았습니다.": "Built and operated company servers on NAVER Cloud Platform and migrated server environments. I managed an environment using Docker and MongoDB alongside application development responsibilities.",
  "회사 홈페이지 제작": "Company website development",
  "WordPress · JavaScript 웹페이지 제작": "WordPress · JavaScript development",
  "WordPress를 활용해 회사 소개 웹사이트를 제작하고 JavaScript로 웹페이지를 구현했습니다. 회사의 기술과 제품을 외부에 소개하는 홈페이지 제작을 담당했습니다.": "Built the company website with WordPress and implemented web pages in JavaScript to introduce its technology and products.",
  "동작 사양 · 통신 문서와 외부 개발 협업": "Specifications, protocols & development collaboration",
  "요구사항 정리 · 프로토콜 문서화 · 연동 검토": "Requirements · Protocol documentation · Integration review",
  "버튼 조작, 동작 모드와 예외 조건을 사양으로 정리하고 BLE 제어 명령·통신 프로토콜을 문서화했습니다. 외부 개발 결과를 요구사항과 대조해 수정 항목을 도출하고 실기기 연동을 검증했습니다. Android 앱의 화면 구성은 디자이너와, 펌웨어 기능과 구현 방향은 하드웨어 개발자와 조율했습니다.": "Documented button behavior, operating modes, exception conditions, and BLE commands and protocols. Reviewed external deliverables against requirements and verified integration with hardware. I coordinated Android screens with a designer and firmware requirements with hardware developers.",
  "국내 특허 출원 · 공동발명자": "Korean patent application · Co-inventor",
  "안질환 치료용 치료시스템, 안질환 치료 방법 및 그에 사용되는 광모듈": "Treatment system and method for eye diseases, and a light module for use therein",
  "출원번호": "Application no.",
  "출원인": "Applicant",
  "주식회사 메디아이오티": "MEDI-IOT Co., Ltd.",
  "본인 기여": "My contribution",
  "공동발명자 등재 · 기술 설명자료와 특허 서류 작성 참여": "Named co-inventor · Technical descriptions and patent documentation",
  "연구개발 지원: TIPS·국가과제 관리": "R&D support: TIPS & government-funded projects",
  "과제 운영·보고": "Project administration & reporting",
  "과제계획서와 진행·보고 자료 작성, 연구개발 기술 내용 정리": "Prepared project plans, progress reports, and technical summaries of R&D activities",
  "연구비 관리": "Research budget management",
  "과제 연구비 비용 관리 업무 전담": "Handled research project expense management",
  "각 기술을 어떤 문제에 사용했는지,": "See how I used each technology",
  "해당 프로젝트와 개발 경험에서 확인할 수 있습니다.": "in the projects and development experience above.",
  "RGB·IR 3D 검출·추적 · 눈 영역 YOLO 학습": "RGB/IR 3D detection & tracking · YOLO eye detection",
  "차량 프로젝트 ↗": "Vehicle project ↗",
  "눈 인식 프로젝트 ↗": "Eye detection project ↗",
  "모델 비교 · RhythmMamba 모바일 적용": "Model comparison · RhythmMamba on Android",
  "rPPG 프로젝트 ↗": "rPPG project ↗",
  "Java · Kotlin · BLE 연동 · 스토어 출시": "Java · Kotlin · BLE integration · App release",
  "모바일 추론 ↗": "Mobile inference ↗",
  "앱 개발 경험 ↗": "App development ↗",
  "BLE 기기 제어 · 전원 문제 해결 · 절전": "BLE control · Power troubleshooting · Sleep management",
  "펌웨어 개발 경험 ↗": "Firmware development ↗",
  "서버 운영·마이그레이션 · 회사 홈페이지 제작": "Server operations & migration · Company website",
  "서버 운영 경험 ↗": "Server operations ↗",
  "웹 개발 경험 ↗": "Web development ↗",
  "함께 일할 기회를 찾고 있습니다.": "Let's build something together.",
  "영상 AI·Computer Vision, 모바일·임베디드 개발 분야의": "Open to roles and collaborations in AI, computer vision,",
  "채용·협업 문의를 기다립니다.": "mobile, and embedded software.",
  "김지열에게 이메일 보내기: jykim7808@gmail.com": "Email Jiyeol Kim at jykim7808@gmail.com",
  "김지열 · 개발 포트폴리오": "Jiyeol Kim · Engineering portfolio",
  "맨 위로": "Back to top",
  "프로젝트 상세 닫기": "Close project details",
  "닫기": "Close",
  "소속 · 기간": "Company · Duration",
  "스마트비전글로벌 · 6개월": "Smart Vision Global · 6 months",
  "담당 범위": "My role",
  "시스템 설계·개발 단독 수행": "Sole system designer and developer",
  "입력 · 학습": "Input · Training",
  "IR 카메라 적용 · RGB·IR 학습": "IR camera deployment · RGB/IR training",
  "검출 · 추적": "Detection · Tracking",
  "SMOKE 검출 + QD-3DT 추적": "SMOKE detection + QD-3DT tracking",
  "검출 단계 교체, 추적 구조 유지": "Replace detection while retaining the tracker",
  "QD-3DT의 Faster R-CNN 검출부와 3D 추정 부분을 SMOKE로 교체했습니다. 기존 embedding·tracking 구조는 유지해 검출 모델의 변경이 추적 단계와 연결되도록 구성했습니다.": "Replaced QD-3DT's Faster R-CNN detector and 3D estimation stage with SMOKE. Retained the existing embedding and tracking components and connected the new detector to the tracking pipeline.",
  "두 구현의 데이터 규격 연결": "Bridge the two data formats",
  "이미지 메타데이터와 카메라 보정 정보의 형식을 맞추고, 3D 박스를 list와 CameraInstance3DBoxes 사이에서 변환했습니다. 현재 프레임뿐 아니라 추적에 사용하는 reference 프레임에도 변환을 적용했습니다.": "Adapted image metadata and camera calibration formats, and converted 3D boxes between lists and CameraInstance3DBoxes. Applied the conversions to both the current frame and reference frames used for tracking.",
  "사전학습 가중치 호환과 학습": "Align pretrained weights and train the model",
  "SMOKE 사전학습 모델을 사용하기 위해 DLA Neck 채널을 256에서 64로 조정했습니다. RGB·IR 영상 데이터로 학습·미세조정하고, IR 영상에서 검출 결과와 추적 연동을 확인했습니다.": "Changed DLA Neck channels from 256 to 64 to match SMOKE's pretrained weights. Trained and fine-tuned with RGB and IR video data, then checked detection output and tracking integration on IR footage.",
  "처리 시간 비교": "Processing-time comparison",
  "구성": "Configuration",
  "평균 처리 시간": "Average processing time",
  "기존 QD-3DT": "Original QD-3DT",
  "0.48초": "0.48 s",
  "SMOKE 단독": "SMOKE alone",
  "0.10초": "0.10 s",
  "SMOKE + QD-3DT 추적": "SMOKE + QD-3DT tracking",
  "0.11초": "0.11 s",
  "기존 QD-3DT 대비 약 77% 단축했습니다. 프로젝트 발표 자료에 기록된 측정값이며, SMOKE 단독 구성에는 추적 단계가 포함되지 않습니다.": "Approximately 77% less processing time than the original QD-3DT setup. These measurements were recorded in the project presentation. The SMOKE-only configuration does not include tracking.",
  "RGB·IR 영상 기반 3D 차량 검출·추적 시스템": "RGB/IR 3D vehicle detection & tracking",
  "QD-3DT의 검출·3D 추정 부분을 SMOKE로 교체해 처리 시간을 줄이고, 기존 추적 구조와 연결했습니다. RGB·IR 데이터 학습부터 IR 카메라용 시스템 통합까지 단독으로 맡았습니다.": "Replaced QD-3DT's detection and 3D estimation stages with SMOKE to reduce processing time, while retaining the tracker. Independently handled RGB/IR model training and integration for an IR-camera system.",
  "IR 카메라 영상에서 차량의 3D 위치와 이동을 추적해야 했습니다. 기존 QD-3DT 구현의 검출 단계에 걸리는 시간을 줄이기 위해, 3D 검출 결과를 제공하는 SMOKE를 대안으로 검토했습니다.": "The system needed to detect and track vehicles in 3D from IR video. To reduce time spent in the existing QD-3DT detection stage, I evaluated SMOKE as an alternative that provides 3D detections.",
  "개발 당시 변환 모듈은 배치 확장을 지원하지 않았습니다. SMOKE에 없는 depth uncertainty는 기존 추적 모듈과 연결하기 위해 1로 고정했습니다. 이 설계가 추적 정확도에 미치는 영향과 카메라 보정은 추가 검증 과제였으며, 처리 시간 개선을 정확도 개선으로 해석하지 않습니다.": "At the time of development, the conversion module did not support larger batches. I fixed the depth uncertainty value to 1 because SMOKE did not provide it for the existing tracker. Its effect on tracking accuracy and camera calibration required further evaluation. The timing improvement does not establish an accuracy improvement.",
  "IR 영상의 3D 검출·추적 시스템을 구현하고, 기존 구성 대비 평균 처리 시간을 0.48초에서 0.11초로 줄였습니다.": "Implemented 3D detection and tracking on IR video, reducing average processing time from 0.48 s to 0.11 s compared with the original setup.",
  "SMOKE 공식 구현": "Official SMOKE implementation",
  "QD-3DT 공식 구현": "Official QD-3DT implementation",
  "메디아이오티 · 5개월": "MEDI-IOT · 5 months",
  "데이터 구축·모델 학습·앱 연동": "Dataset development · Training · App integration",
  "검출 모델": "Detection model",
  "실행 환경": "Runtime",
  "눈 영역 데이터 준비": "Prepare eye-region data",
  "눈 이미지를 직접 수집하고 영역을 라벨링해 학습 데이터를 구성했습니다. 공개한 학습 배치 화면에서 입력 이미지와 라벨 박스를 확인할 수 있습니다.": "Collected eye images and annotated the eye regions to build the training dataset. The published batch visualization shows the input images and annotation boxes.",
  "검출 모델과 추적 기능 연결": "Connect detection and tracking",
  "수집한 데이터로 YOLO를 학습하고 검출 결과를 눈 영역 트래킹에 연결했습니다. 담당 기능은 눈 영역의 위치를 찾고 추적하는 범위입니다.": "Trained YOLO on the collected data and connected its detections to eye-region tracking. The implemented functionality locates and tracks eye regions.",
  "Android 앱에서 동작 테스트": "Test in the Android app",
  "학습 모델을 Android 앱에 연동하고 실제 기기에서 눈 영역 인식·추적 동작을 테스트했습니다. 데이터 준비부터 모델 적용까지 이어지는 개발을 담당했습니다.": "Integrated the trained model into Android and tested eye detection and tracking on physical devices. My work covered data preparation through model integration.",
  "눈 영상 데이터 수집·라벨링부터 YOLO 학습, 눈 영역 검출·추적과 Android 연동까지 맡았습니다. 학습한 모델을 실제 앱의 영상 처리 흐름에 연결했습니다.": "Handled eye-image collection and annotation, YOLO training, eye detection and tracking, and Android integration. Connected the trained model to the app's video-processing flow.",
  "데이터 구축·모델 학습·트래킹 및 앱 적용": "Dataset development · Training · Tracking · App integration",
  "Android 앱에서 영상 속 눈 영역을 검출하고 움직임에 따라 추적하는 기능이 필요했습니다. 모델 학습에 사용할 눈 영역 데이터도 직접 준비했습니다.": "The Android app needed to detect eye regions in video and follow their movement. I also prepared the eye-region data used to train the model.",
  "공개 이미지는 학습 입력과 라벨을 보여주는 배치 시각화입니다. 최종 추론 결과 또는 정확도 평가 자료와 구분해 제시합니다.": "The published image shows training inputs and annotations. It is presented separately from final inference output or accuracy evaluation.",
  "직접 구축한 데이터로 학습한 눈 영역 검출·트래킹 기능을 Android 앱에 적용했습니다.": "Deployed eye detection and tracking trained on a dataset I built into the Android app.",
  "메디아이오티 · 4개월": "MEDI-IOT · 4 months",
  "모델 학습·비교, 모바일 추론 연동": "Model training and comparison · Mobile inference integration",
  "비교 모델": "Models compared",
  "Android ONNX Runtime · 갤럭시 / 서버 GPU": "Android ONNX Runtime · Galaxy devices / Server GPU",
  "학습 조건과 입력 길이 비교": "Compare training conditions and input duration",
  "무작위 초기화 학습과 PURE 데이터 미세조정 결과를 검토하고, 5초·10초 입력에서 추정 오차와 연산량을 비교했습니다. 모델의 결과를 영상 길이·학습 조건과 함께 정리했습니다.": "Reviewed training from random initialization and fine-tuning with PURE data. Compared estimation error and computation for 5- and 10-second inputs, recording results alongside the training conditions and video duration.",
  "모바일 적용 모델 선택": "Select a model for mobile deployment",
  "실험에서 PhysNet이 좋은 추정 성능을 보였지만, Android 적용에는 모델의 연산 구조와 실행 조건도 고려했습니다. 이 판단을 바탕으로 모바일 적용 모델로 RhythmMamba를 선택했습니다.": "PhysNet performed well in the experiments, while Android deployment also required considering model computation and runtime conditions. Based on those considerations, I selected RhythmMamba for the mobile app.",
  "ONNX 변환과 실제 기기 실행": "Convert to ONNX and test on devices",
  "RhythmMamba를 ONNX 형식으로 변환하고 Android 앱의 ONNX Runtime에 연결했습니다. 갤럭시 기기에서 실행을 테스트했으며, 서버 환경 테스트에서는 입력 FPS 변화와 영상 수집 중단, 결과 미표시 현상도 점검했습니다.": "Converted RhythmMamba to ONNX and integrated it with ONNX Runtime in the Android app. Tested on Galaxy devices, and separately investigated varying input FPS, interrupted video collection, and missing outputs in server-side tests.",
  "비교 기준과 적용 판단": "Comparison criteria and deployment decision",
  "모델 정확도와 실제 실행 환경을 함께 검토": "Evaluating estimation performance alongside runtime constraints",
  "비교 축": "Comparison axis",
  "검토 내용": "What I evaluated",
  "모델": "Model",
  "PhysNet · RhythmMamba · RhythmFormer의 심박 추정 결과": "Heart-rate estimates from PhysNet, RhythmMamba, and RhythmFormer",
  "학습 조건": "Training conditions",
  "무작위 초기화 / PURE 데이터 미세조정": "Random initialization / Fine-tuning with PURE data",
  "입력 길이": "Input duration",
  "5초 / 10초 구간의 추정 오차와 연산량": "Estimation error and computation for 5- and 10-second clips",
  "적용 판단": "Deployment decision",
  "모바일 실행 조건을 고려해 RhythmMamba를 Android에 적용": "Applied RhythmMamba to Android after considering mobile runtime constraints",
  "모델별 실험 결과와 Android 실행 확인은 구분해 평가했습니다. 서버 환경에서의 실행 결과를 모바일 성능으로 간주하지 않습니다.": "Model experiments and Android execution checks were evaluated separately. Server-side execution results are not treated as mobile performance measurements.",
  "PhysNet·RhythmMamba·RhythmFormer를 학습하고 영상 길이와 학습 조건에 따른 결과를 비교했습니다. 추정 성능과 모바일 실행 조건을 함께 고려해 RhythmMamba를 Android에 적용했습니다.": "Trained PhysNet, RhythmMamba, and RhythmFormer and compared results across input durations and training conditions. Considered both estimation performance and runtime constraints when applying RhythmMamba to Android.",
  "모델 비교·모바일 추론 연동·테스트": "Model comparison · Mobile inference integration · Testing",
  "얼굴 영상으로 심박을 추정하는 기능을 Android 앱에서 실행하는 것이 목표였습니다. 짧은 촬영 구간에서의 추정 오차와 모델 실행 비용을 함께 검토해야 했습니다.": "The goal was to estimate heart rate from face video in an Android app. I needed to examine estimation error for short clips alongside the model's execution cost.",
  "영상 수집 안정성과 신호 품질 처리는 후속 개선 항목으로 정리했습니다. 공개 시연 화면은 기준 심박계 미연결 상태이므로 BPM 표시 자체를 정확도 근거로 사용하지 않습니다.": "Video-collection stability and signal-quality handling were identified as follow-up improvements. The public demo had no reference heart-rate monitor connected, so its BPM display is not used as evidence of accuracy.",
  "세 모델의 비교를 모바일 모델 선택으로 연결하고, RhythmMamba의 ONNX 변환부터 Android 추론 연동까지 구현했습니다.": "Turned the three-model comparison into a mobile deployment decision and implemented RhythmMamba's ONNX conversion and Android inference integration.",
  "언어 선택": "Language",
  "메뉴 닫기": "Close menu",
  "문제와 기술 선택": "Problem and technical approach",
  "직접 구현한 내용": "What I implemented",
  "구현 결과": "Outcome",
  "검증 범위와 한계": "Evaluation scope and limitations",
  "사용 기술": "Technologies",
  "참고 자료": "References",
  "원본 이미지 크게 보기": "View full-size image"
};

// Keep original text nodes and attributes so switching languages preserves
// navigation, disclosure state, and event handlers. Dynamic project content
// uses the same dictionary through translateTree().
const storageKey = 'jiyeol-portfolio-language';
const validLanguage = value => value === 'ko' || value === 'en';
const normalize = value => value.trim().replace(/\s+/g, ' ');
let language = 'ko';
const textEntries = [];
const attributeEntries = [];
const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
while (walker.nextNode()) {
  const node = walker.currentNode;
  if (node.parentElement.closest('script, style, [data-language]')) continue;
  if (/[가-힣]/.test(node.nodeValue)) textEntries.push([node, node.nodeValue]);
}
document.querySelectorAll('[alt], [aria-label], [title], meta[content]').forEach(element => {
  for (const name of ['alt', 'aria-label', 'title', 'content']) {
    const original = element.getAttribute(name);
    if (original && /[가-힣]/.test(original)) attributeEntries.push([element, name, original]);
  }
});
function t(value) {
  if (language !== 'en') return value;
  const key = normalize(value);
  if (!Object.prototype.hasOwnProperty.call(english, key)) return value;
  return value.replace(/\S[\s\S]*\S|\S/, () => english[key]);
}
function translateTree(value) {
  if (typeof value === 'string') return t(value);
  if (Array.isArray(value)) return value.map(translateTree);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, translateTree(item)]));
  }
  return value;
}
function readLanguage() {
  const requested = new URL(window.location.href).searchParams.get('lang');
  if (validLanguage(requested)) return requested;
  try {
    const saved = localStorage.getItem(storageKey);
    if (validLanguage(saved)) return saved;
  } catch { /* Language switching also works when browser storage is blocked. */ }
  return 'ko';
}
function setLanguage(next, updateUrl = true) {
  if (!validLanguage(next)) return;
  language = next;
  document.documentElement.lang = next;
  textEntries.forEach(([node, original]) => { node.nodeValue = t(original); });
  attributeEntries.forEach(([element, name, original]) => { element.setAttribute(name, t(original)); });
  document.querySelector('meta[property="og:locale"]').content = next === 'en' ? 'en_US' : 'ko_KR';
  document.querySelectorAll('[data-language]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.language === next));
  });
  try { localStorage.setItem(storageKey, next); } catch { /* Optional persistence. */ }
  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', next);
    window.history.replaceState(window.history.state, '', url);
  }
  window.dispatchEvent(new CustomEvent('portfolio:languagechange', { detail: { language: next } }));
}
window.portfolioI18n = Object.freeze({ t, translateTree, get language() { return language; } });
document.querySelectorAll('[data-language]').forEach(button => {
  button.addEventListener('click', () => setLanguage(button.dataset.language));
});
setLanguage(readLanguage(), false);
document.querySelector('.language-switch').hidden = false;
window.addEventListener('popstate', () => setLanguage(readLanguage(), false));

})();
