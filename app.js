'use strict';

const projects = {
  vehicle: {
    category: '01 / COMPUTER VISION',
    title: 'RGB·IR 영상 기반 3D 차량 검출·추적 시스템',
    intro: 'IR 카메라 적용을 목표로 검출 모델을 교체하고, 모델 학습부터 추적 시스템 연동까지 전체 시스템의 구성과 개발을 단독으로 담당했습니다.',
    role: '전체 시스템 구성·개발 단독 담당',
    purpose: 'IR 카메라 영상에서 차량을 검출하고 추적하는 시스템을 구현했습니다. QD-3DT의 기존 추적 구조를 활용하면서 검출부를 SMOKE로 교체했습니다.',
    contributions: ['QD-3DT의 기존 검출부를 SMOKE로 교체', 'SMOKE 검출 모듈과 QD-3DT의 기존 추적 구조 연동', 'RGB 및 IR 영상 데이터를 활용한 모델 학습·미세조정', 'IR 카메라 영상에서 차량 검출·추적 동작 확인'],
    result: 'SMOKE를 검출부로 사용하는 QD-3DT 기반 시스템을 구성하고, IR 카메라 영상에서 차량 검출과 추적을 수행했습니다.',
    technologies: ['SMOKE', 'QD-3DT', 'RGB / IR', '모델 학습·미세조정'],
    references: [['SMOKE 공식 구현', 'https://github.com/lzccccc/SMOKE'], ['QD-3DT 공식 구현', 'https://github.com/SysCV/qd-3dt']]
  },
  eye: {
    category: '02 / VISION APPLICATION',
    title: '눈 인식 및 트래킹',
    intro: '눈 영역을 인식하고 추적하는 기능을 개발했습니다. 데이터 수집·라벨링부터 모델 학습과 애플리케이션 적용까지 직접 수행했습니다.',
    purpose: '영상에서 눈 영역을 인식하고 추적하는 기능을 애플리케이션에 적용했습니다.',
    contributions: ['눈 인식용 데이터 직접 수집 및 라벨링', '수집 데이터를 이용한 YOLO 모델 학습', '눈 인식 및 트래킹 기능 개발', '애플리케이션 적용 및 동작 확인'],
    result: '직접 준비한 데이터로 모델을 학습하고, 눈 인식 기능을 애플리케이션에서 사용하는 과정을 수행했습니다.',
    technologies: ['YOLO', '데이터 수집', '라벨링', '앱 연동']
  },
  rppg: {
    category: '03 / BIOSIGNAL AI',
    title: 'rPPG 기반 심박 추정',
    intro: '휴대전화 카메라로 촬영한 얼굴 영상에서 심박수를 추정하는 기능을 개발했습니다. 짧은 촬영 구간의 추정 성능과 모바일 환경의 실행 조건을 함께 검토했습니다.',
    purpose: '심박 추정 모델의 학습 조건별 결과와 실행 비용을 비교하고, 모바일 및 서버 테스트 환경에서 동작을 확인했습니다.',
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
  body.append(section('개발 목적', paragraph(project.purpose)));
  const list = document.createElement('ul');
  project.contributions.forEach(text => { const li = document.createElement('li'); li.textContent = text; list.append(li); });
  body.append(section('담당 범위', list), section('구현 결과', paragraph(project.result)));
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
  ['projects','experience','skills'].forEach(id => observer.observe(document.getElementById(id)));
}
