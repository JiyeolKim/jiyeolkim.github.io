'use strict';

const projects = {
  vehicle: {
    category: '01 / COMPUTER VISION',
    media: {src:'assets/vehicle-ir-result.jpg', width:960, height:540, alt:'IR 도로 영상에 차량의 3D 검출 박스가 표시된 실행 화면', label:'실행 결과', caption:'IR 카메라 입력에서 실행한 3D 차량 검출·추적 시스템 화면입니다.'},
    title: 'RGB·IR 영상 기반 3D 차량 검출·추적 시스템',
    intro: 'IR 카메라 적용을 목표로 검출 모델을 교체하고, 모델 학습부터 추적 시스템 연동까지 전체 시스템의 구성과 개발을 단독으로 담당했습니다.',
    role: '전체 시스템 구성·개발 단독 담당',
    purpose: 'IR 카메라 영상에서 차량을 검출하고 추적하는 시스템이 필요했습니다. 기존 QD-3DT의 추적 구조를 활용하면서 검출 모델을 교체하는 방향으로 구현했습니다.',
    approach: 'QD-3DT의 기존 검출부를 SMOKE로 교체했습니다. RGB·IR 영상 데이터로 모델을 직접 학습하고 미세조정한 뒤, 검출 결과를 기존 추적 구조와 연동했습니다.',
    validation: 'IR 카메라 입력에서 차량 검출·추적 동작을 확인했습니다. 검출부 교체와 시스템 통합을 담당했으며, QD-3DT의 기존 추적 구조를 활용했습니다.',
    contributions: ['QD-3DT의 기존 검출부를 SMOKE로 교체', 'SMOKE 검출 모듈과 QD-3DT의 기존 추적 구조 연동', 'RGB 및 IR 영상 데이터를 활용한 모델 학습·미세조정', 'IR 카메라 영상에서 차량 검출·추적 동작 확인'],
    result: 'SMOKE를 검출부로 사용하는 QD-3DT 기반 시스템을 구성하고, IR 카메라 영상에서 차량 검출과 추적을 수행했습니다.',
    technologies: ['SMOKE', 'QD-3DT', 'RGB / IR', '모델 학습·미세조정'],
    references: [['SMOKE 공식 구현', 'https://github.com/lzccccc/SMOKE'], ['QD-3DT 공식 구현', 'https://github.com/SysCV/qd-3dt']]
  },
  eye: {
    category: '02 / VISION APPLICATION',
    media: {src:'assets/eye-training-batch.jpg', width:768, height:768, alt:'눈 영역과 라벨 박스가 표시된 YOLO 학습 배치 시각화', label:'학습 배치', caption:'YOLO 학습 배치 시각화입니다. 최종 검출 결과나 정확도 지표를 나타내는 이미지는 아닙니다.'},
    title: '눈 인식 및 트래킹',
    intro: '눈 영역을 인식하고 추적하는 기능을 개발했습니다. 데이터 수집·라벨링부터 모델 학습과 애플리케이션 적용까지 직접 수행했습니다.',
    role: '데이터 구축·모델 학습·트래킹 및 앱 적용',
    purpose: '영상 속 눈 영역을 인식하고 추적하는 기능을 애플리케이션에서 사용할 수 있도록 구현해야 했습니다.',
    approach: '학습용 데이터를 직접 수집하고 라벨링했습니다. 준비한 데이터로 YOLO 모델을 학습하고 눈 영역 트래킹 기능과 애플리케이션을 연결했습니다.',
    validation: '직접 준비한 데이터로 학습한 모델을 앱에 적용해 동작을 확인했습니다. 눈 영역의 인식·트래킹 경험이며, 시선 방향이나 주시점 추정 성능을 의미하지는 않습니다.',
    contributions: ['눈 인식용 데이터 직접 수집 및 라벨링', '수집 데이터를 이용한 YOLO 모델 학습', '눈 인식 및 트래킹 기능 개발', '애플리케이션 적용 및 동작 확인'],
    result: '직접 준비한 데이터로 모델을 학습하고, 눈 인식 기능을 애플리케이션에서 사용하는 과정을 수행했습니다.',
    technologies: ['YOLO', '데이터 수집', '라벨링', '앱 연동']
  },
  rppg: {
    category: '03 / BIOSIGNAL AI',
    media: {src:'assets/rppg-model-demo.png', width:1920, height:1080, alt:'같은 얼굴 영상 입력에 대한 PhysNet, RhythmFormer, RhythmMamba의 BPM과 파형을 비교하는 화면', label:'모델 비교 시연', caption:'모델 3종의 BPM·파형을 비교하는 시연 화면입니다. 기준 심박계 미연결 상태로, 정확도 평가 결과는 아닙니다.'},
    title: 'rPPG 기반 심박 추정',
    intro: '휴대전화 카메라로 촬영한 얼굴 영상에서 심박수를 추정하는 기능을 개발했습니다. 짧은 촬영 구간의 추정 성능과 모바일 환경의 실행 조건을 함께 검토했습니다.',
    role: '모델 비교·모바일 추론 연동·테스트',
    purpose: '짧은 얼굴 영상에서 심박을 추정하는 모델을 비교하고, 휴대전화의 입력과 추론 환경에서 실행 가능성을 검토해야 했습니다.',
    approach: 'PhysNet·RhythmMamba·RhythmFormer를 비교하고 PURE 데이터 미세조정과 5초·10초 구간별 결과를 검토했습니다. Android ONNX Runtime과 서버 웹 환경에서도 동작을 테스트했습니다.',
    validation: '입력 FPS 변화, 수집 중단, 신호 품질에 따른 결과 미표시를 후속 개선 항목으로 정리했습니다. 시연 화면의 BPM 표시와 기준 심박계를 이용한 정확도 평가는 구분합니다.',
    contributions: ['PhysNet·RhythmMamba·RhythmFormer의 학습 조건별 결과 비교', '초기 학습과 PURE 데이터 미세조정 결과 검토', '5초·10초 영상 구간의 추정 오차와 모델 연산량 비교', 'Android ONNX Runtime 환경에서 모델 실행 및 갤럭시 기기 테스트', '서버 웹 테스트에서 입력 FPS 변화, 수집 중단, 결과 미표시 현상 확인'],
    result: '모델별 비교 결과를 확보하고 모바일·서버 환경에서 동작을 확인했습니다. 영상의 시간 간격과 수집 안정성, 신호 품질에 따른 결과 출력 조건을 후속 개선 항목으로 정리했습니다.',
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
  body.append(section('해결할 문제', paragraph(project.purpose)), section('접근 방법', paragraph(project.approach)), section('구현 결과', paragraph(project.result)));
  const list = document.createElement('ul');
  project.contributions.forEach(text => { const li = document.createElement('li'); li.textContent = text; list.append(li); });
  body.append(section('직접 담당한 일', list), section('검증 범위와 남은 과제', paragraph(project.validation)));
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
