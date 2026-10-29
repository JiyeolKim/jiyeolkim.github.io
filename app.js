'use strict';

const projects = {
  "vehicle": {
    "details": {
      "facts": [
        [
          "소속 · 기간",
          "스마트비전글로벌 · 6개월"
        ],
        [
          "담당 범위",
          "시스템 설계·개발 단독 수행"
        ],
        [
          "입력 · 학습",
          "IR 카메라 적용 · RGB·IR 학습"
        ],
        [
          "검출 · 추적",
          "SMOKE 검출 + QD-3DT 추적"
        ]
      ],
      "steps": [
        [
          "검출 단계 교체, 추적 구조 유지",
          "QD-3DT의 Faster R-CNN 검출부와 3D 추정 부분을 SMOKE로 교체했습니다. 기존 embedding·tracking 구조는 유지해 검출 모델의 변경이 추적 단계와 연결되도록 구성했습니다."
        ],
        [
          "두 구현의 데이터 규격 연결",
          "이미지 메타데이터와 카메라 보정 정보의 형식을 맞추고, 3D 박스를 list와 CameraInstance3DBoxes 사이에서 변환했습니다. 현재 프레임뿐 아니라 추적에 사용하는 reference 프레임에도 변환을 적용했습니다."
        ],
        [
          "사전학습 가중치 호환과 학습",
          "SMOKE 사전학습 모델을 사용하기 위해 DLA Neck 채널을 256에서 64로 조정했습니다. RGB·IR 영상 데이터로 학습·미세조정하고, IR 영상에서 검출 결과와 추적 연동을 확인했습니다."
        ]
      ],
      "comparison": {
        "title": "처리 시간 비교",
        "caption": "GTX 1660 · 960×480 입력 · 100개 평균",
        "headers": [
          "구성",
          "평균 처리 시간"
        ],
        "rows": [
          [
            "기존 QD-3DT",
            "0.48초"
          ],
          [
            "SMOKE 단독",
            "0.10초"
          ],
          [
            "SMOKE + QD-3DT 추적",
            "0.11초"
          ]
        ],
        "note": "기존 QD-3DT 대비 약 77% 단축했습니다. 프로젝트 발표 자료에 기록된 측정값이며, SMOKE 단독 구성에는 추적 단계가 포함되지 않습니다."
      }
    },
    "category": "01 / COMPUTER VISION",
    "media": {
      "src": "assets/vehicle-ir-result.jpg",
      "width": 960,
      "height": 540,
      "alt": "IR 도로 영상에 차량의 3D 검출 박스가 표시된 실행 화면",
      "label": "실행 결과",
      "caption": "IR 카메라 입력에서 실행한 3D 차량 검출·추적 시스템 화면입니다."
    },
    "title": "RGB·IR 영상 기반 3D 차량 검출·추적 시스템",
    "intro": "QD-3DT의 검출·3D 추정 부분을 SMOKE로 교체해 처리 시간을 줄이고, 기존 추적 구조와 연결했습니다. RGB·IR 데이터 학습부터 IR 카메라용 시스템 통합까지 단독으로 맡았습니다.",
    "role": "전체 시스템 구성·개발 단독 담당",
    "purpose": "IR 카메라 영상에서 차량의 3D 위치와 이동을 추적해야 했습니다. 기존 QD-3DT 구현의 검출 단계에 걸리는 시간을 줄이기 위해, 3D 검출 결과를 제공하는 SMOKE를 대안으로 검토했습니다.",
    "validation": "개발 당시 변환 모듈은 배치 확장을 지원하지 않았습니다. SMOKE에 없는 depth uncertainty는 기존 추적 모듈과 연결하기 위해 1로 고정했습니다. 이 설계가 추적 정확도에 미치는 영향과 카메라 보정은 추가 검증 과제였으며, 처리 시간 개선을 정확도 개선으로 해석하지 않습니다.",
    "result": "IR 영상의 3D 검출·추적 시스템을 구현하고, 기존 구성 대비 평균 처리 시간을 0.48초에서 0.11초로 줄였습니다.",
    "technologies": [
      "Python",
      "SMOKE",
      "QD-3DT",
      "DLA",
      "RGB / IR"
    ],
    "references": [
      [
        "SMOKE 공식 구현",
        "https://github.com/lzccccc/SMOKE"
      ],
      [
        "QD-3DT 공식 구현",
        "https://github.com/SysCV/qd-3dt"
      ]
    ]
  },
  "eye": {
    "details": {
      "facts": [
        [
          "소속 · 기간",
          "메디아이오티 · 5개월"
        ],
        [
          "담당 범위",
          "데이터 구축·모델 학습·앱 연동"
        ],
        [
          "검출 모델",
          "YOLO"
        ],
        [
          "실행 환경",
          "Android · Kotlin · ONNX"
        ]
      ],
      "steps": [
        [
          "눈 영역 데이터 준비",
          "눈 이미지를 직접 수집하고 영역을 라벨링해 학습 데이터를 구성했습니다. 공개한 학습 배치 화면에서 입력 이미지와 라벨 박스를 확인할 수 있습니다."
        ],
        [
          "검출 모델과 추적 기능 연결",
          "수집한 데이터로 YOLO를 학습하고 검출 결과를 눈 영역 트래킹에 연결했습니다. 담당 기능은 눈 영역의 위치를 찾고 추적하는 범위입니다."
        ],
        [
          "Android 앱에서 동작 테스트",
          "학습 모델을 Android 앱에 연동하고 실제 기기에서 눈 영역 인식·추적 동작을 테스트했습니다. 데이터 준비부터 모델 적용까지 이어지는 개발을 담당했습니다."
        ]
      ]
    },
    "category": "03 / VISION APPLICATION",
    "media": {
      "src": "assets/eye-training-batch.jpg",
      "width": 768,
      "height": 768,
      "alt": "눈 영역과 라벨 박스가 표시된 YOLO 학습 배치 시각화",
      "label": "학습 배치",
      "caption": "YOLO 학습 배치 시각화입니다. 최종 검출 결과나 정확도 지표를 나타내는 이미지는 아닙니다."
    },
    "title": "눈 인식 및 트래킹",
    "intro": "눈 영상 데이터 수집·라벨링부터 YOLO 학습, 눈 영역 검출·추적과 Android 연동까지 맡았습니다. 학습한 모델을 실제 앱의 영상 처리 흐름에 연결했습니다.",
    "role": "데이터 구축·모델 학습·트래킹 및 앱 적용",
    "purpose": "Android 앱에서 영상 속 눈 영역을 검출하고 움직임에 따라 추적하는 기능이 필요했습니다. 모델 학습에 사용할 눈 영역 데이터도 직접 준비했습니다.",
    "validation": "공개 이미지는 학습 입력과 라벨을 보여주는 배치 시각화입니다. 최종 추론 결과 또는 정확도 평가 자료와 구분해 제시합니다.",
    "result": "직접 구축한 데이터로 학습한 눈 영역 검출·트래킹 기능을 Android 앱에 적용했습니다.",
    "technologies": [
      "Python",
      "YOLO",
      "Android",
      "Kotlin",
      "ONNX"
    ]
  },
  "rppg": {
    "details": {
      "facts": [
        [
          "소속 · 기간",
          "메디아이오티 · 4개월"
        ],
        [
          "담당 범위",
          "모델 학습·비교, 모바일 추론 연동"
        ],
        [
          "비교 모델",
          "PhysNet · RhythmMamba · RhythmFormer"
        ],
        [
          "실행 환경",
          "Android ONNX Runtime · 갤럭시 / 서버 GPU"
        ]
      ],
      "steps": [
        [
          "학습 조건과 입력 길이 비교",
          "무작위 초기화 학습과 PURE 데이터 미세조정 결과를 검토하고, 5초·10초 입력에서 추정 오차와 연산량을 비교했습니다. 모델의 결과를 영상 길이·학습 조건과 함께 정리했습니다."
        ],
        [
          "모바일 적용 모델 선택",
          "실험에서 PhysNet이 좋은 추정 성능을 보였지만, Android 적용에는 모델의 연산 구조와 실행 조건도 고려했습니다. 이 판단을 바탕으로 모바일 적용 모델로 RhythmMamba를 선택했습니다."
        ],
        [
          "ONNX 변환과 실제 기기 실행",
          "RhythmMamba를 ONNX 형식으로 변환하고 Android 앱의 ONNX Runtime에 연결했습니다. 갤럭시 기기에서 실행을 테스트했으며, 서버 환경 테스트에서는 입력 FPS 변화와 영상 수집 중단, 결과 미표시 현상도 점검했습니다."
        ]
      ],
      "comparison": {
        "title": "비교 기준과 적용 판단",
        "caption": "모델 정확도와 실제 실행 환경을 함께 검토",
        "headers": [
          "비교 축",
          "검토 내용"
        ],
        "rows": [
          [
            "모델",
            "PhysNet · RhythmMamba · RhythmFormer의 심박 추정 결과"
          ],
          [
            "학습 조건",
            "무작위 초기화 / PURE 데이터 미세조정"
          ],
          [
            "입력 길이",
            "5초 / 10초 구간의 추정 오차와 연산량"
          ],
          [
            "적용 판단",
            "모바일 실행 조건을 고려해 RhythmMamba를 Android에 적용"
          ]
        ],
        "note": "모델별 실험 결과와 Android 실행 확인은 구분해 평가했습니다. 서버 환경에서의 실행 결과를 모바일 성능으로 간주하지 않습니다."
      }
    },
    "category": "02 / BIOSIGNAL AI",
    "media": {
      "src": "assets/rppg-model-demo.png",
      "width": 1920,
      "height": 1080,
      "alt": "같은 얼굴 영상 입력에 대한 PhysNet, RhythmFormer, RhythmMamba의 BPM과 파형을 비교하는 화면",
      "label": "모델 비교 시연",
      "caption": "모델 3종의 BPM·파형을 비교하는 시연 화면입니다. 기준 심박계 미연결 상태로, 정확도 평가 결과는 아닙니다."
    },
    "title": "rPPG 기반 심박 추정",
    "intro": "PhysNet·RhythmMamba·RhythmFormer를 학습하고 영상 길이와 학습 조건에 따른 결과를 비교했습니다. 추정 성능과 모바일 실행 조건을 함께 고려해 RhythmMamba를 Android에 적용했습니다.",
    "role": "모델 비교·모바일 추론 연동·테스트",
    "purpose": "얼굴 영상으로 심박을 추정하는 기능을 Android 앱에서 실행하는 것이 목표였습니다. 짧은 촬영 구간에서의 추정 오차와 모델 실행 비용을 함께 검토해야 했습니다.",
    "validation": "영상 수집 안정성과 신호 품질 처리는 후속 개선 항목으로 정리했습니다. 공개 시연 화면은 기준 심박계 미연결 상태이므로 BPM 표시 자체를 정확도 근거로 사용하지 않습니다.",
    "result": "세 모델의 비교를 모바일 모델 선택으로 연결하고, RhythmMamba의 ONNX 변환부터 Android 추론 연동까지 구현했습니다.",
    "technologies": [
      "Python",
      "PhysNet",
      "RhythmMamba",
      "RhythmFormer",
      "ONNX Runtime",
      "Android"
    ]
  }
};

