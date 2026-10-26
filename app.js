'use strict';

const projects = {
  vehicle: {
    details: {
    "facts": [
        [
            "목표 입력",
            "IR 카메라 영상"
        ],
        [
            "학습 데이터",
            "RGB·IR 영상 데이터"
        ],
        [
            "3D 검출",
            "SMOKE로 기존 검출부 교체"
        ],
        [
            "추적",
            "QD-3DT의 기존 추적 구조 활용"
        ]
    ],
    "steps": [
        [
            "검출 모델과 추적 구조의 연결",
            "QD-3DT의 기존 검출부를 SMOKE로 교체했습니다. SMOKE가 차량의 3D 검출을 담당하고, 그 결과를 QD-3DT의 기존 추적 구조에서 활용하도록 시스템을 구성했습니다."
        ],
        [
            "RGB·IR 데이터로 모델 학습",
            "모델 교체와 함께 RGB·IR 영상 데이터를 활용한 학습과 미세조정을 직접 진행했습니다. 최종 적용 대상인 IR 카메라 입력에서 검출 모델을 실행하는 것을 목표로 작업했습니다."
        ],
        [
            "IR 입력에서 시스템 실행 확인",
            "학습한 검출 모델과 추적 모듈을 연동해 IR 영상에서 차량 검출·추적을 실행했습니다. 입력부터 검출, 추적까지 이어지는 전체 시스템의 구성과 개발을 단독으로 맡았습니다."
        ]
    ],
    "checks": [
        [
            "3D 검출",
            "IR 도로 영상에서 차량의 3D 검출 결과를 확인했습니다.",
            "동작 확인"
        ],
        [
            "추적 연동",
            "SMOKE 검출부와 QD-3DT 추적 구조를 연결한 시스템을 실행했습니다.",
            "연동 확인"
        ],
        [
            "공개 결과물",
            "IR 입력에 대한 실행 화면을 첨부했습니다.",
            "화면 공개"
        ]
    ]
},
    category: '01 / COMPUTER VISION',
    media: {src:'assets/vehicle-ir-result.jpg', width:960, height:540, alt:'IR 도로 영상에 차량의 3D 검출 박스가 표시된 실행 화면', label:'실행 결과', caption:'IR 카메라 입력에서 실행한 3D 차량 검출·추적 시스템 화면입니다.'},
    title: 'RGB·IR 영상 기반 3D 차량 검출·추적 시스템',
    intro: 'IR 카메라 입력부터 차량의 3D 검출·추적까지 이어지는 시스템을 단독으로 구성했습니다. 검출부 교체, RGB·IR 데이터 학습·미세조정, 기존 추적 구조와의 연동을 직접 맡았습니다.',
    role: '전체 시스템 구성·개발 단독 담당',
    purpose: 'IR 카메라 영상에서 차량의 3D 위치를 검출하고 추적하는 시스템이 필요했습니다. QD-3DT의 기존 추적 구조를 활용하면서, IR 입력에 적용할 검출 모델을 학습하고 연동하는 것이 목표였습니다.',
    approach: 'QD-3DT의 기존 검출부를 SMOKE로 교체하고, RGB·IR 영상 데이터로 모델을 직접 학습·미세조정했습니다. 학습한 검출 모델의 출력을 기존 QD-3DT 추적 구조와 연결해 IR 카메라 입력에서 동작하도록 구성했습니다.',
    validation: 'IR 카메라 입력에서 차량 검출·추적 동작을 확인했습니다. 검출부 교체와 시스템 통합을 담당했으며, QD-3DT의 기존 추적 구조를 활용했습니다.',
    contributions: ['QD-3DT의 기존 검출부를 SMOKE로 교체', 'SMOKE 검출 모듈과 QD-3DT의 기존 추적 구조 연동', 'RGB 및 IR 영상 데이터를 활용한 모델 학습·미세조정', 'IR 카메라 영상에서 차량 검출·추적 동작 확인'],
    result: 'IR 카메라 입력, SMOKE의 3D 차량 검출, QD-3DT의 추적을 하나의 시스템으로 연결했습니다. IR 영상에서 차량 검출·추적 동작을 확인했으며, 공개한 실행 화면에서 검출 결과를 볼 수 있습니다.',
    technologies: ['SMOKE', 'QD-3DT', 'RGB / IR', '모델 학습·미세조정'],
    references: [['SMOKE 공식 구현', 'https://github.com/lzccccc/SMOKE'], ['QD-3DT 공식 구현', 'https://github.com/SysCV/qd-3dt']]
  },
  eye: {
    details: {
    "facts": [
        [
            "데이터",
            "직접 수집한 눈 영상과 영역 라벨"
        ],
        [
            "학습 모델",
            "YOLO"
        ],
        [
            "구현 기능",
            "눈 영역 검출 및 트래킹"
        ],
        [
            "적용 범위",
            "애플리케이션 연동 및 동작 확인"
        ]
    ],
    "steps": [
        [
            "학습 데이터 구축",
            "눈 영상 데이터를 직접 수집하고 눈 영역을 라벨링했습니다. 학습용 입력과 라벨이 함께 표시된 배치 화면을 공개해 데이터 준비와 학습 작업의 일부를 확인할 수 있도록 했습니다."
        ],
        [
            "YOLO 모델 학습",
            "직접 준비한 데이터를 사용해 YOLO를 학습했습니다. 학습 데이터 구축과 모델 학습을 함께 담당하고, 학습한 모델을 눈 인식·트래킹 기능에 적용하는 작업으로 이어갔습니다."
        ],
        [
            "눈 영역 추적과 앱 연결",
            "검출 결과를 눈 영역 트래킹 기능과 연결하고 애플리케이션에 적용했습니다. 데이터 준비, 모델 학습, 검출·추적 기능, 앱 연동까지 이어지는 개발 과정을 담당했습니다."
        ]
    ],
    "checks": [
        [
            "데이터·학습",
            "눈 영역 라벨이 표시된 YOLO 학습 배치 화면을 첨부했습니다.",
            "화면 공개"
        ],
        [
            "앱 적용",
            "학습한 모델을 앱에 적용해 눈 영역 검출·트래킹 동작을 확인했습니다.",
            "동작 확인"
        ]
    ]
},
    category: '02 / VISION APPLICATION',
    media: {src:'assets/eye-training-batch.jpg', width:768, height:768, alt:'눈 영역과 라벨 박스가 표시된 YOLO 학습 배치 시각화', label:'학습 배치', caption:'YOLO 학습 배치 시각화입니다. 최종 검출 결과나 정확도 지표를 나타내는 이미지는 아닙니다.'},
    title: '눈 인식 및 트래킹',
    intro: '영상 속 눈 영역을 찾고 움직임을 추적하는 기능을 앱에 적용했습니다. 학습 데이터를 직접 수집·라벨링하고 YOLO 학습부터 트래킹 기능과의 연동까지 맡았습니다.',
    role: '데이터 구축·모델 학습·트래킹 및 앱 적용',
    purpose: '앱에서 영상 속 눈 영역을 찾고 움직임에 따라 추적하는 기능이 필요했습니다. 학습용 데이터 준비부터 모델 학습, 트래킹과 앱 연동까지 이어지는 개발 범위를 직접 맡았습니다.',
    approach: '눈 영상 데이터를 직접 수집하고 눈 영역을 라벨링해 YOLO 학습에 사용했습니다. 학습한 모델의 검출 결과를 트래킹 기능과 연결하고, 애플리케이션에서 실행되도록 적용했습니다.',
    validation: '직접 준비한 데이터로 학습한 모델을 앱에 적용해 눈 영역의 검출·트래킹 동작을 확인했습니다. 공개 이미지는 라벨과 학습 입력을 확인할 수 있는 YOLO 학습 배치입니다.',
    contributions: ['눈 인식용 데이터 직접 수집 및 라벨링', '수집 데이터를 이용한 YOLO 모델 학습', '눈 인식 및 트래킹 기능 개발', '애플리케이션 적용 및 동작 확인'],
    result: '데이터 구축부터 YOLO 학습, 눈 영역 검출·트래킹, 앱 연동으로 이어지는 흐름을 구현했습니다. 학습 모델을 애플리케이션에 적용해 동작을 확인했습니다.',
    technologies: ['YOLO', '데이터 수집', '라벨링', '앱 연동']
  },
  rppg: {
    details: {
    "facts": [
        [
            "비교 모델",
            "PhysNet · RhythmMamba · RhythmFormer"
        ],
        [
            "학습 검토",
            "초기 학습 및 PURE 데이터 미세조정"
        ],
        [
            "영상 구간",
            "5초·10초 구간별 추정 결과 비교"
        ],
        [
            "실행 환경",
            "Android ONNX Runtime · 갤럭시 · 서버 웹"
        ]
    ],
    "steps": [
        [
            "학습 조건별 모델 비교",
            "PhysNet, RhythmMamba, RhythmFormer를 대상으로 초기 학습 결과와 PURE 데이터 미세조정 결과를 검토했습니다. 모델별 결과를 정리해 짧은 얼굴 영상의 심박 추정에 적용할 조건을 살폈습니다."
        ],
        [
            "영상 길이와 연산량 검토",
            "5초·10초 영상 구간의 추정 오차와 모델 연산량을 비교했습니다. 추정 결과와 실행 부담을 함께 검토해 모바일 적용 시 확인해야 할 항목을 정리했습니다."
        ],
        [
            "모바일·서버 실행 테스트",
            "Android 앱에 ONNX Runtime을 연동해 갤럭시 기기에서 모델 실행을 테스트했습니다. 서버 웹 환경에서도 모델을 실행하고 입력 FPS 변화와 수집 중단, 결과 미표시 현상을 확인했습니다."
        ]
    ],
    "checks": [
        [
            "모델 비교",
            "3종 모델의 학습 조건과 영상 길이에 따른 추정 결과·연산량을 비교했습니다.",
            "비교 진행"
        ],
        [
            "모바일 실행",
            "Android ONNX Runtime 환경과 실제 갤럭시 기기에서 실행을 확인했습니다.",
            "동작 확인"
        ],
        [
            "입력 FPS",
            "서버 웹 테스트에서 프레임 입력 간격이 일정하지 않은 현상을 확인했습니다.",
            "후속 개선"
        ],
        [
            "영상 수집",
            "수집이 중간에 끊기는 현상을 확인해 수집 안정성 개선 항목으로 정리했습니다.",
            "후속 개선"
        ],
        [
            "결과 표시",
            "신호 품질 조건에 따라 BPM을 표시하지 않는 경우를 확인했습니다.",
            "후속 개선"
        ]
    ]
},
    category: '03 / BIOSIGNAL AI',
    media: {src:'assets/rppg-model-demo.png', width:1920, height:1080, alt:'같은 얼굴 영상 입력에 대한 PhysNet, RhythmFormer, RhythmMamba의 BPM과 파형을 비교하는 화면', label:'모델 비교 시연', caption:'모델 3종의 BPM·파형을 비교하는 시연 화면입니다. 기준 심박계 미연결 상태로, 정확도 평가 결과는 아닙니다.'},
    title: 'rPPG 기반 심박 추정',
    intro: '얼굴 영상으로 심박수를 추정하는 모델 3종을 비교하고 Android 실행까지 연결했습니다. 짧은 촬영 구간의 추정 결과와 모델 연산량을 함께 살펴 모바일 적용 조건을 검토했습니다.',
    role: '모델 비교·모바일 추론 연동·테스트',
    purpose: '별도 생체신호 센서 없이 얼굴 영상으로 심박을 추정하고, 짧은 촬영 구간에서도 사용할 수 있는지 검토해야 했습니다. 모델의 추정 결과와 함께 휴대전화에서의 실행 조건을 확인하는 것이 목표였습니다.',
    approach: 'PhysNet·RhythmMamba·RhythmFormer의 학습 결과와 PURE 데이터 미세조정 결과를 비교했습니다. 5초·10초 영상 구간의 추정 오차와 모델 연산량을 살피고, ONNX Runtime을 연동한 Android 앱과 서버 웹 환경에서 실행을 테스트했습니다.',
    validation: '입력 FPS 변화, 수집 중단, 신호 품질에 따른 결과 미표시를 후속 개선 항목으로 정리했습니다. 시연 화면의 BPM 표시와 기준 심박계를 이용한 정확도 평가는 구분합니다.',
    contributions: ['PhysNet·RhythmMamba·RhythmFormer의 학습 조건별 결과 비교', '초기 학습과 PURE 데이터 미세조정 결과 검토', '5초·10초 영상 구간의 추정 오차와 모델 연산량 비교', 'Android ONNX Runtime 환경에서 모델 실행 및 갤럭시 기기 테스트', '서버 웹 테스트에서 입력 FPS 변화, 수집 중단, 결과 미표시 현상 확인'],
    result: '모델 3종의 학습 조건·영상 길이별 비교 결과를 정리하고, 실제 Android 기기와 서버 웹 환경에서 모델 실행을 확인했습니다. 테스트에서 확인한 입력 FPS 변화, 수집 중단과 결과 미표시 현상을 바탕으로 영상 수집 안정성과 신호 품질 처리를 후속 개선 항목으로 정리했습니다.',
    technologies: ['PhysNet', 'RhythmMamba', 'RhythmFormer', 'ONNX Runtime', 'Android']
  }
};

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', '메뉴 열기');
  nav.classList.remove('is-open');
}
menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(expanded));
  menuToggle.setAttribute('aria-label', expanded ? '메뉴 닫기' : '메뉴 열기');
  nav.classList.toggle('is-open', expanded);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