const i18n = window.portfolioI18n;
const t = i18n.t;

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', t('메뉴 열기'));
  nav.classList.remove('is-open');
}
menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(expanded));
  menuToggle.setAttribute('aria-label', t(expanded ? '메뉴 닫기' : '메뉴 열기'));
  nav.classList.toggle('is-open', expanded);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
window.addEventListener('resize', () => { if (window.innerWidth > 900) closeMenu(); });

const dialog = document.querySelector('#project-dialog');
let lastProjectButton = null;
let activeProjectId = null;
function section(title, contents) {
  const el = document.createElement('section');
  el.className = 'detail-section';
  const heading = document.createElement('h3');
  heading.textContent = t(title);
  el.append(heading, contents);
  return el;
}
function paragraph(text) {
  const p = document.createElement('p'); p.textContent = text; return p;
}
function projectFacts(facts) {
  const list = document.createElement('dl');
  list.className = 'project-facts';
  facts.forEach(([name, value]) => {
    const item = document.createElement('div');
    const term = document.createElement('dt');
    const description = document.createElement('dd');
    term.textContent = name;
    description.textContent = value;
    item.append(term, description);
    list.append(item);
  });
  return list;
}
function developmentSteps(steps) {
  const list = document.createElement('ol');
  list.className = 'development-steps';
  steps.forEach(([title, description]) => {
    const item = document.createElement('li');
    const heading = document.createElement('h4');
    heading.textContent = title;
    item.append(heading, paragraph(description));
    list.append(item);
  });
  return list;
}
function comparisonTable(data) {
  const wrapper = document.createElement('div');
  wrapper.className = 'comparison-block';
  const scroll = document.createElement('div');
  scroll.className = 'verification-wrap';
  scroll.tabIndex = 0;
  scroll.setAttribute('role', 'region');
  scroll.setAttribute('aria-label', data.title);
  const table = document.createElement('table');
  table.className = 'verification-table comparison-table';
  const caption = document.createElement('caption');
  caption.textContent = data.caption;
  const thead = document.createElement('thead');
  const head = document.createElement('tr');
  data.headers.forEach(text => {
    const th = document.createElement('th'); th.scope = 'col'; th.textContent = text; head.append(th);
  });
  thead.append(head);
  const tbody = document.createElement('tbody');
  data.rows.forEach(values => {
    const tr = document.createElement('tr');
    values.forEach((text, index) => {
      const cell = document.createElement(index === 0 ? 'th' : 'td');
      if (index === 0) cell.scope = 'row';
      cell.textContent = text; tr.append(cell);
    });
    tbody.append(tr);
  });
  table.append(caption, thead, tbody); scroll.append(table); wrapper.append(scroll);
  const note = paragraph(data.note); note.className = 'comparison-note'; wrapper.append(note);
  return wrapper;
}
function openProject(id, trigger) {
  if (!projects[id]) return;
  const project = i18n.translateTree(projects[id]);
  activeProjectId = id;
  lastProjectButton = trigger;
  document.querySelector('#dialog-title').textContent = project.title;
  document.querySelector('#dialog-category').textContent = project.category;
  document.querySelector('#dialog-intro').textContent = project.intro;
  const body = document.querySelector('#dialog-body');
  body.replaceChildren();
  if (project.role) {
    const role = document.createElement('div'); role.className = 'dialog-role'; role.textContent = '↳ ' + project.role; body.append(role);
  }
  body.append(projectFacts(project.details.facts));
  if (project.media) {
    const media = project.media;
    const figure = document.createElement('figure');
    figure.className = 'project-media detail-media';
    const link = document.createElement('a');
    link.className = 'media-frame';
    link.href = media.src;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', t('원본 이미지 크게 보기') + ': ' + media.label);
    const img = document.createElement('img');
    img.src = media.src;
    img.alt = media.alt;
    img.width = media.width;
    img.height = media.height;
    img.decoding = 'async';
    const zoom = document.createElement('span');
    zoom.className = 'media-zoom';
    zoom.textContent = t('크게 보기 ↗');
    zoom.setAttribute('aria-hidden', 'true');
    link.append(img, zoom);
    const caption = document.createElement('figcaption');
    const label = document.createElement('span');
    label.className = 'media-label';
    label.textContent = media.label;
    const note = document.createElement('span');
    note.textContent = media.caption;
    caption.append(label, note);
    figure.append(link, caption);
    body.append(figure);
  }
  body.append(section('문제와 기술 선택', paragraph(project.purpose)));
  body.append(section('직접 구현한 내용', developmentSteps(project.details.steps)));
  if (project.details.comparison) {
    body.append(section(project.details.comparison.title, comparisonTable(project.details.comparison)));
  } else {
    body.append(section('구현 결과', paragraph(project.result)));
  }
  body.append(section('검증 범위와 한계', paragraph(project.validation)));
  const chips = document.createElement('div'); chips.className = 'chips';
  project.technologies.forEach(text => { const chip = document.createElement('span'); chip.textContent = text; chips.append(chip); });
  body.append(section('사용 기술', chips));
  if (project.references) {
    const references = document.createElement('div'); references.className = 'reference-links';
    project.references.forEach(([text, href]) => { const a = document.createElement('a'); a.textContent = text + ' ↗'; a.href = href; a.target = '_blank'; a.rel = 'noopener noreferrer'; references.append(a); });
    body.append(section('참고 자료', references));
  }
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('modal-open');
  document.querySelector('.dialog-close').focus({preventScroll:true});
}
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => openProject(button.dataset.project, button)));
document.querySelectorAll('.dialog-close,.dialog-done').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
dialog.addEventListener('close', () => { activeProjectId = null; document.body.classList.remove('modal-open'); if (lastProjectButton) lastProjectButton.focus({preventScroll:true}); });

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      nav.querySelectorAll('a').forEach(link => {
        if (link.getAttribute('href') === '#' + entry.target.id && !link.classList.contains('nav-cta')) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
  }, {rootMargin:'-15% 0px -60% 0px'});
  ['about','projects','experience','skills'].forEach(id => observer.observe(document.getElementById(id)));
}

document.querySelectorAll('.skill-links a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target && target.tagName === 'DETAILS') target.open = true;
  });
});

window.addEventListener('portfolio:languagechange', () => {
  closeMenu();
  if (dialog.open && activeProjectId) {
    const scrollPosition = dialog.scrollTop;
    openProject(activeProjectId, lastProjectButton);
    dialog.scrollTop = scrollPosition;
  }
});