window.addEventListener('resize', () => { if (window.innerWidth > 620) closeMenu(); });

const dialog = document.querySelector('#project-dialog');
let lastProjectButton = null;
function section(title, contents) {
  const el = document.createElement('section');
  el.className = 'detail-section';
  const heading = document.createElement('h3');
  heading.textContent = title;
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
function verificationTable(rows) {
  const wrapper = document.createElement('div');
  wrapper.className = 'verification-wrap';
  wrapper.tabIndex = 0;
  wrapper.setAttribute('role', 'region');
  wrapper.setAttribute('aria-label', '검증 항목과 진행 상태 표');
  const table = document.createElement('table');
  table.className = 'verification-table';
  const caption = document.createElement('caption');
  caption.textContent = '항목별 확인 내용과 진행 상태';
  const head = document.createElement('thead');
  const headRow = document.createElement('tr');
  ['항목', '확인 내용', '상태'].forEach(title => {
    const cell = document.createElement('th');
    cell.scope = 'col';
    cell.textContent = title;
    headRow.append(cell);
  });
  head.append(headRow);
  const body = document.createElement('tbody');
  rows.forEach(([name, description, status]) => {
    const row = document.createElement('tr');
    const label = document.createElement('th');
    label.scope = 'row';
    label.textContent = name;
    const detail = document.createElement('td');
    detail.textContent = description;
    const state = document.createElement('td');
    const badge = document.createElement('span');
    badge.className = status === '후속 개선' ? 'check-status is-pending' : 'check-status';
    badge.textContent = status;
    state.append(badge);
    row.append(label, detail, state);
    body.append(row);
  });
  table.append(caption, head, body);
  wrapper.append(table);
  return wrapper;
}
function openProject(id, trigger) {
  const project = projects[id];
  if (!project) return;
  lastProjectButton = trigger;
  document.querySelector('#dialog-title').textContent = project.title;
  document.querySelector('#dialog-category').textContent = project.category;
  document.querySelector('#dialog-intro').textContent = project.intro;
  const body = document.querySelector('#dialog-body');
  body.replaceChildren();
  if (project.role) {
    const role = document.createElement('div'); role.className = 'dialog-role'; role.textContent = '↳ ' + project.role; body.append(role);
  }
  if (project.media) {
    const media = project.media;
    const figure = document.createElement('figure');
    figure.className = 'project-media detail-media';
    const link = document.createElement('a');
    link.className = 'media-frame';
    link.href = media.src;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', media.label + ' 이미지 원본 크게 보기');
    const img = document.createElement('img');
    img.src = media.src;
    img.alt = media.alt;
    img.width = media.width;
    img.height = media.height;
    img.decoding = 'async';
    const zoom = document.createElement('span');
    zoom.className = 'media-zoom';
    zoom.textContent = '크게 보기 ↗';
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
  body.append(section('해결할 문제', paragraph(project.purpose)));
  if (project.details) {
    body.append(section('시스템 구성과 실행 환경', projectFacts(project.details.facts)));
    body.append(section('단계별 개발 과정', developmentSteps(project.details.steps)));
  } else {
    body.append(section('접근 방법', paragraph(project.approach)));
    const list = document.createElement('ul');
    project.contributions.forEach(text => { const li = document.createElement('li'); li.textContent = text; list.append(li); });
    body.append(section('직접 담당한 일', list));
  }
  body.append(section('구현 결과', paragraph(project.result)));
  if (project.details) body.append(section('검증 항목과 진행 상태', verificationTable(project.details.checks)));
  body.append(section('검증 범위와 남은 과제', paragraph(project.validation)));
  const chips = document.createElement('div'); chips.className = 'chips';
  project.technologies.forEach(text => { const chip = document.createElement('span'); chip.textContent = text; chips.append(chip); });
  body.append(section('사용 기술', chips));
  if (project.references) {
    const references = document.createElement('div'); references.className = 'reference-links';
    project.references.forEach(([text, href]) => { const a = document.createElement('a'); a.textContent = text + ' ↗'; a.href = href; a.target = '_blank'; a.rel = 'noopener noreferrer'; references.append(a); });
    body.append(section('참고 자료', references));
  }
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('modal-open');
  document.querySelector('.dialog-close').focus({preventScroll:true});
}
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => openProject(button.dataset.project, button)));
document.querySelectorAll('.dialog-close,.dialog-done').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); if (lastProjectButton) lastProjectButton.focus({preventScroll:true}); });

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
